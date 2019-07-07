/**
 * # hsDatab
 * 
 * Helpful Scripts framework-independent data management functions. 
 * [`[Github page]`](https://github.com/HelpfulScripts/hsDatab)
 * [`[Coverage Info]`](./data/src/hsDatab/coverage/)
 * ___
 * 
 * **hsDatab** provides a JavaScript-based data management and query mechanism.
 * Data is managed in a simple in-memory database that holds data in rows of columns. 
 * It autodetermines the types of data held in each column, along with the 
 * domain range for each column of data. 
 * Complex filters can be applied by defining {@link DataFilters `Condition`}s using a simple query object structure. 
 * 
 * ## Data Types
 * supported {@link Data.Data.type data types} include
 * - **number**: numeric values
 * - **name**: nominal values, represented by arbitrary words
 * - **date**: date values
 * - **currency**: Currently supported: '$dd[,ddd]'
 * - **percent**: 'd%'
 * 
 * ## Data Class
 * The fundamental object in this library is {@link Data.Data `Data`}, 
 * a simple row-column based database object, 
 * featuring named columns, sorting, mapping and filtering functions.
 *
 * ## Example
 * <example height=500 libs={hsDatab:hsDatab}>
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
 * query = {Name:["Peter", "Jane"]};
 * 
 * const dateConvert = d => new Date(d).toDateString();
 *
 * m.mount(root, {
 *   view:() => m('', [
 *       m('h3', 'Given the data set:'),
 *       m('pre',
 *       m('table#data', [
 *           m('tr', colNames.map(n => m('th', n))),
 *           ...rows.map(row => m('tr', [
 *              m('td', row[0]),
 *              m('td', row[1]),
 *              m('td', `${row[2].getMonth()+1}/${row[2].getDate()}/${row[2].getFullYear()}`),
 *              m('td', `${row[3].getMonth()+1}/${row[3].getDate()}/${row[3].getFullYear()}`)
 *          ]))
 *       ])),
 *       m('h3', 'The column types and domains are'),
 *       m('pre', m('table', 
 *                  m('tr', m('th', 'Column'),   m('th', 'Type'),   m('th', 'Domain')),
 *                  m('tr', m('td', '"Name":'),  m('td', data.colType("Name")),   m('td', data.findDomain("Name").join(', '))),
 *                  m('tr', m('td', '"Value":'), m('td', data.colType("Value")),  m('td', data.findDomain("Value").join(' - '))),
 *                  m('tr', m('td', '"Start":'), m('td', data.colType("Start")),  m('td', data.findDomain("Start").map(dateConvert).join(' - '))),
 *                  m('tr', m('td', '"Stop":'),  m('td', data.colType("End")),    m('td', data.findDomain("End").map(dateConvert).join(' - ')))
 *       )),
 *       m('h3', 'The query:'),
 *       m('code', JSON.stringify(query)),
 *       m('h3', 'yields results with "Name"'),
 *       m('code', data.filter(query).getColumn('Name').join(', '))
 *   ])
 * });
 * </file>
 * <file name='style.css'>
 *   $exampleID { height: 600px; }
 *   #data th { width:15%; }
 *   #data  { font-size: 11pt; }
 * </file>
 * </example>     
 */

 /** */

 
