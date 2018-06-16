import { o }            from 'hslayout';
import * as hsdatab     from 'hsdatab';

const colNames = ['Name', 'Value', 'Start', 'End'];
const rows = [
  ['Harry', '100', '3/1/14', '11/20/14'], 
  ['Mary', '1500', '7/1/14',  '9/30/14'],
  ['Peter', '400', '5/20/14', '4/30/15'],  
  ['Jane', '700', '11/13/14', '8/15/15']
];

const data = new hsdatab.Data({colNames:colNames, rows:rows});

const query = {Name:["Peter", "Jane"]};
const result = data.filter(query);

o.spec("Data", () => {
    o("is created with 4 rows", () => {
        o(data.getData.length).equals(4);
    });
});
o.spec('Data Filters', () => {
    o('Query for {Name:["Peter", "Jane"]}', () => {
        o(result.getData.length).equals(2)('has two rows');
        o(result.getColumn('Name')[0]).equals('Peter')('has first row name Peter');
    });
});


/*
        var vnode = MyComponent.view()

        o(vnode.tag).equals("div")
        o(vnode.children.length).equals(1)
        o(vnode.children[0].tag).equals("p")
        o(vnode.children[0].children).equals("Hello world")
*/