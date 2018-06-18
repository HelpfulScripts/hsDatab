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

o.beforeEach(() => {
    data = new hsdatab.Data({colNames:colNames, rows:rows});
    result = data.filter(query);
});

o.spec("Data", () => {
    o("is created with 4 rows", () => o(data.getData().length).equals(4));
    o.spec("toDataSet", () => {
        const dataLit = [{Name: 'John', Value: 2000, Start:'2/15/14', End:'11/11/15'}];
        const s = hsdatab.Data.toDataSet(dataLit);
        o('set has 1 row', () => o(s.rows.length).equals(1));
        o('set has 1st colName "Name"', () => o(s.colNames[0]).equals('Name'));
        o('set has 2nd colName "Value"', () => o(s.colNames[1]).equals('Value'));
        o('set has 3rd colName "Start"', () => o(s.colNames[2]).equals('Start'));
        o('set has 4th colName "End"', () => o(s.colNames[3]).equals('End'));
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

        o(vnode.tag).equals("div")
        o(vnode.children.length).equals(1)
        o(vnode.children[0].tag).equals("p")
        o(vnode.children[0].children).equals("Hello world")
*/