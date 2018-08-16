hsDatab 
========
[![npm version](https://badge.fury.io/js/hsdatab.svg)](https://badge.fury.io/js/hsdatab) 
[![Build Status](https://travis-ci.org/HelpfulScripts/hsDatab.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsDatab)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/) 
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsdatab)

Helpful Scripts framework-independent data management functions.

**hsDatab** provides a JavaScript-based data management and query mechanism.
Data is managed in a simple in-memory database that holds data in rows of columns. 
It autodetermines the types of data held in each column, along with the 
domain range for each column of data. 
Complex filters can be applied by defining [`Conditions`](https://helpfulscripts.github.io/hsDatab/#!/api/hsDatab/hsDatab.DataFilters) using a simple query object structure.

## Installation
`npm i hsdatab`

## Data Types
supported [data types](https://helpfulscripts.github.io/hsDatab/#!/api/hsDatab/hsDatab.Data.Data.type) include
- **number**: numeric values
- **name**: nominal values, represented by arbitrary words
- **date**: date values
- **currency**: Currently supported: '$dd[,ddd]'
- **percent**: 'd%'

## Data Class
The fundamental object in this library is [`Data`](https://helpfulscripts.github.io/hsDatab/#!/api/hsDatab/hsDatab.Data.Data), 
a simple row-column based database object, 
featuring named columns, sorting, mapping and filtering functions.

## Example
see the [docs](https://helpfulscripts.github.io/hsDatab/#!/api/hsDatab/0) for a live example.

## Usage 
The following simple example illustrates some of the features: 
``` 

import { data } from 'hsdatab';

// creating the data
const colNames = ['Name', 'Value', 'Start', 'End'];
const rows = [
   ['Harry', '100', '3/1/14', '11/20/14'], 
   ['Mary', '1500', '7/1/14',  '9/30/14'],
   ['Peter', '400', '5/20/14', '4/30/15'],  
   ['Jane', '700', '11/13/14', '8/15/15']
];

// creating the data object:
const data = new Data({colNames:colNames, rows:rows});

// getting type and domain:        > Column 'Value' has type Number and domain 100,1500
console.log(`Column 'Value' has type '${data.colType('Value')}'and domain '${data.findDomain('Value')}'`);

// querying the data
const query = {Name:["Peter", "Jane"]};           // query: Name is Peter or Jane
const result = data.filter(query);                // returns new dataset with matching rows
console.log(result.getColumn('Name').join(', ')); // > Peter, Jane
```
