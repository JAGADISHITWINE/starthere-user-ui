"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking_booking-module_ts"],{

/***/ 1157
/*!*******************************************!*\
  !*** ./src/app/booking/booking-module.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingModule: () => (/* binding */ BookingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.component */ 2568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: ':id',
  component: _booking_component__WEBPACK_IMPORTED_MODULE_3__.BookingComponent
}];
class BookingModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BookingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BookingModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _booking_component__WEBPACK_IMPORTED_MODULE_3__.BookingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BookingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _booking_component__WEBPACK_IMPORTED_MODULE_3__.BookingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2568
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingComponent: () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _shared_Only_number_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Only number.directive */ 690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking */ 1641);
/* harmony import */ var _tour_details_tour_details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tour-details/tour-details */ 9497);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/auth */ 2964);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/token.service */ 6280);
/* harmony import */ var _auth_sessionexpired_sessionexpired__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth/sessionexpired/sessionexpired */ 5762);
var _staticBlock;
















const _c0 = a0 => ["/tour-details", a0];
function BookingComponent_aside_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 3, ctx_r0.selectedBatch.startDate, "MMM dd"), " \u00B7 ", ctx_r0.booking.participants, " participant", ctx_r0.booking.participants !== 1 ? "s" : "", " ");
  }
}
function BookingComponent_aside_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Choose departure date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.name);
  }
}
function BookingComponent_aside_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Primary contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_aside_1_div_47_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const addon_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", addon_r2.name, " \u00D7 ", ctx_r0.booking.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 3, addon_r2.price * ctx_r0.booking.participants, "1.0-0"));
  }
}
function BookingComponent_aside_1_div_47_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingComponent_aside_1_div_47_ng_container_7_div_1_Template, 6, 6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", addon_r2.selected);
  }
}
function BookingComponent_aside_1_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BookingComponent_aside_1_div_47_ng_container_7_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 41)(9, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Trek (", ctx_r0.booking.participants, " \u00D7 \u20B9", ctx_r0.selectedBatch.price, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](6, 5, ctx_r0.basePrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.addOns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](13, 8, ctx_r0.totalPrice, "1.0-0"));
  }
}
function BookingComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "aside", 18)(1, "div", 19)(2, "div", 20)(3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2190 Trek Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 23)(7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "You're booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 28)(15, "div", 29)(16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 31)(19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Batch & Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, BookingComponent_aside_1_div_21_Template, 3, 6, "div", 33)(22, BookingComponent_aside_1_div_22_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 29)(24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 31)(27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, BookingComponent_aside_1_div_29_Template, 2, 1, "div", 33)(30, BookingComponent_aside_1_div_30_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 29)(32, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 31)(35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Details for all trekkers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 29)(40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 31)(43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Review & Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Confirm your booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, BookingComponent_aside_1_div_47_Template, 14, 11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](27, _c0, ctx_r0.trekId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "http://localhost:4001/" + ctx_r0.trek.cover_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r0.trek.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.trek.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\uD83D\uDCCD ", ctx_r0.trek.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx_r0.currentStep > 1)("active", ctx_r0.currentStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.currentStep > 1 ? "\u2713" : "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx_r0.currentStep > 2)("active", ctx_r0.currentStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.currentStep > 2 ? "\u2713" : "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx_r0.currentStep > 3)("active", ctx_r0.currentStep === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.currentStep > 3 ? "\u2713" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.currentStep === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
  }
}
function BookingComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_26_div_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.successMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u2713 ", ctx_r0.successMessage, " ");
  }
}
function BookingComponent_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_26_div_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u26A0 ", ctx_r0.errorMessage, " ");
  }
}
function BookingComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingComponent_div_26_div_1_Template, 4, 1, "div", 44)(2, BookingComponent_div_26_div_2_Template, 4, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
  }
}
function BookingComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Loading trek details\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function BookingComponent_div_28_ng_container_1_label_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 76);
  }
}
function BookingComponent_div_28_ng_container_1_label_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 67)(1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_1_label_14_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.booking.batchId, $event) || (ctx_r0.booking.batchId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BookingComponent_div_28_ng_container_1_label_14_Template_input_change_1_listener() {
      const batch_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onBatchSelect(batch_r6.batchId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BookingComponent_div_28_ng_container_1_label_14_div_3_Template, 1, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 71)(5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const batch_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r0.booking.batchId == batch_r6.batchId)("disabled", batch_r6.status !== "active" || batch_r6.availableSlots === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", batch_r6.batchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.batchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", batch_r6.status !== "active" || batch_r6.availableSlots === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.booking.batchId == batch_r6.batchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 20, batch_r6.startDate, "MMM dd"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 23, batch_r6.endDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", batch_r6.duration, " \u00B7 ", batch_r6.availableSlots, " slots remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", batch_r6.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("status-ok", batch_r6.availableSlots > 5)("status-few", batch_r6.availableSlots > 0 && batch_r6.availableSlots <= 5)("status-full", batch_r6.availableSlots === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", batch_r6.availableSlots === 0 ? "Full" : batch_r6.availableSlots <= 5 ? "Few Left" : "Open", " ");
  }
}
function BookingComponent_div_28_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Participants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 79)(7, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_28_ng_container_1_div_15_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.decrementParticipants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_28_ng_container_1_div_15_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.incrementParticipants());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 78)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Price per Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Max ", ctx_r0.selectedBatch.availableSlots, " available in this batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "\u20B9" + ctx_r0.selectedBatch.price);
  }
}
function BookingComponent_div_28_ng_container_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Add-ons (Optional) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_28_ng_container_1_label_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 85)(1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_1_label_18_Template_input_ngModelChange_1_listener($event) {
      const addon_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](addon_r9.selected, $event) || (addon_r9.selected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 87)(3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const addon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("checked", addon_r9.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", addon_r9.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](addon_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](addon_r9.selected ? "\u2713" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", addon_r9.price, " / person");
  }
}
function BookingComponent_div_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Step 1 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Select Your Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Choose a departure date and set your group size.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 58)(9, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Available Batches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, BookingComponent_div_28_ng_container_1_label_14_Template, 15, 26, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BookingComponent_div_28_ng_container_1_div_15_Template, 19, 3, "div", 63)(16, BookingComponent_div_28_ng_container_1_div_16_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, BookingComponent_div_28_ng_container_1_label_18_Template, 9, 6, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.batches);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedBatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.addOns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.addOns);
  }
}
function BookingComponent_div_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Step 2 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "This person will be the main point of contact for the booking.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 77)(9, "div", 78)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_2_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.booking.name, $event) || (ctx_r0.booking.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 78)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_2_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.booking.email, $event) || (ctx_r0.booking.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 77)(22, "div", 78)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_2_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.booking.phone, $event) || (ctx_r0.booking.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 78)(29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Emergency Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_2_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.booking.emergencyContact, $event) || (ctx_r0.booking.emergencyContact = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 94)(35, "div", 78)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Special Requests / Medical Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "textarea", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_2_Template_textarea_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.booking.specialRequests, $event) || (ctx_r0.booking.specialRequests = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.emergencyContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.booking.specialRequests);
  }
}
function BookingComponent_div_28_ng_container_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u26A0 Please fill all required fields for every participant before continuing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_28_ng_container_3_div_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Primary Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_28_ng_container_3_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Auto-filled from contact info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_28_ng_container_3_div_9_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](participant_r12.ageError);
  }
}
function BookingComponent_div_28_ng_container_3_div_9_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](participant_r12.idError);
  }
}
function BookingComponent_div_28_ng_container_3_div_9_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Auto-filled from contact info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_28_ng_container_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 99)(1, "div", 100)(2, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BookingComponent_div_28_ng_container_3_div_9_span_6_Template, 2, 0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 104)(8, "div", 78)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_input_ngModelChange_13_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.name, $event) || (participant_r12.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, BookingComponent_div_28_ng_container_3_div_9_div_14_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 78)(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_input_ngModelChange_20_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.age, $event) || (participant_r12.age = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function BookingComponent_div_28_ng_container_3_div_9_Template_input_input_20_listener() {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.validateAge(participant_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, BookingComponent_div_28_ng_container_3_div_9_div_21_Template, 2, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 78)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_select_ngModelChange_27_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.gender, $event) || (participant_r12.gender = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Select Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 78)(37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "ID Proof Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_select_ngModelChange_41_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.idType, $event) || (participant_r12.idType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BookingComponent_div_28_ng_container_3_div_9_Template_select_change_41_listener() {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      participant_r12.idNumber = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.validateId(participant_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Select ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Aadhar Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "PAN Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Passport");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Driving License");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Voter ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 78)(55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "ID Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_input_ngModelChange_59_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.idNumber, $event) || (participant_r12.idNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function BookingComponent_div_28_ng_container_3_div_9_Template_input_input_59_listener() {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.formatIdInput(participant_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, BookingComponent_div_28_ng_container_3_div_9_div_60_Template, 2, 1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 78)(62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_input_ngModelChange_64_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.phone, $event) || (participant_r12.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, BookingComponent_div_28_ng_container_3_div_9_div_65_Template, 2, 0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 122)(67, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Medical Conditions / Allergies");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "textarea", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_3_div_9_Template_textarea_ngModelChange_69_listener($event) {
      const participant_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](participant_r12.medicalInfo, $event) || (participant_r12.medicalInfo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const participant_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Participant ", i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r13 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", i_r13 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r13 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", participant_r12.ageError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.idType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.idNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxlength", ctx_r0.getIdMaxLength(participant_r12.idType));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", participant_r12.idError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", i_r13 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r13 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", participant_r12.medicalInfo);
  }
}
function BookingComponent_div_28_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Step 3 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Participant Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BookingComponent_div_28_ng_container_3_div_8_Template, 2, 0, "div", 96)(9, BookingComponent_div_28_ng_container_3_div_9_Template, 70, 17, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Please provide details for all ", ctx_r0.booking.participants, " participant(s).");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.areAllParticipantsValid());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.participants);
  }
}
function BookingComponent_div_28_ng_container_4_tr_86_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_28_ng_container_4_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, BookingComponent_div_28_ng_container_4_tr_86_span_5_Template, 2, 0, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r16 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r15.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r15.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r15.idType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](p_r15.idNumber);
  }
}
function BookingComponent_div_28_ng_container_4_ng_container_94_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 136)(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const addon_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", addon_r17.name, " (", ctx_r0.booking.participants, " \u00D7 \u20B9", addon_r17.price, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 4, addon_r17.price * ctx_r0.booking.participants, "1.0-0"));
  }
}
function BookingComponent_div_28_ng_container_4_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingComponent_div_28_ng_container_4_ng_container_94_div_1_Template, 6, 7, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const addon_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", addon_r17.selected);
  }
}
function BookingComponent_div_28_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 54)(2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Step 4 of 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Review Your Booking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Please verify all details before proceeding to payment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 126)(9, "div", 127)(10, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Trek Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_28_ng_container_4_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.currentStep = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 130)(15, "div", 131)(16, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 131)(21, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 131)(28, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 131)(33, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 126)(38, "div", 127)(39, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Primary Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_28_ng_container_4_Template_a_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.currentStep = 2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 130)(44, "div", 131)(45, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 131)(50, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 131)(55, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 131)(60, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Emergency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 126)(65, "div", 127)(66, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_div_28_ng_container_4_Template_a_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.currentStep = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "table", 134)(71, "thead")(72, "tr")(73, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, BookingComponent_div_28_ng_container_4_tr_86_Template, 14, 7, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 135)(88, "div", 136)(89, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](93, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](94, BookingComponent_div_28_ng_container_4_ng_container_94_Template, 2, 1, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 139)(96, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](100, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "label", 140)(102, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function BookingComponent_div_28_ng_container_4_Template_input_ngModelChange_102_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.termsAccepted, $event) || (ctx_r0.termsAccepted = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, " I agree to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "a", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Cancellation Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, " of Karnataka Adventures. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.trek.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](25, 16, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.startDate, "MMM dd"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](26, 19, ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.endDate, "MMM dd, yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.booking.emergencyContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Trek (", ctx_r0.booking.participants, " \u00D7 \u20B9", ctx_r0.selectedBatch == null ? null : ctx_r0.selectedBatch.price, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](93, 22, ctx_r0.basePrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.addOns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](100, 25, ctx_r0.totalPrice, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.termsAccepted);
  }
}
function BookingComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingComponent_div_28_ng_container_1_Template, 19, 4, "ng-container", 53)(2, BookingComponent_div_28_ng_container_2_Template, 39, 5, "ng-container", 53)(3, BookingComponent_div_28_ng_container_3_Template, 10, 3, "ng-container", 53)(4, BookingComponent_div_28_ng_container_4_Template, 111, 28, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentStep === 4);
  }
}
function BookingComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.prevStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u2190 Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function BookingComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 148)(1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 1, ctx_r0.totalPrice, "1.0-0"));
  }
}
function BookingComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Continue \u2192 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.canProceedToNextStep());
  }
}
function BookingComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookingComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.proceedToPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isSubmitting || !ctx_r0.termsAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.isSubmitting ? "Processing\u2026" : "\uD83D\uDCB3 Pay Now", " ");
  }
}
class BookingComponent {
  constructor(route, bookingService, trekService, auth, authModal, router, tokenService, sessionService) {
    this.route = route;
    this.bookingService = bookingService;
    this.trekService = trekService;
    this.auth = auth;
    this.authModal = authModal;
    this.router = router;
    this.tokenService = tokenService;
    this.sessionService = sessionService;
    this.trekId = 0;
    this.currentStep = 1;
    this.isLoading = true;
    this.termsAccepted = true;
    // Trek data from API
    this.trek = null;
    this.batches = [];
    this.selectedBatch = null;
    // Booking form data
    this.booking = {
      batchId: 0,
      date: "",
      participants: 1,
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      specialRequests: ""
    };
    // Participants array
    this.participants = [];
    // Add-ons
    this.addOns = [{
      id: 1,
      name: "Trekking Poles",
      price: 200,
      selected: false
    }, {
      id: 2,
      name: "Sleeping Bag",
      price: 300,
      selected: false
    }, {
      id: 3,
      name: "Travel Insurance",
      price: 500,
      selected: false
    }];
    this.isSubmitting = false;
  }
  ngOnInit() {
    // Get trek ID from route
    this.route.params.subscribe(params => {
      this.trekId = +params["id"];
      if (this.trekId) {
        this.loadTrekData();
      }
    });
    if (!this.booking.participants) {
      this.booking.participants = 1;
    }
  }
  loadTrekData() {
    this.isLoading = true;
    this.trekService.getTrekById(this.trekId).subscribe({
      next: response => {
        if (response.success) {
          this.trek = response.data || [];
          console.log("Trek data loaded:", this.trek);
          // Convert single batch to array for consistent handling
          if (this.trek.batch && !Array.isArray(this.trek.batch)) {
            this.batches = [this.trek.batch];
          } else if (this.trek.batches) {
            this.batches = this.trek.batches;
          } else {
            this.batches = [];
          }
          // Find available batch
          const availableBatch = this.batches.find(b => b.status === "active" && b.availableSlots > 0);
          if (availableBatch) {
            const batchIdValue = availableBatch.batchId || availableBatch.id;
            this.booking.batchId = batchIdValue;
            this.onBatchSelect(batchIdValue);
          }
          // Pre-fill user data from token (centralized)
          const decoded = this.tokenService.decode();
          this.booking.name = decoded?.name || "";
          this.booking.email = decoded?.email || "";
          this.booking.phone = decoded?.phone || "";
          // Initialize participants array
          this.initializeParticipants();
        }
        this.isLoading = false;
      },
      error: error => {
        console.error('Load trek error:', error);
        this.isLoading = false;
      }
    });
  }
  onBatchSelect(batchId) {
    const numericBatchId = typeof batchId === "string" ? parseInt(batchId) : batchId;
    this.selectedBatch = this.batches.find(b => b.batchId === numericBatchId || b.id === numericBatchId);
    if (this.selectedBatch) {
      this.booking.date = this.selectedBatch.startDate;
      this.booking.batchId = this.selectedBatch.batchId || this.selectedBatch.id;
    }
  }
  /**
   * Initialize participants array based on number of participants
   */
  initializeParticipants() {
    this.participants = [];
    for (let i = 0; i < this.booking.participants; i++) {
      if (i === 0) {
        // First participant is the primary contact
        this.participants.push({
          name: this.booking.name,
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: this.booking.phone,
          medicalInfo: ""
        });
      } else {
        // Additional participants
        this.participants.push({
          name: "",
          age: null,
          gender: "",
          idType: "",
          idNumber: "",
          phone: "",
          medicalInfo: ""
        });
      }
    }
  }
  /**
   * Update participants array when number changes
   */
  onParticipantsInput(event) {
    const input = event.target;
    let value = Number(input.value);
    if (!this.selectedBatch) return;
    const max = this.selectedBatch.availableSlots;
    // Clamp to max available
    if (value > max) value = max;
    if (value < 1) value = 1;
    // Update model
    this.booking.participants = value;
    input.value = value.toString();
    // Reinitialize participants array
    this.initializeParticipants();
  }
  /**
   * Sync primary contact data to first participant
   */
  syncPrimaryContactToParticipant() {
    if (this.participants.length > 0) {
      this.participants[0].name = this.booking.name;
      this.participants[0].phone = this.booking.phone;
    }
  }
  /**
   * Check if all participants have required fields filled
   */
  areAllParticipantsValid() {
    return this.participants.every(participant => participant.name.trim() !== '' && participant.age !== null && participant.age > 0 && participant.gender !== '' && participant.idType !== '' && participant.idNumber.trim() !== '');
  }
  /**
   * Check if can proceed to next step
   */
  canProceedToNextStep() {
    switch (this.currentStep) {
      case 1:
        return this.booking.batchId > 0 && this.booking.participants >= 1 && this.selectedBatch !== null;
      case 2:
        return this.booking.name.trim() !== '' && this.booking.email.trim() !== '' && this.booking.phone.length === 10 && this.booking.emergencyContact.length === 10;
      case 3:
        return this.areAllParticipantsValid();
      default:
        return true;
    }
  }
  get basePrice() {
    if (!this.selectedBatch) return 0;
    return (this.selectedBatch.price || 0) * this.booking.participants;
  }
  get addOnsPrice() {
    return this.addOns.filter(addon => addon.selected).reduce((sum, addon) => sum + addon.price, 0) * this.booking.participants;
  }
  get totalPrice() {
    return this.basePrice + this.addOnsPrice;
  }
  nextStep() {
    // Validate current step
    if (!this.canProceedToNextStep()) {
      if (this.currentStep === 1) {
        alert("Please select a batch and number of participants");
      } else if (this.currentStep === 2) {
        alert("Please fill all required contact information");
      } else if (this.currentStep === 3) {
        alert("Please fill all required participant details");
      }
      return;
    }
    // Check authentication before step 3
    if (this.currentStep === 2) {
      // Sync primary contact to first participant before moving forward
      this.syncPrimaryContactToParticipant();
      const hasToken = !!this.tokenService.getToken(); // token exists (even if expired)
      const isValid = this.tokenService.isValid(); // token exists AND not expired
      if (hasToken && !isValid) {
        // Token exists but is expired → show session expired modal
        this.sessionService.notifyExpired();
        return;
      }
      if (!hasToken) {
        // No token at all → fresh login flow
        this.authModal.openLogin().then(result => {
          if (result && result.success) {
            this.currentStep++;
          }
        }).catch(() => {
          // User cancelled login
        });
        return;
      }
    }
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  proceedToPayment() {
    this.successMessage = "";
    this.errorMessage = "";
    this.isSubmitting = true;
    // Centralized token handling
    this.userId = this.tokenService.getUserId();
    const bookingData = {
      userId: this.userId,
      trekId: this.trekId,
      trekName: this.trek.name,
      batchId: this.selectedBatch.batchId || this.selectedBatch.id,
      startDate: this.selectedBatch.startDate,
      endDate: this.selectedBatch.endDate,
      price: this.selectedBatch.price,
      availableSlots: this.selectedBatch.availableSlots,
      participants: this.booking.participants,
      selectedAddOns: this.addOns.filter(addon => addon.selected),
      personalInfo: {
        name: this.booking.name,
        email: this.booking.email,
        phone: this.booking.phone,
        emergencyContact: this.booking.emergencyContact,
        specialRequests: this.booking.specialRequests
      },
      participantDetails: this.participants // NEW: Include participant details
    };
    // Save to service
    this.bookingService.setBookingData(bookingData).subscribe(res => {
      if (res.success == true) {
        this.successMessage = res.message || "Booking successful 🎉";
        setTimeout(() => {
          this.resetBooking();
          this.successMessage = "";
          this.isSubmitting = false;
          this.router.navigateByUrl("");
        }, 1500);
      } else {
        this.errorMessage = res.message || "Booking failed";
        setTimeout(() => {
          this.errorMessage = "";
          this.isSubmitting = false;
        }, 1500);
      }
    });
  }
  resetBooking() {
    this.currentStep = 1;
    this.booking = {
      batchId: 0,
      date: "",
      participants: 1,
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      specialRequests: ""
    };
    this.participants = [];
    this.initializeParticipants();
  }
  decrementParticipants() {
    if (this.booking.participants > 1) this.booking.participants--;
  }
  incrementParticipants() {
    if (this.booking.participants < this.selectedBatch.availableSlots) this.booking.participants++;
  }
  validateId(participant) {
    participant.idError = '';
    if (!participant.idType || !participant.idNumber) return;
    const rawValue = participant.idNumber.replace(/\s/g, '');
    switch (participant.idType) {
      case 'aadhaar':
        if (!/^\d{12}$/.test(rawValue)) {
          participant.idError = 'Aadhaar must be 12 digits';
        }
        break;
      case 'pan':
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(rawValue)) {
          participant.idError = 'Invalid PAN format (ABCDE1234F)';
        }
        break;
      case 'passport':
        if (!/^[A-Z][0-9]{7}$/.test(rawValue)) {
          participant.idError = 'Invalid Passport format (A1234567)';
        }
        break;
      case 'driving':
        if (rawValue.length < 10) {
          participant.idError = 'Invalid Driving License number';
        }
        break;
    }
  }
  formatIdInput(participant) {
    if (!participant.idType) return;
    let value = participant.idNumber || '';
    switch (participant.idType) {
      case 'pan':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        break;
      case 'aadhaar':
        // Remove non-digits
        let digits = value.replace(/\D/g, '').substring(0, 12);
        // Add spaces every 4 digits
        participant.idNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
        break;
      case 'passport':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 8);
        break;
      case 'driving':
        participant.idNumber = value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 15);
        break;
    }
    this.validateId(participant);
  }
  validateAge(participant) {
    participant.ageError = '';
    if (participant.age === null) return;
    if (participant.age < 12) {
      participant.ageError = 'Minimum age is 12 years';
    }
  }
  getIdMaxLength(idType) {
    switch (idType) {
      case 'aadhaar':
        return 14;
      // 12 digits + 2 spaces
      case 'pan':
        return 10;
      case 'passport':
        return 8;
      case 'driving':
        return 15;
      default:
        return 20;
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BookingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_booking__WEBPACK_IMPORTED_MODULE_8__.Booking), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tour_details_tour_details__WEBPACK_IMPORTED_MODULE_9__.TourDetails), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_10__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_11__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_12__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_sessionexpired_sessionexpired__WEBPACK_IMPORTED_MODULE_13__.Sessionexpired));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BookingComponent,
    selectors: [["app-booking"]],
    decls: 34,
    vars: 28,
    consts: [[1, "checkout-shell"], ["class", "left-panel", 4, "ngIf"], [1, "right-panel"], [1, "mobile-nav"], [1, "mobile-back", 3, "routerLink"], [1, "mobile-title"], [2, "width", "60px"], [1, "mobile-steps"], [1, "mob-step"], [1, "mob-num"], ["class", "form-area", "style", "padding-bottom:0; padding-top:20px", 4, "ngIf"], ["class", "loader-overlay", 4, "ngIf"], ["class", "form-area", 4, "ngIf"], [1, "bottom-bar", "w-100"], ["class", "btn-back", 3, "click", 4, "ngIf"], ["class", "bar-price", 4, "ngIf"], ["class", "btn-next", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-next btn-pay", 3, "disabled", "click", 4, "ngIf"], [1, "left-panel"], [1, "trek-thumb", 2, "position", "relative"], [1, "panel-nav"], [1, "back-btn", 3, "routerLink"], [3, "src", "alt"], [1, "trek-info"], [1, "trek-label"], [1, "trek-name"], [1, "trek-location"], [1, "panel-divider"], [1, "stepper"], [1, "step-row"], [1, "step-node"], [1, "step-text"], [1, "step-title"], ["class", "step-sub", 4, "ngIf"], [1, "step-sub"], ["class", "price-summary", 4, "ngIf"], [1, "price-summary"], [1, "price-row"], [1, "price-label"], [1, "price-amt"], [4, "ngFor", "ngForOf"], [1, "price-row", "total"], ["class", "price-row", 4, "ngIf"], [1, "form-area", 2, "padding-bottom", "0", "padding-top", "20px"], ["class", "success-bar", 4, "ngIf"], ["class", "error-bar", 4, "ngIf"], [1, "success-bar"], [1, "alert-close", 3, "click"], [1, "error-bar"], [1, "loader-overlay"], [1, "loader-ring"], [1, "loader-text"], [1, "form-area"], [4, "ngIf"], [1, "step-headline"], [1, "step-eyebrow"], [1, "step-h1"], [1, "step-desc"], [2, "margin-bottom", "28px"], [2, "font-size", "0.75rem", "font-weight", "700", "letter-spacing", "0.04em", "color", "var(--body)", "display", "block", "margin-bottom", "10px"], [1, "req"], [1, "batch-options"], ["class", "batch-option", 3, "selected", "disabled", 4, "ngFor", "ngForOf"], ["class", "form-row", 4, "ngIf"], ["style", "margin-top:8px;margin-bottom:12px;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted)", 4, "ngIf"], [1, "addons-grid"], ["class", "addon-card", 3, "checked", 4, "ngFor", "ngForOf"], [1, "batch-option"], ["type", "radio", "name", "batch", "checked", "", 3, "ngModelChange", "change", "value", "ngModel", "disabled"], [1, "batch-radio"], ["style", "width:8px;height:8px;border-radius:50%;background:#3d6b4a", 4, "ngIf"], [1, "batch-info"], [1, "batch-dates"], [1, "batch-meta"], [1, "batch-price"], [1, "batch-status"], [2, "width", "8px", "height", "8px", "border-radius", "50%", "background", "#3d6b4a"], [1, "form-row"], [1, "field"], [1, "counter-row"], ["type", "button", 1, "counter-btn", 3, "click"], [1, "counter-val"], [1, "field-hint"], ["readonly", "", 1, "form-input", 3, "value"], [2, "margin-top", "8px", "margin-bottom", "12px", "font-size", "0.75rem", "font-weight", "700", "letter-spacing", "0.1em", "text-transform", "uppercase", "color", "var(--muted)"], [1, "addon-card"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "addon-top"], [1, "addon-name"], [1, "addon-check"], [1, "addon-price"], ["placeholder", "Enter full name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "your@email.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+91 XXXXX XXXXX", "minlength", "10", "maxlength", "10", "onlyNumber", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row", "full"], ["placeholder", "Any allergies, dietary restrictions, or special requirements\u2026", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["class", "info-bar", 4, "ngIf"], ["class", "participant-block", 4, "ngFor", "ngForOf"], [1, "info-bar"], [1, "participant-block"], [1, "participant-header"], [1, "p-num"], [1, "p-name"], ["class", "p-badge", 4, "ngIf"], [1, "participant-fields"], ["placeholder", "Enter full name", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "field-hint", 4, "ngIf"], ["type", "number", "placeholder", "e.g. 28", "min", "18", "max", "100", 1, "form-input", 3, "ngModelChange", "input", "ngModel"], ["class", "error", 4, "ngIf"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Male"], ["value", "Female"], ["value", "Other"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "Aadhar"], ["value", "PAN"], ["value", "Passport"], ["value", "Driving License"], ["value", "Voter ID"], ["placeholder", "Enter ID number", 1, "form-input", 3, "ngModelChange", "input", "ngModel", "maxlength"], ["type", "tel", "placeholder", "+91 XXXXX XXXXX", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "field", "full"], ["placeholder", "Any conditions, allergies, or medications\u2026", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "p-badge"], [1, "error"], [1, "review-block"], [1, "review-header"], [1, "review-header-title"], [1, "edit-link", 3, "click"], [1, "review-body"], [1, "review-row"], [1, "review-key"], [1, "review-val"], [1, "p-table"], [1, "price-breakdown"], [1, "pb-row"], [1, "pb-label"], [1, "pb-val"], [1, "pb-row", "total"], [1, "terms-check"], [1, "terms-text"], ["routerLink", "/terms"], ["routerLink", "/cancellation"], ["class", "primary-tag", 4, "ngIf"], [1, "primary-tag"], ["class", "pb-row", 4, "ngIf"], [1, "btn-back", 3, "click"], [1, "bar-price"], [1, "bar-price-label"], [1, "bar-price-amount"], [1, "btn-next", 3, "click", "disabled"], [1, "btn-next", "btn-pay", 3, "click", "disabled"]],
    template: function BookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingComponent_aside_1_Template, 48, 29, "aside", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u2190 Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Book Your Trek");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Batch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8)(19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Participants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8)(23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, BookingComponent_div_26_Template, 3, 2, "div", 10)(27, BookingComponent_div_27_Template, 4, 0, "div", 11)(28, BookingComponent_div_28_Template, 5, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, BookingComponent_button_30_Template, 2, 0, "button", 14)(31, BookingComponent_div_31_Template, 6, 4, "div", 15)(32, BookingComponent_button_32_Template, 2, 1, "button", 16)(33, BookingComponent_button_33_Template, 2, 2, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.trek);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c0, ctx.trekId));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx.currentStep > 1)("active", ctx.currentStep === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentStep > 1 ? "\u2713" : "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx.currentStep > 2)("active", ctx.currentStep === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentStep > 2 ? "\u2713" : "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx.currentStep > 3)("active", ctx.currentStep === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentStep > 3 ? "\u2713" : "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.currentStep === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.successMessage || ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedBatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep < 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentStep === 4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHrefDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _shared_Only_number_directive__WEBPACK_IMPORTED_MODULE_4__.OnlyNumberDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  background: #faf6f0;\n  color: #1a1e1b;\n  -webkit-font-smoothing: antialiased;\n  overflow-x: hidden;\n}\n\n.checkout-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  min-height: 100vh;\n}\n\n.left-panel[_ngcontent-%COMP%] {\n  background: #162318;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n  scrollbar-width: none;\n  display: flex;\n  flex-direction: column;\n}\n.left-panel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.trek-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.trek-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: brightness(0.7) saturate(0.8);\n  transition: transform 8s linear;\n}\n.trek-thumb[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to bottom, transparent 30%, #162318 100%);\n}\n\n.panel-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  z-index: 10;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.8);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  padding: 7px 13px;\n  border-radius: 6px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n\n.trek-info[_ngcontent-%COMP%] {\n  padding: 0 28px 24px;\n  margin-top: -20px;\n  position: relative;\n  z-index: 1;\n}\n\n.trek-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #9dc9aa;\n  margin-bottom: 8px;\n}\n\n.trek-name[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  margin-bottom: 6px;\n}\n\n.trek-location[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.45);\n}\n\n.panel-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 0 28px 24px;\n}\n\n.stepper[_ngcontent-%COMP%] {\n  padding: 0 28px;\n  display: flex;\n  flex-direction: column;\n}\n\n.step-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding-bottom: 28px;\n  position: relative;\n}\n.step-row[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.step-row[_ngcontent-%COMP%]:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 28px;\n  bottom: 0;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.08);\n}\n.step-row.completed[_ngcontent-%COMP%]::before {\n  background: rgba(90, 155, 110, 0.35);\n}\n.step-row.active[_ngcontent-%COMP%]::before {\n  background: rgba(90, 155, 110, 0.15);\n}\n\n.step-node[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.72rem;\n  font-weight: 700;\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  border: 1.5px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.25);\n  background: transparent;\n}\n.step-row.completed[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%] {\n  background: #5a9b6e;\n  border-color: #5a9b6e;\n  color: #fff;\n}\n.step-row.active[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #5a9b6e;\n  color: #5a9b6e;\n  box-shadow: 0 0 0 4px rgba(90, 155, 110, 0.15);\n}\n\n.step-text[_ngcontent-%COMP%] {\n  padding-top: 3px;\n}\n\n.step-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.25);\n  margin-bottom: 2px;\n  transition: color 0.3s;\n}\n.step-row.completed[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n}\n.step-row.active[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.step-sub[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.18);\n}\n.step-row.active[_ngcontent-%COMP%]   .step-sub[_ngcontent-%COMP%] {\n  color: #9dc9aa;\n}\n\n.price-summary[_ngcontent-%COMP%] {\n  margin: 24px 28px 0;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 10px;\n}\n\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.4);\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.price-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.price-row.total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  padding-top: 12px;\n  margin-top: 4px;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.price-row.total[_ngcontent-%COMP%]   .price-amt[_ngcontent-%COMP%] {\n  color: #9dc9aa;\n  font-size: 1.15rem;\n}\n\n.price-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.price-amt[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.right-panel[_ngcontent-%COMP%] {\n  background: #faf6f0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n  background: #162318;\n  padding: 12px 20px;\n  align-items: center;\n  justify-content: space-between;\n}\n.mobile-nav[_ngcontent-%COMP%]   .mobile-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  padding: 7px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.mobile-nav[_ngcontent-%COMP%]   .mobile-title[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #fff;\n}\n\n.mobile-steps[_ngcontent-%COMP%] {\n  display: none;\n  background: #ffffff;\n  border-bottom: 1px solid #e4ddd3;\n  padding: 0 20px;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.mobile-steps[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.mob-step[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 16px;\n  border-bottom: 2px solid transparent;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #7e8c80;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  transition: color 0.2s, border-color 0.2s;\n}\n.mob-step[_ngcontent-%COMP%]   .mob-num[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1.5px solid currentColor;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n.mob-step.active[_ngcontent-%COMP%] {\n  color: #3d6b4a;\n  border-bottom-color: #3d6b4a;\n}\n.mob-step.completed[_ngcontent-%COMP%] {\n  color: #5a9b6e;\n  border-bottom-color: #5a9b6e;\n}\n\n.form-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 48px 56px 140px;\n  max-width: 680px;\n}\n\n.step-headline[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n\n.step-eyebrow[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #5a9b6e;\n  margin-bottom: 8px;\n}\n\n.step-h1[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: clamp(1.5rem, 2.5vw, 2rem);\n  font-weight: 700;\n  color: #1a1e1b;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  margin-bottom: 6px;\n}\n\n.step-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #7e8c80;\n  font-weight: 400;\n  line-height: 1.6;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n.form-row.full[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.form-row.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.field.span2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  color: #3f4840;\n}\n\n.req[_ngcontent-%COMP%] {\n  color: #d4882c;\n  margin-left: 2px;\n}\n\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 8px;\n  padding: 11px 14px;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.85rem;\n  color: #1a1e1b;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  width: 100%;\n  appearance: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder, \n.form-select[_ngcontent-%COMP%]::placeholder, \n.form-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #b8b0a6;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #3d6b4a;\n  box-shadow: 0 0 0 3px rgba(61, 107, 74, 0.1);\n}\n.form-input[_ngcontent-%COMP%]:disabled, \n.form-select[_ngcontent-%COMP%]:disabled, \n.form-textarea[_ngcontent-%COMP%]:disabled {\n  background: #f3ede4;\n  color: #7e8c80;\n  cursor: not-allowed;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237e8c80' d='M6 8L1 3h10z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 12px center;\n  padding-right: 32px;\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 88px;\n}\n\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #7e8c80;\n  margin-top: -2px;\n}\n\n.batch-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.batch-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.batch-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.batch-option.selected[_ngcontent-%COMP%] {\n  border-color: #3d6b4a;\n  box-shadow: 0 0 0 3px rgba(61, 107, 74, 0.08);\n  background: rgba(61, 107, 74, 0.03);\n}\n.batch-option.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.batch-radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #c8bfb3;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border-color 0.2s;\n}\n.batch-option.selected[_ngcontent-%COMP%]   .batch-radio[_ngcontent-%COMP%] {\n  border-color: #3d6b4a;\n}\n\n.batch-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.batch-dates[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1a1e1b;\n  margin-bottom: 2px;\n}\n\n.batch-meta[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #7e8c80;\n}\n\n.batch-price[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #2d5038;\n}\n\n.batch-status[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n\n.status-ok[_ngcontent-%COMP%] {\n  background: rgba(61, 107, 74, 0.1);\n  color: #3d6b4a;\n}\n\n.status-few[_ngcontent-%COMP%] {\n  background: rgba(212, 136, 44, 0.1);\n  color: #d4882c;\n}\n\n.status-full[_ngcontent-%COMP%] {\n  background: rgba(201, 64, 64, 0.1);\n  color: #c94040;\n}\n\n.counter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 8px;\n  overflow: hidden;\n  width: fit-content;\n}\n\n.counter-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: transparent;\n  border: none;\n  font-size: 1.1rem;\n  color: #7e8c80;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, color 0.15s;\n}\n.counter-btn[_ngcontent-%COMP%]:hover {\n  background: #f3ede4;\n  color: #1a1e1b;\n}\n.counter-btn[_ngcontent-%COMP%]:active {\n  background: #e4ddd3;\n}\n\n.counter-val[_ngcontent-%COMP%] {\n  min-width: 48px;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1a1e1b;\n  border-left: 1px solid #e4ddd3;\n  border-right: 1px solid #e4ddd3;\n  line-height: 44px;\n}\n\n.addons-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 24px;\n}\n\n.addon-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 10px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  position: relative;\n}\n.addon-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.addon-card.checked[_ngcontent-%COMP%] {\n  border-color: #3d6b4a;\n  box-shadow: 0 0 0 3px rgba(61, 107, 74, 0.08);\n}\n.addon-card.checked[_ngcontent-%COMP%]   .addon-check[_ngcontent-%COMP%] {\n  background: #3d6b4a;\n  border-color: #3d6b4a;\n  color: #fff;\n}\n\n.addon-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 6px;\n}\n\n.addon-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1a1e1b;\n  line-height: 1.3;\n  flex: 1;\n  margin-right: 8px;\n}\n\n.addon-check[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  border: 1.5px solid #c8bfb3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  color: transparent;\n  flex-shrink: 0;\n  transition: all 0.15s;\n}\n\n.addon-price[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #2d5038;\n}\n\n.participant-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.participant-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  background: #f3ede4;\n  border-bottom: 1px solid #e4ddd3;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.p-num[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #162318;\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.p-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: #1a1e1b;\n}\n\n.p-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  background: rgba(45, 80, 56, 0.1);\n  color: #2d5038;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n\n.participant-fields[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.participant-fields[_ngcontent-%COMP%]   .field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n.info-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: rgba(212, 136, 44, 0.07);\n  border: 1px solid rgba(212, 136, 44, 0.2);\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n  font-size: 0.78rem;\n  color: #7a4e14;\n  line-height: 1.5;\n}\n\n.success-bar[_ngcontent-%COMP%], .error-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  margin-bottom: 20px;\n}\n\n.success-bar[_ngcontent-%COMP%] {\n  background: rgba(61, 107, 74, 0.08);\n  border: 1px solid rgba(61, 107, 74, 0.2);\n  color: #2d5038;\n}\n\n.error-bar[_ngcontent-%COMP%] {\n  background: rgba(201, 64, 64, 0.07);\n  border: 1px solid rgba(201, 64, 64, 0.2);\n  color: #c94040;\n}\n\n.alert-close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.5;\n  font-size: 1rem;\n}\n.alert-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.review-block[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.review-header[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  background: #f3ede4;\n  border-bottom: 1px solid #e4ddd3;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.review-header-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #7e8c80;\n}\n\n.edit-link[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #3d6b4a;\n  cursor: pointer;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.edit-link[_ngcontent-%COMP%]:hover {\n  color: #2d5038;\n}\n\n.review-body[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n}\n\n.review-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  padding: 7px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  font-size: 0.82rem;\n}\n.review-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.review-key[_ngcontent-%COMP%] {\n  color: #7e8c80;\n  font-weight: 400;\n}\n\n.review-val[_ngcontent-%COMP%] {\n  color: #1a1e1b;\n  font-weight: 600;\n}\n\n.p-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.78rem;\n}\n.p-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #7e8c80;\n  padding: 8px 12px;\n  border-bottom: 1px solid #e4ddd3;\n  background: #f3ede4;\n  text-align: left;\n}\n.p-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.04);\n  color: #1a1e1b;\n  font-weight: 500;\n  vertical-align: middle;\n}\n.p-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.primary-tag[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  background: rgba(45, 80, 56, 0.1);\n  color: #2d5038;\n  padding: 2px 6px;\n  border-radius: 4px;\n  margin-left: 6px;\n  vertical-align: middle;\n}\n\n.price-breakdown[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.pb-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid #e4ddd3;\n  font-size: 0.82rem;\n}\n.pb-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pb-row.total[_ngcontent-%COMP%] {\n  background: #162318;\n  padding: 16px 20px;\n}\n.pb-row.total[_ngcontent-%COMP%]   .pb-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 600;\n}\n.pb-row.total[_ngcontent-%COMP%]   .pb-val[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  font-family: \"Clash Display\", sans-serif;\n}\n\n.pb-label[_ngcontent-%COMP%] {\n  color: #3f4840;\n  font-weight: 500;\n}\n\n.pb-val[_ngcontent-%COMP%] {\n  color: #1a1e1b;\n  font-weight: 700;\n}\n\n.terms-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 20px;\n  background: #ffffff;\n  border: 1.5px solid #e4ddd3;\n  border-radius: 10px;\n  cursor: pointer;\n  margin-bottom: 24px;\n  transition: border-color 0.2s;\n}\n.terms-check[_ngcontent-%COMP%]:has(input:checked) {\n  border-color: #3d6b4a;\n}\n.terms-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  accent-color: #3d6b4a;\n}\n\n.terms-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #3f4840;\n  line-height: 1.6;\n}\n.terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d6b4a;\n  text-decoration: none;\n  font-weight: 600;\n}\n.terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.bottom-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: rgba(250, 246, 240, 0.92);\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  border-top: 1px solid #e4ddd3;\n  padding: 16px 56px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 50;\n}\n\n.bar-price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-align: right;\n}\n\n.bar-price-label[_ngcontent-%COMP%] {\n  font-size: 0.66rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #7e8c80;\n}\n\n.bar-price-amount[_ngcontent-%COMP%] {\n  font-family: \"Clash Display\", sans-serif;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #2d5038;\n  letter-spacing: -0.02em;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: transparent;\n  border: 1.5px solid #c8bfb3;\n  color: #3f4840;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  padding: 10px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #3d6b4a;\n  color: #2d5038;\n}\n\n.btn-next[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #162318;\n  color: #fff;\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 12px 28px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n  box-shadow: 0 4px 16px rgba(22, 35, 24, 0.25);\n}\n.btn-next[_ngcontent-%COMP%]:hover {\n  background: #1f3023;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 24px rgba(22, 35, 24, 0.35);\n}\n.btn-next[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n.btn-pay[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5a9b6e, #3d6b4a);\n  box-shadow: 0 4px 20px rgba(90, 155, 110, 0.4);\n}\n.btn-pay[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #3d6b4a, #2d5038);\n  box-shadow: 0 6px 28px rgba(90, 155, 110, 0.5);\n}\n\n.loader-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  gap: 16px;\n}\n\n.loader-ring[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #e4ddd3;\n  border-top-color: #3d6b4a;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loader-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #7e8c80;\n  letter-spacing: 0.08em;\n}\n\n@media (max-width: 900px) {\n  .checkout-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-steps[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    left: 0;\n    padding: 14px 20px;\n  }\n  .form-area[_ngcontent-%COMP%] {\n    padding: 28px 20px 120px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row.three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .addons-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .participant-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .form-row.three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXlCLHNCQUFBO0FBRXpCOztBQUFBO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFBdUIsYUFBQTtBQUd6Qjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdGO0FBREU7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUNiLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7QUFJSjtBQURFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFFQUFBO0FBR0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFBVyxVQUFBO0VBQ1gsV0FBQTtBQUdGOztBQUFBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQUZFO0VBQVUsOEJBQUE7RUFBNkIsV0FBQTtBQU16Qzs7QUFIQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFB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O0FBa0lGOztBQS9IQTtFQUFrQjtJQUFLLHlCQUFBO0VBb0lyQjtBQUNGO0FBbklBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFxSUY7O0FBaklBO0VBQ0U7SUFBbUIsMEJBQUE7RUFxSW5CO0VBcElBO0lBQW1CLGFBQUE7RUF1SW5CO0VBdElBO0lBQW1CLGFBQUE7RUF5SW5CO0VBeElBO0lBQW1CLGFBQUE7RUEySW5CO0VBMUlBO0lBQW1CLE9BQUE7SUFBUyxrQkFBQTtFQThJNUI7RUE3SUE7SUFBbUIsd0JBQUE7RUFnSm5CO0VBL0lBO0lBQW1CLDBCQUFBO0VBa0puQjtFQWpKQTtJQUFtQiw4QkFBQTtFQW9KbkI7RUFuSkE7SUFBbUIsMEJBQUE7RUFzSm5CO0VBckpBO0lBQXNCLDBCQUFBO0VBd0p0QjtBQUNGO0FBdEpBO0VBQ0U7SUFBa0IsMEJBQUE7RUF5SmxCO0FBQ0Y7QUF2SkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBeUpGIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjZmFmNmYwO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIExBWU9VVCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jaGVja291dC1zaGVsbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIExFRlQgUEFORUwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubGVmdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICMxNjIzMTg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLnRyZWstdGh1bWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KSBzYXR1cmF0ZSgwLjgpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4cyBsaW5lYXI7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50IDMwJSwgIzE2MjMxOCAxMDAlKTtcbiAgfVxufVxuXG4ucGFuZWwtbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7IGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uYmFjay1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHBhZGRpbmc6IDdweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTsgY29sb3I6ICNmZmY7IH1cbn1cblxuLnRyZWstaW5mbyB7XG4gIHBhZGRpbmc6IDAgMjhweCAyNHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udHJlay1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM5ZGM5YWE7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnRyZWstbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ2xhc2ggRGlzcGxheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnRyZWstbG9jYXRpb24ge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNDUpO1xufVxuXG4ucGFuZWwtZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICBtYXJnaW46IDAgMjhweCAyNHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVkVSVElDQUwgU1RFUFBFUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdGVwcGVyIHtcbiAgcGFkZGluZzogMCAyOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3RlcC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6bGFzdC1jaGlsZCB7IHBhZGRpbmctYm90dG9tOiAwOyB9XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxM3B4OyB0b3A6IDI4cHg7IGJvdHRvbTogMDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gIH1cblxuICAmLmNvbXBsZXRlZDo6YmVmb3JlIHsgYmFja2dyb3VuZDogcmdiYSg5MCwxNTUsMTEwLDAuMzUpOyB9XG4gICYuYWN0aXZlOjpiZWZvcmUgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDkwLDE1NSwxMTAsMC4xNSk7IH1cbn1cblxuLnN0ZXAtbm9kZSB7XG4gIHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAuc3RlcC1yb3cuY29tcGxldGVkICYge1xuICAgIGJhY2tncm91bmQ6ICM1YTliNmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWE5YjZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnN0ZXAtcm93LmFjdGl2ZSAmIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICM1YTliNmU7XG4gICAgY29sb3I6ICM1YTliNmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoOTAsMTU1LDExMCwwLjE1KTtcbiAgfVxufVxuXG4uc3RlcC10ZXh0IHsgcGFkZGluZy10b3A6IDNweDsgfVxuXG4uc3RlcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcblxuICAuc3RlcC1yb3cuY29tcGxldGVkICYgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTsgfVxuICAuc3RlcC1yb3cuYWN0aXZlICYgICAgeyBjb2xvcjogI2ZmZjsgfVxufVxuXG4uc3RlcC1zdWIge1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTgpO1xuICAuc3RlcC1yb3cuYWN0aXZlICYgeyBjb2xvcjogIzlkYzlhYTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUFJJQ0UgU1VNTUFSWSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5wcmljZS1zdW1tYXJ5IHtcbiAgbWFyZ2luOiAyNHB4IDI4cHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByaWNlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG5cbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4gICYudG90YWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuXG4gICAgLnByaWNlLWFtdCB7IGNvbG9yOiAjOWRjOWFhOyBmb250LXNpemU6IDEuMTVyZW07IH1cbiAgfVxufVxuXG4ucHJpY2UtbGFiZWwgeyBmb250LXdlaWdodDogNTAwOyB9XG4ucHJpY2UtYW10ICAgeyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTsgfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUklHSFQgUEFORUwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmlnaHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmFmNmYwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLy8gTW9iaWxlIHRvcCBuYXYgKGhpZGRlbiBvbiBkZXNrdG9wKVxuLm1vYmlsZS1uYXYge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMTYyMzE4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAubW9iaWxlLWJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgcGFkZGluZzogN3B4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0NsYXNoIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLy8gTW9iaWxlIHN0ZXAgc3RyaXAgKGhpZGRlbiBvbiBkZXNrdG9wKVxuLm1vYmlsZS1zdGVwcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbi5tb2Itc3RlcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzdlOGM4MDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzO1xuXG4gIC5tb2ItbnVtIHtcbiAgICB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAmLmFjdGl2ZSAgICB7IGNvbG9yOiAjM2Q2YjRhOyBib3JkZXItYm90dG9tLWNvbG9yOiAjM2Q2YjRhOyB9XG4gICYuY29tcGxldGVkIHsgY29sb3I6ICM1YTliNmU7IGJvcmRlci1ib3R0b20tY29sb3I6ICM1YTliNmU7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZPUk0gQVJFQSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mb3JtLWFyZWEge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA0OHB4IDU2cHggMTQwcHg7XG4gIG1heC13aWR0aDogNjgwcHg7XG59XG5cbi5zdGVwLWhlYWRsaW5lIHsgbWFyZ2luLWJvdHRvbTogMzZweDsgfVxuXG4uc3RlcC1leWVicm93IHtcbiAgZm9udC1zaXplOiAwLjY2cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNWE5YjZlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5zdGVwLWgxIHtcbiAgZm9udC1mYW1pbHk6ICdDbGFzaCBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDIuNXZ3LCAycmVtKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxYTFlMWI7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zdGVwLWRlc2Mge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjN2U4YzgwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRk9STSBFTEVNRU5UUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICYuZnVsbCAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAmLnRocmVlIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgfVxufVxuXG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDdweDtcblxuICAmLnNwYW4yIHsgZ3JpZC1jb2x1bW46IHNwYW4gMjsgfVxuICAmLmZ1bGwgIHsgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgY29sb3I6ICMzZjQ4NDA7XG59XG5cbi5yZXEgeyBjb2xvcjogI2Q0ODgyYzsgbWFyZ2luLWxlZnQ6IDJweDsgfVxuXG4uZm9ybS1pbnB1dCxcbi5mb3JtLXNlbGVjdCxcbi5mb3JtLXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDExcHggMTRweDtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6ICMxYTFlMWI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gIHdpZHRoOiAxMDAlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuXG4gICY6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICNiOGIwYTY7IH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMzZDZiNGE7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNjEsMTA3LDc0LDAuMSk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNlZGU0O1xuICAgIGNvbG9yOiAjN2U4YzgwO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuLmZvcm0tc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nMCAwIDEyIDEyJyUzRSUzQ3BhdGggZmlsbD0nJTIzN2U4YzgwJyBkPSdNNiA4TDEgM2gxMHonLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEycHggY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xufVxuXG4uZm9ybS10ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDg4cHg7XG59XG5cbi5maWVsZC1oaW50IHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjN2U4YzgwO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQkFUQ0ggT1BUSU9OUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5iYXRjaC1vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYmF0Y2gtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNHB4O1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMS41cHggc29saWQgI2U0ZGRkMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6ICMzZDZiNGE7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNjEsMTA3LDc0LDAuMDgpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjEsMTA3LDc0LDAuMDMpO1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7IG9wYWNpdHk6IDAuNDU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG59XG5cbi5iYXRjaC1yYWRpbyB7XG4gIHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2M4YmZiMztcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcblxuICAuYmF0Y2gtb3B0aW9uLnNlbGVjdGVkICYgeyBib3JkZXItY29sb3I6ICMzZDZiNGE7IH1cbn1cblxuLmJhdGNoLWluZm8geyBmbGV4OiAxOyB9XG5cbi5iYXRjaC1kYXRlcyB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYTFlMWI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmJhdGNoLW1ldGEgeyBmb250LXNpemU6IDAuNzJyZW07IGNvbG9yOiAjN2U4YzgwOyB9XG5cbi5iYXRjaC1wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ2xhc2ggRGlzcGxheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyZDUwMzg7XG59XG5cbi5iYXRjaC1zdGF0dXMge1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc3RhdHVzLW9rICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDYxLDEwNyw3NCwwLjEpOyAgY29sb3I6ICMzZDZiNGE7IH1cbi5zdGF0dXMtZmV3ICB7IGJhY2tncm91bmQ6IHJnYmEoMjEyLDEzNiw0NCwwLjEpOyBjb2xvcjogI2Q0ODgyYzsgfVxuLnN0YXR1cy1mdWxsIHsgYmFja2dyb3VuZDogcmdiYSgyMDEsNjQsNjQsMC4xKTsgIGNvbG9yOiAjYzk0MDQwOyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQQVJUSUNJUEFOVCBDT1VOVEVSIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNvdW50ZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmNvdW50ZXItYnRuIHtcbiAgd2lkdGg6IDQ0cHg7IGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjN2U4YzgwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzLCBjb2xvciAwLjE1cztcblxuICAmOmhvdmVyICB7IGJhY2tncm91bmQ6ICNmM2VkZTQ7IGNvbG9yOiAjMWExZTFiOyB9XG4gICY6YWN0aXZlIHsgYmFja2dyb3VuZDogI2U0ZGRkMzsgfVxufVxuXG4uY291bnRlci12YWwge1xuICBtaW4td2lkdGg6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTRkZGQzO1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEFERC1PTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYWRkb25zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmFkZG9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW5wdXQgeyBkaXNwbGF5OiBub25lOyB9XG5cbiAgJi5jaGVja2VkIHtcbiAgICBib3JkZXItY29sb3I6ICMzZDZiNGE7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNjEsMTA3LDc0LDAuMDgpO1xuXG4gICAgLmFkZG9uLWNoZWNrIHsgYmFja2dyb3VuZDogIzNkNmI0YTsgYm9yZGVyLWNvbG9yOiAjM2Q2YjRhOyBjb2xvcjogI2ZmZjsgfVxuICB9XG59XG5cbi5hZGRvbi10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5hZGRvbi1uYW1lIHtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFhMWUxYjtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5hZGRvbi1jaGVjayB7XG4gIHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjYzhiZmIzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbn1cblxuLmFkZG9uLXByaWNlIHsgZm9udC1zaXplOiAwLjc4cmVtOyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzJkNTAzODsgfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUEFSVElDSVBBTlQgQkxPQ0sgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucGFydGljaXBhbnQtYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wYXJ0aWNpcGFudC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmM2VkZTQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5wLW51bSB7XG4gIHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzE2MjMxODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wLW5hbWUge1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWExZTFiO1xufVxuXG4ucC1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LDgwLDU2LDAuMSk7XG4gIGNvbG9yOiAjMmQ1MDM4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wYXJ0aWNpcGFudC1maWVsZHMge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTZweDtcblxuICAuZmllbGQuZnVsbCB7IGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEFMRVJUUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5pbmZvLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEyLDEzNiw0NCwwLjA3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTIsMTM2LDQ0LDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiAjN2E0ZTE0O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc3VjY2Vzcy1iYXIsIC5lcnJvci1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdWNjZXNzLWJhciB7IGJhY2tncm91bmQ6IHJnYmEoNjEsMTA3LDc0LDAuMDgpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYxLDEwNyw3NCwwLjIpOyBjb2xvcjogIzJkNTAzODsgfVxuLmVycm9yLWJhciAgIHsgYmFja2dyb3VuZDogcmdiYSgyMDEsNjQsNjQsMC4wNyk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAxLDY0LDY0LDAuMik7IGNvbG9yOiAjYzk0MDQwOyB9XG5cbi5hbGVydC1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiBub25lOyBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgY29sb3I6IGluaGVyaXQ7XG4gIG9wYWNpdHk6IDAuNTsgZm9udC1zaXplOiAxcmVtO1xuICAmOmhvdmVyIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUkVWSUVXIEJMT0NLUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5yZXZpZXctYmxvY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5yZXZpZXctaGVhZGVyIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNlZGU0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZGRkMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmV2aWV3LWhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzdlOGM4MDtcbn1cblxuLmVkaXQtbGluayB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZDZiNGE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAmOmhvdmVyIHsgY29sb3I6ICMyZDUwMzg7IH1cbn1cblxuLnJldmlldy1ib2R5IHsgcGFkZGluZzogMTZweCAyMHB4OyB9XG5cbi5yZXZpZXctcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA0KTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG59XG5cbi5yZXZpZXcta2V5IHsgY29sb3I6ICM3ZThjODA7IGZvbnQtd2VpZ2h0OiA0MDA7IH1cbi5yZXZpZXctdmFsIHsgY29sb3I6ICMxYTFlMWI7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cblxuLy8gUGFydGljaXBhbnRzIHRhYmxlXG4ucC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDAuNzhyZW07XG5cbiAgdGgge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjN2U4YzgwO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICAgIGJhY2tncm91bmQ6ICNmM2VkZTQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNCk7XG4gICAgY29sb3I6ICMxYTFlMWI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgdHI6bGFzdC1jaGlsZCB0ZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbn1cblxuLnByaW1hcnktdGFnIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsODAsNTYsMC4xKTtcbiAgY29sb3I6ICMyZDUwMzg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLy8gUHJpY2UgYnJlYWtkb3duXG4ucHJpY2UtYnJlYWtkb3duIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucGItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRkZGQzO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuICAmLnRvdGFsIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTYyMzE4O1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAucGItbGFiZWwgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjU1KTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5wYi12YWwgICB7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDEuMXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1mYW1pbHk6ICdDbGFzaCBEaXNwbGF5Jywgc2Fucy1zZXJpZjsgfVxuICB9XG59XG5cbi5wYi1sYWJlbCB7IGNvbG9yOiAjM2Y0ODQwOyBmb250LXdlaWdodDogNTAwOyB9XG4ucGItdmFsICAgeyBjb2xvcjogIzFhMWUxYjsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG4vLyBUZXJtc1xuLnRlcm1zLWNoZWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZTRkZGQzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuXG4gICY6aGFzKGlucHV0OmNoZWNrZWQpIHsgYm9yZGVyLWNvbG9yOiAjM2Q2YjRhOyB9XG5cbiAgaW5wdXQgeyBtYXJnaW4tdG9wOiAycHg7IGFjY2VudC1jb2xvcjogIzNkNmI0YTsgfVxufVxuXG4udGVybXMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzNmNDg0MDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcblxuICBhIHsgY29sb3I6ICMzZDZiNGE7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC13ZWlnaHQ6IDYwMDsgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEJPVFRPTSBCQVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYm90dG9tLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwOyBcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLDI0NiwyNDAsMC45Mik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGRkZDM7XG4gIHBhZGRpbmc6IDE2cHggNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICB6LWluZGV4OiA1MDtcbn1cblxuLmJhci1wcmljZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJhci1wcmljZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC42NnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzdlOGM4MDtcbn1cblxuLmJhci1wcmljZS1hbW91bnQge1xuICBmb250LWZhbWlseTogJ0NsYXNoIERpc3BsYXknLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyZDUwMzg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4uYnRuLWJhY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNjOGJmYjM7XG4gIGNvbG9yOiAjM2Y0ODQwO1xuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJjpob3ZlciB7IGJvcmRlci1jb2xvcjogIzNkNmI0YTsgY29sb3I6ICMyZDUwMzg7IH1cbn1cblxuLmJ0bi1uZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMTYyMzE4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTJweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMjIsMzUsMjQsMC4yNSk7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMxZjMwMjM7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgYm94LXNoYWRvdzogMCA2cHggMjRweCByZ2JhKDIyLDM1LDI0LDAuMzUpOyB9XG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjQ1OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB0cmFuc2Zvcm06IG5vbmU7IGJveC1zaGFkb3c6IG5vbmU7IH1cbn1cblxuLmJ0bi1wYXkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNWE5YjZlLCAjM2Q2YjRhKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDkwLDE1NSwxMTAsMC40KTtcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzZDZiNGEsICMyZDUwMzgpOyBib3gtc2hhZG93OiAwIDZweCAyOHB4IHJnYmEoOTAsMTU1LDExMCwwLjUpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBMT0FERVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubG9hZGVyLW92ZXJsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogODBweCAwO1xuICBnYXA6IDE2cHg7XG59XG5cbi5sb2FkZXItcmluZyB7XG4gIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNGRkZDM7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzZDZiNGE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4ubG9hZGVyLXRleHQge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiAjN2U4YzgwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUkVTUE9OU0lWRSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY2hlY2tvdXQtc2hlbGwgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLmxlZnQtcGFuZWwgICAgICB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1vYmlsZS1uYXYgICAgICB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLm1vYmlsZS1zdGVwcyAgICB7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLmJvdHRvbS1iYXIgICAgICB7IGxlZnQ6IDA7IHBhZGRpbmc6IDE0cHggMjBweDsgfVxuICAuZm9ybS1hcmVhICAgICAgIHsgcGFkZGluZzogMjhweCAyMHB4IDEyMHB4OyB9XG4gIC5mb3JtLXJvdyAgICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuZm9ybS1yb3cudGhyZWUgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyB9XG4gIC5hZGRvbnMtZ3JpZCAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAucGFydGljaXBhbnQtZmllbGRzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mb3JtLXJvdy50aHJlZSB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjZGMyNjI2O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 1641
/*!************************************!*\
  !*** ./src/app/booking/booking.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: () => (/* binding */ Booking)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class Booking {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.bookingDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.bookingData$ = this.bookingDataSubject.asObservable();
    this.API = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl}`;
  }
  // Set booking data
  setBookingData(data) {
    const encryptedPayload = this.crypto.encrypt(data);
    return this.http.post(`${this.API}/booking`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      try {
        // Decrypt the response
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      } catch (error) {
        console.error('Decryption error:', error);
        throw error;
      }
    }));
  }
  // Get current booking data
  getBookingData() {
    return this.bookingDataSubject.value;
  }
  // Clear booking data
  clearBookingData() {
    this.bookingDataSubject.next(null);
  }
  // Calculate total price
  calculateTotal(basePrice, participants, addOns) {
    const baseTotal = basePrice * participants;
    const addOnsTotal = addOns.filter(addon => addon.selected).reduce((sum, addon) => sum + addon.price, 0);
    return baseTotal + addOnsTotal;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Booking_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Booking)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_5__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: Booking,
    factory: Booking.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ },

/***/ 690
/*!*************************************************!*\
  !*** ./src/app/shared/Only number.directive.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlyNumberDirective: () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;

class OnlyNumberDirective {
  onKeyDown(e) {
    const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (allowed.includes(e.key)) return;
    // Block anything that isn't a digit
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  }
  onPaste(e) {
    const pasted = e.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pasted)) {
      e.preventDefault();
    }
  }
  onInput(e) {
    const input = e.target;
    // Strip any non-digit that slipped through (e.g. autofill)
    input.value = input.value.replace(/\D/g, '');
  }
  static #_ = _staticBlock = () => (this.ɵfac = function OnlyNumberDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OnlyNumberDirective)();
  }, this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: OnlyNumberDirective,
    selectors: [["", "onlyNumber", ""]],
    hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function OnlyNumberDirective_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("paste", function OnlyNumberDirective_paste_HostBindingHandler($event) {
          return ctx.onPaste($event);
        })("input", function OnlyNumberDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
    }
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_booking_booking-module_ts.js.map