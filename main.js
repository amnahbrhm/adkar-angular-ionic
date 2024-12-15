(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_adkar_adkar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/adkar/adkar.component */ 2040);
/* harmony import */ var _components_counter_view_counter_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/counter-view/counter-view.component */ 3911);





const routes = [
    {
        path: 'adkar',
        component: _components_adkar_adkar_component__WEBPACK_IMPORTED_MODULE_0__.AdkarComponent
    },
    {
        path: 'counter',
        component: _components_counter_view_counter_view_component__WEBPACK_IMPORTED_MODULE_1__.CounterViewComponent
    },
    { path: '**', redirectTo: 'adkar?type=morning', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
            { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _components_adkar_counter_controller_counter_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/adkar/counter-controller/counter-controller.component */ 2906);
/* harmony import */ var _components_adkar_adkar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/adkar/adkar.component */ 2040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_dker_view_dker_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dker-view/dker-view.component */ 7583);
/* harmony import */ var _components_counter_view_counter_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/counter-view/counter-view.component */ 3911);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _components_adkar_counter_controller_counter_controller_component__WEBPACK_IMPORTED_MODULE_3__.CounterControllerComponent, _components_adkar_adkar_component__WEBPACK_IMPORTED_MODULE_4__.AdkarComponent, _components_dker_view_dker_view_component__WEBPACK_IMPORTED_MODULE_5__.DkerViewComponent, _components_counter_view_counter_view_component__WEBPACK_IMPORTED_MODULE_6__.CounterViewComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2040:
/*!*****************************************************!*\
  !*** ./src/app/components/adkar/adkar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdkarComponent": () => (/* binding */ AdkarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adkar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adkar.component.html?ngResource */ 6681);
/* harmony import */ var _adkar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adkar.component.scss?ngResource */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/idker */ 3280);
/* harmony import */ var src_app_services_adkar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/adkar.service */ 6837);
/* harmony import */ var _dker_view_dker_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dker-view/dker-view.component */ 7583);








let AdkarComponent = class AdkarComponent {
    constructor(activateRoute, adkarService, router) {
        this.activateRoute = activateRoute;
        this.adkarService = adkarService;
        this.router = router;
        this.title = '';
        this.dkerList = '';
        this.getAdkar();
    }
    ngOnInit() { }
    getAdkar() {
        this.activateRoute.queryParams.subscribe((params) => {
            if (params.type === src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.evening) {
                this.adkarType = src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.evening;
                this.title = 'أذكار المساء';
            }
            else if (params.type === src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.morning) {
                this.adkarType = src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.morning;
                this.title = 'أذكار الصباح';
            }
            else if (params.type === src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.afterPrayers) {
                this.adkarType = src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.afterPrayers;
                this.title = 'أذكار مابعد الصلاة';
            }
            else if (params.type === src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.sleep) {
                this.adkarType = src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.sleep;
                this.title = 'أذكار النوم';
            }
            else {
                this.handleWrongNavigation();
            }
            this.adkarService.setCurrentAdkarType(this.adkarType);
            console.log('this.adkarType::: ', this.adkarType);
            if (this.dkerViewComponents)
                this.dkerViewComponents.forEach(dkerView => {
                    dkerView.getSavedCounters();
                });
            this.adkar = [];
            this.adkar = this.adkarService.getAdkar(this.adkarType);
        });
    }
    resetCounters() {
        this.dkerViewComponents.forEach(dkerView => {
            dkerView.resetCounter();
        });
    }
    handleWrongNavigation() {
        this.adkarType = this.adkarService.getCurrentAdkarType();
        this.router.navigate(['adkar'], { queryParams: { type: this.adkarType } });
    }
};
AdkarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_adkar_service__WEBPACK_IMPORTED_MODULE_3__.AdkarService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AdkarComponent.propDecorators = {
    dkerViewComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChildren, args: [_dker_view_dker_view_component__WEBPACK_IMPORTED_MODULE_4__.DkerViewComponent,] }]
};
AdkarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-adkar',
        template: _adkar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_adkar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdkarComponent);



/***/ }),

/***/ 2906:
/*!*************************************************************************************!*\
  !*** ./src/app/components/adkar/counter-controller/counter-controller.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterControllerComponent": () => (/* binding */ CounterControllerComponent)
/* harmony export */ });
/* harmony import */ var _Users_amnahaldughayshim_Desktop_PPs_adkar_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _counter_controller_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter-controller.component.html?ngResource */ 8531);
/* harmony import */ var _counter_controller_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter-controller.component.scss?ngResource */ 2333);
/* harmony import */ var _adkar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adkar.component.scss?ngResource */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_adkar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/adkar.service */ 6837);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let CounterControllerComponent = class CounterControllerComponent {
  constructor(alertController, adkarService) {
    this.alertController = alertController;
    this.adkarService = adkarService;
    this.counterName = "";
    this.counter = 0;
    this.subscribtion = this.adkarService.currentAdkarTypeChange.subscribe(() => {
      this.adkarType = adkarService.getCurrentAdkarType();

      if (this.id) {
        this.counterName = 'count-' + this.adkarType + this.id;
        this.getCounter();
      }
    });
  }

  ngOnInit() {
    this.getCounter();
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;
      this.setCounter();
    }
  }

  getCounter() {
    this.counterName = 'count-' + this.adkarType + this.id;
    const countStorage = localStorage.getItem(this.counterName);
    this.counter = countStorage ? +countStorage : this.count;
  }

  setCounter() {
    localStorage.setItem(this.counterName, this.counter.toString());
  }

  reset() {
    this.counter = this.count;
    this.setCounter();
  }

  resetAlertConfirm() {
    var _this = this;

    return (0,_Users_amnahaldughayshim_Desktop_PPs_adkar_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        message: 'هل تريد اعادة العداد؟',
        buttons: [{
          text: 'لا',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'نعم',
          handler: () => {
            _this.reset();
          }
        }]
      });
      yield alert.present();
    })();
  }

  ngOnDestroy() {}

};

CounterControllerComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: src_app_services_adkar_service__WEBPACK_IMPORTED_MODULE_4__.AdkarService
}];

CounterControllerComponent.propDecorators = {
  count: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
CounterControllerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-counter-controller',
  template: _counter_controller_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_counter_controller_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__, _adkar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], CounterControllerComponent);


/***/ }),

/***/ 3911:
/*!*******************************************************************!*\
  !*** ./src/app/components/counter-view/counter-view.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterViewComponent": () => (/* binding */ CounterViewComponent)
/* harmony export */ });
/* harmony import */ var _Users_amnahaldughayshim_Desktop_PPs_adkar_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _counter_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter-view.component.html?ngResource */ 8399);
/* harmony import */ var _counter_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter-view.component.scss?ngResource */ 9565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let CounterViewComponent = class CounterViewComponent {
  constructor(alertController) {
    this.alertController = alertController;
    this.counter = 0;
  }

  ngOnInit() {
    const countStorage = localStorage.getItem("count");
    this.counter = countStorage ? +countStorage : 0;
  }

  increase() {
    this.counter++;
    localStorage.setItem("count", this.counter.toString());
  }

  reset() {
    this.counter = 0;
    localStorage.setItem("count", this.counter.toString());
  }

  resetAlertConfirm() {
    var _this = this;

    return (0,_Users_amnahaldughayshim_Desktop_PPs_adkar_angular_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        message: 'هل تريد اعادة العداد؟',
        buttons: [{
          text: 'لا',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'نعم',
          handler: () => {
            _this.reset();
          }
        }]
      });
      yield alert.present();
    })();
  }

};

CounterViewComponent.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
}];

CounterViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-counter-view',
  template: _counter_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_counter_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CounterViewComponent);


/***/ }),

/***/ 7583:
/*!*************************************************************!*\
  !*** ./src/app/components/dker-view/dker-view.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DkerViewComponent": () => (/* binding */ DkerViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dker_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dker-view.component.html?ngResource */ 2990);
/* harmony import */ var _dker_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dker-view.component.scss?ngResource */ 3980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _adkar_counter_controller_counter_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adkar/counter-controller/counter-controller.component */ 2906);





let DkerViewComponent = class DkerViewComponent {
    constructor() {
    }
    getSavedCounters() {
        this.counterControllerComponent.getCounter();
    }
    resetCounter() {
        this.counterControllerComponent.reset();
    }
    ngOnInit() { }
};
DkerViewComponent.ctorParameters = () => [];
DkerViewComponent.propDecorators = {
    dker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    i: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    counterControllerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: [_adkar_counter_controller_counter_controller_component__WEBPACK_IMPORTED_MODULE_2__.CounterControllerComponent,] }]
};
DkerViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dker-view',
        template: _dker_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dker_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DkerViewComponent);



/***/ }),

/***/ 5819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 2574);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 1346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/idker */ 3280);





let MenuComponent = class MenuComponent {
    constructor() {
        this.adkarList = [
            { title: 'اذكار الصباح', queryParams: { type: src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.morning }, icon: 'partly-sunny' },
            { title: 'اذكار المساء', queryParams: { type: src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.evening }, icon: 'moon' },
            { title: 'اذكار مابعد الصلاة', queryParams: { type: src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.afterPrayers }, icon: 'person' },
            { title: 'اذكار النوم', queryParams: { type: src_app_interfaces_idker__WEBPACK_IMPORTED_MODULE_2__.DkerType.sleep }, icon: 'bed' },
        ];
        // I used this for icons here https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Icons&icon.style=Rounded
        this.otherList = [
            { title: 'العداد', url: 'counter', icon: 'touch_app' },
        ];
    }
    ngOnInit() { }
};
MenuComponent.ctorParameters = () => [];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 3280:
/*!*************************************!*\
  !*** ./src/app/interfaces/idker.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DkerType": () => (/* binding */ DkerType)
/* harmony export */ });
var DkerType;
(function (DkerType) {
    DkerType["morning"] = "morning";
    DkerType["evening"] = "evening";
    DkerType["afterPrayers"] = "afterPrayers";
    DkerType["sleep"] = "sleep";
})(DkerType || (DkerType = {}));


/***/ }),

/***/ 1251:
/*!****************************************!*\
  !*** ./src/app/services/adkar.data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adker": () => (/* binding */ adker)
/* harmony export */ });
/* harmony import */ var _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/idker */ 3280);
/* eslint-disable max-len */

const adker = [
    {
        text: `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ
    اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
        prefix: `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ`,
        suffix: `[آية الكرسى - البقرة 255]`,
        info: `من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح`
    },
    {
        prefix: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم',
        text: `قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ`,
        info: `من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        prefix: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم',
        text: `قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
        info: `من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        prefix: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم',
        text: `قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ `,
        info: `من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً`,
        info: `ن قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك`,
        info: `من قالها أعتقه الله من النار`,
        count: 4,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر`,
        info: `من قالها حين يصبح أدى شكر يومه`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم`,
        info: `من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة`,
        count: 7,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم`,
        info: `لم يضره من الله شيء`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ`,
        info: ``,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد`,
        info: `من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة`,
        count: 10,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ`,
        info: `ذكر طيب`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ`,
        info: `كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان`,
        count: 100,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `سُبْحـانَ اللهِ وَبِحَمْـدِهِ`,
        info: `حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ`,
        count: 100,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ `,
        info: `مائة حسنة، ومُحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان حتى يمسى`,
        count: 100,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening, _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning],
    },
    {
        text: `أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله.
    اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام `,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْد، وهوَ على كلّ شَيءٍ قَدير، اللّهُـمَّ لا مانِعَ لِما أَعْطَـيْت، وَلا مُعْطِـيَ لِما مَنَـعْت، وَلا يَنْفَـعُ ذا الجَـدِّ مِنْـكَ الجَـد`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `لا إلهَ إلاّ اللّه, وحدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمد، وهوَ على كلّ شيءٍ قدير، لا حَـوْلَ وَلا قـوَّةَ إِلاّ بِاللهِ، لا إلهَ إلاّ اللّـه، وَلا نَعْـبُـدُ إِلاّ إيّـاه, لَهُ النِّعْـمَةُ وَلَهُ الفَضْل وَلَهُ الثَّـناءُ الحَـسَن، لا إلهَ إلاّ اللّهُ مخْلِصـينَ لَـهُ الدِّينَ وَلَوْ كَـرِهَ الكـافِرون`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `سُـبْحانَ اللهِ، والحَمْـدُ لله ، واللهُ أكْـبَر`,
        count: 33,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمْد، وهُوَ على كُلّ شَيءٍ قَـدير`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `لا إلهَ إلاّ اللّهُ وحْـدَهُ لا شريكَ لهُ، لهُ المُلكُ ولهُ الحَمْد، يُحيـي وَيُمـيتُ وهُوَ على كُلّ شيءٍ قدير`,
        count: 10,
        info: `عَشْر مَرّات بَعْدَ المَغْرِب وَالصّـبْح`,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `اللّهُـمَّ إِنِّـي أَسْأَلُـكَ عِلْمـاً نافِعـاً وَرِزْقـاً طَيِّـباً ، وَعَمَـلاً مُتَقَـبَّلاً`,
        info: `بَعْد السّلامِ من صَلاةِ الفَجْر`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `اللَّهُمَّ أَجِرْنِي مِنْ النَّار`,
        info: `بعد صلاة الصبح والمغرب`,
        count: 7,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    {
        text: `اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.afterPrayers],
    },
    // sleep
    {
        text: `بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتـها وَمَحْـياها، إِنْ أَحْيَيْـتَها فاحْفَظْـها، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها. اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `بِاسْـمِكَ اللّهُـمَّ أَمـوتُ وَأَحْـيا`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `الـحَمْدُ للهِ الَّذي أَطْـعَمَنا وَسَقـانا، وَكَفـانا، وَآوانا، فَكَـمْ مِمَّـنْ لا كـافِيَ لَـهُ وَلا مُـؤْوي`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `اللّهُـمَّ عالِـمَ الغَـيبِ وَالشّـهادةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كُـلِّ شَـيءٍ وَمَليـكَه، أَشْهـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي، وَمِن شَـرِّ الشَّيْـطانِ وَشِـرْكِه، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم `,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `اللّهُـمَّ أَسْـلَمْتُ نَفْـسي إِلَـيْكَ، وَفَوَّضْـتُ أَمْـري إِلَـيْكَ، وَوَجَّـهْتُ وَجْـهي إِلَـيْكَ، وَأَلْـجَـاْتُ ظَهـري إِلَـيْكَ، رَغْبَـةً وَرَهْـبَةً إِلَـيْكَ، لا مَلْجَـأَ وَلا مَنْـجـا مِنْـكَ إِلاّ إِلَـيْكَ، آمَنْـتُ بِكِتـابِكَ الّـذي أَنْزَلْـتَ وَبِنَبِـيِّـكَ الّـذي أَرْسَلْـت`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `سُبْحَانَ اللَّهِ`,
        count: 33,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `الْحَمْدُ لِلَّهِ`,
        count: 33,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `اللَّهُ أَكْبَرُ`,
        count: 34,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: `يجمع كفيه ثم ينفث فيهما والقراءة فيهما‏:‏ ‏{‏قل هو الله أحد‏}‏ و‏{‏قل أعوذ برب الفلق‏}‏ و‏{‏قل أعوذ برب الناس‏}‏ ومسح ما استطاع من الجسد يبدأ بهما على رأسه ووجه وما أقبل من جسده`,
        count: 3,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        prefix: `سورة البقرة: أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ`,
        text: `آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ`,
        suffix: `[البقرة 285 - 286]`,
        info: 'من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.',
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        prefix: `آية الكرسى: أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ`,
        text: `اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
        suffix: '[البقرة 255]',
        count: 1,
        info: 'أجير من الجن حتى يصبح.',
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        prefix: 'أذكار من قلق في فراشه ولم ينم',
        text: `عن بريدة رضي الله عنه، قال‏:‏ شكا خالد بن الوليد رضي الله عنه إلى النبي صلى الله عليه وسلم فقال‏:‏ يا رسول الله‏!‏ ما أنام الليل من الأرق، فقال النبي صلى الله عليه وسلم‏:‏ ‏"‏إذا أويت إلى فراشك فقل‏:‏ اللهم رب السموات السبع وما أظلت، ورب الأرضين وما أقلت، ورب الشياطين وما أضلت، كن لي جارا من خلقك كلهم جميعا أن يفرط علي أحد منهم أو أن يبغي علي، عز جارك، وجل ثناؤك ولا إله غيرك، ولا إله إلا أنت‏"`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        prefix: 'أذكار من قلق في فراشه ولم ينم',
        text: 'عن عمرو بن شعيب، عن أبيه، عن جده: أن رسول الله صلى الله عليه وسلم كان يعلمهم من الفزع كلمات‏:‏ ‏"‏أعوذ بكلمات الله التامة من غضبه وشر عباده، ومن همزات الشياطين وأن يحضرون‏" ',
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        prefix: 'أذكار الأحلام',
        text: `عن أبي قتادة رضي الله عنه قال‏:‏ قال رسول الله صلى الله عليه وسلم‏:‏ ‏"‏الرؤيا الصالحة‏"‏ وفي رواية ‏"‏الرؤيا الحسنة من الله، والحلم من الشيطان، فمن رأى شيئا يكرهه فلينفث عن شماله ثلاثا وليتعوذ من الشيطان، فإنها لا تضره‏"`,
        count: 1,
        type: [_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.sleep],
    },
    {
        text: ``,
        info: ``,
        count: 1,
        type: [],
    },
];


/***/ }),

/***/ 6837:
/*!*******************************************!*\
  !*** ./src/app/services/adkar.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdkarService": () => (/* binding */ AdkarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/idker */ 3280);
/* harmony import */ var _adkar_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adkar.data */ 1251);

/* eslint-disable max-len */




let AdkarService = class AdkarService {
    constructor() {
        this.currentAdkarType = _interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning;
        this.currentAdkarTypeChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.currentAdkarType);
        this.adker = _adkar_data__WEBPACK_IMPORTED_MODULE_1__.adker;
        this.setTypeOnTime();
    }
    setTypeOnTime() {
        const date = new Date();
        if (date.getHours() < 13) {
            this.setCurrentAdkarType(_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.morning);
        }
        else {
            this.setCurrentAdkarType(_interfaces_idker__WEBPACK_IMPORTED_MODULE_0__.DkerType.evening);
        }
    }
    setCurrentAdkarType(type) {
        this.currentAdkarType = type;
        this.currentAdkarTypeChange.next(type);
    }
    getCurrentAdkarType() {
        return this.currentAdkarType;
    }
    getAdkar(type) {
        return this.adker.filter((dker) => dker.type.includes(type));
    }
};
AdkarService.ctorParameters = () => [];
AdkarService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AdkarService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-1c2207b2_js-node_modules_ionic_core_dist_esm_t-5248a4",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-1c2207b2_js-node_modules_ionic_core_dist_esm_t-5248a4",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8418:
/*!******************************************************************!*\
  !*** ./src/app/components/adkar/adkar.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".reset-icon {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFka2FyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vJUQ4JUE3JUQ4JUIwJUQ5JTgzJUQ4JUE3JUQ4JUIxL2Fka2FyLWFuZ3VsYXItaW9uaWMvc3JjL2FwcC9jb21wb25lbnRzL2Fka2FyL2Fka2FyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJhZGthci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldC1pY29ue1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59IiwiLnJlc2V0LWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 2333:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/adkar/counter-controller/counter-controller.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".counter {\n  background-color: #006aa9;\n  color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding-top: 16%;\n  padding-bottom: 16%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n\n.bg-secondary {\n  background-color: var(--ion-color-secondary);\n}\n\n.counter-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: row;\n  width: 100%;\n}\n\n.counter-bottom ion-text {\n  font-size: xx-small;\n}\n\n.counter-number {\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXItY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLyVEOCVBNyVEOCVCMCVEOSU4MyVEOCVBNyVEOCVCMS9hZGthci1hbmd1bGFyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50cy9hZGthci9jb3VudGVyLWNvbnRyb2xsZXIvY291bnRlci1jb250cm9sbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6ImNvdW50ZXItY29udHJvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YWE5O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxNiU7XG4gICAgcGFkZGluZy1ib3R0b206IDE2JTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJnLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5jb3VudGVyLWJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb3VudGVyLWJvdHRvbSBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuLmNvdW50ZXItbnVtYmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIi5jb3VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmFhOTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDE2JTtcbiAgcGFkZGluZy1ib3R0b206IDE2JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5jb3VudGVyLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdW50ZXItYm90dG9tIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuLmNvdW50ZXItbnVtYmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */";

/***/ }),

/***/ 9565:
/*!********************************************************************************!*\
  !*** ./src/app/components/counter-view/counter-view.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".counterCol {\n  margin: 0;\n  height: 100%;\n}\n\n.counter {\n  background-color: #006aa9;\n  color: #ffffff;\n  display: flex;\n  margin: 0;\n  padding-top: 16%;\n  padding-bottom: 16%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n}\n\n.counter-number {\n  height: 100%;\n  width: 100%;\n  font-size: 250%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.bg-secondary {\n  background-color: var(--ion-color-secondary);\n}\n\n.counter-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: row;\n  width: 100%;\n  height: 20%;\n}\n\n.counter-bottom ion-icon {\n  font-size: 200%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXItdmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLyVEOCVBNyVEOCVCMCVEOSU4MyVEOCVBNyVEOCVCMS9hZGthci1hbmd1bGFyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50cy9jb3VudGVyLXZpZXcvY291bnRlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEREE7RUFDSSw0Q0FBQTtBQ0lKOztBRERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDRyxlQUFBO0FDS0giLCJmaWxlIjoiY291bnRlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXJDb2wge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY291bnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmFhOTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMTYlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNiU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY291bnRlci1udW1iZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJnLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5jb3VudGVyLWJvdHRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG4uY291bnRlci1ib3R0b20gaW9uLWljb257XG4gICBmb250LXNpemU6IDIwMCU7XG59XG4iLCIuY291bnRlckNvbCB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY291bnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZhYTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxNiU7XG4gIHBhZGRpbmctYm90dG9tOiAxNiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdW50ZXItbnVtYmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5iZy1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmNvdW50ZXItYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmNvdW50ZXItYm90dG9tIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 3980:
/*!**************************************************************************!*\
  !*** ./src/app/components/dker-view/dker-view.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".info {\n  font-size: x-small;\n  color: var(--ion-color-dark-shade);\n}\n\n.counter-section {\n  width: 100%;\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRrZXItdmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLyVEOCVBNyVEOCVCMCVEOSU4MyVEOCVBNyVEOCVCMS9hZGthci1hbmd1bGFyLWlvbmljL3NyYy9hcHAvY29tcG9uZW50cy9ka2VyLXZpZXcvZGtlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJka2VyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG59XG5cbi5jb3VudGVyLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTAlO1xufSIsIi5pbmZvIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xufVxuXG4uY291bnRlci1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xufSJdfQ== */";

/***/ }),

/***/ 1346:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\n.material-icons {\n  color: var(--ion-color-secondary);\n  width: 24px;\n  text-align: start;\n  font-size: 24px;\n}\n\n.otherLabels {\n  padding-right: 24px;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8lRDglQTclRDglQjAlRDklODMlRDglQTclRDglQjEvYWRrYXItYW5ndWxhci1pb25pYy9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwyREFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxzREFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksK0JBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxzQkFBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksK0JBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBOztFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0VKOztBRENBO0VBQ0ksaUNBQUE7QUNFSiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuLm1hdGVyaWFsLWljb25ze1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB3aWR0aCA6MjRweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4ub3RoZXJMYWJlbHN7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcblxufVxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB3aWR0aDogMjRweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm90aGVyTGFiZWxzIHtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n    <app-menu></app-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 6681:
/*!******************************************************************!*\
  !*** ./src/app/components/adkar/adkar.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">\n            {{this.title}}\n        </ion-title>\n        <ion-buttons slot=\"end\" class=\"reset-icon\">\n            <ion-icon slot=\"icon-only\" (click)=\"resetCounters()\" name=\"refresh-outline\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <ion-list lines=\"inset\">\n        <app-dker-view *ngFor=\"let dker of adkar; let i = index\" [dker]=\"dker\" [i]=\"i\">\n        </app-dker-view>\n    </ion-list>\n</ion-content>";

/***/ }),

/***/ 8531:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/adkar/counter-controller/counter-controller.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card [classList]=\"'counter'\" [style.background-color]=\"(counter===0)?'var(--ion-color-secondary)':''\">\n    <ion-row size=\"10\" class=\"counter-number\" (click)=\"decrease()\">\n        <ion-text class=\"ion-text-center\">\n            {{counter}}\n        </ion-text>\n    </ion-row>\n    <ion-row class=\"counter-bottom\">\n        <ion-icon (click)=\"resetAlertConfirm()\" name=\"refresh-outline\"></ion-icon>\n        <ion-text>{{id+1}}</ion-text>\n    </ion-row>\n</ion-card>";

/***/ }),

/***/ 8399:
/*!********************************************************************************!*\
  !*** ./src/app/components/counter-view/counter-view.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"ion-text-center\">\n            العداد\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\" [style]=\"\">\n   \n   \n    <ion-row size=\"12\" [style.height]=\"'80%'\">\n        <ion-col class=\"counterCol\">\n            <ion-card [classList]=\"'counter'\" [style.background-color]=\"(counter===0)?'var(--ion-color-secondary)':''\">\n                <ion-row size=\"10\" class=\"counter-number\" (click)=\"increase()\">\n                    <ion-text class=\"ion-text-center\">\n                        {{counter}}\n                    </ion-text>\n                </ion-row>\n                <ion-row class=\"counter-bottom\">\n                    <ion-icon (click)=\"resetAlertConfirm()\" name=\"refresh-outline\"></ion-icon>\n                </ion-row>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>";

/***/ }),

/***/ 2990:
/*!**************************************************************************!*\
  !*** ./src/app/components/dker-view/dker-view.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item>\n    <ion-col size=\"9\" class=\"ion-text-right\">\n        <ion-label class=\"ion-text\" color=\"success\">{{dker.prefix}}</ion-label>\n        <ion-label class=\"ion-text-wrap\">\n            {{dker.text}}\n        </ion-label>\n        <ion-label color=\"tertiary\">\n            <h6> {{dker.suffix}}\n            </h6>\n        </ion-label>\n        <p class=\"info\" *ngIf=\"dker.info\">{{dker.info}}</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"counter-section\">\n        <app-counter-controller [id]=\"i\" [count]=\"dker.count\"></app-counter-controller>\n    </ion-col>\n</ion-item>";

/***/ }),

/***/ 2574:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu contentId=\"main-content\">\n    <ion-header>\n        <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n        <ion-toolbar color=\"secondary\">\n            <ion-title size=\"large\"></ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content dir=\"rtl\" class=\"ion-padding\">\n        <ion-list>\n            <ion-list-header>الاذكار</ion-list-header>\n            <ion-menu-toggle class=\"ion-padding-top\" auto-hide=\"false\" *ngFor=\"let p of adkarList; let i = index\">\n                <ion-item routerDirection=\"root\" [routerLink]=\"'adkar'\" [queryParams]=\"p.queryParams\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                    <ion-icon slot=\"start\" color=\"secondary\" [ios]=\"p.icon + '-sharp'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n                    <ion-label>{{ p.title }}</ion-label>\n                </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n        <ion-list>\n            <ion-list-header>\n                <ion-label>اخرى</ion-label>\n            </ion-list-header>\n            <ion-menu-toggle *ngFor=\"let p of otherList; let i = index\">\n                <ion-item routerDirection=\"root\" [routerLink]=\"p.url\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                    <span color=\"secondary\" class=\"material-icons md-48\">{{p.icon}}</span>\n\n                    <ion-label class=\"otherLabels\" >{{ p.title }}</ion-label>\n                </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n    </ion-content>\n</ion-menu>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map