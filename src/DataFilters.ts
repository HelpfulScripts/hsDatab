
/**
* Use the {@link filter `filter`} function to executes a queries on a {@link Data `Data`} object. 
* Each row in the data is checked and those for which `conditions` holds true are returned as a new `Data` object. 
* 
* # Condition construction
*  
* ### General Condition
* ```
* Condition = 
*    IndexCondition            -> conditions on the row index
* || RecursiveCondition        -> (set of) conditions on column values
* ```
* 
* ### IndexCondition
* ```
* IndexCondition =
*    rowIndex:number           -> true if row index matches
* ```
* 
* ### RecursiveCondition
* ```
* RecursiveCondition =
*    OrCondition               -> OR: true if any compound condition is true
* || AndCondition              -> AND: true if all compound conditions are true
* 
* OrCondition =                -> OR: true if
*    AndCondition[]               -> any of the AndConditions are true
* || IndexCondition[]             -> any of thr IndexConditions are true
* 
* AndCondition =               -> AND: true if
*    SetAndCondition              -> all SetAndConditions are true
* || TermAndCondition             -> or if all TermAndConditions are true
*
* SetAndCondition = {          -> AND: true if all sub-conditions are true
*    'or':  RecursiveCondition    -> true if any RecursiveCondition is true
* || 'and': RecursiveCondition    -> true if all RecursiveCondition are true
* || 'not': RecursiveCondition    -> true if the condition is false
*
* TermAndCondition = {         -> Terminal AND: true if all terminal sub-conditions are true
*    colDesc:colValue             -> true if colValue matches 
* || colDesc:[colValue, ...]      -> true if any of the colValues match
* || colDesc:function(value,row)  -> true if function returns true 
* }
* 
* colDesc = either column name or index
* ```
* 
* ### Practical Tips
* ```
*    {'or': [recurCond, ...]}    -> OR, same as [recurCond, ...]
* || {'or': {SetCond, ...}}      -> OR, same as [SetCond, ...]
* || {'and': [recurCond, ...]}   -> AND, true if all recurCond are true
* || {'and': {SetCond, ...}}     -> AND, same as {SetCond, ...}
* || {'not': {SetCond, ...}}     -> NAND: true if the SetCond are true
* || {'not': [recurCond, ...]}   -> NOR: true if any of the recurCond are true
* ```
*      
* # Example
* <example height=1000px libs={hsDatab:hsDatab}>
* <file name="script.js">
* const colNames = ['Name', 'Value', 'Start', 'End'];
* const rows = [
*   ['Harry', '100', '3/1/14', '11/20/14'], 
*   ['Mary', '1500', '7/1/14',  '9/30/14'],
*   ['Peter', '400', '5/20/14', '4/30/15'],  
*   ['Jane', '700', '11/13/14', '8/15/15']
* ]
* const data = new hsDatab.Data({colNames:colNames, rows:rows});
* 
* queries = [
*   ['0', undefined,                           'undefined query => pass all'],
*   ['1', [],                                  'empty OR:  []   => fail all'],
*   ['2', {},                                  'empty AND: {}   => pass all'],
*   ['3', 1,                                   '2nd row: pass row 1'],
*   ['4', [1,3],                               '2nd+4th: pass rows: 1 and 3'],
*   ['5', {Name:"Jane"},                       'Name is Jane'],
*   ['6', {1:1500},                            'Column 2 is 1500'],
*   ['7', {Name:["Peter", "Jane"]},            'Name is Peter or Jane'],
*   ['8', [{Name:"Peter"}, {Value:1500}],      'Name is Peter or Value is 1500'],
*   ['9', {or:{Name:"Peter", Value:1500}},     'OR:  same as 8:'],
*   ['A', {or:[{Name:"Peter"}, {Value:1500}]}, 'OR: [{Name is Peter}, {Value is 1500}]'],
*   ['B', {Name:"Peter", Value:400},           'Name is Peter and Value is 400'],
*   ['C', {and:{Name:"Peter", Value:400}},     'AND: {Name is Peter, Value is 400}'],
*   ['D', {and:{Name:"Peter", Value:1500}},    'AND: {Name is Peter, Value is 1500}'],
*   ['E', {and:[{Name:"Peter"}, {Value:400}]}, 'AND:[{Name is Peter}, {Value is 400}]'],
*   ['F', {and:[{Name:"Peter"}, {Value:1500}]},'AND:[{Name is Peter}, {Value is 1500}]'],
*   ['G', {not:{Name:"Peter", Value:400}},     'NAND: not {Name is Peter and Value is 400}'],
*   ['H', {not:{Name:"Peter", Value:1500}},    'NAND: not {Name is Peter and Value is 1500}'],
*   ['I', {not:[{Name:"Peter"}, {Value:1500}]},'NOR: not [{Name is Peter} or {Value is 1500}]'],
*   ['J', {Name:(v) => v.length===4},          'Name has 4 letters']
* ];
*
* m.mount(root, { 
*   view:() => m('', [
*       m('h3', 'Given the data set:'),
*       m('table#data', [
*           m('tr', colNames.map(n => m('th', n))),
*           ...rows.map(row => m('tr', [m('td', row[0]),m('td', row[1]),m('td', row[2].toDateString()),m('td', row[3].toDateString())]))
*       ]),
*       m('h3', 'The following queries yield:'),
*       m('table', [
*           m('tr', [m('th','#'), m('th','Query'), m('th',"Live Result, by 'Name' field")]),
*           ...queries.map(q => {
*               const result = data.filter(q[1]).getColumn('Name').join(', ');
*               return m('tr', [m('td',`${q[0]}:`), m('td',`${q[2]}`), m('td',`[ ${result} ]`)]);
*           })
*       ])
*   ])
* });
* </file>
* <file name='style.css'>
*   $exampleID { height: 600px; }
*   #data th { width:15%; }
*   table { 
*       font-size: 10pt;
*       margin-left: 10px;
*   }
* </file>
* </example>     
*/

/** */
import { Data, DataVal, DataRow } from './Data'; 
import { Log}                     from 'hsutil'; const log = new Log('DataFilters');


export type Condition = IndexCondition | RecursiveCondition;

/** true if row index matches the number(s) */
export type IndexCondition = number;

export type RecursiveCondition = AndCondition | OrCondition;
export type OrCondition = AndCondition[] | IndexCondition[];
export type AndCondition = SetAndCondition | TermAndCondition;

export interface SetAndCondition {
    or?: RecursiveCondition;
    and?:RecursiveCondition;
    not?:RecursiveCondition;
}

export interface TermAndCondition { 
    [colDesc:string]: 
        DataVal 
      | DataVal[]
      | TermConditionFunction
    ;
}

export type TermConditionFunction = (value:DataVal, row:DataRow) => boolean;

function resolveTerminalCondition(name:string, val:any, row:DataRow, colNumber:(name:string)=>number):boolean { 
    const col = colNumber(name);
    const valIsFunction = (typeof val === 'function');
    const valIsArray = ((typeof val === 'object') && (val.length!==undefined));
    if (isNaN(col)) { 
        log.warn(`column name '${name}' cannot be resolved in terminal condition ${name}=${val}`);
        log.warn(row);
        return false; // -> this condition is not met;
    } else if (valIsFunction) { 
        // query true if function evaluates to true
        return val(row[col], row);
    } else if (valIsArray) {
        // query true if empty array, or at least one c true
        return (val.length === 0) || val.some((v:any) => row[col] === v); 
    } else { // object: all conditions have to be met, unless specified as or
        return (row[col] === val); 
    }
}

/**
 * applies `condition` to a row of data and returns `true` if the row passes.
 * @param condition the complex condition to test against
 * @param r the row index in the data set
 * @param row the row values 
 * @param and 
 */
function resolveCondition(condition:Condition, row:DataRow, r:number, colNumber:(name:string)=>number, and?:boolean):boolean { 
    let orResult = false;
    let andResult= true;          
    // undefined condition is TRUE
    if (condition===undefined) { return true; }
    
    // Simple Index Condition on row index:
    else if (typeof condition === 'number') { return (condition === r); }

    // Recursive Condition - OR: [...], AND {...}: 
    else if (typeof condition === 'object') {
        // array -> or condition on a list of row indices or compound conditions
        const mc = <AndCondition[]>condition;

        // OR condition: [...], or:[], not:[]
        if (mc.length !== undefined) { 
            if (and === undefined) { and = false; }  
            if (mc.length === 0) { return false; }    // empty OR is false:	 
            // else: OR is true if any sub-condition is met    
            return and?
                mc.every((cd:AndCondition) => resolveCondition(cd, row, r, colNumber, and)) :
                mc.some((cd:AndCondition) => resolveCondition(cd, row, r, colNumber, and));
        } 
        // AND condition: {...}, and:{}, not:{}
        else { 	
            if (and === undefined) { and = true; }  
            for (const name in condition) {
                let conditionMet = and; // initialize with false for OR, and true for AND conjunction
                const setCond = <SetAndCondition>condition;
                
                // resolve SetConditions:
                switch (name) {
                    case 'or':  conditionMet = resolveCondition(setCond.or, row, r, colNumber, false); break;
                    case 'and': conditionMet = resolveCondition(setCond.and, row, r, colNumber, true); break;
                    case 'not': conditionMet = !resolveCondition(setCond.not, row, r, colNumber); break;
                    default:    conditionMet = resolveTerminalCondition(name, condition[name], row, colNumber); 
                }
                if (conditionMet) { orResult  = true;  if(!and) { break; }} // OR conjunction: exit for name loop if condition met
                             else { andResult = false; if(and)  { break; }} // AND conjunction: exit for name loop if condition not met
            }
        }    
    } else {
        console.error(`unrecognized condition: ${JSON.stringify(condition)}`);
        return false;
    }
    return and? andResult : orResult;
}

/**
 * filters a `Data` object for the given `Condition`s and returns a new `Data` object with those rows for which
 * `cond` holds true.
 * @param data the `Data` object to filter
 * @param cond the complex condition to test against
 * @return a new `Data` object with the filtered rows 
 */
export function filter(data:Data, cond:Condition):Data {
    const colNumber = (name:string):number => data.colNumber(name);
    try {
        return new Data({
            name:     data.getName(),
            colNames: data.colNames(), 
            rows:data.getData().filter((row:DataRow, i:number) => {
                const keep = resolveCondition(cond, row, i, colNumber);
                return keep;
            })
        });
    } catch(err) {
        log.warn(err);
        log.warn(err.stack);
    }
}
