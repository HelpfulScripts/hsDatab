import { Condition } from './DataFilters';
export declare type NumRange = [number, number];
export declare type NumDomain = [number, number];
export declare type DateDomain = [Date, Date];
export declare type NameDomain = string[];
export declare type Domain = NumDomain | DateDomain | NameDomain;
export declare type ColumnReference = number | string;
export declare type DataVal = number | string | Date;
export declare type DataRow = DataVal[];
export interface DataSet {
    name?: string;
    colNames: string[];
    rows: DataRow[];
}
export declare type DataLiteralSet = Array<any>;
export declare type sortFn = (x: any, y: any) => number;
export declare type mapFn = (colVal: any, colIndex?: number, rowIndex?: number, rows?: any[][]) => any;
export declare class Data {
    static type: {
        number: string;
        name: string;
        date: string;
        currency: string;
        percent: string;
    };
    static toDataSet(data: DataLiteralSet, name?: string): DataSet;
    constructor(data?: DataSet);
    getName(): string;
    import(data: DataSet): void;
    export(): DataSet;
    getData(): DataRow[];
    getColumn(col: ColumnReference): DataVal[];
    colAdd(col: string): number;
    colInitialize(col: ColumnReference, initializer: any): void;
    colNumber(col: ColumnReference): number;
    colName(col: ColumnReference): string;
    colNames(): string[];
    colType(col: ColumnReference): string;
    findDomain(col?: ColumnReference, domain?: Domain): Domain;
    castData(): void;
    filter(condition: Condition): Data;
    sort(sortFn: string | sortFn, col?: ColumnReference): Data;
    map(col: ColumnReference | ColumnReference[], mapFn: string | mapFn): Data;
    private data;
    private meta;
    private name;
    private getMeta;
    private setData;
    private findTypes;
    private findType;
    private allRows;
    private toDate;
    private castVal;
}
