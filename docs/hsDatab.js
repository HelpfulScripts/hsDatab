this["hsDatab"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/Data.js":
/*!*********************!*\
  !*** ./bin/Data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DataFilters_1 = __webpack_require__(/*! ./DataFilters */ "./bin/DataFilters.js");
class Data {
    constructor(data) {
        this.data = [];
        this.meta = [];
        this.import(data);
    }
    static toDataSet(data, name) {
        data = data || [{}];
        const names = Object.keys(data[0]);
        const rows = data.map((r) => names.map((n) => r[n]));
        return { rows: rows, colNames: names, name: name || undefined };
    }
    getName() {
        return this.name;
    }
    import(data) {
        this.name = data.name;
        this.setData(data.rows, data.colNames);
    }
    export() {
        return {
            rows: this.getData(),
            colNames: this.colNames()
        };
    }
    getData() {
        return this.data;
    }
    getColumn(col) {
        const cn = this.colNumber(col);
        return this.data.map((row) => row[cn]);
    }
    colAdd(col) {
        let m = this.getMeta(col);
        if (m === undefined) {
            m = this.meta[col] = {};
            m.name = col;
            m.column = this.meta.length;
            this.meta.push(m);
            m.cast = false;
            m.accessed = false;
        }
        return m;
    }
    colInitialize(col, initializer) {
        const fn = typeof initializer === 'function';
        let cn = this.getMeta(col);
        if (!cn) {
            if (typeof col === 'string') {
                cn = this.colAdd(col);
            }
            else {
                throw new Error(`column ${col} does not exist in Data`);
            }
        }
        this.data.map((row, rowIndex) => row[cn.column] = fn ? initializer(row[cn.column], rowIndex, row) : initializer);
        return cn.column;
    }
    colNumber(col) {
        const m = this.getMeta(col);
        if (!m) {
            return undefined;
        }
        else {
            m.accessed = true;
            return m.column;
        }
    }
    colName(col) {
        var m = this.getMeta(col);
        if (!m) {
            return undefined;
        }
        m.accessed = true;
        return m.name;
    }
    colNames() {
        return this.meta.map((m) => m.name);
    }
    colType(col) {
        const meta = this.getMeta(col);
        return meta ? meta.types[0].type : Data.type.name;
    }
    findDomain(col, domain) {
        if (domain === undefined) {
            domain = [];
        }
        if (col === undefined) {
            domain[0] = 0;
            domain[1] = this.data.length - 1;
        }
        else {
            const c = this.colNumber(col);
            const type = this.colType(col);
            switch (type) {
                case Data.type.name:
                    this.data.forEach((r) => {
                        const nomDom = domain;
                        if (nomDom.indexOf('' + r[c]) < 0) {
                            nomDom.push('' + r[c]);
                        }
                    });
                    break;
                case Data.type.date:
                    this.data.forEach((r) => {
                        let v = this.toDate(r[c]);
                        if (domain[0] === undefined) {
                            domain[0] = v;
                        }
                        if (domain[1] === undefined) {
                            domain[1] = v;
                        }
                        if (v !== undefined && v !== null) {
                            if (v < domain[0]) {
                                domain[0] = v;
                            }
                            else if (v > domain[1]) {
                                domain[1] = v;
                            }
                        }
                    });
                    break;
                default:
                    this.data.forEach((r) => {
                        let v = parseFloat(r[c].toString());
                        if (domain[0] === undefined) {
                            domain[0] = v;
                        }
                        if (domain[1] === undefined) {
                            domain[1] = v;
                        }
                        if (v !== undefined && v !== null) {
                            if (v < domain[0]) {
                                domain[0] = v;
                            }
                            else if (v > domain[1]) {
                                domain[1] = v;
                            }
                        }
                    });
            }
        }
        return domain;
    }
    castData() {
        this.meta.forEach((c) => {
            const col = c.column;
            if (!c.cast) {
                this.data.forEach((row) => row[col] = this.castVal(c.types[0].type, row[col]));
            }
            c.cast = true;
        });
    }
    filter(condition) {
        return DataFilters_1.filter(this, condition);
    }
    sort(sortFn, col) {
        let fn = sortFn;
        if (!col) {
            this.data.sort(fn);
        }
        else {
            col = this.colNumber(col);
            if (sortFn === 'descending') {
                fn = (a, b) => (b > a) ? 1 : ((b < a) ? -1 : 0);
            }
            if (sortFn === 'ascending') {
                fn = (a, b) => (b < a) ? 1 : ((b > a) ? -1 : 0);
            }
            this.data.sort((r1, r2) => fn(r1[col], r2[col]));
        }
        return this;
    }
    map(mapFn, col) {
        const noop = (val) => val;
        const cumulate = () => {
            let sum = 0;
            return (val, i) => { sum += +val; return sum; };
        };
        function getFn() {
            let fn;
            switch (mapFn) {
                case 'cumulate':
                    fn = cumulate();
                    break;
                case 'noop':
                    fn = noop;
                    break;
                default: fn = mapFn;
            }
            return fn;
        }
        let fn = getFn();
        const c = col ? this.colNumber(col) : undefined;
        let result = new Data({
            colNames: this.colNames(),
            rows: this.data.map((row, rowIndex, rows) => {
                if (c) {
                    row[c] = fn(row[c], c, rowIndex, rows);
                }
                else {
                    rows[rowIndex] = fn(row, rowIndex, rows);
                }
                return row;
            }),
            name: this.getName()
        });
        return result;
    }
    getMeta(col) {
        if (!this.meta[col]) {
            return undefined;
        }
        this.meta[col].accessed = true;
        return this.meta[col];
    }
    setData(data, names, autoType = true) {
        this.meta = [];
        this.data = data;
        names.forEach((col) => this.colAdd(col));
        names.forEach((col) => this.findTypes(col));
        this.castData();
    }
    findTypes(col) {
        const m = this.getMeta(col);
        const types = [];
        Object.keys(Data.type).forEach((t) => {
            const ts = { type: Data.type[t], count: 0 };
            types.push(ts);
            types[Data.type[t]] = ts;
        });
        for (let v of this.allRows(col)) {
            const t = this.findType(v);
            if (t !== null) {
                types[t].count++;
            }
        }
        types.sort(function (a, b) {
            if (a.type === 'currency' && a.count > 0) {
                return -1;
            }
            if (b.type === 'currency' && b.count > 0) {
                return 1;
            }
            return b.count - a.count;
        });
        m.types = types;
        return types[0].type;
    }
    findType(val) {
        if (val && val !== '') {
            if (val instanceof Date) {
                return Data.type.date;
            }
            if (typeof val === 'number') {
                return Data.type.number;
            }
            const strVal = '' + val;
            if ('' + parseFloat(strVal) === strVal) {
                return Data.type.number;
            }
            if (strVal.startsWith('$') && !isNaN(parseFloat(strVal.slice(1)))) {
                return Data.type.currency;
            }
            if (strVal.endsWith('%') && !isNaN(parseFloat(strVal))) {
                return Data.type.percent;
            }
            if (!isNaN(this.toDate(strVal).getTime())) {
                return Data.type.date;
            }
            switch (strVal.toLowerCase()) {
                case "null": break;
                case "#ref!": break;
                default: if (val.length > 0) {
                    return Data.type.name;
                }
            }
        }
        return null;
    }
    *allRows(column) {
        const c = this.colNumber(column);
        for (let r = 0; r < this.data.length; r++) {
            yield this.data[r][c];
        }
    }
    toDate(val, limitYear = 1970) {
        let d;
        if (val instanceof Date) {
            d = val;
        }
        else {
            d = new Date(val);
            if (!isNaN(d.getTime())) {
                const r = new RegExp(`\\d\\d${d.getFullYear() % 100}`, 'g');
                if (!val.match(r)) {
                    const yr = 1900 + d.getFullYear() % 100;
                    d.setFullYear((yr < limitYear) ? yr + 100 : yr);
                }
            }
        }
        return d;
    }
    castVal(type, val) {
        let result = val;
        switch (type) {
            case Data.type.date:
                if (val instanceof Date) {
                    return val;
                }
                result = this.toDate(val);
                if (isNaN(result.getTime())) {
                    result = null;
                }
                break;
            case Data.type.percent:
                if (typeof val === 'string') {
                    const num = parseFloat(val);
                    result = val.endsWith('%') ? num / 100 : num;
                }
                else {
                    result = val;
                }
                if (isNaN(result)) {
                    result = null;
                }
                break;
            case Data.type.currency:
                result = (typeof val === 'string') ? val.replace(/[^eE\+\-\.\d]/g, '') : val;
            case Data.type.number:
                if (typeof result === 'string') {
                    result = parseFloat(result);
                }
                if (isNaN(result)) {
                    result = null;
                }
                break;
            default: result = '' + val;
        }
        return result;
    }
}
Data.type = {
    number: 'number',
    name: 'name',
    date: 'date',
    currency: 'currency',
    percent: 'percent',
};
exports.Data = Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0NBQWtEO0FBNkRsRCxNQUFhLElBQUk7SUFnQ2IsWUFBWSxJQUFhO1FBcVVqQixTQUFJLEdBQWlCLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQWlCLEVBQUUsQ0FBQztRQXJVNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBVk0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFtQixFQUFFLElBQVk7UUFDckQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsSUFBSSxJQUFFLFNBQVMsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFTTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFNTSxNQUFNLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBS00sTUFBTTtRQUNULE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSSxD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

/***/ }),

/***/ "./bin/DataFilters.js":
/*!****************************!*\
  !*** ./bin/DataFilters.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = __webpack_require__(/*! ./Data */ "./bin/Data.js");
;
;
function resolveTerminalCondition(name, val, row, colNumber) {
    const col = colNumber(name);
    const valIsFunction = (typeof val === 'function');
    const valIsArray = ((typeof val === 'object') && (val.length !== undefined));
    if (isNaN(col)) {
        console.log(`column name '${name}' cannot be resolved in terminal condition ${name}=${val}`);
        console.log(row);
        return false;
    }
    else if (valIsFunction) {
        return val(row[col], row);
    }
    else if (valIsArray) {
        return (val.length === 0) || val.some((v) => row[col] === v);
    }
    else {
        return (row[col] === val);
    }
}
function resolveCondition(condition, row, r, colNumber, and) {
    let orResult = false;
    let andResult = true;
    if (condition === undefined) {
        return true;
    }
    else if (typeof condition === 'number') {
        return (condition === r);
    }
    else if (typeof condition === 'object') {
        const mc = condition;
        if (mc.length !== undefined) {
            if (and === undefined) {
                and = false;
            }
            if (mc.length === 0) {
                return false;
            }
            return and ?
                mc.every((cd) => resolveCondition(cd, row, r, colNumber, and)) :
                mc.some((cd) => resolveCondition(cd, row, r, colNumber, and));
        }
        else {
            if (and === undefined) {
                and = true;
            }
            for (const name in condition) {
                let conditionMet = and;
                const setCond = condition;
                switch (name) {
                    case 'or':
                        conditionMet = resolveCondition(setCond.or, row, r, colNumber, false);
                        break;
                    case 'and':
                        conditionMet = resolveCondition(setCond.and, row, r, colNumber, true);
                        break;
                    case 'not':
                        conditionMet = !resolveCondition(setCond.not, row, r, colNumber);
                        break;
                    default: conditionMet = resolveTerminalCondition(name, condition[name], row, colNumber);
                }
                if (conditionMet) {
                    orResult = true;
                    if (!and) {
                        break;
                    }
                }
                else {
                    andResult = false;
                    if (and) {
                        break;
                    }
                }
            }
        }
    }
    else {
        console.error(`unrecognized condition: ${JSON.stringify(condition)}`);
        return false;
    }
    return and ? andResult : orResult;
}
function filter(data, cond) {
    const colNumber = (name) => data.colNumber(name);
    try {
        return new Data_1.Data({
            name: data.getName(),
            colNames: data.colNames(),
            rows: data.getData().filter((row, i) => {
                const keep = resolveCondition(cond, row, i, colNumber);
                return keep;
            })
        });
    }
    catch (err) {
        console.log(err);
        console.log(err.stack);
    }
}
exports.filter = filter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGF0YUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUEySEEsaUNBR2dCO0FBZWYsQ0FBQztBQVFELENBQUM7QUFJRixTQUFTLHdCQUF3QixDQUFDLElBQVcsRUFBRSxHQUFPLEVBQUUsR0FBVyxFQUFFLFNBQStCO0lBQ2hHLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLElBQUksOENBQThDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDaEI7U0FBTSxJQUFJLGFBQWEsRUFBRTtRQUV0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLFVBQVUsRUFBRTtRQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDcEU7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7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

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Data_1 = __webpack_require__(/*! ./Data */ "./bin/Data.js");
exports.Data = Data_1.Data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFXOEI7QUFMckIsc0JBQUEsSUFBSSxDQUFBIn0=

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0RhdGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vRGF0YS5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4vYmluL0RhdGFGaWx0ZXJzLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQywyQ0FBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGFBQWEsWUFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxzQkFBc0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbXlmOzs7Ozs7Ozs7Ozs7QUNqVzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUssNkNBQTZDLEtBQUssR0FBRyxJQUFJO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDBCQUEwQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMjBJOzs7Ozs7Ozs7Ozs7QUN4RzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0EsMkNBQTJDLCtMIiwiZmlsZSI6ImhzRGF0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jpbi9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGF0YUZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL0RhdGFGaWx0ZXJzXCIpO1xuY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5tZXRhID0gW107XG4gICAgICAgIHRoaXMuaW1wb3J0KGRhdGEpO1xuICAgIH1cbiAgICBzdGF0aWMgdG9EYXRhU2V0KGRhdGEsIG5hbWUpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwgW3t9XTtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKTtcbiAgICAgICAgY29uc3Qgcm93cyA9IGRhdGEubWFwKChyKSA9PiBuYW1lcy5tYXAoKG4pID0+IHJbbl0pKTtcbiAgICAgICAgcmV0dXJuIHsgcm93czogcm93cywgY29sTmFtZXM6IG5hbWVzLCBuYW1lOiBuYW1lIHx8IHVuZGVmaW5lZCB9O1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBpbXBvcnQoZGF0YSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuc2V0RGF0YShkYXRhLnJvd3MsIGRhdGEuY29sTmFtZXMpO1xuICAgIH1cbiAgICBleHBvcnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiB0aGlzLmdldERhdGEoKSxcbiAgICAgICAgICAgIGNvbE5hbWVzOiB0aGlzLmNvbE5hbWVzKClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gICAgZ2V0Q29sdW1uKGNvbCkge1xuICAgICAgICBjb25zdCBjbiA9IHRoaXMuY29sTnVtYmVyKGNvbCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubWFwKChyb3cpID0+IHJvd1tjbl0pO1xuICAgIH1cbiAgICBjb2xBZGQoY29sKSB7XG4gICAgICAgIGxldCBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmIChtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG0gPSB0aGlzLm1ldGFbY29sXSA9IHt9O1xuICAgICAgICAgICAgbS5uYW1lID0gY29sO1xuICAgICAgICAgICAgbS5jb2x1bW4gPSB0aGlzLm1ldGEubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5tZXRhLnB1c2gobSk7XG4gICAgICAgICAgICBtLmNhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIG0uYWNjZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG4gICAgY29sSW5pdGlhbGl6ZShjb2wsIGluaXRpYWxpemVyKSB7XG4gICAgICAgIGNvbnN0IGZuID0gdHlwZW9mIGluaXRpYWxpemVyID09PSAnZnVuY3Rpb24nO1xuICAgICAgICBsZXQgY24gPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgaWYgKCFjbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2wgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY24gPSB0aGlzLmNvbEFkZChjb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb2x1bW4gJHtjb2x9IGRvZXMgbm90IGV4aXN0IGluIERhdGFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGEubWFwKChyb3csIHJvd0luZGV4KSA9PiByb3dbY24uY29sdW1uXSA9IGZuID8gaW5pdGlhbGl6ZXIocm93W2NuLmNvbHVtbl0sIHJvd0luZGV4LCByb3cpIDogaW5pdGlhbGl6ZXIpO1xuICAgICAgICByZXR1cm4gY24uY29sdW1uO1xuICAgIH1cbiAgICBjb2xOdW1iZXIoY29sKSB7XG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gbS5jb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29sTmFtZShjb2wpIHtcbiAgICAgICAgdmFyIG0gPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIG0uYWNjZXNzZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbS5uYW1lO1xuICAgIH1cbiAgICBjb2xOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YS5tYXAoKG0pID0+IG0ubmFtZSk7XG4gICAgfVxuICAgIGNvbFR5cGUoY29sKSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgcmV0dXJuIG1ldGEgPyBtZXRhLnR5cGVzWzBdLnR5cGUgOiBEYXRhLnR5cGUubmFtZTtcbiAgICB9XG4gICAgZmluZERvbWFpbihjb2wsIGRvbWFpbikge1xuICAgICAgICBpZiAoZG9tYWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRvbWFpbiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZG9tYWluWzBdID0gMDtcbiAgICAgICAgICAgIGRvbWFpblsxXSA9IHRoaXMuZGF0YS5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sTnVtYmVyKGNvbCk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5jb2xUeXBlKGNvbCk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIERhdGEudHlwZS5uYW1lOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9tRG9tID0gZG9tYWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vbURvbS5pbmRleE9mKCcnICsgcltjXSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tRG9tLnB1c2goJycgKyByW2NdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRGF0YS50eXBlLmRhdGU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHRoaXMudG9EYXRlKHJbY10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IGRvbWFpblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gZG9tYWluWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gcGFyc2VGbG9hdChyW2NdLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IGRvbWFpblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gZG9tYWluWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9tYWluO1xuICAgIH1cbiAgICBjYXN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRhLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGMuY29sdW1uO1xuICAgICAgICAgICAgaWYgKCFjLmNhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93KSA9PiByb3dbY29sXSA9IHRoaXMuY2FzdFZhbChjLnR5cGVzWzBdLnR5cGUsIHJvd1tjb2xdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjLmNhc3QgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmlsdGVyKGNvbmRpdGlvbikge1xuICAgICAgICByZXR1cm4gRGF0YUZpbHRlcnNfMS5maWx0ZXIodGhpcywgY29uZGl0aW9uKTtcbiAgICB9XG4gICAgc29ydChzb3J0Rm4sIGNvbCkge1xuICAgICAgICBsZXQgZm4gPSBzb3J0Rm47XG4gICAgICAgIGlmICghY29sKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc29ydChmbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2wgPSB0aGlzLmNvbE51bWJlcihjb2wpO1xuICAgICAgICAgICAgaWYgKHNvcnRGbiA9PT0gJ2Rlc2NlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgZm4gPSAoYSwgYikgPT4gKGIgPiBhKSA/IDEgOiAoKGIgPCBhKSA/IC0xIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc29ydEZuID09PSAnYXNjZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIGZuID0gKGEsIGIpID0+IChiIDwgYSkgPyAxIDogKChiID4gYSkgPyAtMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQoKHIxLCByMikgPT4gZm4ocjFbY29sXSwgcjJbY29sXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtYXAobWFwRm4sIGNvbCkge1xuICAgICAgICBjb25zdCBub29wID0gKHZhbCkgPT4gdmFsO1xuICAgICAgICBjb25zdCBjdW11bGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgcmV0dXJuICh2YWwsIGkpID0+IHsgc3VtICs9ICt2YWw7IHJldHVybiBzdW07IH07XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGdldEZuKCkge1xuICAgICAgICAgICAgbGV0IGZuO1xuICAgICAgICAgICAgc3dpdGNoIChtYXBGbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2N1bXVsYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBjdW11bGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdub29wJzpcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBub29wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmbiA9IG1hcEZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbiA9IGdldEZuKCk7XG4gICAgICAgIGNvbnN0IGMgPSBjb2wgPyB0aGlzLmNvbE51bWJlcihjb2wpIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IERhdGEoe1xuICAgICAgICAgICAgY29sTmFtZXM6IHRoaXMuY29sTmFtZXMoKSxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuZGF0YS5tYXAoKHJvdywgcm93SW5kZXgsIHJvd3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICByb3dbY10gPSBmbihyb3dbY10sIGMsIHJvd0luZGV4LCByb3dzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3Nbcm93SW5kZXhdID0gZm4ocm93LCByb3dJbmRleCwgcm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuZ2V0TmFtZSgpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXRNZXRhKGNvbCkge1xuICAgICAgICBpZiAoIXRoaXMubWV0YVtjb2xdKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWV0YVtjb2xdLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YVtjb2xdO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEsIG5hbWVzLCBhdXRvVHlwZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5tZXRhID0gW107XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIG5hbWVzLmZvckVhY2goKGNvbCkgPT4gdGhpcy5jb2xBZGQoY29sKSk7XG4gICAgICAgIG5hbWVzLmZvckVhY2goKGNvbCkgPT4gdGhpcy5maW5kVHlwZXMoY29sKSk7XG4gICAgICAgIHRoaXMuY2FzdERhdGEoKTtcbiAgICB9XG4gICAgZmluZFR5cGVzKGNvbCkge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKERhdGEudHlwZSkuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHMgPSB7IHR5cGU6IERhdGEudHlwZVt0XSwgY291bnQ6IDAgfTtcbiAgICAgICAgICAgIHR5cGVzLnB1c2godHMpO1xuICAgICAgICAgICAgdHlwZXNbRGF0YS50eXBlW3RdXSA9IHRzO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgdiBvZiB0aGlzLmFsbFJvd3MoY29sKSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMuZmluZFR5cGUodik7XG4gICAgICAgICAgICBpZiAodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHR5cGVzW3RdLmNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHlwZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgaWYgKGEudHlwZSA9PT0gJ2N1cnJlbmN5JyAmJiBhLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiLnR5cGUgPT09ICdjdXJyZW5jeScgJiYgYi5jb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBiLmNvdW50IC0gYS5jb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIG0udHlwZXMgPSB0eXBlcztcbiAgICAgICAgcmV0dXJuIHR5cGVzWzBdLnR5cGU7XG4gICAgfVxuICAgIGZpbmRUeXBlKHZhbCkge1xuICAgICAgICBpZiAodmFsICYmIHZhbCAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEudHlwZS5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEudHlwZS5udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHJWYWwgPSAnJyArIHZhbDtcbiAgICAgICAgICAgIGlmICgnJyArIHBhcnNlRmxvYXQoc3RyVmFsKSA9PT0gc3RyVmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEudHlwZS5udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyVmFsLnN0YXJ0c1dpdGgoJyQnKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChzdHJWYWwuc2xpY2UoMSkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnR5cGUuY3VycmVuY3k7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyVmFsLmVuZHNXaXRoKCclJykgJiYgIWlzTmFOKHBhcnNlRmxvYXQoc3RyVmFsKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0YS50eXBlLnBlcmNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzTmFOKHRoaXMudG9EYXRlKHN0clZhbCkuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoc3RyVmFsLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVsbFwiOiBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiI3JlZiFcIjogYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogaWYgKHZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnR5cGUubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgICphbGxSb3dzKGNvbHVtbikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5jb2xOdW1iZXIoY29sdW1uKTtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCB0aGlzLmRhdGEubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuZGF0YVtyXVtjXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b0RhdGUodmFsLCBsaW1pdFllYXIgPSAxOTcwKSB7XG4gICAgICAgIGxldCBkO1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgZCA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihkLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gbmV3IFJlZ0V4cChgXFxcXGRcXFxcZCR7ZC5nZXRGdWxsWWVhcigpICUgMTAwfWAsICdnJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWwubWF0Y2gocikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeXIgPSAxOTAwICsgZC5nZXRGdWxsWWVhcigpICUgMTAwO1xuICAgICAgICAgICAgICAgICAgICBkLnNldEZ1bGxZZWFyKCh5ciA8IGxpbWl0WWVhcikgPyB5ciArIDEwMCA6IHlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGNhc3RWYWwodHlwZSwgdmFsKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB2YWw7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRhLnR5cGUuZGF0ZTpcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRvRGF0ZSh2YWwpO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0YS50eXBlLnBlcmNlbnQ6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsLmVuZHNXaXRoKCclJykgPyBudW0gLyAxMDAgOiBudW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRhLnR5cGUuY3VycmVuY3k6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSA/IHZhbC5yZXBsYWNlKC9bXmVFXFwrXFwtXFwuXFxkXS9nLCAnJykgOiB2YWw7XG4gICAgICAgICAgICBjYXNlIERhdGEudHlwZS5udW1iZXI6XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBhcnNlRmxvYXQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXN1bHQgPSAnJyArIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbkRhdGEudHlwZSA9IHtcbiAgICBudW1iZXI6ICdudW1iZXInLFxuICAgIG5hbWU6ICduYW1lJyxcbiAgICBkYXRlOiAnZGF0ZScsXG4gICAgY3VycmVuY3k6ICdjdXJyZW5jeScsXG4gICAgcGVyY2VudDogJ3BlcmNlbnQnLFxufTtcbmV4cG9ydHMuRGF0YSA9IERhdGE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OUVZWFJoTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJTVUVzSzBOQlFXdEVPMEZCTmtSc1JDeE5RVUZoTEVsQlFVazdTVUZuUTJJc1dVRkJXU3hKUVVGaE8xRkJjVlZxUWl4VFFVRkpMRWRCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU40UWl4VFFVRkpMRWRCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRWEpWTlVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTjBRaXhEUVVGRE8wbEJWazBzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRnRRaXhGUVVGRkxFbEJRVms3VVVGRGNrUXNTVUZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzQkNMRTFCUVUwc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVc3NSVUZCUlN4RlFVRkZMRU5CUXpWQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRia01zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVTXNTVUZCU1N4SlFVRkZMRk5CUVZNc1JVRkJSU3hEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZUVFN4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRk5UU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUzAwc1RVRkJUVHRSUVVOVUxFOUJRVTg3V1VGRFNDeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOd1FpeFJRVUZSTEVWQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRUUVVNelFpeERRVUZETzBsQlEwNHNRMEZCUXp0SlFVdE5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVUxTkxGTkJRVk1zUTBGQlF5eEhRVUZ0UWp0UlFVTm9ReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJReTlDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyNUVMRU5CUVVNN1NVRlJUU3hOUVVGTkxFTkJRVU1zUjBGQlZUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTnFRaXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJaU3hGUVVGRkxFTkJRVU03V1VGRGNFTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJTeXhIUVVGSExFTkJRVU03V1VGRFppeERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4Q0xFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVOHNTMEZCU3l4RFFVRkRPMWxCUTI1Q0xFTkJRVU1zUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMU5CUTNSQ08xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCV1Uwc1lVRkJZU3hEUVVGRExFZEJRVzFDTEVWQlFVVXNWMEZCTUVJN1VVRkRhRVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NUMEZCVHl4WFFVRlhMRXRCUVVzc1ZVRkJWU3hEUVVGRE8xRkJRemRETEVsQlFVa3NSVUZCUlN4SFFVRmpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5NTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGRk8yZENRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlFVVTdhVUpCUTJ4RU8yZENRVUZGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1ZVRkJWU3hIUVVGSExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1lVRkJSVHRUUVVOd1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlZ5eEZRVUZGTEZGQlFXVXNSVUZCUlN4RlFVRkZMRU5CUXpORExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlZTeFhRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGVkxGZEJRVmNzUTBGRGJrY3NRMEZCUXp0UlFVTkdMRTlCUVU4c1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCVVUwc1UwRkJVeXhEUVVGRExFZEJRVzFDTzFGQlEyaERMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRVVU3WVVGRGVFSTdXVUZEUkN4RFFVRkRMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU5zUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03VTBGRGJrSTdTVUZEVEN4RFFVRkRPMGxCVVUwc1QwRkJUeXhEUVVGRExFZEJRVzFDTzFGQlF6bENMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRVVU3VVVGRE4wSXNRMEZCUXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZOVFN4UlFVRlJPMUZCUTFnc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVZrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTI1RUxFTkJRVU03U1VGUlRTeFBRVUZQTEVOQlFVTXNSMEZCYlVJN1VVRkRPVUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4UFFVRlBMRWxCUVVrc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM0pFTEVOQlFVTTdTVUZUVFN4VlFVRlZMRU5CUVVNc1IwRkJiMElzUlVGQlJTeE5RVUZqTzFGQlEyeEVMRWxCUVVrc1RVRkJUU3hMUVVGSExGTkJRVk1zUlVGQlJUdFpRVUZGTEUxQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1UwRkJSVHRSUVVOb1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRia0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOa0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTTdVMEZEYkVNN1lVRkJUVHRaUVVOSUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhSUVVGUExFbEJRVWtzUlVGQlJUdG5Ra0ZEVkN4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNUdHZRa0ZEWml4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZPM2RDUVVNMVFpeE5RVUZOTEUxQlFVMHNSMEZCWVN4TlFVRk5MRU5CUVVNN2QwSkJRMmhETEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk96UkNRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVGRk8yOUNRVU01UkN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRFNDeE5RVUZOTzJkQ1FVTldMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTzI5Q1FVTm1MRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVN2QwSkJRelZDTEVsQlFVa3NRMEZCUXl4SFFVRlJMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJReTlDTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExGTkJRVk1zUlVGQlJUczBRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNsQ1FVRkZPM2RDUVVNM1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFVkJRVVU3TkVKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDVRa0ZCUlR0M1FrRkROME1zU1VGQlNTeERRVUZETEV0QlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1MwRkJSeXhKUVVGSkxFVkJRVVU3TkVKQlF6TkNMRWxCUVVrc1EwRkJReXhIUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0blEwRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPelpDUVVGRk8ybERRVU01UWl4SlFVRkpMRU5CUVVNc1IwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdaME5CUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzMlFrRkJSVHQ1UWtGRE0wTTdiMEpCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEwZ3NUVUZCVFR0blFrRkRWanR2UWtGRFNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTzNkQ1FVTTFRaXhKUVVGSkxFTkJRVU1zUjBGQlZTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdkMEpCUXpORExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkhMRk5CUVZNc1JVRkJSVHMwUWtGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zbENRVUZGTzNkQ1FVTTNReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRVZCUVVVN05FSkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQ1UWtGQlJUdDNRa0ZETjBNc1NVRkJTU3hEUVVGRExFdEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCUnl4SlFVRkpMRVZCUVVVN05FSkJRek5DTEVsQlFVa3NRMEZCUXl4SFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdG5RMEZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3paQ1FVRkZPMmxEUVVNNVFpeEpRVUZKTEVOQlFVTXNSMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBOQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czJRa0ZCUlR0NVFrRkRNME03YjBKQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRWanRUUVVOS08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWTkxGRkJRVkU3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVmtzUlVGQlJTeEZRVUZGTzFsQlF5OUNMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVTdaMEpCUTFRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNVVk3V1VGRFJDeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRlRUU3hOUVVGTkxFTkJRVU1zVTBGQmJVSTdVVUZETjBJc1QwRkJUeXh2UWtGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlowTk5MRWxCUVVrc1EwRkJReXhOUVVGdlFpeEZRVUZGTEVkQlFXOUNPMUZCUTJ4RUxFbEJRVWtzUlVGQlJTeEhRVUZYTEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzFsQlEwNHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVJN1lVRkJUVHRaUVVOSUxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRekZDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRmxCUVZrc1JVRkJSVHRuUWtGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkxMRVZCUVVVc1EwRkJTeXhGUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZCUlR0WlFVTTVSU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFhRVUZYTEVWQlFVYzdaMEpCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlN5eEZRVUZGTEVOQlFVc3NSVUZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRVVU3V1VGRE9VVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZSTEVWQlFVVXNSVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCTkVOTkxFZEJRVWNzUTBGQlF5eExRVUV5UWl4RlFVRkZMRWRCUVc5Q08xRkJRM2hFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJUeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZET1VJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEyeENMRWxCUVVrc1IwRkJSeXhIUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEU5QlFVOHNRMEZCUXl4SFFVRlZMRVZCUVVVc1EwRkJVU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hEUVVGRExFTkJRVU03VVVGRFJpeFRRVUZUTEV0QlFVczdXVUZEVml4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOUUxGRkJRVkVzUzBGQlN5eEZRVUZGTzJkQ1FVTllMRXRCUVVzc1ZVRkJWVHR2UWtGQlJTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RlFVRkZMRU5CUVVNN2IwSkJRVU1zVFVGQlRUdG5Ra0ZEZUVNc1MwRkJTeXhOUVVGTk8yOUNRVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN2IwSkJRVU1zVFVGQlRUdG5Ra0ZEYkVNc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeEhRVUZ0UWl4TFFVRkxMRU5CUVVNN1lVRkRMME03V1VGRFJDeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTmtMRU5CUVVNN1VVRkZSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVNdlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJRenRaUVVOc1FpeFJRVUZSTEVWQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVONFFpeEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZUTEVWQlFVVXNVVUZCWlN4RlFVRkZMRWxCUVZrc1JVRkJSU3hGUVVGRk8yZENRVU0xUkN4SlFVRkpMRU5CUVVNc1JVRkJSVHR2UWtGRFNDeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVZjc1JVRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTnVSRHR4UWtGQlRUdHZRa0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRV01zUlVGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzaEVPMmRDUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETzFsQlEyWXNRMEZCUXl4RFFVRkRPMWxCUTBZc1NVRkJTU3hGUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdVMEZEZEVJc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVZOUExFOUJRVThzUTBGQlF5eEhRVUZ0UWp0UlFVVXZRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzFOQlFVVTdVVUZETVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJReTlDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCVjA4c1QwRkJUeXhEUVVGRExFbEJRV01zUlVGQlJTeExRVUZqTEVWQlFVVXNVVUZCVVN4SFFVRkRMRWxCUVVrN1VVRkRla1FzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnFRaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVFzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOd1FpeERRVUZETzBsQlUwOHNVMEZCVXl4RFFVRkRMRWRCUVcxQ08xRkJRMnBETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETlVJc1RVRkJUU3hMUVVGTExFZEJRV2RDTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZSTEVWQlFVVXNSVUZCUlR0WlFVTjRReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNMVF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMllzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFNDeExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETjBJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN1owSkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yRkJRVVU3VTBGRGVFTTdVVUZEUkN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVk1zUTBGQldTeEZRVUZGTEVOQlFWazdXVUZETVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZITEZWQlFWVXNTVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRVVU3V1VGRGJFUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGSExGVkJRVlVzU1VGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0aFFVRkZPMWxCUTJwRUxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGaFR5eFJRVUZSTEVOQlFVTXNSMEZCVnp0UlFVTjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEV0QlFVY3NSVUZCUlN4RlFVRkZPMWxCUTJwQ0xFbEJRVWtzUjBGQlJ5eFpRVUZaTEVsQlFVa3NSVUZCUlR0blFrRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMkZCUVVVN1dVRkRia1FzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVVN1owSkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVGRk8xbEJSM3BFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU03V1VGRGRFSXNTVUZCU1N4RlFVRkZMRWRCUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEUxQlFVMHNSVUZCSzBJN1owSkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVGRk8xbEJReTlHTEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRoUVVGRk8xbEJRMnBITEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQllUdG5Ra0ZCUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzJGQlFVVTdXVUZEYUVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFYbENPMmRDUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1lVRkJSVHRaUVZFMVJpeFJRVUZSTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTk8yZENRVU51UWl4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTA3WjBKQlEzQkNMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRwUWtGQlJUdGhRVU40UkR0VFFVTktPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVMVBMRU5CUVVVc1QwRkJUeXhEUVVGRExFMUJRWE5DTzFGQlEzQkRMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRha01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMjVETEUxQlFVMHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjZRanRKUVVOTUxFTkJRVU03U1VGaFR5eE5RVUZOTEVOQlFVTXNSMEZCVnl4RlFVRkZMRk5CUVZNc1IwRkJReXhKUVVGSk8xRkJRM1JETEVsQlFVa3NRMEZCVFN4RFFVRkRPMUZCUTFnc1NVRkJTU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZGTzFsQlFVVXNRMEZCUXl4SFFVRlRMRWRCUVVjc1EwRkJRenRUUVVGRk8yRkJRM1JETzFsQlEwUXNRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVN1owSkJRM0pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTTFSQ3hKUVVGSkxFTkJRVlVzUjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRGVrSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRM2hETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmxDUVVOcVJEdGhRVU5LTzFOQlEwbzdVVUZEUkN4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOaUxFTkJRVU03U1VGVFR5eFBRVUZQTEVOQlFVTXNTVUZCVnl4RlFVRkZMRWRCUVZjN1VVRkRjRU1zU1VGQlNTeE5RVUZOTEVkQlFWY3NSMEZCUnl4RFFVRkRPMUZCUTNwQ0xGRkJRVkVzU1VGQlNTeEZRVUZGTzFsQlExWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWs3WjBKQlFVc3NTVUZCU1N4SFFVRkhMRmxCUVZrc1NVRkJTU3hGUVVGRk8yOUNRVUZGTEU5QlFVOHNSMEZCUnl4RFFVRkRPMmxDUVVGRk8yZENRVU5vUkN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRNVUlzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVU3YjBKQlFVVXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRwUWtGQlJUdG5Ra0ZETDBNc1RVRkJUVHRaUVVOMFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUenRuUWtGQlJTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHR2UWtGRGFrTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTTFRaXhOUVVGTkxFZEJRVmtzUjBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8ybENRVU4yUkR0eFFrRkJUVHR2UWtGRFNDeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRPMmxDUVVOb1FqdG5Ra0ZEUkN4SlFVRkpMRXRCUVVzc1EwRkJVeXhOUVVGTkxFTkJRVU1zUlVGQlJUdHZRa0ZCUlN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8ybENRVUZGTzJkQ1FVTTNReXhOUVVGTk8xbEJRM1JDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUk8yZENRVU5RTEUxQlFVMHNSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZGTlVZc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMDdaMEpCUVVjc1NVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFJRVUZSTEVWQlFVVTdiMEpCUVVVc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0cFFrRkJSVHRuUWtGRGVFVXNTVUZCU1N4TFFVRkxMRU5CUVZNc1RVRkJUU3hEUVVGRExFVkJRVVU3YjBKQlFVVXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRwUWtGQlJUdG5Ra0ZETjBNc1RVRkJUVHRaUVVOMFFpeFBRVUZQTEVOQlFVTXNRMEZCVVN4TlFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF6dFRRVU51UXp0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnBDTEVOQlFVTTdPMEZCY0dkQ1dTeFRRVUZKTEVkQlFVYzdTVUZGYWtJc1RVRkJUU3hGUVVGblFpeFJRVUZSTzBsQlJUbENMRWxCUVVrc1JVRkJhMElzVFVGQlRUdEpRVVUxUWl4SlFVRkpMRVZCUVd0Q0xFMUJRVTA3U1VGRk5VSXNVVUZCVVN4RlFVRmpMRlZCUVZVN1NVRkZhRU1zVDBGQlR5eEZRVUZsTEZOQlFWTTdRMEZGYkVNc1EwRkJRenRCUVdoQ1RpeHZRa0Y1WjBKREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERhdGFfMSA9IHJlcXVpcmUoXCIuL0RhdGFcIik7XG47XG47XG5mdW5jdGlvbiByZXNvbHZlVGVybWluYWxDb25kaXRpb24obmFtZSwgdmFsLCByb3csIGNvbE51bWJlcikge1xuICAgIGNvbnN0IGNvbCA9IGNvbE51bWJlcihuYW1lKTtcbiAgICBjb25zdCB2YWxJc0Z1bmN0aW9uID0gKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xuICAgIGNvbnN0IHZhbElzQXJyYXkgPSAoKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiAodmFsLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSk7XG4gICAgaWYgKGlzTmFOKGNvbCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNvbHVtbiBuYW1lICcke25hbWV9JyBjYW5ub3QgYmUgcmVzb2x2ZWQgaW4gdGVybWluYWwgY29uZGl0aW9uICR7bmFtZX09JHt2YWx9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsSXNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsKHJvd1tjb2xdLCByb3cpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxJc0FycmF5KSB7XG4gICAgICAgIHJldHVybiAodmFsLmxlbmd0aCA9PT0gMCkgfHwgdmFsLnNvbWUoKHYpID0+IHJvd1tjb2xdID09PSB2KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAocm93W2NvbF0gPT09IHZhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZUNvbmRpdGlvbihjb25kaXRpb24sIHJvdywgciwgY29sTnVtYmVyLCBhbmQpIHtcbiAgICBsZXQgb3JSZXN1bHQgPSBmYWxzZTtcbiAgICBsZXQgYW5kUmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoY29uZGl0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoY29uZGl0aW9uID09PSByKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbWMgPSBjb25kaXRpb247XG4gICAgICAgIGlmIChtYy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGFuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFuZCA/XG4gICAgICAgICAgICAgICAgbWMuZXZlcnkoKGNkKSA9PiByZXNvbHZlQ29uZGl0aW9uKGNkLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSkgOlxuICAgICAgICAgICAgICAgIG1jLnNvbWUoKGNkKSA9PiByZXNvbHZlQ29uZGl0aW9uKGNkLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25NZXQgPSBhbmQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0Q29uZCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLm9yLCByb3csIHIsIGNvbE51bWJlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQgPSByZXNvbHZlQ29uZGl0aW9uKHNldENvbmQuYW5kLCByb3csIHIsIGNvbE51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9ICFyZXNvbHZlQ29uZGl0aW9uKHNldENvbmQubm90LCByb3csIHIsIGNvbE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uZGl0aW9uTWV0ID0gcmVzb2x2ZVRlcm1pbmFsQ29uZGl0aW9uKG5hbWUsIGNvbmRpdGlvbltuYW1lXSwgcm93LCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uTWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmRSZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVucmVjb2duaXplZCBjb25kaXRpb246ICR7SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9uKX1gKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYW5kID8gYW5kUmVzdWx0IDogb3JSZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXIoZGF0YSwgY29uZCkge1xuICAgIGNvbnN0IGNvbE51bWJlciA9IChuYW1lKSA9PiBkYXRhLmNvbE51bWJlcihuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGFfMS5EYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY29sTmFtZXM6IGRhdGEuY29sTmFtZXMoKSxcbiAgICAgICAgICAgIHJvd3M6IGRhdGEuZ2V0RGF0YSgpLmZpbHRlcigocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2VlcCA9IHJlc29sdmVDb25kaXRpb24oY29uZCwgcm93LCBpLCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZWVwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICB9XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBZVVpwYkhSbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UkdGMFlVWnBiSFJsY25NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUV5U0VFc2FVTkJSMmRDTzBGQlpXWXNRMEZCUXp0QlFWRkVMRU5CUVVNN1FVRkpSaXhUUVVGVExIZENRVUYzUWl4RFFVRkRMRWxCUVZjc1JVRkJSU3hIUVVGUExFVkJRVVVzUjBGQlZ5eEZRVUZGTEZOQlFTdENPMGxCUTJoSExFMUJRVTBzUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNMVFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzBsQlEyeEVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVOYUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzT0VOQlFUaERMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZEdMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtJc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGFFSTdVMEZCVFN4SlFVRkpMR0ZCUVdFc1JVRkJSVHRSUVVWMFFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETjBJN1UwRkJUU3hKUVVGSkxGVkJRVlVzUlVGQlJUdFJRVVZ1UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEY0VVN1UwRkJUVHRSUVVOSUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRE4wSTdRVUZEVEN4RFFVRkRPMEZCVTBRc1UwRkJVeXhuUWtGQlowSXNRMEZCUXl4VFFVRnRRaXhGUVVGRkxFZEJRVmNzUlVGQlJTeERRVUZSTEVWQlFVVXNVMEZCSzBJc1JVRkJSU3hIUVVGWk8wbEJReTlITEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOeVFpeEpRVUZKTEZOQlFWTXNSMEZCUlN4SlFVRkpMRU5CUVVNN1NVRkZjRUlzU1VGQlNTeFRRVUZUTEV0QlFVY3NVMEZCVXl4RlFVRkZPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGQlJUdFRRVWQwUXl4SlFVRkpMRTlCUVU4c1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVUZGTEU5QlFVOHNRMEZCUXl4VFFVRlRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UzBGQlJUdFRRVWRvUlN4SlFVRkpMRTlCUVU4c1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVVZ3UXl4TlFVRk5MRVZCUVVVc1IwRkJiVUlzVTBGQlV5eERRVUZETzFGQlIzSkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVRkZMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU03WVVGQlJUdFpRVU4yUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8yRkJRVVU3V1VGRmRFTXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJRenRuUWtGRFVDeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTNSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JqdGhRVVZKTzFsQlEwUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkJSVHRaUVVOMFF5eExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRk5CUVZNc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRE8yZENRVU4yUWl4TlFVRk5MRTlCUVU4c1IwRkJiMElzVTBGQlV5eERRVUZETzJkQ1FVY3pReXhSUVVGUkxFbEJRVWtzUlVGQlJUdHZRa0ZEVml4TFFVRkxMRWxCUVVrN2QwSkJRVWNzV1VGQldTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdkMEpCUVVNc1RVRkJUVHR2UWtGRGVrWXNTMEZCU3l4TFFVRkxPM2RDUVVGRkxGbEJRVmtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzNkQ1FVRkRMRTFCUVUwN2IwSkJRM3BHTEV0QlFVc3NTMEZCU3p0M1FrRkJSU3haUVVGWkxFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03ZDBKQlFVTXNUVUZCVFR0dlFrRkRjRVlzVDBGQlR5eERRVUZETEVOQlFVa3NXVUZCV1N4SFFVRkhMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMmxDUVVNNVJqdG5Ra0ZEUkN4SlFVRkpMRmxCUVZrc1JVRkJSVHR2UWtGQlJTeFJRVUZSTEVkQlFVa3NTVUZCU1N4RFFVRkRPMjlDUVVGRkxFbEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVTdkMEpCUVVVc1RVRkJUVHR4UWtGQlJUdHBRa0ZCUXp0eFFrRkRla003YjBKQlFVVXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGQlF5eEpRVUZITEVkQlFVY3NSVUZCUnp0M1FrRkJSU3hOUVVGTk8zRkNRVUZGTzJsQ1FVRkRPMkZCUXpsRU8xTkJRMG83UzBGRFNqdFRRVUZOTzFGQlEwZ3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXd5UWtGQk1rSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVVc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGFFSTdTVUZEUkN4UFFVRlBMRWRCUVVjc1EwRkJRU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRja01zUTBGQlF6dEJRVk5FTEZOQlFXZENMRTFCUVUwc1EwRkJReXhKUVVGVExFVkJRVVVzU1VGQll6dEpRVU0xUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFbEJRVmNzUlVGQlV5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU12UkN4SlFVRkpPMUZCUTBFc1QwRkJUeXhKUVVGSkxGZEJRVWtzUTBGQlF6dFpRVU5hTEVsQlFVa3NSVUZCVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRM2hDTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRM3BDTEVsQlFVa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCVnl4RlFVRkZMRU5CUVZFc1JVRkJSU3hGUVVGRk8yZENRVU5xUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRka1FzVDBGQlR5eEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJReXhEUVVGRE8xTkJRMHdzUTBGQlF5eERRVUZETzB0QlEwNDdTVUZCUXl4UFFVRk5MRWRCUVVjc1JVRkJSVHRSUVVOVUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRha0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UzBGRE1VSTdRVUZEVEN4RFFVRkRPMEZCWmtRc2QwSkJaVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERhdGFfMSA9IHJlcXVpcmUoXCIuL0RhdGFcIik7XG5leHBvcnRzLkRhdGEgPSBEYXRhXzEuRGF0YTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3dyUWtGWE9FSTdRVUZNY2tJc2MwSkJRVUVzU1VGQlNTeERRVUZCSW4wPSJdLCJzb3VyY2VSb290IjoiIn0=