var o = require("mithril/ospec/ospec");
import * as hsdatab     from './';

const colNames = ['Name', 'Value', 'Start', 'End'];
const rows = [
  ['Harry', '100', '3/1/14', '11/20/14'], 
  ['Mary', '1500', '7/1/14',  '9/30/14'],
  ['Peter', '400', '5/20/14', '4/30/15'],  
  ['Jane', '700', '11/13/14', '8/15/15']
];

let data:hsdatab.Data;
let result:hsdatab.Data;
const query = {Name:["Peter", "Jane"]};

beforeEach(() => {
    data = new hsdatab.Data({colNames:colNames, rows:rows});
    result = data.filter(query);
});

o.spec("Data", () => {
    it('is created with 4 rows', () => expect(data.getData().length).toEqual(4));
    o.spec("toDataSet", () => {
        const dataLit = [{Name: 'John', Value: 2000, Start:'2/15/14', End:'11/11/15'}];
        const s = hsdatab.Data.toDataSet(dataLit);
        it('set has 1 row', () => expect(s.rows.length).toEqual(1));
        it('set has 1st colName "Name"', () => expect(s.colNames[0]).toEqual('Name'));
        it('set has 2nd colName "Value"', () => expect(s.colNames[1]).toEqual('Value'));
        it('set has 3rd colName "Start"', () => expect(s.colNames[2]).toEqual('Start'));
        it('set has 4th colName "End"', () => expect(s.colNames[3]).toEqual('End'));
    });
    o.spec("colAdd", () => {
    });
    o.spec("colInitialize", () => {
    });
    o.spec("colName", () => {
    });
    o.spec("colNames", () => {
    });
    o.spec("colNumber", () => {
    });
    o.spec("colType", () => {
    });
    o.spec("export", () => {
    });
    o.spec("findDOmain()", () => {
    });
    o.spec("getColumn", () => {
    });
    o.spec("getData", () => {
    });
    o.spec("getName", () => {
    });
    o.spec("import", () => {
    });
    o.spec("map", () => {
    });
    o.spec("sort", () => {
    });
});


/*
        var vnode = MyComponent.view()

        expect(vnode.tag).toEqual("div")
        expect(vnode.children.length).toEqual(1)
        expect(vnode.children[0].tag).toEqual("p")
        expect(vnode.children[0].children).toEqual("Hello world")
*/