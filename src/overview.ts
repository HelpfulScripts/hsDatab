/**
 * # hsdatab
 * 
 * Helpful Scripts data management functions that are framework independent. 
 * 
 * ## Data Types
 * - &nbsp; {@link Data.NumRange NumRange} defines a single [min, max] numeric range.
 * - &nbsp; {@link Data.NumDomain NumDomain} defines a numeric domain that includes all values of a column
 * - &nbsp; {@link Data.DateDomain DateDomain} defines a Date domain that includes all values of a column
 * - &nbsp; {@link Data.NameDomain NameDomain} defines a categorical domain that includes all values of a column
 * - &nbsp; {@link Data.Domain Domain} defines a generic domain that can be any of the typed domains.
 * - &nbsp; {@link Data.ColumnReference ColumnReference} defines a Column Specifier, either as column name or index in the {@link Data.DataRow `DataRow`} array 
 * - &nbsp; {@link Data.DataVal DataVal} a generic data value type, used in the {@link Data.DataRow `DataRow`} array
 * - &nbsp; {@link Data.DataRow DataRow} a single row of column values
 * 
 * ## Data Class
 * - &nbsp; {@link Data.Data Data} A simple row-column based database object, featuring named columns, sorting, mapping and filtering functions
 *
 * ## Example
 * <example height=1000px>
 * <file name="script.js">
 * const colNames = ['Name', 'Value', 'Start', 'End'];
 * const rows = [
 *   ['Harry', '100', '3/1/14', '11/20/14'], 
 *   ['Mary', '1500', '7/1/14',  '9/30/14'],
 *   ['Peter', '400', '5/20/14', '4/30/15'],  
 *   ['Jane', '700', '11/13/14', '8/15/15']
 * ]
 * const data = new hsdatab.Data({colNames:colNames, rows:rows});
 * 
 * query = {Name:["Peter", "Jane"]};
 * const result = data.filter(query).getColumn('Name').join(', ');
 *
 * m.mount(root, { 
 *   view:() => m('', [
 *       m('h3', 'Given the data set:'),
 *       m('table#data', [
 *           m('tr', colNames.map(n => m('th', n))),
 *           ...rows.map(row => m('tr', [m('td', row[0]),m('td', row[1]),m('td', row[2].toDateString()),m('td', row[3].toDateString())]))
 *       ]),
 *       m('h3', 'The query "{Name:["Peter", "Jane"]}" yields:'),
 *       m('', result)
 *   ])
 * });
 * </file>
 * <file name='style.css'>
 *   $exampleID { height: 600px; }
 *   #data th { width:15%; }
 * </file>
 * </example>     
 */

 /** */

 
