import * as hsdatab     from './';
import { Log }          from 'hsutil'; 
const log = Log.log;
log.level(Log.ERROR);

const colNames = ['Name', 'Value', 'Start', 'End'];
const rows = [
  ['Harry', '100', '3/1/14', '11/20/14'], 
  ['Mary', '1500', '7/1/14',  '9/30/14'],
  ['Peter', '400', '5/20/14', '4/30/15'],  
  ['Jane', '700', '11/13/14', '8/15/15']
];

const data = new hsdatab.Data({colNames:colNames, rows:rows});
const queries:Array<[any, any[]]> = [
    [ undefined,                           [0,1,2,3]],
    [ [],                                  [       ]],
    [ {},                                  [0,1,2,3]],
    [ 1,                                   [  1    ]],
    [ [1,3],                               [  1,  3]],
    [ {Name:"Jane"},                       [      3]],
    [ {1:1500},                            [  1    ]],
    [ {Name:["Peter", "Jane"]},            [    2,3]],
    [ [{Name:"Peter"}, {Value:1500}],      [  1,2  ]],
    [ {or:{Name:"Peter", Value:1500}},     [  1,2  ]],
    [ {or:[{Name:"Peter"}, {Value:1500}]}, [  1,2  ]],
    [ {Name:"Peter", Value:400},           [    2  ]],
    [ {and:{Name:"Peter", Value:400}},     [    2  ]],
    [ {and:{Name:"Peter", Value:1500}},    [       ]],
    [ {and:[{Name:"Peter"}, {Value:400}]}, [    2  ]],
    [ {and:[{Name:"Peter"}, {Value:1500}]},[       ]],
    [ {not:{Name:"Peter", Value:400}},     [0,1,  3]],
    [ {not:{Name:"Peter", Value:1500}},    [0,1,2,3]],
    [ {not:[{Name:"Peter"}, {Value:1500}]},[0,    3]],
    [ {Name:(v:any) => v.length===4},      [  1,  3]]
];

describe('Data Filters', () => {
    describe('standard tests', () => {
        it('is created with 4 rows', () => expect(data.getData().length).toEqual(4));
        queries.forEach((q, i) => {
            const r = data.filter(q[0]);
            test(`query ${i}: ${JSON.stringify(q[0])} should yield ${JSON.stringify(q[1])}`, 
                () => expect(r.getData().length).toEqual(q[1].length)
            );
        });
    });
    describe('exceptions test', () => {
        test(`invalid column name`, () => 
            expect(data.filter({Bogus:'bogus'}).getData().length).toBeFalsy()
        );
        test(`invalid condition type`, () => 
            expect(data.filter(<hsdatab.Condition>'bogus').getData().length).toBeFalsy()
        );
    });
});
