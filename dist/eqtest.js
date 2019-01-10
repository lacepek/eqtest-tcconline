var EqTest =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/eqTest.ts":
/*!***********************!*\
  !*** ./src/eqTest.ts ***!
  \***********************/
/*! exports provided: EqTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EqTest\", function() { return EqTest; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar EqTest = /** @class */ (function () {\r\n    function EqTest() {\r\n    }\r\n    EqTest.create = function (config) {\r\n        if (config.parent instanceof HTMLElement) {\r\n            this.parent = config.parent;\r\n        }\r\n        else {\r\n            this.parent = document.querySelector(config.parent);\r\n        }\r\n        if (this.parent) {\r\n            this.body = document.createElement('div');\r\n            this.body.id = 'eqtest-body';\r\n            this.imageElement = new Image();\r\n            this.body.appendChild(this.imageElement);\r\n            this.parent.appendChild(this.body);\r\n        }\r\n        this.events = config.events ? config.events : {\r\n            onEnd: function () { }, onStart: function () { }, onLoad: function () { }\r\n        };\r\n        this.time = config.time ? config.time : 1000;\r\n        this.url = config.url;\r\n    };\r\n    EqTest.load = function (url) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, error_1;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        url = url ? url : this.url;\r\n                        if (!this.parent) {\r\n                            return [2 /*return*/, false];\r\n                        }\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        _b.trys.push([1, 3, , 4]);\r\n                        _a = this;\r\n                        return [4 /*yield*/, this.getImage(url)];\r\n                    case 2:\r\n                        _a.image = _b.sent();\r\n                        if (!this.image) {\r\n                            return [2 /*return*/, false];\r\n                        }\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        error_1 = _b.sent();\r\n                        console.error(error_1);\r\n                        return [2 /*return*/, false];\r\n                    case 4:\r\n                        if (this.events.onLoad) {\r\n                            this.events.onLoad(this.image);\r\n                        }\r\n                        return [2 /*return*/, true];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    EqTest.start = function (time) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var imageShown, timeEnded;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!this.image) {\r\n                            return [2 /*return*/, false];\r\n                        }\r\n                        if (this.events.onStart) {\r\n                            this.events.onStart();\r\n                        }\r\n                        return [4 /*yield*/, this.showImage(this.image)];\r\n                    case 1:\r\n                        imageShown = _a.sent();\r\n                        if (!imageShown) return [3 /*break*/, 3];\r\n                        return [4 /*yield*/, this.wait(time ? time : this.time)];\r\n                    case 2:\r\n                        timeEnded = _a.sent();\r\n                        if (timeEnded) {\r\n                            this.cleanUp();\r\n                            return [2 /*return*/, true];\r\n                        }\r\n                        _a.label = 3;\r\n                    case 3: return [2 /*return*/, false];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    EqTest.cleanUp = function () {\r\n        this.imageElement.src = '';\r\n        this.image = null;\r\n        if (this.events.onEnd) {\r\n            this.events.onEnd();\r\n        }\r\n    };\r\n    EqTest.wait = function (time) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var error_2;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        _a.trys.push([0, 2, , 3]);\r\n                        return [4 /*yield*/, new Promise(function (resolve) { setTimeout(function () { resolve(true); }, time); })];\r\n                    case 1:\r\n                        _a.sent();\r\n                        return [2 /*return*/, true];\r\n                    case 2:\r\n                        error_2 = _a.sent();\r\n                        console.error(error_2);\r\n                        return [2 /*return*/, false];\r\n                    case 3: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    EqTest.showImage = function (image) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                try {\r\n                    this.imageElement.src = image;\r\n                    return [2 /*return*/, true];\r\n                }\r\n                catch (error) {\r\n                    console.error(error);\r\n                    return [2 /*return*/, false];\r\n                }\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    };\r\n    EqTest.getImage = function (url) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var request, response, image, error_3;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        request = new Request(url, { method: 'GET', cache: 'no-store' });\r\n                        _a.label = 1;\r\n                    case 1:\r\n                        _a.trys.push([1, 4, , 5]);\r\n                        return [4 /*yield*/, fetch(request)];\r\n                    case 2:\r\n                        response = _a.sent();\r\n                        return [4 /*yield*/, this.loadImage(response)];\r\n                    case 3:\r\n                        image = _a.sent();\r\n                        return [2 /*return*/, image];\r\n                    case 4:\r\n                        error_3 = _a.sent();\r\n                        console.error(error_3);\r\n                        return [2 /*return*/, null];\r\n                    case 5: return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    EqTest.loadImage = function (response) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var buffer, base64Flag, base64Image, imageData;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0: return [4 /*yield*/, response.arrayBuffer()];\r\n                    case 1:\r\n                        buffer = _a.sent();\r\n                        base64Flag = 'data:image/jpeg;base64, ';\r\n                        return [4 /*yield*/, this.convertImageToBase64(buffer)];\r\n                    case 2:\r\n                        base64Image = _a.sent();\r\n                        imageData = base64Flag + base64Image;\r\n                        return [2 /*return*/, imageData];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    EqTest.convertImageToBase64 = function (buffer) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var binary, bytes;\r\n            return __generator(this, function (_a) {\r\n                binary = '';\r\n                bytes = [].slice.call(new Uint8Array(buffer));\r\n                bytes.forEach(function (byte) { return binary += String.fromCharCode(byte); });\r\n                return [2 /*return*/, window.btoa(binary)];\r\n            });\r\n        });\r\n    };\r\n    return EqTest;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FcVRlc3QvLi9zcmMvZXFUZXN0LnRzPzQ0YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUEwSkEsQ0FBQztJQS9JZSxhQUFNLEdBQXBCLFVBQXFCLE1BQWM7UUFFakMsSUFBSSxNQUFNLENBQUMsTUFBTSxZQUFZLFdBQVcsRUFBRTtZQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDO1lBRTdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QyxLQUFLLEVBQUUsY0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxjQUFPLENBQUM7U0FDckQsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUks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LElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQzs7O0tBQzVCO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiLi9zcmMvZXFUZXN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVxVGVzdFxyXG57XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHN0YXRpYyBib2R5OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHN0YXRpYyBpbWFnZUVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGltYWdlOiBzdHJpbmdcclxuICBwcml2YXRlIHN0YXRpYyB1cmw6IHN0cmluZztcclxuICBwcml2YXRlIHN0YXRpYyB0aW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgZXZlbnRzOiBFcVRlc3RFdmVudHM7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGNvbmZpZzogQ29uZmlnKTogdm9pZFxyXG4gIHtcclxuICAgIGlmIChjb25maWcucGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wYXJlbnQgPSBjb25maWcucGFyZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5wYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGhpcy5ib2R5LmlkID0gJ2VxdGVzdC1ib2R5JztcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5pbWFnZUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnRzID0gY29uZmlnLmV2ZW50cyA/IGNvbmZpZy5ldmVudHMgOiB7XHJcbiAgICAgIG9uRW5kOiAoKSA9PiB7fSwgb25TdGFydDogKCkgPT4ge30sIG9uTG9hZDogKCkgPT4ge31cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50aW1lID0gY29uZmlnLnRpbWUgPyBjb25maWcudGltZSA6IDEwMDA7XHJcbiAgICB0aGlzLnVybCA9IGNvbmZpZy51cmw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQodXJsPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPlxyXG4gIHtcclxuICAgIHVybCA9IHVybCA/IHVybCA6IHRoaXMudXJsO1xyXG4gICAgaWYgKCF0aGlzLnBhcmVudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5pbWFnZSA9IGF3YWl0IHRoaXMuZ2V0SW1hZ2UodXJsKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghdGhpcy5pbWFnZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5ldmVudHMub25Mb2FkKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzLm9uTG9hZCh0aGlzLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnQodGltZT86IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj5cclxuICB7XHJcbiAgICBpZiAoIXRoaXMuaW1hZ2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50cy5vblN0YXJ0KSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzLm9uU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWFnZVNob3duID0gYXdhaXQgdGhpcy5zaG93SW1hZ2UodGhpcy5pbWFnZSk7XHJcblxyXG4gICAgaWYgKGltYWdlU2hvd24pIHtcclxuICAgICAgY29uc3QgdGltZUVuZGVkID0gYXdhaXQgdGhpcy53YWl0KHRpbWUgPyB0aW1lIDogdGhpcy50aW1lKTtcclxuXHJcbiAgICAgIGlmICh0aW1lRW5kZWQpIHtcclxuICAgICAgICB0aGlzLmNsZWFuVXAoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBjbGVhblVwKCk6IHZvaWRcclxuICB7XHJcbiAgICB0aGlzLmltYWdlRWxlbWVudC5zcmMgPSAnJztcclxuICAgIHRoaXMuaW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmV2ZW50cy5vbkVuZCkge1xyXG4gICAgICB0aGlzLmV2ZW50cy5vbkVuZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgd2FpdCh0aW1lOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+XHJcbiAge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSkgPT4geyBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZSh0cnVlKSB9LCB0aW1lKSB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHNob3dJbWFnZShpbWFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPlxyXG4gIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyBnZXRJbWFnZSh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPlxyXG4gIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIHsgbWV0aG9kOiAnR0VUJywgY2FjaGU6ICduby1zdG9yZScgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xyXG4gICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHRoaXMubG9hZEltYWdlKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIGxvYWRJbWFnZShyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPHN0cmluZz5cclxuICB7XHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgYmFzZTY0RmxhZyA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCAnO1xyXG4gICAgY29uc3QgYmFzZTY0SW1hZ2UgPSBhd2FpdCB0aGlzLmNvbnZlcnRJbWFnZVRvQmFzZTY0KGJ1ZmZlcik7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gYmFzZTY0RmxhZyArIGJhc2U2NEltYWdlO1xyXG5cclxuICAgIHJldHVybiBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBhc3luYyBjb252ZXJ0SW1hZ2VUb0Jhc2U2NChidWZmZXI6IEFycmF5QnVmZmVyKTogUHJvbWlzZTxzdHJpbmc+XHJcbiAge1xyXG4gICAgbGV0IGJpbmFyeSA9ICcnO1xyXG4gICAgY29uc3QgYnl0ZXMgPSBbXS5zbGljZS5jYWxsKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xyXG5cclxuICAgIGJ5dGVzLmZvckVhY2goKGJ5dGU6IG51bWJlcikgPT4gYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSkpO1xyXG5cclxuICAgIHJldHVybiB3aW5kb3cuYnRvYShiaW5hcnkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29uZmlnID0ge1xyXG4gIHBhcmVudDogSFRNTEVsZW1lbnQgfCBzdHJpbmcsXHJcbiAgdXJsOiBzdHJpbmcsXHJcbiAgdGltZTogbnVtYmVyLFxyXG4gIGV2ZW50czogRXFUZXN0RXZlbnRzXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVxVGVzdEV2ZW50cyA9IHtcclxuICBvbkxvYWQ6IE9uTG9hZEV2ZW50LFxyXG4gIG9uU3RhcnQ6IE9uU3RhcnRFdmVudCxcclxuICBvbkVuZDogT25FbmRFdmVudFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBPbkxvYWRFdmVudCA9IChpbWFnZTogc3RyaW5nLCBlcnJvcj86IGFueSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCB0eXBlIE9uU3RhcnRFdmVudCA9IChlcnJvcj86IGFueSkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCB0eXBlIE9uRW5kRXZlbnQgPSAoZXJyb3I/OiBhbnkpID0+IHZvaWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/eqTest.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: create, start, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony import */ var _eqTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eqTest */ \"./src/eqTest.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nfunction create(config) {\r\n    _eqTest__WEBPACK_IMPORTED_MODULE_0__[\"EqTest\"].create(config);\r\n}\r\nfunction start(time) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, _eqTest__WEBPACK_IMPORTED_MODULE_0__[\"EqTest\"].start(time)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction load(url) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, _eqTest__WEBPACK_IMPORTED_MODULE_0__[\"EqTest\"].load(url)];\r\n                case 1: return [2 /*return*/, _a.sent()];\r\n            }\r\n        });\r\n    });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FcVRlc3QvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBRW5DLFNBQVMsTUFBTSxDQUFDLE1BQWM7SUFFbkMsOENBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVNLFNBQWUsS0FBSyxDQUFDLElBQVk7Ozs7d0JBRS9CLHFCQUFNLDhDQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFBL0Isc0JBQU8sU0FBd0IsRUFBQzs7OztDQUNqQztBQUVNLFNBQWUsSUFBSSxDQUFDLEdBQVc7Ozs7d0JBRTdCLHFCQUFNLDhDQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFBN0Isc0JBQU8sU0FBc0IsRUFBQzs7OztDQUMvQiIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVxVGVzdCwgQ29uZmlnIH0gZnJvbSAnLi9lcVRlc3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShjb25maWc6IENvbmZpZyk6IHZvaWRcclxue1xyXG4gIEVxVGVzdC5jcmVhdGUoY29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KHRpbWU6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj5cclxue1xyXG4gIHJldHVybiBhd2FpdCBFcVRlc3Quc3RhcnQodGltZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPlxyXG57XHJcbiAgcmV0dXJuIGF3YWl0IEVxVGVzdC5sb2FkKHVybCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });