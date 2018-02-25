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

module.exports = "<section class=\"hero is-dark\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <h1 class=\"title\">\r\n        MHW Reference\r\n      </h1>\r\n      <h2 class=\"subtitle\">\r\n        MHW weakness and classification quick reference\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"section\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
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




var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = "app";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["b" /* GetMonsters */](""));
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__("./src/app/store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__("./src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_monster_list_monster_list_component__ = __webpack_require__("./src/app/components/monster-list/monster-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_monster_monster_component__ = __webpack_require__("./src/app/components/monster/monster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_monster_detail_monster_detail_component__ = __webpack_require__("./src/app/components/monster-detail/monster-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: "monsters",
        component: __WEBPACK_IMPORTED_MODULE_8__components_monster_list_monster_list_component__["a" /* MonsterListComponent */]
    },
    {
        path: "monster/:id",
        component: __WEBPACK_IMPORTED_MODULE_10__components_monster_detail_monster_detail_component__["a" /* MonsterDetailComponent */]
    },
    {
        path: "",
        redirectTo: "/monsters",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "/monsters",
        pathMatch: "full"
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_monster_list_monster_list_component__["a" /* MonsterListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_monster_monster_component__["a" /* MonsterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_monster_detail_monster_detail_component__["a" /* MonsterDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["d" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__store__["f" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__store__["c" /* effects */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            providers: __WEBPACK_IMPORTED_MODULE_7__services__["a" /* services */].slice(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/monster-detail/monster-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/monster-detail/monster-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-ancestor\">\n  <div class=\"tile is-parent is-4\">\n    <article class=\"tile is-child notification is-light\">\n      <p class=\"title\">{{ (monster | async)?.name }}</p>\n      <p class=\"subtitle\">{{ (monster | async)?.type }}</p>\n      <figure class=\"image is-square\">\n        <img [src]=\"(monster | async)?.img\">\n      </figure>\n    </article>\n  </div>\n  <div class=\"tile\" *ngFor=\"let weakness of (monster | async)?.weaknesses\">\n    <div class=\"tile is-parent is-vertical\">\n      <article class=\"tile is-child notification is-light\">\n        <p class=\"title\">Elemental - {{ weakness.form }}</p>\n        <table class=\"table\">\n          <tbody>\n            <tr *ngFor=\"let state of weakness.elemental\">\n              <td>{{ state.name }}</td>\n              <td>\n                <span *ngFor=\"let i of range(state.value)\" class=\"icon has-text-warning\">\n                  <i class=\"fas fa-star\"></i>\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </article>\n      <article class=\"tile is-child notification is-light\">\n        <p class=\"title\">Ailments - {{ weakness.form }}</p>\n        <table class=\"table\">\n          <tbody>\n            <tr *ngFor=\"let state of weakness.ailments\">\n              <td>{{ state.name }}</td>\n              <td>\n                <span *ngFor=\"let i of range(state.value)\" class=\"icon has-text-warning\">\n                  <i class=\"fas fa-star\"></i>\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </article>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/monster-detail/monster-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./src/app/store/index.ts");
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
    function MonsterDetailComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    MonsterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.monster = this.store.select(__WEBPACK_IMPORTED_MODULE_5__store__["d" /* monsterDetailMonster */]);
        this.route.paramMap.subscribe(function (params) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store__["a" /* GetMonsterById */](parseInt(params.get("id"))));
        });
    };
    MonsterDetailComponent.prototype.range = function (length) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](length);
    };
    MonsterDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-monster-detail",
            template: __webpack_require__("./src/app/components/monster-detail/monster-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/monster-detail/monster-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
    ], MonsterDetailComponent);
    return MonsterDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/monster-list/monster-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/monster-list/monster-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\r\n  <div class=\"control\">\r\n    <input class=\"input\" type=\"text\" placeholder=\"Search\" (input)=\"searchTerm = $event.target.value\" (keyup)=\"search()\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"columns is-multiline\">\r\n  <div class=\"column is-one-quarter\" *ngFor=\"let monster of (monsters | async)\">\r\n    <app-monster [monster]=monster></app-monster>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/monster-list/monster-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__("./src/app/store/index.ts");
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
    function MonsterListComponent(store) {
        this.store = store;
    }
    MonsterListComponent.prototype.ngOnInit = function () {
        this.monsters = this.store.select(__WEBPACK_IMPORTED_MODULE_2__store__["e" /* monstersMonsters */]);
    };
    MonsterListComponent.prototype.search = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__store__["b" /* GetMonsters */](this.searchTerm));
    };
    MonsterListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-monster-list",
            template: __webpack_require__("./src/app/components/monster-list/monster-list.component.html"),
            styles: [__webpack_require__("./src/app/components/monster-list/monster-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], MonsterListComponent);
    return MonsterListComponent;
}());



/***/ }),

/***/ "./src/app/components/monster/monster.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/monster/monster.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"onClick()\">\r\n  <div class=\"card-content\">\r\n    <div class=\"media\">\r\n      <div class=\"media-left\">\r\n        <figure class=\"image is-128x128\">\r\n          <img [src]=monster.img [alt]=monster.name>\r\n        </figure>\r\n      </div>\r\n      <div class=\"media-content\" style=\"overflow-y: hidden\">\r\n        <p class=\"title is-5\">{{ monster.name }}</p>\r\n        <p class=\"subtitle is-6\">{{ monster.type }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/monster/monster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("./src/app/models/index.ts");
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
        this.router.navigate(["monster", this.monster.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MonsterComponent.prototype, "monster", void 0);
    MonsterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-monster",
            template: __webpack_require__("./src/app/components/monster/monster.component.html"),
            styles: [__webpack_require__("./src/app/components/monster/monster.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MonsterComponent);
    return MonsterComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monsters_model__ = __webpack_require__("./src/app/models/monsters.model.ts");
/* unused harmony reexport namespace */



/***/ }),

/***/ "./src/app/models/monsters.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export anjanath */
/* unused harmony export azureRathalos */
/* unused harmony export barroth */
/* unused harmony export bazelgeuse */
/* unused harmony export blackDiablos */
/* unused harmony export diablos */
/* unused harmony export dodogama */
/* unused harmony export greatGirros */
/* unused harmony export greatJagras */
/* unused harmony export jyuratodus */
/* unused harmony export kirin */
/* unused harmony export kuluYaKu */
/* unused harmony export kushalaDaora */
/* unused harmony export lavasioth */
/* unused harmony export legiana */
/* unused harmony export nergigante */
/* unused harmony export odogaron */
/* unused harmony export paolumu */
/* unused harmony export pinkRathian */
/* unused harmony export pukeiPukei */
/* unused harmony export radobaan */
/* unused harmony export rathalos */
/* unused harmony export rathian */
/* unused harmony export teostra */
/* unused harmony export tobiKadachi */
/* unused harmony export tzitziYaKu */
/* unused harmony export uragaan */
/* unused harmony export vaalHazak */
/* unused harmony export xenoJiiva */
/* unused harmony export zorahMagdaros */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allMonsters; });
var anjanath = {
    id: 0,
    name: "Anjanath",
    description: "",
    img: "assets/images/MHW-Anjanath_Icon.png",
    type: "Brute Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var azureRathalos = {
    id: 1,
    name: "Azure Rathalos",
    description: "",
    img: "assets/images/MHW-Azure_Rathalos_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var barroth = {
    id: 2,
    name: "Barroth",
    description: "",
    img: "assets/images/MHW-Barroth_Icon.png",
    type: "Brute Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 3 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 0 }
            ],
            ailments: [
                { name: "Blast", value: 3 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        },
        {
            form: "Mud",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        }
    ]
};
var bazelgeuse = {
    id: 3,
    name: "Bazelgeuse",
    description: "",
    img: "assets/images/MHW-Bazelgeuse_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        }
    ]
};
var blackDiablos = {
    id: 4,
    name: "Black Diablos",
    description: "",
    img: "assets/images/MHW-Black_Diablos_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 0 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 3 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        }
    ]
};
var diablos = {
    id: 5,
    name: "Diablos",
    description: "",
    img: "assets/images/MHW-Diablos_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 3 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        }
    ]
};
var dodogama = {
    id: 6,
    name: "Dodogama",
    description: "",
    img: "assets/images/MHW-Dodogama_Icon.png",
    type: "Fanged Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var greatGirros = {
    id: 7,
    name: "Great Girros",
    description: "",
    img: "assets/images/MHW-Great_Girros_Icon.png",
    type: "Fanged Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 2 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 1 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 3 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var greatJagras = {
    id: 8,
    name: "Great Jagras",
    description: "",
    img: "assets/images/MHW-Great_Jagras_Icon.png",
    type: "Fanged Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 3 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 0 }
            ],
            ailments: [
                { name: "Blast", value: 3 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 3 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var jyuratodus = {
    id: 9,
    name: "Jyuratodus",
    description: "",
    img: "assets/images/MHW-Jyuratodus_Icon.png",
    type: "Piscine Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 1 },
                { name: "Ice", value: 0 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 3 }
            ]
        },
        {
            form: "Mud",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var kirin = {
    id: 10,
    name: "Kirin",
    description: "",
    img: "assets/images/MHW-Kirin_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 3 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 0 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        }
    ]
};
var kuluYaKu = {
    id: 11,
    name: "Kulu-Ya-Ku",
    description: "",
    img: "assets/images/MHW-Kulu-Ya-Ku_Icon.png",
    type: "Bird Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 2 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var kushalaDaora = {
    id: 12,
    name: "Kushala Daora",
    description: "",
    img: "assets/images/MHW-Kushala_Daora_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 1 },
                { name: "Ice", value: 0 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 0 }
            ],
            ailments: [
                { name: "Blast", value: 3 },
                { name: "Paralysis", value: 1 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var lavasioth = {
    id: 13,
    name: "Lavasioth",
    description: "",
    img: "assets/images/MHW-Lavasioth_Icon.png",
    type: "Piscine Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 3 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 1 }
            ]
        },
        {
            form: "Hard",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 1 },
                { name: "Ice", value: 0 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var legiana = {
    id: 14,
    name: "Legiana",
    description: "",
    img: "assets/images/MHW-Legiana_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 2 },
                { name: "Ice", value: 0 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var nergigante = {
    id: 15,
    name: "Nergigante",
    description: "",
    img: "assets/images/MHW-Nergigante_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 1 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var odogaron = {
    id: 16,
    name: "Odogaron",
    description: "",
    img: "assets/images/MHW-Odogaron_Icon.png",
    type: "Fanged Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 0 },
                { name: "Fire", value: 1 },
                { name: "Ice", value: 3 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 3 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var paolumu = {
    id: 17,
    name: "Paolumu",
    description: "",
    img: "assets/images/MHW-Paolumu_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 3 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 0 }
            ],
            ailments: [
                { name: "Blast", value: 3 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var pinkRathian = {
    id: 18,
    name: "Pink Rathian",
    description: "",
    img: "assets/images/MHW-Pink_Rathian_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var pukeiPukei = {
    id: 19,
    name: "Pukei-Pukei",
    description: "",
    img: "assets/images/MHW-Pukei-Pukei_Icon.png",
    type: "Bird Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var radobaan = {
    id: 20,
    name: "Radobaan",
    description: "",
    img: "assets/images/MHW-Radobaan_Icon.png",
    type: "Brute Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 1 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 3 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var rathalos = {
    id: 21,
    name: "Rathalos",
    description: "",
    img: "assets/images/MHW-Rathalos_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var rathian = {
    id: 22,
    name: "Rathian",
    description: "",
    img: "assets/images/MHW-Rathian_Icon.png",
    type: "Flying Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 1 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 1 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var teostra = {
    id: 23,
    name: "Teostra",
    description: "",
    img: "assets/images/MHW-Teostra_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 3 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 1 },
                { name: "Paralysis", value: 1 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var tobiKadachi = {
    id: 24,
    name: "Tobi-Kadachi",
    description: "",
    img: "assets/images/MHW-Tobi-Kadachi_Icon.png",
    type: "Fanged Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 1 },
                { name: "Fire", value: 2 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 0 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var tzitziYaKu = {
    id: 25,
    name: "Tzitzi-Ya-Ku",
    description: "",
    img: "assets/images/MHW-Tzitzi-Ya-Ku_Icon.png",
    type: "Bird Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 2 },
                { name: "Ice", value: 3 },
                { name: "Thunder", value: 3 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 2 },
                { name: "Sleep", value: 2 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var uragaan = {
    id: 26,
    name: "Uragaan",
    description: "",
    img: "assets/images/MHW-Uragaan_Icon.png",
    type: "Brute Wyvern",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 2 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 3 }
            ]
        }
    ]
};
var vaalHazak = {
    id: 27,
    name: "Vaal Hazak",
    description: "",
    img: "assets/images/MHW-Vaal_Hazak_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 3 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 0 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 1 },
                { name: "Poison", value: 1 },
                { name: "Sleep", value: 1 },
                { name: "Stun", value: 2 }
            ]
        }
    ]
};
var xenoJiiva = {
    id: 28,
    name: "Xeno'jiiva",
    description: "",
    img: "assets/images/MHW-Xeno-jiiva_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 2 },
                { name: "Fire", value: 2 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 2 },
                { name: "Water", value: 2 }
            ],
            ailments: [
                { name: "Blast", value: 2 },
                { name: "Paralysis", value: 1 },
                { name: "Poison", value: 3 },
                { name: "Sleep", value: 0 },
                { name: "Stun", value: 1 }
            ]
        }
    ]
};
var zorahMagdaros = {
    id: 29,
    name: "Zorah Magdaros",
    description: "",
    img: "assets/images/MHW-Zorah_Magdaros_Icon.png",
    type: "Elder Dragon",
    weaknesses: [
        {
            form: "Normal",
            elemental: [
                { name: "Dragon", value: 3 },
                { name: "Fire", value: 0 },
                { name: "Ice", value: 2 },
                { name: "Thunder", value: 1 },
                { name: "Water", value: 3 }
            ],
            ailments: [
                { name: "Blast", value: 0 },
                { name: "Paralysis", value: 0 },
                { name: "Poison", value: 0 },
                { name: "Sleep", value: 0 },
                { name: "Stun", value: 0 }
            ]
        }
    ]
};
var allMonsters = [
    anjanath,
    azureRathalos,
    barroth,
    bazelgeuse,
    blackDiablos,
    diablos,
    dodogama,
    greatGirros,
    greatJagras,
    jyuratodus,
    kirin,
    kuluYaKu,
    kushalaDaora,
    lavasioth,
    legiana,
    nergigante,
    odogaron,
    paolumu,
    pinkRathian,
    pukeiPukei,
    radobaan,
    rathalos,
    rathian,
    teostra,
    tobiKadachi,
    tzitziYaKu,
    uragaan,
    vaalHazak,
    xenoJiiva,
    zorahMagdaros
];


/***/ }),

/***/ "./src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monster_service__ = __webpack_require__("./src/app/services/monster.service.ts");

var services = [__WEBPACK_IMPORTED_MODULE_0__monster_service__["a" /* MonsterService */]];


/***/ }),

/***/ "./src/app/services/monster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_monsters_model__ = __webpack_require__("./src/app/models/monsters.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonsterService = (function () {
    function MonsterService() {
    }
    MonsterService.prototype.get = function (filter) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_4__models_monsters_model__["a" /* allMonsters */], function (monster) { return monster.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0; }));
    };
    MonsterService.prototype.ofType = function (type) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_4__models_monsters_model__["a" /* allMonsters */], function (monster) { return monster.type.toLowerCase().indexOf(type.toLowerCase()) >= 0; }));
    };
    MonsterService.prototype.byId = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](__WEBPACK_IMPORTED_MODULE_4__models_monsters_model__["a" /* allMonsters */], function (monster) { return monster.id == id; }));
    };
    MonsterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MonsterService);
    return MonsterService;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monster_action__ = __webpack_require__("./src/app/store/actions/monster.action.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__monster_action__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_detail_action__ = __webpack_require__("./src/app/store/actions/monster-detail.action.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__monster_detail_action__["d"]; });




/***/ }),

/***/ "./src/app/store/actions/monster-detail.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MONSTER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_MONSTER_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MONSTER_BY_ID_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetMonsterById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetMonsterByIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetMonsterByIdFail; });
var GET_MONSTER_BY_ID = "[Monster] Get by Id";
var GET_MONSTER_BY_ID_SUCCESS = "[Monster] Get by Id Success";
var GET_MONSTER_BY_ID_FAIL = "[Monster] Get by Id Fail";
var GetMonsterById = (function () {
    function GetMonsterById(id) {
        this.id = id;
        this.type = GET_MONSTER_BY_ID;
    }
    return GetMonsterById;
}());

var GetMonsterByIdSuccess = (function () {
    function GetMonsterByIdSuccess(monster) {
        this.monster = monster;
        this.type = GET_MONSTER_BY_ID_SUCCESS;
    }
    return GetMonsterByIdSuccess;
}());

var GetMonsterByIdFail = (function () {
    function GetMonsterByIdFail(error) {
        this.error = error;
        this.type = GET_MONSTER_BY_ID_FAIL;
    }
    return GetMonsterByIdFail;
}());



/***/ }),

/***/ "./src/app/store/actions/monster.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MONSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_MONSTERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_MONSTERS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_MONSTERS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GetMonsters; });
/* unused harmony export GetMonstersType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetMonstersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetMonstersFail; });
var GET_MONSTERS = "[Monsters] Get Monsters";
var GET_MONSTERS_SUCCESS = "[Monsters] Get All Success";
var GET_MONSTERS_FAIL = "[Monsters] Get All Fail";
var GET_MONSTERS_TYPE = "[Monsters] Get Monsters Type";
var GetMonsters = (function () {
    function GetMonsters(filter) {
        this.filter = filter;
        this.type = GET_MONSTERS;
    }
    return GetMonsters;
}());

var GetMonstersType = (function () {
    function GetMonstersType(monsterType) {
        this.monsterType = monsterType;
        this.type = GET_MONSTERS_TYPE;
    }
    return GetMonstersType;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__monster_effect__ = __webpack_require__("./src/app/store/effects/monster.effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_detail_effect__ = __webpack_require__("./src/app/store/effects/monster-detail.effect.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */


var effects = [__WEBPACK_IMPORTED_MODULE_0__monster_effect__["a" /* MonsterEffects */], __WEBPACK_IMPORTED_MODULE_1__monster_detail_effect__["a" /* MonsterDetailEffects */]];




/***/ }),

/***/ "./src/app/store/effects/monster-detail.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterDetailEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_monster_service__ = __webpack_require__("./src/app/services/monster.service.ts");
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
    function MonsterDetailEffects(actions, monsterService) {
        var _this = this;
        this.actions = actions;
        this.monsterService = monsterService;
        this.monster = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__["a" /* GET_MONSTER_BY_ID */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (action) { return action.id; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (id) {
            return _this.monsterService
                .byId(id)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (monster) { return new __WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__["f" /* GetMonsterByIdSuccess */](monster); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_monster_detail_action__["e" /* GetMonsterByIdFail */](error)); }));
        }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MonsterDetailEffects.prototype, "monster", void 0);
    MonsterDetailEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__services_monster_service__["a" /* MonsterService */]])
    ], MonsterDetailEffects);
    return MonsterDetailEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/monster.effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_monster_service__ = __webpack_require__("./src/app/services/monster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_monster_action__ = __webpack_require__("./src/app/store/actions/monster.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MonsterEffects = (function () {
    function MonsterEffects(actions, monsterService) {
        var _this = this;
        this.actions = actions;
        this.monsterService = monsterService;
        this.monsters = this.actions
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_monster_action__["a" /* GET_MONSTERS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (action) { return action.filter; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (filter) {
            return _this.monsterService
                .get(filter)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (monsters) { return new __WEBPACK_IMPORTED_MODULE_5__actions_monster_action__["g" /* GetMonstersSuccess */](monsters); }, Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_monster_action__["f" /* GetMonstersFail */](error)); })));
        }));
        this.monstersOfType = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_5__actions_monster_action__["d" /* GET_MONSTERS_TYPE */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (action) { return action.monsterType; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* switchMap */])(function (type) { return _this.monsterService.ofType(type).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* map */])(function (monsters) { return new __WEBPACK_IMPORTED_MODULE_5__actions_monster_action__["g" /* GetMonstersSuccess */](monsters); }, Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_5__actions_monster_action__["f" /* GetMonstersFail */](error)); }))); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MonsterEffects.prototype, "monsters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], MonsterEffects.prototype, "monstersOfType", void 0);
    MonsterEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__services_monster_service__["a" /* MonsterService */]])
    ], MonsterEffects);
    return MonsterEffects;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__monster_reducers__ = __webpack_require__("./src/app/store/reducers/monster.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__ = __webpack_require__("./src/app/store/reducers/monster-detail.reducers.ts");



var reducers = {
    monsters: __WEBPACK_IMPORTED_MODULE_1__monster_reducers__["c" /* reduceMonsters */],
    monsterDetail: __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__["c" /* reduceMonsterDetail */]
};
var monsters = function (state) { return state.monsters; };
var monstersMonsters = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["g" /* createSelector */])(monsters, __WEBPACK_IMPORTED_MODULE_1__monster_reducers__["b" /* monsters */]);
var monstersError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["g" /* createSelector */])(monsters, __WEBPACK_IMPORTED_MODULE_1__monster_reducers__["a" /* error */]);
var monsterDetail = function (state) { return state.monsterDetail; };
var monsterDetailMonster = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["g" /* createSelector */])(monsterDetail, __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__["b" /* monster */]);
var monsterDetailError = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["g" /* createSelector */])(monsterDetail, __WEBPACK_IMPORTED_MODULE_2__monster_detail_reducers__["a" /* error */]);


/***/ }),

/***/ "./src/app/store/reducers/monster-detail.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialMonsterDetailState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reduceMonsterDetail;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monster; });
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_monster_detail_action__["c" /* GET_MONSTER_BY_ID_SUCCESS */]: {
            var monster_1 = action.monster;
            return __assign({}, state, { monster: monster_1 });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_monster_detail_action__["b" /* GET_MONSTER_BY_ID_FAIL */]: {
            var error_1 = action.error;
            return __assign({}, state, { error: error_1 });
        }
    }
    return state;
}
var monster = function (state) { return state.monster; };
var error = function (state) { return state.error; };


/***/ }),

/***/ "./src/app/store/reducers/monster.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialMonsterState */
/* harmony export (immutable) */ __webpack_exports__["c"] = reduceMonsters;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monsters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_monster_action__ = __webpack_require__("./src/app/store/actions/monster.action.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialMonsterState = {
    monsters: [],
    error: null
};
function reduceMonsters(state, action) {
    if (state === void 0) { state = initialMonsterState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_monster_action__["c" /* GET_MONSTERS_SUCCESS */]: {
            var monsters_1 = action.monsters;
            return __assign({}, state, { monsters: monsters_1 });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_monster_action__["b" /* GET_MONSTERS_FAIL */]: {
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