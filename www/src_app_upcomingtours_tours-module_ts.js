"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_upcomingtours_tours-module_ts"],{

/***/ 7960
/*!***********************************************!*\
  !*** ./src/app/upcomingtours/tours-module.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToursModule: () => (/* binding */ ToursModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _tours_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tours.component */ 9302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _tours_component__WEBPACK_IMPORTED_MODULE_1__.ToursComponent
}];
class ToursModule {
  static #_ = _staticBlock = () => (this.ɵfac = function ToursModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToursModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ToursModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _tours_component__WEBPACK_IMPORTED_MODULE_1__.ToursComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ToursModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _tours_component__WEBPACK_IMPORTED_MODULE_1__.ToursComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ },

/***/ 9302
/*!**************************************************!*\
  !*** ./src/app/upcomingtours/tours.component.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToursComponent: () => (/* binding */ ToursComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _upcomingtours__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcomingtours */ 9565);
var _staticBlock;
// tours.component.ts - UPDATED with API integration










const _c0 = (a0, a1, a2, a3) => ({
  "status-available": a0,
  "status-fast": a1,
  "status-last": a2,
  "status-soldout": a3
});
function ToursComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " trips ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.trekCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.allTreks.length);
  }
}
function ToursComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading treks\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ToursComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](opt_r2.label);
  }
}
function ToursComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ToursComponent_div_29_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.loadTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \u26A0 ", ctx_r0.errorMessage, " ");
  }
}
function ToursComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ToursComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.changeYear("prev"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u2190 ", ctx_r0.previousYear);
  }
}
function ToursComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ToursComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.changeYear("next"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.nextYear, " \u2192");
  }
}
function ToursComponent_div_35_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const y_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", y_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](y_r7);
  }
}
function ToursComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40)(1, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ToursComponent_div_35_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r0.selectedYear, $event) || (ctx_r0.selectedYear = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ToursComponent_div_35_Template_select_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.loadTreks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ToursComponent_div_35_option_2_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.years);
  }
}
function ToursComponent_button_37_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getMonthCount(month_r9));
  }
}
function ToursComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ToursComponent_button_37_Template_button_click_0_listener() {
      const month_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.selectMonth(month_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ToursComponent_button_37_span_2_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r0.selectedMonth === month_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", month_r9, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getMonthCount(month_r9) > 0);
  }
}
function ToursComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 46)(3, "div", 46)(4, "div", 46)(5, "div", 46)(6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Loading Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ToursComponent_div_39_div_17_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ToursComponent_div_39_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ToursComponent_div_39_div_17_Template_div_click_0_listener() {
      const trek_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.viewDetails(trek_r11.batch_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 61)(9, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 64)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 67)(19, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 69)(22, "div")(23, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Per Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ToursComponent_div_39_div_17_Template_button_click_28_listener($event) {
      const trek_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.viewDetails(trek_r11.batch_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ToursComponent_div_39_div_17_span_30_Template, 2, 0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const trek_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sold-out", trek_r11.status === "sold-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](trek_r11.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](trek_r11.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u23F1 ", trek_r11.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "http://localhost:4001/" + trek_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", trek_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](trek_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\uD83D\uDCCD ", trek_r11.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](trek_r11.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](23, _c0, trek_r11.status === "available", trek_r11.status === "selling-fast", trek_r11.status === "last-seat", trek_r11.status === "sold-out"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getStatusText(trek_r11.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](25, 20, trek_r11.price, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("available", trek_r11.status !== "sold-out")("soldout", trek_r11.status === "sold-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", trek_r11.status === "sold-out");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", trek_r11.status === "sold-out" ? "Sold Out" : "View", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", trek_r11.status !== "sold-out");
  }
}
function ToursComponent_div_39_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 75)(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\uD83C\uDFD4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Try a different month or year.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("No treks in ", ctx_r0.selectedMonth, " ", ctx_r0.selectedYear);
  }
}
function ToursComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "h2", 50)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 52)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Date & Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Trek Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ToursComponent_div_39_div_17_Template, 31, 28, "div", 54)(18, ToursComponent_div_39_div_18_Template, 7, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.selectedMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r0.trekCount, " departure", ctx_r0.trekCount !== 1 ? "s" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.currentMonthTreks);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.trekCount === 0);
  }
}
class ToursComponent {
  constructor(router, trekService) {
    this.router = router;
    this.trekService = trekService;
    this.selectedYear = new Date().getFullYear();
    this.selectedMonth = '';
    this.sortBy = 'newest';
    this.years = [];
    this.availableYears = []; // Years with actual trek data
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.sortOptions = [{
      value: 'newest',
      label: 'Newest First'
    }, {
      value: 'popular',
      label: 'Most Popular'
    }, {
      value: 'price-high',
      label: 'Highest Price'
    }, {
      value: 'price-low',
      label: 'Lowest Price'
    }, {
      value: 'duration-short',
      label: 'Shortest First'
    }, {
      value: 'duration-long',
      label: 'Longest First'
    }];
    this.allTreks = [];
    this.monthTreksData = {};
    this.isLoading = false;
    this.errorMessage = '';
  }
  ngOnInit() {
    this.initializeYears();
    this.setInitialMonth();
    this.loadAvailableYears();
    this.loadTreks();
  }
  /**
   * Initialize years array dynamically
   * Shows current year ± 2 years
   */
  initializeYears() {
    const currentYear = new Date().getFullYear();
    // Generate years: current year - 1, current year, current year + 1, current year + 2
    this.years = [currentYear - 1, currentYear, currentYear + 1, currentYear + 2];
    // Set selected year to current year or next year if current month is December
    const currentMonth = new Date().getMonth();
    if (currentMonth === 11) {
      // December
      this.selectedYear = currentYear + 1;
    } else {
      this.selectedYear = currentYear;
    }
  }
  /**
   * Set initial month to current month or next month
   */
  setInitialMonth() {
    const currentMonth = new Date().getMonth();
    this.selectedMonth = this.months[currentMonth];
  }
  /**
   * Load years that have trek data from backend
   */
  loadAvailableYears() {
    this.trekService.getAvailableYears().subscribe({
      next: response => {
        if (response.success && response.years) {
          this.availableYears = response.years;
          // Update years array to include all available years
          this.updateYearsWithAvailable(response.years);
        }
      },
      error: error => {
        console.error('Load available years error:', error);
        // Continue with default years if API fails
      }
    });
  }
  loadTreks() {
    this.isLoading = true;
    this.errorMessage = '';
    this.trekService.getAllTreksFormatted(this.selectedYear).subscribe({
      next: treks => {
        this.allTreks = treks || [];
        this.groupTreksByMonth();
        this.isLoading = false;
      },
      error: error => {
        console.error('Load treks error:', error);
        this.errorMessage = 'Failed to load treks. Please try again.';
        this.allTreks = [];
        this.isLoading = false;
      }
    });
  }
  destroy$(destroy$) {
    throw new Error('Method not implemented.');
  }
  /**
   * Update years array to include years from database
   */
  updateYearsWithAvailable(availableYears) {
    if (availableYears.length === 0) return;
    const minYear = Math.min(...availableYears);
    const maxYear = Math.max(...availableYears);
    const currentYear = new Date().getFullYear();
    // Create range from min available year to max(current year + 2, max available year)
    const startYear = Math.min(minYear, currentYear - 1);
    const endYear = Math.max(maxYear, currentYear + 2);
    this.years = [];
    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }
    // Ensure selected year is valid
    if (!this.years.includes(this.selectedYear)) {
      this.selectedYear = currentYear;
    }
  }
  /**
   * Load all treks for the selected year
   */
  /**
   * Group treks by month
   */
  groupTreksByMonth() {
    this.monthTreksData = {};
    this.allTreks.forEach(trek => {
      const trekDate = new Date(trek.start_date);
      const monthName = this.months[trekDate.getMonth()];
      if (!this.monthTreksData[monthName]) {
        this.monthTreksData[monthName] = [];
      }
      this.monthTreksData[monthName].push(trek);
    });
    // Sort treks within each month by start date
    Object.keys(this.monthTreksData).forEach(month => {
      this.monthTreksData[month].sort((a, b) => {
        return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
      });
    });
  }
  /**
   * Get treks for selected month
   */
  get monthTreks() {
    return this.monthTreksData;
  }
  /**
   * Get current month treks
   */
  get currentMonthTreks() {
    return this.monthTreksData[this.selectedMonth] || [];
  }
  /**
   * Get trek count for current month
   */
  get trekCount() {
    return this.currentMonthTreks.length;
  }
  /**
   * Change year
   */
  changeYear(direction) {
    const currentIndex = this.years.indexOf(this.selectedYear);
    if (direction === 'prev' && currentIndex > 0) {
      this.selectedYear = this.years[currentIndex - 1];
      this.loadTreks();
    } else if (direction === 'next' && currentIndex < this.years.length - 1) {
      this.selectedYear = this.years[currentIndex + 1];
      this.loadTreks();
    }
  }
  /**
   * Check if year has data
   */
  yearHasData(year) {
    return this.availableYears.includes(year);
  }
  /**
   * Get previous year
   */
  get previousYear() {
    const currentIndex = this.years.indexOf(this.selectedYear);
    return currentIndex > 0 ? this.years[currentIndex - 1] : null;
  }
  /**
   * Get next year
   */
  get nextYear() {
    const currentIndex = this.years.indexOf(this.selectedYear);
    return currentIndex < this.years.length - 1 ? this.years[currentIndex + 1] : null;
  }
  /**
   * Check if previous year button should be disabled
   */
  get isPrevYearDisabled() {
    return this.previousYear === null || this.isLoading;
  }
  /**
   * Check if next year button should be disabled
   */
  get isNextYearDisabled() {
    return this.nextYear === null || this.isLoading;
  }
  /**
   * Change month
   */
  selectMonth(month) {
    this.selectedMonth = month;
  }
  /**
   * Get status color (for badge)
   */
  getStatusColor(status) {
    switch (status) {
      case 'available':
        return 'success';
      case 'selling-fast':
        return 'warning';
      case 'last-seat':
        return 'danger';
      case 'sold-out':
        return 'medium';
      default:
        return 'medium';
    }
  }
  /**
   * Get status text
   */
  getStatusText(status) {
    switch (status) {
      case 'available':
        return 'Available';
      case 'selling-fast':
        return 'Selling fast';
      case 'last-seat':
        return 'Last seat';
      case 'sold-out':
        return 'SOLD OUT';
      default:
        return status;
    }
  }
  /**
   * Navigate to trek details
   */
  viewDetails(trekId) {
    this.router.navigate(['/tour-details', trekId]);
  }
  /**
   * Sort treks
   */
  sortTreks() {
    let sortedTreks = [...this.currentMonthTreks];
    switch (this.sortBy) {
      case 'price-low':
        sortedTreks.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedTreks.sort((a, b) => b.price - a.price);
        break;
      case 'duration-short':
        sortedTreks.sort((a, b) => this.parseDuration(a.duration) - this.parseDuration(b.duration));
        break;
      case 'duration-long':
        sortedTreks.sort((a, b) => this.parseDuration(b.duration) - this.parseDuration(a.duration));
        break;
      case 'popular':
        // Sort by status (available last, sold-out first for reverse popularity)
        const statusOrder = {
          'sold-out': 0,
          'last-seat': 1,
          'selling-fast': 2,
          'available': 3
        };
        sortedTreks.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
        break;
      case 'newest':
      default:
        sortedTreks.sort((a, b) => {
          return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
        });
        break;
    }
    this.monthTreksData[this.selectedMonth] = sortedTreks;
  }
  /**
   * Parse duration string to minutes for comparison
   */
  parseDuration(duration) {
    const match = duration.match(/(\d+)\s*(Day|Days|Hour|Hours|Minute|Minutes)/i);
    if (!match) return 0;
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    if (unit.includes('day')) {
      return value * 24 * 60; // Convert to minutes
    } else if (unit.includes('hour')) {
      return value * 60;
    } else {
      return value;
    }
  }
  /**
   * Get count for a specific month
   */
  getMonthCount(month) {
    return this.monthTreksData[month]?.length || 0;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function ToursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_upcomingtours__WEBPACK_IMPORTED_MODULE_7__.Upcomingtours));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ToursComponent,
    selectors: [["app-tours"]],
    decls: 53,
    vars: 15,
    consts: [[1, "page-enter"], [1, "hero"], ["src", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80", "alt", "Treks Banner", 1, "hero-img"], [1, "hero-body"], [1, "hero-breadcrumb"], ["routerLink", ""], [1, "sep"], [1, "current"], [1, "hero-title"], [1, "hero-sub"], [1, "control-bar"], [1, "control-left"], ["class", "trek-count-label", 4, "ngIf"], [1, "divider-v"], [1, "control-month"], [1, "control-right"], [1, "sort-label"], [1, "sort-select", 3, "ngModelChange", "change", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-alert", 4, "ngIf"], [1, "year-nav"], ["class", "year-btn", 3, "disabled", "click", 4, "ngIf"], [1, "year-current"], ["class", "year-dropdown-wrap", 4, "ngIf"], [1, "month-tabs"], ["class", "month-tab", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "loader-wrapper", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "bottom-cta"], [1, "cta-card"], [1, "cta-eyebrow"], [1, "cta-heading"], [1, "cta-body"], ["routerLink", "/contact", 1, "cta-btn"], [1, "trek-count-label"], [3, "value"], [1, "error-alert"], [1, "alert-inner"], [1, "retry-btn", 3, "click"], [1, "year-btn", 3, "click", "disabled"], [1, "year-dropdown-wrap"], [1, "month-tab", 3, "click", "disabled"], ["class", "month-count", 4, "ngIf"], [1, "month-count"], [1, "loader-wrapper"], [1, "loader-bars"], [1, "loader-bar"], [1, "loader-text"], [1, "content"], [1, "month-header"], [1, "month-heading"], [1, "month-sub"], [1, "table-header"], [2, "text-align", "right"], ["class", "trek-row", 3, "sold-out", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "trek-row", 3, "click"], [1, "col-date"], [1, "date-main"], [1, "date-time"], [1, "duration-tag"], [1, "col-trek"], [1, "trek-thumb"], ["onerror", "this.src='assets/default-trek.jpg'", 3, "src", "alt"], [1, "trek-info-text"], [1, "trek-location"], [1, "category-tag"], [1, "col-status"], [1, "status-badge", 3, "ngClass"], [1, "col-price"], [1, "price-amount"], [1, "price-per"], [1, "view-btn", 3, "click", "disabled"], ["class", "btn-arrow", 4, "ngIf"], [1, "btn-arrow"], [1, "empty-state"], [1, "empty-icon"]],
    template: function ToursComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\uD83C\uDFE0 Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Upcoming Treks & Adventures");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Upcoming Treks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "& Adventures");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Karnataka \u00B7 Western Ghats \u00B7 Expert-guided expeditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ToursComponent_span_19_Template, 8, 2, "span", 12)(20, ToursComponent_span_20_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ToursComponent_Template_select_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ToursComponent_Template_select_change_27_listener() {
          return ctx.sortTreks();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ToursComponent_option_28_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ToursComponent_div_29_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ToursComponent_button_31_Template, 2, 2, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ToursComponent_button_34_Template, 2, 2, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ToursComponent_div_35_Template, 3, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ToursComponent_button_37_Template, 3, 5, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, ToursComponent_div_38_Template, 9, 0, "div", 26)(39, ToursComponent_div_39_Template, 19, 6, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 28)(41, "div", 29)(42, "div")(43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Custom Expeditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Can't find what you're looking for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "We organise tailored group treks, corporate outings, and private expeditions. Tell us where you want to go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Get in Touch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx.selectedMonth, " ", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.previousYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nextYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.years.length > 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #f7f3ec;\n  color: #1c2533;\n  font-family: \"Outfit\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 340px;\n  overflow: hidden;\n}\n\n.hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ccircle cx='200' cy='200' r='60' fill='none' stroke='%23ffffff' stroke-width='0.4' opacity='0.08'/%3E%3Ccircle cx='200' cy='200' r='105' fill='none' stroke='%23ffffff' stroke-width='0.4' opacity='0.06'/%3E%3Ccircle cx='200' cy='200' r='155' fill='none' stroke='%23ffffff' stroke-width='0.4' opacity='0.05'/%3E%3Ccircle cx='200' cy='200' r='210' fill='none' stroke='%23ffffff' stroke-width='0.4' opacity='0.04'/%3E%3C/svg%3E\"), linear-gradient(to bottom, rgba(28, 37, 51, 0.3) 0%, rgba(28, 37, 51, 0.85) 100%);\n  z-index: 1;\n}\n\n.hero-body[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 6vw 40px;\n}\n\n.hero-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 18px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  color: rgba(240, 232, 216, 0.5);\n}\n.hero-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(240, 232, 216, 0.5);\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.hero-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f0e8d8;\n}\n.hero-breadcrumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.hero-breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: #f0e8d8;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: clamp(1.8rem, 4.5vw, 3rem);\n  font-weight: 800;\n  color: #f0e8d8;\n  letter-spacing: -0.01em;\n  line-height: 1;\n}\n\n.hero-sub[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: rgba(240, 232, 216, 0.5);\n  font-size: 0.82rem;\n  font-weight: 300;\n  letter-spacing: 0.05em;\n}\n\n.control-bar[_ngcontent-%COMP%] {\n  background: #0f2417;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6vw;\n  gap: 16px;\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.control-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 0;\n}\n\n.trek-count-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #a4b8c8;\n}\n.trek-count-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f0e8d8;\n  font-weight: 600;\n}\n\n.control-month[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: #e07a52;\n}\n\n.divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.control-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6e8398;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #f0e8d8;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.78rem;\n  padding: 6px 28px 6px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  outline: none;\n  -webkit-appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a4b8c8' d='M6 8L1 3h10z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n}\n\n.error-alert[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 16px auto;\n  padding: 0 6vw;\n}\n\n.alert-inner[_ngcontent-%COMP%] {\n  background: rgba(168, 50, 50, 0.08);\n  border: 1px solid rgba(168, 50, 50, 0.2);\n  border-radius: 6px;\n  padding: 14px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.85rem;\n  color: #a83232;\n}\n\n.retry-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: transparent;\n  border: 1px solid #a83232;\n  color: #a83232;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 5px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #a83232;\n  color: #fff;\n}\n\n.year-nav[_ngcontent-%COMP%] {\n  background: #14281d;\n  padding: 20px 6vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 28px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.year-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: #a4b8c8;\n  font-family: \"Syne\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  padding: 8px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.year-btn[_ngcontent-%COMP%]:hover:not([disabled]) {\n  border-color: rgba(255, 255, 255, 0.3);\n  color: #f0e8d8;\n  background: rgba(255, 255, 255, 0.05);\n}\n.year-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: default;\n}\n\n.year-current[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #f0e8d8;\n  letter-spacing: 0.06em;\n  position: relative;\n  padding: 0 16px;\n}\n.year-current[_ngcontent-%COMP%]::before, .year-current[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 20px;\n  height: 1px;\n  background: rgba(240, 232, 216, 0.18);\n}\n.year-current[_ngcontent-%COMP%]::before {\n  right: 100%;\n}\n.year-current[_ngcontent-%COMP%]::after {\n  left: 100%;\n}\n\n.year-dropdown-wrap[_ngcontent-%COMP%] {\n  background: #2c3d33;\n  display: flex;\n  justify-content: center;\n  padding: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n\n.month-tabs[_ngcontent-%COMP%] {\n  background: #2c3d33;\n  padding: 0 6vw;\n  display: flex;\n  gap: 2px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.04);\n}\n.month-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.month-tab[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  padding: 14px 16px;\n  color: rgba(164, 184, 200, 0.45);\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  white-space: nowrap;\n}\n.month-tab[_ngcontent-%COMP%]:hover:not([disabled]) {\n  color: #a4b8c8;\n}\n.month-tab.active[_ngcontent-%COMP%] {\n  color: #f0e8d8;\n  border-bottom-color: #c2603a;\n}\n.month-tab[disabled][_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.4;\n}\n\n.month-count[_ngcontent-%COMP%] {\n  background: rgba(194, 96, 58, 0.2);\n  color: #e07a52;\n  font-size: 0.62rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 10px;\n}\n.active[_ngcontent-%COMP%]   .month-count[_ngcontent-%COMP%] {\n  background: #c2603a;\n  color: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 6vw 80px;\n}\n\n.month-header[_ngcontent-%COMP%] {\n  padding: 40px 0 20px;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(28, 37, 51, 0.08);\n  margin-bottom: 4px;\n}\n\n.month-heading[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1c2533;\n  letter-spacing: -0.01em;\n}\n.month-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c2603a;\n}\n\n.month-sub[_ngcontent-%COMP%] {\n  color: #6e8398;\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 130px 160px;\n  gap: 16px;\n  padding: 10px 0;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #6e8398;\n  border-bottom: 1px solid rgba(28, 37, 51, 0.08);\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.trek-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 130px 160px;\n  gap: 16px;\n  align-items: center;\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(28, 37, 51, 0.08);\n  cursor: pointer;\n  transition: padding-left 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n}\n.trek-row[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: -6vw;\n  right: -6vw;\n  top: 0;\n  bottom: 0;\n  background: rgba(240, 232, 216, 0.52);\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n  z-index: -1;\n}\n.trek-row[_ngcontent-%COMP%]:hover {\n  padding-left: 8px;\n}\n.trek-row[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.trek-row[_ngcontent-%COMP%]:hover   .trek-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.trek-row[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.trek-row.sold-out[_ngcontent-%COMP%] {\n  opacity: 0.48;\n  cursor: default;\n}\n.trek-row.sold-out[_ngcontent-%COMP%]:hover {\n  padding-left: 0;\n}\n.trek-row.sold-out[_ngcontent-%COMP%]:hover::before {\n  opacity: 0;\n}\n@media (max-width: 768px) {\n  .trek-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding: 18px 0;\n  }\n  .trek-row[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .trek-row[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%]   .duration-tag[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .trek-row[_ngcontent-%COMP%]   .col-price[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 12px;\n    border-top: 1px solid rgba(28, 37, 51, 0.08);\n  }\n}\n\n.col-date[_ngcontent-%COMP%]   .date-main[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1c2533;\n  line-height: 1.3;\n}\n.col-date[_ngcontent-%COMP%]   .date-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #6e8398;\n  margin-top: 2px;\n}\n.col-date[_ngcontent-%COMP%]   .duration-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: #1c2533;\n  color: #a4b8c8;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  padding: 3px 8px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.col-trek[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n\n.trek-thumb[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 82px;\n  height: 66px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.trek-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  display: block;\n}\n\n.trek-info-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1c2533;\n  line-height: 1.3;\n  margin-bottom: 5px;\n}\n\n.trek-location[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #6e8398;\n  margin-bottom: 6px;\n}\n\n.category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(28, 37, 51, 0.07);\n  color: #3d4f63;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n\n.col-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 6px 12px;\n  border-radius: 4px;\n}\n\n.status-available[_ngcontent-%COMP%] {\n  background: rgba(45, 106, 79, 0.1);\n  color: #2d6a4f;\n  border: 1px solid rgba(45, 106, 79, 0.22);\n}\n\n.status-fast[_ngcontent-%COMP%] {\n  background: rgba(212, 145, 58, 0.1);\n  color: #b8732a;\n  border: 1px solid rgba(212, 145, 58, 0.22);\n}\n\n.status-last[_ngcontent-%COMP%] {\n  background: rgba(168, 50, 50, 0.1);\n  color: #a83232;\n  border: 1px solid rgba(168, 50, 50, 0.22);\n}\n\n.status-soldout[_ngcontent-%COMP%] {\n  background: rgba(110, 131, 152, 0.08);\n  color: #6e8398;\n  border: 1px solid rgba(110, 131, 152, 0.18);\n}\n\n.col-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n}\n\n.price-amount[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1c2533;\n  line-height: 1;\n}\n\n.price-per[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  color: #6e8398;\n  margin-top: -4px;\n}\n\n.view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.view-btn.available[_ngcontent-%COMP%] {\n  background: #c2603a;\n  color: #fff;\n}\n.view-btn.available[_ngcontent-%COMP%]:hover {\n  background: #e07a52;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(194, 96, 58, 0.3);\n}\n.view-btn.soldout[_ngcontent-%COMP%] {\n  background: rgba(110, 131, 152, 0.1);\n  color: #6e8398;\n  cursor: default;\n}\n.view-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  min-height: 55vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n.loader-bars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: flex-end;\n  height: 38px;\n}\n\n.loader-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  border-radius: 2px;\n  background: #c2603a;\n  animation: _ngcontent-%COMP%_barBounce 1s ease-in-out infinite;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n  height: 16px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.12s;\n  height: 28px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.24s;\n  height: 20px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.36s;\n  height: 34px;\n}\n.loader-bar[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.48s;\n  height: 22px;\n}\n\n@keyframes _ngcontent-%COMP%_barBounce {\n  0%, 100% {\n    opacity: 0.2;\n    transform: scaleY(0.6);\n  }\n  50% {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n}\n.loader-text[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #6e8398;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.15;\n  line-height: 1;\n  margin-bottom: 20px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1c2533;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6e8398;\n  font-size: 0.85rem;\n}\n\n.bottom-cta[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto 80px;\n  padding: 0 6vw;\n}\n\n.cta-card[_ngcontent-%COMP%] {\n  background: #14281d;\n  border-radius: 6px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  gap: 32px;\n  padding: 40px 48px;\n  position: relative;\n}\n.cta-card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: -40px;\n  top: -40px;\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  border: 40px solid rgba(255, 255, 255, 0.025);\n  pointer-events: none;\n}\n@media (max-width: 640px) {\n  .cta-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 32px 24px;\n    gap: 24px;\n  }\n}\n\n.cta-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #e07a52;\n  margin-bottom: 10px;\n}\n\n.cta-heading[_ngcontent-%COMP%] {\n  font-family: \"Syne\", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #f0e8d8;\n  margin-bottom: 8px;\n  line-height: 1.2;\n}\n\n.cta-body[_ngcontent-%COMP%] {\n  color: #a4b8c8;\n  font-size: 0.85rem;\n  font-weight: 300;\n  line-height: 1.7;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #c2603a;\n  color: #fff;\n  font-family: \"Outfit\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 14px 28px;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  background: #e07a52;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(194, 96, 58, 0.4);\n}\n@media (max-width: 640px) {\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXBjb21pbmd0b3Vycy90b3Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF5QixzQkFBQTtBQUV6Qjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFHRjs7QUFDQTtFQUNFLDBEQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQUluQjtFQUhBO0lBQU8sVUFBQTtJQUFZLHdCQUFBO0VBT25CO0FBQ0Y7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLGlCQUFBO0VBQ0EsY0FBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHVtQkFDRTtFQUVGLFVBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUtGO0FBSEU7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFLSjtBQUpJO0VBQVUsY0FBQTtBQU9kO0FBSkU7RUFBTyxhQUFBO0FBT1Q7QUFORTtFQUFXLGNBQUE7QUFTYjs7QUFOQTtFQUNFLCtCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFTRjs7QUFOQTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFTRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFB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QTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBcURGOztBQWxEQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcURGOztBQWxEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFxREY7O0FBbERBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRkFBQTtBQXFERjtBQW5ERTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBQXFESjtBQWxERTtFQTFCRjtJQTBCOEIsV0FBQTtJQUFhLHVCQUFBO0VBdUR6QztBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmN2YzZWM7O1xuICBjb2xvcjogIzFjMjUzMztcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gUEFHRSBFTlRFUlxuLnBhZ2UtZW50ZXIge1xuICBhbmltYXRpb246IHBhZ2VJbiAwLjZzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIHBhZ2VJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTRweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSEVSTyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVyby1pbWcge1xuICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZXJvOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDpcbiAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwMCcgaGVpZ2h0PSc0MDAnJTNFJTNDY2lyY2xlIGN4PScyMDAnIGN5PScyMDAnIHI9JzYwJyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjQnIG9wYWNpdHk9JzAuMDgnLyUzRSUzQ2NpcmNsZSBjeD0nMjAwJyBjeT0nMjAwJyByPScxMDUnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmZmZmJyBzdHJva2Utd2lkdGg9JzAuNCcgb3BhY2l0eT0nMC4wNicvJTNFJTNDY2lyY2xlIGN4PScyMDAnIGN5PScyMDAnIHI9JzE1NScgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC40JyBvcGFjaXR5PScwLjA1Jy8lM0UlM0NjaXJjbGUgY3g9JzIwMCcgY3k9JzIwMCcgcj0nMjEwJyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjQnIG9wYWNpdHk9JzAuMDQnLyUzRSUzQy9zdmclM0VcIiksXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyOCwzNyw1MSwwLjMpIDAlLCByZ2JhKDI4LDM3LDUxLDAuODUpIDEwMCUpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVyby1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMCA2dncgNDBweDtcbn1cblxuLmhlcm8tYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgY29sb3I6IHJnYmEoMjQwLDIzMiwyMTYsMC41KTtcblxuICBhIHtcbiAgICBjb2xvcjogcmdiYSgyNDAsMjMyLDIxNiwwLjUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICY6aG92ZXIgeyBjb2xvcjogI2YwZThkODsgfVxuICB9XG5cbiAgLnNlcCB7IG9wYWNpdHk6IDAuMzU7IH1cbiAgLmN1cnJlbnQgeyBjb2xvcjogI2YwZThkODsgfVxufVxuXG4uaGVyby10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS44cmVtLCA0LjV2dywgM3JlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZjBlOGQ4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5oZXJvLXN1YiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDI0MCwyMzIsMjE2LDAuNSk7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIENPTlRST0wgQkFSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNvbnRyb2wtYmFyIHtcbiAgYmFja2dyb3VuZDogIzBmMjQxNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDZ2dztcbiAgZ2FwOiAxNnB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDIwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG59XG5cbi5jb250cm9sLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDE0cHggMDtcbn1cblxuLnRyZWstY291bnQtbGFiZWwge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiAjYTRiOGM4O1xuXG4gIHN0cm9uZyB7IGNvbG9yOiAjZjBlOGQ4OyBmb250LXdlaWdodDogNjAwOyB9XG59XG5cbi5jb250cm9sLW1vbnRoIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBjb2xvcjogI2UwN2E1Mjtcbn1cblxuLmRpdmlkZXItdiB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xufVxuXG4uY29udHJvbC1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLnNvcnQtbGFiZWwge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICM2ZTgzOTg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zb3J0LXNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgY29sb3I6ICNmMGU4ZDg7XG4gIGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBwYWRkaW5nOiA2cHggMjhweCA2cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nMCAwIDEyIDEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzYTRiOGM4JyBkPSdNNiA4TDEgM2gxMHonLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBFUlJPUiBBTEVSVCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5lcnJvci1hbGVydCB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgcGFkZGluZzogMCA2dnc7XG59XG5cbi5hbGVydC1pbm5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTY4LDUwLDUwLDAuMDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OCw1MCw1MCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjYTgzMjMyO1xufVxuXG4ucmV0cnktYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTgzMjMyO1xuICBjb2xvcjogI2E4MzIzMjtcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIGNvbG9yIDAuMnM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNhODMyMzI7IGNvbG9yOiAjZmZmOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBZRUFSIE5BViDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi55ZWFyLW5hdiB7XG4gIGJhY2tncm91bmQ6ICMxNDI4MWQ7XG4gIHBhZGRpbmc6IDIwcHggNnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbn1cblxuLnllYXItYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gIGNvbG9yOiAjYTRiOGM4O1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgY29sb3I6ICNmMGU4ZDg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIHsgb3BhY2l0eTogMC4zNTsgY3Vyc29yOiBkZWZhdWx0OyB9XG59XG5cbi55ZWFyLWN1cnJlbnQge1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNmMGU4ZDg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAxNnB4O1xuXG4gICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMjBweDsgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDAsMjMyLDIxNiwwLjE4KTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7IHJpZ2h0OiAxMDAlOyB9XG4gICY6OmFmdGVyICB7IGxlZnQ6ICAxMDAlOyB9XG59XG5cbi55ZWFyLWRyb3Bkb3duLXdyYXAge1xuICBiYWNrZ3JvdW5kOiAjMmMzZDMzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNT05USCBUQUJTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm1vbnRoLXRhYnMge1xuICBiYWNrZ3JvdW5kOiAjMmMzZDMzO1xuICBwYWRkaW5nOiAwIDZ2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbi5tb250aC10YWIge1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDE2NCwxODQsMjAwLDAuNDUpO1xuICBmb250LWZhbWlseTogJ091dGZpdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBib3JkZXItY29sb3IgMC4ycztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkgeyBjb2xvcjogI2E0YjhjODsgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogI2YwZThkODtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYzI2MDNhO1xuICB9XG5cbiAgJltkaXNhYmxlZF0geyBjdXJzb3I6IGRlZmF1bHQ7IG9wYWNpdHk6IDAuNDsgfVxufVxuXG4ubW9udGgtY291bnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NCw5Niw1OCwwLjIpO1xuICBjb2xvcjogI2UwN2E1MjtcbiAgZm9udC1zaXplOiAwLjYycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIC5hY3RpdmUgJiB7XG4gICAgYmFja2dyb3VuZDogI2MyNjAzYTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ09OVEVOVCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDZ2dyA4MHB4O1xufVxuXG4ubW9udGgtaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweCAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyOCwgMzcsIDUxLCAwLjA4KTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4ubW9udGgtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFjMjUzMztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG5cbiAgc3BhbiB7IGNvbG9yOiAjYzI2MDNhOyB9XG59XG5cbi5tb250aC1zdWIge1xuICBjb2xvcjogIzZlODM5ODtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xufVxuXG4vLyBUQUJMRSBIRUFERVJcbi50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDFmciAxMzBweCAxNjBweDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM2ZTgzOTg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI4LCAzNywgNTEsIDAuMDgpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUUkVLIFJPVyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50cmVrLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggMWZyIDEzMHB4IDE2MHB4O1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjgsIDM3LCA1MSwgMC4wOCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogcGFkZGluZy1sZWZ0IDAuMjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC02dnc7IHJpZ2h0OiAtNnZ3O1xuICAgIHRvcDogMDsgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQwLDIzMiwyMTYsMC41Mik7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcblxuICAgICY6OmJlZm9yZSB7IG9wYWNpdHk6IDE7IH1cblxuICAgIC50cmVrLXRodW1iIGltZyB7IHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IH1cbiAgICAuYnRuLWFycm93IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7IH1cbiAgfVxuXG4gICYuc29sZC1vdXQge1xuICAgIG9wYWNpdHk6IDAuNDg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICY6aG92ZXIgeyBwYWRkaW5nLWxlZnQ6IDA7ICY6OmJlZm9yZSB7IG9wYWNpdHk6IDA7IH0gfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDE4cHggMDtcblxuICAgIC5jb2wtZGF0ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIC5kdXJhdGlvbi10YWcgeyBtYXJnaW4tdG9wOiAwOyB9XG4gICAgfVxuXG4gICAgLmNvbC1wcmljZSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjgsIDM3LCA1MSwgMC4wOCk7XG4gICAgfVxuICB9XG59XG5cbi8vIERBVEUgQ09MXG4uY29sLWRhdGUge1xuICAuZGF0ZS1tYWluIHtcbiAgICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMWMyNTMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cblxuICAuZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgY29sb3I6ICM2ZTgzOTg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbiAgLmR1cmF0aW9uLXRhZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWMyNTMzO1xuICAgIGNvbG9yOiAjYTRiOGM4O1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59XG5cbi8vIFRSRUsgSU5GTyBDT0xcbi5jb2wtdHJlayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRyZWstdGh1bWIge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDgycHg7XG4gIGhlaWdodDogNjZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40NXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi50cmVrLWluZm8tdGV4dCB7XG4gIGgzIHtcbiAgICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMWMyNTMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi50cmVrLWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAwLjc0cmVtO1xuICBjb2xvcjogIzZlODM5ODtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uY2F0ZWdvcnktdGFnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LDM3LDUxLDAuMDcpO1xuICBjb2xvcjogIzNkNGY2MztcbiAgZm9udC1zaXplOiAwLjYycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLy8gU1RBVFVTIENPTFxuLmNvbC1zdGF0dXMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnN0YXR1cy1hdmFpbGFibGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDQ1LDEwNiw3OSwwLjEpOyAgY29sb3I6ICMyZDZhNGY7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDUsMTA2LDc5LDAuMjIpOyAgfVxuLnN0YXR1cy1mYXN0ICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIxMiwxNDUsNTgsMC4xKTsgY29sb3I6ICNiODczMmE7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjEyLDE0NSw1OCwwLjIyKTsgfVxuLnN0YXR1cy1sYXN0ICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2OCw1MCw1MCwwLjEpOyAgY29sb3I6ICNhODMyMzI7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY4LDUwLDUwLDAuMjIpOyAgfVxuLnN0YXR1cy1zb2xkb3V0ICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDExMCwxMzEsMTUyLDAuMDgpOyBjb2xvcjogIzZlODM5ODsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTAsMTMxLDE1MiwwLjE4KTsgfVxuXG4vLyBQUklDRSBDT0xcbi5jb2wtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogOHB4O1xufVxuXG4ucHJpY2UtYW1vdW50IHtcbiAgZm9udC1mYW1pbHk6ICdTeW5lJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWMyNTMzO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnByaWNlLXBlciB7XG4gIGZvbnQtc2l6ZTogMC42NnJlbTtcbiAgY29sb3I6ICM2ZTgzOTg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbi52aWV3LWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycztcblxuICAmLmF2YWlsYWJsZSB7XG4gICAgYmFja2dyb3VuZDogI2MyNjAzYTtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwN2E1MjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxOTQsOTYsNTgsMC4zKTtcbiAgICB9XG4gIH1cblxuICAmLnNvbGRvdXQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEwLDEzMSwxNTIsMC4xKTtcbiAgICBjb2xvcjogIzZlODM5ODtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICAuYnRuLWFycm93IHsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBMT0FERVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubG9hZGVyLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiA1NXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubG9hZGVyLWJhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDM4cHg7XG59XG5cbi5sb2FkZXItYmFyIHtcbiAgd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjYzI2MDNhO1xuICBhbmltYXRpb246IGJhckJvdW5jZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblxuICAmOm50aC1jaGlsZCgxKSB7IGFuaW1hdGlvbi1kZWxheTogMHM7ICAgIGhlaWdodDogMTZweDsgfVxuICAmOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4xMnM7IGhlaWdodDogMjhweDsgfVxuICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogMC4yNHM7IGhlaWdodDogMjBweDsgfVxuICAmOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMC4zNnM7IGhlaWdodDogMzRweDsgfVxuICAmOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogMC40OHM7IGhlaWdodDogMjJweDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJhckJvdW5jZSB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMC4yOyB0cmFuc2Zvcm06IHNjYWxlWSgwLjYpOyB9XG4gIDUwJSAgICAgICB7IG9wYWNpdHk6IDE7ICB0cmFuc2Zvcm06IHNjYWxlWSgxKTsgfVxufVxuXG4ubG9hZGVyLXRleHQge1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNmU4Mzk4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRU1QVFkgU1RBVEUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZW1wdHktc3RhdGUge1xuICBwYWRkaW5nOiA4MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuZW1wdHktaWNvbiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIG9wYWNpdHk6IDAuMTU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxYzI1MzM7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5cbiAgcCB7IGNvbG9yOiAjNmU4Mzk4OyBmb250LXNpemU6IDAuODVyZW07IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEJPVFRPTSBDVEEgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYm90dG9tLWN0YSB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0byA4MHB4O1xuICBwYWRkaW5nOiAwIDZ2dztcbn1cblxuLmN0YS1jYXJkIHtcbiAgYmFja2dyb3VuZDogIzE0MjgxZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMycHg7XG4gIHBhZGRpbmc6IDQwcHggNDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC00MHB4OyB0b3A6IC00MHB4O1xuICAgIHdpZHRoOiAyNDBweDsgaGVpZ2h0OiAyNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA0MHB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wMjUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMzJweCAyNHB4O1xuICAgIGdhcDogMjRweDtcbiAgfVxufVxuXG4uY3RhLWV5ZWJyb3cge1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNlMDdhNTI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jdGEtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnU3luZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2YwZThkODtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uY3RhLWJvZHkge1xuICBjb2xvcjogI2E0YjhjODtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4uY3RhLWJ0biB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjYzI2MDNhO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdPdXRmaXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2UwN2E1MjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDE5NCw5Niw1OCwwLjQpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7IHdpZHRoOiAxMDAlOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 9565
/*!************************************************!*\
  !*** ./src/app/upcomingtours/upcomingtours.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Upcomingtours: () => (/* binding */ Upcomingtours)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;







class Upcomingtours {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseUrl}`;
  }
  /**
   * Get all treks with filters
   */
  getTreks(filters) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (filters) {
      if (filters.year) params = params.set('year', filters.year.toString());
      if (filters.month) params = params.set('month', filters.month.toString());
      if (filters.category) params = params.set('category', filters.category);
      if (filters.sort) params = params.set('sort', filters.sort);
      if (filters.status) params = params.set('status', filters.status);
    }
    return this.http.get(this.apiUrl, {
      params
    });
  }
  getTrekById(id) {
    if (!id || id <= 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Invalid trek ID'));
    }
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          // Backend now returns { success: true, trek: {...} }
          if (decrypted?.success && decrypted.trek) {
            return {
              success: true,
              data: decrypted.trek
            };
          }
          return decrypted;
        }
        return res;
      } catch (error) {
        console.error('Decryption error in getTrekById:', error);
        throw new Error('Failed to decrypt trek details');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error(`Get trek by ID ${id} error:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getTreksByMonth(year, month) {
    if (!year || !month || month < 1 || month > 12) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Invalid year or month'));
    }
    return this.http.get(`${this.apiUrl}/by-month/${year}/${month}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      try {
        if (!response || !response.data) {
          return [];
        }
        const decrypted = this.crypto.decrypt(response.data);
        if (decrypted?.success && Array.isArray(decrypted.treks)) {
          return decrypted.treks.map(trek => this.formatTrekForList(trek));
        }
        return [];
      } catch (error) {
        console.error('Decryption error in getTreksByMonth:', error);
        return [];
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error(`Get treks by month ${year}/${month} error:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getAllTreksFormatted(year) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('status', 'active');
    if (year) {
      params = params.set('year', year.toString());
    }
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      const decrypted = this.crypto.decrypt(response.data);
      if (!decrypted?.success || !decrypted.treks) return [];
      const formatted = [];
      decrypted.treks.forEach(trek => {
        if (trek.batches?.length) {
          trek.batches.forEach(batch => {
            formatted.push(this.formatTrekWithBatch(trek, batch));
          });
        }
      });
      return formatted;
    }));
  }
  getAvailableYears() {
    return this.http.get(`${this.apiUrl}/meta/available-years`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            success: decrypted?.success || false,
            years: decrypted?.years || [],
            count: decrypted?.count || 0
          };
        }
        return {
          success: false,
          years: [],
          count: 0
        };
      } catch (error) {
        console.error('Decryption error in getAvailableYears:', error);
        throw new Error('Failed to decrypt available years');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Get available years error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getMonthlyStats(year) {
    if (!year || year < 2000 || year > 2100) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Invalid year'));
    }
    return this.http.get(`${this.apiUrl}/stats/monthly/${year}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            success: decrypted?.success || false,
            year: decrypted?.year || year,
            months: decrypted?.months || []
          };
        }
        return {
          success: false,
          year,
          months: []
        };
      } catch (error) {
        console.error('Decryption error in getMonthlyStats:', error);
        throw new Error('Failed to decrypt monthly stats');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error(`Get monthly stats for ${year} error:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getCategories() {
    return this.http.get(`${this.apiUrl}/meta/categories`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
      try {
        if (res && res.data) {
          const decrypted = this.crypto.decrypt(res.data);
          return {
            success: decrypted?.success || false,
            categories: decrypted?.categories || [],
            count: decrypted?.count || 0
          };
        }
        return {
          success: false,
          categories: [],
          count: 0
        };
      } catch (error) {
        console.error('Decryption error in getCategories:', error);
        throw new Error('Failed to decrypt categories');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Get categories error:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  formatTrekForList(trek) {
    const startDate = new Date(trek.start_date);
    return {
      id: trek.id,
      name: trek.name,
      location: trek.location,
      date: this.formatDate(startDate),
      time: this.extractTime(trek.start_date),
      duration: trek.duration || this.calculateDuration(trek.start_date, trek.end_date),
      price: parseFloat(trek.price),
      image: trek.cover_image || 'assets/default-trek.jpg',
      status: trek.batch_status,
      category: trek.category,
      batch_id: trek.batch_id,
      start_date: trek.start_date,
      end_date: trek.end_date
    };
  }
  /**
   * Format trek with batch info
   */
  formatTrekWithBatch(trek, batch) {
    const startDate = new Date(batch.start_date);
    return {
      id: trek.id,
      name: trek.name,
      location: trek.location,
      date: this.formatDate(startDate),
      time: this.extractTime(batch.start_date),
      duration: batch.duration || this.calculateDuration(batch.start_date, batch.end_date),
      price: parseFloat(batch.price),
      image: trek.cover_image || 'assets/default-trek.jpg',
      status: batch.batch_status,
      category: trek.category,
      batch_id: batch.id,
      start_date: batch.start_date,
      end_date: batch.end_date
    };
  }
  /**
   * Format date as "DD MMM"
   */
  formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }
  /**
   * Extract time from datetime string
   */
  extractTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${period}`;
  }
  /**
   * Calculate duration between two dates
   */
  calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      return '1 Day';
    } else if (diffDays < 1) {
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
      return `${diffHours} Hours`;
    } else {
      return `${diffDays} Days`;
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Upcomingtours_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Upcomingtours)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_6__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: Upcomingtours,
    factory: Upcomingtours.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_upcomingtours_tours-module_ts.js.map