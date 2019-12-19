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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBdUQ7QUFBOUMsa0NBQUEsT0FBTyxDQUFBO0FBQUUsZ0NBQUEsS0FBSyxDQUFBO0FBQ3ZCLGlEQUF1RDtBQUE5QywrQkFBQSxJQUFJLENBQUE7QUFDYixpREFBdUQ7QUFBOUMsdUNBQUEsWUFBWSxDQUFBO0FBQ3JCLHVDQUFrRDtBQUF6QyxtQ0FBQSxhQUFhLENBQUE7QUFDdEIsK0JBQThDO0FBQXJDLHNCQUFBLElBQUksQ0FBQTtBQUFFLG9CQUFBLEVBQUUsQ0FBQTtBQUNqQixtQ0FBZ0Q7QUFBdkMseUJBQUEsS0FBSyxDQUFBO0FBQ2QsNkJBQTZDO0FBQXBDLG9CQUFBLEdBQUcsQ0FBQSJ9

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
const DEBUG = Symbol('DEBUG');
const INFO = Symbol('INFO');
const WARN = Symbol('WARN');
const ERROR = Symbol('ERROR');
let gLogFile;
const gLevels = {
    [DEBUG]: { importance: 0, sym: DEBUG, desc: 'DEBUG' },
    [INFO]: { importance: 1, sym: INFO, desc: 'INFO' },
    [WARN]: { importance: 2, sym: WARN, desc: 'WARN' },
    [ERROR]: { importance: 3, sym: ERROR, desc: 'ERROR' }
};
let gGlobalLevel = gLevels[INFO];
const defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
let gDateFormat = defDateFormat;
let gColors = false;
const color = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[36m',
    green: '\x1b[32m',
    bold: '\x1b[1m',
    clear: '\x1b[0m'
};
exports.log = create('', (filename, msg) => Promise.resolve(undefined), (path) => Promise.resolve(path.indexOf('/') >= 0 ? false : true));
function create(_prefix, logToFile, pathExists) {
    const context = {
        level: undefined,
        prefix: _prefix,
        logToFile: logToFile,
        pathExists: pathExists
    };
    function level(newLevelSym, setGlobalLevel = false) {
        let newLevel = gLevels[newLevelSym] || gGlobalLevel;
        let oldLevel = context.level || gGlobalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            context.level = undefined;
        }
        else if (gLevels[newLevelSym]) {
            if (setGlobalLevel) {
                gGlobalLevel = newLevel;
            }
            else {
                context.level = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : context.prefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            out((newLevel.sym === oldLevel.sym) ? DEBUG : INFO, msg);
        }
        else {
            out(ERROR, `unkown level ${newLevelSym.toString()}; log level remains ${oldLevel.sym.toString()}`);
        }
        return newLevel.sym;
    }
    function debug(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(DEBUG, msg, log2File); });
    }
    function info(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(INFO, msg, log2File); });
    }
    function warn(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(WARN, msg, log2File); });
    }
    function error(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(ERROR, msg, log2File); });
    }
    function format(fmtStr) {
        if (fmtStr === null) {
            gDateFormat = defDateFormat;
        }
        else if (fmtStr) {
            gDateFormat = fmtStr;
        }
        return gDateFormat;
    }
    function prefix(prf) {
        if (prf) {
            context.prefix = prf;
        }
        return context.prefix;
    }
    function out(lvl, msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const colors = { [ERROR]: color.red + color.bold, [WARN]: color.yellow + color.bold, [DEBUG]: color.blue, [INFO]: color.green };
            let desc = gLevels[lvl];
            const filterLevel = context.level || gGlobalLevel;
            if (desc.importance >= filterLevel.importance) {
                const dateStr = Date_1.date(gDateFormat);
                let line = (typeof msg === 'string') ? msg : inspect(msg, 0);
                const logLine = `${dateStr} ${context.prefix} ${desc.desc} ${line}`;
                const colorLine = `${colors[lvl] || ''} ${dateStr} ${context.prefix} ${desc.desc} ${color.clear} ${line}`;
                console.log(gColors ? colorLine : logLine);
                if (msg && msg.stack) {
                    console.log(msg.stack);
                }
                if (gLogFile && log2File) {
                    return yield context.logToFile(Date_1.date(gLogFile), logLine);
                }
            }
            return undefined;
        });
    }
    function logFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (file === null) {
                gLogFile = undefined;
                return yield info("disabling logfile");
            }
            else if (file === undefined) {
                return Date_1.date(gLogFile);
            }
            else if (file.indexOf('/') >= 0) {
                return yield context.pathExists(file)
                    .then((exists) => __awaiter(this, void 0, void 0, function* () {
                    if (!exists) {
                        gLogFile = undefined;
                        return yield warn(`path '${file}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return yield info("now logging to file " + Date_1.date(file));
                }))
                    .catch(() => __awaiter(this, void 0, void 0, function* () {
                    gLogFile = undefined;
                    return yield error(`checking path ${file}; logfile disabled`);
                }));
            }
            else if (file === '') {
                file = 'log-%YYYY-%MM-%DD.txt';
            }
            else {
            }
            gLogFile = file;
            return yield info(gLogFile ? `now logging to file ${Date_1.date(gLogFile)}` : 'logfile disbaled');
        });
    }
    function config(cfg) {
        if (cfg.colors !== undefined) {
            gColors = cfg.colors;
        }
        if (cfg.format !== undefined) {
            format(cfg.format);
        }
        if (cfg.level !== undefined) {
            level(cfg.level);
        }
    }
    function inspect(msg, depth = 3, indent = '   ', colors) {
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
                const c = colors ? `<b><span style='color:${colors[level % colors.length]};'>` : '';
                const prefix = `${c}${currIndent}${indent}`;
                const postfix = colors ? '</span></b>' : '';
                return '{\n' + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(',\n') + `\n${currIndent}}`;
            }
            return msg.toString();
        }
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
        }
        return _inspect(msg, depth === null ? 999 : depth, 0, '');
    }
    const newLog = (prefix, logToFile = context.logToFile, pathExists = context.pathExists) => create(prefix, logToFile, pathExists);
    newLog.DEBUG = DEBUG;
    newLog.INFO = INFO;
    newLog.WARN = WARN;
    newLog.ERROR = ERROR;
    newLog.level = level;
    newLog.debug = debug;
    newLog.info = info;
    newLog.warn = warn;
    newLog.error = error;
    newLog.format = format;
    newLog.prefix = prefix;
    newLog.out = out;
    newLog.logFile = logFile;
    newLog.config = config;
    newLog.inspect = inspect;
    return newLog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQStFQSxpQ0FBa0M7QUFHbEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRzlCLE1BQU0sSUFBSSxHQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc5QixNQUFNLElBQUksR0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHOUIsTUFBTSxLQUFLLEdBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRy9CLElBQUksUUFBZ0IsQ0FBQztBQVNyQixNQUFNLE9BQU8sR0FBRztJQUNaLENBQUMsS0FBSyxDQUFDLEVBQUssRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztJQUN0RCxDQUFDLElBQUksQ0FBQyxFQUFNLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckQsQ0FBQyxJQUFJLENBQUMsRUFBTSxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQ3JELENBQUMsS0FBSyxDQUFDLEVBQUssRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztDQUN6RCxDQUFDO0FBR0YsSUFBSSxZQUFZLEdBQWEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRzNDLE1BQU0sYUFBYSxHQUFHLDhCQUE4QixDQUFDO0FBQ3JELElBQUksV0FBVyxHQUFPLGFBQWEsQ0FBQztBQUdwQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFHcEIsTUFBTSxLQUFLLEdBQUc7SUFDVixHQUFHLEVBQUssVUFB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T0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFdkosTUFBTSxDQUFDLEtBQUssR0FBTSxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLElBQUksR0FBTyxJQUFJLENBQUM7SUFDdkIsTUFBTSxDQUFDLElBQUksR0FBTyxJQUFJLENBQUM7SUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBTSxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLEtBQUssR0FBTSxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLEtBQUssR0FBTSxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLElBQUksR0FBTyxJQUFJLENBQUM7SUFDdkIsTUFBTSxDQUFDLElBQUksR0FBTyxJQUFJLENBQUM7SUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBTSxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7SUFDekIsTUFBTSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsR0FBUSxHQUFHLENBQUM7SUFDdEIsTUFBTSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUM7SUFDMUIsTUFBTSxDQUFDLE1BQU0sR0FBSyxNQUFNLENBQUM7SUFDekIsTUFBTSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUM7SUFDMUIsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0RhdGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvQ2hlY2tzdW0uanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9EYXRlLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvTnVtYmVyLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvVGltZWRQcm9taXNlcy5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvbG9nLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vRGF0YS5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4vYmluL0RhdGFGaWx0ZXJzLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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R0FBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrM2Y7Ozs7Ozs7Ozs7OztBQ3JYOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0IsaUJBQWlCLG1CQUFPLENBQUMsMkdBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUssNkNBQTZDLEtBQUssR0FBRyxJQUFJO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDBCQUEwQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMjNJOzs7Ozs7Ozs7Ozs7QUN4RzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0E7QUFDQSwyQ0FBMkMsMk4iLCJmaWxlIjoiaHNEYXRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmluL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBzaG9ydENoZWNrU3VtKHMpIHtcbiAgICB2YXIgY2hrID0gMHgxMjM0NTY3ODtcbiAgICB2YXIgbGVuID0gcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjaGsgKz0gKHMuY2hhckNvZGVBdChpKSAqIChpICsgMSkpO1xuICAgIH1cbiAgICByZXR1cm4gKGNoayAmIDB4ZmZmZmZmZmYpLnRvU3RyaW5nKDE2KTtcbn1cbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IHNob3J0Q2hlY2tTdW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmhsWTJ0emRXMHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UTJobFkydHpkVzB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlJReXhUUVVGblFpeGhRVUZoTEVOQlFVTXNRMEZCVVR0SlFVTnVReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZEY2tJc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlF6RkNMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjBRenRKUVVORUxFOUJRVThzUTBGQlF5eEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6RkRMRU5CUVVNN1FVRlFSQ3h6UTBGUFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vbnRoU3RyID0gW1xuICAgIFsnSmFuJywgJ0phbnVhcnknXSwgWydGZWInLCAnRmVicnVhcnknXSwgWydNYXInLCAnTWFyY2gnXSwgWydBcHInLCAnQXByaWwnXSwgWydNYXknLCAnTWF5J10sIFsnSnVuJywgJ0p1bmUnXSxcbiAgICBbJ0p1bCcsICdKdWx5J10sIFsnQXVnJywgJ0F1Z3VzdCddLCBbJ1NlcCcsICdTZXB0ZW1iZXInXSwgWydPY3QnLCAnT2N0b2JlciddLCBbJ05vdicsICdOb3ZlbWJlciddLCBbJ0RlYycsICdEZWNlbWJlciddXG5dO1xuY29uc3QgZGF5U3RyID0gW1xuICAgIFsnU3VuJywgJ1N1bmRheSddLCBbJ01vbicsICdNb25kYXknXSwgWydUdWUnLCAnVHVlc2RheSddLCBbJ1dlZCcsICdXZWRuZXNkYXknXSwgWydUaHUnLCAnVGh1cnNkYXknXSwgWydGcmknLCAnRnJpZGF5J10sIFsnU2F0JywgJ1NhdHVyZGF5J11cbl07XG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyLCBkaWdpdHMpIHtcbiAgICB2YXIgciA9ICcnICsgbnVtYmVyO1xuICAgIHdoaWxlIChyLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgICByID0gXCIwXCIgKyByO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIGRhdGUoZm9ybWF0U3RyaW5nLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIHJldHVybiAodHlwZW9mIGZvcm1hdFN0cmluZyAhPT0gJ3N0cmluZycgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSA/XG4gICAgICAgICdpbnZhbGlkJyA6XG4gICAgICAgIGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWVlZL2csICcnICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWS9nLCAnJyArIChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNb250aCgpICsgMSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgJycgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVERC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXREYXRlKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEL2csICcnICsgZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWhoL2csIGZvcm1hdE51bWJlcihkYXRlLmdldEhvdXJzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoL2csICcnICsgZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtbS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtL2csICcnICsgZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXNzL2csIGZvcm1hdE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMykpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwLCAxKSk7XG59XG5leHBvcnRzLmRhdGUgPSBkYXRlO1xuZXhwb3J0cy5tcyA9IHtcbiAgICBmcm9tTWludXRlczogKG1pbikgPT4gMTAwMCAqIDYwICogbWluLFxuICAgIGZyb21Ib3VyczogKGgpID0+IDEwMDAgKiA2MCAqIDYwICogaCxcbiAgICBmcm9tRGF5czogKGQpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiBkLFxuICAgIGZyb21XZWVrczogKHcpID0+IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3ICogdyxcbiAgICB0b01pbnV0ZXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwKSxcbiAgICB0b0hvdXJzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwKSxcbiAgICB0b0RheXM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCksXG4gICAgdG9XZWVrczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogNylcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OUVZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJaVUVzVFVGQlRTeFJRVUZSTEVkQlFVYzdTVUZEWWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTTdTVUZETlVjc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRPME5CUVVNc1EwRkJRenRCUVVjMVNDeE5RVUZOTEUxQlFVMHNSMEZCUnp0SlFVTllMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF6dERRVUZETEVOQlFVTTdRVUZITTBrc1UwRkJVeXhaUVVGWkxFTkJRVU1zVFVGQllTeEZRVUZGTEUxQlFXRTdTVUZET1VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RlFVRkZPMUZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUlR0SlFVTXhReXhQUVVGUExFTkJRVU1zUTBGQlF6dEJRVU5pTEVOQlFVTTdRVUZqUkN4VFFVRm5RaXhKUVVGSkxFTkJRVU1zV1VGQmJVSXNSVUZCUlN4SlFVRkpMRWRCUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3U1VGRGNrUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1dVRkJXU3hMUVVGTExGRkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEZMRk5CUVZNc1EwRkJRU3hEUVVGRE8xRkJRMVlzV1VGQldUdGhRVU5RTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hIUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0aFFVTjRReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEVWQlFVVXNSMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTTVReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTm9SQ3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTm9SQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVa3NSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNoRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnFSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZKTEVWQlFVVXNSMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRGJrTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnhFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVjc1JVRkJSU3hIUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0aFFVTnVReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEY0VRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlNTeEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8yRkJRM1JETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1JDeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNVVFzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeEhRVUZETEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNMVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkhMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVrVXNRMEZCUXp0QlFYUkNSQ3h2UWtGelFrTTdRVUZIV1N4UlFVRkJMRVZCUVVVc1IwRkJSenRKUVVOa0xGZEJRVmNzUlVGQlN5eERRVUZETEVkQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITzBsQlF6TkRMRk5CUVZNc1JVRkJUeXhEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF6dEpRVU0xUXl4UlFVRlJMRVZCUVZFc1EwRkJReXhEUVVGUkxFVkJRVWtzUlVGQlJTeERRVUZETEVsQlFVa3NSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETzBsQlF5OURMRk5CUVZNc1JVRkJUeXhEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRPMGxCUTJwRUxGTkJRVk1zUlVGQlR5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTFReXhQUVVGUExFVkJRVk1zUTBGQlF5eEZRVUZUTEVWQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRExFbEJRVWtzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXk5RExFMUJRVTBzUlVGQlZTeERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJRMnhFTEU5QlFVOHNSVUZCVXl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXp0RFFVTjJSQ3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHJvdW5kKG4sIGQgPSAwKSB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEwLCBkKTtcbiAgICBjb25zdCByID0gTWF0aC5yb3VuZChuICogZikgLyBmO1xuICAgIHJldHVybiAnJyArIHI7XG59XG5leHBvcnRzLnJvdW5kID0gcm91bmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lUblZ0WW1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMDUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVZkRExGTkJRV2RDTEV0QlFVc3NRMEZCUXl4RFFVRlJMRVZCUVVVc1EwRkJReXhIUVVGRExFTkJRVU03U1VGUGFFTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFOUJRVThzUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm1MRU5CUVVNN1FVRldSQ3h6UWtGVlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHNldFRpbWVvdXQocmVqZWN0LCBtcyk7IH0pO1xufVxuZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dDtcbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoYXJncyk7IH0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVsYXkgPSBkZWxheTtcbmNsYXNzIFBhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHBhY2UgPSAxMDAsIG1heENvbmN1cnJlbnQgPSAtMSkge1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSAtMTtcbiAgICAgICAgdGhpcy53YWl0VW50aWwgPSAwO1xuICAgICAgICB0aGlzLndhaXRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYmVpbmdDYWxsZWQgPSAwO1xuICAgICAgICB0aGlzLnBhY2UgPSBwYWNlICsgNTtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDtcbiAgICB9XG4gICAgZ2V0V2FpdENvdW50KCkgeyByZXR1cm4gdGhpcy53YWl0Q291bnQ7IH1cbiAgICBnZXRDYWxsaW5nQ291bnQoKSB7IHJldHVybiB0aGlzLmJlaW5nQ2FsbGVkOyB9XG4gICAgYWRkKGZuKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmICh0aGlzLndhaXRVbnRpbCA8IGFkZFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRVbnRpbCA9IGFkZFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGhpcy53YWl0VW50aWwgLSBhZGRUaW1lO1xuICAgICAgICAgICAgdGhpcy53YWl0VW50aWwgKz0gdGhpcy5wYWNlICsgNTtcbiAgICAgICAgICAgIHRoaXMud2FpdENvdW50Kys7XG4gICAgICAgICAgICB5aWVsZCBkZWxheShkaWZmKSgpO1xuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdExvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heENvbmN1cnJlbnQgPCAwIHx8IHRoaXMuYmVpbmdDYWxsZWQgPCB0aGlzLm1heENvbmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdExvb3AsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgd2FpdExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy53YWl0Q291bnQtLTtcbiAgICAgICAgICAgIHRoaXMuYmVpbmdDYWxsZWQrKztcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IHlpZWxkIGZuKERhdGUubm93KCkgLSBhZGRUaW1lKTtcbiAgICAgICAgICAgIHRoaXMuYmVpbmdDYWxsZWQtLTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUGFjZSA9IFBhY2U7XG5mdW5jdGlvbiBwcm9taXNlQ2hhaW4odGFza3MsIGluaXRpYWxSZXN1bHQgPSBbXSkge1xuICAgIHJldHVybiB0YXNrcy5yZWR1Y2UoKGNoYWluLCB0YXNrKSA9PiBjaGFpbi50aGVuKChfcmVzdWx0cykgPT4gUHJvbWlzZS5yZXNvbHZlKHRhc2soX3Jlc3VsdHMpKS50aGVuKChyKSA9PiB7XG4gICAgICAgIF9yZXN1bHRzLnB1c2gocik7XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9KSksIFByb21pc2UucmVzb2x2ZShpbml0aWFsUmVzdWx0KSk7XG59XG5leHBvcnRzLnByb21pc2VDaGFpbiA9IHByb21pc2VDaGFpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVZHbHRaV1JRY205dGFYTmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5VWFXMWxaRkJ5YjIxcGMyVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3TzBGQlYwRXNVMEZCWjBJc1QwRkJUeXhEUVVGRExFVkJRVk03U1VGRE4wSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4SFFVRkhMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVONlJTeERRVUZETzBGQlJrUXNNRUpCUlVNN1FVRjFRa1FzVTBGQlowSXNTMEZCU3l4RFFVRkRMRVZCUVZNN1NVRkRNMElzVDBGQlR5eERRVUZKTEVsQlFVOHNSVUZCWVN4RlFVRkZPMUZCUXpkQ0xFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRnpRaXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU1zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZPUkN4elFrRk5RenRCUVdGRUxFMUJRV0VzU1VGQlNUdEpRVmxpTEZsQlFWa3NTVUZCU1N4SFFVRkRMRWRCUVVjc1JVRkJSU3hoUVVGaExFZEJRVU1zUTBGQlF5eERRVUZETzFGQldEbENMR3RDUVVGaExFZEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGY2tJc1kwRkJVeXhIUVVGVExFTkJRVU1zUTBGQlF6dFJRVU53UWl4alFVRlRMRWRCUVZNc1EwRkJReXhEUVVGRE8xRkJRM0JDTEdkQ1FVRlhMRWRCUVU4c1EwRkJReXhEUVVGRE8xRkJVWGhDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRc1dVRkJXU3hMUVVGUkxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROVU1zWlVGQlpTeExRVUZMTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03U1VGUmVFTXNSMEZCUnl4RFFVRkRMRVZCUVdsRE96dFpRVU4yUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZETTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEU5QlFVOHNSVUZCUlR0blFrRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEU5QlFVOHNRMEZCUXp0aFFVRkZPMWxCUXpORUxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJRM1JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYUVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFsQlEycENMRTFCUVUwc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEY0VJc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkRlRUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZPMjlDUVVOc1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHQzUWtGRGFrVXNUMEZCVHl4RlFVRkZMRU5CUVVNN2NVSkJRMkk3ZVVKQlFVMDdkMEpCUTBnc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0eFFrRkROVUk3WjBKQlEwd3NRMEZCUXl4RFFVRkRPMmRDUVVOR0xGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEyWXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRTQ3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdXVUZEYWtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFsQlEyNUNMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU42UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03V1VGRGJrSXNUMEZCVHl4SFFVRkhMRU5CUVVNN1VVRkRaaXhEUVVGRE8wdEJRVUU3UTBGRFNqdEJRV3BFUkN4dlFrRnBSRU03UVVGWFJDeFRRVUZuUWl4WlFVRlpMRU5CUVVrc1MwRkJjVU1zUlVGQlJTeG5Ra0ZCYTBJc1JVRkJSVHRKUVVOMlJpeFBRVUZQTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhMUVVGclFpeEZRVUZGTEVsQlFTdENMRVZCUVdkQ0xFVkJRVVVzUTBGRmRFWXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVmtzUlVGQlJTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGSExFVkJRVVVzUlVGQlJUdFJRVVYwUlN4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycENMRTlCUVU4c1VVRkJVU3hEUVVGRE8wbEJRM0JDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTBnc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZEYWtNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGV1JDeHZRMEZWUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRpbWVkUHJvbWlzZXNfMSA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLnRpbWVvdXQgPSBUaW1lZFByb21pc2VzXzEudGltZW91dDtcbmV4cG9ydHMuZGVsYXkgPSBUaW1lZFByb21pc2VzXzEuZGVsYXk7XG52YXIgVGltZWRQcm9taXNlc18yID0gcmVxdWlyZShcIi4vVGltZWRQcm9taXNlc1wiKTtcbmV4cG9ydHMuUGFjZSA9IFRpbWVkUHJvbWlzZXNfMi5QYWNlO1xudmFyIFRpbWVkUHJvbWlzZXNfMyA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLnByb21pc2VDaGFpbiA9IFRpbWVkUHJvbWlzZXNfMy5wcm9taXNlQ2hhaW47XG52YXIgQ2hlY2tzdW1fMSA9IHJlcXVpcmUoXCIuL0NoZWNrc3VtXCIpO1xuZXhwb3J0cy5zaG9ydENoZWNrU3VtID0gQ2hlY2tzdW1fMS5zaG9ydENoZWNrU3VtO1xudmFyIERhdGVfMSA9IHJlcXVpcmUoXCIuL0RhdGVcIik7XG5leHBvcnRzLmRhdGUgPSBEYXRlXzEuZGF0ZTtcbmV4cG9ydHMubXMgPSBEYXRlXzEubXM7XG52YXIgTnVtYmVyXzEgPSByZXF1aXJlKFwiLi9OdW1iZXJcIik7XG5leHBvcnRzLnJvdW5kID0gTnVtYmVyXzEucm91bmQ7XG52YXIgbG9nXzEgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5leHBvcnRzLmxvZyA9IGxvZ18xLmxvZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3hwUkVGQmRVUTdRVUZCT1VNc2EwTkJRVUVzVDBGQlR5eERRVUZCTzBGQlFVVXNaME5CUVVFc1MwRkJTeXhEUVVGQk8wRkJRM1pDTEdsRVFVRjFSRHRCUVVFNVF5d3JRa0ZCUVN4SlFVRkpMRU5CUVVFN1FVRkRZaXhwUkVGQmRVUTdRVUZCT1VNc2RVTkJRVUVzV1VGQldTeERRVUZCTzBGQlEzSkNMSFZEUVVGclJEdEJRVUY2UXl4dFEwRkJRU3hoUVVGaExFTkJRVUU3UVVGRGRFSXNLMEpCUVRoRE8wRkJRWEpETEhOQ1FVRkJMRWxCUVVrc1EwRkJRVHRCUVVGRkxHOUNRVUZCTEVWQlFVVXNRMEZCUVR0QlFVTnFRaXh0UTBGQlowUTdRVUZCZGtNc2VVSkJRVUVzUzBGQlN5eERRVUZCTzBGQlEyUXNOa0pCUVRaRE8wRkJRWEJETEc5Q1FVRkJMRWRCUVVjc1EwRkJRU0o5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERhdGVfMSA9IHJlcXVpcmUoXCIuL0RhdGVcIik7XG5jb25zdCBERUJVRyA9IFN5bWJvbCgnREVCVUcnKTtcbmNvbnN0IElORk8gPSBTeW1ib2woJ0lORk8nKTtcbmNvbnN0IFdBUk4gPSBTeW1ib2woJ1dBUk4nKTtcbmNvbnN0IEVSUk9SID0gU3ltYm9sKCdFUlJPUicpO1xubGV0IGdMb2dGaWxlO1xuY29uc3QgZ0xldmVscyA9IHtcbiAgICBbREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogREVCVUcsIGRlc2M6ICdERUJVRycgfSxcbiAgICBbSU5GT106IHsgaW1wb3J0YW5jZTogMSwgc3ltOiBJTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbV0FSTl06IHsgaW1wb3J0YW5jZTogMiwgc3ltOiBXQVJOLCBkZXNjOiAnV0FSTicgfSxcbiAgICBbRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogRVJST1IsIGRlc2M6ICdFUlJPUicgfVxufTtcbmxldCBnR2xvYmFsTGV2ZWwgPSBnTGV2ZWxzW0lORk9dO1xuY29uc3QgZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbmxldCBnRGF0ZUZvcm1hdCA9IGRlZkRhdGVGb3JtYXQ7XG5sZXQgZ0NvbG9ycyA9IGZhbHNlO1xuY29uc3QgY29sb3IgPSB7XG4gICAgcmVkOiAnXFx4MWJbMzFtJyxcbiAgICB5ZWxsb3c6ICdcXHgxYlszM20nLFxuICAgIGJsdWU6ICdcXHgxYlszNm0nLFxuICAgIGdyZWVuOiAnXFx4MWJbMzJtJyxcbiAgICBib2xkOiAnXFx4MWJbMW0nLFxuICAgIGNsZWFyOiAnXFx4MWJbMG0nXG59O1xuZXhwb3J0cy5sb2cgPSBjcmVhdGUoJycsIChmaWxlbmFtZSwgbXNnKSA9PiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKSwgKHBhdGgpID0+IFByb21pc2UucmVzb2x2ZShwYXRoLmluZGV4T2YoJy8nKSA+PSAwID8gZmFsc2UgOiB0cnVlKSk7XG5mdW5jdGlvbiBjcmVhdGUoX3ByZWZpeCwgbG9nVG9GaWxlLCBwYXRoRXhpc3RzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgbGV2ZWw6IHVuZGVmaW5lZCxcbiAgICAgICAgcHJlZml4OiBfcHJlZml4LFxuICAgICAgICBsb2dUb0ZpbGU6IGxvZ1RvRmlsZSxcbiAgICAgICAgcGF0aEV4aXN0czogcGF0aEV4aXN0c1xuICAgIH07XG4gICAgZnVuY3Rpb24gbGV2ZWwobmV3TGV2ZWxTeW0sIHNldEdsb2JhbExldmVsID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IG5ld0xldmVsID0gZ0xldmVsc1tuZXdMZXZlbFN5bV0gfHwgZ0dsb2JhbExldmVsO1xuICAgICAgICBsZXQgb2xkTGV2ZWwgPSBjb250ZXh0LmxldmVsIHx8IGdHbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKG5ld0xldmVsU3ltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0xldmVsID0gb2xkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3TGV2ZWxTeW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRleHQubGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ0xldmVsc1tuZXdMZXZlbFN5bV0pIHtcbiAgICAgICAgICAgIGlmIChzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgIGdHbG9iYWxMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5sZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbXNnID0gYG5ldyAke3NldEdsb2JhbExldmVsID8gJ2dsb2JhbCcgOiBjb250ZXh0LnByZWZpeH0gbG9nIGxldmVsICR7bmV3TGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSAod2FzICR7b2xkTGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSlgO1xuICAgICAgICAgICAgb3V0KChuZXdMZXZlbC5zeW0gPT09IG9sZExldmVsLnN5bSkgPyBERUJVRyA6IElORk8sIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvdXQoRVJST1IsIGB1bmtvd24gbGV2ZWwgJHtuZXdMZXZlbFN5bS50b1N0cmluZygpfTsgbG9nIGxldmVsIHJlbWFpbnMgJHtvbGRMZXZlbC5zeW0udG9TdHJpbmcoKX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGV2ZWwuc3ltO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWJ1Zyhtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KERFQlVHLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluZm8obXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChJTkZPLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdhcm4obXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChXQVJOLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBvdXQoRVJST1IsIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9ybWF0KGZtdFN0cikge1xuICAgICAgICBpZiAoZm10U3RyID09PSBudWxsKSB7XG4gICAgICAgICAgICBnRGF0ZUZvcm1hdCA9IGRlZkRhdGVGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm10U3RyKSB7XG4gICAgICAgICAgICBnRGF0ZUZvcm1hdCA9IGZtdFN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ0RhdGVGb3JtYXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHByZWZpeChwcmYpIHtcbiAgICAgICAgaWYgKHByZikge1xuICAgICAgICAgICAgY29udGV4dC5wcmVmaXggPSBwcmY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlZml4O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvdXQobHZsLCBtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3JzID0geyBbRVJST1JdOiBjb2xvci5yZWQgKyBjb2xvci5ib2xkLCBbV0FSTl06IGNvbG9yLnllbGxvdyArIGNvbG9yLmJvbGQsIFtERUJVR106IGNvbG9yLmJsdWUsIFtJTkZPXTogY29sb3IuZ3JlZW4gfTtcbiAgICAgICAgICAgIGxldCBkZXNjID0gZ0xldmVsc1tsdmxdO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyTGV2ZWwgPSBjb250ZXh0LmxldmVsIHx8IGdHbG9iYWxMZXZlbDtcbiAgICAgICAgICAgIGlmIChkZXNjLmltcG9ydGFuY2UgPj0gZmlsdGVyTGV2ZWwuaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBEYXRlXzEuZGF0ZShnRGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpID8gbXNnIDogaW5zcGVjdChtc2csIDApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvZ0xpbmUgPSBgJHtkYXRlU3RyfSAke2NvbnRleHQucHJlZml4fSAke2Rlc2MuZGVzY30gJHtsaW5lfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JMaW5lID0gYCR7Y29sb3JzW2x2bF0gfHwgJyd9ICR7ZGF0ZVN0cn0gJHtjb250ZXh0LnByZWZpeH0gJHtkZXNjLmRlc2N9ICR7Y29sb3IuY2xlYXJ9ICR7bGluZX1gO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdDb2xvcnMgPyBjb2xvckxpbmUgOiBsb2dMaW5lKTtcbiAgICAgICAgICAgICAgICBpZiAobXNnICYmIG1zZy5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cuc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ0xvZ0ZpbGUgJiYgbG9nMkZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNvbnRleHQubG9nVG9GaWxlKERhdGVfMS5kYXRlKGdMb2dGaWxlKSwgbG9nTGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvZ0ZpbGUoZmlsZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBnTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgaW5mbyhcImRpc2FibGluZyBsb2dmaWxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGVfMS5kYXRlKGdMb2dGaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUuaW5kZXhPZignLycpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY29udGV4dC5wYXRoRXhpc3RzKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChleGlzdHMpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHdhcm4oYHBhdGggJyR7ZmlsZX0nIGRvZXNuJ3QgZXhpc3RzOyBsb2dmaWxlIGRpc2FibGVkYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgaW5mbyhcIm5vdyBsb2dnaW5nIHRvIGZpbGUgXCIgKyBEYXRlXzEuZGF0ZShmaWxlKSk7XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgZXJyb3IoYGNoZWNraW5nIHBhdGggJHtmaWxlfTsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZmlsZSA9ICdsb2ctJVlZWVktJU1NLSVERC50eHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnTG9nRmlsZSA9IGZpbGU7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgaW5mbyhnTG9nRmlsZSA/IGBub3cgbG9nZ2luZyB0byBmaWxlICR7RGF0ZV8xLmRhdGUoZ0xvZ0ZpbGUpfWAgOiAnbG9nZmlsZSBkaXNiYWxlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29uZmlnKGNmZykge1xuICAgICAgICBpZiAoY2ZnLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnQ29sb3JzID0gY2ZnLmNvbG9ycztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3JtYXQoY2ZnLmZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5sZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXZlbChjZmcubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluc3BlY3QobXNnLCBkZXB0aCA9IDMsIGluZGVudCA9ICcgICAnLCBjb2xvcnMpIHtcbiAgICAgICAgZnVuY3Rpb24gX2luc3BlY3QobXNnLCBkZXB0aCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJyR7bXNnfSdgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBfaW5zcGVjdChlLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjb2xvcnMgPyBgPGI+PHNwYW4gc3R5bGU9J2NvbG9yOiR7Y29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF19Oyc+YCA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGAke2N9JHtjdXJySW5kZW50fSR7aW5kZW50fWA7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdGZpeCA9IGNvbG9ycyA/ICc8L3NwYW4+PC9iPicgOiAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3tcXG4nICsgT2JqZWN0LmtleXMobXNnKS5tYXAoayA9PiBgJHtwcmVmaXh9JHtrfSR7cG9zdGZpeH06ICR7X2luc3BlY3QobXNnW2tdLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCArIGluZGVudCl9YCkuam9pbignLFxcbicpICsgYFxcbiR7Y3VyckluZGVudH19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2cudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sb3JzKSB7XG4gICAgICAgICAgICBpbmRlbnQgPSBpbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9pbnNwZWN0KG1zZywgZGVwdGggPT09IG51bGwgPyA5OTkgOiBkZXB0aCwgMCwgJycpO1xuICAgIH1cbiAgICBjb25zdCBuZXdMb2cgPSAocHJlZml4LCBsb2dUb0ZpbGUgPSBjb250ZXh0LmxvZ1RvRmlsZSwgcGF0aEV4aXN0cyA9IGNvbnRleHQucGF0aEV4aXN0cykgPT4gY3JlYXRlKHByZWZpeCwgbG9nVG9GaWxlLCBwYXRoRXhpc3RzKTtcbiAgICBuZXdMb2cuREVCVUcgPSBERUJVRztcbiAgICBuZXdMb2cuSU5GTyA9IElORk87XG4gICAgbmV3TG9nLldBUk4gPSBXQVJOO1xuICAgIG5ld0xvZy5FUlJPUiA9IEVSUk9SO1xuICAgIG5ld0xvZy5sZXZlbCA9IGxldmVsO1xuICAgIG5ld0xvZy5kZWJ1ZyA9IGRlYnVnO1xuICAgIG5ld0xvZy5pbmZvID0gaW5mbztcbiAgICBuZXdMb2cud2FybiA9IHdhcm47XG4gICAgbmV3TG9nLmVycm9yID0gZXJyb3I7XG4gICAgbmV3TG9nLmZvcm1hdCA9IGZvcm1hdDtcbiAgICBuZXdMb2cucHJlZml4ID0gcHJlZml4O1xuICAgIG5ld0xvZy5vdXQgPSBvdXQ7XG4gICAgbmV3TG9nLmxvZ0ZpbGUgPSBsb2dGaWxlO1xuICAgIG5ld0xvZy5jb25maWcgPSBjb25maWc7XG4gICAgbmV3TG9nLmluc3BlY3QgPSBpbnNwZWN0O1xuICAgIHJldHVybiBuZXdMb2c7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3p0QlFTdEZRU3hwUTBGQmEwTTdRVUZIYkVNc1RVRkJUU3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUnpsQ0xFMUJRVTBzU1VGQlNTeEhRVUZMTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVjNVFpeE5RVUZOTEVsQlFVa3NSMEZCU3l4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGSE9VSXNUVUZCVFN4TFFVRkxMRWRCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBGQlJ5OUNMRWxCUVVrc1VVRkJaMElzUTBGQlF6dEJRVk55UWl4TlFVRk5MRTlCUVU4c1IwRkJSenRKUVVOYUxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVc3NSVUZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJRenRKUVVOMFJDeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRk5MRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkhMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVU03U1VGRGNrUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJUU3hGUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSeXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZETzBsQlEzSkVMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVXNzUlVGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUXp0RFFVTjZSQ3hEUVVGRE8wRkJSMFlzU1VGQlNTeFpRVUZaTEVkQlFXRXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJSek5ETEUxQlFVMHNZVUZCWVN4SFFVRkhMRGhDUVVFNFFpeERRVUZETzBGQlEzSkVMRWxCUVVrc1YwRkJWeXhIUVVGUExHRkJRV0VzUTBGQlF6dEJRVWR3UXl4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03UVVGSGNFSXNUVUZCVFN4TFFVRkxMRWRCUVVjN1NVRkRWaXhIUVVGSExFVkJRVXNzVlVGQlZUdEpRVU5zUWl4TlFVRk5MRVZCUVVVc1ZVRkJWVHRKUVVOc1FpeEpRVUZKTEVWQlFVa3NWVUZCVlR0SlFVTnNRaXhMUVVGTExFVkJRVWNzVlVGQlZUdEpRVU5zUWl4SlFVRkpMRVZCUVVrc1UwRkJVenRKUVVOcVFpeExRVUZMTEVWQlFVY3NVMEZCVXp0RFFVTndRaXhEUVVGRE8wRkJOa2xYTEZGQlFVRXNSMEZCUnl4SFFVRlhMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRMmhETEVOQlFVTXNVVUZCWlN4RlFVRkZMRWRCUVZVc1JVRkJhMElzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJSVE5GTEVOQlFVTXNTVUZCVnl4RlFVRnRRaXhGUVVGRkxFTkJRVUVzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZGTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZEZGtZc1EwRkJRenRCUVVWR0xGTkJRVk1zVFVGQlRTeERRVUZETEU5QlFXTXNSVUZCUlN4VFFVRnBRaXhGUVVGRkxGVkJRV2xDTzBsQlEyaEZMRTFCUVUwc1QwRkJUeXhIUVVGSE8xRkJRMW9zUzBGQlN5eEZRVUZyUWl4VFFVRlRPMUZCUTJoRExFMUJRVTBzUlVGQlRTeFBRVUZQTzFGQlEyNUNMRk5CUVZNc1JVRkJXU3hUUVVGVE8xRkJRemxDTEZWQlFWVXNSVUZCVlN4VlFVRlZPMHRCUTJwRExFTkJRVU03U1VGRlJpeFRRVUZUTEV0QlFVc3NRMEZCUXl4WFFVRnRRaXhGUVVGRkxHTkJRV01zUjBGQlF5eExRVUZMTzFGQlEzQkVMRWxCUVVrc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4WlFVRlpMRU5CUVVNN1VVRkRjRVFzU1VGQlNTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1NVRkJTU3haUVVGWkxFTkJRVU03VVVGRE4wTXNTVUZCU1N4WFFVRlhMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRek5DTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNN1UwRkRka0k3WVVGQlRTeEpRVUZKTEZkQlFWY3NTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkROMElzVDBGQlR5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkROMEk3WVVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHRaUVVNM1FpeEpRVUZKTEdOQlFXTXNSVUZCUlR0blFrRkJSU3haUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdhVUpCUXpWQ08yZENRVUZGTEU5QlFVOHNRMEZCUXl4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRVVU3V1VGRGFrUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1QwRkJUeXhqUVVGakxFTkJRVUVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzWTBGQll5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1EwRkJRenRaUVVNM1NTeEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhMUVVGTExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3WVVGQlRUdFpRVU5JTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1owSkJRV2RDTEZkQlFWY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2RVSkJRWFZDTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkhPMUZCUTBRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRkZSQ3hUUVVGbExFdEJRVXNzUTBGQlF5eEhRVUZQTEVWQlFVVXNVVUZCVVN4SFFVRkRMRWxCUVVrN09FUkJRVzlDTEU5QlFVOHNUVUZCVFN4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkJRVHRKUVVONFJ5eFRRVUZsTEVsQlFVa3NRMEZCUXl4SFFVRlBMRVZCUVVVc1VVRkJVU3hIUVVGRExFbEJRVWs3T0VSQlFXOUNMRTlCUVU4c1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGQlFUdEpRVU4wUnl4VFFVRmxMRWxCUVVrc1EwRkJReXhIUVVGUExFVkJRVVVzVVVGQlVTeEhRVUZETEVsQlFVazdPRVJCUVc5Q0xFOUJRVThzVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZCUVR0SlFVTjBSeXhUUVVGbExFdEJRVXNzUTBGQlF5eEhRVUZQTEVWQlFVVXNVVUZCVVN4SFFVRkRMRWxCUVVrN09FUkJRVzlDTEU5QlFVOHNUVUZCVFN4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkJRVHRKUVVWNFJ5eFRRVUZUTEUxQlFVMHNRMEZCUXl4TlFVRmpPMUZCUXpGQ0xFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVRkZMRmRCUVZjc1IwRkJSeXhoUVVGaExFTkJRVU03VTBGQlJUdGhRVU5vUkN4SlFVRkpMRTFCUVUwc1JVRkJUVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVMEZCUlR0UlFVTTVReXhQUVVGUExGZEJRVmNzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRc1UwRkJVeXhOUVVGTkxFTkJRVU1zUjBGQlZ6dFJRVU4yUWl4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVGRkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRPMU5CUVVVN1VVRkRiRU1zVDBGQlR5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJDeFRRVUZsTEVkQlFVY3NRMEZCUXl4SFFVRlZMRVZCUVVVc1IwRkJUeXhGUVVGRkxGRkJRVkVzUjBGQlF5eEpRVUZKT3p0WlFVTnFSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRaUVVNMVNDeEpRVUZKTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGVFSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzU1VGQlNTeFpRVUZaTEVOQlFVTTdXVUZEYkVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRVZCUVVVN1owSkJRek5ETEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTFSQ3hOUVVGTkxFOUJRVThzUjBGQmQwSXNSMEZCUnl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVU42Uml4TlFVRk5MRk5CUVZNc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCUlN4RlFVRkZMRWxCUVVrc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRPMmRDUVVONFJ5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJRU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRE1VTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJUdHZRa0ZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0cFFrRkJSVHRuUWtGRGFrUXNTVUZCU1N4UlFVRlJMRWxCUVVrc1VVRkJVU3hGUVVGRk8yOUNRVU4wUWl4UFFVRlBMRTFCUVUwc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03YVVKQlF6TkVPMkZCUTBvN1dVRkRSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dFJRVU55UWl4RFFVRkRPMHRCUVVFN1NVRkZSQ3hUUVVGbExFOUJRVThzUTBGQlF5eEpRVUZaT3p0WlFVTXZRaXhKUVVGSkxFbEJRVWtzUzBGQlN5eEpRVUZKTEVWQlFVVTdaMEpCUTJZc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZEY2tJc1QwRkJUeXhOUVVGTkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8yRkJRekZETzJsQ1FVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZETTBJc1QwRkJUeXhYUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEZWtJN2FVSkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGRkxFTkJRVU1zUlVGQlJUdG5Ra0ZETjBJc1QwRkJUeXhOUVVGTkxFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRPM0ZDUVVOb1F5eEpRVUZKTEVOQlFVTXNRMEZCVHl4TlFVRmpMRVZCUVVVc1JVRkJSVHR2UWtGRE0wSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHQzUWtGRFZDeFJRVUZSTEVkQlFVY3NVMEZCVXl4RFFVRkRPM2RDUVVOeVFpeFBRVUZQTEUxQlFVMHNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3h2UTBGQmIwTXNRMEZCUXl4RFFVRkRPM0ZDUVVONFJUdHZRa0ZEUkN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8yOUNRVU5vUWl4UFFVRlBMRTFCUVUwc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4SFFVRkhMRmRCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXpSQ3hEUVVGRExFTkJRVUVzUTBGQlF6dHhRa0ZEUkN4TFFVRkxMRU5CUVVNc1IwRkJVeXhGUVVGRk8yOUNRVU5rTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNN2IwSkJRM0pDTEU5QlFVOHNUVUZCVFN4TFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVVc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF6dGhRVU5XTzJsQ1FVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExFVkJRVVVzUlVGQlJUdG5Ra0ZEY0VJc1NVRkJTU3hIUVVGSExIVkNRVUYxUWl4RFFVRkRPMkZCUTJ4RE8ybENRVUZOTzJGQlEwNDdXVUZEUkN4UlFVRlJMRWRCUVVNc1NVRkJTU3hEUVVGRE8xbEJRMlFzVDBGQlR5eE5RVUZOTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVFc1EwRkJReXhEUVVGRExIVkNRVUYxUWl4WFFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU01Uml4RFFVRkRPMHRCUVVFN1NVRkZSQ3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZ4UkR0UlFVTnFSU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RlFVRkZPMWxCUVVVc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZCUlR0UlFVTnlSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RlFVRkZPMWxCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVRkZPMUZCUTI1RUxFbEJRVWtzUjBGQlJ5eERRVUZETEV0QlFVc3NTMEZCUnl4VFFVRlRMRVZCUVVjN1dVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUVVVN1NVRkRja1FzUTBGQlF6dEpRVVZFTEZOQlFWTXNUMEZCVHl4RFFVRkRMRWRCUVU4c1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNSMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJaMEk3VVVGRE4wUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1IwRkJUeXhGUVVGRkxFdEJRVmtzUlVGQlJTeExRVUZaTEVWQlFVVXNWVUZCYVVJN1dVRkRjRVVzU1VGQlNTeEhRVUZITEV0QlFVc3NTVUZCU1N4RlFVRm5RanRuUWtGQlJTeFBRVUZQTEUxQlFVMHNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFbEJRVWtzUjBGQlJ5eExRVUZMTEZOQlFWTXNSVUZCVnp0blFrRkJSU3hQUVVGUExGZEJRVmNzUTBGQlF6dGhRVUZGTzFsQlEzWkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVlVGQlZTeEZRVUZITzJkQ1FVRkZMRTlCUVU4c1ZVRkJWU3hEUVVGRE8yRkJRVVU3V1VGRGRFUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVXM3WjBKQlFVVXNUMEZCVHl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8yRkJRVVU3V1VGRGRFUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVXM3WjBKQlF6VkNMRWxCUVVrc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTTdhVUpCUVVVN1owSkJRM0JGTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlEzWkNMRTlCUVU4c1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkRMRVZCUVVVc1EwRkJRU3hEUVVGRExFTkJRVU1zUzBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlFTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMmxDUVVNeFJ6dG5Ra0ZEUml4TlFVRk5MRU5CUVVNc1IwRkJTU3hOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEhsQ1FVRjVRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTNCR0xFMUJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF6dG5Ra0ZETlVNc1RVRkJUU3hQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZETTBNc1QwRkJUeXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzVDBGQlR5eExRVU40UkN4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVkQlFVTXNUVUZCVFN4RFFVTjRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhWUVVGVkxFZEJRVWNzUTBGQlF6dGhRVU0xUXp0WlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6RkNMRU5CUVVNN1VVRkRSQ3hKUVVGSkxFMUJRVTBzUlVGQlJUdFpRVUZGTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVRkZPMUZCUTNoRUxFOUJRVThzVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4TFFVRkxMRXRCUVVjc1NVRkJTU3hEUVVGQkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZQTEVOQlFVTXNUVUZCWVN4RlFVRkZMRmxCUVd0Q0xFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNZVUZCYTBJc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZGZGtvc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlRTeExRVUZMTEVOQlFVTTdTVUZEZUVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEZGtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEZGtJc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlRTeExRVUZMTEVOQlFVTTdTVUZEZUVJc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlRTeExRVUZMTEVOQlFVTTdTVUZEZUVJc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlRTeExRVUZMTEVOQlFVTTdTVUZEZUVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEZGtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEZGtJc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlRTeExRVUZMTEVOQlFVTTdTVUZEZUVJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlN5eE5RVUZOTEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlN5eE5RVUZOTEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlVTeEhRVUZITEVOQlFVTTdTVUZEZEVJc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlNTeFBRVUZQTEVOQlFVTTdTVUZETVVJc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlN5eE5RVUZOTEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlNTeFBRVUZQTEVOQlFVTTdTVUZETVVJc1QwRkJUeXhOUVVGTkxFTkJRVU03UVVGRGJFSXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGF0YUZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL0RhdGFGaWx0ZXJzXCIpO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgbG9nID0gaHN1dGlsXzEubG9nKCdEYXRhJyk7XG52YXIgVHlwZXM7XG4oZnVuY3Rpb24gKFR5cGVzKSB7XG4gICAgVHlwZXNbXCJudW1iZXJcIl0gPSBcIm51bWJlclwiO1xuICAgIFR5cGVzW1wibmFtZVwiXSA9IFwibmFtZVwiO1xuICAgIFR5cGVzW1wiZGF0ZVwiXSA9IFwiZGF0ZVwiO1xuICAgIFR5cGVzW1wiY3VycmVuY3lcIl0gPSBcImN1cnJlbmN5XCI7XG4gICAgVHlwZXNbXCJwZXJjZW50XCJdID0gXCJwZXJjZW50XCI7XG59KShUeXBlcyA9IGV4cG9ydHMuVHlwZXMgfHwgKGV4cG9ydHMuVHlwZXMgPSB7fSkpO1xuZnVuY3Rpb24gdG9EYXRlKHZhbCwgbGltaXRZZWFyID0gMTk3MCkge1xuICAgIGxldCBkO1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgIGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgUmVnRXhwKGBcXFxcZFxcXFxkJHtkLmdldEZ1bGxZZWFyKCkgJSAxMDB9YCwgJ2cnKTtcbiAgICAgICAgaWYgKCF2YWwubWF0Y2gocikpIHtcbiAgICAgICAgICAgIGNvbnN0IHlyID0gMTkwMCArIGQuZ2V0RnVsbFllYXIoKSAlIDEwMDtcbiAgICAgICAgICAgIGQuc2V0RnVsbFllYXIoKHlyIDwgbGltaXRZZWFyKSA/IHlyICsgMTAwIDogeXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkO1xufVxuZnVuY3Rpb24gY2FzdFZhbCh0eXBlLCB2YWwpIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRvRGF0ZSh2YWwpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdC5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGNhc2UgJ3BlcmNlbnQnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZW5kc1dpdGgoJyUnKSA/IG51bSAvIDEwMCA6IG51bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICAgIHJlc3VsdCA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgPyB2YWwucmVwbGFjZSgvW15lRVxcK1xcLVxcLlxcZF0vZywgJycpIDogdmFsO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VGbG9hdChyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTmFOKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnICsgdmFsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmREb21haW4oZGF0YSwgY29sLCB0eXBlLCBkb21haW4pIHtcbiAgICBpZiAoZG9tYWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9tYWluID0gW107XG4gICAgfVxuICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb21haW5bMF0gPSAwO1xuICAgICAgICBkb21haW5bMV0gPSBkYXRhLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZXhwYW5kO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubmFtZTpcbiAgICAgICAgICAgICAgICBleHBhbmQgPSAocikgPT4gZG9tYWluLmluZGV4T2YoJycgKyByW2NvbF0pIDwgMCA/IGRvbWFpbi5wdXNoKCcnICsgcltjb2xdKSA6ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUeXBlcy5kYXRlOlxuICAgICAgICAgICAgICAgIGV4cGFuZCA9IChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdG9EYXRlKHJbY29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IGRvbWFpblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblswXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gZG9tYWluWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGVzLm51bWJlcjpcbiAgICAgICAgICAgIGNhc2UgVHlwZXMucGVyY2VudDpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXhwYW5kID0gKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSBwYXJzZUZsb2F0KHJbY29sXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2IDwgZG9tYWluWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgPiBkb21haW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZXhwYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbWFpbjtcbn1cbmV4cG9ydHMuZmluZERvbWFpbiA9IGZpbmREb21haW47XG5mdW5jdGlvbiBmaW5kVHlwZSh2YWwpIHtcbiAgICBpZiAoIXZhbCB8fCB2YWwgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xuICAgIH1cbiAgICBjb25zdCBzdHJWYWwgPSB2YWw7XG4gICAgaWYgKCcnICsgcGFyc2VGbG9hdChzdHJWYWwpID09PSBzdHJWYWwpIHtcbiAgICAgICAgcmV0dXJuICdudW1iZXInO1xuICAgIH1cbiAgICBpZiAoc3RyVmFsLnN0YXJ0c1dpdGgoJyQnKSAmJiAhaXNOYU4ocGFyc2VGbG9hdChzdHJWYWwuc2xpY2UoMSkpKSkge1xuICAgICAgICByZXR1cm4gJ2N1cnJlbmN5JztcbiAgICB9XG4gICAgaWYgKHN0clZhbC5lbmRzV2l0aCgnJScpICYmICFpc05hTihwYXJzZUZsb2F0KHN0clZhbCkpKSB7XG4gICAgICAgIHJldHVybiAncGVyY2VudCc7XG4gICAgfVxuICAgIGlmICghaXNOYU4odG9EYXRlKHN0clZhbCkuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0clZhbC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJudWxsXCI6IGJyZWFrO1xuICAgICAgICBjYXNlIFwiI3JlZiFcIjogYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGlmICh2YWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuICduYW1lJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmNsYXNzIERhdGEge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMubWV0YSA9IFtdO1xuICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhKGRhdGFzZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGltcG9ydERhdGEoZGF0YXNldCkge1xuICAgICAgICB0aGlzLm5hbWUgPSAnZGF0YScgKyAoTWF0aC5yb3VuZCgxMDAwICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgaWYgKGRhdGFzZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gZGF0YXNldFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gZGF0YXNldC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEocm93cywgbmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhc2V0LnJvd3MsIGRhdGFzZXQuY29sTmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuZ2V0RGF0YSgpLFxuICAgICAgICAgICAgY29sTmFtZXM6IHRoaXMuY29sTmFtZXMoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBnZXRDb2x1bW4oY29sKSB7XG4gICAgICAgIGNvbnN0IGNuID0gdGhpcy5jb2xOdW1iZXIoY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHJvdykgPT4gcm93W2NuXSk7XG4gICAgfVxuICAgIGNvbEFkZChjb2wpIHtcbiAgICAgICAgbGV0IG0gPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbSA9IHRoaXMubWV0YVtjb2xdID0ge307XG4gICAgICAgICAgICBtLm5hbWUgPSBjb2w7XG4gICAgICAgICAgICBtLmNvbHVtbiA9IHRoaXMubWV0YS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm1ldGEucHVzaChtKTtcbiAgICAgICAgICAgIG0uY2FzdCA9IGZhbHNlO1xuICAgICAgICAgICAgbS5hY2Nlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbiAgICBjb2xJbml0aWFsaXplKGNvbCwgaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlb2YgaW5pdGlhbGl6ZXIgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGxldCBjbiA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIWNuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjbiA9IHRoaXMuY29sQWRkKGNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGNvbHVtbiAke2NvbH0gZG9lcyBub3QgZXhpc3QgaW4gRGF0YWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHJvd1tjbi5jb2x1bW5dID0gZm4gPyBpbml0aWFsaXplcihyb3dbY24uY29sdW1uXSwgcm93SW5kZXgsIHJvdykgOiBpbml0aWFsaXplcik7XG4gICAgICAgIHJldHVybiBjbi5jb2x1bW47XG4gICAgfVxuICAgIGNvbE51bWJlcihjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBtLmNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb2xOYW1lKGNvbCkge1xuICAgICAgICB2YXIgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfVxuICAgIGNvbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhLm1hcCgobSkgPT4gbS5uYW1lKTtcbiAgICB9XG4gICAgY29sVHlwZShjb2wpIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICByZXR1cm4gbWV0YSA/IG1ldGEudHlwZXNbMF0udHlwZSA6ICduYW1lJztcbiAgICB9XG4gICAgZmluZERvbWFpbihjb2wsIGRvbWFpbikge1xuICAgICAgICByZXR1cm4gZmluZERvbWFpbih0aGlzLmRhdGEsIHRoaXMuY29sTnVtYmVyKGNvbCksIHRoaXMuY29sVHlwZShjb2wpLCBkb21haW4pO1xuICAgIH1cbiAgICBjYXN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRhLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGMuY29sdW1uO1xuICAgICAgICAgICAgaWYgKCFjLmNhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93KSA9PiByb3dbY29sXSA9IGNhc3RWYWwoYy50eXBlc1swXS50eXBlLCByb3dbY29sXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYy5jYXN0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcihjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIERhdGFGaWx0ZXJzXzEuZmlsdGVyKHRoaXMsIGNvbmRpdGlvbik7XG4gICAgfVxuICAgIHNvcnQoc29ydEZuLCBjb2wpIHtcbiAgICAgICAgbGV0IGZuID0gc29ydEZuO1xuICAgICAgICBpZiAoIWNvbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQoZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sID0gdGhpcy5jb2xOdW1iZXIoY29sKTtcbiAgICAgICAgICAgIGlmIChzb3J0Rm4gPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIGZuID0gKGEsIGIpID0+IChiID4gYSkgPyAxIDogKChiIDwgYSkgPyAtMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvcnRGbiA9PT0gJ2FzY2VuZGluZycpIHtcbiAgICAgICAgICAgICAgICBmbiA9IChhLCBiKSA9PiAoYiA8IGEpID8gMSA6ICgoYiA+IGEpID8gLTEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0KChyMSwgcjIpID0+IGZuKHIxW2NvbF0sIHIyW2NvbF0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbWFwKG1hcEZuLCBjb2wpIHtcbiAgICAgICAgY29uc3Qgbm9vcCA9ICh2YWwpID0+IHZhbDtcbiAgICAgICAgY29uc3QgY3VtdWxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIHJldHVybiAodmFsLCBpKSA9PiB7IHN1bSArPSArdmFsOyByZXR1cm4gc3VtOyB9O1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnZXRGbigpIHtcbiAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgIHN3aXRjaCAobWFwRm4pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjdW11bGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGZuID0gY3VtdWxhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgIGZuID0gbm9vcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZm4gPSBtYXBGbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm4gPSBnZXRGbigpO1xuICAgICAgICBjb25zdCBjID0gY29sID8gdGhpcy5jb2xOdW1iZXIoY29sKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBEYXRhKHtcbiAgICAgICAgICAgIGNvbE5hbWVzOiB0aGlzLmNvbE5hbWVzKCksXG4gICAgICAgICAgICByb3dzOiB0aGlzLmRhdGEubWFwKChyb3csIHJvd0luZGV4LCByb3dzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93W2NdID0gZm4ocm93W2NdLCBjLCByb3dJbmRleCwgcm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dzW3Jvd0luZGV4XSA9IGZuKHJvdywgcm93SW5kZXgsIHJvd3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmdldE5hbWUoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZ2V0TWV0YShjb2wpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1ldGFbY29sXSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1ldGFbY29sXS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFbY29sXTtcbiAgICB9XG4gICAgc2V0RGF0YShyb3dzLCBuYW1lcywgYXV0b1R5cGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWV0YSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSByb3dzLnNsaWNlKCk7XG4gICAgICAgIGlmIChuYW1lcyAmJiBuYW1lcy5mb3JFYWNoKSB7XG4gICAgICAgICAgICBuYW1lcy5mb3JFYWNoKChjb2wpID0+IHRoaXMuY29sQWRkKGNvbCkpO1xuICAgICAgICAgICAgaWYgKGF1dG9UeXBlKSB7XG4gICAgICAgICAgICAgICAgbmFtZXMuZm9yRWFjaCgoY29sKSA9PiB0aGlzLmZpbmRUeXBlcyhjb2wpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc3REYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihgaW52YWxpZCBuYW1lcyBzZXREYXRhOlxcbiR7bG9nLmluc3BlY3QobmFtZXMsIDUpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRUeXBlcyhjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhEYXRhLnR5cGUpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRzID0geyB0eXBlOiBEYXRhLnR5cGVbdF0sIGNvdW50OiAwIH07XG4gICAgICAgICAgICB0eXBlcy5wdXNoKHRzKTtcbiAgICAgICAgICAgIHR5cGVzW0RhdGEudHlwZVt0XV0gPSB0cztcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IHYgb2YgdGhpcy5hbGxSb3dzKGNvbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBmaW5kVHlwZSh2KTtcbiAgICAgICAgICAgIGlmICh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdHlwZXNbdF0uY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0eXBlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS50eXBlID09PSAnY3VycmVuY3knICYmIGEuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIudHlwZSA9PT0gJ2N1cnJlbmN5JyAmJiBiLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGIuY291bnQgLSBhLmNvdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgbS50eXBlcyA9IHR5cGVzO1xuICAgICAgICByZXR1cm4gdHlwZXNbMF0udHlwZTtcbiAgICB9XG4gICAgKmFsbFJvd3MoY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbE51bWJlcihjb2x1bW4pO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZGF0YS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5kYXRhW3JdW2NdO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EYXRhID0gRGF0YTtcbkRhdGEudHlwZSA9IHtcbiAgICBudW1iZXI6ICdudW1iZXInLFxuICAgIG5hbWU6ICduYW1lJyxcbiAgICBkYXRlOiAnZGF0ZScsXG4gICAgY3VycmVuY3k6ICdjdXJyZW5jeScsXG4gICAgcGVyY2VudDogJ3BlcmNlbnQnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBZUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5RVlYUmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlNVRXNLME5CUVd0RU8wRkJRMnhFTEcxRFFVRXlRenRCUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVdsRmNrVXNTVUZCV1N4TFFWZFlPMEZCV0VRc1YwRkJXU3hMUVVGTE8wbEJSVlFzTUVKQlFYRkNMRU5CUVVFN1NVRkZja0lzYzBKQlFXMUNMRU5CUVVFN1NVRkZia0lzYzBKQlFXMUNMRU5CUVVFN1NVRkZia0lzT0VKQlFYVkNMRU5CUVVFN1NVRkZka0lzTkVKQlFYTkNMRU5CUVVFN1FVRkRPVUlzUTBGQlF5eEZRVmhYTEV0QlFVc3NSMEZCVEN4aFFVRkxMRXRCUVV3c1lVRkJTeXhSUVZkb1FqdEJRV0ZFTEZOQlFWTXNUVUZCVFN4RFFVRkRMRWRCUVZjc1JVRkJSU3hUUVVGVExFZEJRVU1zU1VGQlNUdEpRVU4yUXl4SlFVRkpMRU5CUVUwc1EwRkJRenRKUVVOWUxFbEJRVWtzUjBGQlJ5eFpRVUZaTEVsQlFVa3NSVUZCUlR0UlFVRkZMRTlCUVdFc1IwRkJSeXhEUVVGRE8wdEJRVVU3U1VGRE9VTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVN1VVRkRja0lzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE5VUXNTVUZCU1N4RFFVRlZMRWRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEZWtJc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha1E3UzBGRFNqdEpRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTJJc1EwRkJRenRCUVZORUxGTkJRVk1zVDBGQlR5eERRVUZETEVsQlFWTXNSVUZCUlN4SFFVRlhPMGxCUTI1RExFbEJRVWtzVFVGQlRTeEhRVUZYTEVkQlFVY3NRMEZCUXp0SlFVTjZRaXhSUVVGUkxFbEJRVWtzUlVGQlJUdFJRVU5XTEV0QlFVc3NUVUZCVFR0WlFVTlFMRWxCUVVrc1IwRkJSeXhaUVVGWkxFbEJRVWtzUlVGQlJUdG5Ra0ZCUlN4UFFVRlBMRWRCUVVjc1EwRkJRenRoUVVGRk8xbEJRM2hETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGNrSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVTdaMEpCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dGhRVUZGTzFsQlF5OURMRTlCUVU4c1RVRkJUU3hEUVVGRE8xRkJRMnhDTEV0QlFVc3NVMEZCVXp0WlFVTldMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTjZRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRelZDTEU5QlFXZENMRWRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0aFFVTnlSRHRwUWtGQlRUdG5Ra0ZEU0N4UFFVRlBMRWRCUVVjc1EwRkJRenRoUVVOa08xRkJSMHdzUzBGQlN5eFZRVUZWTzFsQlJWZ3NUVUZCVFN4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0UlFVVm9SaXhMUVVGTExGRkJRVkU3V1VGRFZDeEpRVUZKTEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGQlJTeE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRVVU3V1VGRGFFVXNTVUZCU1N4TFFVRkxMRU5CUVZNc1RVRkJUU3hEUVVGRExFVkJRVVU3WjBKQlFVVXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVGRk8xbEJRemRETEU5QlFVOHNUVUZCVFN4RFFVRkRPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eERRVUZSTEU5QlFVOHNSVUZCUlN4SFFVRkRMRWRCUVVjc1EwRkJRenRMUVVOcVF6dEJRVU5NTEVOQlFVTTdRVUZGUkN4VFFVRm5RaXhWUVVGVkxFTkJRVU1zU1VGQlpTeEZRVUZGTEVkQlFWVXNSVUZCUlN4SlFVRlRMRVZCUVVVc1RVRkJZVHRKUVVNMVJTeEpRVUZKTEUxQlFVMHNTMEZCUnl4VFFVRlRMRVZCUVVVN1VVRkJSU3hOUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzB0QlFVVTdTVUZEYUVRc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzFGQlEyNUNMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkROMEk3VTBGQlRUdFJRVU5JTEVsQlFVa3NUVUZCTUVJc1EwRkJRenRSUVVNdlFpeFJRVUZQTEVsQlFVa3NSVUZCUlR0WlFVTlVMRXRCUVVzc1MwRkJTeXhEUVVGRExFbEJRVWs3WjBKQlExZ3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQldTeE5RVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGaExFMUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRelZITEUxQlFVMDdXVUZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhKUVVGSk8yZENRVU5ZTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hGUVVGRk8yOUNRVU51UWl4SlFVRkpMRU5CUVVNc1IwRkJVU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRelZDTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExGTkJRVk1zUlVGQlJUdDNRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNGQ1FVRkZPMjlDUVVNM1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFVkJRVVU3ZDBKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZCUlR0dlFrRkROME1zU1VGQlNTeERRVUZETEV0QlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1MwRkJSeXhKUVVGSkxFVkJRVVU3ZDBKQlF6TkNMRWxCUVVrc1EwRkJReXhIUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlRzMFFrRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2xDUVVGRk96WkNRVU01UWl4SlFVRkpMRU5CUVVNc1IwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdORUpCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0NVFrRkJSVHR4UWtGRE0wTTdaMEpCUTB3c1EwRkJReXhEUVVGRE8yZENRVU5HTEUxQlFVMDdXVUZEVml4TFFVRkxMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGJFSXNTMEZCU3l4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJRMjVDTzJkQ1FVTkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTzI5Q1FVTnVRaXhKUVVGSkxFTkJRVU1zUjBGQlZTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdiMEpCUXpkRExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkhMRk5CUVZNc1JVRkJSVHQzUWtGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zRkNRVUZGTzI5Q1FVTTNReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRVZCUVVVN2QwSkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGQlJUdHZRa0ZETjBNc1NVRkJTU3hEUVVGRExFdEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCUnl4SlFVRkpMRVZCUVVVN2QwSkJRek5DTEVsQlFVa3NRMEZCUXl4SFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUczBRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNsQ1FVRkZPelpDUVVNNVFpeEpRVUZKTEVOQlFVTXNSMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3TkVKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDVRa0ZCUlR0eFFrRkRNME03WjBKQlEwd3NRMEZCUXl4RFFVRkRPMU5CUTFRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMHRCUTNoQ08wbEJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdRVUZEYkVJc1EwRkJRenRCUVhSRFJDeG5RMEZ6UTBNN1FVRmhSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEhRVUZYTzBsQlEzcENMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eExRVUZITEVWQlFVVXNSVUZCUlR0UlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRVVU3U1VGRGRFTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1NVRkJTU3hGUVVGTk8xRkJRVVVzVDBGQlR5eE5RVUZOTEVOQlFVTTdTMEZCUlR0SlFVTXZReXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVRkZMRTlCUVU4c1VVRkJVU3hEUVVGRE8wdEJRVVU3U1VGSGFrUXNUVUZCVFN4TlFVRk5MRWRCUVZjc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVsQlFVa3NSVUZCUlN4SFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eE5RVUZOTEVWQlFTdENPMUZCUVVVc1QwRkJUeXhSUVVGUkxFTkJRVU03UzBGQlJUdEpRVU4yUml4SlFVRkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRVVVzVDBGQlR5eFZRVUZWTEVOQlFVTTdTMEZCUlR0SlFVTjZSaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVdFN1VVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dExRVUZGTzBsQlEzaEdMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVFpDTzFGQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1MwRkJSVHRKUVZGdVJpeFJRVUZSTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSVHRSUVVNeFFpeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwN1VVRkRia0lzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5PMUZCUTNCQ0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJReXhEUVVGRExFVkJRVVU3V1VGQlJTeFBRVUZQTEUxQlFVMHNRMEZCUXp0VFFVRkZPMHRCUTJoRU8wbEJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdRVUZEYUVJc1EwRkJRenRCUVU5RUxFMUJRV0VzU1VGQlNUdEpRV3RDWWl4WlFVRlpMRTlCUVRCQ08xRkJlVk01UWl4VFFVRkpMRWRCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRVU40UWl4VFFVRkpMRWRCUVdsQ0xFVkJRVVVzUTBGQlF6dFJRWHBUTlVJc1NVRkJTU3hQUVVGUExFVkJRVVU3V1VGQlJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRE9VTXNRMEZCUXp0SlFVdE5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVUxTkxGVkJRVlVzUTBGQlF5eFBRVUY1UWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEUxQlFVMHNSMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFUXNTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRWQ3hKUVVGSkxFOUJRVThzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUXpGQ0xFMUJRVTBzUzBGQlN5eEhRVUZoTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRE4wSTdhVUpCUVUwN1owSkJRMGdzU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZPMjlDUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenRwUWtGQlJUdG5Ra0ZETDBNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU5vUkR0VFFVTktPMGxCUTB3c1EwRkJRenRKUVV0TkxFMUJRVTA3VVVGRFZDeFBRVUZQTzFsQlEwZ3NTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGNFSXNVVUZCVVN4RlFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3VTBGRE0wSXNRMEZCUXp0SlFVTk9MRU5CUVVNN1NVRkxUU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGTlRTeFRRVUZUTEVOQlFVTXNSMEZCYlVJN1VVRkRhRU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnVSQ3hEUVVGRE8wbEJVVTBzVFVGQlRTeERRVUZETEVkQlFWVTdVVUZEY0VJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRha0lzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRV1VzUlVGQlJTeERRVUZETzFsQlEzQkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVXNzUjBGQlJ5eERRVUZETzFsQlEyWXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRlBMRXRCUVVzc1EwRkJRenRaUVVOdVFpeERRVUZETEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRUUVVOMFFqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVZsTkxHRkJRV0VzUTBGQlF5eEhRVUZ0UWl4RlFVRkZMRmRCUVRCQ08xRkJRMmhGTEUxQlFVMHNSVUZCUlN4SFFVRkhMRTlCUVU4c1YwRkJWeXhMUVVGTExGVkJRVlVzUTBGQlF6dFJRVU0zUXl4SlFVRkpMRVZCUVVVc1IwRkJZeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNSRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEVEN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZCUlN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVRkZPMmxDUVVOc1JEdG5Ra0ZCUlN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGVkJRVlVzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJReXhEUVVGRE8yRkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFWY3NSVUZCUlN4UlFVRmxMRVZCUVVVc1JVRkJSU3hEUVVNelF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFWVXNWMEZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlZTeFhRVUZYTEVOQlEyNUhMRU5CUVVNN1VVRkRSaXhQUVVGUExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVZGTkxGTkJRVk1zUTBGQlF5eEhRVUZ0UWp0UlFVTm9ReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dFRRVUZGTzJGQlEzaENPMWxCUTBRc1EwRkJReXhEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEYkVJc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzFOQlEyNUNPMGxCUTB3c1EwRkJRenRKUVZGTkxFOUJRVThzUTBGQlF5eEhRVUZ0UWp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dFRRVUZGTzFGQlF6ZENMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCVFUwc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGWkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOdVJDeERRVUZETzBsQlVVMHNUMEZCVHl4RFFVRkRMRWRCUVcxQ08xRkJRemxDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETDBJc1QwRkJUeXhKUVVGSkxFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVk5OTEZWQlFWVXNRMEZCUXl4SFFVRnZRaXhGUVVGRkxFMUJRV003VVVGRGJFUXNUMEZCVHl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGFrWXNRMEZCUXp0SlFVVk5MRkZCUVZFN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVZrc1JVRkJSU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGNrSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVU3WjBKQlExUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU55Ump0WlFVTkVMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVk5OTEUxQlFVMHNRMEZCUXl4VFFVRnRRanRSUVVNM1FpeFBRVUZQTEc5Q1FVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRm5RMDBzU1VGQlNTeERRVUZETEUxQlFXOUNMRVZCUVVVc1IwRkJiMEk3VVVGRGJFUXNTVUZCU1N4RlFVRkZMRWRCUVZjc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRUaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOMFFqdGhRVUZOTzFsQlEwZ3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETVVJc1NVRkJTU3hOUVVGTkxFdEJRVXNzV1VGQldTeEZRVUZGTzJkQ1FVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVXNzUlVGQlJTeERRVUZMTEVWQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVGRk8xbEJRemxGTEVsQlFVa3NUVUZCVFN4TFFVRkxMRmRCUVZjc1JVRkJSenRuUWtGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkxMRVZCUVVVc1EwRkJTeXhGUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZCUlR0WlFVTTVSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVZFc1JVRkJSU3hGUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VFMFEwMHNSMEZCUnl4RFFVRkRMRXRCUVRKQ0xFVkJRVVVzUjBGQmIwSTdVVUZEZUVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZQTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNNVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRVZCUVVVN1dVRkRiRUlzU1VGQlNTeEhRVUZITEVkQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFZc1QwRkJUeXhEUVVGRExFZEJRVlVzUlVGQlJTeERRVUZSTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhGTEVOQlFVTXNRMEZCUXp0UlFVTkdMRk5CUVZNc1MwRkJTenRaUVVOV0xFbEJRVWtzUlVGQlJTeERRVUZETzFsQlExQXNVVUZCVVN4TFFVRkxMRVZCUVVVN1owSkJRMWdzUzBGQlN5eFZRVUZWTzI5Q1FVRkZMRVZCUVVVc1IwRkJSeXhSUVVGUkxFVkJRVVVzUTBGQlF6dHZRa0ZCUXl4TlFVRk5PMmRDUVVONFF5eExRVUZMTEUxQlFVMDdiMEpCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZCUXl4TlFVRk5PMmRDUVVOc1F5eFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRWRCUVcxQ0xFdEJRVXNzUTBGQlF6dGhRVU12UXp0WlFVTkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRMlFzUTBGQlF6dFJRVVZFTEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnBDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF5OURMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETzFsQlEyeENMRkZCUVZFc1JVRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEzaENMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVZNc1JVRkJSU3hSUVVGbExFVkJRVVVzU1VGQldTeEZRVUZGTEVWQlFVVTdaMEpCUXpWRUxFbEJRVWtzUTBGQlF5eEZRVUZGTzI5Q1FVTklMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlZ5eEZRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRMjVFTzNGQ1FVRk5PMjlDUVVOSUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCWXl4RlFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0cFFrRkRlRVE3WjBKQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1dVRkRaaXhEUVVGRExFTkJRVU03V1VGRFJpeEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRUUVVOMFFpeERRVUZETEVOQlFVTTdVVUZEU0N4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlUwOHNUMEZCVHl4RFFVRkRMRWRCUVcxQ08xRkJSUzlDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlFVVXNUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkJSVHRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETDBJc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGVFR5eFBRVUZQTEVOQlFVTXNTVUZCWXl4RlFVRkZMRXRCUVdNc1JVRkJSU3hSUVVGUkxFZEJRVU1zU1VGQlNUdFJRVU42UkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEzcENMRWxCUVVrc1MwRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEZUVJc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFbEJRVWtzVVVGQlVTeEZRVUZGTzJkQ1FVTldMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZWTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia1FzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUTI1Q08xTkJRMG83WVVGQlRUdFpRVU5JTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc01rSkJRVEpDTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRKUVVOTUxFTkJRVU03U1VGVFR5eFRRVUZUTEVOQlFVTXNSMEZCYlVJN1VVRkRha01zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4TlFVRk5MRXRCUVVzc1IwRkJaMElzUlVGQlJTeERRVUZETzFGQlF6bENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTzFsQlEzaERMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUXpWRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRaaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOSUxFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU0zUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0aFFVRkZPMU5CUTNoRE8xRkJRMFFzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlRMRU5CUVZrc1JVRkJSU3hEUVVGWk8xbEJRekZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1MwRkJSeXhWUVVGVkxFbEJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCUnl4VlFVRlZMRWxCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVTdaMEpCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03WVVGQlJUdFpRVU5xUkN4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRMmhDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCVFU4c1EwRkJSU3hQUVVGUExFTkJRVU1zVFVGQmMwSTdVVUZEY0VNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOcVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGJrTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwQ08wbEJRMHdzUTBGQlF6czdRVUZvV1V3c2IwSkJhVmxETzBGQk4xaHBRaXhUUVVGSkxFZEJRVWM3U1VGRmFrSXNUVUZCVFN4RlFVRlpMRkZCUVZFN1NVRkZNVUlzU1VGQlNTeEZRVUZqTEUxQlFVMDdTVUZGZUVJc1NVRkJTU3hGUVVGakxFMUJRVTA3U1VGRmVFSXNVVUZCVVN4RlFVRlZMRlZCUVZVN1NVRkZOVUlzVDBGQlR5eEZRVUZYTEZOQlFWTTdRMEZGT1VJc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEYXRhXzEgPSByZXF1aXJlKFwiLi9EYXRhXCIpO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgbG9nID0gaHN1dGlsXzEubG9nKCdEYXRhRmlsdGVycycpO1xuZnVuY3Rpb24gcmVzb2x2ZVRlcm1pbmFsQ29uZGl0aW9uKG5hbWUsIHZhbCwgcm93LCBjb2xOdW1iZXIpIHtcbiAgICBjb25zdCBjb2wgPSBjb2xOdW1iZXIobmFtZSk7XG4gICAgY29uc3QgdmFsSXNGdW5jdGlvbiA9ICh0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKTtcbiAgICBjb25zdCB2YWxJc0FycmF5ID0gKCh0eXBlb2YgdmFsID09PSAnb2JqZWN0JykgJiYgKHZhbC5sZW5ndGggIT09IHVuZGVmaW5lZCkpO1xuICAgIGlmIChpc05hTihjb2wpKSB7XG4gICAgICAgIGxvZy53YXJuKGBjb2x1bW4gbmFtZSAnJHtuYW1lfScgY2Fubm90IGJlIHJlc29sdmVkIGluIHRlcm1pbmFsIGNvbmRpdGlvbiAke25hbWV9PSR7dmFsfWApO1xuICAgICAgICBsb2cud2Fybihyb3cpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbElzRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbChyb3dbY29sXSwgcm93KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsSXNBcnJheSkge1xuICAgICAgICByZXR1cm4gKHZhbC5sZW5ndGggPT09IDApIHx8IHZhbC5zb21lKCh2KSA9PiByb3dbY29sXSA9PT0gdik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKHJvd1tjb2xdID09PSB2YWwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVDb25kaXRpb24oY29uZGl0aW9uLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSB7XG4gICAgbGV0IG9yUmVzdWx0ID0gZmFsc2U7XG4gICAgbGV0IGFuZFJlc3VsdCA9IHRydWU7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gKGNvbmRpdGlvbiA9PT0gcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IG1jID0gY29uZGl0aW9uO1xuICAgICAgICBpZiAobWMubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChhbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1jLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhbmQgP1xuICAgICAgICAgICAgICAgIG1jLmV2ZXJ5KChjZCkgPT4gcmVzb2x2ZUNvbmRpdGlvbihjZCwgcm93LCByLCBjb2xOdW1iZXIsIGFuZCkpIDpcbiAgICAgICAgICAgICAgICBtYy5zb21lKChjZCkgPT4gcmVzb2x2ZUNvbmRpdGlvbihjZCwgcm93LCByLCBjb2xOdW1iZXIsIGFuZCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uTWV0ID0gYW5kO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldENvbmQgPSBjb25kaXRpb247XG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9IHJlc29sdmVDb25kaXRpb24oc2V0Q29uZC5vciwgcm93LCByLCBjb2xOdW1iZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLmFuZCwgcm93LCByLCBjb2xOdW1iZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQgPSAhcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLm5vdCwgcm93LCByLCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbmRpdGlvbk1ldCA9IHJlc29sdmVUZXJtaW5hbENvbmRpdGlvbihuYW1lLCBjb25kaXRpb25bbmFtZV0sIHJvdywgY29sTnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbk1ldCkge1xuICAgICAgICAgICAgICAgICAgICBvclJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5kUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGB1bnJlY29nbml6ZWQgY29uZGl0aW9uOiAke0pTT04uc3RyaW5naWZ5KGNvbmRpdGlvbil9YCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGFuZCA/IGFuZFJlc3VsdCA6IG9yUmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyKGRhdGEsIGNvbmQpIHtcbiAgICBjb25zdCBjb2xOdW1iZXIgPSAobmFtZSkgPT4gZGF0YS5jb2xOdW1iZXIobmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRhXzEuRGF0YSh7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLmdldE5hbWUoKSxcbiAgICAgICAgICAgIGNvbE5hbWVzOiBkYXRhLmNvbE5hbWVzKCksXG4gICAgICAgICAgICByb3dzOiBkYXRhLmdldERhdGEoKS5maWx0ZXIoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtlZXAgPSByZXNvbHZlQ29uZGl0aW9uKGNvbmQsIHJvdywgaSwgY29sTnVtYmVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2VlcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZy53YXJuKGVycik7XG4gICAgICAgIGxvZy53YXJuKGVyci5zdGFjayk7XG4gICAgfVxufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lSR0YwWVVacGJIUmxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlJHRjBZVVpwYkhSbGNuTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVFeVNFRXNhVU5CUVdkRU8wRkJRMmhFTEcxRFFVRm5SRHRCUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEZsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRCUVRSQ2FrWXNVMEZCVXl4M1FrRkJkMElzUTBGQlF5eEpRVUZYTEVWQlFVVXNSMEZCVHl4RlFVRkZMRWRCUVZjc1JVRkJSU3hUUVVFclFqdEpRVU5vUnl4TlFVRk5MRWRCUVVjc1IwRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETlVJc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVOc1JDeE5RVUZOTEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBVc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdVVUZEV2l4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRGhEUVVFNFF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNeFJpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN1UwRkJUU3hKUVVGSkxHRkJRV0VzUlVGQlJUdFJRVVYwUWl4UFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkROMEk3VTBGQlRTeEpRVUZKTEZWQlFWVXNSVUZCUlR0UlFVVnVRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRjRVU3VTBGQlRUdFJRVU5JTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETjBJN1FVRkRUQ3hEUVVGRE8wRkJVMFFzVTBGQlV5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGdFFpeEZRVUZGTEVkQlFWY3NSVUZCUlN4RFFVRlJMRVZCUVVVc1UwRkJLMElzUlVGQlJTeEhRVUZaTzBsQlF5OUhMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU55UWl4SlFVRkpMRk5CUVZNc1IwRkJSU3hKUVVGSkxFTkJRVU03U1VGRmNFSXNTVUZCU1N4VFFVRlRMRXRCUVVjc1UwRkJVeXhGUVVGRk8xRkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZCUlR0VFFVZDBReXhKUVVGSkxFOUJRVThzVTBGQlV5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVRkZMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZCUlR0VFFVZG9SU3hKUVVGSkxFOUJRVThzVTBGQlV5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVVndReXhOUVVGTkxFVkJRVVVzUjBGQmJVSXNVMEZCVXl4RFFVRkRPMUZCUjNKRExFbEJRVWtzUlVGQlJTeERRVUZETEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRla0lzU1VGQlNTeEhRVUZITEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVGRkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTTdZVUZCUlR0WlFVTjJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETzJGQlFVVTdXVUZGZEVNc1QwRkJUeXhIUVVGSExFTkJRVUVzUTBGQlF6dG5Ra0ZEVUN4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlpTeEZRVUZGTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNM1JTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUmp0aFFVVkpPMWxCUTBRc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVRkZMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03WVVGQlJUdFpRVU4wUXl4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxGTkJRVk1zUlVGQlJUdG5Ra0ZETVVJc1NVRkJTU3haUVVGWkxFZEJRVWNzUjBGQlJ5eERRVUZETzJkQ1FVTjJRaXhOUVVGTkxFOUJRVThzUjBGQmIwSXNVMEZCVXl4RFFVRkRPMmRDUVVjelF5eFJRVUZSTEVsQlFVa3NSVUZCUlR0dlFrRkRWaXhMUVVGTExFbEJRVWs3ZDBKQlFVY3NXVUZCV1N4SFFVRkhMR2RDUVVGblFpeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN2QwSkJRVU1zVFVGQlRUdHZRa0ZEZWtZc1MwRkJTeXhMUVVGTE8zZENRVUZGTEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPM2RDUVVGRExFMUJRVTA3YjBKQlEzcEdMRXRCUVVzc1MwRkJTenQzUWtGQlJTeFpRVUZaTEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdkMEpCUVVNc1RVRkJUVHR2UWtGRGNFWXNUMEZCVHl4RFFVRkRMRU5CUVVrc1dVRkJXU3hIUVVGSExIZENRVUYzUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8ybENRVU01Ump0blFrRkRSQ3hKUVVGSkxGbEJRVmtzUlVGQlJUdHZRa0ZCUlN4UlFVRlJMRWRCUVVrc1NVRkJTU3hEUVVGRE8yOUNRVUZGTEVsQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVN2QwSkJRVVVzVFVGQlRUdHhRa0ZCUlR0cFFrRkJRenR4UWtGRGVrTTdiMEpCUVVVc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dHZRa0ZCUXl4SlFVRkhMRWRCUVVjc1JVRkJSenQzUWtGQlJTeE5RVUZOTzNGQ1FVRkZPMmxDUVVGRE8yRkJRemxFTzFOQlEwbzdTMEZEU2p0VFFVRk5PMUZCUTBnc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5d3lRa0ZCTWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRkRVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN1NVRkRSQ3hQUVVGUExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU03UVVGRGNrTXNRMEZCUXp0QlFWTkVMRk5CUVdkQ0xFMUJRVTBzUTBGQlF5eEpRVUZUTEVWQlFVVXNTVUZCWXp0SlFVTTFReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVUZETEVsQlFWY3NSVUZCVXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXZSQ3hKUVVGSk8xRkJRMEVzVDBGQlR5eEpRVUZKTEZkQlFVa3NRMEZCUXp0WlFVTmFMRWxCUVVrc1JVRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEzaENMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJWeXhGUVVGRkxFTkJRVkVzUlVGQlJTeEZRVUZGTzJkQ1FVTnFSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRGRrUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1dVRkRhRUlzUTBGQlF5eERRVUZETzFOQlEwd3NRMEZCUXl4RFFVRkRPMHRCUTA0N1NVRkJReXhQUVVGTkxFZEJRVWNzUlVGQlJUdFJRVU5VTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU4yUWp0QlFVTk1MRU5CUVVNN1FVRm1SQ3gzUWtGbFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEYXRhXzEgPSByZXF1aXJlKFwiLi9EYXRhXCIpO1xuZXhwb3J0cy5EYXRhID0gRGF0YV8xLkRhdGE7XG5leHBvcnRzLlR5cGVzID0gRGF0YV8xLlR5cGVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTd3JRa0ZaT0VJN1FVRk9ja0lzYzBKQlFVRXNTVUZCU1N4RFFVRkJPMEZCUzBvc2RVSkJRVUVzUzBGQlN5eERRVUZCSW4wPSJdLCJzb3VyY2VSb290IjoiIn0=