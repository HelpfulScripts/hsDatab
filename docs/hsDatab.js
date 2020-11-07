this.hsDatab =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js ***!
  \***********************************************************************************************************/
/*! namespace exports */
/*! export uniquefy [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniquefy": () => /* binding */ uniquefy
/* harmony export */ });
function uniquefy(array, key) {
    const unique = {};
    return key ? array.filter(t => unique[t['' + key]] ? false : (unique[t['' + key]] = true))
        : array.filter(t => unique['' + t] ? false : (unique['' + t] = true));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE1BQU0sVUFBVSxRQUFRLENBQUksS0FBUyxFQUFFLEdBQWtCO0lBQ3JELE1BQU0sTUFBTSxHQUE0QixFQUFFLENBQUM7SUFDM0MsT0FBTyxHQUFHLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js":
/*!**********************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js ***!
  \**********************************************************************************************************/
/*! namespace exports */
/*! export Auth [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth": () => /* binding */ Auth
/* harmony export */ });
class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBZ0IsSUFBSTtJQUl0QixZQUFZLFFBQWUsRUFBRSxRQUFlO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FHSiJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js":
/*!***************************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js ***!
  \***************************************************************************************************************/
/*! namespace exports */
/*! export AuthBasic [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBasic": () => /* binding */ AuthBasic
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('RequestBasic');

class AuthBasic extends _Auth__WEBPACK_IMPORTED_MODULE_1__.Auth {
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQW1CLE9BQU8sQ0FBQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBa0IsUUFBUSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxRQUF3QjtRQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLHlDQUF5QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js":
/*!****************************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js ***!
  \****************************************************************************************************************/
/*! namespace exports */
/*! export AuthDigest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthDigest": () => /* binding */ AuthDigest
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('RequestDigest');


class AuthDigest extends _Auth__WEBPACK_IMPORTED_MODULE_2__.Auth {
    constructor() {
        super(...arguments);
        this.nc = 0;
    }
    updateNC() {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }
    generateCNONCE(qop) {
        let cnonce;
        let nc;
        if (typeof qop === 'string') {
            let cnonceHash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
        let authParams = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
        authParams = omitNull(authParams);
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
        }
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => {
        if (data[k] !== null && data[k] !== undefined) {
            newObject[k] = data[k];
        }
    });
    return newObject;
}
function compileParams(params) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function putDoubleQuotes(entry) {
    return ['qop', 'nc'].indexOf(entry) < 0;
}
function parseDigestResponse(digestHeader) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/([^,]*)/g, (...rest) => {
        const part = rest[1];
        if (part) {
            const kv = part.split('=').map((v) => v.trim());
            params[kv[0]] = kv[1].replace(/\"/g, '');
        }
        return '';
    });
    return params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBbUIsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFZLFFBQVEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0ksT0FBRSxHQUFHLENBQUMsQ0FBQztJQXlFWCxDQUFDO0lBcEVHLFFBQVE7UUFDSixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFNRCxjQUFjLENBQUMsR0FBVTtRQUNyQixJQUFJLE1BQVUsQ0FBQztRQUNmLElBQUksRUFBUyxDQUFDO1FBRWQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEQsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUNwQyxDQUFDO0lBUUQsUUFBUSxDQUFDLE9BQWUsRUFBRSxJQUFXLEVBQUUsUUFBd0I7UUFDM0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQSx5Q0FBeUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFdkUsSUFBSSxTQUFTLEdBQU8sbUJBQW1CLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLElBQUksRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHbEIsSUFBSSxVQUFVLEdBQU87WUFDakIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDakIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHO1lBQ2xCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztZQUN0QixTQUFTLEVBQUUsS0FBSztZQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0IsQ0FBQztRQUVGLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEMsSUFBSSxNQUFNLEVBQUU7WUFDUixVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNuQixVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUM5QjtRQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLFFBQVEsQ0FBQyxJQUFRO0lBQ3RCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1FBQ25DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQU1ELFNBQVMsYUFBYSxDQUFDLE1BQVU7SUFDN0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7UUFDbEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtLQUNKO0lBQ0QsT0FBTyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBTUQsU0FBUyxlQUFlLENBQUMsS0FBWTtJQUNqQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsWUFBbUI7SUFDNUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBRWxCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxJQUFhLEVBQUUsRUFBRTtRQUNsRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLEVBQUU7WUFDVixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js":
/*!**************************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js ***!
  \**************************************************************************************************************/
/*! namespace exports */
/*! export shortCheckSum [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shortCheckSum": () => /* binding */ shortCheckSum
/* harmony export */ });
function shortCheckSum(s) {
    let chk = 0x12345678;
    for (let i = 0; i < s.length; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFRO0lBQ25DLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js":
/*!**********************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js ***!
  \**********************************************************************************************************/
/*! namespace exports */
/*! export date [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ms [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "date": () => /* binding */ date,
/* harmony export */   "ms": () => /* binding */ ms
/* harmony export */ });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    let r = '' + number;
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
const ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLE1BQU0sUUFBUSxHQUFHO0lBQ2IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQzVHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHNUgsTUFBTSxNQUFNLEdBQUc7SUFDWCxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7Q0FBQyxDQUFDO0FBRzNJLFNBQVMsWUFBWSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxNQUFNLENBQUM7SUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQUU7SUFDMUMsT0FB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SUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7SUFDL0MsU0FBUyxFQUFPLENBQUMsQ0FBUSxFQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUM7SUFDakQsU0FBUyxFQUFPLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDL0MsTUFBTSxFQUFVLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDbEQsT0FBTyxFQUFTLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0NBQ3ZELENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js":
/*!************************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js ***!
  \************************************************************************************************************/
/*! namespace exports */
/*! export Pace [provided] [no usage info] [missing usage info prevents renaming] */
/*! export delay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export timeout [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => /* binding */ timeout,
/* harmony export */   "delay": () => /* binding */ delay,
/* harmony export */   "Pace": () => /* binding */ Pace
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('Pacing');
function timeout(ms, ...rest) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); });
}
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
class Pace {
    constructor({ pace = 100, maxConcurrent = -1, collectionPeriod = 0 }) {
        this.maxConcurrent = -1;
        this.pace = 0;
        this.waitUntil = 0;
        this.waiting = 0;
        this.started = 0;
        this.queue = {};
        this.collectionPeriod = 0;
        this.pace = pace;
        this.maxConcurrent = maxConcurrent;
        this.collectionPeriod = collectionPeriod;
    }
    isAllowed() { return this.maxConcurrent < 0 || this.started < this.maxConcurrent; }
    setPace(ms) { this.pace = ms; }
    setMaxConcurrent(maxConcurrent) { this.maxConcurrent = maxConcurrent; }
    inQueue() { return this.waiting; }
    inProgress() { return this.started; }
    async add(fn, key) {
        const now = new Date().getTime();
        const callTime = now + Math.max(this.collectionPeriod, this.waitUntil);
        this.waitUntil += this.pace;
        let item;
        if (key && this.queue[key]) {
            item = this.queue[key];
            clearTimeout(item.timer);
            item.fn = fn;
            item.added = now;
        }
        else {
            key = key || `${now}-${Math.floor(Math.random() * 100000)}`;
            item = { fn: fn, added: now, pace: this, key: key };
            this.queue[key] = item;
            this.waiting++;
        }
        return this.resolveItem(item, callTime - now);
    }
    resolveItem(item, waitTime) {
        return new Promise((resolve, reject) => {
            const execute = async (_item) => {
                try {
                    const key = _item.key;
                    delete _item.pace.queue[key];
                    _item.pace.waiting--;
                    await belowConcurrentLimit(_item.pace);
                    _item.pace.started++;
                    const actualDelay = Date.now() - _item.added;
                    const ret = await _item.fn(actualDelay);
                    _item.pace.started--;
                    resolve(ret);
                }
                catch (e) {
                    _item.pace.started--;
                    reject(e);
                }
            };
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}
function belowConcurrentLimit(pace) {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed() ? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1BhY2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU8sT0FBTyxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFTNUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxFQUFTLEVBQUUsR0FBRyxJQUFVO0lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQWdDRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU8sRUFBYSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFtQkQsTUFBTSxPQUFPLElBQUk7SUFpQ2IsWUFBWSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixHQUFDLENBQUMsRUFBQztRQS9CcEQsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixTQUFJLEdBQWMsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFFcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBY2pDLHFC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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js ***!
  \*************************************************************************************************************/
/*! namespace exports */
/*! export Request [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Request": () => /* binding */ Request
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony import */ var _AuthDigest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthDigest */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js");
/* harmony import */ var _AuthBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthBasic */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js");
;
const log = new _log__WEBPACK_IMPORTED_MODULE_0__.Log('Request');



log.messageLength = 120;
class Request {
    constructor() {
        this.log = log;
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: null }) => {
            this.pace = (!pace || pace < 0) ? undefined : new _Pacing__WEBPACK_IMPORTED_MODULE_1__.Pace({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.clearPace = () => this.setPace();
        this.decode = undefined;
    }
    async get(url, { useCached = true, headers = {} } = {}) {
        const options = this.getOptions(url, 'GET');
        return this.decodedRequest(options, useCached, headers);
    }
    async put(url, postData, { headers = {} } = {}) {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, false, headers, postData);
    }
    async post(url, postData, { headers = {} } = {}) {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, false, headers, postData);
    }
    getURL(url) {
        return (typeof url === 'string') ? new URL(url, document.URL) : url;
    }
    getOptions(url, method) {
        url = this.getURL(url);
        const prefix = '';
        const options = {
            rejectUnauthorized: false,
            method: method,
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: prefix + url.pathname,
            path: prefix + url.pathname + (url.search || ''),
            headers: {},
            url: `${url.protocol}//${url.host}${prefix + url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    async decodedRequest(options, useCached, headers, postData) {
        const result = await this.requestOptions(options, useCached, postData);
        if (this.decode && result.response.txt && options.method === 'GET') {
            result.data = this.decode(result.data, options);
        }
        return result;
    }
    async requestOptions(options, useCached, postData) {
        let request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`);
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        }
        else {
            request = this.request(options, postData);
        }
        const response = await request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `);
        }
        return response;
    }
    async request(options, postData) {
        try {
            const response = await this.issueRequest(options, postData);
            let authenticate = response.response.headers['www-authenticate'];
            if (!authenticate) {
                return response;
            }
            else if (this.credentials) {
                authenticate = authenticate.trim();
                let auth;
                if (authenticate.indexOf('Digest') === 0) {
                    auth = new _AuthDigest__WEBPACK_IMPORTED_MODULE_2__.AuthDigest(this.credentials.user, this.credentials.password);
                }
                else if (authenticate.indexOf('Basic') === 0) {
                    auth = new _AuthBasic__WEBPACK_IMPORTED_MODULE_3__.AuthBasic(this.credentials.user, this.credentials.password);
                }
                else {
                    throw `unimplemented authentication request ${authenticate} for '${options.url}'`;
                }
                auth.testAuth(options, response.data, response.response);
                return this.request(options);
            }
            else {
                throw `authentication missing; call 'setCredentials' before calling 'get'`;
            }
        }
        catch (e) {
            throw `error requesting ${options.url}: ${e}`;
        }
    }
    async issueRequest(options, postData) {
        const request = this;
        return new Promise((resolve, reject) => {
            try {
                function confirmRequest(e) {
                    const headersText = xhr.getAllResponseHeaders();
                    const headers = { 'content-type': '' };
                    headersText.split('\r\n').map(h => {
                        const kv = h.split(':').map(p => p.trim());
                        if (kv[0].length) {
                            headers[kv[0]] = kv[1];
                        }
                    });
                    const contentType = this.responseType;
                    const txt = request.isTextualContent(contentType);
                    const data = this.response;
                    const response = {
                        data: data,
                        response: {
                            txt: txt,
                            headers: headers,
                            method: options.method,
                            status: this.status,
                            statusCode: this.status,
                            statusMessage: `${this.status} ${this.statusText}`,
                            url: this.responseURL,
                        }
                    };
                    resolve(response);
                }
                const xhr = new XMLHttpRequest();
                const txt = request.isTextualRequest(options.pathname);
                xhr.open(options.method, options.url, true);
                Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
                xhr.responseType = txt ? 'text' : 'arraybuffer';
                xhr.onload = confirmRequest;
                xhr.send(postData ? JSON.stringify(postData) : undefined);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    isTextualContent(contentType) {
        let txt = false;
        if (contentType === undefined) {
            contentType = 'text/html';
        }
        else {
            contentType = contentType.split(';')[0];
        }
        const subTypes = contentType.split('/');
        switch (subTypes[0]) {
            case '':
            case 'text':
                txt = true;
                break;
            case 'image':
            case 'audio':
            case 'font': break;
            case 'application':
                switch (subTypes[1]) {
                    case 'json':
                        txt = true;
                        break;
                    case 'pdf': break;
                    case 'vnd.openxmlformats-officedocument.presentationml.presentation': break;
                    case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet': break;
                    case 'vnd.ms-powerpoint': break;
                    case 'vnd.ms-excel': break;
                    case 'octet-stream': break;
                    case 'vnd.ms-excel.sheet.macroenabled.12': break;
                    default: this.log.info(`caching ${contentType} as binary`);
                }
                break;
            default: this.log.warn(`caching '${contentType}' as binary`);
        }
        return txt;
    }
    isTextualRequest(pathName) {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: undefined
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFHM0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUF3RHhCLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBT2MsUUFBRyxHQUFRLEdBQUcsQ0FBQztRQWdCbEIsbUJBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEYsQ0FBQyxDQUFBO1FBR00saUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBUW5CLFlBQU8sR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFDLEdBQUcsS0FBRSxFQUFDLElBQUksRUFBTSxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQzFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js ***!
  \***********************************************************************************************************/
/*! namespace exports */
/*! export Log [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js .Log */
/*! export Pace [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js .Pace */
/*! export Request [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js .Request */
/*! export date [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js .date */
/*! export delay [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js .delay */
/*! export ms [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js .ms */
/*! export shortCheckSum [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js .shortCheckSum */
/*! export timeout [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js .timeout */
/*! export uniquefy [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js .uniquefy */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pace": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.Pace,
/* harmony export */   "delay": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.delay,
/* harmony export */   "timeout": () => /* reexport safe */ _Pacing__WEBPACK_IMPORTED_MODULE_0__.timeout,
/* harmony export */   "Request": () => /* reexport safe */ _Request__WEBPACK_IMPORTED_MODULE_1__.Request,
/* harmony export */   "shortCheckSum": () => /* reexport safe */ _Checksum__WEBPACK_IMPORTED_MODULE_2__.shortCheckSum,
/* harmony export */   "date": () => /* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.date,
/* harmony export */   "ms": () => /* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_3__.ms,
/* harmony export */   "Log": () => /* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_4__.Log,
/* harmony export */   "uniquefy": () => /* reexport safe */ _Array__WEBPACK_IMPORTED_MODULE_5__.uniquefy
/* harmony export */ });
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js");
/* harmony import */ var _Checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js");






//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBaUIsVUFBVSxDQUFDO0FBQzVCLGNBQWlCLFdBQVcsQ0FBQztBQUM3QixjQUFpQixZQUFZLENBQUM7QUFDOUIsY0FBaUIsUUFBUSxDQUFDO0FBQzFCLGNBQWlCLE9BQU8sQ0FBQztBQUN6QixjQUFpQixTQUFTLENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js ***!
  \*********************************************************************************************************/
/*! namespace exports */
/*! export Log [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Log": () => /* binding */ Log
/* harmony export */ });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");
;
const COLOR = {
    clear: 'color:#000; background-color:inherit; font-weight:normal;',
    bold: 'font-weight:bold;',
    dim: '',
    underscore: '',
    blink: '',
    reverse: '',
    hidden: '',
    black: 'color:#000;',
    red: 'color:#f00;',
    green: 'color:#0f0;',
    yellow: 'color:#ff0;',
    blue: 'color:#00f;',
    magenta: 'color:#f0f;',
    cyan: 'color:#0ff;',
    white: 'color:#fff;',
    darkred: 'color:#800;',
    darkgreen: 'color:#080;',
    darkyellow: 'color:#880;',
    darkblue: 'color:#008;',
    darkmagenta: 'color:#808;',
    darkcyan: 'color:#088;',
    gray: 'color:#888;',
    bgBlack: 'background-color:#000;',
    bgRed: 'background-color:#f00;',
    bgGreen: 'background-color:#0f0;',
    bgYellow: 'background-color:#ff0;',
    bgBlue: 'background-color:#00f;',
    bgMagenta: 'background-color:#f0f;',
    bgCyan: 'background-color:#0ff;',
    bgWhite: 'background-color:#fff;'
};
class Log {
    constructor(prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
        this.maxLength = -1;
        this.colors = true;
        this.reportPrefix = prefix;
    }
    set messageLength(max) { this.maxLength = max; }
    get messageLength() { return this.maxLength; }
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
            (newLevel.sym === oldLevel.sym) ? this.debug(msg) : this.info(msg);
        }
        else {
            this.error(`unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }
    debug(msg) { return this.out(Log.DEBUG, msg, { color: ['gray'] }); }
    transient(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'], lf: '\r' }); }
    progress(msg) { return this.out(Log.INFO, msg, { color: ['darkblue'] }); }
    info(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'] }); }
    warn(msg) { return this.out(Log.WARN, msg, { color: ['darkyellow', 'bold'] }); }
    error(msg) {
        const color = ['darkred', 'bold'];
        if (msg.message) {
            this.out(Log.ERROR, msg.message, { color: color });
            this.out(Log.ERROR, msg.stack, { color: color });
            return msg.message;
        }
        else {
            return this.out(Log.ERROR, msg, { color: color });
        }
    }
    out(lvl, msg, options) {
        let desc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            let line;
            switch (typeof msg) {
                case 'function':
                    line = msg();
                    break;
                case 'string':
                    line = msg;
                    break;
                case 'object':
                default: line = this.inspect(msg);
            }
            const dateStr = (0,_Date__WEBPACK_IMPORTED_MODULE_0__.date)(Log.dateFormat);
            if (line.length > this.maxLength && this.maxLength > 0) {
                line = `${line.slice(0, this.maxLength / 2 - 2)}...${line.slice(-this.maxLength / 2 + 2)}`;
            }
            if (msg.stack) {
                line = `${line}\n${msg.stack}`;
            }
            const header = `${dateStr} ${this.reportPrefix} ${desc.desc}`;
            this.output(options.color, header, line);
            return line + (options.lf || '');
        }
        return undefined;
    }
    output(color, header, line) {
        console.log(`%c${header}%c ${line}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
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
        if (cfg.colors !== undefined) {
            this.colors = cfg.colors;
        }
    }
    inspect(msg, { depth = -1, indent = '   ', colors = Log.INDENT_COLORS } = { depth: 0, indent: '   ', colors: Log.INDENT_COLORS }) {
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
                const [prefix, postfix, lf, postIndent] = log.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(`,${lf}`) + `${lf}${postIndent}}`;
            }
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, (depth !== undefined && depth !== null && depth >= 0) ? depth : 999, 0, '');
    }
    getPrePostfix(indent, level, currIndent, colors) {
        let cstart = '', cstop = '', lf = '\n';
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
            currIndent = currIndent.replace(/ /g, '&nbsp;');
            const color = COLOR[colors[level % colors.length]] || colors[level % colors.length];
            cstart = `<b><span style='${color}'>`;
            cstop = `</span></b>`;
            lf = '<br>';
        }
        return [`${currIndent}${indent}${cstart}`, `${cstop}`, colors ? '<br>' : '\n', currIndent];
    }
}
Log.INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRkEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTywyREFBMkQ7SUFFdkUsSUFBSSxFQUFRLG1CQUFtQjtJQUMvQixHQUFHLEVBQVMsRUFBRTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFPLEVBQUU7SUFDZCxPQUFPLEVBQUssRUFBRTtJQUNkLE1BQU0sRUFBTSxFQUFFO0lBRWQsS0FBSyxFQUFPLGFBQWE7SUFDekIsR0FBRyxFQUFTLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFDekIsTUFBTSxFQUFNLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFFekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsU0FBUyxFQUFHLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsV0FBVyxFQUFDLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFFekIsT0FBTyxFQUFLLHdCQUF3QjtJQUNwQyxLQUFLLEVBQU8sd0JBQXdCO0lBQ3BDLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsUUFBUSxFQUFJLHdCQUF3QjtJQUNwQyxNQUFNLEVBQU0sd0JBQXdCO0lBQ3BDLFNBQVMsRUFBRyx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0NBQ3ZDLENBQUM7QUFlRixNQUFNLE9BQU8sR0FBRztJQXFDWixZQUFZLE1BQWE7UUFMZixnQkFBVyxHQUFnQixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBSSxFQUFF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

/***/ }),

/***/ "./bin/esm/Data.js":
/*!*************************!*\
  !*** ./bin/esm/Data.js ***!
  \*************************/
/*! namespace exports */
/*! export Data [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Types [provided] [no usage info] [missing usage info prevents renaming] */
/*! export findDomain [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Types": () => /* binding */ Types,
/* harmony export */   "findDomain": () => /* binding */ findDomain,
/* harmony export */   "Data": () => /* binding */ Data
/* harmony export */ });
/* harmony import */ var _DataFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataFilters */ "./bin/esm/DataFilters.js");
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");
;

const log = new hsutil__WEBPACK_IMPORTED_MODULE_1__.Log('Data');
var Types;
(function (Types) {
    Types["number"] = "number";
    Types["name"] = "name";
    Types["date"] = "date";
    Types["currency"] = "currency";
    Types["percent"] = "percent";
})(Types || (Types = {}));
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
        return (0,_DataFilters__WEBPACK_IMPORTED_MODULE_0__.filter)(this, condition);
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
            log.warn(`invalid names setData:\n${log.inspect(names, { depth: 5 })}`);
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
Data.type = {
    number: 'number',
    name: 'name',
    date: 'date',
    currency: 'currency',
    percent: 'percent',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFvQixRQUFRLENBQUM7QUFBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQWlFeEUsTUFBTSxDQUFOLElBQVksS0FXWDtBQVhELFdBQVksS0FBSztJQUVULDBCQUFxQixDQUFBO0lBRXJCLHNCQUFtQixDQUFBO0lBRW5CLHNCQUFtQixDQUFBO0lBRW5CLDhCQUF1QixDQUFBO0lBRXZCLDRCQUFzQixDQUFBO0FBQzlCLENBQUMsRUFYVyxLQUFLLEtBQUwsS0FBSyxRQVdoQjtBQWFELFNBQVMsTUFBTSxDQUFDLEdBQVcsRUFBRSxTQUFTLEdBQUMsSUFBSTtJQUN2QyxJQUFJLENBQU0sQ0FBQztJQUNYLElBQUksR0FBRyxZQUFZLElBQUksRUFBRTtRQUFFLE9BQWEsR0FBRyxDQUFDO0tBQUU7SUFDOUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUFDckIsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFVLEdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFdBQVcsQ0FBRSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDLENB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

/***/ }),

/***/ "./bin/esm/DataFilters.js":
/*!********************************!*\
  !*** ./bin/esm/DataFilters.js ***!
  \********************************/
/*! namespace exports */
/*! export filter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filter": () => /* binding */ filter
/* harmony export */ });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./bin/esm/Data.js");
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");
;

const log = new hsutil__WEBPACK_IMPORTED_MODULE_1__.Log('DataFilters');
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
        return new _Data__WEBPACK_IMPORTED_MODULE_0__.Data({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbHRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRGF0YUZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhBLE9BQU8sRUFBRSxJQUFJLEVBQW9CLE1BQU0sUUFBUSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUMsTUFBMEIsUUFBUSxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUE0QnBGLFNBQVMsd0JBQXdCLENBQUMsSUFBVyxFQUFFLEdBQU8sRUFBRSxHQUFXLEVBQUUsU0FBK0I7SUFDaEcsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUM7SUFDbEQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSw4Q0FBOEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUYsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO1NBQU0sSUFBSSxhQUFhLEVBQUU7UUFFdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzdCO1NBQU0sSUFBSSxVQUFVLEVBQUU7UUFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUssRUFBRSxFQUFFLENBQUMsR0FB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

/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/*! namespace exports */
/*! export Data [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Data.js .Data */
/*! export Types [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./bin/esm/Data.js .Types */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => /* reexport safe */ _Data__WEBPACK_IMPORTED_MODULE_0__.Data,
/* harmony export */   "Types": () => /* reexport safe */ _Data__WEBPACK_IMPORTED_MODULE_0__.Types
/* harmony export */ });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./bin/esm/Data.js");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQU1FLElBQUksRUFLSixLQUFLLEVBRUwsTUFBWSxRQUFRLENBQUMifQ==

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = (function() { return this["crypto"]; }());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./bin/esm/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc0RhdGFiLy4uL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9BcnJheS5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4uL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9BdXRoLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi4vU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0F1dGhCYXNpYy5qcyIsIndlYnBhY2s6Ly9oc0RhdGFiLy4uL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9BdXRoRGlnZXN0LmpzIiwid2VicGFjazovL2hzRGF0YWIvLi4vU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi4vU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL0RhdGUuanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8uLi9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vUGFjaW5nLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi4vU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8uLi9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8uLi9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vbG9nLmpzIiwid2VicGFjazovL2hzRGF0YWIvLi9iaW4vZXNtL0RhdGEuanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8uL2Jpbi9lc20vRGF0YUZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi8uL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL2hzRGF0YWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNEYXRhYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHNEYXRhYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hzRGF0YWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oc0RhdGFiL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywyeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1VOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0MsQ0FBNEI7QUFDNUIsZ0JBQWdCLHFDQUFHO0FBQ1c7QUFDdkIsd0JBQXdCLHVDQUFJO0FBQ25DO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUUsNERBQTRELGNBQWMsR0FBRyxjQUFjO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDIvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QzQyxDQUE0QjtBQUM1QixnQkFBZ0IscUNBQUc7QUFDaUI7QUFDTjtBQUN2Qix5QkFBeUIsdUNBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBLGtCQUFrQixrREFBVTtBQUM1QixzQkFBc0IsY0FBYyxHQUFHLGdCQUFnQixHQUFHLGNBQWM7QUFDeEU7QUFDQSxrQkFBa0Isa0RBQVU7QUFDNUIsa0JBQWtCLGVBQWUsR0FBRyxhQUFhO0FBQ2pEO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLG1CQUFtQixrREFBVTtBQUM3QixrQkFBa0Isa0JBQWtCLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxjQUFjLEdBQUcsa0JBQWtCO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxVQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkNBQTJDLDJvSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGcEM7QUFDUDtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMnNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzNDLENBQTRCO0FBQzVCLGdCQUFnQixxQ0FBRztBQUNaO0FBQ1AsNkNBQTZDLGlDQUFpQyxFQUFFO0FBQ2hGO0FBQ087QUFDUDtBQUNBO0FBQ0EsOEJBQThCLGVBQWUsRUFBRTtBQUMvQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1AsaUJBQWlCLHVEQUF1RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9FQUFvRTtBQUNyRixpQkFBaUIsZ0JBQWdCO0FBQ2pDLHFDQUFxQyxvQ0FBb0M7QUFDekUsZUFBZSxxQkFBcUI7QUFDcEMsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxHQUFHLG1DQUFtQztBQUN0RSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkNBQTJDLCt6STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RTNDLENBQTRCO0FBQzVCLGdCQUFnQixxQ0FBRztBQUNhO0FBQ1U7QUFDRjtBQUN4QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDLElBQUksYUFBYTtBQUN4Riw4REFBOEQseUNBQUksRUFBRSxxRUFBcUU7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCLEVBQUUsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsYUFBYSxFQUFFLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWEsRUFBRSxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixvQkFBb0IsYUFBYSxJQUFJLFNBQVMsRUFBRSwyQ0FBMkM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9CLEtBQUssdUJBQXVCLElBQUksZUFBZSxPQUFPLFlBQVk7QUFDekgsOEVBQThFLGVBQWUsR0FBRyxZQUFZO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0IsS0FBSyx1QkFBdUIsYUFBYSxlQUFlLEdBQUcsWUFBWTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1EQUFVO0FBQ3pDO0FBQ0E7QUFDQSwrQkFBK0IsaURBQVM7QUFDeEM7QUFDQTtBQUNBLGtFQUFrRSxhQUFhLFFBQVEsWUFBWTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZLElBQUksRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZLEdBQUcsZ0JBQWdCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFlBQVk7QUFDbEU7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLDJ2VTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TWxCO0FBQ0M7QUFDQztBQUNKO0FBQ0Q7QUFDRTtBQUN4QiwyQ0FBMkMsbVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjNDLENBQThCO0FBQzlCO0FBQ0EsdUJBQXVCLDBCQUEwQixvQkFBb0I7QUFDckUsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0QixvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLG9DQUFvQztBQUNwQyxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4Q0FBOEMsYUFBYSw0QkFBNEIsUUFBUSw0QkFBNEI7QUFDMUo7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWEscUJBQXFCLGFBQWE7QUFDdEY7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RSxvQkFBb0IsaUNBQWlDLGlDQUFpQyxFQUFFO0FBQ3hGLG1CQUFtQixpQ0FBaUMsc0JBQXNCLEVBQUU7QUFDNUUsZUFBZSxpQ0FBaUMsdUJBQXVCLEVBQUU7QUFDekUsZUFBZSxpQ0FBaUMsZ0NBQWdDLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0QsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBSTtBQUNoQztBQUNBLDBCQUEwQixzQ0FBc0MsS0FBSyxvQ0FBb0M7QUFDekc7QUFDQTtBQUNBLDBCQUEwQixLQUFLLElBQUksVUFBVTtBQUM3QztBQUNBLDhCQUE4QixRQUFRLEdBQUcsa0JBQWtCLEdBQUcsVUFBVTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTyxLQUFLLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUF5RCxJQUFJLHFEQUFxRDtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMERBQTBELElBQUk7QUFDOUQ7QUFDQTtBQUNBLCtCQUErQixrR0FBa0c7QUFDakk7QUFDQTtBQUNBLHlCQUF5QixFQUFFLEdBQUcsaUNBQWlDLE9BQU8sRUFBRSxFQUFFLEVBQUUsUUFBUSxJQUFJLDREQUE0RCxZQUFZLEdBQUcsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUM1TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pEO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxNQUFNLE1BQU07QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQStDO0FBQ2pFLGlCQUFpQiw2Q0FBNkM7QUFDOUQsaUJBQWlCLDZDQUE2QztBQUM5RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJ6Vjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JNM0MsQ0FBdUM7QUFDVjtBQUM3QixnQkFBZ0IsdUNBQUc7QUFDWjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0JBQXNCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImhzRGF0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdW5pcXVlZnkoYXJyYXksIGtleSkge1xuICAgIGNvbnN0IHVuaXF1ZSA9IHt9O1xuICAgIHJldHVybiBrZXkgPyBhcnJheS5maWx0ZXIodCA9PiB1bmlxdWVbdFsnJyArIGtleV1dID8gZmFsc2UgOiAodW5pcXVlW3RbJycgKyBrZXldXSA9IHRydWUpKVxuICAgICAgICA6IGFycmF5LmZpbHRlcih0ID0+IHVuaXF1ZVsnJyArIHRdID8gZmFsc2UgOiAodW5pcXVlWycnICsgdF0gPSB0cnVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWEp5WVhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12UVhKeVlYa3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCWjBOQkxFMUJRVTBzVlVGQlZTeFJRVUZSTEVOQlFVa3NTMEZCVXl4RlFVRkZMRWRCUVd0Q08wbEJRM0pFTEUxQlFVMHNUVUZCVFN4SFFVRTBRaXhGUVVGRkxFTkJRVU03U1VGRE0wTXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU40UlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETjBVc1EwRkJReUo5IiwiZXhwb3J0IGNsYXNzIEF1dGgge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlCZFhSb0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVWRCTEUxQlFVMHNUMEZCWjBJc1NVRkJTVHRKUVVsMFFpeFpRVUZaTEZGQlFXVXNSVUZCUlN4UlFVRmxPMUZCUTNoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03UTBGSFNpSjkiLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdSZXF1ZXN0QmFzaWMnKTtcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuL0F1dGgnO1xuZXhwb3J0IGNsYXNzIEF1dGhCYXNpYyBleHRlbmRzIEF1dGgge1xuICAgIHRlc3RBdXRoKG9wdGlvbnMsIGRhdGEsIHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZy5kZWJ1ZygoKSA9PiBgcmVjZWl2ZWQgd3d3LWF1dGhlbnRpY2F0ZSByZXF1ZXN0IGZvciAke29wdGlvbnMuaG9zdH1gKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIF9idG9hKGAke3RoaXMudXNlcm5hbWV9OiR7dGhpcy5wYXNzd29yZH1gKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuZnVuY3Rpb24gX2J0b2Eoc3RyKSB7XG4gICAgY29uc3QgYnVmZmVyID0gc3RyIGluc3RhbmNlb2YgQnVmZmVyID8gc3RyIDogQnVmZmVyLmZyb20oc3RyLnRvU3RyaW5nKCksICdiaW5hcnknKTtcbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhRUpoYzJsakxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDBGMWRHaENZWE5wWXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFXMUNMRTlCUVU4c1EwRkJRenRCUVVGSExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8wRkJSMmhHTEU5QlFVOHNSVUZCUlN4SlFVRkpMRVZCUVVVc1RVRkJhMElzVVVGQlVTeERRVUZETzBGQlJ6RkRMRTFCUVUwc1QwRkJUeXhUUVVGVkxGTkJRVkVzU1VGQlNUdEpRVU12UWl4UlFVRlJMRU5CUVVNc1QwRkJaU3hGUVVGRkxFbEJRVmNzUlVGQlJTeFJRVUYzUWp0UlFVTXpSQ3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMSGxEUVVGNVF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMlJTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjBSaXhQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPME5CUTBvN1FVRkZSQ3hUUVVGVExFdEJRVXNzUTBGQlF5eEhRVUZwUWp0SlFVTTFRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEhRVUZITEZsQlFWa3NUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTJ4R0xFOUJRVThzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVOeVF5eERRVUZESW4wPSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1JlcXVlc3REaWdlc3QnKTtcbmltcG9ydCB7IGNyZWF0ZUhhc2ggfSBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4vQXV0aCc7XG5leHBvcnQgY2xhc3MgQXV0aERpZ2VzdCBleHRlbmRzIEF1dGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5jID0gMDtcbiAgICB9XG4gICAgdXBkYXRlTkMoKSB7XG4gICAgICAgIGxldCBtYXggPSA5OTk5OTk5OTtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSBuZXcgQXJyYXkoOCkuam9pbignMCcpICsgJyc7XG4gICAgICAgIHRoaXMubmMgPSAodGhpcy5uYyA+IG1heCA/IDEgOiB0aGlzLm5jICsgMSk7XG4gICAgICAgIGxldCBuYyA9IHRoaXMubmMgKyAnJztcbiAgICAgICAgcmV0dXJuIHBhZGRpbmcuc3Vic3RyKDAsIDggLSBuYy5sZW5ndGgpICsgbmM7XG4gICAgfVxuICAgIGdlbmVyYXRlQ05PTkNFKHFvcCkge1xuICAgICAgICBsZXQgY25vbmNlO1xuICAgICAgICBsZXQgbmM7XG4gICAgICAgIGlmICh0eXBlb2YgcW9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGV0IGNub25jZUhhc2ggPSBjcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgICAgIGNub25jZUhhc2gudXBkYXRlKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpKTtcbiAgICAgICAgICAgIGNub25jZSA9IGNub25jZUhhc2guZGlnZXN0KCdoZXgnKS5zdWJzdHIoMCwgMTYpO1xuICAgICAgICAgICAgbmMgPSB0aGlzLnVwZGF0ZU5DKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY25vbmNlOiBjbm9uY2UsIG5jOiBuYyB9O1xuICAgIH1cbiAgICB0ZXN0QXV0aChvcHRpb25zLCBkYXRhLCByZXNwb25zZSkge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gYHJlY2VpdmVkIHd3dy1hdXRoZW50aWNhdGUgcmVxdWVzdCBmb3IgJHtvcHRpb25zLmhvc3R9YCk7XG4gICAgICAgIGxldCBjaGFsbGVuZ2UgPSBwYXJzZURpZ2VzdFJlc3BvbnNlKHJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXSk7XG4gICAgICAgIGxldCBoYTEgPSBjcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgbGV0IF9zdHIgPSBgJHt0aGlzLnVzZXJuYW1lfToke2NoYWxsZW5nZS5yZWFsbX06JHt0aGlzLnBhc3N3b3JkfWA7XG4gICAgICAgIGhhMS51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCBoYTIgPSBjcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgX3N0ciA9IGAke29wdGlvbnMubWV0aG9kfToke29wdGlvbnMucGF0aH1gO1xuICAgICAgICBoYTIudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgeyBuYywgY25vbmNlIH0gPSB0aGlzLmdlbmVyYXRlQ05PTkNFKGNoYWxsZW5nZS5xb3ApO1xuICAgICAgICBsZXQgaGFzaCA9IGNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBfc3RyID0gYCR7aGExLmRpZ2VzdCgnaGV4Jyl9OiR7Y2hhbGxlbmdlLm5vbmNlfToke25jfToke2Nub25jZX06JHtjaGFsbGVuZ2UucW9wfToke2hhMi5kaWdlc3QoJ2hleCcpfWA7XG4gICAgICAgIGhhc2gudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgYXV0aFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJlYWxtOiBjaGFsbGVuZ2UucmVhbG0sXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHVyaTogb3B0aW9ucy5wYXRoLFxuICAgICAgICAgICAgcW9wOiBjaGFsbGVuZ2UucW9wLFxuICAgICAgICAgICAgbm9uY2U6IGNoYWxsZW5nZS5ub25jZSxcbiAgICAgICAgICAgIGFsZ29yaXRobTogXCJNRDVcIixcbiAgICAgICAgICAgIHJlc3BvbnNlOiBoYXNoLmRpZ2VzdCgnaGV4JylcbiAgICAgICAgfTtcbiAgICAgICAgYXV0aFBhcmFtcyA9IG9taXROdWxsKGF1dGhQYXJhbXMpO1xuICAgICAgICBpZiAoY25vbmNlKSB7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLm5jID0gbmM7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLmNub25jZSA9IGNub25jZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGNvbXBpbGVQYXJhbXMoYXV0aFBhcmFtcyk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9taXROdWxsKGRhdGEpIHtcbiAgICBsZXQgbmV3T2JqZWN0ID0ge307XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBpZiAoZGF0YVtrXSAhPT0gbnVsbCAmJiBkYXRhW2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld09iamVjdFtrXSA9IGRhdGFba107XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3T2JqZWN0O1xufVxuZnVuY3Rpb24gY29tcGlsZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIHBhcmFtcykge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGV0IHBhcmFtID0gaSArICc9JyArIChwdXREb3VibGVRdW90ZXMoaSkgPyBgXCIke3BhcmFtc1tpXX1cImAgOiBwYXJhbXNbaV0pO1xuICAgICAgICAgICAgcGFydHMucHVzaChwYXJhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdEaWdlc3QgJyArIHBhcnRzLmpvaW4oJywnKTtcbn1cbmZ1bmN0aW9uIHB1dERvdWJsZVF1b3RlcyhlbnRyeSkge1xuICAgIHJldHVybiBbJ3FvcCcsICduYyddLmluZGV4T2YoZW50cnkpIDwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlRGlnZXN0UmVzcG9uc2UoZGlnZXN0SGVhZGVyKSB7XG4gICAgZGlnZXN0SGVhZGVyID0gZGlnZXN0SGVhZGVyLnNwbGl0KCdEaWdlc3QgJylbMV07XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgZGlnZXN0SGVhZGVyLnJlcGxhY2UoLyhbXixdKikvZywgKC4uLnJlc3QpID0+IHtcbiAgICAgICAgY29uc3QgcGFydCA9IHJlc3RbMV07XG4gICAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBrdiA9IHBhcnQuc3BsaXQoJz0nKS5tYXAoKHYpID0+IHYudHJpbSgpKTtcbiAgICAgICAgICAgIHBhcmFtc1trdlswXV0gPSBrdlsxXS5yZXBsYWNlKC9cXFwiL2csICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhRVJwWjJWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5QmRYUm9SR2xuWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJiVUlzVDBGQlR5eERRVUZETzBGQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZEYWtZc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZaTEZGQlFWRXNRMEZCUXp0QlFVY3hReXhQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFXdENMRkZCUVZFc1EwRkJRenRCUVUweFF5eE5RVUZOTEU5QlFVOHNWVUZCVnl4VFFVRlJMRWxCUVVrN1NVRkJjRU03TzFGQlEwa3NUMEZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVhsRldDeERRVUZETzBsQmNFVkhMRkZCUVZFN1VVRkRTaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hQUVVGUExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOMFFpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZOUkN4alFVRmpMRU5CUVVNc1IwRkJWVHRSUVVOeVFpeEpRVUZKTEUxQlFWVXNRMEZCUXp0UlFVTm1MRWxCUVVrc1JVRkJVeXhEUVVGRE8xRkJSV1FzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRla0lzU1VGQlNTeFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMjVETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFFUXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFRRVU40UWp0UlFVTkVMRTlCUVU4c1JVRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVNc1EwRkJRenRKUVVOd1F5eERRVUZETzBsQlVVUXNVVUZCVVN4RFFVRkRMRTlCUVdVc1JVRkJSU3hKUVVGWExFVkJRVVVzVVVGQmQwSTdVVUZETTBRc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4NVEwRkJlVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZka1VzU1VGQlNTeFRRVUZUTEVkQlFVOHNiVUpCUVcxQ0xFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VVc1NVRkJTU3hIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOc1JTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNelF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJSV3BDTEVsQlFVa3NSVUZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFUXNTVUZCU1N4SlFVRkpMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6ZENMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEVsQlFVa3NUVUZCVFN4SlFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM1pITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGSGJFSXNTVUZCU1N4VlFVRlZMRWRCUVU4N1dVRkRha0lzUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TFFVRkxPMWxCUTNSQ0xGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVR0WlFVTjJRaXhIUVVGSExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVazdXVUZEYWtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITzFsQlEyeENMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUzBGQlN6dFpRVU4wUWl4VFFVRlRMRVZCUVVVc1MwRkJTenRaUVVOb1FpeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VTBGREwwSXNRMEZCUXp0UlFVVkdMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGYkVNc1NVRkJTU3hOUVVGTkxFVkJRVVU3V1VGRFVpeFZRVUZWTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOdVFpeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRUUVVNNVFqdFJRVVZFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPME5CUTBvN1FVRkZSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZSTzBsQlEzUkNMRWxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU51UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRk8xRkJRMjVETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVUZGTzBsQlF6bEZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdRVUZEY2tJc1EwRkJRenRCUVUxRUxGTkJRVk1zWVVGQllTeERRVUZETEUxQlFWVTdTVUZETjBJc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEyWXNTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hOUVVGTkxFVkJRVVU3VVVGRGJFSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFZRVUZWTEVWQlFVVTdXVUZEYWtNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU55UWp0TFFVTktPMGxCUTBRc1QwRkJUeXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eERRVUZETzBGQlRVUXNVMEZCVXl4bFFVRmxMRU5CUVVNc1MwRkJXVHRKUVVOcVF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRNVU1zUTBGQlF6dEJRVVZFTEZOQlFWTXNiVUpCUVcxQ0xFTkJRVU1zV1VGQmJVSTdTVUZETlVNc1dVRkJXU3hIUVVGSExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJSV3hDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZoTEVWQlFVVXNSVUZCUlR0UlFVTnNSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha0lzU1VGQlNTeEpRVUZKTEVWQlFVVTdXVUZEVml4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpWRE8xRkJRMFFzVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEWkN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOSUxFOUJRVThzVFVGQlRTeERRVUZETzBGQlEyeENMRU5CUVVNaWZRPT0iLCJleHBvcnQgZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgbGV0IGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoayArPSAocy5jaGFyQ29kZUF0KGkpICogKGkgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiAoY2hrICYgMHhmZmZmZmZmZikudG9TdHJpbmcoMTYpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJobFkydHpkVzB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZRMmhsWTJ0emRXMHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCVVVNc1RVRkJUU3hWUVVGVkxHRkJRV0VzUTBGQlF5eERRVUZSTzBsQlEyNURMRWxCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF6dEpRVU55UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU16UWl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZEVNN1NVRkRSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU14UXl4RFFVRkRJbjA9IiwiY29uc3QgbW9udGhTdHIgPSBbXG4gICAgWydKYW4nLCAnSmFudWFyeSddLCBbJ0ZlYicsICdGZWJydWFyeSddLCBbJ01hcicsICdNYXJjaCddLCBbJ0FwcicsICdBcHJpbCddLCBbJ01heScsICdNYXknXSwgWydKdW4nLCAnSnVuZSddLFxuICAgIFsnSnVsJywgJ0p1bHknXSwgWydBdWcnLCAnQXVndXN0J10sIFsnU2VwJywgJ1NlcHRlbWJlciddLCBbJ09jdCcsICdPY3RvYmVyJ10sIFsnTm92JywgJ05vdmVtYmVyJ10sIFsnRGVjJywgJ0RlY2VtYmVyJ11cbl07XG5jb25zdCBkYXlTdHIgPSBbXG4gICAgWydTdW4nLCAnU3VuZGF5J10sIFsnTW9uJywgJ01vbmRheSddLCBbJ1R1ZScsICdUdWVzZGF5J10sIFsnV2VkJywgJ1dlZG5lc2RheSddLCBbJ1RodScsICdUaHVyc2RheSddLCBbJ0ZyaScsICdGcmlkYXknXSwgWydTYXQnLCAnU2F0dXJkYXknXVxuXTtcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGRpZ2l0cykge1xuICAgIGxldCByID0gJycgKyBudW1iZXI7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGUoZm9ybWF0U3RyaW5nLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICAgIHJldHVybiAodHlwZW9mIGZvcm1hdFN0cmluZyAhPT0gJ3N0cmluZycgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSA/XG4gICAgICAgICdpbnZhbGlkJyA6XG4gICAgICAgIGZvcm1hdFN0cmluZ1xuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWVlZL2csICcnICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVZWS9nLCAnJyArIChkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDApKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNb250aCgpICsgMSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU0vZywgJycgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREQvZywgZGF5U3RyW2RhdGUuZ2V0RGF5KCldWzBdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVERC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXREYXRlKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEL2csICcnICsgZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWhoL2csIGZvcm1hdE51bWJlcihkYXRlLmdldEhvdXJzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoL2csICcnICsgZGF0ZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtbS9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVtL2csICcnICsgZGF0ZS5nZXRNaW51dGVzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXNzL2csIGZvcm1hdE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMykpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWpqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwLCAxKSk7XG59XG5leHBvcnQgY29uc3QgbXMgPSB7XG4gICAgZnJvbU1pbnV0ZXM6IChtaW4pID0+IDEwMDAgKiA2MCAqIG1pbixcbiAgICBmcm9tSG91cnM6IChoKSA9PiAxMDAwICogNjAgKiA2MCAqIGgsXG4gICAgZnJvbURheXM6IChkKSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogZCxcbiAgICBmcm9tV2Vla3M6ICh3KSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAqIHcsXG4gICAgdG9NaW51dGVzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCksXG4gICAgdG9Ib3VyczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCksXG4gICAgdG9EYXlzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpLFxuICAgIHRvV2Vla3M6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5RVlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVdWQkxFMUJRVTBzVVVGQlVTeEhRVUZITzBsQlEySXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETzBsQlF6VkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXp0RFFVRkRMRU5CUVVNN1FVRkhOVWdzVFVGQlRTeE5RVUZOTEVkQlFVYzdTVUZEV0N4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU03UTBGQlF5eERRVUZETzBGQlJ6TkpMRk5CUVZNc1dVRkJXU3hEUVVGRExFMUJRV0VzUlVGQlJTeE5RVUZoTzBsQlF6bERMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSVUZCUlR0UlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlFVVTdTVUZETVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRFlpeERRVUZETzBGQlkwUXNUVUZCVFN4VlFVRlZMRWxCUVVrc1EwRkJReXhaUVVGdFFpeEZRVUZGTEVsQlFVa3NSMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSVHRKUVVOeVJDeFBRVUZQTEVOQlFVTXNUMEZCVHl4WlFVRlpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFVXNVMEZCVXl4RFFVRkJMRU5CUVVNN1VVRkRWaXhaUVVGWk8yRkJRMUFzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJGQlEzaERMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6bERMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEVMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEVMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJReXhEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEY0VRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlNTeEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZUVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETlVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETlVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWtzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRoUVVOdVF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRiRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUnl4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzJGQlEyNURMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSkxFVkJRVVVzUjBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1lVRkRkRU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVU1zUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpWRUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVY3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUjBGQlF5eEhRVUZITEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVONlJTeERRVUZETzBGQlIwUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSE8wbEJRMlFzVjBGQlZ5eEZRVUZMTEVOQlFVTXNSMEZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVkQlFVYzdTVUZETTBNc1UwRkJVeXhGUVVGUExFTkJRVU1zUTBGQlVTeEZRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETzBsQlF6VkRMRkZCUVZFc1JVRkJVU3hEUVVGRExFTkJRVkVzUlVGQlNTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTTdTVUZETDBNc1UwRkJVeXhGUVVGUExFTkJRVU1zUTBGQlVTeEZRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNN1NVRkRha1FzVTBGQlV5eEZRVUZQTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXpWRExFOUJRVThzUlVGQlV5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRMME1zVFVGQlRTeEZRVUZWTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU03U1VGRGJFUXNUMEZCVHl4RlFVRlRMRU5CUVVNc1JVRkJVeXhGUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXl4RFFVRkRPME5CUTNaRUxFTkJRVU1pZlE9PSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1BhY2luZycpO1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXMsIC4uLnJlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMsIC4uLnJlc3QpOyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgY2xhc3MgUGFjZSB7XG4gICAgY29uc3RydWN0b3IoeyBwYWNlID0gMTAwLCBtYXhDb25jdXJyZW50ID0gLTEsIGNvbGxlY3Rpb25QZXJpb2QgPSAwIH0pIHtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gLTE7XG4gICAgICAgIHRoaXMucGFjZSA9IDA7XG4gICAgICAgIHRoaXMud2FpdFVudGlsID0gMDtcbiAgICAgICAgdGhpcy53YWl0aW5nID0gMDtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gMDtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IHt9O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25QZXJpb2QgPSAwO1xuICAgICAgICB0aGlzLnBhY2UgPSBwYWNlO1xuICAgICAgICB0aGlzLm1heENvbmN1cnJlbnQgPSBtYXhDb25jdXJyZW50O1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25QZXJpb2QgPSBjb2xsZWN0aW9uUGVyaW9kO1xuICAgIH1cbiAgICBpc0FsbG93ZWQoKSB7IHJldHVybiB0aGlzLm1heENvbmN1cnJlbnQgPCAwIHx8IHRoaXMuc3RhcnRlZCA8IHRoaXMubWF4Q29uY3VycmVudDsgfVxuICAgIHNldFBhY2UobXMpIHsgdGhpcy5wYWNlID0gbXM7IH1cbiAgICBzZXRNYXhDb25jdXJyZW50KG1heENvbmN1cnJlbnQpIHsgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDsgfVxuICAgIGluUXVldWUoKSB7IHJldHVybiB0aGlzLndhaXRpbmc7IH1cbiAgICBpblByb2dyZXNzKCkgeyByZXR1cm4gdGhpcy5zdGFydGVkOyB9XG4gICAgYXN5bmMgYWRkKGZuLCBrZXkpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxUaW1lID0gbm93ICsgTWF0aC5tYXgodGhpcy5jb2xsZWN0aW9uUGVyaW9kLCB0aGlzLndhaXRVbnRpbCk7XG4gICAgICAgIHRoaXMud2FpdFVudGlsICs9IHRoaXMucGFjZTtcbiAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgIGlmIChrZXkgJiYgdGhpcy5xdWV1ZVtrZXldKSB7XG4gICAgICAgICAgICBpdGVtID0gdGhpcy5xdWV1ZVtrZXldO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0udGltZXIpO1xuICAgICAgICAgICAgaXRlbS5mbiA9IGZuO1xuICAgICAgICAgICAgaXRlbS5hZGRlZCA9IG5vdztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IGtleSB8fCBgJHtub3d9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKX1gO1xuICAgICAgICAgICAgaXRlbSA9IHsgZm46IGZuLCBhZGRlZDogbm93LCBwYWNlOiB0aGlzLCBrZXk6IGtleSB9O1xuICAgICAgICAgICAgdGhpcy5xdWV1ZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMud2FpdGluZysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVJdGVtKGl0ZW0sIGNhbGxUaW1lIC0gbm93KTtcbiAgICB9XG4gICAgcmVzb2x2ZUl0ZW0oaXRlbSwgd2FpdFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAoX2l0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBfaXRlbS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfaXRlbS5wYWNlLnF1ZXVlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uud2FpdGluZy0tO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBiZWxvd0NvbmN1cnJlbnRMaW1pdChfaXRlbS5wYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZW0ucGFjZS5zdGFydGVkKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdHVhbERlbGF5ID0gRGF0ZS5ub3coKSAtIF9pdGVtLmFkZGVkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBfaXRlbS5mbihhY3R1YWxEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZC0tO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZC0tO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGl0ZW0udGltZXIgPSBzZXRUaW1lb3V0KGV4ZWN1dGUsIHdhaXRUaW1lLCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYmVsb3dDb25jdXJyZW50TGltaXQocGFjZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZWxlYXNlID0+IHtcbiAgICAgICAgY29uc3Qgd2FpdExvb3AgPSAoKSA9PiBwYWNlLmlzQWxsb3dlZCgpID8gcmVsZWFzZSgpIDogc2V0VGltZW91dCh3YWl0TG9vcCwgMTApO1xuICAgICAgICB3YWl0TG9vcCgpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdGamFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwxQmhZMmx1Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkpRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFVOHNUMEZCVHl4RFFVRkRPMEZCUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRlROVVFzVFVGQlRTeFZRVUZWTEU5QlFVOHNRMEZCUXl4RlFVRlRMRVZCUVVVc1IwRkJSeXhKUVVGVk8wbEJRelZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGJFWXNRMEZCUXp0QlFXZERSQ3hOUVVGTkxGVkJRVlVzUzBGQlN5eERRVUZETEVWQlFWTTdTVUZETTBJc1QwRkJUeXhEUVVGSkxFbEJRVThzUlVGQllTeEZRVUZGTzFGQlF6ZENMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZ6UWl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1F5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJRenRCUVVOT0xFTkJRVU03UVVGdFFrUXNUVUZCVFN4UFFVRlBMRWxCUVVrN1NVRnBRMklzV1VGQldTeEZRVUZETEVsQlFVa3NSMEZCUXl4SFFVRkhMRVZCUVVVc1lVRkJZU3hIUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEdkQ1FVRm5RaXhIUVVGRExFTkJRVU1zUlVGQlF6dFJRUzlDY0VRc2EwSkJRV0VzUjBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVnlRaXhUUVVGSkxFZEJRV01zUTBGQlF5eERRVUZETzFGQlJYQkNMR05CUVZNc1IwRkJVeXhEUVVGRExFTkJRVU03VVVGRmNFSXNXVUZCVHl4SFFVRlhMRU5CUVVNc1EwRkJRenRSUVVWd1FpeFpRVUZQTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlhCQ0xGVkJRVXNzUjBGQmQwSXNSVUZCUlN4RFFVRkRPMUZCWTJwRExIRkNRVUZuUWl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVZGNFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJRenRSUVVOdVF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVzVDVFN4VFFVRlRMRXRCUVdFc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCYzBJelJpeFBRVUZQTEVOQlFVTXNSVUZCVXl4SlFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVXpReXhuUWtGQlowSXNRMEZCUXl4aFFVRnZRaXhKUVVGVExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWdVJpeFBRVUZQTEV0QlFXVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVUxUXl4VlFVRlZMRXRCUVZrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWRnVSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFXZENMRVZCUVVVc1IwRkJWenRSUVVOdVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEycERMRTFCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRrVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJUVkNMRWxCUVVrc1NVRkJVeXhEUVVGRE8xRkJRMlFzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU40UWl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVMEZEY0VJN1lVRkJUVHRaUVVOSUxFZEJRVWNzUjBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dFpRVU14UkN4SlFVRkpMRWRCUVVjc1JVRkJReXhGUVVGRkxFVkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNN1dVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGRrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xTkJRMnhDTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN1NVRkRha1FzUTBGQlF6dEpRVVZQTEZkQlFWY3NRMEZCUXl4SlFVRlRMRVZCUVVVc1VVRkJaVHRSUVVNeFF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlEyNURMRTFCUVUwc1QwRkJUeXhIUVVGSExFdEJRVXNzUlVGQlJTeExRVUZWTEVWQlFVVXNSVUZCUlR0blFrRkJSeXhKUVVGSk8yOUNRVU40UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETzI5Q1FVTjBRaXhQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTnlRaXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZEZGtNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTTdiMEpCUXpORExFMUJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dHZRa0ZEZUVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOb1FqdG5Ra0ZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHR2UWtGRFVDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU55UWl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlEySTdXVUZCUVN4RFFVRkRMRU5CUVVFN1dVRkhSaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFGQlEzSkVMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dERRVU5LTzBGQlIwUXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eEpRVUZUTzBsQlEyNURMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdVVUZEZWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTVSU3hSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJReUo5IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdCcpO1xuaW1wb3J0IHsgUGFjZSB9IGZyb20gJy4vUGFjaW5nJztcbmltcG9ydCB7IEF1dGhEaWdlc3QgfSBmcm9tICcuL0F1dGhEaWdlc3QnO1xuaW1wb3J0IHsgQXV0aEJhc2ljIH0gZnJvbSAnLi9BdXRoQmFzaWMnO1xubG9nLm1lc3NhZ2VMZW5ndGggPSAxMjA7XG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9nID0gbG9nO1xuICAgICAgICB0aGlzLnNldENyZWRlbnRpYWxzID0gKHVzZXIsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gdXNlciA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogeyB1c2VyOiB1c2VyLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRBdXRoVG9rZW4gPSAodG9rZW4pID0+IHRoaXMuYXV0aFRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMuc2V0UGFjZSA9ICh7IHBhY2UgPSA1MCwgbWF4ID0gMTAsIGNvbGxlY3Rpb25QZXJpb2QgPSAxMDAgfSA9IHsgcGFjZTogbnVsbCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhY2UgPSAoIXBhY2UgfHwgcGFjZSA8IDApID8gdW5kZWZpbmVkIDogbmV3IFBhY2UoeyBwYWNlOiBwYWNlLCBtYXhDb25jdXJyZW50OiBtYXgsIGNvbGxlY3Rpb25QZXJpb2Q6IGNvbGxlY3Rpb25QZXJpb2QgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xlYXJQYWNlID0gKCkgPT4gdGhpcy5zZXRQYWNlKCk7XG4gICAgICAgIHRoaXMuZGVjb2RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBhc3luYyBnZXQodXJsLCB7IHVzZUNhY2hlZCA9IHRydWUsIGhlYWRlcnMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh1cmwsICdHRVQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzKTtcbiAgICB9XG4gICAgYXN5bmMgcHV0KHVybCwgcG9zdERhdGEsIHsgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BVVCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVkUmVxdWVzdChvcHRpb25zLCBmYWxzZSwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBhc3luYyBwb3N0KHVybCwgcG9zdERhdGEsIHsgaGVhZGVycyA9IHt9IH0gPSB7fSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BPU1QnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgZmFsc2UsIGhlYWRlcnMsIHBvc3REYXRhKTtcbiAgICB9XG4gICAgZ2V0VVJMKHVybCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IG5ldyBVUkwodXJsLCBkb2N1bWVudC5VUkwpIDogdXJsO1xuICAgIH1cbiAgICBnZXRPcHRpb25zKHVybCwgbWV0aG9kKSB7XG4gICAgICAgIHVybCA9IHRoaXMuZ2V0VVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9ICcnO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICAgICAgICAgIGhvc3Q6IHVybC5ob3N0LFxuICAgICAgICAgICAgaG9zdG5hbWU6IHVybC5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHVybC5wb3J0LFxuICAgICAgICAgICAgcGF0aG5hbWU6IHByZWZpeCArIHVybC5wYXRobmFtZSxcbiAgICAgICAgICAgIHBhdGg6IHByZWZpeCArIHVybC5wYXRobmFtZSArICh1cmwuc2VhcmNoIHx8ICcnKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgdXJsOiBgJHt1cmwucHJvdG9jb2x9Ly8ke3VybC5ob3N0fSR7cHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpfWAsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmF1dGhUb2tlbikge1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhUb2tlbiA9IHRoaXMuYXV0aFRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBhc3luYyBkZWNvZGVkUmVxdWVzdChvcHRpb25zLCB1c2VDYWNoZWQsIGhlYWRlcnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmRlY29kZSAmJiByZXN1bHQucmVzcG9uc2UudHh0ICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgcmVzdWx0LmRhdGEgPSB0aGlzLmRlY29kZShyZXN1bHQuZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSkge1xuICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pICR7b3B0aW9ucy5tZXRob2R9LWluZyAke29wdGlvbnMudXJsfWApO1xuICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucGFjZS5hZGQoKCkgPT4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSwgYCR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0ID0gdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSByZWNlaXZlZCAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfSBgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5pc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpO1xuICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0ZSA9IHJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXTtcbiAgICAgICAgICAgIGlmICghYXV0aGVudGljYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgbGV0IGF1dGg7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZS5pbmRleE9mKCdEaWdlc3QnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRoID0gbmV3IEF1dGhEaWdlc3QodGhpcy5jcmVkZW50aWFscy51c2VyLCB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYXV0aGVudGljYXRlLmluZGV4T2YoJ0Jhc2ljJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IG5ldyBBdXRoQmFzaWModGhpcy5jcmVkZW50aWFscy51c2VyLCB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGB1bmltcGxlbWVudGVkIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgJHthdXRoZW50aWNhdGV9IGZvciAnJHtvcHRpb25zLnVybH0nYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXV0aC50ZXN0QXV0aChvcHRpb25zLCByZXNwb25zZS5kYXRhLCByZXNwb25zZS5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGBhdXRoZW50aWNhdGlvbiBtaXNzaW5nOyBjYWxsICdzZXRDcmVkZW50aWFscycgYmVmb3JlIGNhbGxpbmcgJ2dldCdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBgZXJyb3IgcmVxdWVzdGluZyAke29wdGlvbnMudXJsfTogJHtlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb25maXJtUmVxdWVzdChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNUZXh0ID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0geyAnY29udGVudC10eXBlJzogJycgfTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1RleHQuc3BsaXQoJ1xcclxcbicpLm1hcChoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGt2ID0gaC5zcGxpdCgnOicpLm1hcChwID0+IHAudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrdlswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW2t2WzBdXSA9IGt2WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OiB0eHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogYCR7dGhpcy5zdGF0dXN9ICR7dGhpcy5zdGF0dXNUZXh0fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnJlc3BvbnNlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxSZXF1ZXN0KG9wdGlvbnMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKS5mb3JFYWNoKGggPT4geGhyLnNldFJlcXVlc3RIZWFkZXIoaCwgb3B0aW9ucy5oZWFkZXJzW2hdKSk7XG4gICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR4dCA/ICd0ZXh0JyA6ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGNvbmZpcm1SZXF1ZXN0O1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKHBvc3REYXRhID8gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNUZXh0dWFsQ29udGVudChjb250ZW50VHlwZSkge1xuICAgICAgICBsZXQgdHh0ID0gZmFsc2U7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1YlR5cGVzID0gY29udGVudFR5cGUuc3BsaXQoJy8nKTtcbiAgICAgICAgc3dpdGNoIChzdWJUeXBlc1swXSkge1xuICAgICAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIHR4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XG4gICAgICAgICAgICBjYXNlICdmb250JzogYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdWJUeXBlc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGRmJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm1zLXBvd2VycG9pbnQnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm1zLWV4Y2VsJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29jdGV0LXN0cmVhbSc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQubXMtZXhjZWwuc2hlZXQubWFjcm9lbmFibGVkLjEyJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMubG9nLmluZm8oYGNhY2hpbmcgJHtjb250ZW50VHlwZX0gYXMgYmluYXJ5YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhpcy5sb2cud2FybihgY2FjaGluZyAnJHtjb250ZW50VHlwZX0nIGFzIGJpbmFyeWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eHQ7XG4gICAgfVxuICAgIGlzVGV4dHVhbFJlcXVlc3QocGF0aE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFsnanNvbicsICd0eHQnLCAnaHRtbCddLnNvbWUoZXh0ID0+IHBhdGhOYW1lLmluZGV4T2YoZXh0KSA+PSAwKTtcbiAgICB9XG59XG5SZXF1ZXN0LmRlY29kZXJzID0ge1xuICAgIHN0cjJqc29uOiAoZGF0YSkgPT4geyB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfSxcbiAgICBodG1sMmpzb246IHVuZGVmaW5lZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhkRFFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVdVc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UVVGRGRrVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGakxGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVkVzWTBGQll5eERRVUZETzBGQlF6VkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlV5eGhRVUZoTEVOQlFVTTdRVUZITTBNc1IwRkJSeXhEUVVGRExHRkJRV0VzUjBGQlJ5eEhRVUZITEVOQlFVTTdRVUYzUkhoQ0xFMUJRVTBzVDBGQlR5eFBRVUZQTzBsQlFYQkNPMUZCVDJNc1VVRkJSeXhIUVVGUkxFZEJRVWNzUTBGQlF6dFJRV2RDYkVJc2JVSkJRV01zUjBGQlJ5eERRVUZETEVsQlFWa3NSVUZCUlN4UlFVRm5RaXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFdEJRVWNzVTBGQlV5eERRVUZCTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRGVFWXNRMEZCUXl4RFFVRkJPMUZCUjAwc2FVSkJRVmtzUjBGQlJ5eERRVUZETEV0QlFXRXNSVUZCUlN4RlFVRkZMRU5CUTNCRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMUZCVVc1Q0xGbEJRVThzUjBGQlJ5eERRVUZETEVWQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFZEJRVU1zUlVGQlJTeEZRVUZGTEdkQ1FVRm5RaXhIUVVGRExFZEJRVWNzUzBGQlJTeEZRVUZETEVsQlFVa3NSVUZCVFN4SlFVRkpMRVZCUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeEZRVUZGTEdGQlFXRXNSVUZCUXl4SFFVRkhMRVZCUVVVc1owSkJRV2RDTEVWQlFVTXNaMEpCUVdkQ0xFVkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TklMRU5CUVVNc1EwRkJRVHRSUVV0TkxHTkJRVk1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGUmFrTXNWMEZCVFN4SFFVRlpMRk5CUVZNc1EwRkJRenRKUVc5TmRrTXNRMEZCUXp0SlFURk1WU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFXTXNSVUZCUlN4RlFVRkRMRk5CUVZNc1IwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eEhRVUZETEVWQlFVVXNSVUZCUXl4SFFVRkRMRVZCUVVVN1VVRkROVVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE5VUXNRMEZCUXp0SlFWTk5MRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQll5eEZRVUZGTEZGQlFWa3NSVUZCUlN4RlFVRkRMRTlCUVU4c1IwRkJReXhGUVVGRkxFVkJRVU1zUjBGQlF5eEZRVUZGTzFGQlF6RkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZETEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOc1JTeERRVUZETzBsQlUwMHNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGakxFVkJRVVVzVVVGQldTeEZRVUZGTEVWQlFVTXNUMEZCVHl4SFFVRkRMRVZCUVVVc1JVRkJReXhIUVVGRExFVkJRVVU3VVVGRE0wUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROME1zVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTJ4RkxFTkJRVU03U1VGRlV5eE5RVUZOTEVOQlFVTXNSMEZCWXp0UlFVTXpRaXhQUVVGUExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTjJSU3hEUVVGRE8wbEJSVk1zVlVGQlZTeERRVUZETEVkQlFXTXNSVUZCUlN4TlFVRmhPMUZCUXpsRExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM1pDTEUxQlFVMHNUVUZCVFN4SFFVRTBReXhGUVVGRkxFTkJRVU03VVVGRE0wUXNUVUZCVFN4UFFVRlBMRWRCUVVjN1dVRkRXaXhyUWtGQmEwSXNSVUZCUlN4TFFVRkxPMWxCUTNwQ0xFMUJRVTBzUlVGQlRTeE5RVUZOTzFsQlEyeENMRkZCUVZFc1JVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVUdFpRVU40UWl4SlFVRkpMRVZCUVZFc1IwRkJSeXhEUVVGRExFbEJRVWs3V1VGRGNFSXNVVUZCVVN4RlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUk8xbEJRM2hDTEVsQlFVa3NSVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTVHRaUVVOd1FpeFJRVUZSTEVWQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUk8xbEJRMnBETEVsQlFVa3NSVUZCVVN4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRE8xbEJRM1JFTEU5QlFVOHNSVUZCVlN4RlFVRkZPMWxCUlc1Q0xFZEJRVWNzUlVGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRXRCUVVzc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVN1UwRkRNVVlzUTBGQlF6dFJRVU5HTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVGRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03VTBGQlJUdFJRVU51UlN4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBsQllWTXNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGbExFVkJRVVVzVTBGQmFVSXNSVUZCUlN4UFFVRlhMRVZCUVVVc1VVRkJZVHRSUVVONlJpeE5RVUZOTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTEZOQlFWTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOMlJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1MwRkJSeXhMUVVGTExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZUTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRE0wUTdVVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJWTXNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGbExFVkJRVVVzVTBGQmFVSXNSVUZCUlN4UlFVRmhPMUZCUXpWRkxFbEJRVWtzVDBGQk1FSXNRMEZCUXp0UlFVTXZRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeFJRVUZSTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMmhJTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRkRWM3WVVGQlRUdFpRVU5JTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVWRUxFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hqUVVGakxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGQlJUdFJRVVY2U1N4UFFVRlBMRkZCUVZFc1EwRkJRenRKUVVOd1FpeERRVUZETzBsQlJWTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGbExFVkJRVVVzVVVGQllUdFJRVU5zUkN4SlFVRkpPMWxCUTBFc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU0xUkN4SlFVRkpMRmxCUVZrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzFsQlEycEZMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVU3WjBKQlEyWXNUMEZCVHl4UlFVRlJMRU5CUVVNN1lVRkRia0k3YVVKQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8yZENRVU55UWl4WlFVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTnVReXhKUVVGSkxFbEJRVlVzUTBGQlF6dG5Ra0ZEWml4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMjlDUVVOMFF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZETTBVN2NVSkJRVTBzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdHZRa0ZETlVNc1NVRkJTU3hIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2FVSkJRekZGTzNGQ1FVRk5PMjlDUVVOSUxFMUJRVTBzZDBOQlFYZERMRmxCUVZrc1UwRkJVeXhQUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdhVUpCUTNKR08yZENRVU5FTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU42UkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdZVUZEY0VNN2FVSkJRVTA3WjBKQlEwZ3NUVUZCVFN4dlJVRkJiMFVzUTBGQlF6dGhRVU01UlR0VFFVTktPMUZCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3V1VGRFVDeE5RVUZOTEc5Q1FVRnZRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRPMU5CUTJwRU8wbEJRMHdzUTBGQlF6dEpRVVZUTEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJaU3hGUVVGRkxGRkJRV0U3VVVGRGRrUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRM0pDTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVFMFFpeEZRVUZGTEUxQlFYbENMRVZCUVVVc1JVRkJSVHRaUVVGSExFbEJRVWs3WjBKQlEyeEdMRk5CUVZNc1kwRkJZeXhEUVVGRExFTkJRVXM3YjBKQlEzcENMRTFCUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8yOUNRVU5vUkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhGUVVGRExHTkJRV01zUlVGQlF5eEZRVUZGTEVWQlFVTXNRMEZCUXp0dlFrRkRjRU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdkMEpCUXpsQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdkMEpCUXpORExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHMwUWtGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVGRk8yOUNRVU5xUkN4RFFVRkRMRU5CUVVNc1EwRkJRVHR2UWtGRFJpeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8yOUNRVU4wUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03YjBKQlIyeEVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdiMEpCUXpOQ0xFMUJRVTBzVVVGQlVTeEhRVUZaTzNkQ1FVTjBRaXhKUVVGSkxFVkJRV2RDTEVsQlFVazdkMEpCUTNoQ0xGRkJRVkVzUlVGQlJUczBRa0ZEVGl4SFFVRkhMRVZCUVdFc1IwRkJSenMwUWtGRGJrSXNUMEZCVHl4RlFVRlRMRTlCUVU4N05FSkJRM1pDTEUxQlFVMHNSVUZCVlN4UFFVRlBMRU5CUVVNc1RVRkJUVHMwUWtGRE9VSXNUVUZCVFN4RlFVRlZMRWxCUVVrc1EwRkJReXhOUVVGTk96UkNRVU16UWl4VlFVRlZMRVZCUVUwc1NVRkJTU3hEUVVGRExFMUJRVTA3TkVKQlF6TkNMR0ZCUVdFc1JVRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSVHMwUWtGRGJrUXNSMEZCUnl4RlFVRmhMRWxCUVVrc1EwRkJReXhYUVVGWE8zbENRVU51UXp0eFFrRkRTaXhEUVVGRE8yOUNRVU5HTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRGRFSXNRMEZCUXp0blFrRkRSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEdOQlFXTXNSVUZCUlN4RFFVRkRPMmRDUVVOcVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVVYyUkN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZETlVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRka1lzUjBGQlJ5eERRVUZETEZsQlFWa3NSMEZCUnl4SFFVRkhMRU5CUVVFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RFFVRkRPMmRDUVVNdlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMR05CUVdNc1EwRkJRenRuUWtGRE5VSXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVUVzUTBGQlF5eERRVUZCTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEZOQlFWTXNRMEZCUXl4RFFVRkRPMkZCUTNwRU8xbEJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdaMEpCUTFBc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEySTdVVUZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRVHRKUVVOUUxFTkJRVU03U1VGRlV5eG5Ra0ZCWjBJc1EwRkJReXhYUVVGclFqdFJRVU42UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGFFSXNTVUZCU1N4WFFVRlhMRXRCUVVjc1UwRkJVeXhGUVVGRk8xbEJRVVVzVjBGQlZ5eEhRVUZITEZkQlFWY3NRMEZCUXp0VFFVRkZPMkZCUTNSRU8xbEJRVVVzVjBGQlZ5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZCUlR0UlFVTnFSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM2hETEZGQlFWRXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRMnBDTEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTFJc1MwRkJTeXhOUVVGTk8yZENRVUZUTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1owSkJRVU1zVFVGQlRUdFpRVU4wUXl4TFFVRkxMRTlCUVU4c1EwRkJRenRaUVVOaUxFdEJRVXNzVDBGQlR5eERRVUZETzFsQlEySXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJVU3hOUVVGTk8xbEJRekZDTEV0QlFVc3NZVUZCWVR0blFrRkJSU3hSUVVGUExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRjRU1zUzBGQlN5eE5RVUZOTzNkQ1FVRkxMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03ZDBKQlFVTXNUVUZCVFR0dlFrRkRiRU1zUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCU3l4TlFVRk5PMjlDUVVOMFFpeExRVUZMTEN0RVFVRXJSQ3hEUVVGRExFTkJRVU1zVFVGQlRUdHZRa0ZETlVVc1MwRkJTeXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRMRTFCUVUwN2IwSkJRM0JGTEV0QlFVc3NiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eE5RVUZOTzI5Q1FVTm9ReXhMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETEUxQlFVMDdiMEpCUXpOQ0xFdEJRVXNzWTBGQll5eERRVUZETEVOQlFVTXNUVUZCVFR0dlFrRkRNMElzUzBGQlN5eHZRMEZCYjBNc1EwRkJReXhEUVVGRExFMUJRVTA3YjBKQlEycEVMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1YwRkJWeXhaUVVGWkxFTkJRVU1zUTBGQlF6dHBRa0ZET1VRN1owSkJRMFFzVFVGQlRUdFpRVU5PTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NWMEZCVnl4aFFVRmhMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWVExHZENRVUZuUWl4RFFVRkRMRkZCUVdVN1VVRkRkRU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelJTeERRVUZET3p0QlFYUlFZU3huUWtGQlVTeEhRVUZITzBsQlEzSkNMRkZCUVZFc1JVRkJSeXhEUVVGRExFbEJRVmNzUlVGQlJTeEZRVUZGTEVkQlFVY3NTVUZCU1R0UlFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0TFFVRkRPMGxCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3VVVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUVR0TFFVRkRMRU5CUVVFc1EwRkJRenRKUVVOc1JpeFRRVUZUTEVWQlFYZENMRk5CUVZNN1EwRkROME1zUTBGQlF5SjkiLCJleHBvcnQgKiBmcm9tICcuL1BhY2luZyc7XG5leHBvcnQgKiBmcm9tICcuL1JlcXVlc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9DaGVja3N1bSc7XG5leHBvcnQgKiBmcm9tICcuL0RhdGUnO1xuZXhwb3J0ICogZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9BcnJheVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNZMEZCYVVJc1ZVRkJWU3hEUVVGRE8wRkJRelZDTEdOQlFXbENMRmRCUVZjc1EwRkJRenRCUVVNM1FpeGpRVUZwUWl4WlFVRlpMRU5CUVVNN1FVRkRPVUlzWTBGQmFVSXNVVUZCVVN4RFFVRkRPMEZCUXpGQ0xHTkJRV2xDTEU5QlFVOHNRMEZCUXp0QlFVTjZRaXhqUVVGcFFpeFRRVUZUTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgZGF0ZSB9IGZyb20gJy4vRGF0ZSc7XG5jb25zdCBDT0xPUiA9IHtcbiAgICBjbGVhcjogJ2NvbG9yOiMwMDA7IGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDsgZm9udC13ZWlnaHQ6bm9ybWFsOycsXG4gICAgYm9sZDogJ2ZvbnQtd2VpZ2h0OmJvbGQ7JyxcbiAgICBkaW06ICcnLFxuICAgIHVuZGVyc2NvcmU6ICcnLFxuICAgIGJsaW5rOiAnJyxcbiAgICByZXZlcnNlOiAnJyxcbiAgICBoaWRkZW46ICcnLFxuICAgIGJsYWNrOiAnY29sb3I6IzAwMDsnLFxuICAgIHJlZDogJ2NvbG9yOiNmMDA7JyxcbiAgICBncmVlbjogJ2NvbG9yOiMwZjA7JyxcbiAgICB5ZWxsb3c6ICdjb2xvcjojZmYwOycsXG4gICAgYmx1ZTogJ2NvbG9yOiMwMGY7JyxcbiAgICBtYWdlbnRhOiAnY29sb3I6I2YwZjsnLFxuICAgIGN5YW46ICdjb2xvcjojMGZmOycsXG4gICAgd2hpdGU6ICdjb2xvcjojZmZmOycsXG4gICAgZGFya3JlZDogJ2NvbG9yOiM4MDA7JyxcbiAgICBkYXJrZ3JlZW46ICdjb2xvcjojMDgwOycsXG4gICAgZGFya3llbGxvdzogJ2NvbG9yOiM4ODA7JyxcbiAgICBkYXJrYmx1ZTogJ2NvbG9yOiMwMDg7JyxcbiAgICBkYXJrbWFnZW50YTogJ2NvbG9yOiM4MDg7JyxcbiAgICBkYXJrY3lhbjogJ2NvbG9yOiMwODg7JyxcbiAgICBncmF5OiAnY29sb3I6Izg4ODsnLFxuICAgIGJnQmxhY2s6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7JyxcbiAgICBiZ1JlZDogJ2JhY2tncm91bmQtY29sb3I6I2YwMDsnLFxuICAgIGJnR3JlZW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZjA7JyxcbiAgICBiZ1llbGxvdzogJ2JhY2tncm91bmQtY29sb3I6I2ZmMDsnLFxuICAgIGJnQmx1ZTogJ2JhY2tncm91bmQtY29sb3I6IzAwZjsnLFxuICAgIGJnTWFnZW50YTogJ2JhY2tncm91bmQtY29sb3I6I2YwZjsnLFxuICAgIGJnQ3lhbjogJ2JhY2tncm91bmQtY29sb3I6IzBmZjsnLFxuICAgIGJnV2hpdGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7J1xufTtcbmV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCkge1xuICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlcG9ydFByZWZpeCA9ICcnO1xuICAgICAgICB0aGlzLm1heExlbmd0aCA9IC0xO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJlZml4O1xuICAgIH1cbiAgICBzZXQgbWVzc2FnZUxlbmd0aChtYXgpIHsgdGhpcy5tYXhMZW5ndGggPSBtYXg7IH1cbiAgICBnZXQgbWVzc2FnZUxlbmd0aCgpIHsgcmV0dXJuIHRoaXMubWF4TGVuZ3RoOyB9XG4gICAgbGV2ZWwobmV3TGV2ZWxTeW0sIHNldEdsb2JhbExldmVsKSB7XG4gICAgICAgIGxldCBuZXdMZXZlbCA9IExvZy5sZXZlbHNbbmV3TGV2ZWxTeW1dIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgbGV0IG9sZExldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChuZXdMZXZlbFN5bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdMZXZlbCA9IG9sZExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0xldmVsU3ltID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydExldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKExvZy5sZXZlbHNbbmV3TGV2ZWxTeW1dKSB7XG4gICAgICAgICAgICBpZiAoc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBMb2cuZ2xvYmFsTGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBuZXcgJHtzZXRHbG9iYWxMZXZlbCA/ICdnbG9iYWwnIDogdGhpcy5yZXBvcnRQcmVmaXh9IGxvZyBsZXZlbCAke25ld0xldmVsLmRlc2MudG9VcHBlckNhc2UoKX0gKHdhcyAke29sZExldmVsLmRlc2MudG9VcHBlckNhc2UoKX0pYDtcbiAgICAgICAgICAgIChuZXdMZXZlbC5zeW0gPT09IG9sZExldmVsLnN5bSkgPyB0aGlzLmRlYnVnKG1zZykgOiB0aGlzLmluZm8obXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoYHVua293biBsZXZlbCAke25ld0xldmVsU3ltfTsgbG9nIGxldmVsIHJlbWFpbnMgJHtvbGRMZXZlbC5zeW19YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xldmVsLnN5bTtcbiAgICB9XG4gICAgZGVidWcobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuREVCVUcsIG1zZywgeyBjb2xvcjogWydncmF5J10gfSk7IH1cbiAgICB0cmFuc2llbnQobXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddLCBsZjogJ1xccicgfSk7IH1cbiAgICBwcm9ncmVzcyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2JsdWUnXSB9KTsgfVxuICAgIGluZm8obXNnKSB7IHJldHVybiB0aGlzLm91dChMb2cuSU5GTywgbXNnLCB7IGNvbG9yOiBbJ2RhcmtncmVlbiddIH0pOyB9XG4gICAgd2Fybihtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5XQVJOLCBtc2csIHsgY29sb3I6IFsnZGFya3llbGxvdycsICdib2xkJ10gfSk7IH1cbiAgICBlcnJvcihtc2cpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBbJ2RhcmtyZWQnLCAnYm9sZCddO1xuICAgICAgICBpZiAobXNnLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLm1lc3NhZ2UsIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cuc3RhY2ssIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1zZy5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0KExvZy5FUlJPUiwgbXNnLCB7IGNvbG9yOiBjb2xvciB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvdXQobHZsLCBtc2csIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGRlc2MgPSBMb2cubGV2ZWxzW2x2bF07XG4gICAgICAgIGNvbnN0IGZpbHRlckxldmVsID0gdGhpcy5yZXBvcnRMZXZlbCB8fCBMb2cuZ2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChkZXNjLmltcG9ydGFuY2UgPj0gZmlsdGVyTGV2ZWwuaW1wb3J0YW5jZSkge1xuICAgICAgICAgICAgbGV0IGxpbmU7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBtc2cpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGxpbmUgPSBtc2coKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBsaW5lID0gdGhpcy5pbnNwZWN0KG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZShMb2cuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiB0aGlzLm1heExlbmd0aCAmJiB0aGlzLm1heExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gYCR7bGluZS5zbGljZSgwLCB0aGlzLm1heExlbmd0aCAvIDIgLSAyKX0uLi4ke2xpbmUuc2xpY2UoLXRoaXMubWF4TGVuZ3RoIC8gMiArIDIpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGAke2xpbmV9XFxuJHttc2cuc3RhY2t9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGAke2RhdGVTdHJ9ICR7dGhpcy5yZXBvcnRQcmVmaXh9ICR7ZGVzYy5kZXNjfWA7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChvcHRpb25zLmNvbG9yLCBoZWFkZXIsIGxpbmUpO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUgKyAob3B0aW9ucy5sZiB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3V0cHV0KGNvbG9yLCBoZWFkZXIsIGxpbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHtoZWFkZXJ9JWMgJHtsaW5lfWAsIGNvbG9yLm1hcChjID0+IENPTE9SW2NdKS5qb2luKCcgJyksIENPTE9SWydjbGVhciddKTtcbiAgICB9XG4gICAgZm9ybWF0KGZtdFN0cikge1xuICAgICAgICBpZiAoZm10U3RyID09PSBudWxsKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZtdFN0cikge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBmbXRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExvZy5kYXRlRm9ybWF0O1xuICAgIH1cbiAgICBwcmVmaXgocHJmKSB7XG4gICAgICAgIGlmIChwcmYpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydFByZWZpeDtcbiAgICB9XG4gICAgY29uZmlnKGNmZykge1xuICAgICAgICBpZiAoY2ZnLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdChjZmcuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwoY2ZnLmxldmVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycyA9IGNmZy5jb2xvcnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zcGVjdChtc2csIHsgZGVwdGggPSAtMSwgaW5kZW50ID0gJyAgICcsIGNvbG9ycyA9IExvZy5JTkRFTlRfQ09MT1JTIH0gPSB7IGRlcHRoOiAwLCBpbmRlbnQ6ICcgICAnLCBjb2xvcnM6IExvZy5JTkRFTlRfQ09MT1JTIH0pIHtcbiAgICAgICAgZnVuY3Rpb24gX2luc3BlY3QobXNnLCBkZXB0aCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJyR7bXNnfSdgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBfaW5zcGVjdChlLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFtwcmVmaXgsIHBvc3RmaXgsIGxmLCBwb3N0SW5kZW50XSA9IGxvZy5nZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQsIGNvbG9ycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGB7JHtsZn1gICsgT2JqZWN0LmtleXMobXNnKS5tYXAoayA9PiBgJHtwcmVmaXh9JHtrfSR7cG9zdGZpeH06ICR7X2luc3BlY3QobXNnW2tdLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCArIGluZGVudCl9YCkuam9pbihgLCR7bGZ9YCkgKyBgJHtsZn0ke3Bvc3RJbmRlbnR9fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXNnLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9nID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF9pbnNwZWN0KG1zZywgKGRlcHRoICE9PSB1bmRlZmluZWQgJiYgZGVwdGggIT09IG51bGwgJiYgZGVwdGggPj0gMCkgPyBkZXB0aCA6IDk5OSwgMCwgJycpO1xuICAgIH1cbiAgICBnZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQsIGNvbG9ycykge1xuICAgICAgICBsZXQgY3N0YXJ0ID0gJycsIGNzdG9wID0gJycsIGxmID0gJ1xcbic7XG4gICAgICAgIGlmIChjb2xvcnMpIHtcbiAgICAgICAgICAgIGluZGVudCA9IGluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgICAgIGN1cnJJbmRlbnQgPSBjdXJySW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUltjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXV0gfHwgY29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF07XG4gICAgICAgICAgICBjc3RhcnQgPSBgPGI+PHNwYW4gc3R5bGU9JyR7Y29sb3J9Jz5gO1xuICAgICAgICAgICAgY3N0b3AgPSBgPC9zcGFuPjwvYj5gO1xuICAgICAgICAgICAgbGYgPSAnPGJyPic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtgJHtjdXJySW5kZW50fSR7aW5kZW50fSR7Y3N0YXJ0fWAsIGAke2NzdG9wfWAsIGNvbG9ycyA/ICc8YnI+JyA6ICdcXG4nLCBjdXJySW5kZW50XTtcbiAgICB9XG59XG5Mb2cuSU5ERU5UX0NPTE9SUyA9IFsnZGFya2JsdWUnLCAnZGFya2dyZWVuJywgJ2RhcmtyZWQnLCAnZGFya2N5YW4nLCAnZGFya3llbGxvdycsICdkYXJrbWFnZW50YSddO1xuTG9nLmRlZkRhdGVGb3JtYXQgPSAnJVlZWVklTU0lREQgJWhoOiVtbTolc3MuJWpqaic7XG5Mb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuTG9nLkRFQlVHID0gJ0RFQlVHJztcbkxvZy5JTkZPID0gJ0lORk8nO1xuTG9nLldBUk4gPSAnV0FSTic7XG5Mb2cuRVJST1IgPSAnRVJST1InO1xuTG9nLmxldmVscyA9IHtcbiAgICBbTG9nLkRFQlVHXTogeyBpbXBvcnRhbmNlOiAwLCBzeW06IExvZy5ERUJVRywgZGVzYzogJ0RFQlVHJyB9LFxuICAgIFtMb2cuSU5GT106IHsgaW1wb3J0YW5jZTogMSwgc3ltOiBMb2cuSU5GTywgZGVzYzogJ0lORk8nIH0sXG4gICAgW0xvZy5XQVJOXTogeyBpbXBvcnRhbmNlOiAyLCBzeW06IExvZy5XQVJOLCBkZXNjOiAnV0FSTicgfSxcbiAgICBbTG9nLkVSUk9SXTogeyBpbXBvcnRhbmNlOiAzLCBzeW06IExvZy5FUlJPUiwgZGVzYzogJ0VSUk9SJyB9XG59O1xuTG9nLmxvZyA9IG5ldyBMb2coJycpO1xuTG9nLmdsb2JhbExldmVsID0gTG9nLmxldmVsc1tMb2cuSU5GT107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMnh2Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRnZSa0VzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRkZCUVZFc1EwRkJRenRCUVVrNVFpeE5RVUZOTEV0QlFVc3NSMEZCUnp0SlFVTldMRXRCUVVzc1JVRkJUeXd5UkVGQk1rUTdTVUZGZGtVc1NVRkJTU3hGUVVGUkxHMUNRVUZ0UWp0SlFVTXZRaXhIUVVGSExFVkJRVk1zUlVGQlJUdEpRVU5rTEZWQlFWVXNSVUZCUlN4RlFVRkZPMGxCUTJRc1MwRkJTeXhGUVVGUExFVkJRVVU3U1VGRFpDeFBRVUZQTEVWQlFVc3NSVUZCUlR0SlFVTmtMRTFCUVUwc1JVRkJUU3hGUVVGRk8wbEJSV1FzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZEZWtJc1IwRkJSeXhGUVVGVExHRkJRV0U3U1VGRGVrSXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkRla0lzVFVGQlRTeEZRVUZOTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRGVrSXNUMEZCVHl4RlFVRkxMR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZEZWtJc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRmVrSXNUMEZCVHl4RlFVRkxMR0ZCUVdFN1NVRkRla0lzVTBGQlV5eEZRVUZITEdGQlFXRTdTVUZEZWtJc1ZVRkJWU3hGUVVGRkxHRkJRV0U3U1VGRGVrSXNVVUZCVVN4RlFVRkpMR0ZCUVdFN1NVRkRla0lzVjBGQlZ5eEZRVUZETEdGQlFXRTdTVUZEZWtJc1VVRkJVU3hGUVVGSkxHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkZla0lzVDBGQlR5eEZRVUZMTEhkQ1FVRjNRanRKUVVOd1F5eExRVUZMTEVWQlFVOHNkMEpCUVhkQ08wbEJRM0JETEU5QlFVOHNSVUZCU3l4M1FrRkJkMEk3U1VGRGNFTXNVVUZCVVN4RlFVRkpMSGRDUVVGM1FqdEpRVU53UXl4TlFVRk5MRVZCUVUwc2QwSkJRWGRDTzBsQlEzQkRMRk5CUVZNc1JVRkJSeXgzUWtGQmQwSTdTVUZEY0VNc1RVRkJUU3hGUVVGTkxIZENRVUYzUWp0SlFVTndReXhQUVVGUExFVkJRVXNzZDBKQlFYZENPME5CUTNaRExFTkJRVU03UVVGbFJpeE5RVUZOTEU5QlFVOHNSMEZCUnp0SlFYRkRXaXhaUVVGWkxFMUJRV0U3VVVGTVppeG5Ra0ZCVnl4SFFVRm5RaXhUUVVGVExFTkJRVU03VVVGRGNrTXNhVUpCUVZrc1IwRkJTU3hGUVVGRkxFTkJRVU03VVVGRGJrSXNZMEZCVXl4SFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMjVDTEZkQlFVMHNSMEZCVlN4SlFVRkpMRU5CUVVNN1VVRkZSaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVRkRMRU5CUVVNN1NVRlJNVVFzU1VGQlZ5eGhRVUZoTEVOQlFVTXNSMEZCVlN4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVYzVSQ3hKUVVGWExHRkJRV0VzUzBGQlN5eFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJiVUk1UXl4TFFVRkxMRU5CUVVNc1YwRkJiVUlzUlVGQlJTeGpRVUYxUWp0UlFVTnlSQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETVVRc1NVRkJTU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NWMEZCVnl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVNelFpeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMU5CUTNaQ08yRkJRVTBzU1VGQlNTeFhRVUZYTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUXpkQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NVMEZCVXl4RFFVRkRPMU5CUTJoRE8yRkJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8xbEJRMmhETEVsQlFVa3NZMEZCWXl4RlFVRkZPMmRDUVVGRkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN2FVSkJReTlDTzJkQ1FVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETzJGQlFVVTdXVUZEY0VRc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eGpRVUZqTEVOQlFVRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NZMEZCWXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUTBGQlF6dFpRVU5vU2l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTNKRk8yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeFhRVUZYTEhWQ1FVRjFRaXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVORUxFOUJRVThzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJVMDBzUzBGQlN5eERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJVeTlGTEZOQlFWTXNRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCVTJoSExGRkJRVkVzUTBGQlF5eEhRVUZQTEVsQlFWY3NUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVdGeVJpeEpRVUZKTEVOQlFVTXNSMEZCVHl4SlFVRlhMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGVGJFWXNTVUZCU1N4RFFVRkRMRWRCUVU4c1NVRkJWeXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWVXpSaXhMUVVGTExFTkJRVU1zUjBGQlR6dFJRVU5vUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEWWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTI1RUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGFrUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRE8xTkJRM1JDTzJGQlFVMDdXVUZEU0N4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnlSRHRKUVVOTUxFTkJRVU03U1VGaFV5eEhRVUZITEVOQlFVTXNSMEZCVlN4RlFVRkZMRWRCUVU4c1JVRkJSU3hQUVVGWE8xRkJRekZETEVsQlFVa3NTVUZCU1N4SFFVRmhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEY2tNc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRM2hFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1NVRkJTU3hYUVVGWExFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlF6TkRMRWxCUVVrc1NVRkJTU3hEUVVGRE8xbEJRMVFzVVVGQlR5eFBRVUZQTEVkQlFVY3NSVUZCUlR0blFrRkRaaXhMUVVGTExGVkJRVlU3YjBKQlFVVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8yOUNRVUZETEUxQlFVMDdaMEpCUTNKRExFdEJRVXNzVVVGQlVUdHZRa0ZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8yOUNRVUZETEUxQlFVMDdaMEpCUTI1RExFdEJRVXNzVVVGQlVTeERRVUZETzJkQ1FVTmtMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM0pETzFsQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZETEVOQlFVTXNSVUZCUlR0blFrRkRiRVFzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVFN1lVRkRja1k3V1VGRFJDeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dGhRVUZGTzFsQlEyeEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFZEJRVWNzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzFsQlF6bEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrTXNUMEZCVHl4SlFVRkpMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEpRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTJ4RE8xRkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVsVExFMUJRVTBzUTBGQlF5eExRVUZqTEVWQlFVVXNUVUZCWVN4RlFVRkZMRWxCUVZjN1VVRkRka1FzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRTFCUVUwc1RVRkJUU3hKUVVGSkxFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRelZHTEVOQlFVTTdTVUZaVFN4TlFVRk5MRU5CUVVNc1RVRkJZenRSUVVONFFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNN1UwRkJSVHRoUVVOMlJDeEpRVUZKTEUxQlFVMHNSVUZCVFR0WlFVRkZMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETzFOQlFVVTdVVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRlBUU3hOUVVGTkxFTkJRVU1zUjBGQlZ6dFJRVU55UWl4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NSMEZCUnl4RFFVRkRPMU5CUVVVN1VVRkRja01zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGVlRTeE5RVUZOTEVOQlFVTXNSMEZCY1VRN1VVRkRMMFFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4TFFVRkhMRk5CUVZNc1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRVVU3VVVGRGVFUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhMUVVGSExGTkJRVk1zUlVGQlJ6dFpRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZEZEVRc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0VFFVRkZPMGxCUXpkRUxFTkJRVU03U1VGcFFrMHNUMEZCVHl4RFFVRkRMRWRCUVU4c1JVRkJSU3hGUVVGRExFdEJRVXNzUjBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRWRCUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUjBGQlF5eEhRVUZITEVOQlFVTXNZVUZCWVN4RlFVRkRMRWRCUVVNc1JVRkJReXhMUVVGTExFVkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNSVUZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVWQlFVTTdVVUZEZUVnc1UwRkJVeXhSUVVGUkxFTkJRVU1zUjBGQlR5eEZRVUZGTEV0QlFWa3NSVUZCUlN4TFFVRlpMRVZCUVVVc1ZVRkJhVUk3V1VGRGNFVXNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hGUVVGblFqdG5Ra0ZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRoUVVGRk8xbEJRMnhFTEVsQlFVa3NSMEZCUnl4TFFVRkxMRk5CUVZNc1JVRkJWenRuUWtGQlJTeFBRVUZQTEZkQlFWY3NRMEZCUXp0aFFVRkZPMWxCUTNaRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NWVUZCVlN4RlFVRkhPMmRDUVVGRkxFOUJRVThzVlVGQlZTeERRVUZETzJGQlFVVTdXVUZEZEVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVczdaMEpCUVVVc1QwRkJUeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlFVVTdXVUZEZEVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVczdaMEpCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRWQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN2FVSkJRM1JFTzJkQ1FVTkVMRWxCUVVrc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUTNaQ0xFOUJRVThzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJTeXhGUVVGRExFVkJRVVVzUTBGQlFTeERRVUZETEVOQlFVTXNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVUVzUlVGQlJTeERRVUZCTEVOQlFVTXNRMEZCUVN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8ybENRVU16Unp0blFrRkRSQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNSVUZCUlN4RlFVRkZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRMMFlzVDBGQlR5eEpRVUZKTEVWQlFVVXNSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1MwRkRMMFFzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hIUVVGRExFMUJRVTBzUTBGRGVFUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhWUVVGVkxFZEJRVWNzUTBGQlF6dGhRVU01UXp0WlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6RkNMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZGYWtJc1QwRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNTMEZCU3l4TFFVRkhMRk5CUVZNc1NVRkJTU3hMUVVGTExFdEJRVWNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF5OUdMRU5CUVVNN1NVRkZVeXhoUVVGaExFTkJRVU1zVFVGQllTeEZRVUZGTEV0QlFWa3NSVUZCUlN4VlFVRnBRaXhGUVVGRkxFMUJRV1U3VVVGRGJrWXNTVUZCU1N4TlFVRk5MRWRCUVVjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOMlF5eEpRVUZKTEUxQlFVMHNSVUZCUlR0WlFVTlNMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVONFF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZGYUVRc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEY0VZc1RVRkJUU3hIUVVGSkxHMUNRVUZ0UWl4TFFVRkxMRWxCUVVrc1EwRkJRenRaUVVOMlF5eExRVUZMTEVkQlFVc3NZVUZCWVN4RFFVRkRPMWxCUTNoQ0xFVkJRVVVzUjBGQlVTeE5RVUZOTEVOQlFVTTdVMEZEY0VJN1VVRkRSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eFZRVUZWTEVkQlFVY3NUVUZCVFN4SFFVRkhMRTFCUVUwc1JVRkJSU3hGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVNNVJpeERRVUZET3p0QlFUVlNaMElzYVVKQlFXRXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVVzVTBGQlV5eEZRVUZGTEZWQlFWVXNSVUZCUlN4WlFVRlpMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGRk9VWXNhVUpCUVdFc1IwRkJSeXc0UWtGQk9FSXNRMEZCUXp0QlFVTXZReXhqUVVGVkxFZEJRVTBzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXp0QlFVZHlReXhUUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzBGQlIyaENMRkZCUVVrc1IwRkJTeXhOUVVGTkxFTkJRVU03UVVGSGFFSXNVVUZCU1N4SFFVRkxMRTFCUVUwc1EwRkJRenRCUVVkb1FpeFRRVUZMTEVkQlFVa3NUMEZCVHl4RFFVRkRPMEZCUjJRc1ZVRkJUU3hIUVVGSE8wbEJRM1JDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGTExFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPMGxCUXpsRUxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRk5MRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSeXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZETzBsQlF6ZEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZOTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUnl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRE8wbEJRemRFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGTExFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPME5CUTJwRkxFTkJRVU03UVVGSFdTeFBRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGSFppeGxRVUZYTEVkQlFXRXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAnLi9EYXRhRmlsdGVycyc7XG5pbXBvcnQgeyBMb2cgfSBmcm9tICdoc3V0aWwnO1xuY29uc3QgbG9nID0gbmV3IExvZygnRGF0YScpO1xuZXhwb3J0IHZhciBUeXBlcztcbihmdW5jdGlvbiAoVHlwZXMpIHtcbiAgICBUeXBlc1tcIm51bWJlclwiXSA9IFwibnVtYmVyXCI7XG4gICAgVHlwZXNbXCJuYW1lXCJdID0gXCJuYW1lXCI7XG4gICAgVHlwZXNbXCJkYXRlXCJdID0gXCJkYXRlXCI7XG4gICAgVHlwZXNbXCJjdXJyZW5jeVwiXSA9IFwiY3VycmVuY3lcIjtcbiAgICBUeXBlc1tcInBlcmNlbnRcIl0gPSBcInBlcmNlbnRcIjtcbn0pKFR5cGVzIHx8IChUeXBlcyA9IHt9KSk7XG5mdW5jdGlvbiB0b0RhdGUodmFsLCBsaW1pdFllYXIgPSAxOTcwKSB7XG4gICAgbGV0IGQ7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgaWYgKCFpc05hTihkLmdldFRpbWUoKSkpIHtcbiAgICAgICAgY29uc3QgciA9IG5ldyBSZWdFeHAoYFxcXFxkXFxcXGQke2QuZ2V0RnVsbFllYXIoKSAlIDEwMH1gLCAnZycpO1xuICAgICAgICBpZiAoIXZhbC5tYXRjaChyKSkge1xuICAgICAgICAgICAgY29uc3QgeXIgPSAxOTAwICsgZC5nZXRGdWxsWWVhcigpICUgMTAwO1xuICAgICAgICAgICAgZC5zZXRGdWxsWWVhcigoeXIgPCBsaW1pdFllYXIpID8geXIgKyAxMDAgOiB5cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGQ7XG59XG5mdW5jdGlvbiBjYXN0VmFsKHR5cGUsIHZhbCkge1xuICAgIGxldCByZXN1bHQgPSB2YWw7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ID0gdG9EYXRlKHZhbCk7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0LmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgY2FzZSAncGVyY2VudCc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5lbmRzV2l0aCgnJScpID8gbnVtIC8gMTAwIDogbnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgICAgcmVzdWx0ID0gKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSA/IHZhbC5yZXBsYWNlKC9bXmVFXFwrXFwtXFwuXFxkXS9nLCAnJykgOiB2YWw7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXJzZUZsb2F0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gJycgKyB2YWw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmREb21haW4oZGF0YSwgY29sLCB0eXBlLCBkb21haW4pIHtcbiAgICBpZiAoZG9tYWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZG9tYWluID0gW107XG4gICAgfVxuICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb21haW5bMF0gPSAwO1xuICAgICAgICBkb21haW5bMV0gPSBkYXRhLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgZXhwYW5kO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubmFtZTpcbiAgICAgICAgICAgICAgICBleHBhbmQgPSAocikgPT4gZG9tYWluLmluZGV4T2YoJycgKyByW2NvbF0pIDwgMCA/IGRvbWFpbi5wdXNoKCcnICsgcltjb2xdKSA6ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUeXBlcy5kYXRlOlxuICAgICAgICAgICAgICAgIGV4cGFuZCA9IChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdG9EYXRlKHJbY29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9tYWluWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblsxXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA8IGRvbWFpblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbWFpblswXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2ID4gZG9tYWluWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFR5cGVzLm51bWJlcjpcbiAgICAgICAgICAgIGNhc2UgVHlwZXMucGVyY2VudDpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXhwYW5kID0gKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHYgPSBwYXJzZUZsb2F0KHJbY29sXS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbWFpblswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMF0gPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21haW5bMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzFdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2IDwgZG9tYWluWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluWzBdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYgPiBkb21haW5bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW5bMV0gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZXhwYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbWFpbjtcbn1cbmZ1bmN0aW9uIGZpbmRUeXBlKHZhbCkge1xuICAgIGlmICghdmFsIHx8IHZhbCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IHN0clZhbCA9IHZhbDtcbiAgICBpZiAoJycgKyBwYXJzZUZsb2F0KHN0clZhbCkgPT09IHN0clZhbCkge1xuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgfVxuICAgIGlmIChzdHJWYWwuc3RhcnRzV2l0aCgnJCcpICYmICFpc05hTihwYXJzZUZsb2F0KHN0clZhbC5zbGljZSgxKSkpKSB7XG4gICAgICAgIHJldHVybiAnY3VycmVuY3knO1xuICAgIH1cbiAgICBpZiAoc3RyVmFsLmVuZHNXaXRoKCclJykgJiYgIWlzTmFOKHBhcnNlRmxvYXQoc3RyVmFsKSkpIHtcbiAgICAgICAgcmV0dXJuICdwZXJjZW50JztcbiAgICB9XG4gICAgaWYgKCFpc05hTih0b0RhdGUoc3RyVmFsKS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgfVxuICAgIHN3aXRjaCAoc3RyVmFsLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcIm51bGxcIjogYnJlYWs7XG4gICAgICAgIGNhc2UgXCIjcmVmIVwiOiBicmVhaztcbiAgICAgICAgZGVmYXVsdDogaWYgKHZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25hbWUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGNsYXNzIERhdGEge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMubWV0YSA9IFtdO1xuICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhKGRhdGFzZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIGltcG9ydERhdGEoZGF0YXNldCkge1xuICAgICAgICB0aGlzLm5hbWUgPSAnZGF0YScgKyAoTWF0aC5yb3VuZCgxMDAwICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgaWYgKGRhdGFzZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gZGF0YXNldFswXTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gZGF0YXNldC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEocm93cywgbmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhc2V0LnJvd3MsIGRhdGFzZXQuY29sTmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IHRoaXMuZ2V0RGF0YSgpLFxuICAgICAgICAgICAgY29sTmFtZXM6IHRoaXMuY29sTmFtZXMoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICBnZXRDb2x1bW4oY29sKSB7XG4gICAgICAgIGNvbnN0IGNuID0gdGhpcy5jb2xOdW1iZXIoY29sKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5tYXAoKHJvdykgPT4gcm93W2NuXSk7XG4gICAgfVxuICAgIGNvbEFkZChjb2wpIHtcbiAgICAgICAgbGV0IG0gPSB0aGlzLmdldE1ldGEoY29sKTtcbiAgICAgICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbSA9IHRoaXMubWV0YVtjb2xdID0ge307XG4gICAgICAgICAgICBtLm5hbWUgPSBjb2w7XG4gICAgICAgICAgICBtLmNvbHVtbiA9IHRoaXMubWV0YS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLm1ldGEucHVzaChtKTtcbiAgICAgICAgICAgIG0uY2FzdCA9IGZhbHNlO1xuICAgICAgICAgICAgbS5hY2Nlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cbiAgICBjb2xJbml0aWFsaXplKGNvbCwgaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlb2YgaW5pdGlhbGl6ZXIgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIGxldCBjbiA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIWNuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjbiA9IHRoaXMuY29sQWRkKGNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGNvbHVtbiAke2NvbH0gZG9lcyBub3QgZXhpc3QgaW4gRGF0YWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHJvd1tjbi5jb2x1bW5dID0gZm4gPyBpbml0aWFsaXplcihyb3dbY24uY29sdW1uXSwgcm93SW5kZXgsIHJvdykgOiBpbml0aWFsaXplcik7XG4gICAgICAgIHJldHVybiBjbi5jb2x1bW47XG4gICAgfVxuICAgIGNvbE51bWJlcihjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtLmFjY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBtLmNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb2xOYW1lKGNvbCkge1xuICAgICAgICB2YXIgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbS5hY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBtLm5hbWU7XG4gICAgfVxuICAgIGNvbE5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhLm1hcCgobSkgPT4gbS5uYW1lKTtcbiAgICB9XG4gICAgY29sVHlwZShjb2wpIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICByZXR1cm4gbWV0YSA/IG1ldGEudHlwZXNbMF0udHlwZSA6ICduYW1lJztcbiAgICB9XG4gICAgZmluZERvbWFpbihjb2wsIGRvbWFpbikge1xuICAgICAgICByZXR1cm4gZmluZERvbWFpbih0aGlzLmRhdGEsIHRoaXMuY29sTnVtYmVyKGNvbCksIHRoaXMuY29sVHlwZShjb2wpLCBkb21haW4pO1xuICAgIH1cbiAgICBjYXN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy5tZXRhLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGMuY29sdW1uO1xuICAgICAgICAgICAgaWYgKCFjLmNhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgocm93KSA9PiByb3dbY29sXSA9IGNhc3RWYWwoYy50eXBlc1swXS50eXBlLCByb3dbY29sXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYy5jYXN0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcihjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcih0aGlzLCBjb25kaXRpb24pO1xuICAgIH1cbiAgICBzb3J0KHNvcnRGbiwgY29sKSB7XG4gICAgICAgIGxldCBmbiA9IHNvcnRGbjtcbiAgICAgICAgaWYgKCFjb2wpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zb3J0KGZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbCA9IHRoaXMuY29sTnVtYmVyKGNvbCk7XG4gICAgICAgICAgICBpZiAoc29ydEZuID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgICAgICAgICAgICBmbiA9IChhLCBiKSA9PiAoYiA+IGEpID8gMSA6ICgoYiA8IGEpID8gLTEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3J0Rm4gPT09ICdhc2NlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgZm4gPSAoYSwgYikgPT4gKGIgPCBhKSA/IDEgOiAoKGIgPiBhKSA/IC0xIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGEuc29ydCgocjEsIHIyKSA9PiBmbihyMVtjb2xdLCByMltjb2xdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG1hcChtYXBGbiwgY29sKSB7XG4gICAgICAgIGNvbnN0IG5vb3AgPSAodmFsKSA9PiB2YWw7XG4gICAgICAgIGNvbnN0IGN1bXVsYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgICAgICByZXR1cm4gKHZhbCwgaSkgPT4geyBzdW0gKz0gK3ZhbDsgcmV0dXJuIHN1bTsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gZ2V0Rm4oKSB7XG4gICAgICAgICAgICBsZXQgZm47XG4gICAgICAgICAgICBzd2l0Y2ggKG1hcEZuKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY3VtdWxhdGUnOlxuICAgICAgICAgICAgICAgICAgICBmbiA9IGN1bXVsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vb3AnOlxuICAgICAgICAgICAgICAgICAgICBmbiA9IG5vb3A7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZuID0gbWFwRm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZuID0gZ2V0Rm4oKTtcbiAgICAgICAgY29uc3QgYyA9IGNvbCA/IHRoaXMuY29sTnVtYmVyKGNvbCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgRGF0YSh7XG4gICAgICAgICAgICBjb2xOYW1lczogdGhpcy5jb2xOYW1lcygpLFxuICAgICAgICAgICAgcm93czogdGhpcy5kYXRhLm1hcCgocm93LCByb3dJbmRleCwgcm93cykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd1tjXSA9IGZuKHJvd1tjXSwgYywgcm93SW5kZXgsIHJvd3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm93c1tyb3dJbmRleF0gPSBmbihyb3csIHJvd0luZGV4LCByb3dzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5nZXROYW1lKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGdldE1ldGEoY29sKSB7XG4gICAgICAgIGlmICghdGhpcy5tZXRhW2NvbF0pIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXRhW2NvbF0uYWNjZXNzZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhW2NvbF07XG4gICAgfVxuICAgIHNldERhdGEocm93cywgbmFtZXMsIGF1dG9UeXBlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm1ldGEgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhID0gcm93cy5zbGljZSgpO1xuICAgICAgICBpZiAobmFtZXMgJiYgbmFtZXMuZm9yRWFjaCkge1xuICAgICAgICAgICAgbmFtZXMuZm9yRWFjaCgoY29sKSA9PiB0aGlzLmNvbEFkZChjb2wpKTtcbiAgICAgICAgICAgIGlmIChhdXRvVHlwZSkge1xuICAgICAgICAgICAgICAgIG5hbWVzLmZvckVhY2goKGNvbCkgPT4gdGhpcy5maW5kVHlwZXMoY29sKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXN0RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9nLndhcm4oYGludmFsaWQgbmFtZXMgc2V0RGF0YTpcXG4ke2xvZy5pbnNwZWN0KG5hbWVzLCB7IGRlcHRoOiA1IH0pfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRUeXBlcyhjb2wpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWV0YShjb2wpO1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhEYXRhLnR5cGUpLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRzID0geyB0eXBlOiBEYXRhLnR5cGVbdF0sIGNvdW50OiAwIH07XG4gICAgICAgICAgICB0eXBlcy5wdXNoKHRzKTtcbiAgICAgICAgICAgIHR5cGVzW0RhdGEudHlwZVt0XV0gPSB0cztcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IHYgb2YgdGhpcy5hbGxSb3dzKGNvbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBmaW5kVHlwZSh2KTtcbiAgICAgICAgICAgIGlmICh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdHlwZXNbdF0uY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0eXBlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS50eXBlID09PSAnY3VycmVuY3knICYmIGEuY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIudHlwZSA9PT0gJ2N1cnJlbmN5JyAmJiBiLmNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGIuY291bnQgLSBhLmNvdW50O1xuICAgICAgICB9KTtcbiAgICAgICAgbS50eXBlcyA9IHR5cGVzO1xuICAgICAgICByZXR1cm4gdHlwZXNbMF0udHlwZTtcbiAgICB9XG4gICAgKmFsbFJvd3MoY29sdW1uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbE51bWJlcihjb2x1bW4pO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuZGF0YS5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5kYXRhW3JdW2NdO1xuICAgICAgICB9XG4gICAgfVxufVxuRGF0YS50eXBlID0ge1xuICAgIG51bWJlcjogJ251bWJlcicsXG4gICAgbmFtZTogJ25hbWUnLFxuICAgIGRhdGU6ICdkYXRlJyxcbiAgICBjdXJyZW5jeTogJ2N1cnJlbmN5JyxcbiAgICBwZXJjZW50OiAncGVyY2VudCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFlTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5RVlYUmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVsQkxFOUJRVThzUlVGQllTeE5RVUZOTEVWQlFVVXNUVUZCVFN4bFFVRmxMRU5CUVVNN1FVRkRiRVFzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRnZRaXhSUVVGUkxFTkJRVU03UVVGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRV2xGZUVVc1RVRkJUU3hEUVVGT0xFbEJRVmtzUzBGWFdEdEJRVmhFTEZkQlFWa3NTMEZCU3p0SlFVVlVMREJDUVVGeFFpeERRVUZCTzBsQlJYSkNMSE5DUVVGdFFpeERRVUZCTzBsQlJXNUNMSE5DUVVGdFFpeERRVUZCTzBsQlJXNUNMRGhDUVVGMVFpeERRVUZCTzBsQlJYWkNMRFJDUVVGelFpeERRVUZCTzBGQlF6bENMRU5CUVVNc1JVRllWeXhMUVVGTExFdEJRVXdzUzBGQlN5eFJRVmRvUWp0QlFXRkVMRk5CUVZNc1RVRkJUU3hEUVVGRExFZEJRVmNzUlVGQlJTeFRRVUZUTEVkQlFVTXNTVUZCU1R0SlFVTjJReXhKUVVGSkxFTkJRVTBzUTBGQlF6dEpRVU5ZTEVsQlFVa3NSMEZCUnl4WlFVRlpMRWxCUVVrc1JVRkJSVHRSUVVGRkxFOUJRV0VzUjBGQlJ5eERRVUZETzB0QlFVVTdTVUZET1VNc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVU3VVVGRGNrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETlVRc1NVRkJTU3hEUVVGVkxFZEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRla0lzVFVGQlRTeEZRVUZGTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTTdXVUZEZUVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGFrUTdTMEZEU2p0SlFVTkVMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRMklzUTBGQlF6dEJRVk5FTEZOQlFWTXNUMEZCVHl4RFFVRkRMRWxCUVZNc1JVRkJSU3hIUVVGWE8wbEJRMjVETEVsQlFVa3NUVUZCVFN4SFFVRlhMRWRCUVVjc1EwRkJRenRKUVVONlFpeFJRVUZSTEVsQlFVa3NSVUZCUlR0UlFVTldMRXRCUVVzc1RVRkJUVHRaUVVOUUxFbEJRVWtzUjBGQlJ5eFpRVUZaTEVsQlFVa3NSVUZCUlR0blFrRkJSU3hQUVVGUExFZEJRVWNzUTBGQlF6dGhRVUZGTzFsQlEzaERMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEY2tJc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVN1owSkJRVVVzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVRkZPMWxCUXk5RExFOUJRVThzVFVGQlRTeERRVUZETzFGQlEyeENMRXRCUVVzc1UwRkJVenRaUVVOV0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVONlFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlF6VkNMRTlCUVdkQ0xFZEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRoUVVOeVJEdHBRa0ZCVFR0blFrRkRTQ3hQUVVGUExFZEJRVWNzUTBGQlF6dGhRVU5rTzFGQlIwd3NTMEZCU3l4VlFVRlZPMWxCUlZnc1RVRkJUU3hIUVVGSExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVWb1JpeExRVUZMTEZGQlFWRTdXVUZEVkN4SlFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZCUlN4TlFVRk5MRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlFVVTdXVUZEYUVVc1NVRkJTU3hMUVVGTExFTkJRVk1zVFVGQlRTeERRVUZETEVWQlFVVTdaMEpCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dGhRVUZGTzFsQlF6ZERMRTlCUVU4c1RVRkJUU3hEUVVGRE8xRkJRMnhDTEU5QlFVOHNRMEZCUXl4RFFVRlJMRTlCUVU4c1JVRkJSU3hIUVVGRExFZEJRVWNzUTBGQlF6dExRVU5xUXp0QlFVTk1MRU5CUVVNN1FVRkZSQ3hOUVVGTkxGVkJRVlVzVlVGQlZTeERRVUZETEVsQlFXVXNSVUZCUlN4SFFVRlZMRVZCUVVVc1NVRkJVeXhGUVVGRkxFMUJRV0U3U1VGRE5VVXNTVUZCU1N4TlFVRk5MRXRCUVVjc1UwRkJVeXhGUVVGRk8xRkJRVVVzVFVGQlRTeEhRVUZYTEVWQlFVVXNRMEZCUXp0TFFVRkZPMGxCUTJoRUxFbEJRVWtzUjBGQlJ5eExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTnVRaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhEUVVGRE8wdEJRemRDTzFOQlFVMDdVVUZEU0N4SlFVRkpMRTFCUVRCQ0xFTkJRVU03VVVGREwwSXNVVUZCVHl4SlFVRkpMRVZCUVVVN1dVRkRWQ3hMUVVGTExFdEJRVXNzUTBGQlF5eEpRVUZKTzJkQ1FVTllMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFWa3NUVUZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQllTeE5RVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU0xUnl4TlFVRk5PMWxCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zU1VGQlNUdG5Ra0ZEV0N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGVExFVkJRVVVzUlVGQlJUdHZRa0ZEYmtJc1NVRkJTU3hEUVVGRExFZEJRVkVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0xUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlJ5eFRRVUZUTEVWQlFVVTdkMEpCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0eFFrRkJSVHR2UWtGRE4wTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVWNzVTBGQlV5eEZRVUZGTzNkQ1FVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUVVVN2IwSkJRemRETEVsQlFVa3NRMEZCUXl4TFFVRkhMRk5CUVZNc1NVRkJTU3hEUVVGRExFdEJRVWNzU1VGQlNTeEZRVUZGTzNkQ1FVTXpRaXhKUVVGSkxFTkJRVU1zUjBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN05FSkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQ1UWtGQlJUczJRa0ZET1VJc1NVRkJTU3hEUVVGRExFZEJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPelJDUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2VVSkJRVVU3Y1VKQlF6TkRPMmRDUVVOTUxFTkJRVU1zUTBGQlF6dG5Ra0ZEUml4TlFVRk5PMWxCUTFZc1MwRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETzFsQlEyeENMRXRCUVVzc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU51UWp0blFrRkRTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlR0dlFrRkRia0lzU1VGQlNTeERRVUZETEVkQlFWVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVNM1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFVkJRVVU3ZDBKQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZCUlR0dlFrRkROME1zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVjc1UwRkJVeXhGUVVGRk8zZENRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03Y1VKQlFVVTdiMEpCUXpkRExFbEJRVWtzUTBGQlF5eExRVUZITEZOQlFWTXNTVUZCU1N4RFFVRkRMRXRCUVVjc1NVRkJTU3hGUVVGRk8zZENRVU16UWl4SlFVRkpMRU5CUVVNc1IwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdORUpCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0NVFrRkJSVHMyUWtGRE9VSXNTVUZCU1N4RFFVRkRMRWRCUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGT3pSQ1FVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUVVVN2NVSkJRek5ETzJkQ1FVTk1MRU5CUVVNc1EwRkJRenRUUVVOVU8xRkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRMUVVONFFqdEpRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJ4Q0xFTkJRVU03UVVGaFJDeFRRVUZUTEZGQlFWRXNRMEZCUXl4SFFVRlhPMGxCUTNwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4TFFVRkhMRVZCUVVVc1JVRkJSVHRSUVVGRkxFOUJRVThzU1VGQlNTeERRVUZETzB0QlFVVTdTVUZEZEVNc1NVRkJTU3hIUVVGSExGbEJRVmtzU1VGQlNTeEZRVUZOTzFGQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1MwRkJSVHRKUVVNdlF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVGRkxFOUJRVThzVVVGQlVTeERRVUZETzB0QlFVVTdTVUZIYWtRc1RVRkJUU3hOUVVGTkxFZEJRVmNzUjBGQlJ5eERRVUZETzBsQlF6TkNMRWxCUVVrc1JVRkJSU3hIUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4TlFVRk5MRVZCUVN0Q08xRkJRVVVzVDBGQlR5eFJRVUZSTEVOQlFVTTdTMEZCUlR0SlFVTjJSaXhKUVVGSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlFVVXNUMEZCVHl4VlFVRlZMRU5CUVVNN1MwRkJSVHRKUVVONlJpeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRV0U3VVVGQlJTeFBRVUZQTEZOQlFWTXNRMEZCUXp0TFFVRkZPMGxCUTNoR0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFUWkNPMUZCUVVVc1QwRkJUeXhOUVVGTkxFTkJRVU03UzBGQlJUdEpRVkZ1Uml4UlFVRlJMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJUdFJRVU14UWl4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTA3VVVGRGJrSXNTMEZCU3l4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTk8xRkJRM0JDTEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVWQlFVVTdXVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRUUVVGRk8wdEJRMmhFTzBsQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1FVRkRhRUlzUTBGQlF6dEJRVTlFTEUxQlFVMHNUMEZCVHl4SlFVRkpPMGxCYTBKaUxGbEJRVmtzVDBGQk1FSTdVVUY1VXpsQ0xGTkJRVWtzUjBGQmFVSXNSVUZCUlN4RFFVRkRPMUZCUTNoQ0xGTkJRVWtzUjBGQmFVSXNSVUZCUlN4RFFVRkRPMUZCZWxNMVFpeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZCUlR0SlFVTTVReXhEUVVGRE8wbEJTMDBzVDBGQlR6dFJRVU5XTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlRVMHNWVUZCVlN4RFFVRkRMRTlCUVhsQ08xRkJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1RVRkJUU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTndSQ3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU5VTEVsQlFVa3NUMEZCVHl4WlFVRlpMRXRCUVVzc1JVRkJSVHRuUWtGRE1VSXNUVUZCVFN4TFFVRkxMRWRCUVdFc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0aFFVTTNRanRwUWtGQlRUdG5Ra0ZEU0N4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVU3YjBKQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzJsQ1FVRkZPMmRDUVVNdlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTJoRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlMwMHNUVUZCVFR0UlFVTlVMRTlCUVU4N1dVRkRTQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTndRaXhSUVVGUkxFVkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0VFFVTXpRaXhEUVVGRE8wbEJRMDRzUTBGQlF6dEpRVXROTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVMU5MRk5CUVZNc1EwRkJReXhIUVVGdFFqdFJRVU5vUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXk5Q0xFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGWExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMjVFTEVOQlFVTTdTVUZSVFN4TlFVRk5MRU5CUVVNc1IwRkJWVHRSUVVOd1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU5xUWl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCWlN4RlFVRkZMRU5CUVVNN1dVRkRjRU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCU3l4SFFVRkhMRU5CUVVNN1dVRkRaaXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRelZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeENMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVThzUzBGQlN5eERRVUZETzFsQlEyNUNMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETzFOQlEzUkNPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQldVMHNZVUZCWVN4RFFVRkRMRWRCUVcxQ0xFVkJRVVVzVjBGQk1FSTdVVUZEYUVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzVDBGQlR5eFhRVUZYTEV0QlFVc3NWVUZCVlN4RFFVRkRPMUZCUXpkRExFbEJRVWtzUlVGQlJTeEhRVUZqTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOTUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRVVU3YVVKQlEyeEVPMmRDUVVGRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMSGxDUVVGNVFpeERRVUZETEVOQlFVTTdZVUZCUlR0VFFVTndSVHRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJWeXhGUVVGRkxGRkJRV1VzUlVGQlJTeEZRVUZGTEVOQlF6TkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJWU3hYUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRlZMRmRCUVZjc1EwRkRia2NzUTBGQlF6dFJRVU5HTEU5QlFVOHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlVVMHNVMEZCVXl4RFFVRkRMRWRCUVcxQ08xRkJRMmhETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJUdFpRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUVVVN1lVRkRlRUk3V1VGRFJDeERRVUZETEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOc1FpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkRia0k3U1VGRFRDeERRVUZETzBsQlVVMHNUMEZCVHl4RFFVRkRMRWRCUVcxQ08xRkJRemxDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETVVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlJUdFpRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMU5CUVVVN1VVRkROMElzUTBGQlF5eERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGTlRTeFJRVUZSTzFGQlExZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFWa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNUVMRU5CUVVNN1NVRlJUU3hQUVVGUExFTkJRVU1zUjBGQmJVSTdVVUZET1VJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNdlFpeFBRVUZQTEVsQlFVa3NRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCVTAwc1ZVRkJWU3hEUVVGRExFZEJRVzlDTEVWQlFVVXNUVUZCWXp0UlFVTnNSQ3hQUVVGUExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRE8wbEJSVTBzVVVGQlVUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQldTeEZRVUZGTEVWQlFVVTdXVUZETDBJc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlR0blFrRkRWQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVZjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNKR08xbEJRMFFzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRiRUlzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRPMGxCVTAwc1RVRkJUU3hEUVVGRExGTkJRVzFDTzFGQlF6ZENMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJaME5OTEVsQlFVa3NRMEZCUXl4TlFVRnZRaXhGUVVGRkxFZEJRVzlDTzFGQlEyeEVMRWxCUVVrc1JVRkJSU3hIUVVGWExFMUJRVTBzUTBGQlF6dFJRVU40UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRk8xbEJRMDRzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGRFSTdZVUZCVFR0WlFVTklMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFbEJRVWtzVFVGQlRTeExRVUZMTEZsQlFWa3NSVUZCUlR0blFrRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZMTEVWQlFVVXNRMEZCU3l4RlFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFTkJRVU03WVVGQlJUdFpRVU01UlN4SlFVRkpMRTFCUVUwc1MwRkJTeXhYUVVGWExFVkJRVWM3WjBKQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJTeXhGUVVGRkxFTkJRVXNzUlVGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUVVVN1dVRkRPVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGUkxFVkJRVVVzUlVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGFFVTdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQk5FTk5MRWRCUVVjc1EwRkJReXhMUVVFeVFpeEZRVUZGTEVkQlFXOUNPMUZCUTNoRUxFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNSMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRE9VSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRMnhDTEVsQlFVa3NSMEZCUnl4SFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOV0xFOUJRVThzUTBGQlF5eEhRVUZWTEVWQlFVVXNRMEZCVVN4RlFVRkZMRVZCUVVVc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUlN4RFFVRkRMRU5CUVVNN1VVRkRSaXhUUVVGVExFdEJRVXM3V1VGRFZpeEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTlFMRkZCUVZFc1MwRkJTeXhGUVVGRk8yZENRVU5ZTEV0QlFVc3NWVUZCVlR0dlFrRkJSU3hGUVVGRkxFZEJRVWNzVVVGQlVTeEZRVUZGTEVOQlFVTTdiMEpCUVVNc1RVRkJUVHRuUWtGRGVFTXNTMEZCU3l4TlFVRk5PMjlDUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdiMEpCUVVNc1RVRkJUVHRuUWtGRGJFTXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hIUVVGdFFpeExRVUZMTEVOQlFVTTdZVUZETDBNN1dVRkRSQ3hQUVVGUExFVkJRVVVzUTBGQlF6dFJRVU5rTEVOQlFVTTdVVUZGUkN4SlFVRkpMRVZCUVVVc1IwRkJSeXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXp0WlFVTnNRaXhSUVVGUkxFVkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTjRRaXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGVExFVkJRVVVzVVVGQlpTeEZRVUZGTEVsQlFWa3NSVUZCUlN4RlFVRkZPMmRDUVVNMVJDeEpRVUZKTEVOQlFVTXNSVUZCUlR0dlFrRkRTQ3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFWY3NSVUZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU51UkR0eFFrRkJUVHR2UWtGRFNDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVdNc1JVRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRM2hFTzJkQ1FVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8xbEJRMllzUTBGQlF5eERRVUZETzFsQlEwWXNTVUZCU1N4RlFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3VTBGRGRFSXNRMEZCUXl4RFFVRkRPMUZCUTBnc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFWTlBMRTlCUVU4c1EwRkJReXhIUVVGdFFqdFJRVVV2UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8xTkJRVVU3VVVGRE1VTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXk5Q0xFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlUwOHNUMEZCVHl4RFFVRkRMRWxCUVdNc1JVRkJSU3hMUVVGakxFVkJRVVVzVVVGQlVTeEhRVUZETEVsQlFVazdVVUZEZWtRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWml4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFdEJRVXNzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTNoQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRlZMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1JDeEpRVUZKTEZGQlFWRXNSVUZCUlR0blFrRkRWaXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRoUVVOdVFqdFRRVU5LTzJGQlFVMDdXVUZEU0N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExESkNRVUV5UWl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZETEV0QlFVc3NSVUZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40UlR0SlFVTk1MRU5CUVVNN1NVRlRUeXhUUVVGVExFTkJRVU1zUjBGQmJVSTdVVUZEYWtNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNMVFpeE5RVUZOTEV0QlFVc3NSMEZCWjBJc1JVRkJSU3hEUVVGRE8xRkJRemxDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRk8xbEJRM2hETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzFsQlF6VkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEWml4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8yZENRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dGhRVUZGTzFOQlEzaERPMUZCUTBRc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZUTEVOQlFWa3NSVUZCUlN4RFFVRlpPMWxCUXpGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCUnl4VlFVRlZMRWxCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlF5eERRVUZETEVWQlFVVTdaMEpCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVUZGTzFsQlEyeEVMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUzBGQlJ5eFZRVUZWTEVsQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVU3WjBKQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1lVRkJSVHRaUVVOcVJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOSUxFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUTJoQ0xFOUJRVThzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlRVOHNRMEZCUlN4UFFVRlBMRU5CUVVNc1RVRkJjMEk3VVVGRGNFTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRia01zVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzcENPMGxCUTB3c1EwRkJRenM3UVVFMVdHRXNVMEZCU1N4SFFVRkhPMGxCUldwQ0xFMUJRVTBzUlVGQldTeFJRVUZSTzBsQlJURkNMRWxCUVVrc1JVRkJZeXhOUVVGTk8wbEJSWGhDTEVsQlFVa3NSVUZCWXl4TlFVRk5PMGxCUlhoQ0xGRkJRVkVzUlVGQlZTeFZRVUZWTzBsQlJUVkNMRTlCUVU4c1JVRkJWeXhUUVVGVE8wTkJSVGxDTEVOQlFVTWlmUT09IiwiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vRGF0YSc7XG5pbXBvcnQgeyBMb2cgfSBmcm9tICdoc3V0aWwnO1xuY29uc3QgbG9nID0gbmV3IExvZygnRGF0YUZpbHRlcnMnKTtcbmZ1bmN0aW9uIHJlc29sdmVUZXJtaW5hbENvbmRpdGlvbihuYW1lLCB2YWwsIHJvdywgY29sTnVtYmVyKSB7XG4gICAgY29uc3QgY29sID0gY29sTnVtYmVyKG5hbWUpO1xuICAgIGNvbnN0IHZhbElzRnVuY3Rpb24gPSAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgY29uc3QgdmFsSXNBcnJheSA9ICgodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpICYmICh2YWwubGVuZ3RoICE9PSB1bmRlZmluZWQpKTtcbiAgICBpZiAoaXNOYU4oY29sKSkge1xuICAgICAgICBsb2cud2FybihgY29sdW1uIG5hbWUgJyR7bmFtZX0nIGNhbm5vdCBiZSByZXNvbHZlZCBpbiB0ZXJtaW5hbCBjb25kaXRpb24gJHtuYW1lfT0ke3ZhbH1gKTtcbiAgICAgICAgbG9nLndhcm4ocm93KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWxJc0Z1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB2YWwocm93W2NvbF0sIHJvdyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbElzQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuICh2YWwubGVuZ3RoID09PSAwKSB8fCB2YWwuc29tZSgodikgPT4gcm93W2NvbF0gPT09IHYpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChyb3dbY29sXSA9PT0gdmFsKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlQ29uZGl0aW9uKGNvbmRpdGlvbiwgcm93LCByLCBjb2xOdW1iZXIsIGFuZCkge1xuICAgIGxldCBvclJlc3VsdCA9IGZhbHNlO1xuICAgIGxldCBhbmRSZXN1bHQgPSB0cnVlO1xuICAgIGlmIChjb25kaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIChjb25kaXRpb24gPT09IHIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBtYyA9IGNvbmRpdGlvbjtcbiAgICAgICAgaWYgKG1jLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoYW5kID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYW5kID9cbiAgICAgICAgICAgICAgICBtYy5ldmVyeSgoY2QpID0+IHJlc29sdmVDb25kaXRpb24oY2QsIHJvdywgciwgY29sTnVtYmVyLCBhbmQpKSA6XG4gICAgICAgICAgICAgICAgbWMuc29tZSgoY2QpID0+IHJlc29sdmVDb25kaXRpb24oY2QsIHJvdywgciwgY29sTnVtYmVyLCBhbmQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbk1ldCA9IGFuZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXRDb25kID0gY29uZGl0aW9uO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQgPSByZXNvbHZlQ29uZGl0aW9uKHNldENvbmQub3IsIHJvdywgciwgY29sTnVtYmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9IHJlc29sdmVDb25kaXRpb24oc2V0Q29uZC5hbmQsIHJvdywgciwgY29sTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdub3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gIXJlc29sdmVDb25kaXRpb24oc2V0Q29uZC5ub3QsIHJvdywgciwgY29sTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25kaXRpb25NZXQgPSByZXNvbHZlVGVybWluYWxDb25kaXRpb24obmFtZSwgY29uZGl0aW9uW25hbWVdLCByb3csIGNvbE51bWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25NZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JSZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuZFJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgdW5yZWNvZ25pemVkIGNvbmRpdGlvbjogJHtKU09OLnN0cmluZ2lmeShjb25kaXRpb24pfWApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBhbmQgPyBhbmRSZXN1bHQgOiBvclJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoZGF0YSwgY29uZCkge1xuICAgIGNvbnN0IGNvbE51bWJlciA9IChuYW1lKSA9PiBkYXRhLmNvbE51bWJlcihuYW1lKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGEoe1xuICAgICAgICAgICAgbmFtZTogZGF0YS5nZXROYW1lKCksXG4gICAgICAgICAgICBjb2xOYW1lczogZGF0YS5jb2xOYW1lcygpLFxuICAgICAgICAgICAgcm93czogZGF0YS5nZXREYXRhKCkuZmlsdGVyKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZWVwID0gcmVzb2x2ZUNvbmRpdGlvbihjb25kLCByb3csIGksIGNvbE51bWJlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtlZXA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBsb2cud2FybihlcnIpO1xuICAgICAgICBsb2cud2FybihlcnIuc3RhY2spO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBZVVpwYkhSbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlJHRjBZVVpwYkhSbGNuTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCTWtoQkxFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFXOUNMRTFCUVUwc1VVRkJVU3hEUVVGRE8wRkJRMmhFTEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVNc1RVRkJNRUlzVVVGQlVTeERRVUZETzBGQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdRVUUwUW5CR0xGTkJRVk1zZDBKQlFYZENMRU5CUVVNc1NVRkJWeXhGUVVGRkxFZEJRVThzUlVGQlJTeEhRVUZYTEVWQlFVVXNVMEZCSzBJN1NVRkRhRWNzVFVGQlRTeEhRVUZITEVkQlFVY3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRelZDTEUxQlFVMHNZVUZCWVN4SFFVRkhMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTTdTVUZEYkVRc1RVRkJUU3hWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRek5GTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xRkJRMW9zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzU1VGQlNTdzRRMEZCT0VNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVZc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRTlCUVU4c1MwRkJTeXhEUVVGRE8wdEJRMmhDTzFOQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVVN1VVRkZkRUlzVDBGQlR5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlF6ZENPMU5CUVUwc1NVRkJTU3hWUVVGVkxFVkJRVVU3VVVGRmJrSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEzQkZPMU5CUVUwN1VVRkRTQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRemRDTzBGQlEwd3NRMEZCUXp0QlFWTkVMRk5CUVZNc1owSkJRV2RDTEVOQlFVTXNVMEZCYlVJc1JVRkJSU3hIUVVGWExFVkJRVVVzUTBGQlVTeEZRVUZGTEZOQlFTdENMRVZCUVVVc1IwRkJXVHRKUVVNdlJ5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRja0lzU1VGQlNTeFRRVUZUTEVkQlFVVXNTVUZCU1N4RFFVRkRPMGxCUlhCQ0xFbEJRVWtzVTBGQlV5eExRVUZITEZOQlFWTXNSVUZCUlR0UlFVRkZMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRVVU3VTBGSGRFTXNTVUZCU1N4UFFVRlBMRk5CUVZNc1MwRkJTeXhSUVVGUkxFVkJRVVU3VVVGQlJTeFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRVVU3VTBGSGFFVXNTVUZCU1N4UFFVRlBMRk5CUVZNc1MwRkJTeXhSUVVGUkxFVkJRVVU3VVVGRmNFTXNUVUZCVFN4RlFVRkZMRWRCUVcxQ0xGTkJRVk1zUTBGQlF6dFJRVWR5UXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlEzcENMRWxCUVVrc1IwRkJSeXhMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZCUlN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRVVU3V1VGRGRrTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdG5Ra0ZCUlN4UFFVRlBMRXRCUVVzc1EwRkJRenRoUVVGRk8xbEJSWFJETEU5QlFVOHNSMEZCUnl4RFFVRkJMRU5CUVVNN1owSkJRMUFzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVdVc1JVRkJSU3hGUVVGRkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFXVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRiRVk3WVVGRlNUdFpRVU5FTEVsQlFVa3NSMEZCUnl4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGQlJTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUVVVN1dVRkRkRU1zUzBGQlN5eE5RVUZOTEVsQlFVa3NTVUZCU1N4VFFVRlRMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJRenRuUWtGRGRrSXNUVUZCVFN4UFFVRlBMRWRCUVc5Q0xGTkJRVk1zUTBGQlF6dG5Ra0ZITTBNc1VVRkJVU3hKUVVGSkxFVkJRVVU3YjBKQlExWXNTMEZCU3l4SlFVRkpPM2RDUVVGSExGbEJRVmtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzNkQ1FVRkRMRTFCUVUwN2IwSkJRM3BHTEV0QlFVc3NTMEZCU3p0M1FrRkJSU3haUVVGWkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dDNRa0ZCUXl4TlFVRk5PMjlDUVVONlJpeExRVUZMTEV0QlFVczdkMEpCUVVVc1dVRkJXU3hIUVVGSExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8zZENRVUZETEUxQlFVMDdiMEpCUTNCR0xFOUJRVThzUTBGQlF5eERRVUZKTEZsQlFWa3NSMEZCUnl4M1FrRkJkMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0cFFrRkRPVVk3WjBKQlEwUXNTVUZCU1N4WlFVRlpMRVZCUVVVN2IwSkJRVVVzVVVGQlVTeEhRVUZKTEVsQlFVa3NRMEZCUXp0dlFrRkJSU3hKUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTzNkQ1FVRkZMRTFCUVUwN2NVSkJRVVU3YVVKQlFVTTdjVUpCUTNwRE8yOUNRVUZGTEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNN2IwSkJRVU1zU1VGQlJ5eEhRVUZITEVWQlFVYzdkMEpCUVVVc1RVRkJUVHR4UWtGQlJUdHBRa0ZCUXp0aFFVTTVSRHRUUVVOS08wdEJRMG83VTBGQlRUdFJRVU5JTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc01rSkJRVEpDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzUkZMRTlCUVU4c1MwRkJTeXhEUVVGRE8wdEJRMmhDTzBsQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVFc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRPMEZCUTNKRExFTkJRVU03UVVGVFJDeE5RVUZOTEZWQlFWVXNUVUZCVFN4RFFVRkRMRWxCUVZNc1JVRkJSU3hKUVVGak8wbEJRelZETEUxQlFVMHNVMEZCVXl4SFFVRkhMRU5CUVVNc1NVRkJWeXhGUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJReTlFTEVsQlFVazdVVUZEUVN4UFFVRlBMRWxCUVVrc1NVRkJTU3hEUVVGRE8xbEJRMW9zU1VGQlNTeEZRVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRlRUlzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkRla0lzU1VGQlNTeEZRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZYTEVWQlFVVXNRMEZCVVN4RlFVRkZMRVZCUVVVN1owSkJRMnBFTEUxQlFVMHNTVUZCU1N4SFFVRkhMR2RDUVVGblFpeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dFpRVU5vUWl4RFFVRkRMRU5CUVVNN1UwRkRUQ3hEUVVGRExFTkJRVU03UzBGRFRqdEpRVUZETEU5QlFVMHNSMEZCUnl4RlFVRkZPMUZCUTFRc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMHRCUTNaQ08wRkJRMHdzUTBGQlF5SjkiLCJleHBvcnQgeyBEYXRhLCBUeXBlcyB9IGZyb20gJy4vRGF0YSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1QwRkJUeXhGUVUxRkxFbEJRVWtzUlVGTFNpeExRVUZMTEVWQlJVd3NUVUZCV1N4UlFVRlJMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbXCJjcnlwdG9cIl07IH0oKSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9iaW4vZXNtL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==