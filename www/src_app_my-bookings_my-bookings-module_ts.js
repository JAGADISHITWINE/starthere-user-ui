"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_my-bookings_my-bookings-module_ts"],{

/***/ 8206
/*!***************************************************!*\
  !*** ./src/app/my-bookings/my-bookings-module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsModule: () => (/* binding */ MyBookingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-bookings.component */ 6516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__.MyBookingsComponent
}];
class MyBookingsModule {
  static #_ = _staticBlock = () => (this.ɵfac = function MyBookingsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MyBookingsModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MyBookingsModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__.MyBookingsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MyBookingsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _my_bookings_component__WEBPACK_IMPORTED_MODULE_3__.MyBookingsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 6516
/*!******************************************************!*\
  !*** ./src/app/my-bookings/my-bookings.component.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsComponent: () => (/* binding */ MyBookingsComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _my_bookings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-bookings */ 6565);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/token.service */ 6280);

var _staticBlock;












const _c0 = () => [1, 2, 3, 4, 5];
function MyBookingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 14)(8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 14)(14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Total Bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14)(20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Total Spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.upcomingTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.completedTrips);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.totalBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](25, 4, ctx_r0.totalSpent, "1.0-0"));
  }
}
function MyBookingsComponent_div_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.upcomingBookings.length);
  }
}
function MyBookingsComponent_div_12_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.pastBookings.length);
  }
}
function MyBookingsComponent_div_12_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.cancelledBookings.length);
  }
}
function MyBookingsComponent_div_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_div_26_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.loadBookings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Your rating: ", booking_r4.user_rating, " / 5 ");
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Days Until Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.getDaysUntilTrek(booking_r4.start_date), " days");
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Booked On");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatDate(booking_r4.created_at));
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Balance Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 1, booking_r4.balance_due, "1.0-0"));
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_div_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const addon_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", addon_r5.addon_name, " \u00D7 ", addon_r5.quantity, " ");
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyBookingsComponent_div_12_ng_container_27_div_7_div_47_span_1_Template, 2, 2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", booking_r4.addons);
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 73)(1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u26A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Cancellation policy:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getCancellationFeeMessage(booking_r4));
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_ng_container_27_div_7_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.viewBookingDetails(booking_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \uD83D\uDC41 View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_ng_container_27_div_7_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.downloadReceipt(booking_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u2193 Receipt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_ng_container_27_div_7_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.openCancelModal(booking_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u2715 Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_button_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \uD83D\uDCB3 Pay Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_ng_container_27_div_7_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.openRatingModal(booking_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const booking_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u2B50 ", ctx_r0.hasUserRated(booking_r4) ? "Update Rating" : "Rate Trek", " ");
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 42)(4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 44)(7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 46)(14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, MyBookingsComponent_div_12_ng_container_27_div_7_div_18_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 50)(20, "div", 51)(21, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Trek Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 51)(26, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, MyBookingsComponent_div_12_ng_container_27_div_7_div_30_Template, 5, 1, "div", 54)(31, MyBookingsComponent_div_12_ng_container_27_div_7_ng_template_31_Template, 5, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 55)(34, "div", 56)(35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 56)(41, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, MyBookingsComponent_div_12_ng_container_27_div_7_div_46_Template, 6, 4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, MyBookingsComponent_div_12_ng_container_27_div_7_div_47_Template, 2, 1, "div", 61)(48, MyBookingsComponent_div_12_ng_container_27_div_7_div_48_Template, 7, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, MyBookingsComponent_div_12_ng_container_27_div_7_button_50_Template, 2, 0, "button", 64)(51, MyBookingsComponent_div_12_ng_container_27_div_7_button_51_Template, 2, 0, "button", 64)(52, MyBookingsComponent_div_12_ng_container_27_div_7_button_52_Template, 2, 0, "button", 65)(53, MyBookingsComponent_div_12_ng_container_27_div_7_button_53_Template, 2, 0, "button", 66)(54, MyBookingsComponent_div_12_ng_container_27_div_7_button_54_Template, 2, 1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const booking_r4 = ctx.$implicit;
    const bookedOn_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "http://localhost:4001/" + booking_r4.cover_image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", booking_r4.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](booking_r4.booking_reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.getStatusClass(booking_r4.booking_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 25, booking_r4.booking_status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.getPaymentStatusClass(booking_r4.payment_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 27, booking_r4.payment_status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](booking_r4.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\uD83D\uDCCD ", booking_r4.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.hasUserRated(booking_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r0.formatDate(booking_r4.start_date), " \u2013 ", ctx_r0.formatDate(booking_r4.end_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", booking_r4.participants, " people");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming")("ngIfElse", bookedOn_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](39, 29, booking_r4.total_amount, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](45, 32, booking_r4.amount_paid, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", booking_r4.balance_due > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", booking_r4.addons == null ? null : booking_r4.addons.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming" && ctx_r0.canCancel(booking_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming" && ctx_r0.canCancel(booking_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", booking_r4.balance_due > 0 && ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "past" && booking_r4.booking_status === "completed");
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_8_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Start planning your next adventure!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "You haven't completed any treks yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_8_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No cancelled bookings.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_12_ng_container_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 78)(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, MyBookingsComponent_div_12_ng_container_27_div_8_p_5_Template, 2, 0, "p", 31)(6, MyBookingsComponent_div_12_ng_container_27_div_8_p_6_Template, 2, 0, "p", 31)(7, MyBookingsComponent_div_12_ng_container_27_div_8_p_7_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Browse Treks \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No ", ctx_r0.activeTab, " bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "past");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.activeTab === "cancelled");
  }
}
function MyBookingsComponent_div_12_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 35)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MyBookingsComponent_div_12_ng_container_27_div_7_Template, 55, 35, "div", 37)(8, MyBookingsComponent_div_12_ng_container_27_div_8_Template, 10, 4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, ctx_r0.activeTab), " Trips");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.currentBookings.length, " bookings");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.currentBookings);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.currentBookings.length === 0);
  }
}
function MyBookingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "aside", 22)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.switchTab("upcoming"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 25)(6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\uD83D\uDDD3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MyBookingsComponent_div_12_span_10_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.switchTab("past"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 25)(13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u2705");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Past");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MyBookingsComponent_div_12_span_17_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_12_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.switchTab("cancelled"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 25)(20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, MyBookingsComponent_div_12_span_24_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "main", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, MyBookingsComponent_div_12_div_26_Template, 5, 1, "div", 30)(27, MyBookingsComponent_div_12_ng_container_27_Template, 9, 6, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.activeTab === "upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.upcomingBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.activeTab === "past");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.pastBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r0.activeTab === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.cancelledBookings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.errorMessage);
  }
}
function MyBookingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 81)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Loading your adventures\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MyBookingsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.closeRatingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyBookingsComponent_div_15_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_15_button_7_Template_button_click_0_listener() {
      const star_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.setRating(star_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r14 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", star_r14 <= ctx_r0.selectedRating);
  }
}
function MyBookingsComponent_div_15_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.ratingErrorMessage);
  }
}
function MyBookingsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_15_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rate Your Trek");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MyBookingsComponent_div_15_button_7_Template, 2, 2, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "textarea", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function MyBookingsComponent_div_15_Template_textarea_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.selectedReview, $event) || (ctx_r0.selectedReview = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MyBookingsComponent_div_15_p_9_Template, 2, 1, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 90)(11, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_15_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.closeRatingModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyBookingsComponent_div_15_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.submitRating());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.selectedBookingForRating == null ? null : ctx_r0.selectedBookingForRating.trek_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.ratingErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isSubmittingRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.isSubmittingRating ? "Submitting..." : "Submit Rating", " ");
  }
}
class MyBookingsComponent {
  constructor(bookingService, authModal, router, tokenService) {
    this.bookingService = bookingService;
    this.authModal = authModal;
    this.router = router;
    this.tokenService = tokenService;
    this.activeTab = "upcoming";
    this.upcomingBookings = [];
    this.pastBookings = [];
    this.cancelledBookings = [];
    this.isLoading = false;
    this.errorMessage = "";
    // Stats
    this.totalBookings = 0;
    this.totalSpent = 0;
    this.upcomingTrips = 0;
    this.completedTrips = 0;
    this.ratingModalOpen = false;
    this.isSubmittingRating = false;
    this.ratingErrorMessage = "";
    this.selectedBookingForRating = null;
    this.selectedRating = 0;
    this.selectedReview = "";
  }
  ngOnInit() {
    // Use TokenService to read and decode the token in a single place
    try {
      this.userId = this.tokenService.getUserId();
    } catch (e) {
      this.userId = null;
    }
    this.loadBookings();
  }
  /**
   * Load all user bookings
   */
  loadBookings() {
    this.isLoading = true;
    this.errorMessage = "";
    this.bookingService.getMyBookings(this.userId).subscribe(response => {
      if (response.success == true) {
        this.categorizeBookings(response.data.bookings);
        this.calculateStats(response.data.bookings);
      }
      this.isLoading = false;
    });
  }
  /**
   * Categorize bookings into upcoming, past, and cancelled
   */
  categorizeBookings(bookings) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.upcomingBookings = bookings.filter(b => {
      const trekDate = new Date(b.start_date);
      return b.booking_status !== "cancelled" && b.booking_status !== "completed" && trekDate >= today;
    });
    this.pastBookings = bookings.filter(b => {
      const trekDate = new Date(b.start_date);
      return b.booking_status === "completed" || b.booking_status !== "cancelled" && trekDate < today;
    });
    this.cancelledBookings = bookings.filter(b => b.booking_status === "cancelled");
    // Sort by date
    this.upcomingBookings.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
    this.pastBookings.sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());
  }
  /**
   * Calculate statistics
   */
  calculateStats(bookings) {
    this.totalBookings = bookings.filter(b => b.booking_status !== "cancelled").length;
    this.totalSpent = bookings.filter(b => b.booking_status !== "cancelled").reduce((sum, b) => sum + parseFloat(b.total_amount.toString()), 0);
    this.upcomingTrips = this.upcomingBookings.length;
    this.completedTrips = bookings.filter(b => b.booking_status === "completed").length;
  }
  /**
   * Get current bookings based on active tab
   */
  get currentBookings() {
    switch (this.activeTab) {
      case "upcoming":
        return this.upcomingBookings;
      case "past":
        return this.pastBookings;
      case "cancelled":
        return this.cancelledBookings;
      default:
        return [];
    }
  }
  /**
   * Switch tab
   */
  switchTab(tab) {
    this.activeTab = tab;
  }
  viewBookingDetails(booking) {
    this.router.navigate(['/tour-details', booking.trek_id]);
  }
  downloadReceipt(booking) {
    const bookingId = booking.id;
    this.booking_reference = booking.booking_reference;
    this.bookingService.downloadReceipt(bookingId, this.userId).subscribe({
      next: response => {
        const blob = new Blob([response.body], {
          type: 'application/pdf'
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        // Extract filename from Content-Disposition header
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = `Receipt_${this.booking_reference}.pdf`; // Default fallback
        if (contentDisposition) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }
        link.download = filename;
        link.click();
        // Cleanup
        window.URL.revokeObjectURL(url);
      },
      error: error => {
        console.error('Download failed:', error);
      }
    });
  }
  /**
   * Get status badge class
   */
  getStatusClass(status) {
    switch (status) {
      case "confirmed":
        return "badge-success";
      case "pending":
        return "badge-warning";
      case "cancelled":
        return "badge-danger";
      case "completed":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }
  /**
   * Get payment status badge class
   */
  getPaymentStatusClass(status) {
    switch (status) {
      case "paid":
        return "badge-success";
      case "partial":
        return "badge-info";
      case "pending":
        return "badge-warning";
      case "refunded":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  }
  /**
   * Format date
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  /**
   * Calculate days until trek
   */
  getDaysUntilTrek(startDate) {
    const today = new Date();
    const trek = new Date(startDate);
    const diffTime = trek.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  /**
   * Check if booking can be cancelled
   */
  canCancel(booking) {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);
    return (booking.booking_status === "pending" || booking.booking_status === "confirmed") && daysUntil >= 7;
  }
  /**
   * Get cancellation fee message
   */
  getCancellationFeeMessage(booking) {
    const daysUntil = this.getDaysUntilTrek(booking.start_date);
    if (daysUntil >= 30) {
      return "100% refund (No cancellation fee)";
    } else if (daysUntil >= 15) {
      return "75% refund (25% cancellation fee)";
    } else if (daysUntil >= 7) {
      return "50% refund (50% cancellation fee)";
    } else {
      return "No refund (Cannot cancel within 7 days)";
    }
  }
  openCancelModal(booking) {
    var _this = this;
    return (0,_var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // attach userId to the booking payload so the cancel modal and service have context
      const payload = {
        ...booking,
        userId: _this.userId
      };
      try {
        const result = yield _this.authModal.openCancle(payload);
        // If modal resolved with cancellation, refresh bookings (keeps UI in sync)
        if (result?.cancelled) {
          _this.loadBookings();
        }
      } catch (e) {
        // modal dismissed/cancelled — no action
      }
    })();
  }
  hasUserRated(booking) {
    const rating = Number(booking.user_rating || 0);
    return rating >= 1 && rating <= 5;
  }
  openRatingModal(booking) {
    this.selectedBookingForRating = booking;
    this.selectedRating = Number(booking.user_rating || 0);
    this.selectedReview = booking.user_review || "";
    this.ratingErrorMessage = "";
    this.ratingModalOpen = true;
  }
  closeRatingModal() {
    if (this.isSubmittingRating) return;
    this.ratingModalOpen = false;
    this.selectedBookingForRating = null;
    this.selectedRating = 0;
    this.selectedReview = "";
    this.ratingErrorMessage = "";
  }
  setRating(stars) {
    this.selectedRating = stars;
  }
  submitRating() {
    if (!this.selectedBookingForRating) return;
    if (this.selectedRating < 1 || this.selectedRating > 5) {
      this.ratingErrorMessage = "Please select a star rating.";
      return;
    }
    this.isSubmittingRating = true;
    this.ratingErrorMessage = "";
    const payload = {
      rating: this.selectedRating,
      review: this.selectedReview?.trim() || ""
    };
    this.bookingService.submitTrekRating(this.selectedBookingForRating.id, this.userId, payload).subscribe({
      next: () => {
        if (!this.selectedBookingForRating) return;
        this.selectedBookingForRating.user_rating = this.selectedRating;
        this.selectedBookingForRating.user_review = payload.review;
        this.selectedBookingForRating.rated_at = new Date().toISOString();
        this.isSubmittingRating = false;
        this.closeRatingModal();
      },
      error: () => {
        this.isSubmittingRating = false;
        this.ratingErrorMessage = "Could not submit rating. Please try again.";
      }
    });
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MyBookingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MyBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_my_bookings__WEBPACK_IMPORTED_MODULE_7__.MyBookings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_8__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_10__.TokenService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MyBookingsComponent,
    selectors: [["app-my-bookings"]],
    decls: 16,
    vars: 5,
    consts: [["bookedOn", ""], [1, "page"], [1, "nav"], ["routerLink", "", 1, "nav-back"], [1, "nav-title"], [1, "hero-header"], [1, "hero-greeting"], [1, "hero-title"], ["class", "stats-strip", 4, "ngIf"], ["class", "body-wrap", 4, "ngIf"], ["class", "error-state", "style", "min-height:80vh", 4, "ngIf"], ["class", "rating-backdrop", 3, "click", 4, "ngIf"], ["class", "rating-modal", "role", "dialog", "aria-modal", "true", 4, "ngIf"], [1, "stats-strip"], [1, "stat-cell"], [1, "stat-tag"], [1, "stat-dot", "dot-blue"], [1, "stat-val"], [1, "stat-dot", "dot-emerald"], [1, "stat-dot", "dot-violet"], [1, "stat-dot", "dot-amber"], [1, "body-wrap"], [1, "sidebar"], [1, "sidebar-label"], [1, "tab-item", 3, "click"], [1, "tab-left"], [1, "tab-icon"], [1, "tab-name"], ["class", "tab-count", 4, "ngIf"], [1, "main-content"], ["class", "error-state", 4, "ngIf"], [4, "ngIf"], [1, "tab-count"], [1, "error-state"], [1, "retry-btn", 3, "click"], [1, "section-head"], [1, "count"], ["class", "booking-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "booking-card"], [1, "card-image-strip"], ["onerror", "this.src='assets/default-trek.jpg'", 3, "src", "alt"], [1, "image-overlay"], [1, "booking-ref"], [1, "badge-stack"], [1, "status-badge", 3, "ngClass"], [1, "card-body"], [1, "trek-name"], [1, "trek-location"], ["class", "user-rating-chip", 4, "ngIf"], [1, "info-grid"], [1, "info-cell"], [1, "info-label"], [1, "info-val"], ["class", "info-cell", 4, "ngIf", "ngIfElse"], [1, "payment-strip"], [1, "pay-cell"], [1, "pay-label"], [1, "pay-amount"], [1, "pay-amount", "positive"], ["class", "pay-cell", 4, "ngIf"], ["class", "addons-row", 4, "ngIf"], ["class", "warn-bar", 4, "ngIf"], [1, "card-actions"], ["class", "action-btn", 3, "click", 4, "ngIf"], ["class", "action-btn danger", 3, "click", 4, "ngIf"], ["class", "action-btn primary pay-btn", 4, "ngIf"], [1, "user-rating-chip"], [1, "countdown-val"], [1, "pay-amount", "danger"], [1, "addons-row"], ["class", "addon-chip", 4, "ngFor", "ngForOf"], [1, "addon-chip"], [1, "warn-bar"], [1, "warn-icon"], [1, "action-btn", 3, "click"], [1, "action-btn", "danger", 3, "click"], [1, "action-btn", "primary", "pay-btn"], [1, "empty-state"], [1, "empty-glyph"], ["routerLink", "/upcomingtours", 1, "browse-btn"], [1, "error-state", 2, "min-height", "80vh"], [1, "rating-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "rating-modal"], [1, "rating-card", 3, "click"], [1, "rating-subtitle"], [1, "stars-row"], ["type", "button", "class", "star-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["rows", "4", "maxlength", "500", "placeholder", "Share your experience (optional)", 1, "review-input", 3, "ngModelChange", "ngModel"], ["class", "rating-error", 4, "ngIf"], [1, "rating-actions"], ["type", "button", 1, "action-btn", 3, "click"], ["type", "button", 1, "action-btn", "primary", 3, "click", "disabled"], ["type", "button", 1, "star-btn", 3, "click"], [1, "rating-error"]],
    template: function MyBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "nav", 2)(2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u2190 Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "My Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Welcome back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Your Adventures");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MyBookingsComponent_div_11_Template, 26, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, MyBookingsComponent_div_12_Template, 28, 11, "div", 9)(13, MyBookingsComponent_div_13_Template, 3, 0, "div", 10)(14, MyBookingsComponent_div_14_Template, 1, 0, "div", 11)(15, MyBookingsComponent_div_15_Template, 15, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ratingModalOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ratingModalOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.TitleCasePipe],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #2d4a22;\n  color: #f0f4ff;\n  font-family: \"Cabinet Grotesk\", system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.nav[_ngcontent-%COMP%] {\n  background: #487737;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n  padding: 0 5vw;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.nav-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.767);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  color: #6b7a99;\n  font-family: \"Cabinet Grotesk\", system-ui, sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 7px 14px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.nav-back[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #f0f4ff;\n}\n\n.nav-title[_ngcontent-%COMP%] {\n  font-family: \"Instrument Serif\", Georgia, serif;\n  font-size: 1.15rem;\n  font-style: italic;\n  color: #f0f4ff;\n}\n\n.nav-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #10c97a, #4d8ef8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #fff;\n}\n\n.hero-header[_ngcontent-%COMP%] {\n  background: #152e27;\n  padding: 40px 5vw 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n}\n\n.hero-greeting[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #6b7a99;\n  margin-bottom: 6px;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-family: \"Instrument Serif\", Georgia, serif;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-style: italic;\n  color: #f0f4ff;\n  letter-spacing: -0.01em;\n  margin-bottom: 36px;\n}\n\n.stats-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n}\n\n.stat-cell[_ngcontent-%COMP%] {\n  padding: 24px 0 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.6);\n  transition: background 0.2s;\n}\n.stat-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.stat-cell[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.stat-cell[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 32px;\n}\n.stat-cell[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n\n.stat-tag[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 600;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #6b7a99;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.stat-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.dot-blue[_ngcontent-%COMP%] {\n  background: #4d8ef8;\n}\n\n.dot-emerald[_ngcontent-%COMP%] {\n  background: #10c97a;\n}\n\n.dot-violet[_ngcontent-%COMP%] {\n  background: #9b6df8;\n}\n\n.dot-amber[_ngcontent-%COMP%] {\n  background: #f5a623;\n}\n\n.stat-val[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n  font-weight: 800;\n  color: #ffffff;\n  line-height: 1;\n  letter-spacing: -0.02em;\n}\n\n.body-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  min-height: calc(100vh - 60px);\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  background: #0a1e02;\n  border-right: 1px solid rgba(255, 255, 255, 0.6);\n  padding: 32px 0;\n  position: sticky;\n  top: 60px;\n  height: calc(100vh - 60px);\n  overflow-y: auto;\n  scrollbar-width: none;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.sidebar-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #ffffff;\n  padding: 0 24px 14px;\n}\n\n.tab-item[_ngcontent-%COMP%] {\n  width: 100%;\n  background: none;\n  border: none;\n  border-left: 2px solid transparent;\n  padding: 14px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: background 0.2s;\n  text-align: left;\n}\n.tab-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.03);\n}\n.tab-item.active[_ngcontent-%COMP%] {\n  background: rgba(16, 201, 122, 0.06);\n  border-left-color: #10c97a;\n}\n.tab-item.active[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  color: #10c97a;\n}\n.tab-item.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: rgba(16, 201, 122, 0.15);\n  color: #10c97a;\n}\n\n.tab-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.tab-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #e0e2e7;\n  transition: color 0.2s;\n}\n\n.tab-count[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  background: rgba(255, 255, 255, 0.07);\n  color: #e0e2e7;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 32px 5vw 80px;\n  min-width: 0;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #000000;\n}\n.section-head[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #282d38;\n}\n\n.booking-card[_ngcontent-%COMP%] {\n  background: #10181c;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n  transition: border-color 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  animation: _ngcontent-%COMP%_cardIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n.booking-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);\n}\n.booking-card[_ngcontent-%COMP%]:hover   .card-image-strip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.card-image-strip[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n.card-image-strip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  filter: brightness(0.85) saturate(0.9);\n}\n.card-image-strip[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(27, 35, 51, 0.98) 0%, rgba(27, 35, 51, 0.3) 55%, transparent 100%);\n}\n\n.image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.booking-ref[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(240, 244, 255, 0.5);\n}\n\n.badge-stack[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n\n.badge-confirmed[_ngcontent-%COMP%] {\n  background: rgba(16, 201, 122, 0.15);\n  color: #10c97a;\n  border: 1px solid rgba(16, 201, 122, 0.3);\n}\n\n.badge-completed[_ngcontent-%COMP%] {\n  background: rgba(77, 142, 248, 0.12);\n  color: #4d8ef8;\n  border: 1px solid rgba(77, 142, 248, 0.25);\n}\n\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: rgba(240, 84, 84, 0.12);\n  color: #f05454;\n  border: 1px solid rgba(240, 84, 84, 0.25);\n}\n\n.badge-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.12);\n  color: #f5a623;\n  border: 1px solid rgba(245, 166, 35, 0.25);\n}\n\n.badge-paid[_ngcontent-%COMP%] {\n  background: rgba(16, 201, 122, 0.1);\n  color: #10c97a;\n  border: 1px solid rgba(16, 201, 122, 0.2);\n}\n\n.badge-partial[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.1);\n  color: #f5a623;\n  border: 1px solid rgba(245, 166, 35, 0.2);\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px 20px 0;\n}\n\n.trek-name[_ngcontent-%COMP%] {\n  font-family: \"Instrument Serif\", Georgia, serif;\n  font-size: 1.3rem;\n  font-style: italic;\n  color: #ffffff;\n  letter-spacing: -0.01em;\n  margin-bottom: 4px;\n}\n\n.trek-location[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7a99;\n  margin-bottom: 20px;\n}\n\n.user-rating-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 14px;\n  padding: 5px 10px;\n  border-radius: 20px;\n  border: 1px solid rgba(245, 166, 35, 0.25);\n  background: rgba(245, 166, 35, 0.1);\n  color: #f5a623;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.info-cell[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-right: 1px solid rgba(255, 255, 255, 0.6);\n}\n.info-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #3d4d66;\n  margin-bottom: 5px;\n}\n\n.info-val[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #f0f4ff;\n  line-height: 1.3;\n}\n\n.countdown-val[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #10c97a;\n}\n\n.payment-strip[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.pay-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border-right: 1px solid rgba(255, 255, 255, 0.6);\n}\n.pay-cell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.pay-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #3d4d66;\n  margin-bottom: 4px;\n}\n\n.pay-amount[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #ffffff;\n  letter-spacing: -0.02em;\n}\n.pay-amount.positive[_ngcontent-%COMP%] {\n  color: #10c97a;\n}\n.pay-amount.danger[_ngcontent-%COMP%] {\n  color: #f05454;\n}\n\n.addons-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n\n.addon-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  color: #6b7a99;\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n\n.warn-bar[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.07);\n  border: 1px solid rgba(245, 166, 35, 0.18);\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n  font-size: 0.78rem;\n  color: rgba(245, 166, 35, 0.85);\n  line-height: 1.5;\n}\n\n.warn-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-family: \"Cabinet Grotesk\", system-ui, sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 8px 16px;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  transition: all 0.18s cubic-bezier(0.23, 1, 0.32, 1);\n  background: transparent;\n  color: #6b7a99;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.12);\n  color: #f0f4ff;\n  background: rgba(255, 255, 255, 0.04);\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background: #10c97a;\n  border-color: #10c97a;\n  color: #fff;\n}\n.action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #0ba362;\n}\n.action-btn.danger[_ngcontent-%COMP%] {\n  border-color: rgba(240, 84, 84, 0.3);\n  color: #f05454;\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(240, 84, 84, 0.08);\n}\n\n.pay-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.rating-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  z-index: 1000;\n}\n\n.rating-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n\n.rating-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  background: #10181c;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 12px;\n  padding: 20px;\n}\n.rating-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  color: #f0f4ff;\n  font-size: 1.2rem;\n}\n\n.rating-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #6b7a99;\n  font-size: 0.85rem;\n}\n\n.stars-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.star-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  background: transparent;\n  color: #6b7a99;\n  font-size: 1.25rem;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.star-btn[_ngcontent-%COMP%]:hover, .star-btn.active[_ngcontent-%COMP%] {\n  color: #f5a623;\n  border-color: rgba(245, 166, 35, 0.45);\n  background: rgba(245, 166, 35, 0.08);\n}\n\n.review-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  background: #0b1215;\n  color: #f0f4ff;\n  font-size: 0.86rem;\n  padding: 10px 12px;\n  resize: vertical;\n  min-height: 96px;\n}\n\n.rating-error[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #f05454;\n  font-size: 0.78rem;\n}\n\n.rating-actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 40vh;\n  text-align: center;\n  padding: 40px;\n}\n\n.empty-glyph[_ngcontent-%COMP%] {\n  font-family: \"Instrument Serif\", Georgia, serif;\n  font-size: 5rem;\n  font-style: italic;\n  color: rgba(255, 255, 255, 0.04);\n  line-height: 1;\n  margin-bottom: 24px;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #f0f4ff;\n  margin-bottom: 8px;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7a99;\n  margin-bottom: 24px;\n}\n\n.browse-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #10c97a;\n  color: #fff;\n  font-family: \"Cabinet Grotesk\", system-ui, sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 12px 24px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.browse-btn[_ngcontent-%COMP%]:hover {\n  background: #0ba362;\n}\n\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  text-align: center;\n  gap: 16px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7a99;\n  font-size: 0.85rem;\n}\n\n.retry-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(240, 84, 84, 0.3);\n  color: #f05454;\n  font-family: \"Cabinet Grotesk\", system-ui, sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 9px 20px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(240, 84, 84, 0.08);\n}\n\n@media (max-width: 900px) {\n  .body-wrap[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    height: auto;\n    padding: 0;\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n    display: flex;\n    overflow-x: auto;\n    padding: 0 5vw;\n  }\n  .sidebar-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tab-item[_ngcontent-%COMP%] {\n    display: inline-flex;\n    width: auto;\n    border-left: none;\n    border-bottom: 2px solid transparent;\n    padding: 14px 18px;\n    flex-shrink: 0;\n  }\n  .tab-item.active[_ngcontent-%COMP%] {\n    border-left-color: transparent;\n    border-bottom-color: #10c97a;\n  }\n  .stats-strip[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stat-cell[_ngcontent-%COMP%]:nth-child(2) {\n    border-right: none;\n  }\n  .stat-cell[_ngcontent-%COMP%]:nth-child(3) {\n    border-top: 1px solid rgba(255, 255, 255, 0.6);\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-strip[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pay-cell[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n  }\n  .pay-cell[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .card-actions[_ngcontent-%COMP%]   .pay-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktYm9va2luZ3MvbXktYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFBeUIsc0JBQUE7QUFIekI7O0FBS0E7RUFDRSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxxREFBQTtFQUNBLG1DQUFBO0FBSEY7O0FBTUE7RUFBUSwwREFBQTtBQUZSOztBQUlBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUFDbkI7RUFBQTtJQUFPLFVBQUE7SUFBWSx3QkFBQTtFQUluQjtBQUNGO0FBREE7RUFDRSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFHRjtBQURFO0VBQVUsdUNBQUE7RUFBc0MsY0FBQTtBQUtsRDs7QUFGQTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFBYSxZQUFBO0VBQ2Isa0JBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7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w6LClMKAw6LClMKAIEZPTlRTIMOiwoDClCBhZGQgdG8gaW5kZXguaHRtbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIENhYmluZXQgR3JvdGVzayArIEluc3RydW1lbnQgU2VyaWZcblxuXG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMmQ0YTIyXG47XG4gIGNvbG9yOiAjZjBmNGZmO1xuICBmb250LWZhbWlseTogJ0NhYmluZXQgR3JvdGVzaycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi5wYWdlIHsgYW5pbWF0aW9uOiBwYWdlSW4gMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDsgfVxuXG5Aa2V5ZnJhbWVzIHBhZ2VJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTkFWIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm5hdiB7XG4gIGJhY2tncm91bmQ6ICM0ODc3Mzc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIHBhZGRpbmc6IDAgNXZ3O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5uYXYtYmFjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBjb2xvcjogIzZiN2E5OTtcbiAgZm9udC1mYW1pbHk6ICdDYWJpbmV0IEdyb3Rlc2snLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogN3B4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIgeyBib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7IGNvbG9yOiAjZjBmNGZmOyB9XG59XG5cbi5uYXYtdGl0bGUge1xuICBmb250LWZhbWlseTogJ0luc3RydW1lbnQgU2VyaWYnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjZjBmNGZmO1xufVxuXG4ubmF2LWF2YXRhciB7XG4gIHdpZHRoOiAzNHB4OyBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYzk3YSwgIzRkOGVmOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIEhFQURFUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMxNTJlMjc7XG4gIHBhZGRpbmc6IDQwcHggNXZ3IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG5cbi5oZXJvLWdyZWV0aW5nIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNmI3YTk5O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdJbnN0cnVtZW50IFNlcmlmJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCAzcmVtKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2YwZjRmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTVEFUUyBTVFJJUCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdGF0cy1zdHJpcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG5cbi5zdGF0LWNlbGwge1xuICBwYWRkaW5nOiAyNHB4IDAgMjBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG5cbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gICY6Zmlyc3QtY2hpbGQgeyBwYWRkaW5nLWxlZnQ6IDA7IH1cbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7IHBhZGRpbmctbGVmdDogMzJweDsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAyKTsgfVxufVxuXG4uc3RhdC10YWcge1xuICBmb250LXNpemU6IDAuNjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNmI3YTk5O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4uc3RhdC1kb3Qge1xuICB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmRvdC1ibHVlICAgIHsgYmFja2dyb3VuZDogIzRkOGVmODsgfVxuLmRvdC1lbWVyYWxkIHsgYmFja2dyb3VuZDogIzEwYzk3YTsgfVxuLmRvdC12aW9sZXQgIHsgYmFja2dyb3VuZDogIzliNmRmODsgfVxuLmRvdC1hbWJlciAgIHsgYmFja2dyb3VuZDogI2Y1YTYyMzsgfVxuXG4uc3RhdC12YWwge1xuICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgM3Z3LCAyLjRyZW0pO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQk9EWSBMQVlPVVQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uYm9keS13cmFwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCAxZnI7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNJREVCQVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICMwYTFlMDI7O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIHBhZGRpbmc6IDMycHggMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA2MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLnNpZGViYXItbGFiZWwge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAyNHB4IDE0cHg7XG59XG5cbi50YWItaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDE0cHggMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LDIwMSwxMjIsMC4wNik7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxMGM5N2E7XG5cbiAgICAudGFiLW5hbWUgeyBjb2xvcjogIzEwYzk3YTsgfVxuXG4gICAgLnRhYi1jb3VudCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LDIwMSwxMjIsMC4xNSk7XG4gICAgICBjb2xvcjogIzEwYzk3YTtcbiAgICB9XG4gIH1cbn1cblxuLnRhYi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udGFiLWljb24ge1xuICB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG59XG5cbi50YWItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNlMGUyZTc7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi50YWItY291bnQge1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XG4gIGNvbG9yOiAjZTBlMmU3O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTUFJTiBDT05URU5UIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDMycHggNXZ3IDgwcHg7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnNlY3Rpb24taGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICAuY291bnQge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogIzI4MmQzODtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQk9PS0lORyBDQVJEIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJvb2tpbmctY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxMDE4MWM7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICBhbmltYXRpb246IGNhcmRJbiAwLjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBib3RoO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsMCwwLDAuMzUpO1xuXG4gICAgLmNhcmQtaW1hZ2Utc3RyaXAgaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgY2FyZEluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8vIElNQUdFIFNUUklQXG4uY2FyZC1pbWFnZS1zdHJpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjg1KSBzYXR1cmF0ZSgwLjkpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI3LDM1LDUxLDAuOTgpIDAlLCByZ2JhKDI3LDM1LDUxLDAuMykgNTUlLCB0cmFuc3BhcmVudCAxMDAlKTtcbiAgfVxufVxuXG4uaW1hZ2Utb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ib29raW5nLXJlZiB7XG4gIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjQwLDI0NCwyNTUsMC41KTtcbn1cblxuLmJhZGdlLXN0YWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnN0YXR1cy1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8vIEJhZGdlIHN0YXRlcyDDosKAwpQgdXNlIHdpdGggW25nQ2xhc3NdPVwiZ2V0U3RhdHVzQ2xhc3MoKVwiIC8gZ2V0UGF5bWVudFN0YXR1c0NsYXNzKClcbi5iYWRnZS1jb25maXJtZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDIwMSwxMjIsMC4xNSk7IGNvbG9yOiAjMTBjOTdhOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2LDIwMSwxMjIsMC4zKTsgfVxuLmJhZGdlLWNvbXBsZXRlZCB7IGJhY2tncm91bmQ6IHJnYmEoNzcsMTQyLDI0OCwwLjEyKTsgY29sb3I6ICM0ZDhlZjg7ICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzcsMTQyLDI0OCwwLjI1KTsgfVxuLmJhZGdlLWNhbmNlbGxlZCB7IGJhY2tncm91bmQ6IHJnYmEoMjQwLDg0LDg0LDAuMTIpOyAgY29sb3I6ICNmMDU0NTQ7ICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0MCw4NCw4NCwwLjI1KTsgfVxuLmJhZGdlLXBlbmRpbmcgICB7IGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE2NiwzNSwwLjEyKTsgIGNvbG9yOiAjZjVhNjIzOyAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LDE2NiwzNSwwLjI1KTsgfVxuLmJhZGdlLXBhaWQgICAgICB7IGJhY2tncm91bmQ6IHJnYmEoMTYsMjAxLDEyMiwwLjEpOyAgY29sb3I6ICMxMGM5N2E7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYsMjAxLDEyMiwwLjIpOyB9XG4uYmFkZ2UtcGFydGlhbCAgIHsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTY2LDM1LDAuMSk7ICAgY29sb3I6ICNmNWE2MjM7ICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDUsMTY2LDM1LDAuMik7IH1cblxuLy8gQ0FSRCBCT0RZXG4uY2FyZC1ib2R5IHsgcGFkZGluZzogMjBweCAyMHB4IDA7IH1cblxuLnRyZWstbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnSW5zdHJ1bWVudCBTZXJpZicsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnRyZWstbG9jYXRpb24ge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNmI3YTk5O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlci1yYXRpbmctY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ1LCAxNjYsIDM1LCAwLjI1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDE2NiwgMzUsIDAuMSk7XG4gIGNvbG9yOiAjZjVhNjIzO1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIElORk8gR1JJRFxuLmluZm8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pbmZvLWNlbGwge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG59XG5cbi5pbmZvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjM2Q0ZDY2O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbmZvLXZhbCB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmMGY0ZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5jb3VudGRvd24tdmFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzEwYzk3YTtcbn1cblxuLy8gUEFZTUVOVCBTVFJJUFxuLnBheW1lbnQtc3RyaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnBheS1jZWxsIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1yaWdodDogbm9uZTsgfVxufVxuXG4ucGF5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjM2Q0ZDY2O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5wYXktYW1vdW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG5cbiAgJi5wb3NpdGl2ZSB7IGNvbG9yOiAjMTBjOTdhOyB9XG4gICYuZGFuZ2VyICAgeyBjb2xvcjogI2YwNTQ1NDsgfVxufVxuXG4vLyBBREQtT05TXG4uYWRkb25zLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5hZGRvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBjb2xvcjogIzZiN2E5OTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4vLyBXQVJOSU5HIEJBUlxuLndhcm4tYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTY2LDM1LDAuMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwxNjYsMzUsMC4xOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiByZ2JhKDI0NSwxNjYsMzUsMC44NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi53YXJuLWljb24geyBmb250LXNpemU6IDAuODVyZW07IG1hcmdpbi10b3A6IDFweDsgZmxleC1zaHJpbms6IDA7IH1cblxuLy8gQ0FSRCBBQ1RJT05TXG4uY2FyZC1hY3Rpb25zIHtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZm9udC1mYW1pbHk6ICdDYWJpbmV0IEdyb3Rlc2snLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMThzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNmI3YTk5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICAgIGNvbG9yOiAjZjBmNGZmO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gICYucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogIzEwYzk3YTtcbiAgICBib3JkZXItY29sb3I6ICMxMGM5N2E7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMwYmEzNjI7IH1cbiAgfVxuXG4gICYuZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQwLDg0LDg0LDAuMyk7XG4gICAgY29sb3I6ICNmMDU0NTQ7XG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQwLDg0LDg0LDAuMDgpOyB9XG4gIH1cbn1cblxuLnBheS1idG4geyBtYXJnaW4tbGVmdDogYXV0bzsgfVxuXG4ucmF0aW5nLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnJhdGluZy1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucmF0aW5nLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgYmFja2dyb3VuZDogIzEwMTgxYztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDAgMCA0cHg7XG4gICAgY29sb3I6ICNmMGY0ZmY7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLnJhdGluZy1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMCAwIDE0cHg7XG4gIGNvbG9yOiAjNmI3YTk5O1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5zdGFycy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLnN0YXItYnRuIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzZiN2E5OTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE4cyBlYXNlO1xuXG4gICY6aG92ZXIsXG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogI2Y1YTYyMztcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQ1LCAxNjYsIDM1LCAwLjQ1KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTY2LCAzNSwgMC4wOCk7XG4gIH1cbn1cblxuLnJldmlldy1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgYmFja2dyb3VuZDogIzBiMTIxNTtcbiAgY29sb3I6ICNmMGY0ZmY7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiA5NnB4O1xufVxuXG4ucmF0aW5nLWVycm9yIHtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgY29sb3I6ICNmMDU0NTQ7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbn1cblxuLnJhdGluZy1hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBFTVBUWSBTVEFURSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5lbXB0eS1nbHlwaCB7XG4gIGZvbnQtZmFtaWx5OiAnSW5zdHJ1bWVudCBTZXJpZicsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZW1wdHktc3RhdGUgaDMge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmMGY0ZmY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmVtcHR5LXN0YXRlIHAge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNmI3YTk5O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uYnJvd3NlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogIzEwYzk3YTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnQ2FiaW5ldCBHcm90ZXNrJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMwYmEzNjI7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEVSUk9SIFNUQVRFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVycm9yLXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuXG4gIHAgeyBjb2xvcjogIzZiN2E5OTsgZm9udC1zaXplOiAwLjg1cmVtOyB9XG59XG5cbi5yZXRyeS1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDAsODQsODQsMC4zKTtcbiAgY29sb3I6ICNmMDU0NTQ7XG4gIGZvbnQtZmFtaWx5OiAnQ2FiaW5ldCBHcm90ZXNrJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA5cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjQwLDg0LDg0LDAuMDgpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSRVNQT05TSVZFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5ib2R5LXdyYXAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nOiAwIDV2dztcbiAgfVxuXG4gIC5zaWRlYmFyLWxhYmVsIHsgZGlzcGxheTogbm9uZTsgfVxuXG4gIC50YWItaXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDE0cHggMThweDtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMxMGM5N2E7XG4gICAgfVxuICB9XG5cbiAgLnN0YXRzLXN0cmlwIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxuICAuc3RhdC1jZWxsOm50aC1jaGlsZCgyKSB7IGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAuc3RhdC1jZWxsOm50aC1jaGlsZCgzKSB7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbiAgLmluZm8tZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5pbmZvLWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAucGF5bWVudC1zdHJpcCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLnBheS1jZWxsIHsgYm9yZGVyLXJpZ2h0OiBub25lOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9IH1cbiAgLmNhcmQtYWN0aW9ucyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC5hY3Rpb24tYnRuIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9IC5wYXktYnRuIHsgbWFyZ2luLWxlZnQ6IDA7IH0gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 6565
/*!********************************************!*\
  !*** ./src/app/my-bookings/my-bookings.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookings: () => (/* binding */ MyBookings)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class MyBookings {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl}`;
  }
  getMyBookings(UserId) {
    return this.http.get(`${this.API}/getMyBookingsById/${UserId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  downloadReceipt(bookingId, userId) {
    return this.http.get(`${this.API}/bookings/${userId}/${bookingId}/receipt`, {
      responseType: 'blob',
      observe: 'response'
    });
  }
  viewBookingDetails(bookingId) {
    return this.http.get(`${this.API}/bookings/${bookingId}/receipt`, {
      responseType: 'blob',
      observe: 'response'
    });
  }
  submitTrekRating(bookingId, userId, payload) {
    const encryptedPayload = this.crypto.encrypt(payload);
    return this.http.post(`${this.API}/bookings/${userId}/${bookingId}/rating`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      if (!res?.data) return res;
      try {
        const decrypted = this.crypto.decrypt(res.data);
        return {
          ...res,
          data: decrypted
        };
      } catch {
        return res;
      }
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function MyBookings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MyBookings)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MyBookings,
    factory: MyBookings.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_my-bookings_my-bookings-module_ts.js.map