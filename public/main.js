(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-imgupload></app-imgupload>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-dev';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _imgupload_imgupload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgupload/imgupload.component */ "./src/app/imgupload/imgupload.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _imgupload_imgupload_component__WEBPACK_IMPORTED_MODULE_7__["ImguploadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.uploadImages = function (data) {
        return this.http.post('http://localhost:3000/upload', data);
    };
    AppService.prototype.getImages = function () {
        return this.http.get('http://localhost:3000/images');
    };
    AppService.prototype.deleteImage = function (id) {
        return this.http.delete('http://localhost:3000/images/' + id);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/imgupload/imgupload.component.html":
/*!****************************************************!*\
  !*** ./src/app/imgupload/imgupload.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"form-group\">\n                  <input class=\"form-control-file\" type='file' #fileimport (change)=\"onSelectFile($event)\" multiple accept=\".png,.jgp,.jpeg\">\n              </div>\n              <button class=\"btn btn-sm btn-primary\" (click)=\"uploadFiles()\">Upload</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-columns\">\n            <div *ngFor=\"let url of urls, let i = index\" class=\"card\" style=\"position: relative;\">\n              <div class=\"close\" (click)=\"removeIt(i)\">\n                &times;\n              </div>\n              <img [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3>Images from DB</h3>\n          <span class=\"text-danger\">\"X\" deletes image from DB</span>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-columns\">\n            <div class=\"card\" *ngFor=\"let obj of showDBImages,let i = index\">\n              <h5 class=\"card-title\">{{obj.name}}</h5>\n              <div class=\"close\" (click)=\"deleteIt(obj._id,i)\">\n                &times;\n              </div>\n              <img [src]=\"obj.data\" width=\"180\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/imgupload/imgupload.component.scss":
/*!****************************************************!*\
  !*** ./src/app/imgupload/imgupload.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 1em;\n  height: 94vh;\n  padding: 15px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n  .card .card-body {\n    overflow-y: auto;\n    background: #efefef; }\n  .card .card-body .close {\n      position: absolute;\n      border-radius: 50%;\n      border: 1px solid #999;\n      background: #ffffff;\n      width: 1em;\n      height: 1em;\n      top: -10px;\n      right: -10px;\n      padding-left: 2px;\n      line-height: 0.7em;\n      cursor: pointer; }\n  .card .card-body .card-columns .card {\n      height: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1ndXBsb2FkL0U6XFxkZXYtZXhwXFxpbWctdXBsb2FkZXJcXGFuZ3VsYXItZGV2L3NyY1xcYXBwXFxpbWd1cGxvYWRcXGltZ3VwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLCtHQUE0RyxFQUFBO0VBSjlHO0lBT0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBUnZCO01BV00sa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixXQUFXO01BQ1gsVUFBVTtNQUNWLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtFQXJCckI7TUEyQlEsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW1ndXBsb2FkL2ltZ3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgaGVpZ2h0OiA5NHZoO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMWVtO1xyXG4gICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/imgupload/imgupload.component.ts":
/*!**************************************************!*\
  !*** ./src/app/imgupload/imgupload.component.ts ***!
  \**************************************************/
/*! exports provided: ImguploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImguploadComponent", function() { return ImguploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



var ImguploadComponent = /** @class */ (function () {
    function ImguploadComponent(service) {
        this.service = service;
        this.urls = new Array();
        this.showDBImages = new Array();
        this.data = new Array();
        this.showImages();
    }
    ImguploadComponent.prototype.ngOnInit = function () {
    };
    ImguploadComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.urls = [];
            var files = event.target.files;
            if (files) {
                var _loop_1 = function (file) {
                    if (file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg') {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            console.log(file);
                            _this.data.push({
                                name: file.name,
                                data: e.target.result
                            });
                            _this.urls.push(e.target.result);
                        };
                        reader.readAsDataURL(file);
                    }
                };
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var file = files_1[_i];
                    _loop_1(file);
                }
            }
        }
    };
    ImguploadComponent.prototype.removeIt = function (i) {
        this.urls.splice(i, 1);
        this.data.splice(i, 1);
        this.fileimport.nativeElement.value = null;
    };
    ImguploadComponent.prototype.deleteIt = function (id, i) {
        var _this = this;
        this.service.deleteImage(id).subscribe(function (result) {
            console.log('Deleted image');
            _this.showDBImages.splice(i, 1);
        });
    };
    ImguploadComponent.prototype.uploadFiles = function () {
        var _this = this;
        if (this.data.length > 0) {
            this.service.uploadImages(this.data).subscribe(function (result) {
                _this.data = [];
                _this.urls = [];
                _this.fileimport.nativeElement.value = null;
                _this.showImages();
            });
        }
    };
    ImguploadComponent.prototype.showImages = function () {
        var _this = this;
        this.service.getImages().subscribe(function (r) {
            // console.log("r",r);
            if (r.length > 0) {
                _this.showDBImages = r;
                // r.forEach(element => {
                //   this.showDBImages.push(element.data);
                // });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileimport'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ImguploadComponent.prototype, "fileimport", void 0);
    ImguploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imgupload',
            template: __webpack_require__(/*! ./imgupload.component.html */ "./src/app/imgupload/imgupload.component.html"),
            styles: [__webpack_require__(/*! ./imgupload.component.scss */ "./src/app/imgupload/imgupload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ImguploadComponent);
    return ImguploadComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\dev-exp\img-uploader\angular-dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map