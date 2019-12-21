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
exports.log = log_1.log;
exports.Log = log_1.Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFBMUMsa0NBQUEsT0FBTyxDQUFBO0FBQUUsZ0NBQUEsS0FBSyxDQUFBO0FBQ3ZCLGlEQUFtRDtBQUExQywrQkFBQSxJQUFJLENBQUE7QUFDYixpREFBbUQ7QUFBMUMsdUNBQUEsWUFBWSxDQUFBO0FBQ3JCLHVDQUE4QztBQUFyQyxtQ0FBQSxhQUFhLENBQUE7QUFDdEIsK0JBQTBDO0FBQWpDLHNCQUFBLElBQUksQ0FBQTtBQUFFLG9CQUFBLEVBQUUsQ0FBQTtBQUNqQixtQ0FBNEM7QUFBbkMseUJBQUEsS0FBSyxDQUFBO0FBQ2QsNkJBQXlDO0FBQWhDLG9CQUFBLEdBQUcsQ0FBQTtBQUFTLG9CQUFBLEdBQUcsQ0FBQSJ9

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
    constructor(_prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
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
        return __awaiter(this, void 0, void 0, function* () { return yield this.out(Log.ERROR, msg); });
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
    inspect(msg, depth = 3, indent = '   ') {
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
    static makeLogFn(prefix) {
        const instance = new Log(prefix);
        const newLog = ((prefix) => Log.makeLogFn(prefix));
        return instance.addPoperties(newLog);
    }
    addPoperties(logFn) {
        logFn.DEBUG = Log.DEBUG;
        logFn.INFO = Log.INFO;
        logFn.WARN = Log.WARN;
        logFn.ERROR = Log.ERROR;
        logFn.level = this.level.bind(this);
        logFn.debug = this.debug.bind(this);
        logFn.info = this.info.bind(this);
        logFn.warn = this.warn.bind(this);
        logFn.error = this.error.bind(this);
        logFn.format = this.format.bind(this);
        logFn.prefix = this.prefix.bind(this);
        logFn.out = this.out.bind(this);
        logFn.config = this.config.bind(this);
        logFn.inspect = this.inspect.bind(this);
        return logFn;
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
Log.globalLevel = Log.levels[Log.INFO];
exports.log = Log.makeLogFn('');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQStFQSxpQ0FBOEI7QUE4QjlCLE1BQWEsR0FBRztJQStCWixZQUFZLE9BQWM7UUFIMUIsZ0JBQVcsR0FBa0IsU0FBUyxDQUFDO1FBQ3ZDLGlCQUFZLEdBQU0sRUFBRSxDQUFDO0lBR3JCLENBQUM7SUFrQkQsS0FBSyxDQUFDLFdBQW1CLEVBQUUsY0FBdUI7UUFDOUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNuRCxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDM0IsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUN2QjthQUFNLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztTQUNoQzthQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNoQyxJQUFJLGNBQWMsRUFBRTtnQkFBRSxHQUFHLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzthQUFFO2lCQUMvQjtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzthQUFFO1lBQ3BELE1BQU0sR0FBRyxHQUFHLE9BQU8sY0FBYyxDQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLGNBQWMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUM7WUFDaEosSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFD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

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
const log = hsutil_1.log('Data');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0NBQWtEO0FBQ2xELG1DQUEyQztBQUFDLE1BQU0sR0FBRyxHQUFHLFlBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQWlFckUsSUFBWSxLQVdYO0FBWEQsV0FBWSxLQUFLO0lBRVQsMEJBQXFCLENBQUE7SUFFckIsc0JBQW1CLENBQUE7SUFFbkIsc0JBQW1CLENBQUE7SUFFbkIsOEJBQXVCLENBQUE7SUFFdkIsNEJBQXNCLENBQUE7QUFDOUIsQ0FBQyxFQVhXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQVdoQjtBQWFELFNBQVMsTUFBTSxDQUFDLEdBQVcsRUFBRSxTQUFTLEdBQUMsSUFBSTtJQUN2QyxJQUFJLENBQU0sQ0FBQztJQUNYLElBQUksR0FBRyxZQUFZLElBQUksRUFBRTtRQUFFLE9BQWEsR0FBRyxDQUFDO0tBQUU7SUFDOUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFVLEdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFdBQVcsQ0FBRSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakQ7S0FDSjtJQUNE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

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
const log = hsutil_1.log('DataFilters');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGF0YUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUEySEEsaUNBQWdEO0FBQ2hELG1DQUFnRDtBQUFDLE1BQU0sR0FBRyxHQUFHLFlBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQTRCakYsU0FBUyx3QkFBd0IsQ0FBQyxJQUFXLEVBQUUsR0FBTyxFQUFFLEdBQVcsRUFBRSxTQUErQjtJQUNoRyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxVQUFVLENBQUMsQ0FBQztJQUNsRCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDWixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLDhDQUE4QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMxRixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxLQUFLLENBQUM7S0FDaEI7U0FBTSxJQUFJLGFBQWEsRUFBRTtRQUV0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLFVBQVUsRUFBRTtRQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDcEU7U0FBTTtRQUNILE9BQU8sQ0FBQyxH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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFZOEI7QUFOckIsc0JBQUEsSUFBSSxDQUFBO0FBS0osdUJBQUEsS0FBSyxDQUFBIn0=

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0RhdGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvQ2hlY2tzdW0uanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9EYXRlLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvTnVtYmVyLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvVGltZWRQcm9taXNlcy5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvbG9nLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vRGF0YS5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4vYmluL0RhdGFGaWx0ZXJzLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCttQjs7Ozs7Ozs7Ozs7O0FDWDlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVzSTs7Ozs7Ozs7Ozs7O0FDbEQ5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtZDs7Ozs7Ozs7Ozs7O0FDUjlCO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw2Q0FBNkMsd0JBQXdCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlLEVBQUU7QUFDL0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0MsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJDQUEyQyxtekY7Ozs7Ozs7Ozs7OztBQ3ZFOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsbUJBQU8sQ0FBQyw0SEFBaUI7QUFDL0M7QUFDQTtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDRIQUFpQjtBQUMvQztBQUNBLHNCQUFzQixtQkFBTyxDQUFDLDRIQUFpQjtBQUMvQztBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGtIQUFZO0FBQ3JDO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLDBHQUFRO0FBQzdCO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsOEdBQVU7QUFDakM7QUFDQSxZQUFZLG1CQUFPLENBQUMsd0dBQU87QUFDM0I7QUFDQTtBQUNBLDJDQUEyQyx1aUI7Ozs7Ozs7Ozs7OztBQ25COUI7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsMEdBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QyxhQUFhLDRCQUE0QixRQUFRLDRCQUE0QjtBQUMxSjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYSxxQkFBcUIsYUFBYTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCx1Q0FBdUMsRUFBRTtBQUN0RztBQUNBO0FBQ0EsNkRBQTZELHNDQUFzQyxFQUFFO0FBQ3JHO0FBQ0E7QUFDQSw2REFBNkQsc0NBQXNDLEVBQUU7QUFDckc7QUFDQTtBQUNBLDZEQUE2RCx1Q0FBdUMsRUFBRTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWtCLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxLQUFLLEdBQUcsS0FBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsSUFBSTtBQUM5RDtBQUNBO0FBQ0EsK0JBQStCLGtHQUFrRztBQUNqSTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQyxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsSUFBSSw0REFBNEQsc0JBQXNCLFlBQVk7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVyxFQUFFLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQ0FBK0M7QUFDakUsaUJBQWlCLDZDQUE2QztBQUM5RCxpQkFBaUIsNkNBQTZDO0FBQzlELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMitROzs7Ozs7Ozs7Ozs7QUN0SzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsc0JBQXNCLG1CQUFPLENBQUMsMkNBQWU7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsMkdBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYSxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsKzNmOzs7Ozs7Ozs7Ozs7QUNyWDlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLDJHQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxLQUFLLDZDQUE2QyxLQUFLLEdBQUcsSUFBSTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDIzSTs7Ozs7Ozs7Ozs7O0FDeEc5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0EsMkNBQTJDLDJOIiwiZmlsZSI6ImhzRGF0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jpbi9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgdmFyIGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBzaG9ydENoZWNrU3VtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJobFkydHpkVzB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlEyaGxZMnR6ZFcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZSUXl4VFFVRm5RaXhoUVVGaExFTkJRVU1zUTBGQlVUdEpRVU51UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU03U1VGRGNrSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU51UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRekZDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU4wUXp0SlFVTkVMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRekZETEVOQlFVTTdRVUZRUkN4elEwRlBReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb250aFN0ciA9IFtcbiAgICBbJ0phbicsICdKYW51YXJ5J10sIFsnRmViJywgJ0ZlYnJ1YXJ5J10sIFsnTWFyJywgJ01hcmNoJ10sIFsnQXByJywgJ0FwcmlsJ10sIFsnTWF5JywgJ01heSddLCBbJ0p1bicsICdKdW5lJ10sXG4gICAgWydKdWwnLCAnSnVseSddLCBbJ0F1ZycsICdBdWd1c3QnXSwgWydTZXAnLCAnU2VwdGVtYmVyJ10sIFsnT2N0JywgJ09jdG9iZXInXSwgWydOb3YnLCAnTm92ZW1iZXInXSwgWydEZWMnLCAnRGVjZW1iZXInXVxuXTtcbmNvbnN0IGRheVN0ciA9IFtcbiAgICBbJ1N1bicsICdTdW5kYXknXSwgWydNb24nLCAnTW9uZGF5J10sIFsnVHVlJywgJ1R1ZXNkYXknXSwgWydXZWQnLCAnV2VkbmVzZGF5J10sIFsnVGh1JywgJ1RodXJzZGF5J10sIFsnRnJpJywgJ0ZyaWRheSddLCBbJ1NhdCcsICdTYXR1cmRheSddXG5dO1xuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZGlnaXRzKSB7XG4gICAgdmFyIHIgPSAnJyArIG51bWJlcjtcbiAgICB3aGlsZSAoci5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBkYXRlKGZvcm1hdFN0cmluZywgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmb3JtYXRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgP1xuICAgICAgICAnaW52YWxpZCcgOlxuICAgICAgICBmb3JtYXRTdHJpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVlZWS9nLCAnJyArIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVkvZywgJycgKyAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNL2csICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREQvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRC9nLCAnJyArIGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoaC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRIb3VycygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laC9nLCAnJyArIGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbW0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbS9nLCAnJyArIGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVzcy9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCwgMSkpO1xufVxuZXhwb3J0cy5kYXRlID0gZGF0ZTtcbmV4cG9ydHMubXMgPSB7XG4gICAgZnJvbU1pbnV0ZXM6IChtaW4pID0+IDEwMDAgKiA2MCAqIG1pbixcbiAgICBmcm9tSG91cnM6IChoKSA9PiAxMDAwICogNjAgKiA2MCAqIGgsXG4gICAgZnJvbURheXM6IChkKSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogZCxcbiAgICBmcm9tV2Vla3M6ICh3KSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAqIHcsXG4gICAgdG9NaW51dGVzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCksXG4gICAgdG9Ib3VyczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCksXG4gICAgdG9EYXlzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpLFxuICAgIHRvV2Vla3M6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlFWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCWlVFc1RVRkJUU3hSUVVGUkxFZEJRVWM3U1VGRFlpeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU03U1VGRE5VY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETzBOQlFVTXNRMEZCUXp0QlFVYzFTQ3hOUVVGTkxFMUJRVTBzUjBGQlJ6dEpRVU5ZTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJRenREUVVGRExFTkJRVU03UVVGSE0wa3NVMEZCVXl4WlFVRlpMRU5CUVVNc1RVRkJZU3hGUVVGRkxFMUJRV0U3U1VGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEZRVUZGTzFGQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGQlJUdEpRVU14UXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVOaUxFTkJRVU03UVVGalJDeFRRVUZuUWl4SlFVRkpMRU5CUVVNc1dVRkJiVUlzUlVGQlJTeEpRVUZKTEVkQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1NVRkRja1FzVDBGQlR5eERRVUZETEU5QlFVOHNXVUZCV1N4TFFVRkxMRkZCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEZOQlFWTXNRMEZCUVN4RFFVRkRPMUZCUTFZc1dVRkJXVHRoUVVOUUxFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dGhRVU40UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxFVkJRVVVzUjBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU01UXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWtzUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzaERMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSkxFVkJRVVVzUjBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1lVRkRia01zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJ4RUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVY3NSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dGhRVU51UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGNFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJTU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMkZCUTNSRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETVVRc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hIUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTTFSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRla1VzUTBGQlF6dEJRWFJDUkN4dlFrRnpRa003UVVGSFdTeFJRVUZCTEVWQlFVVXNSMEZCUnp0SlFVTmtMRmRCUVZjc1JVRkJTeXhEUVVGRExFZEJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhIUVVGSE8wbEJRek5ETEZOQlFWTXNSVUZCVHl4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJRenRKUVVNMVF5eFJRVUZSTEVWQlFWRXNRMEZCUXl4RFFVRlJMRVZCUVVrc1JVRkJSU3hEUVVGRExFbEJRVWtzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRE8wbEJReTlETEZOQlFWTXNSVUZCVHl4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETzBsQlEycEVMRk5CUVZNc1JVRkJUeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUTBGQlF6dEpRVU0xUXl4UFFVRlBMRVZCUVZNc1EwRkJReXhGUVVGVExFVkJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlF5OURMRTFCUVUwc1JVRkJWU3hEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUTJ4RUxFOUJRVThzUlVGQlV5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF6dERRVU4yUkN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiByb3VuZChuLCBkID0gMCkge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxMCwgZCk7XG4gICAgY29uc3QgciA9IE1hdGgucm91bmQobiAqIGYpIC8gZjtcbiAgICByZXR1cm4gJycgKyByO1xufVxuZXhwb3J0cy5yb3VuZCA9IHJvdW5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVG5WdFltVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDA1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFWZERMRk5CUVdkQ0xFdEJRVXNzUTBGQlF5eERRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkRMRU5CUVVNN1NVRlBhRU1zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkNMRTlCUVU4c1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5tTEVOQlFVTTdRVUZXUkN4elFrRlZReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMpOyB9KTtcbn1cbmV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQ7XG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmRlbGF5ID0gZGVsYXk7XG5jbGFzcyBQYWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNlID0gMTAwLCBtYXhDb25jdXJyZW50ID0gLTEpIHtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gLTE7XG4gICAgICAgIHRoaXMud2FpdFVudGlsID0gMDtcbiAgICAgICAgdGhpcy53YWl0Q291bnQgPSAwO1xuICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkID0gMDtcbiAgICAgICAgdGhpcy5wYWNlID0gcGFjZSArIDU7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgfVxuICAgIGdldFdhaXRDb3VudCgpIHsgcmV0dXJuIHRoaXMud2FpdENvdW50OyB9XG4gICAgZ2V0Q2FsbGluZ0NvdW50KCkgeyByZXR1cm4gdGhpcy5iZWluZ0NhbGxlZDsgfVxuICAgIGFkZChmbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0VW50aWwgPCBhZGRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0VW50aWwgPSBhZGRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMud2FpdFVudGlsIC0gYWRkVGltZTtcbiAgICAgICAgICAgIHRoaXMud2FpdFVudGlsICs9IHRoaXMucGFjZSArIDU7XG4gICAgICAgICAgICB0aGlzLndhaXRDb3VudCsrO1xuICAgICAgICAgICAgeWllbGQgZGVsYXkoZGlmZikoKTtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRMb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhDb25jdXJyZW50IDwgMCB8fCB0aGlzLmJlaW5nQ2FsbGVkIDwgdGhpcy5tYXhDb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRMb29wLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdhaXRMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud2FpdENvdW50LS07XG4gICAgICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkKys7XG4gICAgICAgICAgICBjb25zdCByZXQgPSB5aWVsZCBmbihEYXRlLm5vdygpIC0gYWRkVGltZSk7XG4gICAgICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkLS07XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlBhY2UgPSBQYWNlO1xuZnVuY3Rpb24gcHJvbWlzZUNoYWluKHRhc2tzLCBpbml0aWFsUmVzdWx0ID0gW10pIHtcbiAgICByZXR1cm4gdGFza3MucmVkdWNlKChjaGFpbiwgdGFzaykgPT4gY2hhaW4udGhlbigoX3Jlc3VsdHMpID0+IFByb21pc2UucmVzb2x2ZSh0YXNrKF9yZXN1bHRzKSkudGhlbigocikgPT4ge1xuICAgICAgICBfcmVzdWx0cy5wdXNoKHIpO1xuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfSkpLCBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFJlc3VsdCkpO1xufVxuZXhwb3J0cy5wcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2x0WldSUWNtOXRhWE5sY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVVhVzFsWkZCeWIyMXBjMlZ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN08wRkJWMEVzVTBGQlowSXNUMEZCVHl4RFFVRkRMRVZCUVZNN1NVRkROMElzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjZSU3hEUVVGRE8wRkJSa1FzTUVKQlJVTTdRVUYxUWtRc1UwRkJaMElzUzBGQlN5eERRVUZETEVWQlFWTTdTVUZETTBJc1QwRkJUeXhEUVVGSkxFbEJRVThzUlVGQllTeEZRVUZGTzFGQlF6ZENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZ6UWl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1F5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGT1JDeHpRa0ZOUXp0QlFXRkVMRTFCUVdFc1NVRkJTVHRKUVZsaUxGbEJRVmtzU1VGQlNTeEhRVUZETEVkQlFVY3NSVUZCUlN4aFFVRmhMRWRCUVVNc1EwRkJReXhEUVVGRE8xRkJXRGxDTEd0Q1FVRmhMRWRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmNrSXNZMEZCVXl4SFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOd1FpeGpRVUZUTEVkQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNCQ0xHZENRVUZYTEVkQlFVOHNRMEZCUXl4RFFVRkRPMUZCVVhoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUXNXVUZCV1N4TFFVRlJMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVNc1pVRkJaU3hMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRlJlRU1zUjBGQlJ5eERRVUZETEVWQlFXbERPenRaUVVOMlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRE0wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFOUJRVThzUlVGQlJUdG5Ra0ZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFOUJRVThzUTBGQlF6dGhRVUZGTzFsQlF6TkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUTNSRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGFFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xbEJRMnBDTEUxQlFVMHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03V1VGRGNFSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdG5Ra0ZEZUVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzI5Q1FVTnNRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0M1FrRkRha1VzVDBGQlR5eEZRVUZGTEVOQlFVTTdjVUpCUTJJN2VVSkJRVTA3ZDBKQlEwZ3NWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dHhRa0ZETlVJN1owSkJRMHdzUTBGQlF5eERRVUZETzJkQ1FVTkdMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRMllzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU0N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRGFrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xbEJRMjVDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVONlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1dVRkRia0lzVDBGQlR5eEhRVUZITEVOQlFVTTdVVUZEWml4RFFVRkRPMHRCUVVFN1EwRkRTanRCUVdwRVJDeHZRa0ZwUkVNN1FVRlhSQ3hUUVVGblFpeFpRVUZaTEVOQlFVa3NTMEZCY1VNc1JVRkJSU3huUWtGQmEwSXNSVUZCUlR0SlFVTjJSaXhQUVVGUExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TFFVRnJRaXhGUVVGRkxFbEJRU3RDTEVWQlFXZENMRVZCUVVVc1EwRkZkRVlzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZrc1JVRkJSU3hGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkhMRVZCUVVVc1JVRkJSVHRSUVVWMFJTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTNCQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEwZ3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zUTBGRGFrTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRldSQ3h2UTBGVlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUaW1lZFByb21pc2VzXzEgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy50aW1lb3V0ID0gVGltZWRQcm9taXNlc18xLnRpbWVvdXQ7XG5leHBvcnRzLmRlbGF5ID0gVGltZWRQcm9taXNlc18xLmRlbGF5O1xudmFyIFRpbWVkUHJvbWlzZXNfMiA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLlBhY2UgPSBUaW1lZFByb21pc2VzXzIuUGFjZTtcbnZhciBUaW1lZFByb21pc2VzXzMgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy5wcm9taXNlQ2hhaW4gPSBUaW1lZFByb21pc2VzXzMucHJvbWlzZUNoYWluO1xudmFyIENoZWNrc3VtXzEgPSByZXF1aXJlKFwiLi9DaGVja3N1bVwiKTtcbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IENoZWNrc3VtXzEuc2hvcnRDaGVja1N1bTtcbnZhciBEYXRlXzEgPSByZXF1aXJlKFwiLi9EYXRlXCIpO1xuZXhwb3J0cy5kYXRlID0gRGF0ZV8xLmRhdGU7XG5leHBvcnRzLm1zID0gRGF0ZV8xLm1zO1xudmFyIE51bWJlcl8xID0gcmVxdWlyZShcIi4vTnVtYmVyXCIpO1xuZXhwb3J0cy5yb3VuZCA9IE51bWJlcl8xLnJvdW5kO1xudmFyIGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuZXhwb3J0cy5sb2cgPSBsb2dfMS5sb2c7XG5leHBvcnRzLkxvZyA9IGxvZ18xLkxvZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hwUkVGQmJVUTdRVUZCTVVNc2EwTkJRVUVzVDBGQlR5eERRVUZCTzBGQlFVVXNaME5CUVVFc1MwRkJTeXhEUVVGQk8wRkJRM1pDTEdsRVFVRnRSRHRCUVVFeFF5d3JRa0ZCUVN4SlFVRkpMRU5CUVVFN1FVRkRZaXhwUkVGQmJVUTdRVUZCTVVNc2RVTkJRVUVzV1VGQldTeERRVUZCTzBGQlEzSkNMSFZEUVVFNFF6dEJRVUZ5UXl4dFEwRkJRU3hoUVVGaExFTkJRVUU3UVVGRGRFSXNLMEpCUVRCRE8wRkJRV3BETEhOQ1FVRkJMRWxCUVVrc1EwRkJRVHRCUVVGRkxHOUNRVUZCTEVWQlFVVXNRMEZCUVR0QlFVTnFRaXh0UTBGQk5FTTdRVUZCYmtNc2VVSkJRVUVzUzBGQlN5eERRVUZCTzBGQlEyUXNOa0pCUVhsRE8wRkJRV2hETEc5Q1FVRkJMRWRCUVVjc1EwRkJRVHRCUVVGVExHOUNRVUZCTEVkQlFVY3NRMEZCUVNKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEYXRlXzEgPSByZXF1aXJlKFwiLi9EYXRlXCIpO1xuY2xhc3MgTG9nIHtcbiAgICBjb25zdHJ1Y3RvcihfcHJlZml4KSB7XG4gICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gJyc7XG4gICAgfVxuICAgIGxldmVsKG5ld0xldmVsU3ltLCBzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICBsZXQgbmV3TGV2ZWwgPSBMb2cubGV2ZWxzW25ld0xldmVsU3ltXSB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGxldCBvbGRMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBpZiAobmV3TGV2ZWxTeW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3TGV2ZWwgPSBvbGRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdMZXZlbFN5bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChMb2cubGV2ZWxzW25ld0xldmVsU3ltXSkge1xuICAgICAgICAgICAgaWYgKHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmdsb2JhbExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgbmV3ICR7c2V0R2xvYmFsTGV2ZWwgPyAnZ2xvYmFsJyA6IHRoaXMucmVwb3J0UHJlZml4fSBsb2cgbGV2ZWwgJHtuZXdMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9ICh3YXMgJHtvbGRMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9KWA7XG4gICAgICAgICAgICB0aGlzLm91dCgobmV3TGV2ZWwuc3ltID09PSBvbGRMZXZlbC5zeW0pID8gTG9nLkRFQlVHIDogTG9nLklORk8sIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIGB1bmtvd24gbGV2ZWwgJHtuZXdMZXZlbFN5bX07IGxvZyBsZXZlbCByZW1haW5zICR7b2xkTGV2ZWwuc3ltfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMZXZlbC5zeW07XG4gICAgfVxuICAgIGRlYnVnKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCB0aGlzLm91dChMb2cuREVCVUcsIG1zZyk7IH0pO1xuICAgIH1cbiAgICBpbmZvKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCB0aGlzLm91dChMb2cuSU5GTywgbXNnKTsgfSk7XG4gICAgfVxuICAgIHdhcm4obXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIHRoaXMub3V0KExvZy5XQVJOLCBtc2cpOyB9KTtcbiAgICB9XG4gICAgZXJyb3IobXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnKTsgfSk7XG4gICAgfVxuICAgIG91dChsdmwsIG1zZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IGRlc2MgPSBMb2cubGV2ZWxzW2x2bF07XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJMZXZlbCA9IHRoaXMucmVwb3J0TGV2ZWwgfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICAgICAgaWYgKGRlc2MuaW1wb3J0YW5jZSA+PSBmaWx0ZXJMZXZlbC5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IERhdGVfMS5kYXRlKExvZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykgPyBtc2cgOiB0aGlzLmluc3BlY3QobXNnLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dMaW5lID0gdGhpcy5tYWtlTWVzc2FnZShsaW5lLCBsdmwsIGRhdGVTdHIsIGRlc2MuZGVzYyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9nTGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1zZyAmJiBtc2cuc3RhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsaW5lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtYWtlTWVzc2FnZShsaW5lLCBsdmwsIGRhdGVTdHIsIGRlc2MpIHtcbiAgICAgICAgcmV0dXJuIGAke2RhdGVTdHJ9ICR7dGhpcy5yZXBvcnRQcmVmaXh9ICR7ZGVzY30gJHtsaW5lfWA7XG4gICAgfVxuICAgIGZvcm1hdChmbXRTdHIpIHtcbiAgICAgICAgaWYgKGZtdFN0ciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBMb2cuZGVmRGF0ZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbXRTdHIpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gZm10U3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMb2cuZGF0ZUZvcm1hdDtcbiAgICB9XG4gICAgcHJlZml4KHByZikge1xuICAgICAgICBpZiAocHJmKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9IHByZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRQcmVmaXg7XG4gICAgfVxuICAgIGNvbmZpZyhjZmcpIHtcbiAgICAgICAgaWYgKGNmZy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXQoY2ZnLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5sZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsKGNmZy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zcGVjdChtc2csIGRlcHRoID0gMywgaW5kZW50ID0gJyAgICcpIHtcbiAgICAgICAgZnVuY3Rpb24gX2luc3BlY3QobXNnLCBkZXB0aCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJyR7bXNnfSdgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBfaW5zcGVjdChlLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFtwcmVmaXgsIHBvc3RmaXhdID0gbG9nLmdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd7XFxuJyArIE9iamVjdC5rZXlzKG1zZykubWFwKGsgPT4gYCR7cHJlZml4fSR7a30ke3Bvc3RmaXh9OiAke19pbnNwZWN0KG1zZ1trXSwgZGVwdGggLSAxLCBsZXZlbCArIDEsIGN1cnJJbmRlbnQgKyBpbmRlbnQpfWApLmpvaW4oJyxcXG4nKSArIGBcXG4ke2N1cnJJbmRlbnR9fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXNnLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9nID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF9pbnNwZWN0KG1zZywgZGVwdGggPT09IG51bGwgPyA5OTkgOiBkZXB0aCwgMCwgJycpO1xuICAgIH1cbiAgICBnZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgcmV0dXJuIFtgJHtjdXJySW5kZW50fSR7aW5kZW50fWAsICcnXTtcbiAgICB9XG4gICAgc3RhdGljIG1ha2VMb2dGbihwcmVmaXgpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTG9nKHByZWZpeCk7XG4gICAgICAgIGNvbnN0IG5ld0xvZyA9ICgocHJlZml4KSA9PiBMb2cubWFrZUxvZ0ZuKHByZWZpeCkpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UuYWRkUG9wZXJ0aWVzKG5ld0xvZyk7XG4gICAgfVxuICAgIGFkZFBvcGVydGllcyhsb2dGbikge1xuICAgICAgICBsb2dGbi5ERUJVRyA9IExvZy5ERUJVRztcbiAgICAgICAgbG9nRm4uSU5GTyA9IExvZy5JTkZPO1xuICAgICAgICBsb2dGbi5XQVJOID0gTG9nLldBUk47XG4gICAgICAgIGxvZ0ZuLkVSUk9SID0gTG9nLkVSUk9SO1xuICAgICAgICBsb2dGbi5sZXZlbCA9IHRoaXMubGV2ZWwuYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4uZGVidWcgPSB0aGlzLmRlYnVnLmJpbmQodGhpcyk7XG4gICAgICAgIGxvZ0ZuLmluZm8gPSB0aGlzLmluZm8uYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4ud2FybiA9IHRoaXMud2Fybi5iaW5kKHRoaXMpO1xuICAgICAgICBsb2dGbi5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4uZm9ybWF0ID0gdGhpcy5mb3JtYXQuYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4ucHJlZml4ID0gdGhpcy5wcmVmaXguYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4ub3V0ID0gdGhpcy5vdXQuYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4uY29uZmlnID0gdGhpcy5jb25maWcuYmluZCh0aGlzKTtcbiAgICAgICAgbG9nRm4uaW5zcGVjdCA9IHRoaXMuaW5zcGVjdC5iaW5kKHRoaXMpO1xuICAgICAgICByZXR1cm4gbG9nRm47XG4gICAgfVxufVxuZXhwb3J0cy5Mb2cgPSBMb2c7XG5Mb2cuZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbkxvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG5Mb2cuREVCVUcgPSAnREVCVUcnO1xuTG9nLklORk8gPSAnSU5GTyc7XG5Mb2cuV0FSTiA9ICdXQVJOJztcbkxvZy5FUlJPUiA9ICdFUlJPUic7XG5Mb2cubGV2ZWxzID0ge1xuICAgIFtMb2cuREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogTG9nLkRFQlVHLCBkZXNjOiAnREVCVUcnIH0sXG4gICAgW0xvZy5JTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IExvZy5JTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbTG9nLldBUk5dOiB7IGltcG9ydGFuY2U6IDIsIHN5bTogTG9nLldBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtMb2cuRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogTG9nLkVSUk9SLCBkZXNjOiAnRVJST1InIH1cbn07XG5Mb2cuZ2xvYmFsTGV2ZWwgPSBMb2cubGV2ZWxzW0xvZy5JTkZPXTtcbmV4cG9ydHMubG9nID0gTG9nLm1ha2VMb2dGbignJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3p0QlFTdEZRU3hwUTBGQk9FSTdRVUU0UWpsQ0xFMUJRV0VzUjBGQlJ6dEpRU3RDV2l4WlFVRlpMRTlCUVdNN1VVRklNVUlzWjBKQlFWY3NSMEZCYTBJc1UwRkJVeXhEUVVGRE8xRkJRM1pETEdsQ1FVRlpMRWRCUVUwc1JVRkJSU3hEUVVGRE8wbEJSM0pDTEVOQlFVTTdTVUZyUWtRc1MwRkJTeXhEUVVGRExGZEJRVzFDTEVWQlFVVXNZMEZCZFVJN1VVRkRPVU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUXpGRUxFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU51UkN4SlFVRkpMRmRCUVZjc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRUUVVOMlFqdGhRVUZOTEVsQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVNM1FpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOb1F6dGhRVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU5vUXl4SlFVRkpMR05CUVdNc1JVRkJSVHRuUWtGQlJTeEhRVUZITEVOQlFVTXNWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJRenRoUVVGRk8ybENRVU12UWp0blFrRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUXp0aFFVRkZPMWxCUTNCRUxFMUJRVTBzUjBGQlJ5eEhRVUZITEU5QlFVOHNZMEZCWXl4RFFVRkJMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMR05CUVdNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNVMEZCVXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVOQlFVTTdXVUZEYUVvc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRXRCUVVzc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM1pGTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNaMEpCUVdkQ0xGZEJRVmNzZFVKQlFYVkNMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUTBRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlZTeXhMUVVGTExFTkJRVU1zUjBGQlR5eEZRVUZGTEZGQlFWRXNSMEZCUXl4SlFVRkpPemhFUVVGdlFpeFBRVUZQTEUxQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJWWGhHTEVsQlFVa3NRMEZCUXl4SFFVRlBMRVZCUVVVc1VVRkJVU3hIUVVGRExFbEJRVWs3T0VSQlFXOUNMRTlCUVU4c1RVRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlFVRTdTVUZWZEVZc1NVRkJTU3hEUVVGRExFZEJRVThzUlVGQlJTeFJRVUZSTEVkQlFVTXNTVUZCU1RzNFJFRkJiMElzVDBGQlR5eE5RVUZOTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkJRVHRKUVZOMFJpeExRVUZMTEVOQlFVTXNSMEZCVHl4RlFVRkZMRkZCUVZFc1IwRkJReXhKUVVGSk96aEVRVUZ2UWl4UFFVRlBMRTFCUVUwc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVUZCTzBsQlZYaEdMRWRCUVVjc1EwRkJReXhIUVVGVkxFVkJRVVVzUjBGQlR6czdXVUZEZWtJc1NVRkJTU3hKUVVGSkxFZEJRV0VzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOeVF5eE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEZUVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRVZCUVVVN1owSkJRek5ETEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTNKRExFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBGTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVVm9SU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVOeVFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8yOUNRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJsQ1FVRkZPMmRDUVVOcVJDeFBRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRGFFTTdXVUZEUkN4UFFVRlBMRk5CUVZNc1EwRkJRenRSUVVOeVFpeERRVUZETzB0QlFVRTdTVUZQVXl4WFFVRlhMRU5CUVVNc1NVRkJWeXhGUVVGRkxFZEJRVlVzUlVGQlJTeFBRVUZqTEVWQlFVVXNTVUZCVnp0UlFVTjBSU3hQUVVGUExFZEJRVWNzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETzBsQlF6ZEVMRU5CUVVNN1NVRlpSQ3hOUVVGTkxFTkJRVU1zVFVGQll6dFJRVU5xUWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGQlJTeEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03VTBGQlJUdGhRVU4yUkN4SlFVRkpMRTFCUVUwc1JVRkJUVHRaUVVGRkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRPMU5CUVVVN1VVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGUFJDeE5RVUZOTEVOQlFVTXNSMEZCVnp0UlFVTmtMRWxCUVVrc1IwRkJSeXhGUVVGRk8xbEJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SFFVRkhMRU5CUVVNN1UwRkJSVHRSUVVOeVF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVlZFTEUxQlFVMHNRMEZCUXl4SFFVRnhSRHRSUVVONFJDeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRXRCUVVjc1UwRkJVeXhGUVVGRk8xbEJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGQlJUdFJRVU40UkN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFdEJRVWNzVTBGQlV5eEZRVUZITzFsQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZCUlR0SlFVTXhSQ3hEUVVGRE8wbEJXVVFzVDBGQlR5eERRVUZETEVkQlFVOHNSVUZCUlN4TFFVRkxMRWRCUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUjBGQlF5eExRVUZMTzFGQlEyeERMRk5CUVZNc1VVRkJVU3hEUVVGRExFZEJRVThzUlVGQlJTeExRVUZaTEVWQlFVVXNTMEZCV1N4RlFVRkZMRlZCUVdsQ08xbEJRM0JGTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1JVRkJaMEk3WjBKQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1lVRkJSVHRaUVVOc1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVZjN1owSkJRVVVzVDBGQlR5eFhRVUZYTEVOQlFVTTdZVUZCUlR0WlFVTjJSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZWQlFWVXNSVUZCUnp0blFrRkJSU3hQUVVGUExGVkJRVlVzUTBGQlF6dGhRVUZGTzFsQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZMTzJkQ1FVRkZMRTlCUVU4c1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF6dGhRVUZGTzFsQlEzUkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZMTzJkQ1FVTTFRaXhKUVVGSkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVTdiMEpCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMmxDUVVGRk8yZENRVU53UlN4SlFVRkpMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTjJRaXhQUVVGUExFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVzc1JVRkJReXhGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFVRXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRwUWtGRE1VYzdaMEpCUTBZc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJRM1pGTEU5QlFVOHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1MwRkRlRVFzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hIUVVGRExFMUJRVTBzUTBGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NWVUZCVlN4SFFVRkhMRU5CUVVNN1lVRkROVU03V1VGRFJDeFBRVUZQTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVNeFFpeERRVUZETzFGQlEwUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnBDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFdEJRVWNzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVVZUTEdGQlFXRXNRMEZCUXl4TlFVRmhMRVZCUVVVc1MwRkJXU3hGUVVGRkxGVkJRV2xDTzFGQlEyeEZMRTlCUVU4c1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFF5eERRVUZETzBsQlIwMHNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGaE8xRkJRMnBETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEycERMRTFCUVUwc1RVRkJUU3hIUVVGVkxFTkJRVU1zUTBGQlF5eE5RVUZoTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hQUVVGUExGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVVZUTEZsQlFWa3NRMEZCUXl4TFFVRlhPMUZCUXpsQ0xFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVMHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVNelFpeExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRlBMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRE1VSXNTMEZCU3l4RFFVRkRMRWxCUVVrc1IwRkJUeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzFGQlF6RkNMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVTBzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTXpRaXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZOTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzWkRMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVTBzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRGRrTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1IwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNSRExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVMHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZGtNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM2hETEV0QlFVc3NRMEZCUXl4SFFVRkhMRWRCUVZFc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRja01zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTjRReXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzcERMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdPMEZCTjA5TUxHdENRVGhQUXp0QlFUVlBWU3hwUWtGQllTeEhRVUZITERoQ1FVRTRRaXhEUVVGRE8wRkJReTlETEdOQlFWVXNSMEZCVFN4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRE8wRkJSMnhETEZOQlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkhhRUlzVVVGQlNTeEhRVUZMTEUxQlFVMHNRMEZCUXp0QlFVZG9RaXhSUVVGSkxFZEJRVXNzVFVGQlRTeERRVUZETzBGQlIyaENMRk5CUVVzc1IwRkJTU3hQUVVGUExFTkJRVU03UVVGSGFrSXNWVUZCVFN4SFFVRkhPMGxCUTFvc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVc3NSVUZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVU03U1VGRE9VUXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVTBzUlVGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZITEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVNN1NVRkROMFFzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVUwc1JVRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGSExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVTTdTVUZETjBRc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVc3NSVUZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVU03UTBGRGFrVXNRMEZCUXp0QlFVZExMR1ZCUVZjc1IwRkJZU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVhOT00wTXNVVUZCUVN4SFFVRkhMRWRCUVZNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGF0YUZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL0RhdGFGaWx0ZXJzXCIpO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgbG9nID0gaHN1dGlsXzEubG9nKCdEYXRhJyk7XG52YXIgVHlwZXM7XG4oZnVuY3Rpb24gKFR5cGVzKSB7XG4gICAgVHlwZXNbXCJudW1iZXJcIl0gPSBcIm51bWJlclwiO1xuICAgIFR5cGVzW1wibmFtZVwiXSA9IFwibmFtZVwiO1xuICAgIFR5cGVzW1wiZGF0ZVwiXSA9IFwiZGF0ZVwiO1xuICAgIFR5cGVzW1wiY3VycmVuY3lcIl0gPSBcImN1cnJlbmN5XCI7XG4gICAgVHlwZXNbXCJwZXJjZW50XCJdID0gXCJwZXJjZW50XCI7XG59KShUeXBlcyA9IGV4cG9ydHMuVHlwZXMgfHwgKGV4cG9ydHMuVHlwZXMgPSB7fSkpO1xuZnVuY3Rpb24gdG9EYXRlKHZhbCwgbGltaXRZZWFyID0gMTk3MCkge1xuICAgIGxldCBkO1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgIGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgUmVnRXhwKGBcXFxcZFxcXFxkJHtkLmdldEZ1bGxZZWFyKCkgJSAxMDB9YCwgJ2cnKTtcbiAgICAgICAgaWYgKCF2YWwubWF0Y2gocikpIHtcbiAgICAgICAgICAgIGNvbnN0IHlyID0gMTkwMCArIGQuZ2V0RnVsbFllYXIoKSAlIDEwMDtcbiAgICAgICAgICAgIGQuc2V0RnVsbFllYXIoKHlyIDwgbGltaXRZZWFyKSA/IHlyICsgMTAwIDogeXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkO1xufVxuZnVuY3Rpb24gY2FzdFZhbCh0eXBlLCB2YWwpIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRvRGF0ZSh2YWwpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdC5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGNhc2UgJ3BlcmNlbnQnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZW5kc1dpdGgoJyUnKSA/IG51bSAvIDEwMCA6IG51bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgIHJlc3VsdCA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgPyB2YWwucmVwbGFjZSgvW15lRVxcK1xcLVxcLlxcZF0vZywgJycpIDogdmFsO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VGbG9hdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnICsgdmFsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmREb21haW4oZGF0YSwgY29sLCB0eXBlLCBkb21haW4pIHtcbiAgICBpZiAoZG9tYWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9tYWluID0gW107XG4gICAgfVxuICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb21haW5bMF0gPSAwO1xuICAgICAgICBkb21haW5bMV0gPSBkYXRhLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZXhwYW5kO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubmFtZTpcbiAgICAgICAgICAgICAgICBleHBhbmQgPSAocikgPT4gZG9tYWluLmluZGV4T2YoJycgKyByW2NvbF0pIDwgMCA/IGRvbWFpbi5wdXNoKCcnICsgcltjb2xdKSA6ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUeXBlcy5kYXRlOlxuICAgICAgICAgICAgICAgIGV4cGFuZCA9IChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdG9EYXRlKHJbY29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IGRvbWFpblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblswXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gZG9tYWluWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGVzLm51bWJlcjpcbiAgICAgICAgICAgIGNhc2UgVHlwZXMucGVyY2VudDpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXhwYW5kID0gKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSBwYXJzZUZsb2F0KHJbY29sXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2IDwgZG9tYWluWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgPiBkb21haW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZXhwYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbWFpbjtcbn1cbmV4cG9ydHMuZmluZERvbWFpbiA9IGZpbmREb21haW47XG5mdW5jdGlvbiBmaW5kVHlwZSh2YWwpIHtcbiAgICBpZiAoIXZhbCB8fCB2YWwgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xuICAgIH1cbiAgICBjb25zdCBzdHJWYWwgPSB2YWw7XG4gICAgaWYgKCcnICsgcGFyc2VGbG9hdChzdHJWYWwpID09PSBzdHJWYWwpIHtcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xuICAgIH1cbiAgICBpZiAoc3RyVmFsLnN0YXJ0c1dpdGgoJyQnKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChzdHJWYWwuc2xpY2UoMSkpKSkge1xuICAgICAgICByZXR1cm4gJ2N1cnJlbmN5JztcbiAgICB9XG4gICAgaWYgKHN0clZhbC5lbmRzV2l0aCgnJScpICYmICFpc05hTihwYXJzZUZsb2F0KHN0clZhbCkpKSB7XG4gICAgICAgIHJldHVybiAncGVyY2VudCc7XG4gICAgfVxuICAgIGlmICghaXNOYU4odG9EYXRlKHN0clZhbCkuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0clZhbC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJudWxsXCI6IGJyZWFrO1xuICAgICAgICBjYXNlIFwiI3JlZiFcIjogYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGlmICh2YWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICduYW1lJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmNsYXNzIERhdGEge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMubWV0YSA9IFtdO1xuICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhKGRhdGFzZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGltcG9ydERhdGEoZGF0YXNldCkge1xuICAgICAgICB0aGlzLm5hbWUgPSAnZGF0YScgKyAoTWF0aC5yb3VuZCgxMDAwICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgaWYgKGRhdGFzZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gZGF0YXNldFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gZGF0YXNldC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEocm93cywgbmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhc2V0LnJvd3MsIGRhdGFzZXQuY29sTmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuZ2V0RGF0YSgpLFxuICAgICAgICAgICAgY29sTmFtZXM6IHRoaXMuY29sTmFtZXMoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBnZXRDb2x1bW4oY29sKSB7XG4gICAgICAgIGNvbnN0IGNuID0gdGhpcy5jb2xOdW1iZXIoY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHJvdykgPT4gcm93W2NuXSk7XG4gICAgfVxuICAgIGNvbEFkZChjb2wpIHtcbiAgICAgICAgbGV0IG0gPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbSA9IHRoaXMubWV0YVtjb2xdID0ge307XG4gICAgICAgICAgICBtLm5hbWUgPSBjb2w7XG4gICAgICAgICAgICBtLmNvbHVtbiA9IHRoaXMubWV0YS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm1ldGEucHVzaChtKTtcbiAgICAgICAgICAgIG0uY2FzdCA9IGZhbHNlO1xuICAgICAgICAgICAgbS5hY2Nlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbiAgICBjb2xJbml0aWFsaXplKGNvbCwgaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlb2YgaW5pdGlhbGl6ZXIgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGxldCBjbiA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIWNuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjbiA9IHRoaXMuY29sQWRkKGNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGNvbHVtbiAke2NvbH0gZG9lcyBub3QgZXhpc3QgaW4gRGF0YWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHJvd1tjbi5jb2x1bW5dID0gZm4gPyBpbml0aWFsaXplcihyb3dbY24uY29sdW1uXSwgcm93SW5kZXgsIHJvdykgOiBpbml0aWFsaXplcik7XG4gICAgICAgIHJldHVybiBjbi5jb2x1bW47XG4gICAgfVxuICAgIGNvbE51bWJlcihjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBtLmNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb2xOYW1lKGNvbCkge1xuICAgICAgICB2YXIgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfVxuICAgIGNvbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhLm1hcCgobSkgPT4gbS5uYW1lKTtcbiAgICB9XG4gICAgY29sVHlwZShjb2wpIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICByZXR1cm4gbWV0YSA/IG1ldGEudHlwZXNbMF0udHlwZSA6ICduYW1lJztcbiAgICB9XG4gICAgZmluZERvbWFpbihjb2wsIGRvbWFpbikge1xuICAgICAgICByZXR1cm4gZmluZERvbWFpbih0aGlzLmRhdGEsIHRoaXMuY29sTnVtYmVyKGNvbCksIHRoaXMuY29sVHlwZShjb2wpLCBkb21haW4pO1xuICAgIH1cbiAgICBjYXN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRhLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGMuY29sdW1uO1xuICAgICAgICAgICAgaWYgKCFjLmNhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93KSA9PiByb3dbY29sXSA9IGNhc3RWYWwoYy50eXBlc1swXS50eXBlLCByb3dbY29sXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYy5jYXN0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcihjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIERhdGFGaWx0ZXJzXzEuZmlsdGVyKHRoaXMsIGNvbmRpdGlvbik7XG4gICAgfVxuICAgIHNvcnQoc29ydEZuLCBjb2wpIHtcbiAgICAgICAgbGV0IGZuID0gc29ydEZuO1xuICAgICAgICBpZiAoIWNvbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQoZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sID0gdGhpcy5jb2xOdW1iZXIoY29sKTtcbiAgICAgICAgICAgIGlmIChzb3J0Rm4gPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIGZuID0gKGEsIGIpID0+IChiID4gYSkgPyAxIDogKChiIDwgYSkgPyAtMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvcnRGbiA9PT0gJ2FzY2VuZGluZycpIHtcbiAgICAgICAgICAgICAgICBmbiA9IChhLCBiKSA9PiAoYiA8IGEpID8gMSA6ICgoYiA+IGEpID8gLTEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0KChyMSwgcjIpID0+IGZuKHIxW2NvbF0sIHIyW2NvbF0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbWFwKG1hcEZuLCBjb2wpIHtcbiAgICAgICAgY29uc3Qgbm9vcCA9ICh2YWwpID0+IHZhbDtcbiAgICAgICAgY29uc3QgY3VtdWxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIHJldHVybiAodmFsLCBpKSA9PiB7IHN1bSArPSArdmFsOyByZXR1cm4gc3VtOyB9O1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnZXRGbigpIHtcbiAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgIHN3aXRjaCAobWFwRm4pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjdW11bGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGZuID0gY3VtdWxhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgIGZuID0gbm9vcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZm4gPSBtYXBGbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm4gPSBnZXRGbigpO1xuICAgICAgICBjb25zdCBjID0gY29sID8gdGhpcy5jb2xOdW1iZXIoY29sKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBEYXRhKHtcbiAgICAgICAgICAgIGNvbE5hbWVzOiB0aGlzLmNvbE5hbWVzKCksXG4gICAgICAgICAgICByb3dzOiB0aGlzLmRhdGEubWFwKChyb3csIHJvd0luZGV4LCByb3dzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93W2NdID0gZm4ocm93W2NdLCBjLCByb3dJbmRleCwgcm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dzW3Jvd0luZGV4XSA9IGZuKHJvdywgcm93SW5kZXgsIHJvd3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmdldE5hbWUoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZ2V0TWV0YShjb2wpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1ldGFbY29sXSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1ldGFbY29sXS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFbY29sXTtcbiAgICB9XG4gICAgc2V0RGF0YShyb3dzLCBuYW1lcywgYXV0b1R5cGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWV0YSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSByb3dzLnNsaWNlKCk7XG4gICAgICAgIGlmIChuYW1lcyAmJiBuYW1lcy5mb3JFYWNoKSB7XG4gICAgICAgICAgICBuYW1lcy5mb3JFYWNoKChjb2wpID0+IHRoaXMuY29sQWRkKGNvbCkpO1xuICAgICAgICAgICAgaWYgKGF1dG9UeXBlKSB7XG4gICAgICAgICAgICAgICAgbmFtZXMuZm9yRWFjaCgoY29sKSA9PiB0aGlzLmZpbmRUeXBlcyhjb2wpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc3REYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihgaW52YWxpZCBuYW1lcyBzZXREYXRhOlxcbiR7bG9nLmluc3BlY3QobmFtZXMsIDUpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRUeXBlcyhjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhEYXRhLnR5cGUpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRzID0geyB0eXBlOiBEYXRhLnR5cGVbdF0sIGNvdW50OiAwIH07XG4gICAgICAgICAgICB0eXBlcy5wdXNoKHRzKTtcbiAgICAgICAgICAgIHR5cGVzW0RhdGEudHlwZVt0XV0gPSB0cztcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IHYgb2YgdGhpcy5hbGxSb3dzKGNvbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBmaW5kVHlwZSh2KTtcbiAgICAgICAgICAgIGlmICh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdHlwZXNbdF0uY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0eXBlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS50eXBlID09PSAnY3VycmVuY3knICYmIGEuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIudHlwZSA9PT0gJ2N1cnJlbmN5JyAmJiBiLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGIuY291bnQgLSBhLmNvdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgbS50eXBlcyA9IHR5cGVzO1xuICAgICAgICByZXR1cm4gdHlwZXNbMF0udHlwZTtcbiAgICB9XG4gICAgKmFsbFJvd3MoY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbE51bWJlcihjb2x1bW4pO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZGF0YS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5kYXRhW3JdW2NdO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EYXRhID0gRGF0YTtcbkRhdGEudHlwZSA9IHtcbiAgICBudW1iZXI6ICdudW1iZXInLFxuICAgIG5hbWU6ICduYW1lJyxcbiAgICBkYXRlOiAnZGF0ZScsXG4gICAgY3VycmVuY3k6ICdjdXJyZW5jeScsXG4gICAgcGVyY2VudDogJ3BlcmNlbnQnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBZUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5RVlYUmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlNVRXNLME5CUVd0RU8wRkJRMnhFTEcxRFFVRXlRenRCUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVdsRmNrVXNTVUZCV1N4TFFWZFlPMEZCV0VRc1YwRkJXU3hMUVVGTE8wbEJSVlFzTUVKQlFYRkNMRU5CUVVFN1NVRkZja0lzYzBKQlFXMUNMRU5CUVVFN1NVRkZia0lzYzBKQlFXMUNMRU5CUVVFN1NVRkZia0lzT0VKQlFYVkNMRU5CUVVFN1NVRkZka0lzTkVKQlFYTkNMRU5CUVVFN1FVRkRPVUlzUTBGQlF5eEZRVmhYTEV0QlFVc3NSMEZCVEN4aFFVRkxMRXRCUVV3c1lVRkJTeXhSUVZkb1FqdEJRV0ZFTEZOQlFWTXNUVUZCVFN4RFFVRkRMRWRCUVZjc1JVRkJSU3hUUVVGVExFZEJRVU1zU1VGQlNUdEpRVU4yUXl4SlFVRkpMRU5CUVUwc1EwRkJRenRKUVVOWUxFbEJRVWtzUjBGQlJ5eFpRVUZaTEVsQlFVa3NSVUZCUlR0UlFVRkZMRTlCUVdFc1IwRkJSeXhEUVVGRE8wdEJRVVU3U1VGRE9VTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVN1VVRkRja0lzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VUXNTVUZCU1N4RFFVRlZMRWRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEZWtJc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha1E3UzBGRFNqdEpRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTJJc1EwRkJRenRCUVZORUxGTkJRVk1zVDBGQlR5eERRVUZETEVsQlFWTXNSVUZCUlN4SFFVRlhPMGxCUTI1RExFbEJRVWtzVFVGQlRTeEhRVUZYTEVkQlFVY3NRMEZCUXp0SlFVTjZRaXhSUVVGUkxFbEJRVWtzUlVGQlJUdFJRVU5XTEV0QlFVc3NUVUZCVFR0WlFVTlFMRWxCUVVrc1IwRkJSeXhaUVVGWkxFbEJRVWtzUlVGQlJUdG5Ra0ZCUlN4UFFVRlBMRWRCUVVjc1EwRkJRenRoUVVGRk8xbEJRM2hETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGNrSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVTdaMEpCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dGhRVUZGTzFsQlF5OURMRTlCUVU4c1RVRkJUU3hEUVVGRE8xRkJRMnhDTEV0QlFVc3NVMEZCVXp0WlFVTldMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTjZRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRelZDTEU5QlFXZENMRWRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0aFFVTnlSRHRwUWtGQlRUdG5Ra0ZEU0N4UFFVRlBMRWRCUVVjc1EwRkJRenRoUVVOa08xRkJSMHdzUzBGQlN5eFZRVUZWTzFsQlJWZ3NUVUZCVFN4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVVm9SaXhMUVVGTExGRkJRVkU3V1VGRFZDeEpRVUZKTEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGQlJTeE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRVVU3V1VGRGFFVXNTVUZCU1N4TFFVRkxMRU5CUVZNc1RVRkJUU3hEUVVGRExFVkJRVVU3WjBKQlFVVXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVGRk8xbEJRemRETEU5QlFVOHNUVUZCVFN4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eERRVUZSTEU5QlFVOHNSVUZCUlN4SFFVRkRMRWRCUVVjc1EwRkJRenRMUVVOcVF6dEJRVU5NTEVOQlFVTTdRVUZGUkN4VFFVRm5RaXhWUVVGVkxFTkJRVU1zU1VGQlpTeEZRVUZGTEVkQlFWVXNSVUZCUlN4SlFVRlRMRVZCUVVVc1RVRkJZVHRKUVVNMVJTeEpRVUZKTEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1VVRkJSU3hOUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzB0QlFVVTdTVUZEYUVRc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzFGQlEyNUNMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkROMEk3VTBGQlRUdFJRVU5JTEVsQlFVa3NUVUZCTUVJc1EwRkJRenRSUVVNdlFpeFJRVUZQTEVsQlFVa3NSVUZCUlR0WlFVTlVMRXRCUVVzc1MwRkJTeXhEUVVGRExFbEJRVWs3WjBKQlExZ3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQldTeE5RVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGaExFMUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRelZITEUxQlFVMDdXVUZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhKUVVGSk8yZENRVU5ZTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRk8yOUNRVU51UWl4SlFVRkpMRU5CUVVNc1IwRkJVU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRelZDTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExGTkJRVk1zUlVGQlJUdDNRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNGQ1FVRkZPMjlDUVVNM1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFVkJRVVU3ZDBKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZCUlR0dlFrRkROME1zU1VGQlNTeERRVUZETEV0QlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1MwRkJSeXhKUVVGSkxFVkJRVVU3ZDBKQlF6TkNMRWxCUVVrc1EwRkJReXhIUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlRzMFFrRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2xDUVVGRk96WkNRVU01UWl4SlFVRkpMRU5CUVVNc1IwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdORUpCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0NVFrRkJSVHR4UWtGRE0wTTdaMEpCUTB3c1EwRkJReXhEUVVGRE8yZENRVU5HTEUxQlFVMDdXVUZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGJFSXNTMEZCU3l4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJRMjVDTzJkQ1FVTkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTzI5Q1FVTnVRaXhKUVVGSkxFTkJRVU1zUjBGQlZTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdiMEpCUXpkRExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkhMRk5CUVZNc1JVRkJSVHQzUWtGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zRkNRVUZGTzI5Q1FVTTNReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRVZCUVVVN2QwSkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGQlJUdHZRa0ZETjBNc1NVRkJTU3hEUVVGRExFdEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCUnl4SlFVRkpMRVZCUVVVN2QwSkJRek5DTEVsQlFVa3NRMEZCUXl4SFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUczBRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNsQ1FVRkZPelpDUVVNNVFpeEpRVUZKTEVOQlFVTXNSMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3TkVKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDVRa0ZCUlR0eFFrRkRNME03WjBKQlEwd3NRMEZCUXl4RFFVRkRPMU5CUTFRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMHRCUTNoQ08wbEJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdRVUZEYkVJc1EwRkJRenRCUVhSRFJDeG5RMEZ6UTBNN1FVRmhSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEhRVUZYTzBsQlEzcENMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eExRVUZITEVWQlFVVXNSVUZCUlR0UlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRVVU3U1VGRGRFTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1NVRkJTU3hGUVVGTk8xRkJRVVVzVDBGQlR5eE5RVUZOTEVOQlFVTTdTMEZCUlR0SlFVTXZReXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVRkZMRTlCUVU4c1VVRkJVU3hEUVVGRE8wdEJRVVU3U1VGSGFrUXNUVUZCVFN4TlFVRk5MRWRCUVZjc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVsQlFVa3NSVUZCUlN4SFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eE5RVUZOTEVWQlFTdENPMUZCUVVVc1QwRkJUeXhSUVVGUkxFTkJRVU03UzBGQlJUdEpRVU4yUml4SlFVRkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRVVVzVDBGQlR5eFZRVUZWTEVOQlFVTTdTMEZCUlR0SlFVTjZSaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVdFN1VVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dExRVUZGTzBsQlEzaEdMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVFpDTzFGQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1MwRkJSVHRKUVZGdVJpeFJRVUZSTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSVHRSUVVNeFFpeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkRia0lzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5PMUZCUTNCQ0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJReXhEUVVGRExFVkJRVVU3V1VGQlJTeFBRVUZQTEUxQlFVMHNRMEZCUXp0VFFVRkZPMHRCUTJoRU8wbEJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdRVUZEYUVJc1EwRkJRenRCUVU5RUxFMUJRV0VzU1VGQlNUdEpRV3RDWWl4WlFVRlpMRTlCUVRCQ08xRkJlVk01UWl4VFFVRkpMRWRCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU40UWl4VFFVRkpMRWRCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRWHBUTlVJc1NVRkJTU3hQUVVGUExFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRE9VTXNRMEZCUXp0SlFVdE5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVUxTkxGVkJRVlVzUTBGQlF5eFBRVUY1UWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNSMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFUXNTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRWQ3hKUVVGSkxFOUJRVThzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUXpGQ0xFMUJRVTBzUzBGQlN5eEhRVUZoTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRE4wSTdhVUpCUVUwN1owSkJRMGdzU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZPMjlDUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenRwUWtGQlJUdG5Ra0ZETDBNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU5vUkR0VFFVTktPMGxCUTB3c1EwRkJRenRKUVV0TkxFMUJRVTA3VVVGRFZDeFBRVUZQTzFsQlEwZ3NTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGNFSXNVVUZCVVN4RlFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3VTBGRE0wSXNRMEZCUXp0SlFVTk9MRU5CUVVNN1NVRkxUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGTlRTeFRRVUZUTEVOQlFVTXNSMEZCYlVJN1VVRkRhRU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnVSQ3hEUVVGRE8wbEJVVTBzVFVGQlRTeERRVUZETEVkQlFWVTdVVUZEY0VJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRha0lzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRV1VzUlVGQlJTeERRVUZETzFsQlEzQkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVXNzUjBGQlJ5eERRVUZETzFsQlEyWXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRlBMRXRCUVVzc1EwRkJRenRaUVVOdVFpeERRVUZETEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVOMFFqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVZsTkxHRkJRV0VzUTBGQlF5eEhRVUZ0UWl4RlFVRkZMRmRCUVRCQ08xRkJRMmhGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRTlCUVU4c1YwRkJWeXhMUVVGTExGVkJRVlVzUTBGQlF6dFJRVU0zUXl4SlFVRkpMRVZCUVVVc1IwRkJZeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNSRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEVEN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZCUlN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVRkZPMmxDUVVOc1JEdG5Ra0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGVkJRVlVzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8yRkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFWY3NSVUZCUlN4UlFVRmxMRVZCUVVVc1JVRkJSU3hEUVVNelF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFWVXNWMEZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlZTeFhRVUZYTEVOQlEyNUhMRU5CUVVNN1VVRkRSaXhQUVVGUExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVZGTkxGTkJRVk1zUTBGQlF5eEhRVUZ0UWp0UlFVTm9ReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dFRRVUZGTzJGQlEzaENPMWxCUTBRc1EwRkJReXhEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEYkVJc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzFOQlEyNUNPMGxCUTB3c1EwRkJRenRKUVZGTkxFOUJRVThzUTBGQlF5eEhRVUZ0UWp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dFRRVUZGTzFGQlF6ZENMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCVFUwc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOdVJDeERRVUZETzBsQlVVMHNUMEZCVHl4RFFVRkRMRWRCUVcxQ08xRkJRemxDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETDBJc1QwRkJUeXhKUVVGSkxFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVk5OTEZWQlFWVXNRMEZCUXl4SFFVRnZRaXhGUVVGRkxFMUJRV003VVVGRGJFUXNUMEZCVHl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFrWXNRMEZCUXp0SlFVVk5MRkZCUVZFN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVZrc1JVRkJSU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGNrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVU3WjBKQlExUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU55Ump0WlFVTkVMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVk5OTEUxQlFVMHNRMEZCUXl4VFFVRnRRanRSUVVNM1FpeFBRVUZQTEc5Q1FVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRm5RMDBzU1VGQlNTeERRVUZETEUxQlFXOUNMRVZCUVVVc1IwRkJiMEk3VVVGRGJFUXNTVUZCU1N4RlFVRkZMRWRCUVZjc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRUaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOMFFqdGhRVUZOTzFsQlEwZ3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETVVJc1NVRkJTU3hOUVVGTkxFdEJRVXNzV1VGQldTeEZRVUZGTzJkQ1FVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVXNzUlVGQlJTeERRVUZMTEVWQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVGRk8xbEJRemxGTEVsQlFVa3NUVUZCVFN4TFFVRkxMRmRCUVZjc1JVRkJSenRuUWtGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkxMRVZCUVVVc1EwRkJTeXhGUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZCUlR0WlFVTTVSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVZFc1JVRkJSU3hGUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VFMFEwMHNSMEZCUnl4RFFVRkRMRXRCUVRKQ0xFVkJRVVVzUjBGQmIwSTdVVUZEZUVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZQTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNNVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRiRUlzU1VGQlNTeEhRVUZITEVkQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFZc1QwRkJUeXhEUVVGRExFZEJRVlVzUlVGQlJTeERRVUZSTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhGTEVOQlFVTXNRMEZCUXp0UlFVTkdMRk5CUVZNc1MwRkJTenRaUVVOV0xFbEJRVWtzUlVGQlJTeERRVUZETzFsQlExQXNVVUZCVVN4TFFVRkxMRVZCUVVVN1owSkJRMWdzUzBGQlN5eFZRVUZWTzI5Q1FVRkZMRVZCUVVVc1IwRkJSeXhSUVVGUkxFVkJRVVVzUTBGQlF6dHZRa0ZCUXl4TlFVRk5PMmRDUVVONFF5eExRVUZMTEUxQlFVMDdiMEpCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZCUXl4TlFVRk5PMmRDUVVOc1F5eFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRWRCUVcxQ0xFdEJRVXNzUTBGQlF6dGhRVU12UXp0WlFVTkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRMlFzUTBGQlF6dFJRVVZFTEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnBDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF5OURMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETzFsQlEyeENMRkZCUVZFc1JVRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEzaENMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVZNc1JVRkJSU3hSUVVGbExFVkJRVVVzU1VGQldTeEZRVUZGTEVWQlFVVTdaMEpCUXpWRUxFbEJRVWtzUTBGQlF5eEZRVUZGTzI5Q1FVTklMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlZ5eEZRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRMjVFTzNGQ1FVRk5PMjlDUVVOSUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCWXl4RlFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkRlRVE3WjBKQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1dVRkRaaXhEUVVGRExFTkJRVU03V1VGRFJpeEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRUUVVOMFFpeERRVUZETEVOQlFVTTdVVUZEU0N4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlUwOHNUMEZCVHl4RFFVRkRMRWRCUVcxQ08xRkJSUzlDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlFVVXNUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkJSVHRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETDBJc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGVFR5eFBRVUZQTEVOQlFVTXNTVUZCWXl4RlFVRkZMRXRCUVdNc1JVRkJSU3hSUVVGUkxFZEJRVU1zU1VGQlNUdFJRVU42UkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEzcENMRWxCUVVrc1MwRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEZUVJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFbEJRVWtzVVVGQlVTeEZRVUZGTzJkQ1FVTldMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia1FzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUTI1Q08xTkJRMG83WVVGQlRUdFpRVU5JTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc01rSkJRVEpDTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRKUVVOTUxFTkJRVU03U1VGVFR5eFRRVUZUTEVOQlFVTXNSMEZCYlVJN1VVRkRha01zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TlFVRk5MRXRCUVVzc1IwRkJaMElzUlVGQlJTeERRVUZETzFGQlF6bENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTzFsQlEzaERMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUXpWRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRaaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOSUxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU0zUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0aFFVRkZPMU5CUTNoRE8xRkJRMFFzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlRMRU5CUVZrc1JVRkJSU3hEUVVGWk8xbEJRekZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJSeXhWUVVGVkxFbEJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCUnl4VlFVRlZMRWxCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVTdaMEpCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03WVVGQlJUdFpRVU5xUkN4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMmhDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCVFU4c1EwRkJSU3hQUVVGUExFTkJRVU1zVFVGQmMwSTdVVUZEY0VNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOcVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJrTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwQ08wbEJRMHdzUTBGQlF6czdRVUZvV1V3c2IwSkJhVmxETzBGQk4xaHBRaXhUUVVGSkxFZEJRVWM3U1VGRmFrSXNUVUZCVFN4RlFVRlpMRkZCUVZFN1NVRkZNVUlzU1VGQlNTeEZRVUZqTEUxQlFVMDdTVUZGZUVJc1NVRkJTU3hGUVVGakxFMUJRVTA3U1VGRmVFSXNVVUZCVVN4RlFVRlZMRlZCUVZVN1NVRkZOVUlzVDBGQlR5eEZRVUZYTEZOQlFWTTdRMEZGT1VJc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEYXRhXzEgPSByZXF1aXJlKFwiLi9EYXRhXCIpO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgbG9nID0gaHN1dGlsXzEubG9nKCdEYXRhRmlsdGVycycpO1xuZnVuY3Rpb24gcmVzb2x2ZVRlcm1pbmFsQ29uZGl0aW9uKG5hbWUsIHZhbCwgcm93LCBjb2xOdW1iZXIpIHtcbiAgICBjb25zdCBjb2wgPSBjb2xOdW1iZXIobmFtZSk7XG4gICAgY29uc3QgdmFsSXNGdW5jdGlvbiA9ICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKTtcbiAgICBjb25zdCB2YWxJc0FycmF5ID0gKCh0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgKHZhbC5sZW5ndGggIT09IHVuZGVmaW5lZCkpO1xuICAgIGlmIChpc05hTihjb2wpKSB7XG4gICAgICAgIGxvZy53YXJuKGBjb2x1bW4gbmFtZSAnJHtuYW1lfScgY2Fubm90IGJlIHJlc29sdmVkIGluIHRlcm1pbmFsIGNvbmRpdGlvbiAke25hbWV9PSR7dmFsfWApO1xuICAgICAgICBsb2cud2Fybihyb3cpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbElzRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbChyb3dbY29sXSwgcm93KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsSXNBcnJheSkge1xuICAgICAgICByZXR1cm4gKHZhbC5sZW5ndGggPT09IDApIHx8IHZhbC5zb21lKCh2KSA9PiByb3dbY29sXSA9PT0gdik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKHJvd1tjb2xdID09PSB2YWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVDb25kaXRpb24oY29uZGl0aW9uLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSB7XG4gICAgbGV0IG9yUmVzdWx0ID0gZmFsc2U7XG4gICAgbGV0IGFuZFJlc3VsdCA9IHRydWU7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gKGNvbmRpdGlvbiA9PT0gcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IG1jID0gY29uZGl0aW9uO1xuICAgICAgICBpZiAobWMubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChhbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1jLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhbmQgP1xuICAgICAgICAgICAgICAgIG1jLmV2ZXJ5KChjZCkgPT4gcmVzb2x2ZUNvbmRpdGlvbihjZCwgcm93LCByLCBjb2xOdW1iZXIsIGFuZCkpIDpcbiAgICAgICAgICAgICAgICBtYy5zb21lKChjZCkgPT4gcmVzb2x2ZUNvbmRpdGlvbihjZCwgcm93LCByLCBjb2xOdW1iZXIsIGFuZCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uTWV0ID0gYW5kO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldENvbmQgPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9IHJlc29sdmVDb25kaXRpb24oc2V0Q29uZC5vciwgcm93LCByLCBjb2xOdW1iZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLmFuZCwgcm93LCByLCBjb2xOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQgPSAhcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLm5vdCwgcm93LCByLCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbmRpdGlvbk1ldCA9IHJlc29sdmVUZXJtaW5hbENvbmRpdGlvbihuYW1lLCBjb25kaXRpb25bbmFtZV0sIHJvdywgY29sTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbk1ldCkge1xuICAgICAgICAgICAgICAgICAgICBvclJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5kUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGB1bnJlY29nbml6ZWQgY29uZGl0aW9uOiAke0pTT04uc3RyaW5naWZ5KGNvbmRpdGlvbil9YCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGFuZCA/IGFuZFJlc3VsdCA6IG9yUmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyKGRhdGEsIGNvbmQpIHtcbiAgICBjb25zdCBjb2xOdW1iZXIgPSAobmFtZSkgPT4gZGF0YS5jb2xOdW1iZXIobmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhXzEuRGF0YSh7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGNvbE5hbWVzOiBkYXRhLmNvbE5hbWVzKCksXG4gICAgICAgICAgICByb3dzOiBkYXRhLmdldERhdGEoKS5maWx0ZXIoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtlZXAgPSByZXNvbHZlQ29uZGl0aW9uKGNvbmQsIHJvdywgaSwgY29sTnVtYmVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2VlcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZy53YXJuKGVycik7XG4gICAgICAgIGxvZy53YXJuKGVyci5zdGFjayk7XG4gICAgfVxufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWVVacGJIUmxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlJHRjBZVVpwYkhSbGNuTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVFeVNFRXNhVU5CUVdkRU8wRkJRMmhFTEcxRFFVRm5SRHRCUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRCUVRSQ2FrWXNVMEZCVXl4M1FrRkJkMElzUTBGQlF5eEpRVUZYTEVWQlFVVXNSMEZCVHl4RlFVRkZMRWRCUVZjc1JVRkJSU3hUUVVFclFqdEpRVU5vUnl4TlFVRk5MRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETlVJc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVOc1JDeE5RVUZOTEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBVc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdVVUZEV2l4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRGhEUVVFNFF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN1UwRkJUU3hKUVVGSkxHRkJRV0VzUlVGQlJUdFJRVVYwUWl4UFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkROMEk3VTBGQlRTeEpRVUZKTEZWQlFWVXNSVUZCUlR0UlFVVnVRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRjRVU3VTBGQlRUdFJRVU5JTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETjBJN1FVRkRUQ3hEUVVGRE8wRkJVMFFzVTBGQlV5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGdFFpeEZRVUZGTEVkQlFWY3NSVUZCUlN4RFFVRlJMRVZCUVVVc1UwRkJLMElzUlVGQlJTeEhRVUZaTzBsQlF5OUhMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU55UWl4SlFVRkpMRk5CUVZNc1IwRkJSU3hKUVVGSkxFTkJRVU03U1VGRmNFSXNTVUZCU1N4VFFVRlRMRXRCUVVjc1UwRkJVeXhGUVVGRk8xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZCUlR0VFFVZDBReXhKUVVGSkxFOUJRVThzVTBGQlV5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVRkZMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZCUlR0VFFVZG9SU3hKUVVGSkxFOUJRVThzVTBGQlV5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVVndReXhOUVVGTkxFVkJRVVVzUjBGQmJVSXNVMEZCVXl4RFFVRkRPMUZCUjNKRExFbEJRVWtzUlVGQlJTeERRVUZETEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRla0lzU1VGQlNTeEhRVUZITEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVGRkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTTdZVUZCUlR0WlFVTjJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzJGQlFVVTdXVUZGZEVNc1QwRkJUeXhIUVVGSExFTkJRVUVzUTBGQlF6dG5Ra0ZEVUN4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlpTeEZRVUZGTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNM1JTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUmp0aFFVVkpPMWxCUTBRc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03WVVGQlJUdFpRVU4wUXl4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxGTkJRVk1zUlVGQlJUdG5Ra0ZETVVJc1NVRkJTU3haUVVGWkxFZEJRVWNzUjBGQlJ5eERRVUZETzJkQ1FVTjJRaXhOUVVGTkxFOUJRVThzUjBGQmIwSXNVMEZCVXl4RFFVRkRPMmRDUVVjelF5eFJRVUZSTEVsQlFVa3NSVUZCUlR0dlFrRkRWaXhMUVVGTExFbEJRVWs3ZDBKQlFVY3NXVUZCV1N4SFFVRkhMR2RDUVVGblFpeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN2QwSkJRVU1zVFVGQlRUdHZRa0ZEZWtZc1MwRkJTeXhMUVVGTE8zZENRVUZGTEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPM2RDUVVGRExFMUJRVTA3YjBKQlEzcEdMRXRCUVVzc1MwRkJTenQzUWtGQlJTeFpRVUZaTEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdkMEpCUVVNc1RVRkJUVHR2UWtGRGNFWXNUMEZCVHl4RFFVRkRMRU5CUVVrc1dVRkJXU3hIUVVGSExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8ybENRVU01Ump0blFrRkRSQ3hKUVVGSkxGbEJRVmtzUlVGQlJUdHZRa0ZCUlN4UlFVRlJMRWRCUVVrc1NVRkJTU3hEUVVGRE8yOUNRVUZGTEVsQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVN2QwSkJRVVVzVFVGQlRUdHhRa0ZCUlR0cFFrRkJRenR4UWtGRGVrTTdiMEpCUVVVc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dHZRa0ZCUXl4SlFVRkhMRWRCUVVjc1JVRkJSenQzUWtGQlJTeE5RVUZOTzNGQ1FVRkZPMmxDUVVGRE8yRkJRemxFTzFOQlEwbzdTMEZEU2p0VFFVRk5PMUZCUTBnc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5d3lRa0ZCTWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRkRVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN1NVRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGNrTXNRMEZCUXp0QlFWTkVMRk5CUVdkQ0xFMUJRVTBzUTBGQlF5eEpRVUZUTEVWQlFVVXNTVUZCWXp0SlFVTTFReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVUZETEVsQlFWY3NSVUZCVXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXZSQ3hKUVVGSk8xRkJRMEVzVDBGQlR5eEpRVUZKTEZkQlFVa3NRMEZCUXp0WlFVTmFMRWxCUVVrc1JVRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEzaENMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJWeXhGUVVGRkxFTkJRVkVzUlVGQlJTeEZRVUZGTzJkQ1FVTnFSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRGRrUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1dVRkRhRUlzUTBGQlF5eERRVUZETzFOQlEwd3NRMEZCUXl4RFFVRkRPMHRCUTA0N1NVRkJReXhQUVVGTkxFZEJRVWNzUlVGQlJUdFJRVU5VTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU4yUWp0QlFVTk1MRU5CUVVNN1FVRm1SQ3gzUWtGbFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEYXRhXzEgPSByZXF1aXJlKFwiLi9EYXRhXCIpO1xuZXhwb3J0cy5EYXRhID0gRGF0YV8xLkRhdGE7XG5leHBvcnRzLlR5cGVzID0gRGF0YV8xLlR5cGVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3JRa0ZaT0VJN1FVRk9ja0lzYzBKQlFVRXNTVUZCU1N4RFFVRkJPMEZCUzBvc2RVSkJRVUVzUzBGQlN5eERRVUZCSW4wPSJdLCJzb3VyY2VSb290IjoiIn0=