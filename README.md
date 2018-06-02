**Helpful Scripts**
*hsdatab* provides a JavaScript-based data management and query mechanism.

Data is managed in a simple in-memory database that holds data in rows of columns. It autodetermines the types of data held in each column, along with the domain range for each column of data. A simple query language is
provided to filter matching data rows.

## Usage 
``` 

import { data } from 'hsdata';

// creating the data
const colNames = ['Name', 'Value', 'Start', 'End'];
const rows = [
   ['Harry', '100', '3/1/14', '11/20/14'], 
   ['Mary', '1500', '7/1/14',  '9/30/14'],
   ['Peter', '400', '5/20/14', '4/30/15'],  
   ['Jane', '700', '11/13/14', '8/15/15']
];
const data = new Data({colNames:colNames, rows:rows});

// querying the data
const query = {Name:["Peter", "Jane"]};           // query: Name is Peter or Jane
const result = data.filter(query);                // returns new dataset with matching rows
console.log(result.getColumn('Name').join(', ')); // > Peter, Jane
```
