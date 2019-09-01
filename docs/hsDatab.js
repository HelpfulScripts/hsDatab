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
                if (msg.length !== undefined) {
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
const log = hsutil_1.log('hsData');
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
exports.Data = Data;
Data.type = {
    number: 'number',
    name: 'name',
    date: 'date',
    currency: 'currency',
    percent: 'percent',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsK0NBQWtEO0FBQ2xELG1DQUEyQztBQUFDLE1BQU0sR0FBRyxHQUFHLFlBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQTZEdkUsTUFBYSxJQUFJO0lBa0JiLFlBQVksT0FBMEI7UUE4VTlCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBOVU1QixJQUFJLE9BQU8sRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FBRTtJQUM5QyxDQUFDO0lBS00sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBTU0sVUFBVSxDQUFDLE9BQXlCO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksT0FBTyxZQUFZLEtBQUssRUFBRTtnQkFDMUIsTUFBTSxLQUFLLEdBQWEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM3QjtpQkFBTTtnQkFDSCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2lCQUFFO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0o7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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGF0YUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUEySEEsaUNBR2dCO0FBMkJoQixTQUFTLHdCQUF3QixDQUFDLElBQVcsRUFBRSxHQUFPLEVBQUUsR0FBVyxFQUFFLFNBQStCO0lBQ2hHLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLElBQUksOENBQThDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDaEI7U0FBTSxJQUFJLGFBQWEsRUFBRTtRQUV0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLFVBQVUsRUFBRTtRQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDcEU7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDN0I7QUFDTCxDQUFDO0FB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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFZOEI7QUFOckIsc0JBQUEsSUFBSSxDQUFBIn0=

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0RhdGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvQ2hlY2tzdW0uanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9EYXRlLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvTnVtYmVyLmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvVGltZWRQcm9taXNlcy5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovL2hzRGF0YWIvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvbG9nLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vRGF0YS5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4vYmluL0RhdGFGaWx0ZXJzLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEw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R0FBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxJQUFJO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYSxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1tZ0I7Ozs7Ozs7Ozs7OztBQ2xYOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLLDZDQUE2QyxLQUFLLEdBQUcsSUFBSTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG16STs7Ozs7Ozs7Ozs7O0FDdEc5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBLDJDQUEyQywrTCIsImZpbGUiOiJoc0RhdGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iaW4vaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNob3J0Q2hlY2tTdW0ocykge1xuICAgIHZhciBjaGsgPSAweDEyMzQ1Njc4O1xuICAgIHZhciBsZW4gPSBzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNoayArPSAocy5jaGFyQ29kZUF0KGkpICogKGkgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiAoY2hrICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuZXhwb3J0cy5zaG9ydENoZWNrU3VtID0gc2hvcnRDaGVja1N1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaGxZMnR6ZFcwdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZRMmhsWTJ0emRXMHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGUlF5eFRRVUZuUWl4aFFVRmhMRU5CUVVNc1EwRkJVVHRKUVVOdVF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkRja0lzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOdVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMUZCUXpGQ0xFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOMFF6dEpRVU5FTEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUXpGRExFTkJRVU03UVVGUVJDeHpRMEZQUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9udGhTdHIgPSBbXG4gICAgWydKYW4nLCAnSmFudWFyeSddLCBbJ0ZlYicsICdGZWJydWFyeSddLCBbJ01hcicsICdNYXJjaCddLCBbJ0FwcicsICdBcHJpbCddLCBbJ01heScsICdNYXknXSwgWydKdW4nLCAnSnVuZSddLFxuICAgIFsnSnVsJywgJ0p1bHknXSwgWydBdWcnLCAnQXVndXN0J10sIFsnU2VwJywgJ1NlcHRlbWJlciddLCBbJ09jdCcsICdPY3RvYmVyJ10sIFsnTm92JywgJ05vdmVtYmVyJ10sIFsnRGVjJywgJ0RlY2VtYmVyJ11cbl07XG5jb25zdCBkYXlTdHIgPSBbXG4gICAgWydTdW4nLCAnU3VuZGF5J10sIFsnTW9uJywgJ01vbmRheSddLCBbJ1R1ZScsICdUdWVzZGF5J10sIFsnV2VkJywgJ1dlZG5lc2RheSddLCBbJ1RodScsICdUaHVyc2RheSddLCBbJ0ZyaScsICdGcmlkYXknXSwgWydTYXQnLCAnU2F0dXJkYXknXVxuXTtcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGRpZ2l0cykge1xuICAgIHZhciByID0gJycgKyBudW1iZXI7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuZnVuY3Rpb24gZGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm9ybWF0U3RyaW5nICE9PSAnc3RyaW5nJyB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpID9cbiAgICAgICAgJ2ludmFsaWQnIDpcbiAgICAgICAgZm9ybWF0U3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZWVkvZywgJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZL2csICcnICsgKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRERERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJURERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREL2csIGZvcm1hdE51bWJlcihkYXRlLmdldERhdGUoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUQvZywgJycgKyBkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laGgvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWgvZywgJycgKyBkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW1tL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW0vZywgJycgKyBkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lc3MvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lampqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAsIDEpKTtcbn1cbmV4cG9ydHMuZGF0ZSA9IGRhdGU7XG5leHBvcnRzLm1zID0ge1xuICAgIGZyb21NaW51dGVzOiAobWluKSA9PiAxMDAwICogNjAgKiBtaW4sXG4gICAgZnJvbUhvdXJzOiAoaCkgPT4gMTAwMCAqIDYwICogNjAgKiBoLFxuICAgIGZyb21EYXlzOiAoZCkgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIGQsXG4gICAgZnJvbVdlZWtzOiAodykgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiB3LFxuICAgIHRvTWludXRlczogKG1zKSA9PiBtcyAvICgxMDAwICogNjApLFxuICAgIHRvSG91cnM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjApLFxuICAgIHRvRGF5czogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICB0b1dlZWtzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5RVlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlpVRXNUVUZCVFN4UlFVRlJMRWRCUVVjN1NVRkRZaXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNN1NVRkROVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRE8wTkJRVU1zUTBGQlF6dEJRVWMxU0N4TlFVRk5MRTFCUVUwc1IwRkJSenRKUVVOWUxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXp0RFFVRkRMRU5CUVVNN1FVRkhNMGtzVTBGQlV5eFpRVUZaTEVOQlFVTXNUVUZCWVN4RlFVRkZMRTFCUVdFN1NVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOc1FpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hGUVVGRk8xRkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJSVHRKUVVNeFF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTmlMRU5CUVVNN1FVRmpSQ3hUUVVGblFpeEpRVUZKTEVOQlFVTXNXVUZCYlVJc1JVRkJSU3hKUVVGSkxFZEJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdTVUZEY2tRc1QwRkJUeXhEUVVGRExFOUJRVThzV1VGQldTeExRVUZMTEZGQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxGTkJRVk1zUTBGQlFTeERRVUZETzFGQlExWXNXVUZCV1R0aFFVTlFMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRoUVVONFF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRVZCUVVVc1IwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNNVF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1JDeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1JDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVrc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM2hETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOcVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkpMRVZCUVVVc1IwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdZVUZEYmtNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWNzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRoUVVOdVF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCU1N4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzJGQlEzUkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4SFFVRkRMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU0xUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVNc1IwRkJSeXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZWtVc1EwRkJRenRCUVhSQ1JDeHZRa0Z6UWtNN1FVRkhXU3hSUVVGQkxFVkJRVVVzUjBGQlJ6dEpRVU5rTEZkQlFWY3NSVUZCU3l4RFFVRkRMRWRCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4SFFVRkhPMGxCUXpORExGTkJRVk1zUlVGQlR5eERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXp0SlFVTTFReXhSUVVGUkxFVkJRVkVzUTBGQlF5eERRVUZSTEVWQlFVa3NSVUZCUlN4RFFVRkRMRWxCUVVrc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRPMGxCUXk5RExGTkJRVk1zUlVGQlR5eERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRE8wbEJRMnBFTEZOQlFWTXNSVUZCVHl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNMVF5eFBRVUZQTEVWQlFWTXNRMEZCUXl4RlFVRlRMRVZCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETEVsQlFVa3NSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJReTlETEUxQlFVMHNSVUZCVlN4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlEyeEVMRTlCUVU4c1JVRkJVeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJRenREUVVOMlJDeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gcm91bmQobiwgZCA9IDApIHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMTAsIGQpO1xuICAgIGNvbnN0IHIgPSBNYXRoLnJvdW5kKG4gKiBmKSAvIGY7XG4gICAgcmV0dXJuICcnICsgcjtcbn1cbmV4cG9ydHMucm91bmQgPSByb3VuZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRuVnRZbVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwwNTFiV0psY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVmRETEZOQlFXZENMRXRCUVVzc1EwRkJReXhEUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZETEVOQlFVTTdTVUZQYUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRE8wbEJRelZDTEU5QlFVOHNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJRenRCUVVObUxFTkJRVU03UVVGV1JDeHpRa0ZWUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgc2V0VGltZW91dChyZWplY3QsIG1zKTsgfSk7XG59XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZShhcmdzKTsgfSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0cy5kZWxheSA9IGRlbGF5O1xuY2xhc3MgUGFjZSB7XG4gICAgY29uc3RydWN0b3IocGFjZSA9IDEwMCwgbWF4Q29uY3VycmVudCA9IC0xKSB7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IC0xO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCA9IDA7XG4gICAgICAgIHRoaXMud2FpdENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5iZWluZ0NhbGxlZCA9IDA7XG4gICAgICAgIHRoaXMucGFjZSA9IHBhY2UgKyA1O1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50O1xuICAgIH1cbiAgICBnZXRXYWl0Q291bnQoKSB7IHJldHVybiB0aGlzLndhaXRDb3VudDsgfVxuICAgIGdldENhbGxpbmdDb3VudCgpIHsgcmV0dXJuIHRoaXMuYmVpbmdDYWxsZWQ7IH1cbiAgICBhZGQoZm4pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMud2FpdFVudGlsIDwgYWRkVGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdFVudGlsID0gYWRkVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLndhaXRVbnRpbCAtIGFkZFRpbWU7XG4gICAgICAgICAgICB0aGlzLndhaXRVbnRpbCArPSB0aGlzLnBhY2UgKyA1O1xuICAgICAgICAgICAgdGhpcy53YWl0Q291bnQrKztcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5KGRpZmYpKCk7XG4gICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0TG9vcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4Q29uY3VycmVudCA8IDAgfHwgdGhpcy5iZWluZ0NhbGxlZCA8IHRoaXMubWF4Q29uY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0TG9vcCwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB3YWl0TG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLndhaXRDb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5iZWluZ0NhbGxlZCsrO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0geWllbGQgZm4oRGF0ZS5ub3coKSAtIGFkZFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5iZWluZ0NhbGxlZC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5QYWNlID0gUGFjZTtcbmZ1bmN0aW9uIHByb21pc2VDaGFpbih0YXNrcywgaW5pdGlhbFJlc3VsdCA9IFtdKSB7XG4gICAgcmV0dXJuIHRhc2tzLnJlZHVjZSgoY2hhaW4sIHRhc2spID0+IGNoYWluLnRoZW4oKF9yZXN1bHRzKSA9PiBQcm9taXNlLnJlc29sdmUodGFzayhfcmVzdWx0cykpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChyKTtcbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH0pKSwgUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxSZXN1bHQpKTtcbn1cbmV4cG9ydHMucHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVkdsdFpXUlFjbTl0YVhObGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlVYVcxbFpGQnliMjFwYzJWekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPMEZCVjBFc1UwRkJaMElzVDBGQlR5eERRVUZETEVWQlFWTTdTVUZETjBJc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UlN4RFFVRkRPMEZCUmtRc01FSkJSVU03UVVGMVFrUXNVMEZCWjBJc1MwRkJTeXhEUVVGRExFVkJRVk03U1VGRE0wSXNUMEZCVHl4RFFVRkpMRWxCUVU4c1JVRkJZU3hGUVVGRk8xRkJRemRDTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGelFpeEZRVUZGTEVWQlFVVTdXVUZETVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRk9SQ3h6UWtGTlF6dEJRV0ZFTEUxQlFXRXNTVUZCU1R0SlFWbGlMRmxCUVZrc1NVRkJTU3hIUVVGRExFZEJRVWNzUlVGQlJTeGhRVUZoTEVkQlFVTXNRMEZCUXl4RFFVRkRPMUZCV0RsQ0xHdENRVUZoTEVkQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZja0lzWTBGQlV5eEhRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhqUVVGVExFZEJRVk1zUTBGQlF5eERRVUZETzFGQlEzQkNMR2RDUVVGWExFZEJRVThzUTBGQlF5eERRVUZETzFGQlVYaENMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzV1VGQldTeExRVUZSTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VTXNaVUZCWlN4TFFVRkxMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZSZUVNc1IwRkJSeXhEUVVGRExFVkJRV2xET3p0WlFVTjJReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRNMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRTlCUVU4c1JVRkJSVHRuUWtGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJRenRoUVVGRk8xbEJRek5FTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVDBGQlR5eERRVUZETzFsQlEzUkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMWxCUTJwQ0xFMUJRVTBzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRjRUlzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRuUWtGRGVFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhGUVVGRk8yOUNRVU5zUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdDNRa0ZEYWtVc1QwRkJUeXhGUVVGRkxFTkJRVU03Y1VKQlEySTdlVUpCUVUwN2QwSkJRMGdzVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenR4UWtGRE5VSTdaMEpCUTB3c1EwRkJReXhEUVVGRE8yZENRVU5HTEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTJZc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFNDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkRha0lzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMWxCUTI1Q0xFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTjZReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdXVUZEYmtJc1QwRkJUeXhIUVVGSExFTkJRVU03VVVGRFppeERRVUZETzB0QlFVRTdRMEZEU2p0QlFXcEVSQ3h2UWtGcFJFTTdRVUZYUkN4VFFVRm5RaXhaUVVGWkxFTkJRVWtzUzBGQmNVTXNSVUZCUlN4blFrRkJhMElzUlVGQlJUdEpRVU4yUml4UFFVRlBMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZyUWl4RlFVRkZMRWxCUVN0Q0xFVkJRV2RDTEVWQlFVVXNRMEZGZEVZc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZITEVWQlFVVXNSVUZCUlR0UlFVVjBSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFOUJRVThzVVVGQlVTeERRVUZETzBsQlEzQkNMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRMGdzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkRha01zUTBGQlF6dEJRVU5PTEVOQlFVTTdRVUZXUkN4dlEwRlZReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVGltZWRQcm9taXNlc18xID0gcmVxdWlyZShcIi4vVGltZWRQcm9taXNlc1wiKTtcbmV4cG9ydHMudGltZW91dCA9IFRpbWVkUHJvbWlzZXNfMS50aW1lb3V0O1xuZXhwb3J0cy5kZWxheSA9IFRpbWVkUHJvbWlzZXNfMS5kZWxheTtcbnZhciBUaW1lZFByb21pc2VzXzIgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy5QYWNlID0gVGltZWRQcm9taXNlc18yLlBhY2U7XG52YXIgVGltZWRQcm9taXNlc18zID0gcmVxdWlyZShcIi4vVGltZWRQcm9taXNlc1wiKTtcbmV4cG9ydHMucHJvbWlzZUNoYWluID0gVGltZWRQcm9taXNlc18zLnByb21pc2VDaGFpbjtcbnZhciBDaGVja3N1bV8xID0gcmVxdWlyZShcIi4vQ2hlY2tzdW1cIik7XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBDaGVja3N1bV8xLnNob3J0Q2hlY2tTdW07XG52YXIgRGF0ZV8xID0gcmVxdWlyZShcIi4vRGF0ZVwiKTtcbmV4cG9ydHMuZGF0ZSA9IERhdGVfMS5kYXRlO1xuZXhwb3J0cy5tcyA9IERhdGVfMS5tcztcbnZhciBOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL051bWJlclwiKTtcbmV4cG9ydHMucm91bmQgPSBOdW1iZXJfMS5yb3VuZDtcbnZhciBsb2dfMSA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmV4cG9ydHMubG9nID0gbG9nXzEubG9nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHBSRUZCZFVRN1FVRkJPVU1zYTBOQlFVRXNUMEZCVHl4RFFVRkJPMEZCUVVVc1owTkJRVUVzUzBGQlN5eERRVUZCTzBGQlEzWkNMR2xFUVVGMVJEdEJRVUU1UXl3clFrRkJRU3hKUVVGSkxFTkJRVUU3UVVGRFlpeHBSRUZCZFVRN1FVRkJPVU1zZFVOQlFVRXNXVUZCV1N4RFFVRkJPMEZCUTNKQ0xIVkRRVUZyUkR0QlFVRjZReXh0UTBGQlFTeGhRVUZoTEVOQlFVRTdRVUZEZEVJc0swSkJRVGhETzBGQlFYSkRMSE5DUVVGQkxFbEJRVWtzUTBGQlFUdEJRVUZGTEc5Q1FVRkJMRVZCUVVVc1EwRkJRVHRCUVVOcVFpeHRRMEZCWjBRN1FVRkJka01zZVVKQlFVRXNTMEZCU3l4RFFVRkJPMEZCUTJRc05rSkJRVFpETzBGQlFYQkRMRzlDUVVGQkxFZEJRVWNzUTBGQlFTSjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRGF0ZV8xID0gcmVxdWlyZShcIi4vRGF0ZVwiKTtcbmNvbnN0IERFQlVHID0gU3ltYm9sKCdERUJVRycpO1xuY29uc3QgSU5GTyA9IFN5bWJvbCgnSU5GTycpO1xuY29uc3QgV0FSTiA9IFN5bWJvbCgnV0FSTicpO1xuY29uc3QgRVJST1IgPSBTeW1ib2woJ0VSUk9SJyk7XG5sZXQgZ0xvZ0ZpbGU7XG5jb25zdCBnTGV2ZWxzID0ge1xuICAgIFtERUJVR106IHsgaW1wb3J0YW5jZTogMCwgc3ltOiBERUJVRywgZGVzYzogJ0RFQlVHJyB9LFxuICAgIFtJTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IElORk8sIGRlc2M6ICdJTkZPJyB9LFxuICAgIFtXQVJOXTogeyBpbXBvcnRhbmNlOiAyLCBzeW06IFdBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtFUlJPUl06IHsgaW1wb3J0YW5jZTogMywgc3ltOiBFUlJPUiwgZGVzYzogJ0VSUk9SJyB9XG59O1xubGV0IGdHbG9iYWxMZXZlbCA9IGdMZXZlbHNbSU5GT107XG5jb25zdCBkZWZEYXRlRm9ybWF0ID0gJyVZWVlZJU1NJUREICVoaDolbW06JXNzLiVqamonO1xubGV0IGdEYXRlRm9ybWF0ID0gZGVmRGF0ZUZvcm1hdDtcbmxldCBnQ29sb3JzID0gZmFsc2U7XG5jb25zdCBjb2xvciA9IHtcbiAgICByZWQ6ICdcXHgxYlszMW0nLFxuICAgIHllbGxvdzogJ1xceDFiWzMzbScsXG4gICAgYmx1ZTogJ1xceDFiWzM2bScsXG4gICAgZ3JlZW46ICdcXHgxYlszMm0nLFxuICAgIGJvbGQ6ICdcXHgxYlsxbScsXG4gICAgY2xlYXI6ICdcXHgxYlswbSdcbn07XG5leHBvcnRzLmxvZyA9IGNyZWF0ZSgnJywgKGZpbGVuYW1lLCBtc2cpID0+IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpLCAocGF0aCkgPT4gUHJvbWlzZS5yZXNvbHZlKHBhdGguaW5kZXhPZignLycpID49IDAgPyBmYWxzZSA6IHRydWUpKTtcbmZ1bmN0aW9uIGNyZWF0ZShfcHJlZml4LCBsb2dUb0ZpbGUsIHBhdGhFeGlzdHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgICBsZXZlbDogdW5kZWZpbmVkLFxuICAgICAgICBwcmVmaXg6IF9wcmVmaXgsXG4gICAgICAgIGxvZ1RvRmlsZTogbG9nVG9GaWxlLFxuICAgICAgICBwYXRoRXhpc3RzOiBwYXRoRXhpc3RzXG4gICAgfTtcbiAgICBmdW5jdGlvbiBsZXZlbChuZXdMZXZlbFN5bSwgc2V0R2xvYmFsTGV2ZWwgPSBmYWxzZSkge1xuICAgICAgICBsZXQgbmV3TGV2ZWwgPSBnTGV2ZWxzW25ld0xldmVsU3ltXSB8fCBnR2xvYmFsTGV2ZWw7XG4gICAgICAgIGxldCBvbGRMZXZlbCA9IGNvbnRleHQubGV2ZWwgfHwgZ0dsb2JhbExldmVsO1xuICAgICAgICBpZiAobmV3TGV2ZWxTeW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3TGV2ZWwgPSBvbGRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdMZXZlbFN5bSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGV4dC5sZXZlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnTGV2ZWxzW25ld0xldmVsU3ltXSkge1xuICAgICAgICAgICAgaWYgKHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgICAgICAgICAgZ0dsb2JhbExldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxldmVsID0gbmV3TGV2ZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgbmV3ICR7c2V0R2xvYmFsTGV2ZWwgPyAnZ2xvYmFsJyA6IGNvbnRleHQucHJlZml4fSBsb2cgbGV2ZWwgJHtuZXdMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9ICh3YXMgJHtvbGRMZXZlbC5kZXNjLnRvVXBwZXJDYXNlKCl9KWA7XG4gICAgICAgICAgICBvdXQoKG5ld0xldmVsLnN5bSA9PT0gb2xkTGV2ZWwuc3ltKSA/IERFQlVHIDogSU5GTywgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG91dChFUlJPUiwgYHVua293biBsZXZlbCAke25ld0xldmVsU3ltLnRvU3RyaW5nKCl9OyBsb2cgbGV2ZWwgcmVtYWlucyAke29sZExldmVsLnN5bS50b1N0cmluZygpfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMZXZlbC5zeW07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlYnVnKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBvdXQoREVCVUcsIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5mbyhtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KElORk8sIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gd2Fybihtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KFdBUk4sIG1zZywgbG9nMkZpbGUpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXJyb3IobXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChFUlJPUiwgbXNnLCBsb2cyRmlsZSk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXQoZm10U3RyKSB7XG4gICAgICAgIGlmIChmbXRTdHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGdEYXRlRm9ybWF0ID0gZGVmRGF0ZUZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbXRTdHIpIHtcbiAgICAgICAgICAgIGdEYXRlRm9ybWF0ID0gZm10U3RyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnRGF0ZUZvcm1hdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJlZml4KHByZikge1xuICAgICAgICBpZiAocHJmKSB7XG4gICAgICAgICAgICBjb250ZXh0LnByZWZpeCA9IHByZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVmaXg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG91dChsdmwsIG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSB7IFtFUlJPUl06IGNvbG9yLnJlZCArIGNvbG9yLmJvbGQsIFtXQVJOXTogY29sb3IueWVsbG93ICsgY29sb3IuYm9sZCwgW0RFQlVHXTogY29sb3IuYmx1ZSwgW0lORk9dOiBjb2xvci5ncmVlbiB9O1xuICAgICAgICAgICAgbGV0IGRlc2MgPSBnTGV2ZWxzW2x2bF07XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJMZXZlbCA9IGNvbnRleHQubGV2ZWwgfHwgZ0dsb2JhbExldmVsO1xuICAgICAgICAgICAgaWYgKGRlc2MuaW1wb3J0YW5jZSA+PSBmaWx0ZXJMZXZlbC5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IERhdGVfMS5kYXRlKGdEYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9ICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykgPyBtc2cgOiBpbnNwZWN0KG1zZywgMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9nTGluZSA9IGAke2RhdGVTdHJ9ICR7Y29udGV4dC5wcmVmaXh9ICR7ZGVzYy5kZXNjfSAke2xpbmV9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckxpbmUgPSBgJHtjb2xvcnNbbHZsXSB8fCAnJ30gJHtkYXRlU3RyfSAke2NvbnRleHQucHJlZml4fSAke2Rlc2MuZGVzY30gJHtjb2xvci5jbGVhcn0gJHtsaW5lfWA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ0NvbG9ycyA/IGNvbG9yTGluZSA6IGxvZ0xpbmUpO1xuICAgICAgICAgICAgICAgIGlmIChtc2cgJiYgbXNnLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZy5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnTG9nRmlsZSAmJiBsb2cyRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY29udGV4dC5sb2dUb0ZpbGUoRGF0ZV8xLmRhdGUoZ0xvZ0ZpbGUpLCBsb2dMaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbG9nRmlsZShmaWxlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBpbmZvKFwiZGlzYWJsaW5nIGxvZ2ZpbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZV8xLmRhdGUoZ0xvZ0ZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZS5pbmRleE9mKCcvJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjb250ZXh0LnBhdGhFeGlzdHMoZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGV4aXN0cykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgd2FybihgcGF0aCAnJHtmaWxlfScgZG9lc24ndCBleGlzdHM7IGxvZ2ZpbGUgZGlzYWJsZWRgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBnTG9nRmlsZSA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBpbmZvKFwibm93IGxvZ2dpbmcgdG8gZmlsZSBcIiArIERhdGVfMS5kYXRlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBlcnJvcihgY2hlY2tpbmcgcGF0aCAke2ZpbGV9OyBsb2dmaWxlIGRpc2FibGVkYCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBmaWxlID0gJ2xvZy0lWVlZWS0lTU0tJURELnR4dCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdMb2dGaWxlID0gZmlsZTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBpbmZvKGdMb2dGaWxlID8gYG5vdyBsb2dnaW5nIHRvIGZpbGUgJHtEYXRlXzEuZGF0ZShnTG9nRmlsZSl9YCA6ICdsb2dmaWxlIGRpc2JhbGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb25maWcoY2ZnKSB7XG4gICAgICAgIGlmIChjZmcuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdDb2xvcnMgPSBjZmcuY29sb3JzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvcm1hdChjZmcuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsKGNmZy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaW5zcGVjdChtc2csIGRlcHRoID0gMywgaW5kZW50ID0gJyAgICcsIGNvbG9ycykge1xuICAgICAgICBmdW5jdGlvbiBfaW5zcGVjdChtc2csIGRlcHRoLCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobXNnLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSA/ICd7Li4ufScgOiAnWy4uLl0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgWyR7bXNnLm1hcCgoZSkgPT4gKGUgPT09IHVuZGVmaW5lZCkgPyAnJyA6IF9pbnNwZWN0KGUsIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGNvbG9ycyA/IGA8Yj48c3BhbiBzdHlsZT0nY29sb3I6JHtjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXX07Jz5gIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gYCR7Y30ke2N1cnJJbmRlbnR9JHtpbmRlbnR9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0Zml4ID0gY29sb3JzID8gJzwvc3Bhbj48L2I+JyA6ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiAne1xcbicgKyBPYmplY3Qua2V5cyhtc2cpLm1hcChrID0+IGAke3ByZWZpeH0ke2t9JHtwb3N0Zml4fTogJHtfaW5zcGVjdChtc2dba10sIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50ICsgaW5kZW50KX1gKS5qb2luKCcsXFxuJykgKyBgXFxuJHtjdXJySW5kZW50fX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1zZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvcnMpIHtcbiAgICAgICAgICAgIGluZGVudCA9IGluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCBkZXB0aCA9PT0gbnVsbCA/IDk5OSA6IGRlcHRoLCAwLCAnJyk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0xvZyA9IChwcmVmaXgsIGxvZ1RvRmlsZSA9IGNvbnRleHQubG9nVG9GaWxlLCBwYXRoRXhpc3RzID0gY29udGV4dC5wYXRoRXhpc3RzKSA9PiBjcmVhdGUocHJlZml4LCBsb2dUb0ZpbGUsIHBhdGhFeGlzdHMpO1xuICAgIG5ld0xvZy5ERUJVRyA9IERFQlVHO1xuICAgIG5ld0xvZy5JTkZPID0gSU5GTztcbiAgICBuZXdMb2cuV0FSTiA9IFdBUk47XG4gICAgbmV3TG9nLkVSUk9SID0gRVJST1I7XG4gICAgbmV3TG9nLmxldmVsID0gbGV2ZWw7XG4gICAgbmV3TG9nLmRlYnVnID0gZGVidWc7XG4gICAgbmV3TG9nLmluZm8gPSBpbmZvO1xuICAgIG5ld0xvZy53YXJuID0gd2FybjtcbiAgICBuZXdMb2cuZXJyb3IgPSBlcnJvcjtcbiAgICBuZXdMb2cuZm9ybWF0ID0gZm9ybWF0O1xuICAgIG5ld0xvZy5wcmVmaXggPSBwcmVmaXg7XG4gICAgbmV3TG9nLm91dCA9IG91dDtcbiAgICBuZXdMb2cubG9nRmlsZSA9IGxvZ0ZpbGU7XG4gICAgbmV3TG9nLmNvbmZpZyA9IGNvbmZpZztcbiAgICBuZXdMb2cuaW5zcGVjdCA9IGluc3BlY3Q7XG4gICAgcmV0dXJuIG5ld0xvZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJ4dlp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenRCUVN0RlFTeHBRMEZCYTBNN1FVRkhiRU1zVFVGQlRTeExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJSemxDTEUxQlFVMHNTVUZCU1N4SFFVRkxMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVWM1UWl4TlFVRk5MRWxCUVVrc1IwRkJTeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRVUZIT1VJc1RVRkJUU3hMUVVGTExFZEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUnk5Q0xFbEJRVWtzVVVGQlowSXNRMEZCUXp0QlFWTnlRaXhOUVVGTkxFOUJRVThzUjBGQlJ6dEpRVU5hTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVzc1JVRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlF6dEpRVU4wUkN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGSExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVTTdTVUZEY2tRc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlRTeEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJ5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkRPMGxCUTNKRUxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVc3NSVUZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRTlCUVU4c1JVRkJRenREUVVONlJDeERRVUZETzBGQlIwWXNTVUZCU1N4WlFVRlpMRWRCUVdFc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlJ6TkRMRTFCUVUwc1lVRkJZU3hIUVVGSExEaENRVUU0UWl4RFFVRkRPMEZCUTNKRUxFbEJRVWtzVjBGQlZ5eEhRVUZQTEdGQlFXRXNRMEZCUXp0QlFVZHdReXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZIY0VJc1RVRkJUU3hMUVVGTExFZEJRVWM3U1VGRFZpeEhRVUZITEVWQlFVc3NWVUZCVlR0SlFVTnNRaXhOUVVGTkxFVkJRVVVzVlVGQlZUdEpRVU5zUWl4SlFVRkpMRVZCUVVrc1ZVRkJWVHRKUVVOc1FpeExRVUZMTEVWQlFVY3NWVUZCVlR0SlFVTnNRaXhKUVVGSkxFVkJRVWtzVTBGQlV6dEpRVU5xUWl4TFFVRkxMRVZCUVVjc1UwRkJVenREUVVOd1FpeERRVUZETzBGQk5rbFhMRkZCUVVFc1IwRkJSeXhIUVVGWExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlEyaERMRU5CUVVNc1VVRkJaU3hGUVVGRkxFZEJRVlVzUlVGQmEwSXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlJUTkZMRU5CUVVNc1NVRkJWeXhGUVVGdFFpeEZRVUZGTEVOQlFVRXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkZMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkRka1lzUTBGQlF6dEJRVVZHTEZOQlFWTXNUVUZCVFN4RFFVRkRMRTlCUVdNc1JVRkJSU3hUUVVGcFFpeEZRVUZGTEZWQlFXbENPMGxCUTJoRkxFMUJRVTBzVDBGQlR5eEhRVUZITzFGQlExb3NTMEZCU3l4RlFVRnJRaXhUUVVGVE8xRkJRMmhETEUxQlFVMHNSVUZCVFN4UFFVRlBPMUZCUTI1Q0xGTkJRVk1zUlVGQldTeFRRVUZUTzFGQlF6bENMRlZCUVZVc1JVRkJWU3hWUVVGVk8wdEJRMnBETEVOQlFVTTdTVUZGUml4VFFVRlRMRXRCUVVzc1EwRkJReXhYUVVGdFFpeEZRVUZGTEdOQlFXTXNSMEZCUXl4TFFVRkxPMUZCUTNCRUxFbEJRVWtzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3haUVVGWkxFTkJRVU03VVVGRGNFUXNTVUZCU1N4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzU1VGQlNTeFpRVUZaTEVOQlFVTTdVVUZETjBNc1NVRkJTU3hYUVVGWExFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlF6TkNMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03VTBGRGRrSTdZVUZCVFN4SlFVRkpMRmRCUVZjc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRE4wSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRE4wSTdZVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU0zUWl4SlFVRkpMR05CUVdNc1JVRkJSVHRuUWtGQlJTeFpRVUZaTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN2FVSkJRelZDTzJkQ1FVRkZMRTlCUVU4c1EwRkJReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdXVUZEYWtRc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eGpRVUZqTEVOQlFVRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNZMEZCWXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUTBGQlF6dFpRVU0zU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eExRVUZMTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRE1VUTdZVUZCVFR0WlFVTklMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzWjBKQlFXZENMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzZFVKQlFYVkNMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNSSE8xRkJRMFFzVDBGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlJDeFRRVUZsTEV0QlFVc3NRMEZCUXl4SFFVRlBMRVZCUVVVc1VVRkJVU3hIUVVGRExFbEJRVWs3T0VSQlFXOUNMRTlCUVU4c1RVRkJUU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGQlFUdEpRVU40Unl4VFFVRmxMRWxCUVVrc1EwRkJReXhIUVVGUExFVkJRVVVzVVVGQlVTeEhRVUZETEVsQlFVazdPRVJCUVc5Q0xFOUJRVThzVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZCUVR0SlFVTjBSeXhUUVVGbExFbEJRVWtzUTBGQlF5eEhRVUZQTEVWQlFVVXNVVUZCVVN4SFFVRkRMRWxCUVVrN09FUkJRVzlDTEU5QlFVOHNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkJRVHRKUVVOMFJ5eFRRVUZsTEV0QlFVc3NRMEZCUXl4SFFVRlBMRVZCUVVVc1VVRkJVU3hIUVVGRExFbEJRVWs3T0VSQlFXOUNMRTlCUVU4c1RVRkJUU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGQlFUdEpRVVY0Unl4VFFVRlRMRTFCUVUwc1EwRkJReXhOUVVGak8xRkJRekZDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVGRkxGZEJRVmNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVMEZCUlR0aFFVTm9SQ3hKUVVGSkxFMUJRVTBzUlVGQlRUdFpRVUZGTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1UwRkJSVHRSUVVNNVF5eFBRVUZQTEZkQlFWY3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVFzVTBGQlV5eE5RVUZOTEVOQlFVTXNSMEZCVnp0UlFVTjJRaXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRE8xTkJRVVU3VVVGRGJFTXNUMEZCVHl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRekZDTEVOQlFVTTdTVUZGUkN4VFFVRmxMRWRCUVVjc1EwRkJReXhIUVVGVkxFVkJRVVVzUjBGQlR5eEZRVUZGTEZGQlFWRXNSMEZCUXl4SlFVRkpPenRaUVVOcVJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NSMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFpRVU0xU0N4SlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZUVJc1RVRkJUU3hYUVVGWExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NTVUZCU1N4WlFVRlpMRU5CUVVNN1dVRkRiRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRmRCUVZjc1EwRkJReXhWUVVGVkxFVkJRVVU3WjBKQlF6TkRMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRiRU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNMVJDeE5RVUZOTEU5QlFVOHNSMEZCZDBJc1IwRkJSeXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTjZSaXhOUVVGTkxGTkJRVk1zUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJSU3hGUVVGRkxFbEJRVWtzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVU40Unl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZETVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlR0dlFrRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRwUWtGQlJUdG5Ra0ZEYWtRc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEZRVUZGTzI5Q1FVTjBRaXhQUVVGUExFMUJRVTBzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4WFFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdhVUpCUXpORU8yRkJRMG83V1VGRFJDeFBRVUZQTEZOQlFWTXNRMEZCUXp0UlFVTnlRaXhEUVVGRE8wdEJRVUU3U1VGRlJDeFRRVUZsTEU5QlFVOHNRMEZCUXl4SlFVRlpPenRaUVVNdlFpeEpRVUZKTEVsQlFVa3NTMEZCU3l4SlFVRkpMRVZCUVVVN1owSkJRMllzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXp0blFrRkRja0lzVDBGQlR5eE5RVUZOTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzJGQlF6RkRPMmxDUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0blFrRkRNMElzVDBGQlR5eFhRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1lVRkRla0k3YVVKQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZGTEVOQlFVTXNSVUZCUlR0blFrRkROMElzVDBGQlR5eE5RVUZOTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRE8zRkNRVU5vUXl4SlFVRkpMRU5CUVVNc1EwRkJUeXhOUVVGakxFVkJRVVVzUlVGQlJUdHZRa0ZETTBJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdDNRa0ZEVkN4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRE8zZENRVU55UWl4UFFVRlBMRTFCUVUwc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeHZRMEZCYjBNc1EwRkJReXhEUVVGRE8zRkNRVU40UlR0dlFrRkRSQ3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzI5Q1FVTm9RaXhQUVVGUExFMUJRVTBzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhIUVVGSExGZEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNelJDeERRVUZETEVOQlFVRXNRMEZCUXp0eFFrRkRSQ3hMUVVGTExFTkJRVU1zUjBGQlV5eEZRVUZGTzI5Q1FVTmtMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU03YjBKQlEzSkNMRTlCUVU4c1RVRkJUU3hMUVVGTExFTkJRVU1zYVVKQlFXbENMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXp0blFrRkRiRVVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXp0aFFVTldPMmxDUVVGTkxFbEJRVWtzU1VGQlNTeExRVUZMTEVWQlFVVXNSVUZCUlR0blFrRkRjRUlzU1VGQlNTeEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8yRkJRMnhETzJsQ1FVRk5PMkZCUTA0N1dVRkRSQ3hSUVVGUkxFZEJRVU1zU1VGQlNTeERRVUZETzFsQlEyUXNUMEZCVHl4TlFVRk5MRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF5eERRVUZETEhWQ1FVRjFRaXhYUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVTTVSaXhEUVVGRE8wdEJRVUU3U1VGRlJDeFRRVUZUTEUxQlFVMHNRMEZCUXl4SFFVRnhSRHRSUVVOcVJTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRXRCUVVjc1UwRkJVeXhGUVVGRk8xbEJRVVVzVDBGQlR5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkJSVHRSUVVOeVJDeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRXRCUVVjc1UwRkJVeXhGUVVGRk8xbEJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVGRk8xRkJRMjVFTEVsQlFVa3NSMEZCUnl4RFFVRkRMRXRCUVVzc1MwRkJSeXhUUVVGVExFVkJRVWM3V1VGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRGNrUXNRMEZCUXp0SlFVVkVMRk5CUVZNc1QwRkJUeXhEUVVGRExFZEJRVThzUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1IwRkJReXhMUVVGTExFVkJRVVVzVFVGQlowSTdVVUZETjBRc1UwRkJVeXhSUVVGUkxFTkJRVU1zUjBGQlR5eEZRVUZGTEV0QlFWa3NSVUZCUlN4TFFVRlpMRVZCUVVVc1ZVRkJhVUk3V1VGRGNFVXNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hGUVVGblFqdG5Ra0ZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRoUVVGRk8xbEJRMnhFTEVsQlFVa3NSMEZCUnl4TFFVRkxMRk5CUVZNc1JVRkJWenRuUWtGQlJTeFBRVUZQTEZkQlFWY3NRMEZCUXp0aFFVRkZPMWxCUTNaRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NWVUZCVlN4RlFVRkhPMmRDUVVGRkxFOUJRVThzVlVGQlZTeERRVUZETzJGQlFVVTdXVUZEZEVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVczdaMEpCUVVVc1QwRkJUeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlFVVTdXVUZEZEVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVczdaMEpCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN2FVSkJRVVU3WjBKQlEzQkZMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpGQ0xFOUJRVThzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhGUVVGRExFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUVN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8ybENRVU14Unp0blFrRkRSaXhOUVVGTkxFTkJRVU1zUjBGQlNTeE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkRMSGxDUVVGNVFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRM0JHTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXp0blFrRkROVU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0blFrRkRNME1zVDBGQlR5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NUMEZCVHl4TFFVTjRSQ3hSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRWRCUVVNc1RVRkJUU3hEUVVONFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eFZRVUZWTEVkQlFVY3NRMEZCUXp0aFFVTTFRenRaUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xFTkJRVU03VVVGRFJDeEpRVUZKTEUxQlFVMHNSVUZCUlR0WlFVRkZMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRUUVVGRk8xRkJRM2hFTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFdEJRVWNzU1VGQlNTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRlBMRU5CUVVNc1RVRkJZU3hGUVVGRkxGbEJRV3RDTEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1lVRkJhMElzVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1NVRkZka29zVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCVFN4TFFVRkxMRU5CUVVNN1NVRkRlRUlzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRka0lzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRka0lzVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCVFN4TFFVRkxMRU5CUVVNN1NVRkRlRUlzVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCVFN4TFFVRkxMRU5CUVVNN1NVRkRlRUlzVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCVFN4TFFVRkxMRU5CUVVNN1NVRkRlRUlzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRka0lzVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRka0lzVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCVFN4TFFVRkxMRU5CUVVNN1NVRkRlRUlzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCU3l4TlFVRk5MRU5CUVVNN1NVRkRla0lzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCU3l4TlFVRk5MRU5CUVVNN1NVRkRla0lzVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCVVN4SFFVRkhMRU5CUVVNN1NVRkRkRUlzVFVGQlRTeERRVUZETEU5QlFVOHNSMEZCU1N4UFFVRlBMRU5CUVVNN1NVRkRNVUlzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCU3l4TlFVRk5MRU5CUVVNN1NVRkRla0lzVFVGQlRTeERRVUZETEU5QlFVOHNSMEZCU1N4UFFVRlBMRU5CUVVNN1NVRkRNVUlzVDBGQlR5eE5RVUZOTEVOQlFVTTdRVUZEYkVJc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEYXRhRmlsdGVyc18xID0gcmVxdWlyZShcIi4vRGF0YUZpbHRlcnNcIik7XG5jb25zdCBoc3V0aWxfMSA9IHJlcXVpcmUoXCJoc3V0aWxcIik7XG5jb25zdCBsb2cgPSBoc3V0aWxfMS5sb2coJ2hzRGF0YScpO1xuY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5tZXRhID0gW107XG4gICAgICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmltcG9ydERhdGEoZGF0YXNldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgaW1wb3J0RGF0YShkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9ICdkYXRhJyArIChNYXRoLnJvdW5kKDEwMDAgKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICAgICAgICBpZiAoZGF0YXNldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBkYXRhc2V0WzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBkYXRhc2V0LnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShyb3dzLCBuYW1lcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGRhdGFzZXQubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGFzZXQucm93cywgZGF0YXNldC5jb2xOYW1lcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogdGhpcy5nZXREYXRhKCksXG4gICAgICAgICAgICBjb2xOYW1lczogdGhpcy5jb2xOYW1lcygpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIGdldENvbHVtbihjb2wpIHtcbiAgICAgICAgY29uc3QgY24gPSB0aGlzLmNvbE51bWJlcihjb2wpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm1hcCgocm93KSA9PiByb3dbY25dKTtcbiAgICB9XG4gICAgY29sQWRkKGNvbCkge1xuICAgICAgICBsZXQgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAobSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtID0gdGhpcy5tZXRhW2NvbF0gPSB7fTtcbiAgICAgICAgICAgIG0ubmFtZSA9IGNvbDtcbiAgICAgICAgICAgIG0uY29sdW1uID0gdGhpcy5tZXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMubWV0YS5wdXNoKG0pO1xuICAgICAgICAgICAgbS5jYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBtLmFjY2Vzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIGNvbEluaXRpYWxpemUoY29sLCBpbml0aWFsaXplcikge1xuICAgICAgICBjb25zdCBmbiA9IHR5cGVvZiBpbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgbGV0IGNuID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmICghY24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNuID0gdGhpcy5jb2xBZGQoY29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgY29sdW1uICR7Y29sfSBkb2VzIG5vdCBleGlzdCBpbiBEYXRhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhLm1hcCgocm93LCByb3dJbmRleCkgPT4gcm93W2NuLmNvbHVtbl0gPSBmbiA/IGluaXRpYWxpemVyKHJvd1tjbi5jb2x1bW5dLCByb3dJbmRleCwgcm93KSA6IGluaXRpYWxpemVyKTtcbiAgICAgICAgcmV0dXJuIGNuLmNvbHVtbjtcbiAgICB9XG4gICAgY29sTnVtYmVyKGNvbCkge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0uYWNjZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG0uY29sdW1uO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbE5hbWUoY29sKSB7XG4gICAgICAgIHZhciBtID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBtLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG0ubmFtZTtcbiAgICB9XG4gICAgY29sTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGEubWFwKChtKSA9PiBtLm5hbWUpO1xuICAgIH1cbiAgICBjb2xUeXBlKGNvbCkge1xuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5nZXRNZXRhKGNvbCk7XG4gICAgICAgIHJldHVybiBtZXRhID8gbWV0YS50eXBlc1swXS50eXBlIDogRGF0YS50eXBlLm5hbWU7XG4gICAgfVxuICAgIGZpbmREb21haW4oY29sLCBkb21haW4pIHtcbiAgICAgICAgaWYgKGRvbWFpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkb21haW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRvbWFpblswXSA9IDA7XG4gICAgICAgICAgICBkb21haW5bMV0gPSB0aGlzLmRhdGEubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbE51bWJlcihjb2wpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuY29sVHlwZShjb2wpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBEYXRhLnR5cGUubmFtZTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbURvbSA9IGRvbWFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub21Eb20uaW5kZXhPZignJyArIHJbY10pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbURvbS5wdXNoKCcnICsgcltjXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIERhdGEudHlwZS5kYXRlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSB0aGlzLnRvRGF0ZShyW2NdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblswXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCBkb21haW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodiA+IGRvbWFpblsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHBhcnNlRmxvYXQocltjXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblswXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCBkb21haW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodiA+IGRvbWFpblsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvbWFpbjtcbiAgICB9XG4gICAgY2FzdERhdGEoKSB7XG4gICAgICAgIHRoaXMubWV0YS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2wgPSBjLmNvbHVtbjtcbiAgICAgICAgICAgIGlmICghYy5jYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHJvdykgPT4gcm93W2NvbF0gPSB0aGlzLmNhc3RWYWwoYy50eXBlc1swXS50eXBlLCByb3dbY29sXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYy5jYXN0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcihjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIERhdGFGaWx0ZXJzXzEuZmlsdGVyKHRoaXMsIGNvbmRpdGlvbik7XG4gICAgfVxuICAgIHNvcnQoc29ydEZuLCBjb2wpIHtcbiAgICAgICAgbGV0IGZuID0gc29ydEZuO1xuICAgICAgICBpZiAoIWNvbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLnNvcnQoZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sID0gdGhpcy5jb2xOdW1iZXIoY29sKTtcbiAgICAgICAgICAgIGlmIChzb3J0Rm4gPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIGZuID0gKGEsIGIpID0+IChiID4gYSkgPyAxIDogKChiIDwgYSkgPyAtMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvcnRGbiA9PT0gJ2FzY2VuZGluZycpIHtcbiAgICAgICAgICAgICAgICBmbiA9IChhLCBiKSA9PiAoYiA8IGEpID8gMSA6ICgoYiA+IGEpID8gLTEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0KChyMSwgcjIpID0+IGZuKHIxW2NvbF0sIHIyW2NvbF0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbWFwKG1hcEZuLCBjb2wpIHtcbiAgICAgICAgY29uc3Qgbm9vcCA9ICh2YWwpID0+IHZhbDtcbiAgICAgICAgY29uc3QgY3VtdWxhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIHJldHVybiAodmFsLCBpKSA9PiB7IHN1bSArPSArdmFsOyByZXR1cm4gc3VtOyB9O1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiBnZXRGbigpIHtcbiAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgIHN3aXRjaCAobWFwRm4pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjdW11bGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGZuID0gY3VtdWxhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbm9vcCc6XG4gICAgICAgICAgICAgICAgICAgIGZuID0gbm9vcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZm4gPSBtYXBGbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm4gPSBnZXRGbigpO1xuICAgICAgICBjb25zdCBjID0gY29sID8gdGhpcy5jb2xOdW1iZXIoY29sKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBEYXRhKHtcbiAgICAgICAgICAgIGNvbE5hbWVzOiB0aGlzLmNvbE5hbWVzKCksXG4gICAgICAgICAgICByb3dzOiB0aGlzLmRhdGEubWFwKChyb3csIHJvd0luZGV4LCByb3dzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93W2NdID0gZm4ocm93W2NdLCBjLCByb3dJbmRleCwgcm93cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3dzW3Jvd0luZGV4XSA9IGZuKHJvdywgcm93SW5kZXgsIHJvd3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmdldE5hbWUoKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZ2V0TWV0YShjb2wpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1ldGFbY29sXSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1ldGFbY29sXS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFbY29sXTtcbiAgICB9XG4gICAgc2V0RGF0YShyb3dzLCBuYW1lcywgYXV0b1R5cGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWV0YSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEgPSByb3dzLnNsaWNlKCk7XG4gICAgICAgIGlmIChuYW1lcyAmJiBuYW1lcy5mb3JFYWNoKSB7XG4gICAgICAgICAgICBuYW1lcy5mb3JFYWNoKChjb2wpID0+IHRoaXMuY29sQWRkKGNvbCkpO1xuICAgICAgICAgICAgaWYgKGF1dG9UeXBlKSB7XG4gICAgICAgICAgICAgICAgbmFtZXMuZm9yRWFjaCgoY29sKSA9PiB0aGlzLmZpbmRUeXBlcyhjb2wpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhc3REYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihgaW52YWxpZCBuYW1lcyBzZXREYXRhOlxcbiR7bG9nLmluc3BlY3QobmFtZXMsIDUpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRUeXBlcyhjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhEYXRhLnR5cGUpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRzID0geyB0eXBlOiBEYXRhLnR5cGVbdF0sIGNvdW50OiAwIH07XG4gICAgICAgICAgICB0eXBlcy5wdXNoKHRzKTtcbiAgICAgICAgICAgIHR5cGVzW0RhdGEudHlwZVt0XV0gPSB0cztcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IHYgb2YgdGhpcy5hbGxSb3dzKGNvbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLmZpbmRUeXBlKHYpO1xuICAgICAgICAgICAgaWYgKHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0eXBlc1t0XS5jb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHR5cGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIGlmIChhLnR5cGUgPT09ICdjdXJyZW5jeScgJiYgYS5jb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYi50eXBlID09PSAnY3VycmVuY3knICYmIGIuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYi5jb3VudCAtIGEuY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBtLnR5cGVzID0gdHlwZXM7XG4gICAgICAgIHJldHVybiB0eXBlc1swXS50eXBlO1xuICAgIH1cbiAgICBmaW5kVHlwZSh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCAmJiB2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnR5cGUuZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnR5cGUubnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RyVmFsID0gJycgKyB2YWw7XG4gICAgICAgICAgICBpZiAoJycgKyBwYXJzZUZsb2F0KHN0clZhbCkgPT09IHN0clZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhLnR5cGUubnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0clZhbC5zdGFydHNXaXRoKCckJykgJiYgIWlzTmFOKHBhcnNlRmxvYXQoc3RyVmFsLnNsaWNlKDEpKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0YS50eXBlLmN1cnJlbmN5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0clZhbC5lbmRzV2l0aCgnJScpICYmICFpc05hTihwYXJzZUZsb2F0KHN0clZhbCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGEudHlwZS5wZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc05hTih0aGlzLnRvRGF0ZShzdHJWYWwpLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0YS50eXBlLmRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHN0clZhbC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bGxcIjogYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIiNyZWYhXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGlmICh2YWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGF0YS50eXBlLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAqYWxsUm93cyhjb2x1bW4pIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sTnVtYmVyKGNvbHVtbik7XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5kYXRhLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmRhdGFbcl1bY107XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9EYXRlKHZhbCwgbGltaXRZZWFyID0gMTk3MCkge1xuICAgICAgICBsZXQgZDtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGQgPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgICAgIGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IG5ldyBSZWdFeHAoYFxcXFxkXFxcXGQke2QuZ2V0RnVsbFllYXIoKSAlIDEwMH1gLCAnZycpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsLm1hdGNoKHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHlyID0gMTkwMCArIGQuZ2V0RnVsbFllYXIoKSAlIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgZC5zZXRGdWxsWWVhcigoeXIgPCBsaW1pdFllYXIpID8geXIgKyAxMDAgOiB5cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBjYXN0VmFsKHR5cGUsIHZhbCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdmFsO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRGF0YS50eXBlLmRhdGU6XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50b0RhdGUodmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0LmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERhdGEudHlwZS5wZXJjZW50OlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbC5lbmRzV2l0aCgnJScpID8gbnVtIC8gMTAwIDogbnVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0YS50eXBlLmN1cnJlbmN5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgPyB2YWwucmVwbGFjZSgvW15lRVxcK1xcLVxcLlxcZF0vZywgJycpIDogdmFsO1xuICAgICAgICAgICAgY2FzZSBEYXRhLnR5cGUubnVtYmVyOlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZUZsb2F0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogcmVzdWx0ID0gJycgKyB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnRzLkRhdGEgPSBEYXRhO1xuRGF0YS50eXBlID0ge1xuICAgIG51bWJlcjogJ251bWJlcicsXG4gICAgbmFtZTogJ25hbWUnLFxuICAgIGRhdGU6ICdkYXRlJyxcbiAgICBjdXJyZW5jeTogJ2N1cnJlbmN5JyxcbiAgICBwZXJjZW50OiAncGVyY2VudCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlFWVhSaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFc0swTkJRV3RFTzBGQlEyeEVMRzFEUVVFeVF6dEJRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRmxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVFpFZGtVc1RVRkJZU3hKUVVGSk8wbEJhMEppTEZsQlFWa3NUMEZCTUVJN1VVRTRWVGxDTEZOQlFVa3NSMEZCYVVJc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEZOQlFVa3NSMEZCYVVJc1JVRkJSU3hEUVVGRE8xRkJPVlUxUWl4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkJSVHRKUVVNNVF5eERRVUZETzBsQlMwMHNUMEZCVHp0UlFVTldMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCVFUwc1ZVRkJWU3hEUVVGRExFOUJRWGxDTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFZEJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOd1JDeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTlVMRWxCUVVrc1QwRkJUeXhaUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZETVVJc1RVRkJUU3hMUVVGTExFZEJRV0VzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVNM1FqdHBRa0ZCVFR0blFrRkRTQ3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdiMEpCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmxDUVVGRk8yZENRVU12UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRMmhFTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUzAwc1RVRkJUVHRSUVVOVUxFOUJRVTg3V1VGRFNDeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOd1FpeFJRVUZSTEVWQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRUUVVNelFpeERRVUZETzBsQlEwNHNRMEZCUXp0SlFVdE5MRTlCUVU4N1VVRkRWaXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVUxTkxGTkJRVk1zUTBGQlF5eEhRVUZ0UWp0UlFVTm9ReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJReTlDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZYTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyNUVMRU5CUVVNN1NVRlJUU3hOUVVGTkxFTkJRVU1zUjBGQlZUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTnFRaXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJaU3hGUVVGRkxFTkJRVU03V1VGRGNFTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJTeXhIUVVGSExFTkJRVU03V1VGRFppeERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFsQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4Q0xFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVOHNTMEZCU3l4RFFVRkRPMWxCUTI1Q0xFTkJRVU1zUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMU5CUTNSQ08xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCV1Uwc1lVRkJZU3hEUVVGRExFZEJRVzFDTEVWQlFVVXNWMEZCTUVJN1VVRkRhRVVzVFVGQlRTeEZRVUZGTEVkQlFVY3NUMEZCVHl4WFFVRlhMRXRCUVVzc1ZVRkJWU3hEUVVGRE8xRkJRemRETEVsQlFVa3NSVUZCUlN4SFFVRmpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5NTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGRk8yZENRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlFVVTdhVUpCUTJ4RU8yZENRVUZGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1ZVRkJWU3hIUVVGSExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1lVRkJSVHRUUVVOd1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlZ5eEZRVUZGTEZGQlFXVXNSVUZCUlN4RlFVRkZMRU5CUXpORExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlZTeFhRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGVkxGZEJRVmNzUTBGRGJrY3NRMEZCUXp0UlFVTkdMRTlCUVU4c1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCVVUwc1UwRkJVeXhEUVVGRExFZEJRVzFDTzFGQlEyaERMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRVVU3WVVGRGVFSTdXVUZEUkN4RFFVRkRMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU5zUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03VTBGRGJrSTdTVUZEVEN4RFFVRkRPMGxCVVUwc1QwRkJUeXhEUVVGRExFZEJRVzFDTzFGQlF6bENMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRVVU3VVVGRE4wSXNRMEZCUXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZOVFN4UlFVRlJPMUZCUTFnc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVZrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTI1RUxFTkJRVU03U1VGUlRTeFBRVUZQTEVOQlFVTXNSMEZCYlVJN1VVRkRPVUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4UFFVRlBMRWxCUVVrc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM0pFTEVOQlFVTTdTVUZUVFN4VlFVRlZMRU5CUVVNc1IwRkJiMElzUlVGQlJTeE5RVUZqTzFGQlEyeEVMRWxCUVVrc1RVRkJUU3hMUVVGSExGTkJRVk1zUlVGQlJUdFpRVUZGTEUxQlFVMHNSMEZCVnl4RlFVRkZMRU5CUVVNN1UwRkJSVHRSUVVOb1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRia0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOa0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTTdVMEZEYkVNN1lVRkJUVHRaUVVOSUxFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhSUVVGUExFbEJRVWtzUlVGQlJUdG5Ra0ZEVkN4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNUdHZRa0ZEWml4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZPM2RDUVVNMVFpeE5RVUZOTEUxQlFVMHNSMEZCWVN4TlFVRk5MRU5CUVVNN2QwSkJRMmhETEVsQlFVa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk96UkNRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVGRk8yOUNRVU01UkN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRFNDeE5RVUZOTzJkQ1FVTldMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTzI5Q1FVTm1MRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCVXl4RlFVRkZMRVZCUVVVN2QwSkJRelZDTEVsQlFVa3NRMEZCUXl4SFFVRlJMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJReTlDTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExGTkJRVk1zUlVGQlJUczBRa0ZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNsQ1FVRkZPM2RDUVVNM1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFVkJRVVU3TkVKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDVRa0ZCUlR0M1FrRkROME1zU1VGQlNTeERRVUZETEV0QlFVY3NVMEZCVXl4SlFVRkpMRU5CUVVNc1MwRkJSeXhKUVVGSkxFVkJRVVU3TkVKQlF6TkNMRWxCUVVrc1EwRkJReXhIUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0blEwRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPelpDUVVGRk8ybERRVU01UWl4SlFVRkpMRU5CUVVNc1IwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdaME5CUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzMlFrRkJSVHQ1UWtGRE0wTTdiMEpCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEwZ3NUVUZCVFR0blFrRkRWanR2UWtGRFNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTzNkQ1FVTTFRaXhKUVVGSkxFTkJRVU1zUjBGQlZTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdkMEpCUXpORExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkhMRk5CUVZNc1JVRkJSVHMwUWtGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zbENRVUZGTzNkQ1FVTTNReXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRVZCUVVVN05FSkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQ1UWtGQlJUdDNRa0ZETjBNc1NVRkJTU3hEUVVGRExFdEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCUnl4SlFVRkpMRVZCUVVVN05FSkJRek5DTEVsQlFVa3NRMEZCUXl4SFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdG5RMEZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3paQ1FVRkZPMmxEUVVNNVFpeEpRVUZKTEVOQlFVTXNSMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBOQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czJRa0ZCUlR0NVFrRkRNME03YjBKQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRWanRUUVVOS08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWTkxGRkJRVkU3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVmtzUlVGQlJTeEZRVUZGTzFsQlF5OUNMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVTdaMEpCUTFRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNVVk3V1VGRFJDeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOc1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRlRUU3hOUVVGTkxFTkJRVU1zVTBGQmJVSTdVVUZETjBJc1QwRkJUeXh2UWtGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlowTk5MRWxCUVVrc1EwRkJReXhOUVVGdlFpeEZRVUZGTEVkQlFXOUNPMUZCUTJ4RUxFbEJRVWtzUlVGQlJTeEhRVUZYTEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzFsQlEwNHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVJN1lVRkJUVHRaUVVOSUxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRekZDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRmxCUVZrc1JVRkJSVHRuUWtGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkxMRVZCUVVVc1EwRkJTeXhGUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZCUlR0WlFVTTVSU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFhRVUZYTEVWQlFVYzdaMEpCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlN5eEZRVUZGTEVOQlFVc3NSVUZCUnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRVVU3V1VGRE9VVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZSTEVWQlFVVXNSVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCTkVOTkxFZEJRVWNzUTBGQlF5eExRVUV5UWl4RlFVRkZMRWRCUVc5Q08xRkJRM2hFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJUeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZET1VJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlEyeENMRWxCUVVrc1IwRkJSeXhIUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEU5QlFVOHNRMEZCUXl4SFFVRlZMRVZCUVVVc1EwRkJVU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hEUVVGRExFTkJRVU03VVVGRFJpeFRRVUZUTEV0QlFVczdXVUZEVml4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVOUUxGRkJRVkVzUzBGQlN5eEZRVUZGTzJkQ1FVTllMRXRCUVVzc1ZVRkJWVHR2UWtGQlJTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RlFVRkZMRU5CUVVNN2IwSkJRVU1zVFVGQlRUdG5Ra0ZEZUVNc1MwRkJTeXhOUVVGTk8yOUNRVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNN2IwSkJRVU1zVFVGQlRUdG5Ra0ZEYkVNc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeEhRVUZ0UWl4TFFVRkxMRU5CUVVNN1lVRkRMME03V1VGRFJDeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTmtMRU5CUVVNN1VVRkZSQ3hKUVVGSkxFVkJRVVVzUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRSUVVNdlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJRenRaUVVOc1FpeFJRVUZSTEVWQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVONFFpeEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZUTEVWQlFVVXNVVUZCWlN4RlFVRkZMRWxCUVZrc1JVRkJSU3hGUVVGRk8yZENRVU0xUkN4SlFVRkpMRU5CUVVNc1JVRkJSVHR2UWtGRFNDeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVZjc1JVRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTnVSRHR4UWtGQlRUdHZRa0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRV01zUlVGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzaEVPMmRDUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETzFsQlEyWXNRMEZCUXl4RFFVRkRPMWxCUTBZc1NVRkJTU3hGUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdVMEZEZEVJc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVZOUExFOUJRVThzUTBGQlF5eEhRVUZ0UWp0UlFVVXZRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzFOQlFVVTdVVUZETVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJReTlDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCVTA4c1QwRkJUeXhEUVVGRExFbEJRV01zUlVGQlJTeExRVUZqTEVWQlFVVXNVVUZCVVN4SFFVRkRMRWxCUVVrN1VVRkRla1FzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRSUVVONlFpeEpRVUZKTEV0QlFVc3NTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRM2hDTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGVkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUkN4SlFVRkpMRkZCUVZFc1JVRkJSVHRuUWtGRFZpeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1IwRkJWU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyNUVMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dGhRVU51UWp0VFFVTktPMkZCUVUwN1dVRkRTQ3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETERKQ1FVRXlRaXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGFFVTdTVUZEVEN4RFFVRkRPMGxCVTA4c1UwRkJVeXhEUVVGRExFZEJRVzFDTzFGQlEycERMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzVFVGQlRTeExRVUZMTEVkQlFXZENMRVZCUVVVc1EwRkJRenRSUVVNNVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRlJMRVZCUVVVc1JVRkJSVHRaUVVONFF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU0xUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEyWXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkROMElzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROMElzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU16UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVU3WjBKQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJGQlFVVTdVMEZEZUVNN1VVRkRSQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWTXNRMEZCV1N4RlFVRkZMRU5CUVZrN1dVRkRNVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkhMRlZCUVZVc1NVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlR0blFrRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlFVVTdXVUZEYkVRc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeExRVUZITEZWQlFWVXNTVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJUdG5Ra0ZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRoUVVGRk8xbEJRMnBFTEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRhRUlzVDBGQlR5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZoVHl4UlFVRlJMRU5CUVVNc1IwRkJWenRSUVVONFFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRMnBDTEVsQlFVa3NSMEZCUnl4WlFVRlpMRWxCUVVrc1JVRkJSVHRuUWtGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yRkJRVVU3V1VGRGJrUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVVU3WjBKQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dGhRVUZGTzFsQlIzcEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTTdXVUZEZEVJc1NVRkJTU3hGUVVGRkxFZEJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRTFCUVUwc1JVRkJLMEk3WjBKQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dGhRVUZGTzFsQlF5OUdMRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF6dGhRVUZGTzFsQlEycEhMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCWVR0blFrRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMkZCUVVVN1dVRkRhRWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVhsQ08yZENRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGQlJUdFpRVkUxUml4UlFVRlJMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJUdG5Ra0ZETVVJc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF5eE5RVUZOTzJkQ1FVTnVRaXhMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMDdaMEpCUTNCQ0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJReXhEUVVGRExFVkJRVVU3YjBKQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dHBRa0ZCUlR0aFFVTjRSRHRUUVVOS08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenRKUVUxUExFTkJRVVVzVDBGQlR5eERRVUZETEUxQlFYTkNPMUZCUTNCRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEyNURMRTFCUVUwc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVONlFqdEpRVU5NTEVOQlFVTTdTVUZoVHl4TlFVRk5MRU5CUVVNc1IwRkJWeXhGUVVGRkxGTkJRVk1zUjBGQlF5eEpRVUZKTzFGQlEzUkRMRWxCUVVrc1EwRkJUU3hEUVVGRE8xRkJRMWdzU1VGQlNTeEhRVUZITEZsQlFWa3NTVUZCU1N4RlFVRkZPMWxCUVVVc1EwRkJReXhIUVVGVExFZEJRVWNzUTBGQlF6dFRRVUZGTzJGQlEzUkRPMWxCUTBRc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVU3WjBKQlEzSkNMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVNMVJDeEpRVUZKTEVOQlFWVXNSMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZEZWtJc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03YjBKQlEzaERMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8ybENRVU5xUkR0aFFVTktPMU5CUTBvN1VVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU5pTEVOQlFVTTdTVUZUVHl4UFFVRlBMRU5CUVVNc1NVRkJWeXhGUVVGRkxFZEJRVmM3VVVGRGNFTXNTVUZCU1N4TlFVRk5MRWRCUVZjc1IwRkJSeXhEUVVGRE8xRkJRM3BDTEZGQlFWRXNTVUZCU1N4RlFVRkZPMWxCUTFZc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVazdaMEpCUVVzc1NVRkJTU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZGTzI5Q1FVRkZMRTlCUVU4c1IwRkJSeXhEUVVGRE8ybENRVUZGTzJkQ1FVTm9SQ3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRE1VSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVTdiMEpCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dHBRa0ZCUlR0blFrRkRMME1zVFVGQlRUdFpRVU4wUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR6dG5Ra0ZCUlN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdHZRa0ZEYWtNc1RVRkJUU3hIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVNMVFpeE5RVUZOTEVkQlFWa3NSMEZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzJsQ1FVTjJSRHR4UWtGQlRUdHZRa0ZEU0N4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU5vUWp0blFrRkRSQ3hKUVVGSkxFdEJRVXNzUTBGQlV5eE5RVUZOTEVOQlFVTXNSVUZCUlR0dlFrRkJSU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzJsQ1FVRkZPMmRDUVVNM1F5eE5RVUZOTzFsQlEzUkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTzJkQ1FVTlFMRTFCUVUwc1IwRkJSeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkZOVVlzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwN1owSkJRVWNzU1VGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4UlFVRlJMRVZCUVVVN2IwSkJRVVVzVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRwUWtGQlJUdG5Ra0ZEZUVVc1NVRkJTU3hMUVVGTExFTkJRVk1zVFVGQlRTeERRVUZETEVWQlFVVTdiMEpCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dHBRa0ZCUlR0blFrRkROME1zVFVGQlRUdFpRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJVU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXp0VFFVTnVRenRSUVVORUxFOUJRVThzVFVGQlRTeERRVUZETzBsQlEycENMRU5CUVVNN08wRkJkbWRDVGl4dlFrRjNaMEpETzBGQmNHZENhVUlzVTBGQlNTeEhRVUZITzBsQlJXcENMRTFCUVUwc1JVRkJaMElzVVVGQlVUdEpRVVU1UWl4SlFVRkpMRVZCUVd0Q0xFMUJRVTA3U1VGRk5VSXNTVUZCU1N4RlFVRnJRaXhOUVVGTk8wbEJSVFZDTEZGQlFWRXNSVUZCWXl4VlFVRlZPMGxCUldoRExFOUJRVThzUlVGQlpTeFRRVUZUTzBOQlJXeERMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERhdGFfMSA9IHJlcXVpcmUoXCIuL0RhdGFcIik7XG5mdW5jdGlvbiByZXNvbHZlVGVybWluYWxDb25kaXRpb24obmFtZSwgdmFsLCByb3csIGNvbE51bWJlcikge1xuICAgIGNvbnN0IGNvbCA9IGNvbE51bWJlcihuYW1lKTtcbiAgICBjb25zdCB2YWxJc0Z1bmN0aW9uID0gKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xuICAgIGNvbnN0IHZhbElzQXJyYXkgPSAoKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSAmJiAodmFsLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSk7XG4gICAgaWYgKGlzTmFOKGNvbCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGNvbHVtbiBuYW1lICcke25hbWV9JyBjYW5ub3QgYmUgcmVzb2x2ZWQgaW4gdGVybWluYWwgY29uZGl0aW9uICR7bmFtZX09JHt2YWx9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsSXNGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsKHJvd1tjb2xdLCByb3cpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxJc0FycmF5KSB7XG4gICAgICAgIHJldHVybiAodmFsLmxlbmd0aCA9PT0gMCkgfHwgdmFsLnNvbWUoKHYpID0+IHJvd1tjb2xdID09PSB2KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAocm93W2NvbF0gPT09IHZhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZUNvbmRpdGlvbihjb25kaXRpb24sIHJvdywgciwgY29sTnVtYmVyLCBhbmQpIHtcbiAgICBsZXQgb3JSZXN1bHQgPSBmYWxzZTtcbiAgICBsZXQgYW5kUmVzdWx0ID0gdHJ1ZTtcbiAgICBpZiAoY29uZGl0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoY29uZGl0aW9uID09PSByKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbWMgPSBjb25kaXRpb247XG4gICAgICAgIGlmIChtYy5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGFuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFuZCA/XG4gICAgICAgICAgICAgICAgbWMuZXZlcnkoKGNkKSA9PiByZXNvbHZlQ29uZGl0aW9uKGNkLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSkgOlxuICAgICAgICAgICAgICAgIG1jLnNvbWUoKGNkKSA9PiByZXNvbHZlQ29uZGl0aW9uKGNkLCByb3csIHIsIGNvbE51bWJlciwgYW5kKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoYW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIGNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25NZXQgPSBhbmQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0Q29uZCA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gcmVzb2x2ZUNvbmRpdGlvbihzZXRDb25kLm9yLCByb3csIHIsIGNvbE51bWJlciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQgPSByZXNvbHZlQ29uZGl0aW9uKHNldENvbmQuYW5kLCByb3csIHIsIGNvbE51bWJlciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm90JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9ICFyZXNvbHZlQ29uZGl0aW9uKHNldENvbmQubm90LCByb3csIHIsIGNvbE51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogY29uZGl0aW9uTWV0ID0gcmVzb2x2ZVRlcm1pbmFsQ29uZGl0aW9uKG5hbWUsIGNvbmRpdGlvbltuYW1lXSwgcm93LCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uTWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmRSZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVucmVjb2duaXplZCBjb25kaXRpb246ICR7SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9uKX1gKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYW5kID8gYW5kUmVzdWx0IDogb3JSZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXIoZGF0YSwgY29uZCkge1xuICAgIGNvbnN0IGNvbE51bWJlciA9IChuYW1lKSA9PiBkYXRhLmNvbE51bWJlcihuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGFfMS5EYXRhKHtcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgY29sTmFtZXM6IGRhdGEuY29sTmFtZXMoKSxcbiAgICAgICAgICAgIHJvd3M6IGRhdGEuZ2V0RGF0YSgpLmZpbHRlcigocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2VlcCA9IHJlc29sdmVDb25kaXRpb24oY29uZCwgcm93LCBpLCBjb2xOdW1iZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBrZWVwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICB9XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBZVVpwYkhSbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UkdGMFlVWnBiSFJsY25NdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUV5U0VFc2FVTkJSMmRDTzBGQk1rSm9RaXhUUVVGVExIZENRVUYzUWl4RFFVRkRMRWxCUVZjc1JVRkJSU3hIUVVGUExFVkJRVVVzUjBGQlZ5eEZRVUZGTEZOQlFTdENPMGxCUTJoSExFMUJRVTBzUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNMVFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETzBsQlEyeEVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelJTeEpRVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVOYUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzT0VOQlFUaERMRWxCUVVrc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZEdMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtJc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGFFSTdVMEZCVFN4SlFVRkpMR0ZCUVdFc1JVRkJSVHRSUVVWMFFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETjBJN1UwRkJUU3hKUVVGSkxGVkJRVlVzUlVGQlJUdFJRVVZ1UWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEY0VVN1UwRkJUVHRSUVVOSUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRE4wSTdRVUZEVEN4RFFVRkRPMEZCVTBRc1UwRkJVeXhuUWtGQlowSXNRMEZCUXl4VFFVRnRRaXhGUVVGRkxFZEJRVmNzUlVGQlJTeERRVUZSTEVWQlFVVXNVMEZCSzBJc1JVRkJSU3hIUVVGWk8wbEJReTlITEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOeVFpeEpRVUZKTEZOQlFWTXNSMEZCUlN4SlFVRkpMRU5CUVVNN1NVRkZjRUlzU1VGQlNTeFRRVUZUTEV0QlFVY3NVMEZCVXl4RlFVRkZPMUZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGQlJUdFRRVWQwUXl4SlFVRkpMRTlCUVU4c1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVUZGTEU5QlFVOHNRMEZCUXl4VFFVRlRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UzBGQlJUdFRRVWRvUlN4SlFVRkpMRTlCUVU4c1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFJRVVZ3UXl4TlFVRk5MRVZCUVVVc1IwRkJiVUlzVTBGQlV5eERRVUZETzFGQlIzSkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hIUVVGSExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVRkZMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU03WVVGQlJUdFpRVU4yUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8yRkJRVVU3V1VGRmRFTXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJRenRuUWtGRFVDeEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTNSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JqdGhRVVZKTzFsQlEwUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVUZGTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkJSVHRaUVVOMFF5eExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRk5CUVZNc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRE8yZENRVU4yUWl4TlFVRk5MRTlCUVU4c1IwRkJiMElzVTBGQlV5eERRVUZETzJkQ1FVY3pReXhSUVVGUkxFbEJRVWtzUlVGQlJUdHZRa0ZEVml4TFFVRkxMRWxCUVVrN2QwSkJRVWNzV1VGQldTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdkMEpCUVVNc1RVRkJUVHR2UWtGRGVrWXNTMEZCU3l4TFFVRkxPM2RDUVVGRkxGbEJRVmtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzNkQ1FVRkRMRTFCUVUwN2IwSkJRM3BHTEV0QlFVc3NTMEZCU3p0M1FrRkJSU3haUVVGWkxFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03ZDBKQlFVTXNUVUZCVFR0dlFrRkRjRVlzVDBGQlR5eERRVUZETEVOQlFVa3NXVUZCV1N4SFFVRkhMSGRDUVVGM1FpeERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMmxDUVVNNVJqdG5Ra0ZEUkN4SlFVRkpMRmxCUVZrc1JVRkJSVHR2UWtGQlJTeFJRVUZSTEVkQlFVa3NTVUZCU1N4RFFVRkRPMjlDUVVGRkxFbEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVTdkMEpCUVVVc1RVRkJUVHR4UWtGQlJUdHBRa0ZCUXp0eFFrRkRla003YjBKQlFVVXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenR2UWtGQlF5eEpRVUZITEVkQlFVY3NSVUZCUnp0M1FrRkJSU3hOUVVGTk8zRkNRVUZGTzJsQ1FVRkRPMkZCUXpsRU8xTkJRMG83UzBGRFNqdFRRVUZOTzFGQlEwZ3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXd5UWtGQk1rSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVVc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGFFSTdTVUZEUkN4UFFVRlBMRWRCUVVjc1EwRkJRU3hEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRja01zUTBGQlF6dEJRVk5FTEZOQlFXZENMRTFCUVUwc1EwRkJReXhKUVVGVExFVkJRVVVzU1VGQll6dEpRVU0xUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVGRExFbEJRVmNzUlVGQlV5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU12UkN4SlFVRkpPMUZCUTBFc1QwRkJUeXhKUVVGSkxGZEJRVWtzUTBGQlF6dFpRVU5hTEVsQlFVa3NSVUZCVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRM2hDTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRM3BDTEVsQlFVa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCVnl4RlFVRkZMRU5CUVZFc1JVRkJSU3hGUVVGRk8yZENRVU5xUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRka1FzVDBGQlR5eEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJReXhEUVVGRE8xTkJRMHdzUTBGQlF5eERRVUZETzB0QlEwNDdTVUZCUXl4UFFVRk5MRWRCUVVjc1JVRkJSVHRSUVVOVUxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRha0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UzBGRE1VSTdRVUZEVEN4RFFVRkRPMEZCWmtRc2QwSkJaVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERhdGFfMSA9IHJlcXVpcmUoXCIuL0RhdGFcIik7XG5leHBvcnRzLkRhdGEgPSBEYXRhXzEuRGF0YTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRU3dyUWtGWk9FSTdRVUZPY2tJc2MwSkJRVUVzU1VGQlNTeERRVUZCSW4wPSJdLCJzb3VyY2VSb290IjoiIn0=