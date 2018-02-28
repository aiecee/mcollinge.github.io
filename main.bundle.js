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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", redirectTo: "/monsters", pathMatch: "full" },
    { path: "**", redirectTo: "/monsters", pathMatch: "full" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, {
                    enableTracing: !__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production,
                    useHash: true
                })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                gtag("config", "UA-114913099-1", {
                    page_location: event.urlAfterRedirects
                });
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: "\n  <section class=\"hero is-light\">\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <h1 class=\"title\">\n          MHW Reference\n        </h1>\n        <h2 class=\"subtitle\">\n          MHW weakness and classification quick reference\n        </h2>\n      </div>\n    </div>\n  </section>\n  <section class=\"section\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </section>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__("./src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__large_monsters_large_monsters_module__ = __webpack_require__("./src/app/large-monsters/large-monsters.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__store__["f" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__store__["c" /* effects */]),
                __WEBPACK_IMPORTED_MODULE_10__large_monsters_large_monsters_module__["a" /* LargeMonstersModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25,
                    logOnly: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production
                })
            ],
            providers: __WEBPACK_IMPORTED_MODULE_9__services__["a" /* services */].slice(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/large-monsters/large-monsters-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeMonstersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monster_list_monster_list_component__ = __webpack_require__("./src/app/large-monsters/monster-list/monster-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_detail_monster_detail_component__ = __webpack_require__("./src/app/large-monsters/monster-detail/monster-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "monsters", component: __WEBPACK_IMPORTED_MODULE_2__monster_list_monster_list_component__["a" /* MonsterListComponent */] },
    { path: "monsters/:id", component: __WEBPACK_IMPORTED_MODULE_3__monster_detail_monster_detail_component__["a" /* MonsterDetailComponent */] }
];
var LargeMonstersRoutingModule = (function () {
    function LargeMonstersRoutingModule() {
    }
    LargeMonstersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LargeMonstersRoutingModule);
    return LargeMonstersRoutingModule;
}());



/***/ }),

/***/ "./src/app/large-monsters/large-monsters.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeMonstersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monster_list_monster_list_component__ = __webpack_require__("./src/app/large-monsters/monster-list/monster-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monster_detail_monster_detail_component__ = __webpack_require__("./src/app/large-monsters/monster-detail/monster-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monster_monster_component__ = __webpack_require__("./src/app/large-monsters/monster/monster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__large_monsters_routing_module__ = __webpack_require__("./src/app/large-monsters/large-monsters-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LargeMonstersModule = (function () {
    function LargeMonstersModule() {
    }
    LargeMonstersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__large_monsters_routing_module__["a" /* LargeMonstersRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__monster_list_monster_list_component__["a" /* MonsterListComponent */], __WEBPACK_IMPORTED_MODULE_3__monster_detail_monster_detail_component__["a" /* MonsterDetailComponent */], __WEBPACK_IMPORTED_MODULE_4__monster_monster_component__["a" /* MonsterComponent */]]
        })
    ], LargeMonstersModule);
    return LargeMonstersModule;
}());



/***/ }),

/***/ "./src/app/large-monsters/monster-detail/monster-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-ancestor\">\r\n    <div class=\"tile is-parent is-4\">\r\n        <article class=\"tile is-child notification is-light\">\r\n            <p class=\"title\">{{ (monster | async)?.name }}</p>\r\n            <p class=\"subtitle\">{{ (monster | async)?.type }}</p>\r\n            <figure class=\"image is-square\">\r\n                <img [src]=\"(monster | async)?.img\">\r\n            </figure>\r\n        </article>\r\n    </div>\r\n    <div class=\"tile\" *ngFor=\"let weakness of (monster | async)?.weaknesses\">\r\n        <div class=\"tile is-parent is-vertical\">\r\n            <article class=\"tile is-child notification is-light\">\r\n                <p class=\"title\">Elemental - {{ weakness.form }}</p>\r\n                <table class=\"table\">\r\n                    <tbody>\r\n                        <tr *ngFor=\"let state of weakness.elemental\">\r\n                            <td>{{ state.name }}</td>\r\n                            <td>\r\n                                <span *ngFor=\"let i of range(state.value)\" class=\"icon has-text-warning\">\r\n                                    <i class=\"fas fa-star\"></i>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </article>\r\n            <article class=\"tile is-child notification is-light\">\r\n                <p class=\"title\">Ailments - {{ weakness.form }}</p>\r\n                <table class=\"table\">\r\n                    <tbody>\r\n                        <tr *ngFor=\"let state of weakness.ailments\">\r\n                            <td>{{ state.name }}</td>\r\n                            <td>\r\n                                <span *ngFor=\"let i of range(state.value)\" class=\"icon has-text-warning\">\r\n                                    <i class=\"fas fa-star\"></i>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </article>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/large-monsters/monster-detail/monster-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__("./src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MonsterDetailComponent = (function () {
    function MonsterDetailComponent(route, router, store, title) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.title = title;
    }
    MonsterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.monster = this.store
            .select(__WEBPACK_IMPORTED_MODULE_6__store__["d" /* monsterDetailMonster */])
            .do(function (mon) {
            if (mon) {
                _this.title.setTitle("Monster Hunter Reference - " + mon.name);
                gtag("event", "View " + mon.name, {
                    event_category: "View Monster Detail",
                    event_label: mon.name
                });
            }
        })
            .share();
        this.route.paramMap.subscribe(function (params) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store__["a" /* GetMonsterDetail */](params.get("id")));
        });
    };
    MonsterDetailComponent.prototype.range = function (length) {
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["range"](length);
    };
    MonsterDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-monster-detail",
            template: __webpack_require__("./src/app/large-monsters/monster-detail/monster-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["b" /* Title */]])
    ], MonsterDetailComponent);
    return MonsterDetailComponent;
}());



/***/ }),

/***/ "./src/app/large-monsters/monster-list/monster-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./src/app/store/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MonsterListComponent = (function () {
    function MonsterListComponent(store, title) {
        this.store = store;
        this.title = title;
    }
    MonsterListComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        this.monsters = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["e" /* monstersMonsters */]);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["b" /* GetMonsters */](""));
    };
    MonsterListComponent.prototype.search = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["b" /* GetMonsters */](this.searchTerm));
    };
    MonsterListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-monster-list",
            template: "\n  <div class=\"field\">\n    <div class=\"control\">\n      <input class=\"input\" type=\"text\" placeholder=\"Search\" (input)=\"searchTerm = $event.target.value\" (keyup)=\"search()\">\n    </div>\n  </div>\n  <div class=\"columns is-multiline\">\n    <div class=\"column is-one-quarter\" *ngFor=\"let monster of (monsters | async)\">\n      <app-monster [monster]=\"monster\" ></app-monster>\n    </div>\n  </div>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], MonsterListComponent);
    return MonsterListComponent;
}());



/***/ }),

/***/ "./src/app/large-monsters/monster/monster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MonsterComponent = (function () {
    function MonsterComponent(router) {
        this.router = router;
    }
    MonsterComponent.prototype.ngOnInit = function () { };
    MonsterComponent.prototype.onClick = function () {
        this.router.navigate(["monsters", this.monster.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MonsterComponent.prototype, "monster", void 0);
    MonsterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-monster",
            template: "\n    <div class=\"card\" (click)=\"onClick()\">\n      <div class=\"card-content\">\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <figure class=\"image is-128x128\">\n              <img [src]=\"monster.img\" [alt]=\"monster.name\" >\n            </figure>\n          </div>\n          <div class=\"media-content\" style=\"overflow-y: hidden\">\n            <p class=\"title is-5\">{{ monster.name }}</p>\n            <p class=\"subtitle is-6\">{{ monster.type }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], MonsterComponent);
    return MonsterComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/services/definitions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MONSTER_DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefinitionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MONSTER_DEFINITIONS = "./assets/definitions/monster_definitions.json";
var DefinitionsService = (function () {
    function DefinitionsService(http) {
        this.http = http;
    }
    DefinitionsService.prototype.load = function (path) {
        return this.http.get(path);
    };
    DefinitionsService.prototype.byId = function (path, id) {
        return this.http
            .get(path)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (dict) { return dict[id]; }));
    };
    DefinitionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DefinitionsService);
    return DefinitionsService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__definitions_service__ = __webpack_require__("./src/app/services/definitions.service.ts");

var services = [__WEBPACK_IMPORTED_MODULE_0__definitions_service__["a" /* DefinitionsService */]];


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monsters_action__ = __webpack_require__("./src/app/store/actions/monsters.action.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__monsters_action__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_detail_action__ = __webpack_require__("./src/app/store/actions/monster-detail.action.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__monster_detail_action__["d"]; });




/***/ }),

/***/ "./src/app/store/actions/monster-detail.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MONSTER_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_MONSTER_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MONSTER_DETAIL_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetMonsterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetMonsterDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetMonsterDetailFail; });
var GET_MONSTER_DETAIL = "[Monster Detail] Get Monster";
var GET_MONSTER_DETAIL_SUCCESS = "[Monster Detail] Get Monster Success";
var GET_MONSTER_DETAIL_FAIL = "[Monster Detail] Get Monster Fail";
var GetMonsterDetail = (function () {
    function GetMonsterDetail(id) {
        this.id = id;
        this.type = GET_MONSTER_DETAIL;
    }
    return GetMonsterDetail;
}());

var GetMonsterDetailSuccess = (function () {
    function GetMonsterDetailSuccess(monster) {
        this.monster = monster;
        this.type = GET_MONSTER_DETAIL_SUCCESS;
    }
    return GetMonsterDetailSuccess;
}());

var GetMonsterDetailFail = (function () {
    function GetMonsterDetailFail(error) {
        this.error = error;
        this.type = GET_MONSTER_DETAIL_FAIL;
    }
    return GetMonsterDetailFail;
}());



/***/ }),

/***/ "./src/app/store/actions/monsters.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MONSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_MONSTERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MONSTERS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetMonsters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetMonstersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetMonstersFail; });
var GET_MONSTERS = "[Monsters] Get Monsters";
var GET_MONSTERS_SUCCESS = "[Monsters] Get All Success";
var GET_MONSTERS_FAIL = "[Monsters] Get All Fail";
var GetMonsters = (function () {
    function GetMonsters(filter) {
        this.filter = filter;
        this.type = GET_MONSTERS;
    }
    return GetMonsters;
}());

var GetMonstersSuccess = (function () {
    function GetMonstersSuccess(monsters) {
        this.monsters = monsters;
        this.type = GET_MONSTERS_SUCCESS;
    }
    return GetMonstersSuccess;
}());

var GetMonstersFail = (function () {
    function GetMonstersFail(error) {
        this.error = error;
        this.type = GET_MONSTERS_FAIL;
    }
    return GetMonstersFail;
}());



/***/ }),

/***/ "./src/app/store/effects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monsters_effect__ = __webpack_require__("./src/app/store/effects/monsters.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_detail_effect__ = __webpack_require__("./src/app/store/effects/monster-detail.effect.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */


var effects = [__WEBPACK_IMPORTED_MODULE_0__monsters_effect__["a" /* MonstersEffects */], __WEBPACK_IMPORTED_MODULE_1__monster_detail_effect__["a" /* MonsterDetailEffects */]];




/***/ }),

/***/ "./src/app/store/effects/monster-detail.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterDetailEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_definitions_service__ = __webpack_require__("./src/app/services/definitions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__ = __webpack_require__("./src/app/store/actions/monster-detail.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MonsterDetailEffects = (function () {
    function MonsterDetailEffects(actions, defService) {
        var _this = this;
        this.actions = actions;
        this.defService = defService;
        this.monsterDetail = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__["a" /* GET_MONSTER_DETAIL */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (action) { return action.id; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (id) {
            return _this.defService
                .byId(__WEBPACK_IMPORTED_MODULE_4__services_definitions_service__["b" /* MONSTER_DEFINITIONS */], id)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (monster) {
                return new __WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__["f" /* GetMonsterDetailSuccess */](monster);
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__["e" /* GetMonsterDetailFail */](error)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MonsterDetailEffects.prototype, "monsterDetail", void 0);
    MonsterDetailEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__services_definitions_service__["a" /* DefinitionsService */]])
    ], MonsterDetailEffects);
    return MonsterDetailEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/monsters.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_monsters_action__ = __webpack_require__("./src/app/store/actions/monsters.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_definitions_service__ = __webpack_require__("./src/app/services/definitions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MonstersEffects = (function () {
    function MonstersEffects(actions, defService) {
        var _this = this;
        this.actions = actions;
        this.defService = defService;
        this.monsters = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_monsters_action__["a" /* GET_MONSTERS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (action) { return action.filter; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (filter) {
            return _this.defService
                .load(__WEBPACK_IMPORTED_MODULE_6__services_definitions_service__["b" /* MONSTER_DEFINITIONS */])
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (monsters) {
                return new __WEBPACK_IMPORTED_MODULE_5__actions_monsters_action__["f" /* GetMonstersSuccess */](__WEBPACK_IMPORTED_MODULE_4_lodash__["values"](monsters).filter(function (m) { return m.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0; }));
            }, Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_monsters_action__["e" /* GetMonstersFail */](error)); })));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MonstersEffects.prototype, "monsters", void 0);
    MonstersEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_6__services_definitions_service__["a" /* DefinitionsService */]])
    ], MonstersEffects);
    return MonstersEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./src/app/store/actions/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__actions__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__effects__ = __webpack_require__("./src/app/store/effects/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__effects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("./src/app/store/reducers/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__reducers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__reducers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__reducers__["c"]; });





/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export monsters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monstersMonsters; });
/* unused harmony export monstersError */
/* unused harmony export monsterDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monsterDetailMonster; });
/* unused harmony export monsterDetailError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monsters_reducers__ = __webpack_require__("./src/app/store/reducers/monsters.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__ = __webpack_require__("./src/app/store/reducers/monster-detail.reducers.ts");



var reducers = {
    monsters: __WEBPACK_IMPORTED_MODULE_1__monsters_reducers__["c" /* reduceMonsters */],
    monsterDetail: __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__["c" /* reduceMonsterDetail */]
};
var monsters = function (state) { return state.monsters; };
var monstersMonsters = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(monsters, __WEBPACK_IMPORTED_MODULE_1__monsters_reducers__["b" /* monsters */]);
var monstersError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(monsters, __WEBPACK_IMPORTED_MODULE_1__monsters_reducers__["a" /* error */]);
var monsterDetail = function (state) { return state.monsterDetail; };
var monsterDetailMonster = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(monsterDetail, __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__["b" /* monsterDetail */]);
var monsterDetailError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createSelector */])(monsterDetail, __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__["a" /* error */]);


/***/ }),

/***/ "./src/app/store/reducers/monster-detail.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialMonsterDetailState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reduceMonsterDetail;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monsterDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_monster_detail_action__ = __webpack_require__("./src/app/store/actions/monster-detail.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialMonsterDetailState = {
    monster: null,
    error: null
};
function reduceMonsterDetail(state, action) {
    if (state === void 0) { state = initialMonsterDetailState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_monster_detail_action__["c" /* GET_MONSTER_DETAIL_SUCCESS */]: {
            var monster = action.monster;
            return {
                monster: monster,
                error: null
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_monster_detail_action__["b" /* GET_MONSTER_DETAIL_FAIL */]: {
            var error_1 = action.error;
            return __assign({}, state, { error: error_1 });
        }
    }
    return state;
}
var monsterDetail = function (state) { return state.monster; };
var error = function (state) { return state.error; };


/***/ }),

/***/ "./src/app/store/reducers/monsters.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialMonstersState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reduceMonsters;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monsters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_monsters_action__ = __webpack_require__("./src/app/store/actions/monsters.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialMonstersState = {
    monsters: [],
    error: null
};
function reduceMonsters(state, action) {
    if (state === void 0) { state = initialMonstersState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_monsters_action__["c" /* GET_MONSTERS_SUCCESS */]: {
            var monsters_1 = action.monsters;
            return __assign({}, state, { monsters: monsters_1 });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_monsters_action__["b" /* GET_MONSTERS_FAIL */]: {
            var error_1 = action.error;
            return __assign({}, state, { monsters: [], error: error_1 });
        }
    }
    return state;
}
var monsters = function (state) { return state.monsters; };
var error = function (state) { return state.error; };


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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