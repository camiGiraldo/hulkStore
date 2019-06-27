webpackJsonp(["layout.module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n     Hulk Store\r\n\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars\" aria-hidden=\"true\" [ngStyle]=\"{'color': '#0168c5'}\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <!--<form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\r\n        </form>-->\r\n        <ul class=\"navbar-nav ml-auto\">\r\n\r\n            <!--<li class=\"nav-item\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\"\r\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\r\n                    (click)=\"rltAndLtr()\"\r\n                >\r\n                    RTL/LTR\r\n                </a>\r\n            </li> &nbsp;-->\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <!--<a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                </a>\r\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\"\r\n                        >\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\r\n                            alt=\"Generic placeholder image\"\r\n                        >\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\r\n                            alt=\"Generic placeholder image\"\r\n                        />\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                </ul>-->\r\n            </li>\r\n            <!--<li class=\"nav-item dropdown\" ngbDropdown>\r\n              <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\r\n                    </a>\r\n                    <li class=\"dropdown-divider\"></li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'View All' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>-->\r\n            <!--<li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n\r\n\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                        {{ 'English' | translate }}\r\n                    </a>\r\n\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                        {{ 'Spanish' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>-->\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-user\"></i> {{userInfo.username}} <b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <!--   <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                   <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\r\n                    </a>-->\r\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\r\n                    </a>-->\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background: linear-gradient(141deg, #20540d 98%, #64ef36 99%); }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #FFF; }\n  :host .navbar .nav-item > a:hover {\n      color: #0168c5; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n  :host img {\n  width: 100px;\n  margin-right: 15px; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.userInfo = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.userInfo);
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('es');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'es');
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}\r\n        </a>\r\n        <a routerLink=\"/productos\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa fa-truck\"></i>&nbsp;{{ 'Productos' | translate }}\r\n        </a>\r\n        <a routerLink=\"/ges-egresado\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa fa-dollar\"></i>&nbsp;{{ 'Ventas' | translate }}\r\n        </a>\r\n\r\n        <div class=\"header-fields\">\r\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n            </a>\r\n\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                    <span><i class=\"fa fa-user\"></i>&nbsp; lalejandro</span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background: linear-gradient(141deg, #20540d 85%, #61ef32 100%);\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    /*border: 0.5px solid #f8db0a;*/\n    font-size: 18px;\n    padding: 0.7rem 0rem !important;\n    color: #FFF;\n    text-decoration: none;\n    background: linear-gradient(141deg, #257907 83%, #1b6303 100%);\n    -webkit-transition: 0.4s;\n    transition: 0.4s; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 1px; }\n  .sidebar .list-group a:hover {\n    background: #015bac;\n    color: #fff;\n    font-size: 16px; }\n  .sidebar .list-group a.router-link-active {\n    background: #015bac;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent;\n      padding: 0.54rem 0.2rem !important;\n      font-size: 14px !important; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #000; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #000;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('es');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'es');
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'facultades', loadChildren: './facultades/facultades.module#FacultadesModule' },
            { path: 'productos', loadChildren: './productos/productos.module#ProductosModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<section class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__ = __webpack_require__("./src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__ = __webpack_require__("./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("./src/app/layout/components/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map