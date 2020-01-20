import { Data, DataVal, DataRow } from './Data';
export declare type Condition = IndexCondition | RecursiveCondition;
export declare type IndexCondition = number;
export declare type RecursiveCondition = AndCondition | OrCondition;
export declare type OrCondition = AndCondition[] | IndexCondition[];
export declare type AndCondition = SetAndCondition | TermAndCondition;
export interface SetAndCondition {
    or?: RecursiveCondition;
    and?: RecursiveCondition;
    not?: RecursiveCondition;
}
export interface TermAndCondition {
    [colDesc: string]: DataVal | DataVal[] | TermConditionFunction;
}
export declare type TermConditionFunction = (value: DataVal, row: DataRow) => boolean;
export declare function filter(data: Data, cond: Condition): Data;
