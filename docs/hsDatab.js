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

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function shortCheckSum(s) {
    var chk = 0x12345678;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
exports.shortCheckSum = shortCheckSum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQyxTQUFnQixhQUFhLENBQUMsQ0FBUTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFQRCxzQ0FPQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js":
/*!***************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    var r = '' + number;
    while (r.length < digits) {
        r = "0" + r;
    }
    return r;
}
function date(formatString, date = new Date()) {
    return (typeof formatString !== 'string' || isNaN(date.getTime())) ?
        'invalid' :
        formatString
            .replace(/%YYYY/g, '' + date.getFullYear())
            .replace(/%YY/g, '' + (date.getFullYear() % 100))
            .replace(/%MMMM/g, monthStr[date.getMonth()][1])
            .replace(/%MMM/g, monthStr[date.getMonth()][0])
            .replace(/%MM/g, formatNumber(date.getMonth() + 1, 2))
            .replace(/%M/g, '' + (date.getMonth() + 1))
            .replace(/%DDDD/g, dayStr[date.getDay()][1])
            .replace(/%DDD/g, dayStr[date.getDay()][0])
            .replace(/%DD/g, formatNumber(date.getDate(), 2))
            .replace(/%D/g, '' + date.getDate())
            .replace(/%hh/g, formatNumber(date.getHours(), 2))
            .replace(/%h/g, '' + date.getHours())
            .replace(/%mm/g, formatNumber(date.getMinutes(), 2))
            .replace(/%m/g, '' + date.getMinutes())
            .replace(/%ss/g, formatNumber(date.getSeconds(), 2))
            .replace(/%jjj/g, formatNumber(date.getMilliseconds(), 3))
            .replace(/%jj/g, formatNumber(date.getMilliseconds() / 10, 2))
            .replace(/%j/g, formatNumber(date.getMilliseconds() / 100, 1));
}
exports.date = date;
exports.ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsTUFBTSxRQUFRLEdBQUc7SUFDYixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDNUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO0NBQUMsQ0FBQztBQUc1SCxNQUFNLE1BQU0sR0FBRztJQUNYLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHM0ksU0FBUyxZQUFZLENBQUMsTUFBYSxFQUFFLE1BQWE7SUFDOUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLE1BQU0sQ0FBQztJQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1FBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FBRTtJQUMxQyxPQUFP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QUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxDQUFDO0lBQy9DLFNBQVMsRUFBTyxDQUFDLENBQVEsRUFBSSxFQUFFLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDO0lBQ2pELFNBQVMsRUFBTyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztJQUM1QyxPQUFPLEVBQVMsQ0FBQyxFQUFTLEVBQUcsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQy9DLE1BQU0sRUFBVSxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQ2xELE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Number.js":
/*!*****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Number.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function round(n, d = 0) {
    const f = Math.pow(10, d);
    const r = Math.round(n * f) / f;
    return '' + r;
}
exports.round = round;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL051bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdDLFNBQWdCLEtBQUssQ0FBQyxDQUFRLEVBQUUsQ0FBQyxHQUFDLENBQUM7SUFPaEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sRUFBRSxHQUFDLENBQUMsQ0FBQztBQUNmLENBQUM7QUFWRCxzQkFVQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(ms) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms); });
}
exports.timeout = timeout;
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
exports.delay = delay;
class Pace {
    constructor(pace = 100, maxConcurrent = -1) {
        this.maxConcurrent = -1;
        this.waitUntil = 0;
        this.waitCount = 0;
        this.beingCalled = 0;
        this.pace = pace + 5;
        this.maxConcurrent = maxConcurrent;
    }
    getWaitCount() { return this.waitCount; }
    getCallingCount() { return this.beingCalled; }
    add(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const addTime = Date.now();
            if (this.waitUntil < addTime) {
                this.waitUntil = addTime;
            }
            const diff = this.waitUntil - addTime;
            this.waitUntil += this.pace + 5;
            this.waitCount++;
            yield delay(diff)();
            yield new Promise(resolve => {
                const waitLoop = () => {
                    if (this.maxConcurrent < 0 || this.beingCalled < this.maxConcurrent) {
                        resolve();
                    }
                    else {
                        setTimeout(waitLoop, 10);
                    }
                };
                waitLoop();
            });
            this.waitCount--;
            this.beingCalled++;
            const ret = yield fn(Date.now() - addTime);
            this.beingCalled--;
            return ret;
        });
    }
}
exports.Pace = Pace;
function promiseChain(tasks, initialResult = []) {
    return tasks.reduce((chain, task) => chain.then((_results) => Promise.resolve(task(_results)).then((r) => {
        _results.push(r);
        return _results;
    })), Promise.resolve(initialResult));
}
exports.promiseChain = promiseChain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZWRQcm9taXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9UaW1lZFByb21pc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsU0FBZ0IsT0FBTyxDQUFDLEVBQVM7SUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRkQsMEJBRUM7QUF1QkQsU0FBZ0IsS0FBSyxDQUFDLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU8sRUFBYSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFORCxzQkFNQztBQWFELE1BQWEsSUFBSTtJQVliLFlBQVksSUFBSSxHQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUMsQ0FBQyxDQUFDO1FBWDlCLGtCQUFhLEdBQUssQ0FBQyxDQUFDLENBQUM7UUFFckIsY0FBUyxHQUFTLENBQUMsQ0FBQztRQUNwQixjQUFTLEdBQVMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQU8sQ0FBQyxDQUFDO1FBUXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsWUFBWSxLQUFRLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsZUFBZSxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFReEMsR0FBRyxDQUFDLEVBQWlDOztZQUN2QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBRTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzthQUFFO1lBQzNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDeEIsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO29CQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDakUsT0FBTyxFQUFFLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztxQkFDNUI7Z0JBQ0wsQ0FBQyxDQUFDO2dCQUNGLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDSjtBQWpERCxvQkFpREM7QUFXRCxTQUFnQixZQUFZLENBQUksS0FBcUMsRUFBRSxnQkFBa0IsRUFBRTtJQUN2RixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFrQixFQUFFLElBQStCLEVBQWdCLEVBQUUsQ0FFdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFHLEVBQUUsRUFBRTtRQUV0RSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDLEVBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FDakMsQ0FBQztBQUNOLENBQUM7QUFWRCxvQ0FVQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js":
/*!****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimedPromises_1 = __webpack_require__(/*! ./TimedPromises */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js");
exports.timeout = TimedPromises_1.timeout;
exports.delay = TimedPromises_1.delay;
var TimedPromises_2 = __webpack_require__(/*! ./TimedPromises */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js");
exports.Pace = TimedPromises_2.Pace;
var TimedPromises_3 = __webpack_require__(/*! ./TimedPromises */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js");
exports.promiseChain = TimedPromises_3.promiseChain;
var Checksum_1 = __webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js");
exports.shortCheckSum = Checksum_1.shortCheckSum;
var Date_1 = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js");
exports.date = Date_1.date;
exports.ms = Date_1.ms;
var Number_1 = __webpack_require__(/*! ./Number */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Number.js");
exports.round = Number_1.round;
var log_1 = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js");
exports.Log = log_1.Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFBMUMsa0NBQUEsT0FBTyxDQUFBO0FBQUUsZ0NBQUEsS0FBSyxDQUFBO0FBQ3ZCLGlEQUFtRDtBQUExQywrQkFBQSxJQUFJLENBQUE7QUFDYixpREFBbUQ7QUFBMUMsdUNBQUEsWUFBWSxDQUFBO0FBQ3JCLHVDQUE4QztBQUFyQyxtQ0FBQSxhQUFhLENBQUE7QUFDdEIsK0JBQTBDO0FBQWpDLHNCQUFBLElBQUksQ0FBQTtBQUFFLG9CQUFBLEVBQUUsQ0FBQTtBQUNqQixtQ0FBNEM7QUFBbkMseUJBQUEsS0FBSyxDQUFBO0FBQ2QsNkJBQXlDO0FBQWhDLG9CQUFBLEdBQUcsQ0FBQSJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js":
/*!**************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Date_1 = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js");
class Log {
    constructor(prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
        this.reportPrefix = prefix;
    }
    level(newLevelSym, setGlobalLevel) {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;
        let oldLevel = this.reportLevel || Log.globalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            this.reportLevel = undefined;
        }
        else if (Log.levels[newLevelSym]) {
            if (setGlobalLevel) {
                Log.globalLevel = newLevel;
            }
            else {
                this.reportLevel = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            this.out((newLevel.sym === oldLevel.sym) ? Log.DEBUG : Log.INFO, msg);
        }
        else {
            this.out(Log.ERROR, `unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }
    debug(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield this.out(Log.DEBUG, msg); });
    }
    info(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield this.out(Log.INFO, msg); });
    }
    warn(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield this.out(Log.WARN, msg); });
    }
    error(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (msg.message) {
                yield this.out(Log.ERROR, msg.message);
                yield this.out(Log.ERROR, msg.stack);
                return msg.message;
            }
            else {
                return yield this.out(Log.ERROR, msg);
            }
        });
    }
    out(lvl, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let desc = Log.levels[lvl];
            const filterLevel = this.reportLevel || Log.globalLevel;
            if (desc.importance >= filterLevel.importance) {
                const dateStr = Date_1.date(Log.dateFormat);
                let line = (typeof msg === 'string') ? msg : this.inspect(msg, 0);
                const logLine = this.makeMessage(line, lvl, dateStr, desc.desc);
                console.log(logLine);
                if (msg && msg.stack) {
                    console.log(msg.stack);
                }
                return Promise.resolve(line);
            }
            return undefined;
        });
    }
    makeMessage(line, lvl, dateStr, desc) {
        return `${dateStr} ${this.reportPrefix} ${desc} ${line}`;
    }
    format(fmtStr) {
        if (fmtStr === null) {
            Log.dateFormat = Log.defDateFormat;
        }
        else if (fmtStr) {
            Log.dateFormat = fmtStr;
        }
        return Log.dateFormat;
    }
    prefix(prf) {
        if (prf) {
            this.reportPrefix = prf;
        }
        return this.reportPrefix;
    }
    config(cfg) {
        if (cfg.format !== undefined) {
            this.format(cfg.format);
        }
        if (cfg.level !== undefined) {
            this.level(cfg.level);
        }
    }
    inspect(msg, depth = 3, indent = '&nbsp;&nbsp;&nbsp;&nbsp;') {
        function _inspect(msg, depth, level, currIndent) {
            if (msg === null) {
                return 'null';
            }
            if (msg === undefined) {
                return 'undefined';
            }
            if (typeof msg === 'function') {
                return 'function';
            }
            if (typeof msg === 'string') {
                return `'${msg}'`;
            }
            if (typeof msg === 'object') {
                if (depth < 0) {
                    return (msg.length === undefined) ? '{...}' : '[...]';
                }
                if (msg.map !== undefined) {
                    return `[${msg.map((e) => (e === undefined) ? '' : _inspect(e, depth - 1, level + 1, currIndent)).join(', ')}]`;
                }
                const [prefix, postfix] = log.getPrePostfix(indent, level, currIndent);
                return '{\n' + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(',\n') + `\n${currIndent}}`;
            }
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, depth === null ? 999 : depth, 0, '');
    }
    getPrePostfix(indent, level, currIndent) {
        return [`${currIndent}${indent}`, ''];
    }
}
exports.Log = Log;
Log.defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
Log.dateFormat = Log.defDateFormat;
Log.DEBUG = 'DEBUG';
Log.INFO = 'INFO';
Log.WARN = 'WARN';
Log.ERROR = 'ERROR';
Log.levels = {
    [Log.DEBUG]: { importance: 0, sym: Log.DEBUG, desc: 'DEBUG' },
    [Log.INFO]: { importance: 1, sym: Log.INFO, desc: 'INFO' },
    [Log.WARN]: { importance: 2, sym: Log.WARN, desc: 'WARN' },
    [Log.ERROR]: { importance: 3, sym: Log.ERROR, desc: 'ERROR' }
};
Log.log = new Log('');
Log.globalLevel = Log.levels[Log.INFO];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQStFQSxpQ0FBOEI7QUE4QjlCLE1BQWEsR0FBRztJQW1DWixZQUFZLE1BQWE7UUFIZixnQkFBVyxHQUFrQixTQUFTLENBQUM7UUFDdkMsaUJBQVksR0FBTSxFQUFFLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFvQm5ELEtBQUssQ0FBQyxXQUFtQixFQUFFLGNBQXVCO1FBQ3JELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzNCLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDdkI7YUFBTSxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDaEM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxjQUFjLEVBQUU7Z0JBQUUsR0FBRyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7YUFBRTtpQkFDL0I7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7YUFBRTtZQUNwRCxNQUFNLEdBQUcsR0FBRyxPQUFPLGNBQWMsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxjQUFjLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDO1lBQ2hKLElBQUksQ0FBQyxHQUFHLENBQUMs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

/***/ }),

/***/ "./bin/Data.js":
/*!*********************!*\
  !*** ./bin/Data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DataFilters_1 = __webpack_require__(/*! ./DataFilters */ "./bin/DataFilters.js");
const hsutil_1 = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js");
const log = new hsutil_1.Log('Data');
var Types;
(function (Types) {
    Types["number"] = "number";
    Types["name"] = "name";
    Types["date"] = "date";
    Types["currency"] = "currency";
    Types["percent"] = "percent";
})(Types = exports.Types || (exports.Types = {}));
function toDate(val, limitYear = 1970) {
    let d;
    if (val instanceof Date) {
        return val;
    }
    d = new Date(val);
    if (!isNaN(d.getTime())) {
        const r = new RegExp(`\\d\\d${d.getFullYear() % 100}`, 'g');
        if (!val.match(r)) {
            const yr = 1900 + d.getFullYear() % 100;
            d.setFullYear((yr < limitYear) ? yr + 100 : yr);
        }
    }
    return d;
}
function castVal(type, val) {
    let result = val;
    switch (type) {
        case 'date':
            if (val instanceof Date) {
                return val;
            }
            result = toDate(val);
            if (isNaN(result.getTime())) {
                result = null;
            }
            return result;
        case 'percent':
            if (typeof val === 'string') {
                const num = parseFloat(val);
                return val.endsWith('%') ? num / 100 : num;
            }
            else {
                return val;
            }
        case 'currency':
            result = (typeof val === 'string') ? val.replace(/[^eE\+\-\.\d]/g, '') : val;
        case 'number':
            if (typeof result === 'string') {
                result = parseFloat(result);
            }
            if (isNaN(result)) {
                result = null;
            }
            return result;
        default: return '' + val;
    }
}
function findDomain(data, col, type, domain) {
    if (domain === undefined) {
        domain = [];
    }
    if (col === undefined) {
        domain[0] = 0;
        domain[1] = data.length - 1;
    }
    else {
        let expand;
        switch (type) {
            case Types.name:
                expand = (r) => domain.indexOf('' + r[col]) < 0 ? domain.push('' + r[col]) : '';
                break;
            case Types.date:
                expand = (r) => {
                    let v = toDate(r[col]);
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
                };
                break;
            case Types.number:
            case Types.percent:
            default:
                expand = (r) => {
                    let v = parseFloat(r[col].toString());
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
                };
        }
        data.forEach(expand);
    }
    return domain;
}
exports.findDomain = findDomain;
function findType(val) {
    if (!val || val === '') {
        return null;
    }
    if (val instanceof Date) {
        return 'date';
    }
    if (typeof val === 'number') {
        return 'number';
    }
    const strVal = val;
    if ('' + parseFloat(strVal) === strVal) {
        return 'number';
    }
    if (strVal.startsWith('$') && !isNaN(parseFloat(strVal.slice(1)))) {
        return 'currency';
    }
    if (strVal.endsWith('%') && !isNaN(parseFloat(strVal))) {
        return 'percent';
    }
    if (!isNaN(toDate(strVal).getTime())) {
        return 'date';
    }
    switch (strVal.toLowerCase()) {
        case "null": break;
        case "#ref!": break;
        default: if (val.length > 0) {
            return 'name';
        }
    }
    return null;
}
class Data {
    constructor(dataset) {
        this.data = [];
        this.meta = [];
        if (dataset) {
            this.importData(dataset);
        }
    }
    getName() {
        return this.name;
    }
    importData(dataset) {
        this.name = 'data' + (Math.round(1000 * Math.random()));
        if (dataset) {
            if (dataset instanceof Array) {
                const names = dataset[0];
                const rows = dataset.slice(1);
                this.setData(rows, names);
            }
            else {
                if (dataset.name) {
                    this.name = dataset.name;
                }
                this.setData(dataset.rows, dataset.colNames);
            }
        }
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
        return meta ? meta.types[0].type : 'name';
    }
    findDomain(col, domain) {
        return findDomain(this.data, this.colNumber(col), this.colType(col), domain);
    }
    castData() {
        this.meta.forEach((c) => {
            const col = c.column;
            if (!c.cast) {
                this.data.forEach((row) => row[col] = castVal(c.types[0].type, row[col]));
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
    setData(rows, names, autoType = true) {
        this.meta = [];
        this.data = rows.slice();
        if (names && names.forEach) {
            names.forEach((col) => this.colAdd(col));
            if (autoType) {
                names.forEach((col) => this.findTypes(col));
                this.castData();
            }
        }
        else {
            log.warn(`invalid names setData:\n${log.inspect(names, 5)}`);
        }
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
            const t = findType(v);
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
    *allRows(column) {
        const c = this.colNumber(column);
        for (let r = 0; r < this.data.length; r++) {
            yield this.data[r][c];
        }
    }
}
exports.Data = Data;
Data.type = {
    number: 'number',
    name: 'name',
    date: 'date',
    currency: 'currency',
    percent: 'percent',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0NBQWtEO0FBQ2xELG1DQUEyQztBQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksWUFBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBaUV4RSxJQUFZLEtBV1g7QUFYRCxXQUFZLEtBQUs7SUFFVCwwQkFBcUIsQ0FBQTtJQUVyQixzQkFBbUIsQ0FBQTtJQUVuQixzQkFBbUIsQ0FBQTtJQUVuQiw4QkFBdUIsQ0FBQTtJQUV2Qiw0QkFBc0IsQ0FBQTtBQUM5QixDQUFDLEVBWFcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBV2hCO0FBYUQsU0FBUyxNQUFNLENBQUMsR0FBVyxFQUFFLFNBQVMsR0FBQyxJQUFJO0lBQ3ZDLElBQUksQ0FBTSxDQUFDO0lBQ1gsSUFBSSxHQUFHLFlBQVksSUFBSSxFQUFFO1FBQUUsT0FBYSxHQUFHLENBQUM7S0FBRTtJQUM5QyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQVMsR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUNyQixNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQVUsR0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6QixNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN4QyxDQUFDLENBQUMsV0FBVyxDQUFFLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqRDtLQUNK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

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
const hsutil_1 = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js");
const log = new hsutil_1.Log('DataFilters');
function resolveTerminalCondition(name, val, row, colNumber) {
    const col = colNumber(name);
    const valIsFunction = (typeof val === 'function');
    const valIsArray = ((typeof val === 'object') && (val.length !== undefined));
    if (isNaN(col)) {
        log.warn(`column name '${name}' cannot be resolved in terminal condition ${name}=${val}`);
        log.warn(row);
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
        log.warn(err);
        log.warn(err.stack);
    }
}
exports.filter = filter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGF0YUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUEySEEsaUNBQWdEO0FBQ2hELG1DQUFnRDtBQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksWUFBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBNEJwRixTQUFTLHdCQUF3QixDQUFDLElBQVcsRUFBRSxHQUFPLEVBQUUsR0FBVyxFQUFFLFNBQStCO0lBQ2hHLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksOENBQThDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxPQUFPLEtBQUssQ0FBQztLQUNoQjtTQUFNLElBQUksYUFBYSxFQUFFO1FBRXRCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM3QjtTQUFNLElBQUksVUFBVSxFQUFFO1FBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNwRTtTQUFNO1FBQ0gsT0FBTyxD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

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
exports.Types = Data_1.Types;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFhOEI7QUFQckIsc0JBQUEsSUFBSSxDQUFBO0FBS0osdUJBQUEsS0FBSyxDQUFBIn0=

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0RhdGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvQ2hlY2tzdW0uanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9EYXRlLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvTnVtYmVyLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvVGltZWRQcm9taXNlcy5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvbG9nLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vRGF0YS5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4vYmluL0RhdGFGaWx0ZXJzLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYSxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdTRmOzs7Ozs7Ozs7Ozs7QUNyWDlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLDJHQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLLDZDQUE2QyxLQUFLLEdBQUcsSUFBSTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG00STs7Ozs7Ozs7Ozs7O0FDeEc5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0EsMkNBQTJDLDJOIiwiZmlsZSI6ImhzRGF0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jpbi9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgdmFyIGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBzaG9ydENoZWNrU3VtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJobFkydHpkVzB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlEyaGxZMnR6ZFcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZSUXl4VFFVRm5RaXhoUVVGaExFTkJRVU1zUTBGQlVUdEpRVU51UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU03U1VGRGNrSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU51UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRekZDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU4wUXp0SlFVTkVMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRekZETEVOQlFVTTdRVUZRUkN4elEwRlBReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb250aFN0ciA9IFtcbiAgICBbJ0phbicsICdKYW51YXJ5J10sIFsnRmViJywgJ0ZlYnJ1YXJ5J10sIFsnTWFyJywgJ01hcmNoJ10sIFsnQXByJywgJ0FwcmlsJ10sIFsnTWF5JywgJ01heSddLCBbJ0p1bicsICdKdW5lJ10sXG4gICAgWydKdWwnLCAnSnVseSddLCBbJ0F1ZycsICdBdWd1c3QnXSwgWydTZXAnLCAnU2VwdGVtYmVyJ10sIFsnT2N0JywgJ09jdG9iZXInXSwgWydOb3YnLCAnTm92ZW1iZXInXSwgWydEZWMnLCAnRGVjZW1iZXInXVxuXTtcbmNvbnN0IGRheVN0ciA9IFtcbiAgICBbJ1N1bicsICdTdW5kYXknXSwgWydNb24nLCAnTW9uZGF5J10sIFsnVHVlJywgJ1R1ZXNkYXknXSwgWydXZWQnLCAnV2VkbmVzZGF5J10sIFsnVGh1JywgJ1RodXJzZGF5J10sIFsnRnJpJywgJ0ZyaWRheSddLCBbJ1NhdCcsICdTYXR1cmRheSddXG5dO1xuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZGlnaXRzKSB7XG4gICAgdmFyIHIgPSAnJyArIG51bWJlcjtcbiAgICB3aGlsZSAoci5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBkYXRlKGZvcm1hdFN0cmluZywgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmb3JtYXRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgP1xuICAgICAgICAnaW52YWxpZCcgOlxuICAgICAgICBmb3JtYXRTdHJpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVlZWS9nLCAnJyArIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVkvZywgJycgKyAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNL2csICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREQvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRC9nLCAnJyArIGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoaC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRIb3VycygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laC9nLCAnJyArIGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbW0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbS9nLCAnJyArIGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVzcy9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCwgMSkpO1xufVxuZXhwb3J0cy5kYXRlID0gZGF0ZTtcbmV4cG9ydHMubXMgPSB7XG4gICAgZnJvbU1pbnV0ZXM6IChtaW4pID0+IDEwMDAgKiA2MCAqIG1pbixcbiAgICBmcm9tSG91cnM6IChoKSA9PiAxMDAwICogNjAgKiA2MCAqIGgsXG4gICAgZnJvbURheXM6IChkKSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogZCxcbiAgICBmcm9tV2Vla3M6ICh3KSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAqIHcsXG4gICAgdG9NaW51dGVzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCksXG4gICAgdG9Ib3VyczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCksXG4gICAgdG9EYXlzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpLFxuICAgIHRvV2Vla3M6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlFWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCWlVFc1RVRkJUU3hSUVVGUkxFZEJRVWM3U1VGRFlpeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU03U1VGRE5VY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETzBOQlFVTXNRMEZCUXp0QlFVYzFTQ3hOUVVGTkxFMUJRVTBzUjBGQlJ6dEpRVU5ZTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJRenREUVVGRExFTkJRVU03UVVGSE0wa3NVMEZCVXl4WlFVRlpMRU5CUVVNc1RVRkJZU3hGUVVGRkxFMUJRV0U3U1VGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEZRVUZGTzFGQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGQlJUdEpRVU14UXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVOaUxFTkJRVU03UVVGalJDeFRRVUZuUWl4SlFVRkpMRU5CUVVNc1dVRkJiVUlzUlVGQlJTeEpRVUZKTEVkQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1NVRkRja1FzVDBGQlR5eERRVUZETEU5QlFVOHNXVUZCV1N4TFFVRkxMRkZCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEZOQlFWTXNRMEZCUVN4RFFVRkRPMUZCUTFZc1dVRkJXVHRoUVVOUUxFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dGhRVU40UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxFVkJRVVVzUjBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU01UXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWtzUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzaERMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSkxFVkJRVVVzUjBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1lVRkRia01zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJ4RUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVY3NSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dGhRVU51UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGNFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJTU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMkZCUTNSRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETVVRc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hIUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTTFSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRla1VzUTBGQlF6dEJRWFJDUkN4dlFrRnpRa003UVVGSFdTeFJRVUZCTEVWQlFVVXNSMEZCUnp0SlFVTmtMRmRCUVZjc1JVRkJTeXhEUVVGRExFZEJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhIUVVGSE8wbEJRek5ETEZOQlFWTXNSVUZCVHl4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJRenRKUVVNMVF5eFJRVUZSTEVWQlFWRXNRMEZCUXl4RFFVRlJMRVZCUVVrc1JVRkJSU3hEUVVGRExFbEJRVWtzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRE8wbEJReTlETEZOQlFWTXNSVUZCVHl4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETzBsQlEycEVMRk5CUVZNc1JVRkJUeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUTBGQlF6dEpRVU0xUXl4UFFVRlBMRVZCUVZNc1EwRkJReXhGUVVGVExFVkJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlF5OURMRTFCUVUwc1JVRkJWU3hEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUTJ4RUxFOUJRVThzUlVGQlV5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF6dERRVU4yUkN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiByb3VuZChuLCBkID0gMCkge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxMCwgZCk7XG4gICAgY29uc3QgciA9IE1hdGgucm91bmQobiAqIGYpIC8gZjtcbiAgICByZXR1cm4gJycgKyByO1xufVxuZXhwb3J0cy5yb3VuZCA9IHJvdW5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVG5WdFltVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDA1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFWZERMRk5CUVdkQ0xFdEJRVXNzUTBGQlF5eERRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkRMRU5CUVVNN1NVRlBhRU1zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkNMRTlCUVU4c1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5tTEVOQlFVTTdRVUZXUkN4elFrRlZReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMpOyB9KTtcbn1cbmV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQ7XG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmRlbGF5ID0gZGVsYXk7XG5jbGFzcyBQYWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNlID0gMTAwLCBtYXhDb25jdXJyZW50ID0gLTEpIHtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gLTE7XG4gICAgICAgIHRoaXMud2FpdFVudGlsID0gMDtcbiAgICAgICAgdGhpcy53YWl0Q291bnQgPSAwO1xuICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkID0gMDtcbiAgICAgICAgdGhpcy5wYWNlID0gcGFjZSArIDU7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgfVxuICAgIGdldFdhaXRDb3VudCgpIHsgcmV0dXJuIHRoaXMud2FpdENvdW50OyB9XG4gICAgZ2V0Q2FsbGluZ0NvdW50KCkgeyByZXR1cm4gdGhpcy5iZWluZ0NhbGxlZDsgfVxuICAgIGFkZChmbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0VW50aWwgPCBhZGRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0VW50aWwgPSBhZGRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMud2FpdFVudGlsIC0gYWRkVGltZTtcbiAgICAgICAgICAgIHRoaXMud2FpdFVudGlsICs9IHRoaXMucGFjZSArIDU7XG4gICAgICAgICAgICB0aGlzLndhaXRDb3VudCsrO1xuICAgICAgICAgICAgeWllbGQgZGVsYXkoZGlmZikoKTtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRMb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhDb25jdXJyZW50IDwgMCB8fCB0aGlzLmJlaW5nQ2FsbGVkIDwgdGhpcy5tYXhDb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRMb29wLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdhaXRMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud2FpdENvdW50LS07XG4gICAgICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkKys7XG4gICAgICAgICAgICBjb25zdCByZXQgPSB5aWVsZCBmbihEYXRlLm5vdygpIC0gYWRkVGltZSk7XG4gICAgICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkLS07XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlBhY2UgPSBQYWNlO1xuZnVuY3Rpb24gcHJvbWlzZUNoYWluKHRhc2tzLCBpbml0aWFsUmVzdWx0ID0gW10pIHtcbiAgICByZXR1cm4gdGFza3MucmVkdWNlKChjaGFpbiwgdGFzaykgPT4gY2hhaW4udGhlbigoX3Jlc3VsdHMpID0+IFByb21pc2UucmVzb2x2ZSh0YXNrKF9yZXN1bHRzKSkudGhlbigocikgPT4ge1xuICAgICAgICBfcmVzdWx0cy5wdXNoKHIpO1xuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfSkpLCBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFJlc3VsdCkpO1xufVxuZXhwb3J0cy5wcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2x0WldSUWNtOXRhWE5sY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVVhVzFsWkZCeWIyMXBjMlZ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN08wRkJWMEVzVTBGQlowSXNUMEZCVHl4RFFVRkRMRVZCUVZNN1NVRkROMElzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjZSU3hEUVVGRE8wRkJSa1FzTUVKQlJVTTdRVUYxUWtRc1UwRkJaMElzUzBGQlN5eERRVUZETEVWQlFWTTdTVUZETTBJc1QwRkJUeXhEUVVGSkxFbEJRVThzUlVGQllTeEZRVUZGTzFGQlF6ZENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZ6UWl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1F5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGT1JDeHpRa0ZOUXp0QlFXRkVMRTFCUVdFc1NVRkJTVHRKUVZsaUxGbEJRVmtzU1VGQlNTeEhRVUZETEVkQlFVY3NSVUZCUlN4aFFVRmhMRWRCUVVNc1EwRkJReXhEUVVGRE8xRkJXRGxDTEd0Q1FVRmhMRWRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmNrSXNZMEZCVXl4SFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeGpRVUZUTEVkQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNCQ0xHZENRVUZYTEVkQlFVOHNRMEZCUXl4RFFVRkRPMUZCVVhoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUXNXVUZCV1N4TFFVRlJMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVNc1pVRkJaU3hMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRlJlRU1zUjBGQlJ5eERRVUZETEVWQlFXbERPenRaUVVOMlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRE0wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFOUJRVThzUlVGQlJUdG5Ra0ZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFOUJRVThzUTBGQlF6dGhRVUZGTzFsQlF6TkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTNSRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGFFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xbEJRMnBDTEUxQlFVMHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03V1VGRGNFSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdG5Ra0ZEZUVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzI5Q1FVTnNRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0M1FrRkRha1VzVDBGQlR5eEZRVUZGTEVOQlFVTTdjVUpCUTJJN2VVSkJRVTA3ZDBKQlEwZ3NWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dHhRa0ZETlVJN1owSkJRMHdzUTBGQlF5eERRVUZETzJkQ1FVTkdMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRMllzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU0N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRGFrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xbEJRMjVDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1dVRkRia0lzVDBGQlR5eEhRVUZITEVOQlFVTTdVVUZEWml4RFFVRkRPMHRCUVVFN1EwRkRTanRCUVdwRVJDeHZRa0ZwUkVNN1FVRlhSQ3hUUVVGblFpeFpRVUZaTEVOQlFVa3NTMEZCY1VNc1JVRkJSU3huUWtGQmEwSXNSVUZCUlR0SlFVTjJSaXhQUVVGUExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRnJRaXhGUVVGRkxFbEJRU3RDTEVWQlFXZENMRVZCUVVVc1EwRkZkRVlzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZrc1JVRkJSU3hGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkhMRVZCUVVVc1JVRkJSVHRSUVVWMFJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTNCQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEwZ3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zUTBGRGFrTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRldSQ3h2UTBGVlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUaW1lZFByb21pc2VzXzEgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy50aW1lb3V0ID0gVGltZWRQcm9taXNlc18xLnRpbWVvdXQ7XG5leHBvcnRzLmRlbGF5ID0gVGltZWRQcm9taXNlc18xLmRlbGF5O1xudmFyIFRpbWVkUHJvbWlzZXNfMiA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLlBhY2UgPSBUaW1lZFByb21pc2VzXzIuUGFjZTtcbnZhciBUaW1lZFByb21pc2VzXzMgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy5wcm9taXNlQ2hhaW4gPSBUaW1lZFByb21pc2VzXzMucHJvbWlzZUNoYWluO1xudmFyIENoZWNrc3VtXzEgPSByZXF1aXJlKFwiLi9DaGVja3N1bVwiKTtcbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IENoZWNrc3VtXzEuc2hvcnRDaGVja1N1bTtcbnZhciBEYXRlXzEgPSByZXF1aXJlKFwiLi9EYXRlXCIpO1xuZXhwb3J0cy5kYXRlID0gRGF0ZV8xLmRhdGU7XG5leHBvcnRzLm1zID0gRGF0ZV8xLm1zO1xudmFyIE51bWJlcl8xID0gcmVxdWlyZShcIi4vTnVtYmVyXCIpO1xuZXhwb3J0cy5yb3VuZCA9IE51bWJlcl8xLnJvdW5kO1xudmFyIGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuZXhwb3J0cy5Mb2cgPSBsb2dfMS5Mb2c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4cFJFRkJiVVE3UVVGQk1VTXNhME5CUVVFc1QwRkJUeXhEUVVGQk8wRkJRVVVzWjBOQlFVRXNTMEZCU3l4RFFVRkJPMEZCUTNaQ0xHbEVRVUZ0UkR0QlFVRXhReXdyUWtGQlFTeEpRVUZKTEVOQlFVRTdRVUZEWWl4cFJFRkJiVVE3UVVGQk1VTXNkVU5CUVVFc1dVRkJXU3hEUVVGQk8wRkJRM0pDTEhWRFFVRTRRenRCUVVGeVF5eHRRMEZCUVN4aFFVRmhMRU5CUVVFN1FVRkRkRUlzSzBKQlFUQkRPMEZCUVdwRExITkNRVUZCTEVsQlFVa3NRMEZCUVR0QlFVRkZMRzlDUVVGQkxFVkJRVVVzUTBGQlFUdEJRVU5xUWl4dFEwRkJORU03UVVGQmJrTXNlVUpCUVVFc1MwRkJTeXhEUVVGQk8wRkJRMlFzTmtKQlFYbERPMEZCUVdoRExHOUNRVUZCTEVkQlFVY3NRMEZCUVNKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEYXRlXzEgPSByZXF1aXJlKFwiLi9EYXRlXCIpO1xuY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSAnJztcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIGxldmVsKG5ld0xldmVsU3ltLCBzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICBsZXQgbmV3TGV2ZWwgPSBMb2cubGV2ZWxzW25ld0xldmVsU3ltXSB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGxldCBvbGRMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBpZiAobmV3TGV2ZWxTeW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3TGV2ZWwgPSBvbGRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdMZXZlbFN5bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChMb2cubGV2ZWxzW25ld0xldmVsU3ltXSkge1xuICAgICAgICAgICAgaWYgKHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmdsb2JhbExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgbmV3ICR7c2V0R2xvYmFsTGV2ZWwgPyAnZ2xvYmFsJyA6IHRoaXMucmVwb3J0UHJlZml4fSBsb2cgbGV2ZWwgJHtuZXdMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9ICh3YXMgJHtvbGRMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9KWA7XG4gICAgICAgICAgICB0aGlzLm91dCgobmV3TGV2ZWwuc3ltID09PSBvbGRMZXZlbC5zeW0pID8gTG9nLkRFQlVHIDogTG9nLklORk8sIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIGB1bmtvd24gbGV2ZWwgJHtuZXdMZXZlbFN5bX07IGxvZyBsZXZlbCByZW1haW5zICR7b2xkTGV2ZWwuc3ltfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMZXZlbC5zeW07XG4gICAgfVxuICAgIGRlYnVnKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCB0aGlzLm91dChMb2cuREVCVUcsIG1zZyk7IH0pO1xuICAgIH1cbiAgICBpbmZvKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCB0aGlzLm91dChMb2cuSU5GTywgbXNnKTsgfSk7XG4gICAgfVxuICAgIHdhcm4obXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIHRoaXMub3V0KExvZy5XQVJOLCBtc2cpOyB9KTtcbiAgICB9XG4gICAgZXJyb3IobXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChtc2cubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLnN0YWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbXNnLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0KGx2bCwgbXNnKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgZGVzYyA9IExvZy5sZXZlbHNbbHZsXTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckxldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgICAgICBpZiAoZGVzYy5pbXBvcnRhbmNlID49IGZpbHRlckxldmVsLmltcG9ydGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gRGF0ZV8xLmRhdGUoTG9nLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSA/IG1zZyA6IHRoaXMuaW5zcGVjdChtc2csIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ0xpbmUgPSB0aGlzLm1ha2VNZXNzYWdlKGxpbmUsIGx2bCwgZGF0ZVN0ciwgZGVzYy5kZXNjKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dMaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAobXNnICYmIG1zZy5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cuc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxpbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1ha2VNZXNzYWdlKGxpbmUsIGx2bCwgZGF0ZVN0ciwgZGVzYykge1xuICAgICAgICByZXR1cm4gYCR7ZGF0ZVN0cn0gJHt0aGlzLnJlcG9ydFByZWZpeH0gJHtkZXNjfSAke2xpbmV9YDtcbiAgICB9XG4gICAgZm9ybWF0KGZtdFN0cikge1xuICAgICAgICBpZiAoZm10U3RyID09PSBudWxsKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZtdFN0cikge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBmbXRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExvZy5kYXRlRm9ybWF0O1xuICAgIH1cbiAgICBwcmVmaXgocHJmKSB7XG4gICAgICAgIGlmIChwcmYpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydFByZWZpeDtcbiAgICB9XG4gICAgY29uZmlnKGNmZykge1xuICAgICAgICBpZiAoY2ZnLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdChjZmcuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwoY2ZnLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnNwZWN0KG1zZywgZGVwdGggPSAzLCBpbmRlbnQgPSAnJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jykge1xuICAgICAgICBmdW5jdGlvbiBfaW5zcGVjdChtc2csIGRlcHRoLCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobXNnLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSA/ICd7Li4ufScgOiAnWy4uLl0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgWyR7bXNnLm1hcCgoZSkgPT4gKGUgPT09IHVuZGVmaW5lZCkgPyAnJyA6IF9pbnNwZWN0KGUsIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgW3ByZWZpeCwgcG9zdGZpeF0gPSBsb2cuZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3tcXG4nICsgT2JqZWN0LmtleXMobXNnKS5tYXAoayA9PiBgJHtwcmVmaXh9JHtrfSR7cG9zdGZpeH06ICR7X2luc3BlY3QobXNnW2tdLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCArIGluZGVudCl9YCkuam9pbignLFxcbicpICsgYFxcbiR7Y3VyckluZGVudH19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2cudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2cgPSB0aGlzO1xuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCBkZXB0aCA9PT0gbnVsbCA/IDk5OSA6IGRlcHRoLCAwLCAnJyk7XG4gICAgfVxuICAgIGdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICByZXR1cm4gW2Ake2N1cnJJbmRlbnR9JHtpbmRlbnR9YCwgJyddO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9nID0gTG9nO1xuTG9nLmRlZkRhdGVGb3JtYXQgPSAnJVlZWVklTU0lREQgJWhoOiVtbTolc3MuJWpqaic7XG5Mb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuTG9nLkRFQlVHID0gJ0RFQlVHJztcbkxvZy5JTkZPID0gJ0lORk8nO1xuTG9nLldBUk4gPSAnV0FSTic7XG5Mb2cuRVJST1IgPSAnRVJST1InO1xuTG9nLmxldmVscyA9IHtcbiAgICBbTG9nLkRFQlVHXTogeyBpbXBvcnRhbmNlOiAwLCBzeW06IExvZy5ERUJVRywgZGVzYzogJ0RFQlVHJyB9LFxuICAgIFtMb2cuSU5GT106IHsgaW1wb3J0YW5jZTogMSwgc3ltOiBMb2cuSU5GTywgZGVzYzogJ0lORk8nIH0sXG4gICAgW0xvZy5XQVJOXTogeyBpbXBvcnRhbmNlOiAyLCBzeW06IExvZy5XQVJOLCBkZXNjOiAnV0FSTicgfSxcbiAgICBbTG9nLkVSUk9SXTogeyBpbXBvcnRhbmNlOiAzLCBzeW06IExvZy5FUlJPUiwgZGVzYzogJ0VSUk9SJyB9XG59O1xuTG9nLmxvZyA9IG5ldyBMb2coJycpO1xuTG9nLmdsb2JhbExldmVsID0gTG9nLmxldmVsc1tMb2cuSU5GT107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3p0QlFTdEZRU3hwUTBGQk9FSTdRVUU0UWpsQ0xFMUJRV0VzUjBGQlJ6dEpRVzFEV2l4WlFVRlpMRTFCUVdFN1VVRklaaXhuUWtGQlZ5eEhRVUZyUWl4VFFVRlRMRU5CUVVNN1VVRkRka01zYVVKQlFWa3NSMEZCVFN4RlFVRkZMRU5CUVVNN1VVRkZSaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVRkRMRU5CUVVNN1NVRnZRbTVFTEV0QlFVc3NRMEZCUXl4WFFVRnRRaXhGUVVGRkxHTkJRWFZDTzFGQlEzSkVMRWxCUVVrc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU14UkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRia1FzU1VGQlNTeFhRVUZYTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUXpOQ0xGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVMEZEZGtJN1lVRkJUU3hKUVVGSkxGZEJRVmNzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVMEZEYUVNN1lVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zU1VGQlNTeGpRVUZqTEVWQlFVVTdaMEpCUVVVc1IwRkJSeXhEUVVGRExGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdZVUZCUlR0cFFrRkRMMEk3WjBKQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGQlJUdFpRVU53UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExHTkJRV01zUTBGQlFTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeGpRVUZqTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxGTkJRVk1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRMmhLTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eExRVUZMTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTjJSVHRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxHZENRVUZuUWl4WFFVRlhMSFZDUVVGMVFpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONlJqdFJRVU5FTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlZWa3NTMEZCU3l4RFFVRkRMRWRCUVU4c1JVRkJSU3hSUVVGUkxFZEJRVU1zU1VGQlNUczRSRUZCYjBJc1QwRkJUeXhOUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZCUVR0SlFWVjRSaXhKUVVGSkxFTkJRVU1zUjBGQlR5eEZRVUZGTEZGQlFWRXNSMEZCUXl4SlFVRkpPemhFUVVGdlFpeFBRVUZQTEUxQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJWWFJHTEVsQlFVa3NRMEZCUXl4SFFVRlBMRVZCUVVVc1VVRkJVU3hIUVVGRExFbEJRVWs3T0VSQlFXOUNMRTlCUVU4c1RVRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlFVRTdTVUZUZEVZc1MwRkJTeXhEUVVGRExFZEJRVThzUlVGQlJTeFJRVUZSTEVkQlFVTXNTVUZCU1RzN1dVRkRja01zU1VGQlNTeEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVOaUxFMUJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRka01zVFVGQlRTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOeVF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1lVRkRkRUk3YVVKQlFVMDdaMEpCUTBnc1QwRkJUeXhOUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU42UXp0UlFVTk1MRU5CUVVNN1MwRkJRVHRKUVZWbExFZEJRVWNzUTBGQlF5eEhRVUZWTEVWQlFVVXNSMEZCVHpzN1dVRkRia01zU1VGQlNTeEpRVUZKTEVkQlFXRXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU55UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRlRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRmRCUVZjc1EwRkJReXhWUVVGVkxFVkJRVVU3WjBKQlF6TkRMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRM0pETEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycEZMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVOb1JTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU55UWl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTzI5Q1FVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmxDUVVGRk8yZENRVU5xUkN4UFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEYUVNN1dVRkRSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dFJRVU55UWl4RFFVRkRPMHRCUVVFN1NVRlBVeXhYUVVGWExFTkJRVU1zU1VGQlZ5eEZRVUZGTEVkQlFWVXNSVUZCUlN4UFFVRmpMRVZCUVVVc1NVRkJWenRSUVVOMFJTeFBRVUZQTEVkQlFVY3NUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRPMGxCUXpkRUxFTkJRVU03U1VGWlRTeE5RVUZOTEVOQlFVTXNUVUZCWXp0UlFVTjRRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZCUlN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFZEJRVWNzUTBGQlF5eGhRVUZoTEVOQlFVTTdVMEZCUlR0aFFVTjJSQ3hKUVVGSkxFMUJRVTBzUlVGQlRUdFpRVUZGTEVkQlFVY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRE8xTkJRVVU3VVVGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZQVFN4TlFVRk5MRU5CUVVNc1IwRkJWenRSUVVOeVFpeEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUjBGQlJ5eERRVUZETzFOQlFVVTdVVUZEY2tNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRlZUU3hOUVVGTkxFTkJRVU1zUjBGQmNVUTdVVUZETDBRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRlRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1JVRkJSenRaUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRE1VUXNRMEZCUXp0SlFWbE5MRTlCUVU4c1EwRkJReXhIUVVGUExFVkJRVVVzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRWRCUVVNc01FSkJRVEJDTzFGQlF6bEVMRk5CUVZNc1VVRkJVU3hEUVVGRExFZEJRVThzUlVGQlJTeExRVUZaTEVWQlFVVXNTMEZCV1N4RlFVRkZMRlZCUVdsQ08xbEJRM0JGTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJaMEk3WjBKQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1lVRkJSVHRaUVVOc1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVZjN1owSkJRVVVzVDBGQlR5eFhRVUZYTEVOQlFVTTdZVUZCUlR0WlFVTjJSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZWQlFWVXNSVUZCUnp0blFrRkJSU3hQUVVGUExGVkJRVlVzUTBGQlF6dGhRVUZGTzFsQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZMTzJkQ1FVRkZMRTlCUVU4c1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF6dGhRVUZGTzFsQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZMTzJkQ1FVTTFRaXhKUVVGSkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVTdiMEpCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMmxDUVVGRk8yZENRVU53UlN4SlFVRkpMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTjJRaXhQUVVGUExFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1JVRkJReXhGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFVRXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRwUWtGRE1VYzdaMEpCUTBZc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRM1pGTEU5QlFVOHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1MwRkRlRVFzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hIUVVGRExFMUJRVTBzUTBGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NWVUZCVlN4SFFVRkhMRU5CUVVNN1lVRkROVU03V1VGRFJDeFBRVUZQTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFdEJRVWNzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVVZUTEdGQlFXRXNRMEZCUXl4TlFVRmhMRVZCUVVVc1MwRkJXU3hGUVVGRkxGVkJRV2xDTzFGQlEyeEZMRTlCUVU4c1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZET3p0QlFXaFBUQ3hyUWtGcFQwTTdRVUV2VG05Q0xHbENRVUZoTEVkQlFVY3NPRUpCUVRoQ0xFTkJRVU03UVVGREwwTXNZMEZCVlN4SFFVRk5MRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03UVVGSGNrTXNVMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVkb1FpeFJRVUZKTEVkQlFVc3NUVUZCVFN4RFFVRkRPMEZCUjJoQ0xGRkJRVWtzUjBGQlN5eE5RVUZOTEVOQlFVTTdRVUZIYUVJc1UwRkJTeXhIUVVGSkxFOUJRVThzUTBGQlF6dEJRVWRrTEZWQlFVMHNSMEZCUnp0SlFVTjBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCU3l4RlFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlF6dEpRVU01UkN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlRTeEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVY3NTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJRenRKUVVNM1JDeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJUU3hGUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVWNzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUXp0SlFVTTNSQ3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCU3l4RlFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlF6dERRVU5xUlN4RFFVRkRPMEZCUjFrc1QwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUjJZc1pVRkJWeXhIUVVGaExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERhdGFGaWx0ZXJzXzEgPSByZXF1aXJlKFwiLi9EYXRhRmlsdGVyc1wiKTtcbmNvbnN0IGhzdXRpbF8xID0gcmVxdWlyZShcImhzdXRpbFwiKTtcbmNvbnN0IGxvZyA9IG5ldyBoc3V0aWxfMS5Mb2coJ0RhdGEnKTtcbnZhciBUeXBlcztcbihmdW5jdGlvbiAoVHlwZXMpIHtcbiAgICBUeXBlc1tcIm51bWJlclwiXSA9IFwibnVtYmVyXCI7XG4gICAgVHlwZXNbXCJuYW1lXCJdID0gXCJuYW1lXCI7XG4gICAgVHlwZXNbXCJkYXRlXCJdID0gXCJkYXRlXCI7XG4gICAgVHlwZXNbXCJjdXJyZW5jeVwiXSA9IFwiY3VycmVuY3lcIjtcbiAgICBUeXBlc1tcInBlcmNlbnRcIl0gPSBcInBlcmNlbnRcIjtcbn0pKFR5cGVzID0gZXhwb3J0cy5UeXBlcyB8fCAoZXhwb3J0cy5UeXBlcyA9IHt9KSk7XG5mdW5jdGlvbiB0b0RhdGUodmFsLCBsaW1pdFllYXIgPSAxOTcwKSB7XG4gICAgbGV0IGQ7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgaWYgKCFpc05hTihkLmdldFRpbWUoKSkpIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBSZWdFeHAoYFxcXFxkXFxcXGQke2QuZ2V0RnVsbFllYXIoKSAlIDEwMH1gLCAnZycpO1xuICAgICAgICBpZiAoIXZhbC5tYXRjaChyKSkge1xuICAgICAgICAgICAgY29uc3QgeXIgPSAxOTAwICsgZC5nZXRGdWxsWWVhcigpICUgMTAwO1xuICAgICAgICAgICAgZC5zZXRGdWxsWWVhcigoeXIgPCBsaW1pdFllYXIpID8geXIgKyAxMDAgOiB5cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQ7XG59XG5mdW5jdGlvbiBjYXN0VmFsKHR5cGUsIHZhbCkge1xuICAgIGxldCByZXN1bHQgPSB2YWw7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gdG9EYXRlKHZhbCk7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0LmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgY2FzZSAncGVyY2VudCc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5lbmRzV2l0aCgnJScpID8gbnVtIC8gMTAwIDogbnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgICAgcmVzdWx0ID0gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSA/IHZhbC5yZXBsYWNlKC9bXmVFXFwrXFwtXFwuXFxkXS9nLCAnJykgOiB2YWw7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZUZsb2F0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gJycgKyB2YWw7XG4gICAgfVxufVxuZnVuY3Rpb24gZmluZERvbWFpbihkYXRhLCBjb2wsIHR5cGUsIGRvbWFpbikge1xuICAgIGlmIChkb21haW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb21haW4gPSBbXTtcbiAgICB9XG4gICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvbWFpblswXSA9IDA7XG4gICAgICAgIGRvbWFpblsxXSA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBleHBhbmQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUeXBlcy5uYW1lOlxuICAgICAgICAgICAgICAgIGV4cGFuZCA9IChyKSA9PiBkb21haW4uaW5kZXhPZignJyArIHJbY29sXSkgPCAwID8gZG9tYWluLnB1c2goJycgKyByW2NvbF0pIDogJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGVzLmRhdGU6XG4gICAgICAgICAgICAgICAgZXhwYW5kID0gKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB0b0RhdGUocltjb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2IDwgZG9tYWluWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgPiBkb21haW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubnVtYmVyOlxuICAgICAgICAgICAgY2FzZSBUeXBlcy5wZXJjZW50OlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBleHBhbmQgPSAocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHBhcnNlRmxvYXQocltjb2xdLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblswXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblsxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCBkb21haW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodiA+IGRvbWFpblsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaChleHBhbmQpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tYWluO1xufVxuZXhwb3J0cy5maW5kRG9tYWluID0gZmluZERvbWFpbjtcbmZ1bmN0aW9uIGZpbmRUeXBlKHZhbCkge1xuICAgIGlmICghdmFsIHx8IHZhbCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IHN0clZhbCA9IHZhbDtcbiAgICBpZiAoJycgKyBwYXJzZUZsb2F0KHN0clZhbCkgPT09IHN0clZhbCkge1xuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgfVxuICAgIGlmIChzdHJWYWwuc3RhcnRzV2l0aCgnJCcpICYmICFpc05hTihwYXJzZUZsb2F0KHN0clZhbC5zbGljZSgxKSkpKSB7XG4gICAgICAgIHJldHVybiAnY3VycmVuY3knO1xuICAgIH1cbiAgICBpZiAoc3RyVmFsLmVuZHNXaXRoKCclJykgJiYgIWlzTmFOKHBhcnNlRmxvYXQoc3RyVmFsKSkpIHtcbiAgICAgICAgcmV0dXJuICdwZXJjZW50JztcbiAgICB9XG4gICAgaWYgKCFpc05hTih0b0RhdGUoc3RyVmFsKS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgfVxuICAgIHN3aXRjaCAoc3RyVmFsLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcIm51bGxcIjogYnJlYWs7XG4gICAgICAgIGNhc2UgXCIjcmVmIVwiOiBicmVhaztcbiAgICAgICAgZGVmYXVsdDogaWYgKHZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25hbWUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5tZXRhID0gW107XG4gICAgICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmltcG9ydERhdGEoZGF0YXNldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgaW1wb3J0RGF0YShkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdkYXRhJyArIChNYXRoLnJvdW5kKDEwMDAgKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICAgICAgICBpZiAoZGF0YXNldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBkYXRhc2V0WzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBkYXRhc2V0LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShyb3dzLCBuYW1lcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGRhdGFzZXQubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGFzZXQucm93cywgZGF0YXNldC5jb2xOYW1lcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogdGhpcy5nZXREYXRhKCksXG4gICAgICAgICAgICBjb2xOYW1lczogdGhpcy5jb2xOYW1lcygpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGdldENvbHVtbihjb2wpIHtcbiAgICAgICAgY29uc3QgY24gPSB0aGlzLmNvbE51bWJlcihjb2wpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgocm93KSA9PiByb3dbY25dKTtcbiAgICB9XG4gICAgY29sQWRkKGNvbCkge1xuICAgICAgICBsZXQgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAobSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtID0gdGhpcy5tZXRhW2NvbF0gPSB7fTtcbiAgICAgICAgICAgIG0ubmFtZSA9IGNvbDtcbiAgICAgICAgICAgIG0uY29sdW1uID0gdGhpcy5tZXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubWV0YS5wdXNoKG0pO1xuICAgICAgICAgICAgbS5jYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBtLmFjY2Vzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIGNvbEluaXRpYWxpemUoY29sLCBpbml0aWFsaXplcikge1xuICAgICAgICBjb25zdCBmbiA9IHR5cGVvZiBpbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgbGV0IGNuID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmICghY24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNuID0gdGhpcy5jb2xBZGQoY29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgY29sdW1uICR7Y29sfSBkb2VzIG5vdCBleGlzdCBpbiBEYXRhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLm1hcCgocm93LCByb3dJbmRleCkgPT4gcm93W2NuLmNvbHVtbl0gPSBmbiA/IGluaXRpYWxpemVyKHJvd1tjbi5jb2x1bW5dLCByb3dJbmRleCwgcm93KSA6IGluaXRpYWxpemVyKTtcbiAgICAgICAgcmV0dXJuIGNuLmNvbHVtbjtcbiAgICB9XG4gICAgY29sTnVtYmVyKGNvbCkge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0uYWNjZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG0uY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbE5hbWUoY29sKSB7XG4gICAgICAgIHZhciBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBtLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG0ubmFtZTtcbiAgICB9XG4gICAgY29sTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGEubWFwKChtKSA9PiBtLm5hbWUpO1xuICAgIH1cbiAgICBjb2xUeXBlKGNvbCkge1xuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIHJldHVybiBtZXRhID8gbWV0YS50eXBlc1swXS50eXBlIDogJ25hbWUnO1xuICAgIH1cbiAgICBmaW5kRG9tYWluKGNvbCwgZG9tYWluKSB7XG4gICAgICAgIHJldHVybiBmaW5kRG9tYWluKHRoaXMuZGF0YSwgdGhpcy5jb2xOdW1iZXIoY29sKSwgdGhpcy5jb2xUeXBlKGNvbCksIGRvbWFpbik7XG4gICAgfVxuICAgIGNhc3REYXRhKCkge1xuICAgICAgICB0aGlzLm1ldGEuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sID0gYy5jb2x1bW47XG4gICAgICAgICAgICBpZiAoIWMuY2FzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyb3cpID0+IHJvd1tjb2xdID0gY2FzdFZhbChjLnR5cGVzWzBdLnR5cGUsIHJvd1tjb2xdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjLmNhc3QgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmlsdGVyKGNvbmRpdGlvbikge1xuICAgICAgICByZXR1cm4gRGF0YUZpbHRlcnNfMS5maWx0ZXIodGhpcywgY29uZGl0aW9uKTtcbiAgICB9XG4gICAgc29ydChzb3J0Rm4sIGNvbCkge1xuICAgICAgICBsZXQgZm4gPSBzb3J0Rm47XG4gICAgICAgIGlmICghY29sKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuc29ydChmbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2wgPSB0aGlzLmNvbE51bWJlcihjb2wpO1xuICAgICAgICAgICAgaWYgKHNvcnRGbiA9PT0gJ2Rlc2NlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgZm4gPSAoYSwgYikgPT4gKGIgPiBhKSA/IDEgOiAoKGIgPCBhKSA/IC0xIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc29ydEZuID09PSAnYXNjZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIGZuID0gKGEsIGIpID0+IChiIDwgYSkgPyAxIDogKChiID4gYSkgPyAtMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQoKHIxLCByMikgPT4gZm4ocjFbY29sXSwgcjJbY29sXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtYXAobWFwRm4sIGNvbCkge1xuICAgICAgICBjb25zdCBub29wID0gKHZhbCkgPT4gdmFsO1xuICAgICAgICBjb25zdCBjdW11bGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgcmV0dXJuICh2YWwsIGkpID0+IHsgc3VtICs9ICt2YWw7IHJldHVybiBzdW07IH07XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGdldEZuKCkge1xuICAgICAgICAgICAgbGV0IGZuO1xuICAgICAgICAgICAgc3dpdGNoIChtYXBGbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2N1bXVsYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBjdW11bGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdub29wJzpcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBub29wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmbiA9IG1hcEZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmbiA9IGdldEZuKCk7XG4gICAgICAgIGNvbnN0IGMgPSBjb2wgPyB0aGlzLmNvbE51bWJlcihjb2wpIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IERhdGEoe1xuICAgICAgICAgICAgY29sTmFtZXM6IHRoaXMuY29sTmFtZXMoKSxcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuZGF0YS5tYXAoKHJvdywgcm93SW5kZXgsIHJvd3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICAgICAgICByb3dbY10gPSBmbihyb3dbY10sIGMsIHJvd0luZGV4LCByb3dzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd3Nbcm93SW5kZXhdID0gZm4ocm93LCByb3dJbmRleCwgcm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuZ2V0TmFtZSgpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBnZXRNZXRhKGNvbCkge1xuICAgICAgICBpZiAoIXRoaXMubWV0YVtjb2xdKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWV0YVtjb2xdLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YVtjb2xdO1xuICAgIH1cbiAgICBzZXREYXRhKHJvd3MsIG5hbWVzLCBhdXRvVHlwZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5tZXRhID0gW107XG4gICAgICAgIHRoaXMuZGF0YSA9IHJvd3Muc2xpY2UoKTtcbiAgICAgICAgaWYgKG5hbWVzICYmIG5hbWVzLmZvckVhY2gpIHtcbiAgICAgICAgICAgIG5hbWVzLmZvckVhY2goKGNvbCkgPT4gdGhpcy5jb2xBZGQoY29sKSk7XG4gICAgICAgICAgICBpZiAoYXV0b1R5cGUpIHtcbiAgICAgICAgICAgICAgICBuYW1lcy5mb3JFYWNoKChjb2wpID0+IHRoaXMuZmluZFR5cGVzKGNvbCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzdERhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvZy53YXJuKGBpbnZhbGlkIG5hbWVzIHNldERhdGE6XFxuJHtsb2cuaW5zcGVjdChuYW1lcywgNSl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZFR5cGVzKGNvbCkge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKERhdGEudHlwZSkuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHMgPSB7IHR5cGU6IERhdGEudHlwZVt0XSwgY291bnQ6IDAgfTtcbiAgICAgICAgICAgIHR5cGVzLnB1c2godHMpO1xuICAgICAgICAgICAgdHlwZXNbRGF0YS50eXBlW3RdXSA9IHRzO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgdiBvZiB0aGlzLmFsbFJvd3MoY29sKSkge1xuICAgICAgICAgICAgY29uc3QgdCA9IGZpbmRUeXBlKHYpO1xuICAgICAgICAgICAgaWYgKHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0eXBlc1t0XS5jb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHR5cGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT09ICdjdXJyZW5jeScgJiYgYS5jb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYi50eXBlID09PSAnY3VycmVuY3knICYmIGIuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYi5jb3VudCAtIGEuY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBtLnR5cGVzID0gdHlwZXM7XG4gICAgICAgIHJldHVybiB0eXBlc1swXS50eXBlO1xuICAgIH1cbiAgICAqYWxsUm93cyhjb2x1bW4pIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sTnVtYmVyKGNvbHVtbik7XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5kYXRhLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmRhdGFbcl1bY107XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRhdGEgPSBEYXRhO1xuRGF0YS50eXBlID0ge1xuICAgIG51bWJlcjogJ251bWJlcicsXG4gICAgbmFtZTogJ25hbWUnLFxuICAgIGRhdGU6ICdkYXRlJyxcbiAgICBjdXJyZW5jeTogJ2N1cnJlbmN5JyxcbiAgICBwZXJjZW50OiAncGVyY2VudCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlFWVhSaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc0swTkJRV3RFTzBGQlEyeEVMRzFEUVVFeVF6dEJRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1dVRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBGQmFVVjRSU3hKUVVGWkxFdEJWMWc3UVVGWVJDeFhRVUZaTEV0QlFVczdTVUZGVkN3d1FrRkJjVUlzUTBGQlFUdEpRVVZ5UWl4elFrRkJiVUlzUTBGQlFUdEpRVVZ1UWl4elFrRkJiVUlzUTBGQlFUdEpRVVZ1UWl3NFFrRkJkVUlzUTBGQlFUdEpRVVYyUWl3MFFrRkJjMElzUTBGQlFUdEJRVU01UWl4RFFVRkRMRVZCV0Zjc1MwRkJTeXhIUVVGTUxHRkJRVXNzUzBGQlRDeGhRVUZMTEZGQlYyaENPMEZCWVVRc1UwRkJVeXhOUVVGTkxFTkJRVU1zUjBGQlZ5eEZRVUZGTEZOQlFWTXNSMEZCUXl4SlFVRkpPMGxCUTNaRExFbEJRVWtzUTBGQlRTeERRVUZETzBsQlExZ3NTVUZCU1N4SFFVRkhMRmxCUVZrc1NVRkJTU3hGUVVGRk8xRkJRVVVzVDBGQllTeEhRVUZITEVOQlFVTTdTMEZCUlR0SlFVTTVReXhEUVVGRExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFJRVU55UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhIUVVGSExFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hKUVVGSkxFTkJRVlVzUjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRaUVVONlFpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXp0WlFVTjRReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU5xUkR0TFFVTktPMGxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRFlpeERRVUZETzBGQlUwUXNVMEZCVXl4UFFVRlBMRU5CUVVNc1NVRkJVeXhGUVVGRkxFZEJRVmM3U1VGRGJrTXNTVUZCU1N4TlFVRk5MRWRCUVZjc1IwRkJSeXhEUVVGRE8wbEJRM3BDTEZGQlFWRXNTVUZCU1N4RlFVRkZPMUZCUTFZc1MwRkJTeXhOUVVGTk8xbEJRMUFzU1VGQlNTeEhRVUZITEZsQlFWa3NTVUZCU1N4RlFVRkZPMmRDUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETzJGQlFVVTdXVUZEZUVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSVHRuUWtGQlJTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUVVVN1dVRkRMME1zVDBGQlR5eE5RVUZOTEVOQlFVTTdVVUZEYkVJc1MwRkJTeXhUUVVGVE8xbEJRMVlzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVVN1owSkJRM3BDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZETlVJc1QwRkJaMElzUjBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8yRkJRM0pFTzJsQ1FVRk5PMmRDUVVOSUxFOUJRVThzUjBGQlJ5eERRVUZETzJGQlEyUTdVVUZIVEN4TFFVRkxMRlZCUVZVN1dVRkZXQ3hOUVVGTkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJSV2hHTEV0QlFVc3NVVUZCVVR0WlFVTlVMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVRkZMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdZVUZCUlR0WlFVTm9SU3hKUVVGSkxFdEJRVXNzUTBGQlV5eE5RVUZOTEVOQlFVTXNSVUZCUlR0blFrRkJSU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzJGQlFVVTdXVUZETjBNc1QwRkJUeXhOUVVGTkxFTkJRVU03VVVGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVZFc1QwRkJUeXhGUVVGRkxFZEJRVU1zUjBGQlJ5eERRVUZETzB0QlEycERPMEZCUTB3c1EwRkJRenRCUVVWRUxGTkJRV2RDTEZWQlFWVXNRMEZCUXl4SlFVRmxMRVZCUVVVc1IwRkJWU3hGUVVGRkxFbEJRVk1zUlVGQlJTeE5RVUZoTzBsQlF6VkZMRWxCUVVrc1RVRkJUU3hMUVVGSExGTkJRVk1zUlVGQlJUdFJRVUZGTEUxQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1MwRkJSVHRKUVVOb1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1VVRkRia0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOa0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUTBGQlF6dExRVU0zUWp0VFFVRk5PMUZCUTBnc1NVRkJTU3hOUVVFd1FpeERRVUZETzFGQlF5OUNMRkZCUVU4c1NVRkJTU3hGUVVGRk8xbEJRMVFzUzBGQlN5eExRVUZMTEVOQlFVTXNTVUZCU1R0blFrRkRXQ3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRlpMRTFCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFXRXNUVUZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZETlVjc1RVRkJUVHRaUVVOV0xFdEJRVXNzUzBGQlN5eERRVUZETEVsQlFVazdaMEpCUTFnc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVWQlFVVTdiMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eEhRVUZSTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETlVJc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVY3NVMEZCVXl4RlFVRkZPM2RDUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2NVSkJRVVU3YjBKQlF6ZERMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZITEZOQlFWTXNSVUZCUlR0M1FrRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM0ZDUVVGRk8yOUNRVU0zUXl4SlFVRkpMRU5CUVVNc1MwRkJSeXhUUVVGVExFbEJRVWtzUTBGQlF5eExRVUZITEVsQlFVa3NSVUZCUlR0M1FrRkRNMElzU1VGQlNTeERRVUZETEVkQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk96UkNRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZVVKQlFVVTdOa0pCUXpsQ0xFbEJRVWtzUTBGQlF5eEhRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHMwUWtGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zbENRVUZGTzNGQ1FVTXpRenRuUWtGRFRDeERRVUZETEVOQlFVTTdaMEpCUTBZc1RVRkJUVHRaUVVOV0xFdEJRVXNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTnNRaXhMUVVGTExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEYmtJN1owSkJRMGtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVN2IwSkJRMjVDTEVsQlFVa3NRMEZCUXl4SFFVRlZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenR2UWtGRE4wTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVWNzVTBGQlV5eEZRVUZGTzNkQ1FVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUVVVN2IwSkJRemRETEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExGTkJRVk1zUlVGQlJUdDNRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNGQ1FVRkZPMjlDUVVNM1F5eEpRVUZKTEVOQlFVTXNTMEZCUnl4VFFVRlRMRWxCUVVrc1EwRkJReXhMUVVGSExFbEJRVWtzUlVGQlJUdDNRa0ZETTBJc1NVRkJTU3hEUVVGRExFZEJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPelJDUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2VVSkJRVVU3TmtKQlF6bENMRWxCUVVrc1EwRkJReXhIUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlRzMFFrRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2xDUVVGRk8zRkNRVU16UXp0blFrRkRUQ3hEUVVGRExFTkJRVU03VTBGRFZEdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRGVFSTdTVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOc1FpeERRVUZETzBGQmRFTkVMR2REUVhORFF6dEJRV0ZFTEZOQlFWTXNVVUZCVVN4RFFVRkRMRWRCUVZjN1NVRkRla0lzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVjc1JVRkJSU3hGUVVGRk8xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZCUlR0SlFVTjBReXhKUVVGSkxFZEJRVWNzV1VGQldTeEpRVUZKTEVWQlFVMDdVVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRMUVVGRk8wbEJReTlETEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGRk8xRkJRVVVzVDBGQlR5eFJRVUZSTEVOQlFVTTdTMEZCUlR0SlFVZHFSQ3hOUVVGTkxFMUJRVTBzUjBGQlZ5eEhRVUZITEVOQlFVTTdTVUZETTBJc1NVRkJTU3hGUVVGRkxFZEJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRTFCUVUwc1JVRkJLMEk3VVVGQlJTeFBRVUZQTEZGQlFWRXNRMEZCUXp0TFFVRkZPMGxCUTNaR0xFbEJRVWtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdVVUZCUlN4UFFVRlBMRlZCUVZVc1EwRkJRenRMUVVGRk8wbEJRM3BHTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQllUdFJRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUVVVN1NVRkRlRVlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCTmtJN1VVRkJSU3hQUVVGUExFMUJRVTBzUTBGQlF6dExRVUZGTzBsQlVXNUdMRkZCUVZFc1RVRkJUU3hEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTzFGQlF6RkNMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRUdFJRVU51UWl4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRGNFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZETEVOQlFVTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1RVRkJUU3hEUVVGRE8xTkJRVVU3UzBGRGFFUTdTVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRCUVVOb1FpeERRVUZETzBGQlQwUXNUVUZCWVN4SlFVRkpPMGxCYTBKaUxGbEJRVmtzVDBGQk1FSTdVVUY1VXpsQ0xGTkJRVWtzUjBGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNoQ0xGTkJRVWtzUjBGQmFVSXNSVUZCUlN4RFFVRkRPMUZCZWxNMVFpeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZCUlR0SlFVTTVReXhEUVVGRE8wbEJTMDBzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlRVMHNWVUZCVlN4RFFVRkRMRTlCUVhsQ08xRkJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1RVRkJUU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndSQ3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU5VTEVsQlFVa3NUMEZCVHl4WlFVRlpMRXRCUVVzc1JVRkJSVHRuUWtGRE1VSXNUVUZCVFN4TFFVRkxMRWRCUVdFc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0aFFVTTNRanRwUWtGQlRUdG5Ra0ZEU0N4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVU3YjBKQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzJsQ1FVRkZPMmRDUVVNdlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTJoRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlMwMHNUVUZCVFR0UlFVTlVMRTlCUVU4N1dVRkRTQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTndRaXhSUVVGUkxFVkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0VFFVTXpRaXhEUVVGRE8wbEJRMDRzUTBGQlF6dEpRVXROTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVMU5MRk5CUVZNc1EwRkJReXhIUVVGdFFqdFJRVU5vUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXk5Q0xFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGWExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMjVFTEVOQlFVTTdTVUZSVFN4TlFVRk5MRU5CUVVNc1IwRkJWVHRSUVVOd1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU5xUWl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCWlN4RlFVRkZMRU5CUVVNN1dVRkRjRU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCU3l4SFFVRkhMRU5CUVVNN1dVRkRaaXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRelZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeENMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVThzUzBGQlN5eERRVUZETzFsQlEyNUNMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETzFOQlEzUkNPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQldVMHNZVUZCWVN4RFFVRkRMRWRCUVcxQ0xFVkJRVVVzVjBGQk1FSTdVVUZEYUVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzVDBGQlR5eFhRVUZYTEV0QlFVc3NWVUZCVlN4RFFVRkRPMUZCUXpkRExFbEJRVWtzUlVGQlJTeEhRVUZqTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOTUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRVVU3YVVKQlEyeEVPMmRDUVVGRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdZVUZCUlR0VFFVTndSVHRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJWeXhGUVVGRkxGRkJRV1VzUlVGQlJTeEZRVUZGTEVOQlF6TkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJWU3hYUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRlZMRmRCUVZjc1EwRkRia2NzUTBGQlF6dFJRVU5HTEU5QlFVOHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlVVMHNVMEZCVXl4RFFVRkRMRWRCUVcxQ08xRkJRMmhETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJUdFpRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUVVVN1lVRkRlRUk3V1VGRFJDeERRVUZETEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOc1FpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkRia0k3U1VGRFRDeERRVUZETzBsQlVVMHNUMEZCVHl4RFFVRkRMRWRCUVcxQ08xRkJRemxDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJUdFpRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUVVVN1VVRkROMElzUTBGQlF5eERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGTlRTeFJRVUZSTzFGQlExZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFWa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNUVMRU5CUVVNN1NVRlJUU3hQUVVGUExFTkJRVU1zUjBGQmJVSTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNdlFpeFBRVUZQTEVsQlFVa3NRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCVTAwc1ZVRkJWU3hEUVVGRExFZEJRVzlDTEVWQlFVVXNUVUZCWXp0UlFVTnNSQ3hQUVVGUExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRE8wbEJSVTBzVVVGQlVUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQldTeEZRVUZGTEVWQlFVVTdXVUZETDBJc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlR0blFrRkRWQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVZjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNKR08xbEJRMFFzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCVTAwc1RVRkJUU3hEUVVGRExGTkJRVzFDTzFGQlF6ZENMRTlCUVU4c2IwSkJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRV2REVFN4SlFVRkpMRU5CUVVNc1RVRkJiMElzUlVGQlJTeEhRVUZ2UWp0UlFVTnNSQ3hKUVVGSkxFVkJRVVVzUjBGQlZ5eE5RVUZOTEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJUdFpRVU5PTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkNPMkZCUVUwN1dVRkRTQ3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNeFFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WlFVRlpMRVZCUVVVN1owSkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCU3l4RlFVRkZMRU5CUVVzc1JVRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZETzJGQlFVVTdXVUZET1VVc1NVRkJTU3hOUVVGTkxFdEJRVXNzVjBGQlZ5eEZRVUZITzJkQ1FVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVXNzUlVGQlJTeERRVUZMTEVWQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVGRk8xbEJRemxGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlVTeEZRVUZGTEVWQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyaEZPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFUUkRUU3hIUVVGSExFTkJRVU1zUzBGQk1rSXNSVUZCUlN4SFFVRnZRanRSUVVONFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVU4c1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlF6bENMRTFCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUlVGQlJUdFpRVU5zUWl4SlFVRkpMRWRCUVVjc1IwRkJReXhEUVVGRExFTkJRVU03V1VGRFZpeFBRVUZQTEVOQlFVTXNSMEZCVlN4RlFVRkZMRU5CUVZFc1JVRkJSU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVVc1EwRkJReXhEUVVGRE8xRkJRMFlzVTBGQlV5eExRVUZMTzFsQlExWXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRVQ3hSUVVGUkxFdEJRVXNzUlVGQlJUdG5Ra0ZEV0N4TFFVRkxMRlZCUVZVN2IwSkJRVVVzUlVGQlJTeEhRVUZITEZGQlFWRXNSVUZCUlN4RFFVRkRPMjlDUVVGRExFMUJRVTA3WjBKQlEzaERMRXRCUVVzc1RVRkJUVHR2UWtGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMjlDUVVGRExFMUJRVTA3WjBKQlEyeERMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUjBGQmJVSXNTMEZCU3l4RFFVRkRPMkZCUXk5RE8xbEJRMFFzVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZEWkN4RFFVRkRPMUZCUlVRc1NVRkJTU3hGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZCTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRMME1zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNN1dVRkRiRUlzVVVGQlVTeEZRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkRlRUlzU1VGQlNTeEZRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlV5eEZRVUZGTEZGQlFXVXNSVUZCUlN4SlFVRlpMRVZCUVVVc1JVRkJSVHRuUWtGRE5VUXNTVUZCU1N4RFFVRkRMRVZCUVVVN2IwSkJRMGdzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRlhMRVZCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZEYmtRN2NVSkJRVTA3YjBKQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGakxFVkJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU40UkR0blFrRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlF6dFpRVU5tTEVOQlFVTXNRMEZCUXp0WlFVTkdMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFOQlEzUkNMRU5CUVVNc1EwRkJRenRSUVVOSUxFOUJRVThzVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRlRUeXhQUVVGUExFTkJRVU1zUjBGQmJVSTdVVUZGTDBJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dFRRVUZGTzFGQlF6RkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVNdlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFWTlBMRTlCUVU4c1EwRkJReXhKUVVGakxFVkJRVVVzUzBGQll5eEZRVUZGTEZGQlFWRXNSMEZCUXl4SlFVRkpPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJZc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkRla0lzU1VGQlNTeExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVONFFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJWU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFUXNTVUZCU1N4UlFVRlJMRVZCUVVVN1owSkJRMVlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03WVVGRGJrSTdVMEZEU2p0aFFVRk5PMWxCUTBnc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5d3lRa0ZCTWtJc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMmhGTzBsQlEwd3NRMEZCUXp0SlFWTlBMRk5CUVZNc1EwRkJReXhIUVVGdFFqdFJRVU5xUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUzBGQlN5eEhRVUZuUWl4RlFVRkZMRU5CUVVNN1VVRkRPVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCVVN4RlFVRkZMRVZCUVVVN1dVRkRlRU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03V1VGRE5VTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5tTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN1owSkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yRkJRVVU3VTBGRGVFTTdVVUZEUkN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVk1zUTBGQldTeEZRVUZGTEVOQlFWazdXVUZETVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZITEZWQlFWVXNTVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRVVU3V1VGRGJFUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hMUVVGSExGVkJRVlVzU1VGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0aFFVRkZPMWxCUTJwRUxFOUJRVThzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTBnc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGTlR5eERRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRnpRanRSUVVOd1F5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEycERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnVReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGVrSTdTVUZEVEN4RFFVRkRPenRCUVdoWlRDeHZRa0ZwV1VNN1FVRTNXR2xDTEZOQlFVa3NSMEZCUnp0SlFVVnFRaXhOUVVGTkxFVkJRVmtzVVVGQlVUdEpRVVV4UWl4SlFVRkpMRVZCUVdNc1RVRkJUVHRKUVVWNFFpeEpRVUZKTEVWQlFXTXNUVUZCVFR0SlFVVjRRaXhSUVVGUkxFVkJRVlVzVlVGQlZUdEpRVVUxUWl4UFFVRlBMRVZCUVZjc1UwRkJVenREUVVVNVFpeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGF0YV8xID0gcmVxdWlyZShcIi4vRGF0YVwiKTtcbmNvbnN0IGhzdXRpbF8xID0gcmVxdWlyZShcImhzdXRpbFwiKTtcbmNvbnN0IGxvZyA9IG5ldyBoc3V0aWxfMS5Mb2coJ0RhdGFGaWx0ZXJzJyk7XG5mdW5jdGlvbiByZXNvbHZlVGVybWluYWxDb25kaXRpb24obmFtZSwgdmFsLCByb3csIGNvbE51bWJlcikge1xuICAgIGNvbnN0IGNvbCA9IGNvbE51bWJlcihuYW1lKTtcbiAgICBjb25zdCB2YWxJc0Z1bmN0aW9uID0gKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xuICAgIGNvbnN0IHZhbElzQXJyYXkgPSAoKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiAodmFsLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSk7XG4gICAgaWYgKGlzTmFOKGNvbCkpIHtcbiAgICAgICAgbG9nLndhcm4oYGNvbHVtbiBuYW1lICcke25hbWV9JyBjYW5ub3QgYmUgcmVzb2x2ZWQgaW4gdGVybWluYWwgY29uZGl0aW9uICR7bmFtZX09JHt2YWx9YCk7XG4gICAgICAgIGxvZy53YXJuKHJvdyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsSXNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsKHJvd1tjb2xdLCByb3cpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxJc0FycmF5KSB7XG4gICAgICAgIHJldHVybiAodmFsLmxlbmd0aCA9PT0gMCkgfHwgdmFsLnNvbWUoKHYpID0+IHJvd1tjb2xdID09PSB2KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAocm93W2NvbF0gPT09IHZhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZUNvbmRpdGlvbihjb25kaXRpb24sIHJvdywgciwgY29sTnVtYmVyLCBhbmQpIHtcbiAgICBsZXQgb3JSZXN1bHQgPSBmYWxzZTtcbiAgICBsZXQgYW5kUmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoY29uZGl0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoY29uZGl0aW9uID09PSByKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbWMgPSBjb25kaXRpb247XG4gICAgICAgIGlmIChtYy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGFuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFuZCA/XG4gICAgICAgICAgICAgICAgbWMuZXZlcnkoKGNkKSA9PiByZXNvbHZlQ29uZGl0aW9uKGNkLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSkgOlxuICAgICAgICAgICAgICAgIG1jLnNvbWUoKGNkKSA9PiByZXNvbHZlQ29uZGl0aW9uKGNkLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25NZXQgPSBhbmQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0Q29uZCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLm9yLCByb3csIHIsIGNvbE51bWJlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQgPSByZXNvbHZlQ29uZGl0aW9uKHNldENvbmQuYW5kLCByb3csIHIsIGNvbE51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9ICFyZXNvbHZlQ29uZGl0aW9uKHNldENvbmQubm90LCByb3csIHIsIGNvbE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uZGl0aW9uTWV0ID0gcmVzb2x2ZVRlcm1pbmFsQ29uZGl0aW9uKG5hbWUsIGNvbmRpdGlvbltuYW1lXSwgcm93LCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uTWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmRSZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVucmVjb2duaXplZCBjb25kaXRpb246ICR7SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9uKX1gKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYW5kID8gYW5kUmVzdWx0IDogb3JSZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXIoZGF0YSwgY29uZCkge1xuICAgIGNvbnN0IGNvbE51bWJlciA9IChuYW1lKSA9PiBkYXRhLmNvbE51bWJlcihuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGFfMS5EYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY29sTmFtZXM6IGRhdGEuY29sTmFtZXMoKSxcbiAgICAgICAgICAgIHJvd3M6IGRhdGEuZ2V0RGF0YSgpLmZpbHRlcigocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2VlcCA9IHJlc29sdmVDb25kaXRpb24oY29uZCwgcm93LCBpLCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZWVwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nLndhcm4oZXJyKTtcbiAgICAgICAgbG9nLndhcm4oZXJyLnN0YWNrKTtcbiAgICB9XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBZVVpwYkhSbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UkdGMFlVWnBiSFJsY25NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUV5U0VFc2FVTkJRV2RFTzBGQlEyaEVMRzFEUVVGblJEdEJRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1dVRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBGQk5FSndSaXhUUVVGVExIZENRVUYzUWl4RFFVRkRMRWxCUVZjc1JVRkJSU3hIUVVGUExFVkJRVVVzUjBGQlZ5eEZRVUZGTEZOQlFTdENPMGxCUTJoSExFMUJRVTBzUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNMVFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzBsQlEyeEVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVOYUxFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzT0VOQlFUaERMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6RkdMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FqdFRRVUZOTEVsQlFVa3NZVUZCWVN4RlFVRkZPMUZCUlhSQ0xFOUJRVThzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dExRVU0zUWp0VFFVRk5MRWxCUVVrc1ZVRkJWU3hGUVVGRk8xRkJSVzVDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU53UlR0VFFVRk5PMUZCUTBnc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVNM1FqdEJRVU5NTEVOQlFVTTdRVUZUUkN4VFFVRlRMR2RDUVVGblFpeERRVUZETEZOQlFXMUNMRVZCUVVVc1IwRkJWeXhGUVVGRkxFTkJRVkVzUlVGQlJTeFRRVUVyUWl4RlFVRkZMRWRCUVZrN1NVRkRMMGNzU1VGQlNTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUTNKQ0xFbEJRVWtzVTBGQlV5eEhRVUZGTEVsQlFVa3NRMEZCUXp0SlFVVndRaXhKUVVGSkxGTkJRVk1zUzBGQlJ5eFRRVUZUTEVWQlFVVTdVVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVGRk8xTkJSM1JETEVsQlFVa3NUMEZCVHl4VFFVRlRMRXRCUVVzc1VVRkJVU3hGUVVGRk8xRkJRVVVzVDBGQlR5eERRVUZETEZOQlFWTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGRk8xTkJSMmhGTEVsQlFVa3NUMEZCVHl4VFFVRlRMRXRCUVVzc1VVRkJVU3hGUVVGRk8xRkJSWEJETEUxQlFVMHNSVUZCUlN4SFFVRnRRaXhUUVVGVExFTkJRVU03VVVGSGNrTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU42UWl4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlFVVXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJRenRoUVVGRk8xbEJRM1pETEVsQlFVa3NSVUZCUlN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1lVRkJSVHRaUVVWMFF5eFBRVUZQTEVkQlFVY3NRMEZCUVN4RFFVRkRPMmRDUVVOUUxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRmxMRVZCUVVVc1JVRkJSU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6ZEZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZsTEVWQlFVVXNSVUZCUlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08yRkJSVWs3V1VGRFJDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVRkZPMWxCUTNSRExFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NVMEZCVXl4RlFVRkZPMmRDUVVNeFFpeEpRVUZKTEZsQlFWa3NSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJRM1pDTEUxQlFVMHNUMEZCVHl4SFFVRnZRaXhUUVVGVExFTkJRVU03WjBKQlJ6TkRMRkZCUVZFc1NVRkJTU3hGUVVGRk8yOUNRVU5XTEV0QlFVc3NTVUZCU1R0M1FrRkJSeXhaUVVGWkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dDNRa0ZCUXl4TlFVRk5PMjlDUVVONlJpeExRVUZMTEV0QlFVczdkMEpCUVVVc1dVRkJXU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03ZDBKQlFVTXNUVUZCVFR0dlFrRkRla1lzUzBGQlN5eExRVUZMTzNkQ1FVRkZMRmxCUVZrc1IwRkJSeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenQzUWtGQlF5eE5RVUZOTzI5Q1FVTndSaXhQUVVGUExFTkJRVU1zUTBGQlNTeFpRVUZaTEVkQlFVY3NkMEpCUVhkQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdhVUpCUXpsR08yZENRVU5FTEVsQlFVa3NXVUZCV1N4RlFVRkZPMjlDUVVGRkxGRkJRVkVzUjBGQlNTeEpRVUZKTEVOQlFVTTdiMEpCUVVVc1NVRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJUdDNRa0ZCUlN4TlFVRk5PM0ZDUVVGRk8ybENRVUZETzNGQ1FVTjZRenR2UWtGQlJTeFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRPMjlDUVVGRExFbEJRVWNzUjBGQlJ5eEZRVUZITzNkQ1FVRkZMRTFCUVUwN2NVSkJRVVU3YVVKQlFVTTdZVUZET1VRN1UwRkRTanRMUVVOS08xTkJRVTA3VVVGRFNDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMREpDUVVFeVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4wUlN4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FqdEpRVU5FTEU5QlFVOHNSMEZCUnl4RFFVRkJMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXp0QlFVTnlReXhEUVVGRE8wRkJVMFFzVTBGQlowSXNUVUZCVFN4RFFVRkRMRWxCUVZNc1JVRkJSU3hKUVVGak8wbEJRelZETEUxQlFVMHNVMEZCVXl4SFFVRkhMRU5CUVVNc1NVRkJWeXhGUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVazdVVUZEUVN4UFFVRlBMRWxCUVVrc1YwRkJTU3hEUVVGRE8xbEJRMW9zU1VGQlNTeEZRVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRlRUlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkRla0lzU1VGQlNTeEZRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZYTEVWQlFVVXNRMEZCVVN4RlFVRkZMRVZCUVVVN1owSkJRMnBFTEUxQlFVMHNTVUZCU1N4SFFVRkhMR2RDUVVGblFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dFpRVU5vUWl4RFFVRkRMRU5CUVVNN1UwRkRUQ3hEUVVGRExFTkJRVU03UzBGRFRqdEpRVUZETEU5QlFVMHNSMEZCUnl4RlFVRkZPMUZCUTFRc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMHRCUTNaQ08wRkJRMHdzUTBGQlF6dEJRV1pFTEhkQ1FXVkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGF0YV8xID0gcmVxdWlyZShcIi4vRGF0YVwiKTtcbmV4cG9ydHMuRGF0YSA9IERhdGFfMS5EYXRhO1xuZXhwb3J0cy5UeXBlcyA9IERhdGFfMS5UeXBlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3dyUWtGaE9FSTdRVUZRY2tJc2MwSkJRVUVzU1VGQlNTeERRVUZCTzBGQlMwb3NkVUpCUVVFc1MwRkJTeXhEUVVGQkluMD0iXSwic291cmNlUm9vdCI6IiJ9