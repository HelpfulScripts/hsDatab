import { Data } from './Data';

const colNames = ['Name', 'Value', 'Start', 'End', 'Share', 'Sum', 'Invalid'];

let data:Data;
let result:Data;
const query = {Name:["Peter", "Jane"]};

describe('Data', () => {
    beforeEach(() => {
        const rows = [
            ['Harry', '400', '3/1/14', '11/20/14', '20%', '$10,666', ''], 
            ['Mary', '1500', '7/1/1969',  '9/30/69', '10%', '$16 555', '#ref!'],
            ['Peter', '100', '5/20/14', '4/30/15', '0.3', '$13000.17', undefined],  
            ['Jane', '400', '11/13/14', '8/15/15', '40%', '$15000', 'null']
          ];
        data = new Data({colNames:colNames, rows:rows});
        result = data.filter(query);
    });
    
    it('is created with 4 rows', () => expect(data.getData().length).toEqual(4));
    
    describe('DataSet constructor', () => {
        const dataLit = [
            ['Name', 'Value', 'Start', 'End', 'Share', 'Sum', 'Invalid'],
            ['Harry', '400', '3/1/14', '11/20/14', '20%', '$10,666', ''], 
            ['Mary', '1500', '7/1/1969',  '9/30/69', '10%', '$16 555', '#ref!']
        ];
        const s = new Data(dataLit).export();
        it('set has 1 row', () => expect(s.rows.length).toEqual(2));
        it('set has 1st colName "Name"', () => expect(s.colNames[0]).toEqual('Name'));
        it('set has 2nd colName "Value"', () => expect(s.colNames[1]).toEqual('Value'));
        it('set has 3rd colName "Start"', () => expect(s.colNames[2]).toEqual('Start'));
        it('set has 4th colName "End"', () => expect(s.colNames[3]).toEqual('End'));
    });
    
    describe('colAdd', () => {
        it('should reuse existing column', ()=>{
            expect(data.colAdd('Value').column).toEqual(1);
        });
        it('should add new column', ()=>{
            const cols = data.colNames().length;
            expect(data.colAdd('Value2').column).toEqual(cols);
        });
    });
    
    describe('colInitialize', () => {
        it('should initialize with constant', () => {
            data.colInitialize('Value', 15);
            expect(data.getColumn('Value')[2]).toEqual(15); 
        });
        it('should initialize new column', () => {
            const newnum = data.colInitialize('Value2', (val:number, i, row:number[])=>row[1]*2);
            expect(data.colNames()[newnum]).toEqual('Value2');
            expect(data.getColumn('Value2')[2]).toEqual(200);
        });
        it('should throw for invalid index', () => {
            expect(() => data.colInitialize(35, 15)).toThrow();
        });
    });
    
    describe('colName', () => {
        it('should return name for 2nd column', ()=>{
            expect(data.colName(2)).toEqual('Start');
        });
    });
    
    describe('colNames', () => {
        it('should return all names', ()=>{
            expect(data.colNames()).toHaveLength(7);
            expect(data.colNames()[2]).toEqual('Start');
        });
    });
    
    describe('colNumber', () => {
        it('should return valid column number for name', () => {
            expect(data.colNumber('Start')).toEqual(2);
        });
        it('should return valid column number for number', () => {
            expect(data.colNumber(2)).toEqual(2);
        });
        it('should return invalid column number for name', () => {
            expect(data.colNumber('stupid')).toEqual(undefined);
        });        
        it('should return invalid column number for number', () => {
            expect(data.colNumber(8)).toEqual(undefined);
        });        
    });
    
    describe('colType', () => {
        it('should return valid column type for date', () => {
            expect(data.colType('Start')).toEqual(Data.type.date);
        });
        it('should return valid column type for number', () => {
            expect(data.colType('Value')).toEqual(Data.type.number);
        });
        it('should return valid column type for name', () => {
            expect(data.colType('Name')).toEqual(Data.type.name);
        });
        it('should return valid column type for Share', () => {
            expect(data.colType('Share')).toEqual(Data.type.percent);
        });
        it('should return valid column type for Sum', () => {
            expect(data.colType('Sum')).toEqual(Data.type.currency);
        });
        it('should return currency value', () => {
            expect(data.colType('Sum')).toEqual(Data.type.currency);
        });
        it('should return default column type "name" for invalid', () => {
            expect(data.colType('stupid')).toEqual(Data.type.name);
        });
    });
    
    describe('get Value', () => {
        it('should return currency value', () => {
            expect(data.getColumn('Sum')[0]).toEqual(10666);
        });
    });

    describe('export', () => {
        it('should have rows and colNames', () => {
            const d = data.export();
            expect(d).toHaveProperty('rows');
            expect(d).toHaveProperty('colNames');
            expect(d.colNames).toHaveLength(7);
        });
    });
    
    describe('findDomain()', () => {
        it('should return valid initial domain for name', () => {
            expect(data.findDomain('Name')).toHaveLength(4);
            expect(data.findDomain('Name')).toContain('Harry');
        });
        it('should return valid initial domain for date', () => {
            expect(data.findDomain('Start')).toHaveLength(2);
            expect((<Date>data.findDomain('Start')[0]).getFullYear()).toBe(1969);
            expect((<Date>data.findDomain('Start')[1]).getFullYear()).toBe(2014);
            expect((<Date>data.findDomain('End')[0]).getFullYear()).toBe(2014);
            expect((<Date>data.findDomain('End')[1]).getFullYear()).toBe(2069);
        });
        it('should return valid initial domain for value', () => {
            const domain = data.findDomain('Value');
            expect(domain).toHaveLength(2);
            expect(domain).toEqual([100, 1500]);
        });
        it('should return valid accumulated domain for value', () => {
            const domain = data.findDomain('Value', [20, 1000]);
            expect(domain).toHaveLength(2);
            expect(domain).toEqual([20, 1500]);
        });
        it('should return valid domain for column indices', () => {
            const domain = data.findDomain();
            expect(domain).toHaveLength(2);
            expect(domain).toEqual([0, 3]);
        });
        it('should return valid initial domain for Share', () => {
            const domain = data.findDomain('Share');
            expect(domain).toHaveLength(2);
            expect(domain).toEqual([0.1, 0.4]);
        });
        it('should return valid initial domain for Sum', () => {
            const domain = data.findDomain('Sum');
            expect(domain).toHaveLength(2);
            expect(domain).toEqual([10666, 16555]);
        });
    });
    
    describe('getColumn', () => {
        it('should get Name column', ()=>{
            const col = data.getColumn('Name');
            expect(col).toHaveLength(4);
            expect(col[3]).toEqual('Jane');
        });
    });
    
    describe('getData', () => {
    });
    
    describe('getName', () => {
        it('should return valid column name for name', () => {
            expect(data.colName('Start')).toEqual('Start');
        });
        it('should return valid column name for number', () => {
            expect(data.colName(2)).toEqual('Start');
        });
        it('should return invalid column name', () => {
            expect(data.colName('stupid')).toEqual(undefined);
        });
    });
    
    describe('import', () => {
    });
    
    describe('map', () => {
        it('should map in array mode', () => {
            const result = data.map(((values:number[]) => { values[1] += 1000; return values; }));
            expect(result.getColumn('Value')[1]).toEqual(2500);
        });
        it('should map in column mode', () => {
            const result = data.map(((value:number) => value + 1000), 'Value');
            expect(result.getColumn('Value')[1]).toEqual(2500);
        });
        it('should accumulate', () => {
            const result = data.map('cumulate', 'Value');
            expect(result.getColumn('Value')[3]).toEqual(2400);
        });
        it('should do nothing', () => {
            const result = data.map('noop', 'Value');
            expect(result.getColumn('Value')[3]).toEqual(400);
        });
    });
    
    describe('sort', () => {
        it('should sort ascending by Name', () => {
            data.sort('ascending', 'Name');
            expect(data.getColumn('Name')[1]).toEqual('Jane');
        });
        it('should sort ascending by Value', () => {
            data.sort('ascending', 'Value');
            expect(data.getColumn('Value')[0]).toEqual(100);
        });
        it('should sort descending by Value', () => {
            data.sort('descending', 'Value');
            expect(data.getColumn('Value')[0]).toEqual(1500);
        });
        it('should sort descending by Date', () => {
            data.sort('descending', 'Start');
            expect(data.getColumn('Name')[0]).toEqual('Jane');
        });
        it('should sort Date by function', () => {
            data.sort((v,w)=>v-w, 'End');   // find earliest End
            expect(data.getColumn('Name')[0]).toEqual('Harry');
        });
        it('should sort rows by function', () => {
            data.sort((v,w)=>v[3]-w[3]);   // find earliest End
            expect(data.getColumn('Name')[0]).toEqual('Harry');
        });
    });
});


