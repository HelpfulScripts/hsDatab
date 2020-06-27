/**
 */

 /** */
import { Condition, filter } from './DataFilters';
import { Log }               from 'hsutil'; const log = new Log('Data');

/** defines a [min-max] range */
export type NumRange = [number, number];

/** defines a numeric domain that includes all values of a column */
export type NumDomain = [number, number];

/** defines a Date domain that includes all values of a column */
export type DateDomain = [Date, Date];

/** defines a categorical domain that includes all values of a column */
export type NameDomain = string[];

/** defines a generic domain that can be any of the typed domains. */
export type Domain = NumDomain | DateDomain | NameDomain;

/** defines a Column Reference, either as column name or index in the {@link Data.DataRow `DataRow`} array */
export type ColumnReference = number|string;

/** a generic data value type, used in the {@link Data.DataRow `DataRow`} array */
export type DataVal = number|string|Date;

/** a single row of column values */
export type DataRow = DataVal[];

/** a JSON format data set, using arrays of names and rows */
export interface DataSet {
    /** an optional name for the data set */
    name?:  string;
    /** an array of column names. Each name matches the column with the same index in DataRow */
    colNames:  string[];   
    /** rows of data */
    rows:   DataRow[];
}

/** a data set in table format. The first row contains the column names. */
export type DataTable = (string|number)[][];

interface TypeStruct { type: Type; count: number;}

interface MetaStruct {
    name:       string;         // column name
    column:     number;         // column index
    accessed:   boolean;        // has column data been accessed?
    cast:       boolean;        // has column data been cast 
    types:      TypeStruct[];   // data types, sorted by likelihood
}


export type sortFn   = (x:any, y:any) => number;
export type mapFn    = (colVal:DataVal, colIndex:number, rowIndex:number, rows:DataRow[]) => DataVal;
export type mapRowFn = (row:DataRow, rowIndex:number, rows:DataRow[]) => DataRow;
export type initFn   = (colVal: DataVal, colIndex:number, row:DataRow) => DataVal;
    
/**
 * Type definition. Can be one of 
 * - 'number'     : numeric values
 * - 'name'       : nominal values, represented by arbitrary words
 * - 'date'       : date values 
 * - 'currency'   : currency values. Currently supported are values ofg the format '$dd[,ddd]'
 * - 'percent';   : percent values: 'd%'
 */
export type Type = 'number' | 'name' | 'date' | 'currency' | 'percent';

export enum Types {
        /** numeric values */
        number =     'number',
        /** nominal values, represented by arbitrary words */
        name =       'name',
        /** date values */
        date =       'date',
        /** currency values. Currently support6ed are values ofg the format '$dd[,ddd]' */
        currency =   'currency',
        /** percent values: 'd%' */
        percent =    'percent',
} 

/**
 * @param val the string to convert to a date
 * @param limitYear the year below which the century is corrected. Defaults to 1970.
 * @returns a new Date object parsed from `str`.
 * @description returns a new Date object parsed from `str` and corrects for a difference in 
 * interpreting centuries between webkit and mozilla in converting strings to Dates:
 * The string "15/7/03" will convert to Jul 15 1903 in Mozilla and July 15 2003 in Webkit.
 * If `limitYear` is not specified this method uses 1970 as the decision date: 
 * years 00-69 will be interpreted as 2000-2069, years 70-99 as 1970-1999.
 * Specifying a century in the string leads to a correct parse, e.g. "15/7/1903"
 */
function toDate(val:DataVal, limitYear=1970):Date {
    let d:Date;
    if (val instanceof Date) { return <Date>val; }
    d = new Date(<string>val); 
    if (!isNaN(d.getTime())) {
        const r = new RegExp(`\\d\\d${d.getFullYear() % 100}`, 'g');
        if (!(<string>val).match(r)) {
            const yr = 1900 + d.getFullYear() % 100;
            d.setFullYear( (yr < limitYear)? yr+100 : yr); 
        }
    }
    return d;
}

/**
 * @param type ['date' | 'percent' | 'real' | _any_] The type to cast into. In case of _any_ - i.e. `type` 
 * does not match any of the previous keywords, no casting occurs.
 * @param sample The value to cast.
 * @returns The result of the cast. 
 * @description Casts the sample to the specified data type.
 */
function castVal(type:Type, val:DataVal):DataVal {
    let result:DataVal = val;
    switch (type) {
        case 'date':    
            if (val instanceof Date) { return val; }
            result = toDate(val);
            if (isNaN(result.getTime())) { result = null; }
            return result;
        case 'percent': 
            if (typeof val === 'string') {
                const num = parseFloat(val);
                return (<string>val).endsWith('%')? num/100 : num;
            } else {
                return val;
            }
            // if (isNaN(<number>result)) { result = null; }
            // break;
        case 'currency':
            // replace all except 'e/E', '.', '+/-' and digits
            result = (typeof val === 'string')? val.replace(/[^eE\+\-\.\d]/g, '') : val;          				
            /* falls through */
        case 'number':  
            if (typeof result === 'string') { result = parseFloat(result); }
            if (isNaN(<number>result)) { result = null; }
            return result;
        default:        return ''+val;
    }
}   

export function findDomain(data: DataRow[], col:number, type:Type, domain:Domain):Domain {
    if (domain===undefined) { domain = <Domain>[]; }
    if (col === undefined) { // use array index as domain
        domain[0] = 0;
        domain[1] = data.length-1;
    } else {
        let expand:(r:DataRow) => void;
        switch(type) {
            case Types.name: 
                expand = (r:DataRow) => (<string[]>domain).indexOf(''+r[col]) < 0?  (<string[]>domain).push(''+r[col]) : '';
                break;
            case Types.date: 
                expand = (r:DataRow) => {
                    let v:Date = toDate(r[col]);
                    if (domain[0]===undefined) { domain[0] = v; }
                    if (domain[1]===undefined) { domain[1] = v; }
                    if (v!==undefined && v!==null) {
                        if (v<domain[0]) { domain[0] = v; }
                        else if (v>domain[1]) { domain[1] = v; }
                    }
                };
                break;
            case Types.number:
            case Types.percent:
            default: 
                expand = (r:DataRow) => {
                    let v:number = parseFloat(r[col].toString());
                    if (domain[0]===undefined) { domain[0] = v; }
                    if (domain[1]===undefined) { domain[1] = v; }
                    if (v!==undefined && v!==null) {
                        if (v<domain[0]) { domain[0] = v; }
                        else if (v>domain[1]) { domain[1] = v; }
                    }
                };
        }
        data.forEach(expand);
    }
    return domain;
}

/**
 * @description determines the data type. Supported types are 
 * ```
 * 'date':    sample represents a Date, either as a Date object or a String 
 * 'number':  sample represents a number
 * 'percent': sample represents a percentage (special case of a real number)
 * 'nominal': sample represents a nominal (ordinal or categorical) value
 * ```
 * @param val the value to bve typed.
 * @returns the type ('number', 'date', 'percent', 'nominal', 'currency') corresponding to the sample
 */
function findType(val:DataVal):Type {
    if (!val || val==='') { return null; }
    if (val instanceof Date)     { return 'date'; }     // if val is already a date
    if (typeof val === 'number') { return 'number'; }   // if val is already a number
    
    // else: val is a string:
    const strVal = <string>val;
    if (''+parseFloat(strVal) === strVal)                              { return 'number'; }
    if (strVal.startsWith('$') && !isNaN(parseFloat(strVal.slice(1)))) { return 'currency'; }
    if (strVal.endsWith('%') && !isNaN(parseFloat(strVal)))            { return 'percent'; }
    if (!isNaN(toDate(strVal).getTime()))	                           { return 'date'; }

    // // european large number currency representation: '$dd[,ddd]'
    // if ((/^\$\d{0,2}((,\d\d\d)*)/g).test(val)) { 
    //     if (!isNaN(parseFloat(val.trim().replace(/[^eE\+\-\.\d]/g, '').replace(/,/g, '')))) { 
    //         return Data.type.currency; 
    //     }
    // }
    switch (strVal.toLowerCase()) {
        case "null": break;
        case "#ref!": break;
        default: if (val.length>0) { return 'name'; }
    }
    return null;
}    

/**
 * # Data
 * A simple in-memory database that holds data in rows of columns.
 * 
 */
export class Data {
    //----------------------------
    // public part
    //----------------------------
    public static type = {
        /** numeric values */
        number:     <Type>'number',
        /** nominal values, represented by arbitrary words */
        name:       <Type>'name',
        /** date values */
        date:       <Type>'date',
        /** currency values. Currently support6ed are values ofg the format '$dd[,ddd]' */
        currency:   <Type>'currency',
        /** percent values: 'd%' */
        percent:    <Type>'percent',
//        nominal:    'nominal'
    };

    constructor(dataset?:DataSet|DataTable) {
        if (dataset) { this.importData(dataset); }
    }

    /**
     * @return the `name` field for this data base, if any
     */
    public getName():string {
        return this.name;
    }

    /**
     * Imports data from an object literal or an array whos header row contains the column numbers
     * @param data the data set to import
     */
    public importData(dataset:DataSet|DataTable) {
        this.name = 'data'+(Math.round(1000*Math.random()));
        if (dataset) {
            if (dataset instanceof Array) {
                const names = <string[]>dataset[0];
                const rows = dataset.slice(1);
                this.setData(rows, names);
            } else {
                if (dataset.name) { this.name = dataset.name; }
                this.setData(dataset.rows, dataset.colNames);
            }
        }
    }

    /**
     * Exports to an object literal
     */
    public export():DataSet {
        return {
            rows: this.getData(),
            colNames:this.colNames()
        };
    }

    /**
     * returns the 2D array underlying the data base.
     */
    public getData():DataRow[] {
        return this.data;
    }

    /**
     * Returns the values in the specified column as a new array.
     * @param col the column to return.
     */
    public getColumn(col:ColumnReference): DataVal[] {
        const cn = this.colNumber(col);
        return this.data.map((row:DataRow) => row[cn]);
    }

    /**
     * adds a new column to the data set. if `newCol` already exists, 
     * the column index is returned without change.
     * @param col the name of the new column
     * @return the index for the new column
     */
    public colAdd(col:string):MetaStruct {
        let m = this.getMeta(col);
        if (m === undefined) { 
            m = this.meta[col] = <MetaStruct>{};
            m.name   = col; 
            m.column = this.meta.length;
            this.meta.push(m);      // access name by both column name and index
            m.cast 	   = false;     // has not been cast yet
            m.accessed = false;     // has not been accessed yet
        }
        return m;
    }

    /**
     * initializes the specifed column with values, adding a new column if needed. 
     * If `val`is a function, it is called as ```
     * val(colValue:DataVal, rowIndex:number, row:DataRow)
     * ```
     * @param col the column to initialize
     * @param initializer the value to initialize with, or a function whose return
     * value is used to initialize the column
     * @return the initialized column number
     */
    public colInitialize(col:ColumnReference, initializer:initFn|DataVal):number {
        const fn = typeof initializer === 'function';
        let cn:MetaStruct = this.getMeta(col);
        if (!cn) {
            if (typeof col === 'string') { cn = this.colAdd(col); }
            else { throw new Error(`column ${col} does not exist in Data`); }
        }
        this.data.map((row:DataRow, rowIndex:number) =>
            row[cn.column] = fn? (<initFn>initializer)(row[cn.column], rowIndex, row) : <DataVal>initializer
        );
        return cn.column;
    }

    /**
     * returns the column index of the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index, for which to return the index. 
     * @return the column number or `undefined`.
     */
    public colNumber(col:ColumnReference) {
        const m = this.getMeta(col);
        if (!m) { return undefined; }
        else {
            m.accessed = true; 
            return m.column; 
        }
    }
    
    /**
     * returns the column name for the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index. 
     * @return the column name or `undefined`.
     */
    public colName(col:ColumnReference):string {
        var m = this.getMeta(col);
        if (!m) { return undefined; }
        m.accessed = true; 
        return m.name; 
    }

    /**
     * returns the names for all columns. 
     * @return an array of strings with the names.
     */
    public colNames():string[] {
        return this.meta.map((m:MetaStruct) => m.name); 
    }

    /**
     * returns the column type for the specified column. 
     * `col` can be either an index or a name.
     * @param column the data column, name or index. 
     * @return the column type.
     */
    public colType(col:ColumnReference):Type { 
        const meta = this.getMeta(col);
        return meta? meta.types[0].type : 'name';
    }

    /**
     * modifies `domain` to include all values in column `col`.
     * If no `col` is specified, the range of data indexes is returned.
     * @param col optional; the column name or index 
     * @param domain optional; the Domain range to update
     * @return the updated domain
     */
    public findDomain(col?:ColumnReference, domain?:Domain):Domain {
        return findDomain(this.data, this.colNumber(col), this.colType(col), domain);
    }

    public castData() {
        this.meta.forEach((c:MetaStruct) => {
            const col = c.column;
            if (!c.cast) {
                this.data.forEach((row:DataRow) => row[col] = castVal(c.types[0].type, row[col]));
            }
            c.cast = true;
        });
    }

    /**
     * filters this data set and returns a new data set with a 
     * shallow copy of rows that pass the `condition`.
     * See {@link DataFilters DataFilters} for rules and examples on how to construct conditions.
     * @param condition filters 
     * @return a new Data object with rows that pass the filter
     */
    public filter(condition:Condition):Data {
        return filter(this, condition);
    }

    /**
     * @description Sorts the rows of values based on the result of the `sortFn`, 
     * which behaves similarly to the Array.sort method.  
     * Two modes are supported:
     * # Array Mode
     * If `col` is omitted, the column arrays are passed as samples into the `sortFn`. 
     * This allows for complex sorts, combining conditions across multiple columns.
     * ```
     * data.sort((row1, row2) => row1[5] - row2[5] );
     * ```
     * # Column mode
     * If `col` is specified, either as index or by column name, the respective column value is passed
     * into `sortFn`. This allows filtering for simple conditions.
     * **The specified column will be automatically cast prior to sorting**<br>
     * ```
     * data.sort('ascending', 'Date');
     * data.sort('decending', 'Date');
     * data.sort(function(val1, val2) { return val1 - val2; }, 'Date');
     * ```
     * @param col optional; the data column to use for sorting. 
     * @param sortFn a function to implement the conditions, 
     * follows the same specifications as the function passed to Array.sort(). 
     * Some predefined sort function can be invoked by providing a 
     * respective string instead of a function. The following functions are defined:
        ```
        ascending    sort in ascending order.
        descending   sort in decending order.
        ```
     * @return the Data object in order to allow for chaining.
     */
    public sort(sortFn:string|sortFn, col?:ColumnReference):Data {
        let fn = <sortFn>sortFn;
        if (!col) {
            this.data.sort(fn);
        } else {
            col = this.colNumber(col);
            if (sortFn === 'descending') { fn = (a:any, b:any)  => (b>a)?1:((b<a)?-1:0); }
            if (sortFn === 'ascending')  { fn = (a:any, b:any)  => (b<a)?1:((b>a)?-1:0); }
            this.data.sort((r1:any[], r2:any[]) => fn(r1[col], r2[col])); 
        }
        return this;
    }

    /** 
    *  Maps one or more columns in each rows of values based 
     * on the result of the `mapFn`, which behaves similarly to the Array.map() method.
     * Two modes are supported:
     * 
     * ## Array Mode
     * If `col` is omitted, the `mapFn` is passed the column arrays per row as parameter. 
     * This allows for complex mapping combining conditions across multiple columns.
     * ```
     * data.map(function(values){ 
     *    values[1] = values[3] * values[5]; 
     *    return values; 
     * });
     * ```
     * Be sure to return the `values` array as a result.
     * 
     * ## Column mode
     * If `col` is specified, either as index or by column name, the respective column value is passed
     * into `mapFn`, along with the row index and the entire row array. This allows for simple mapping.
     * ```
     * data.map('Price', function(value, i, values) { 
     *    return value * 2; 
     * });
     * ```
     * @param col the data column, or columns, to apply the mapping to. 
     * @param mapFn a function to implement the mapping,
     * called on each row of the data set in turn as `mapFn(val, i, c, rows)`, where
     * - `val`: the column value in the current row
     * - `c`: the column index in the current row
     * - `i`: the row index 
     * - `rows`: the rows being iterated over
`    * 
     * follows the same specifications as the function passed to Array.map().<br>
     * For column mode, some predefined map functions can be invoked by providing a 
     * respective string instead of a function. The following functions are defined:
     *  <table>
     *  <tr><td>'noop'</td><td>replace value with itself, performing no operation.</td></tr>
     *  <tr><td>'cumulate'</td><td>replace value with the cumulative sum of values up to the current element.</td></tr>
     *  </table>
     *
     * @return a new Data object containing the mapping.
     */
    public map(mapFn:string|mapFn|mapRowFn, col?:ColumnReference):Data {
        const noop = (val:any) => val;
        const cumulate = () => { 
            let sum=0; 
            return (val:number, i:number) => { sum += +val; return sum; };
        };
        function getFn():mapFn|mapRowFn {
            let fn; // define fn inside each col loop to ensure initialization
            switch (mapFn) {
                case 'cumulate': fn = cumulate(); break;
                case 'noop':     fn = noop; break;
                default:         fn = <mapFn|mapRowFn>mapFn;
            }
            return fn;
        }

        let fn = getFn(); // define fn inside each col loop to ensure initialization
        const c = col? this.colNumber(col) : undefined;
        let result = new Data({
            colNames:this.colNames(), 
            rows:this.data.map((row:any[], rowIndex:number, rows:any[][]) => { 
                if (c) {
                    row[c] = (<mapFn>fn)(row[c], c, rowIndex, rows); 
                } else {
                    rows[rowIndex] = (<mapRowFn>fn)(row, rowIndex, rows);
                }
                return row;
            }), 
            name:this.getName()
        });
        return result;
    }

    //----------------------------
    // private part
    //----------------------------
    private data: DataRow[]    = [];
    private meta: MetaStruct[] = [];
    private name: string;

    private getMeta(col:ColumnReference):MetaStruct { 
        // if (!this.meta) { this.meta = []; }
        if (!this.meta[col]) { return undefined; }
       	this.meta[col].accessed = true;
        return this.meta[col]; 
    }

    /**
     * sets `rows` as the data set. A copy of the rows array will be set.
     * @param data the data to add
     * @param names an array of names that match the columns
     * @param autoType unless set to false, the method will attempt to determine the 
     * type of data and automatically cast data points to their correct value
     */
    private setData(rows:DataRow[], names:string[], autoType=true):void {
        this.meta = [];
        this.data = rows.slice();
        if (names && names.forEach) {
            names.forEach((col:string) => this.colAdd(col));
            if (autoType) { 
                names.forEach((col:string) => this.findTypes(col)); 
                this.castData();
            }
        } else {
            log.warn(`invalid names setData:\n${log.inspect(names, {depth:5})}`);
        }
    }

    /**
     * Determines the type of data in `col`. An array of counts is created for all
     * encountered types, sorted by descending frequency. THe most likely type in position 0
     * of the array is returned.
     * @param col the index of the column to be typed. 
     * @return the most likely type of data in `col`.
     */
    private findTypes(col:ColumnReference):string {
        const m = this.getMeta(col);
        const types:TypeStruct[] = [];
        Object.keys(Data.type).forEach((t:string) => {
            const ts = { type: Data.type[t], count: 0 }; 
            types.push(ts);
            types[Data.type[t]] = ts;
        });
        for (let v of this.allRows(col)) {
            const t = findType(v);
            if (t !== null) { types[t].count++; }
        }
        types.sort(function(a:TypeStruct, b:TypeStruct) { 
            if (a.type==='currency'&&a.count>0) { return -1; }
            if (b.type==='currency'&&b.count>0) { return 1; }
            return b.count - a.count;
        });
        m.types = types;
        return types[0].type;
    }

    /**
     * A generator that provides the specified column value for each row in `Data` in sequence. 
     * @param column 
     */
    private * allRows(column:ColumnReference):Iterable<DataVal> {
        const c = this.colNumber(column);
        for (let r=0; r<this.data.length; r++) {
            yield this.data[r][c];
        }
    }  
}