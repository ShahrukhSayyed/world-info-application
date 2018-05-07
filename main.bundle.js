webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark sticky-top\">\n  <a class=\"navbar-brand\" href=\"#\">The Tour of World</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n  <ng4-loading-spinner></ng4-loading-spinner>\n  <!--Footer-->\n  <footer class=\"page-footer font-small blue pt-4 mt-4\">\n    <!--Copyright-->\n    <div class=\"footer py-3 text-center\">\n      © 2018 Copyright\n      <span style=\"font-weight: bold;\"> Shahrukh Sayyed </span>\n    </div>\n  </footer>\n  <!--/.Footer-->\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__country_country_module__ = __webpack_require__("./src/app/country/country.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__country_all_country_view_all_country_view_component__ = __webpack_require__("./src/app/country/all-country-view/all-country-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__country_single_country_view_single_country_view_component__ = __webpack_require__("./src/app/country/single-country-view/single-country-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Added for Router







//Added for toast message






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_7__country_country_module__["a" /* CountryModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__["Ng4LoadingSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '*', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: 'allCountry/:firstLevel/:secondLevel/:thirdLevel', component: __WEBPACK_IMPORTED_MODULE_13__country_all_country_view_all_country_view_component__["a" /* AllCountryViewComponent */] },
                    { path: 'country/:countryName', component: __WEBPACK_IMPORTED_MODULE_14__country_single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Added for Http and Observables





var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = "https://restcountries.eu";
        //console.log("AppService is called");
    }
    //method to handle http calls
    AppService.prototype.handleError = function (err) {
        console.log("Handle error HTTP calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    AppService.prototype.getAllCountries = function (firstLevel, secondLevel, thirdLevel) {
        return this._http.get(this.baseUrl + "/rest/v2/" + firstLevel + "/" + secondLevel + "?fields=name;region;capital;currencies;subregion;timezones;population;languages;flag;alpha3Code")
            .do(function (data) { return console.log('Message from AppService : Countries Found'); })
            .catch(this.handleError);
    }; // end getAllCountries function
    AppService.prototype.getCountryDetailsByName = function (countryName) {
        return this._http.get(this.baseUrl + "/rest/v2/name/" + countryName + "?fullText=true")
            .do(function (data) { return console.log('Message from AppService : Single Country Found'); })
            .catch(this.handleError);
    }; // end getCountryDetailsByName function
    AppService.prototype.getCountryDetailsByCode = function (countryCode) {
        return this._http.get(this.baseUrl + "/rest/v2/alpha/" + countryCode)
            .do(function (data) { return console.log('Message from AppService : Single Country Found'); })
            .catch(this.handleError);
    }; // end getCountryDetailsByCode function
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/country/all-country-view/all-country-view.component.css":
/***/ (function(module, exports) {

module.exports = "h5{\r\n    font-family: 'Abril Fatface', cursive;\r\n}\r\np{\r\n    font-family: 'Gugi', cursive;\r\n    font-size: 0.8em;\r\n    color:#4ABDAC;\r\n}\r\nspan{\r\n    font-family: 'Iceberg', cursive;    \r\n    color: darkblue;\r\n}\r\n.cardBorder{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.padding{\r\n    padding: 1.5em;\r\n}\r\n#quickLookButton{\r\n    opacity: 0.3;\r\n}\r\n#cardDetails:hover #quickLookButton{\r\n    opacity: 1;\r\n}\r\nh1{\r\n    font-family: 'UnifrakturMaguntia', cursive;        \r\n    color: #000;\r\n    font-weight: bolder;\r\n}\r\n.hero-image {\r\n    height: 100% !important; \r\n    width:100% !important;        \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;        \r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);        \r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    color: black;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/country/all-country-view/all-country-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"region\">\n      <img src=\"assets/{{region}}.jpg\" alt=\"Region Flag\" class=\"fluid-image hero-image\">\n      <div class=\"hero-text\">\n        <h1 class=\"text-center\">{{region}}</h1>\n      </div>\n    </div>\n  </div>\n  \n <br>\n\n<div class=\"container cardBorder padding\">\n  <div class=\"row\">\n    <h5>Filters...</h5>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"input-group col-sm-12 col-md-4 \">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon2\">\n          <i class=\"fas fa-search\"></i>\n        </span>\n      </div>\n      <input type=\"text\" name=\"nameValue\" [(ngModel)]=\"nameValue\" class=\"form-control\" placeholder=\"Country Name\" aria-label=\"Name\"\n        aria-describedby=\"basic-addon2\">\n    </div>\n    <br>\n    <div class=\"input-group col-sm-12 col-md-4\">\n      <div class=\"input-group-prepend\" style=\"margin-right: 0.2vw;\">\n        <label class=\"input-group-text\" for=\"sort\">Sort By</label>\n      </div>\n      <button class=\"btn btn-md btn-info active\" (click)=\"setOrder('name')\">\n        <i class=\"fas fa-sort-alpha-down\" [hidden]=\"!reverse\"> Ascending</i>\n        <i class=\"fas fa-sort-alpha-up\" [hidden]=\"reverse\"> Descending</i>\n      </button>\n    </div>\n    <br>\n    <div class=\"input-group col-sm-12 col-md-4\">\n      <div class=\"input-group-prepend\" style=\"margin-right: 0.2vw;\">\n        <label class=\"input-group-text\" for=\"sort\">Region Name</label>\n      </div>\n      <select [(ngModel)]=\"selectedRegionName\" (ngModelChange)='onOptionsSelected($event)' name=\"selectedRegionName\" class=\"form-control\">\n        <option value=\"Africa\">Africa</option>\n        <option value=\"Americas\">Americas</option>\n        <option value=\"Asia\">Asia</option>\n        <option value=\"Europe\">Europe</option>\n        <option value=\"Oceania\">Oceania</option>\n      </select>\n    </div>\n\n  </div>\n</div>\n\n\n<br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let country of regionalCountries | filterData: nameValue | orderBy: order:reverse:'case-sensitive' | paginate: { itemsPerPage: 6, currentPage: p }\">\n      <div class=\"card cardBorder\" id=\"cardDetails\">\n        <img class=\"card-img-top\" src=\"{{country.flag}}\" style=\"width:100%; height:30vh\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{country.name}}\n            <br>\n            <span class=\"card-text text-muted\" style=\"font-size: 0.8em\">Country in\n              <a class=\"btn-link\" [routerLink]=\"['/allCountry', 'region', country.region , 'all']\">{{country.region}}</a>\n            </span>\n          </h5>\n          <p class=\"card-text\">\n            Capital :\n            <span *ngIf=\"country.capital\"> {{country.capital}}</span>\n            <span *ngIf=\"!country.capital\"> Not Available</span>\n\n            <br> Subregion :\n            <span *ngIf=\"country.subregion\"> {{country.subregion}}</span>\n            <span *ngIf=\"!country.subregion\"> Not Available</span>\n\n            <br> Time Zone :\n            <span> {{country.timezones}}</span>\n\n            <br> Population :\n            <span *ngIf=\"country.population\"> {{country.population}}</span>\n            <span *ngIf=\"!country.population\"> Not Available</span>\n\n            <br> Languages :\n            <span *ngIf=\"country.languages\">\n              <span *ngFor=\"let language of country.languages;let last=last;\">\n                <a class=\"btn-link\" [routerLink]=\"['/allCountry', 'lang', language.iso639_1 , language.name]\">{{language.name}} ({{language.nativeName}}) {{(last) ? \" \":\", \"}}</a>\n              </span>\n\n            </span>\n\n            <br> Currency :\n            <span>\n              <span *ngFor=\"let currency of country.currencies;let last=last;\">\n                <a class=\"btn-link\" *ngIf=\"currency.code\" [routerLink]=\"['/allCountry', 'currency', currency.code , currency.name]\">{{currency.name}} ({{currency.symbol}}) {{currency.code }} {{(last) ? \" \":\", \"}}</a>\n              </span>\n            </span>\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <button id=\"quickLookButton\" type=\"button\" class=\"btn btn-info btn-md btn-block\" [routerLink]=\"['/country', country.alpha3Code]\">Quick Look</button>\n        </div>\n      </div>\n      <br>\n\n    </div>\n  </div>\n</div>\n<div class=\"text-center\">\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n      <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"goBack()\">\n        <i class=\"fas fa-arrow-circle-left\"></i>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/country/all-country-view/all-country-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCountryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//From NPM modules

//Location services



var AllCountryViewComponent = /** @class */ (function () {
    function AllCountryViewComponent(_route, router, appService, spinnerService, location, toastr, vcr) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.appService = appService;
        this.spinnerService = spinnerService;
        this.location = location;
        this.toastr = toastr;
        this.order = 'item.name';
        this.reverse = false;
        this.getAllCountries = function (firstLevel, secondLevel, thirdLevel) {
            _this.appService.getAllCountries(firstLevel, secondLevel, thirdLevel).subscribe(//this is getting book data
            function (//this is getting book data
                data) {
                setTimeout(function () {
                    _this.regionalCountries = data;
                    _this.foundCountries = _this.regionalCountries.length;
                    //console.log('Countries Found');
                    //console.log(this.foundCountries);
                    _this.toastr.info(_this.foundCountries + " Countries are there !");
                    _this.spinnerService.hide();
                }, 2000); //passsing to get detail function
            }, function (error) {
                console.log(error.errorMessage);
                _this.spinnerService.hide();
                _this.toastr.error("Not Found !");
                _this.router.navigate(["/"]);
            });
            if (secondLevel == 'Americas' || secondLevel == 'Oceania' || secondLevel == 'Asia' || secondLevel == 'Africa' || secondLevel == 'Europe') {
                _this.region = secondLevel;
                _this.toastr.success("Welcome to the " + _this.region + " region");
                _this.selectedRegionName = _this.region;
            }
            else if (firstLevel == 'currency') {
                _this.region = 'Currency';
                _this.toastr.success(thirdLevel + " currency applied !");
            }
            else if (firstLevel == 'lang') {
                _this.region = 'Language';
                _this.toastr.success(thirdLevel + " language applied !");
            }
        };
        this.goBack = function () {
            _this.location.back();
        };
        this.toastr.setRootViewContainerRef(vcr);
        //console.log("All country View Router Calling");
    }
    AllCountryViewComponent.prototype.ngOnInit = function () {
        //console.log("All country View NgOnInit called");
        var _this = this;
        this._route.params.subscribe(function (param) {
            _this.spinnerService.show();
            _this.regionalCountries = [];
            var firstLevel = _this._route.snapshot.paramMap.get('firstLevel');
            var secondLevel = _this._route.snapshot.paramMap.get('secondLevel');
            var thirdLevel = _this._route.snapshot.paramMap.get('thirdLevel');
            _this.getAllCountries(firstLevel, secondLevel, thirdLevel); //function calling
        });
    };
    AllCountryViewComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
            this.showSuccess(this.reverse);
        }
        this.order = value;
    };
    AllCountryViewComponent.prototype.showSuccess = function (value) {
        if (value == true) {
            this.toastr.success('Data Sorted ! In a Descending way !');
        }
        else {
            this.toastr.success('Data Sorted ! In a Ascending way!');
        }
    };
    AllCountryViewComponent.prototype.onOptionsSelected = function (event) {
        //this.getAllCountries('region',event,'all');
        this.router.navigate(["/allCountry/region/" + event + "/all"]);
    };
    AllCountryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-all-country-view',
            template: __webpack_require__("./src/app/country/all-country-view/all-country-view.component.html"),
            styles: [__webpack_require__("./src/app/country/all-country-view/all-country-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AllCountryViewComponent);
    return AllCountryViewComponent;
}());



/***/ }),

/***/ "./src/app/country/country.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_country_view_all_country_view_component__ = __webpack_require__("./src/app/country/all-country-view/all-country-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_country_view_single_country_view_component__ = __webpack_require__("./src/app/country/single-country-view/single-country-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_data_pipe__ = __webpack_require__("./src/app/filter-data.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//Added for toast message


var CountryModule = /** @class */ (function () {
    function CountryModule() {
    }
    CountryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: 'allCountry/:firstLevel/:secondLevel/:thirdLevel',
                        component: __WEBPACK_IMPORTED_MODULE_2__all_country_view_all_country_view_component__["a" /* AllCountryViewComponent */],
                    },
                    {
                        path: 'country/:countryName',
                        component: __WEBPACK_IMPORTED_MODULE_3__single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */],
                    },
                ]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__all_country_view_all_country_view_component__["a" /* AllCountryViewComponent */], __WEBPACK_IMPORTED_MODULE_3__single_country_view_single_country_view_component__["a" /* SingleCountryViewComponent */], __WEBPACK_IMPORTED_MODULE_8__filter_data_pipe__["a" /* FilterDataPipe */]]
        })
    ], CountryModule);
    return CountryModule;
}());



/***/ }),

/***/ "./src/app/country/single-country-view/single-country-view.component.css":
/***/ (function(module, exports) {

module.exports = "h1,h3,h5{\r\n    font-family: 'UnifrakturMaguntia', cursive;    \r\n}\r\n\r\n.col-left{\r\n    font-family: 'Gugi', cursive;\r\n    font-size: 1em;    \r\n    color:#4ABDAC;\r\n}\r\n\r\n.col-right{\r\n    font-family: 'Iceberg', cursive;\r\n    color: darkblue;\r\n}\r\n\r\n.cardBorder{\r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.hero-image {\r\n    height: 100% !important; \r\n    width:100% !important;        \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;        \r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);        \r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    color: black;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/country/single-country-view/single-country-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngIf=\"countryFlag\">\n    <img src=\"{{countryFlag}}\" alt=\"Country Flag\" class=\"fluid-image hero-image\">\n    <div class=\"hero-text\">\n      <h1 class=\"text-center\">{{countryDetails.name}}</h1>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<div class=\"container\" id=\"details\">\n  <div class=\"row\">\n\n    <div class=\"col-12\">\n      <br>\n      <!-- Nav tabs -->\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#basic\">Basic Details</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#geographic\">Geographic Details</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#alt\">Alternate Callings</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#currency\">Currency</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#languages\">Languages</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#regional\">Regional Blocks</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#translations\">Translations</a>\n        </li>\n\n      </ul>\n\n      <!-- Tab panes -->\n      <div class=\"tab-content\">\n        <div id=\"basic\" class=\"container tab-pane active\">\n          <br>\n          <h3>Basic Details</h3>\n          <table class=\"table table-hover table-responsive\">\n            <tbody>\n              <tr>\n                <td class=\"col-left\">Native Name </td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.nativeName\"> {{countryDetails.nativeName}} </span>\n                  <span *ngIf=\"!countryDetails.nativeName\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Demonym </td>\n                <td class=\"col-right\" >\n                  <span *ngIf=\"countryDetails.demonym\"> {{countryDetails.demonym }}</span>\n                  <span *ngIf=\"!countryDetails.demonym\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Capital </td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.capital\"> {{countryDetails.capital}}</span>\n                  <span *ngIf=\"!countryDetails.capital\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Region </td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.region\"> \n                      <a class=\"btn-link\" [routerLink]=\"['/allCountry', 'region', countryDetails.region , 'all']\">{{countryDetails.region}}</a>\n                  </span>\n                  <span *ngIf=\"!countryDetails.region\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Subregion </td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.subregion\"> {{countryDetails.subregion}}</span>\n                  <span *ngIf=\"!countryDetails.subregion\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Time Zone </td>\n                <td class=\"col-right\" *ngIf=\"countryDetails.timezones\">\n                  <span *ngFor=\"let timezone of countryDetails.timezones;let last=last;\">{{timezone }}{{(last) ? \" \":\", \"}} </span>\n                  <span *ngIf=\"countryDetails.timezones.length == 0\"> Not Available</span>\n\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Calling Code </td>\n                <td class=\"col-right\" *ngIf=\"countryDetails.callingCodes\">\n                  <span *ngFor=\"let callingCode of countryDetails.callingCodes;let last=last;\">{{callingCode }}{{(last) ? \" \":\", \"}} </span>\n                  <span *ngIf=\"countryDetails.callingCodes.length == 0\"> Not Available</span>\n\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Internet TLD </td>\n                <td class=\"col-right\" *ngIf=\"countryDetails.topLevelDomain\">\n                  <span *ngFor=\"let tld of countryDetails.topLevelDomain;let last=last;\">{{tld }}{{(last) ? \" \":\", \"}} </span>\n                  <span *ngIf=\"countryDetails.topLevelDomain.length == 0\"> Not Available</span>\n\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Numeric Code </td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.numericCode\">{{countryDetails.numericCode}}</span>\n                  <span *ngIf=\"!countryDetails.numericCode\"> Not Available</span>\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n\n        </div>\n\n        <div id=\"geographic\" class=\"container tab-pane fade\">\n          <br>\n          <h3>Geographic Details</h3>\n          <table class=\"table table-hover table-responsive\">\n            <tbody>\n              <tr>\n                <td class=\"col-left\">Area</td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.area\"> {{countryDetails.area}} KM\n                    <sup>2</sup>\n                  </span>\n                  <span *ngIf=\"!countryDetails.area\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Shares border with</td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.borders\">\n                    <span *ngFor=\"let border of countryDetails.borders;let last=last;\">\n                      <a class=\"btn-link\" [routerLink]=\"['/country', border]\">{{border}}{{(last) ? \" \":\", \"}}</a>\n                    </span>\n                    <span *ngIf=\"countryDetails.borders.length == 0\"> Not Available</span>\n                  </span>\n                  \n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Gini Index</td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.gini\"> {{countryDetails.gini}}</span>\n                  <span *ngIf=\"!countryDetails.gini\"> Not Available</span>\n                </td>\n\n              </tr>\n              <tr>\n                <td class=\"col-left\">Lat Long</td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.latlng\"> {{countryDetails.latlng[0]}} N, {{countryDetails.latlng[1]}} E</span>\n                  <span *ngIf=\"!countryDetails.latlng\"> Not Available</span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"col-left\">Population</td>\n                <td class=\"col-right\">\n                  <span *ngIf=\"countryDetails.population\"> {{countryDetails.population}}</span>\n                  <span *ngIf=\"!countryDetails.population\"> Not Available</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div id=\"alt\" class=\"container tab-pane fade\">\n          <br>\n          <h3>Alternate Callings</h3>\n          <div *ngIf=\"countryDetails.altSpellings\">\n            <div class=\"col-right\" *ngFor=\"let call of countryDetails.altSpellings;let last=last;\">\n              {{call }}{{(last) ? \" \":\", \"}}\n            </div>\n            <span *ngIf=\"countryDetails.altSpellings.length == 0\"> Not Available</span>\n          </div>\n        </div>\n\n        <div id=\"currency\" class=\"container tab-pane fade\">\n          <br>\n          <h3>Currency(s)</h3>\n          <div *ngIf=\"countryDetails.currencies\">\n            <div class=\"col-right\" *ngFor=\"let currency of countryDetails.currencies;let last=last;\">\n                <a class=\"btn-link\" [routerLink]=\"['/allCountry', 'currency', currency.code, currency.name]\">{{currency.name}} ({{currency.symbol}}) {{currency.code }} {{(last) ? \" \":\", \"}}</a>\n            </div>\n            <div *ngIf=\"countryDetails.currencies.length == 0\">\n                <span > Not Available</span>              \n            </div>\n          </div>\n        </div>\n\n        <div id=\"languages\" class=\"container tab-pane fade\">\n          <br>\n          <h3>Language(s)</h3>\n          <div *ngIf=\"countryDetails.languages\">\n            <div class=\"col-right\" *ngFor=\"let language of countryDetails.languages;let last=last;\">\n                <a class=\"btn-link\" [routerLink]=\"['/allCountry', 'lang', language.iso639_1, language.name]\">{{language.name}} ({{language.nativeName}}) {{(last) ? \" \":\", \"}}</a>                \n            </div>\n            <div *ngIf=\"countryDetails.languages.length == 0\">\n                <span > Not Available</span>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"regional\" class=\"container tab-pane fade\">\n          <br>\n          <h3>Regional Blocks</h3>\n          <div *ngIf=\"countryDetails.regionalBlocs\">\n            <div class=\"col-right\" *ngFor=\"let block of countryDetails.regionalBlocs;let last=last;\">\n              {{block.acronym}} - ({{block.name}}) {{(last) ? \" \":\", \"}}\n            </div>\n            <div *ngIf=\"countryDetails.regionalBlocs.length == 0\">\n                <span > Not Available</span>\n            </div>\n  \n          </div>\n        </div>\n\n        <div id=\"translations\" class=\"container tab-pane fade\">\n          <br>\n          <h3>Translations</h3>\n          <div class=\"col-right\" *ngFor=\"let translation of simplifiedTranslation;let last=last;\">\n            {{translation}} {{(last) ? \" \":\", \"}}\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n  <br>\n</div>\n\n<br>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-4\">\n            <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"goBack()\"><i class=\"fas fa-arrow-circle-left\"></i></button>\n        </div>        \n    </div>    \n</div>\n\n<br>\n"

/***/ }),

/***/ "./src/app/country/single-country-view/single-country-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleCountryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//From NPM modules

//Location services



var SingleCountryViewComponent = /** @class */ (function () {
    function SingleCountryViewComponent(_route, router, appService, spinnerService, location, toastr, vcr) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.appService = appService;
        this.spinnerService = spinnerService;
        this.location = location;
        this.toastr = toastr;
        this.simplifiedTranslation = [];
        this.simplifiedKeys = [];
        //method to get translation proprty
        this.getSimplifyTranslations = function (data) {
            _this.simplifiedTranslation = [];
            for (var item in data) {
                if (data[item] != null || data[item] != undefined) {
                    var temp = item + " => " + data[item];
                    //this.simplifiedKeys.push(item);
                    _this.simplifiedTranslation.push(temp);
                }
            }
            //console.log(this.simplifiedTranslation)
        };
        this.goBack = function () {
            _this.location.back();
        };
        this.toastr.setRootViewContainerRef(vcr);
        //console.log("Single country View Router Calling");
    }
    SingleCountryViewComponent.prototype.ngOnInit = function () {
        //console.log("Single country View NgOnInit called");
        var _this = this;
        this._route.params.subscribe(function (param) {
            _this.spinnerService.show();
            var countryCode = _this._route.snapshot.paramMap.get('countryName');
            _this.countryDetails = _this.appService.getCountryDetailsByCode(countryCode).subscribe(//this is getting book data
            function (//this is getting book data
                data) {
                setTimeout(function () {
                    _this.countryDetails = data;
                    _this.getSimplifyTranslations(_this.countryDetails.translations);
                    _this.countryFlag = _this.countryDetails.flag;
                    _this.countryName = _this.countryDetails.name;
                    //console.log('Country Found');
                    //console.log(this.countryDetails);
                    _this.toastr.success("Welcome to the " + _this.countryName + " ");
                    _this.spinnerService.hide();
                }, 2000); //passsing to get detail function
            }, function (error) {
                console.log(error.errorMessage);
            });
        });
    };
    SingleCountryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-country-view',
            template: __webpack_require__("./src/app/country/single-country-view/single-country-view.component.html"),
            styles: [__webpack_require__("./src/app/country/single-country-view/single-country-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SingleCountryViewComponent);
    return SingleCountryViewComponent;
}());



/***/ }),

/***/ "./src/app/filter-data.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDataPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterDataPipe = /** @class */ (function () {
    function FilterDataPipe() {
    }
    FilterDataPipe.prototype.transform = function (array, args) {
        //console.log("In FilterDataPipe");
        if (!array || !args) {
            return array;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        this.newArray = array.filter(function (val) {
            var nameInArray = val['capital'].toLowerCase();
            var argsPassed = args.toLowerCase();
            return nameInArray.search(argsPassed) > -1;
        });
        return this.newArray;
    };
    FilterDataPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterData',
            pure: false
        })
    ], FilterDataPipe);
    return FilterDataPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".hero-image {\r\n    position: relative;\r\n}\r\n\r\n.hero-text-na {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 20%;\r\n    color: white;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n\r\n}\r\n\r\n.hero-text-sa {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 58%;\r\n    left: 35%;\r\n    color: white;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-text-eu {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 55%;\r\n    color: white;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-text-za {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 55%;\r\n    color: white;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-text-asia {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 75%;\r\n    color: white;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-text-aus {    \r\n    text-align: center;\r\n    position: absolute;\r\n    top: 62%;\r\n    left: 90%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.hero-text button{\r\n    background-color: lightcyan;\r\n    color: #4abdac;\r\n    font-weight: bolder;\r\n    font-size: 0.5em;\r\n}\r\n\r\n.hero-text button:hover{\r\n    background-color:white;\r\n    color: #4abdac;\r\n}\r\n\r\n/* Extra small devices (portrait phones, less than 576px) */\r\n\r\n@media (max-width: 500px) { \r\n    .hero-text button{\r\n        font-size: 0.6em;\r\n    }\r\n    \r\n }\r\n\r\n/* Small devices (landscape phones, less than 768px) */\r\n\r\n@media (max-width: 699px) and (min-width:500px){\r\n    .hero-text button{\r\n        font-size: 0.8em;\r\n    }\r\n    \r\n }\r\n\r\n/* Medium devices (tablets, less than 992px) */\r\n\r\n@media (max-width: 900px ) and (min-width:700px) { \r\n    .hero-text button{\r\n        font-size: 1em;\r\n    }\r\n    \r\n }\r\n\r\n/* Large devices (desktops, less than 1200px) */\r\n\r\n@media (min-width: 901px) { \r\n    .hero-text button{\r\n        font-size: 1.3em;\r\n    }\r\n }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\n    <img src=\"assets/continents2.gif\" alt=\"Continent\" style=\"width:100%; height:100%\" class=\"fluid-image\">\n    <div class=\"hero-text\">\n      <div class=\"hero-text-na\">\n        <button class=\"btn-link rounded-circle btn-outline-info\" [routerLink]=\"['/allCountry/region/Americas/all']\">North America</button>\n      </div>\n      <div class=\"hero-text-sa\">\n        <button class=\"btn-link rounded-circle btn-outline-info\" [routerLink]=\"['/allCountry/region/Americas/all']\">South America</button>\n      </div>\n      <div class=\"hero-text-eu\">\n        <button class=\"btn-link rounded-circle btn-outline-info\" [routerLink]=\"['/allCountry/region/Europe/all']\">Europe</button>\n      </div>\n      <div class=\"hero-text-za\">\n        <button class=\"btn-link rounded-circle btn-outline-info\" [routerLink]=\"['/allCountry/region/Africa/all']\">Africa</button>\n      </div>\n      <div class=\"hero-text-asia\">\n        <button class=\"btn-link rounded-circle btn-outline-info\" [routerLink]=\"['/allCountry/region/Asia/all']\">Asia</button>\n      </div>\n      <div class=\"hero-text-aus\">\n        <button class=\"btn-info rounded-circle btn-outline-info\" [routerLink]=\"['/allCountry/region/Oceania/all']\">Oceania</button>\n      </div>\n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        //console.log('Home Component called...')
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/display-details/display-details.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-family: 'UnifrakturMaguntia', cursive;        \r\n    color: #000;\r\n    font-weight: bolder;\r\n}\r\n\r\n.hero-image {\r\n    height: 100% !important; \r\n    width:100% !important;        \r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;        \r\n    -webkit-box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);        \r\n            box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    color: black;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/display-details/display-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"displayName\">\n      <img src=\"assets/{{displayName}}.jpg\" alt=\"Region Flag\" class=\"fluid-image hero-image\">\n      <div class=\"hero-text\">\n        <h1 class=\"text-center\">{{displayName}}</h1>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/shared/display-details/display-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayDetailsComponent = /** @class */ (function () {
    function DisplayDetailsComponent() {
    }
    DisplayDetailsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit from displayDetails");
        this.displayName = this.inputDisplayName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DisplayDetailsComponent.prototype, "inputDisplayName", void 0);
    DisplayDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'display-details',
            template: __webpack_require__("./src/app/shared/display-details/display-details.component.html"),
            styles: [__webpack_require__("./src/app/shared/display-details/display-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayDetailsComponent);
    return DisplayDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_details_display_details_component__ = __webpack_require__("./src/app/shared/display-details/display-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__display_details_display_details_component__["a" /* DisplayDetailsComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__display_details_display_details_component__["a" /* DisplayDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map