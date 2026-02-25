"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tour-details_tour-details-module_ts"],{

/***/ 2322
/*!*****************************************************!*\
  !*** ./src/app/tour-details/tour-details-module.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TourDetailsModule: () => (/* binding */ TourDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _tour_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tour-details.component */ 1512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: ':uuid',
  component: _tour_details_component__WEBPACK_IMPORTED_MODULE_3__.TourDetailsComponent
}];
class TourDetailsModule {
  static #_ = _staticBlock = () => (this.ɵfac = function TourDetailsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TourDetailsModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TourDetailsModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _tour_details_component__WEBPACK_IMPORTED_MODULE_3__.TourDetailsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TourDetailsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _tour_details_component__WEBPACK_IMPORTED_MODULE_3__.TourDetailsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ },

/***/ 1512
/*!********************************************************!*\
  !*** ./src/app/tour-details/tour-details.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TourDetailsComponent: () => (/* binding */ TourDetailsComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _tour_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tour-details */ 9497);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);

var _staticBlock;










function TourDetailsComponent_div_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "circle", 54)(3, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Sold Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function TourDetailsComponent_div_9_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" \uD83D\uDD25 Only ", ctx_r1.tour.availableSlots, " seat", ctx_r1.tour.availableSlots === 1 ? "" : "s", " left! ");
  }
}
function TourDetailsComponent_div_9_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u26A1 Selling Fast \u00B7 ", ctx_r1.tour.availableSlots, " slots left ");
  }
}
function TourDetailsComponent_div_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u2705 ", ctx_r1.tour.availableSlots, " slots available ");
  }
}
function TourDetailsComponent_div_9_div_89_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 68)(1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u2726");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const highlight_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](highlight_r3);
  }
}
function TourDetailsComponent_div_9_div_89_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function TourDetailsComponent_div_9_div_89_div_18_div_9_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.target.src = "assets/placeholder-trek.jpg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.getImageUrl(photo_r5), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name + " photo");
  }
}
function TourDetailsComponent_div_9_div_89_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 57)(1, "h2", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "rect", 70)(5, "circle", 71)(6, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Photo Gallery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TourDetailsComponent_div_9_div_89_div_18_div_9_Template, 2, 2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.gallery);
  }
}
function TourDetailsComponent_div_9_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "h2", 58)(3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 61)(6, "rect", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " About This Trek ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 57)(11, "h2", 58)(12, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Highlights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, TourDetailsComponent_div_9_div_89_li_17_Template, 5, 1, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, TourDetailsComponent_div_9_div_89_div_18_Template, 10, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.tour.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.gallery == null ? null : ctx_r1.tour.gallery.length);
  }
}
function TourDetailsComponent_div_9_div_90_div_7_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 94);
  }
}
function TourDetailsComponent_div_9_div_90_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 88)(1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TourDetailsComponent_div_9_div_90_div_7_div_10_div_5_Template, 1, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const activity_r8 = ctx.$implicit;
    const last_r9 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("last", last_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formatTime(activity_r8.activityTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !last_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](activity_r8.activityText);
  }
}
function TourDetailsComponent_div_9_div_90_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TourDetailsComponent_div_9_div_90_div_7_Template_button_click_1_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openDay = ctx_r1.openDay === i_r7 ? -1 : i_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "svg", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 85)(9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TourDetailsComponent_div_9_div_90_div_7_div_10_Template, 8, 5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx_r1.openDay === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-expanded", ctx_r1.openDay === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](day_r10.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](day_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx_r1.openDay === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", day_r10.activities);
  }
}
function TourDetailsComponent_div_9_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "h2", 58)(3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Day-by-Day Itinerary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TourDetailsComponent_div_9_div_90_div_7_Template, 11, 8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.itinerary);
  }
}
function TourDetailsComponent_div_9_div_91_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 105)(1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r11);
  }
}
function TourDetailsComponent_div_9_div_91_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 105)(1, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "path", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r12);
  }
}
function TourDetailsComponent_div_9_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "h2", 95)(3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " What's Included ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TourDetailsComponent_div_9_div_91_li_8_Template, 6, 1, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 57)(10, "h2", 101)(11, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "svg", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " What's Not Included ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ul", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, TourDetailsComponent_div_9_div_91_li_16_Template, 6, 1, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.inclusions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.exclusions);
  }
}
function TourDetailsComponent_div_9_div_92_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 121)(1, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\uD83C\uDF92");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r13);
  }
}
function TourDetailsComponent_div_9_div_92_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 123)(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const note_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](note_r14);
  }
}
function TourDetailsComponent_div_9_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "h2", 58)(3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 110)(6, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Things to Carry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ul", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TourDetailsComponent_div_9_div_92_li_9_Template, 5, 1, "li", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 114)(11, "h2", 115)(12, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "svg", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "path", 117)(15, "path", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Important Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ul", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, TourDetailsComponent_div_9_div_92_li_18_Template, 5, 1, "li", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.thingsToCarry);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.tour.importantNotes);
  }
}
function TourDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "section", 11)(2, "div", 12)(3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function TourDetailsComponent_div_9_Template_img_error_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.target.src = "assets/placeholder-trek.jpg");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 15)(6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TourDetailsComponent_div_9_ng_container_7_Template, 5, 0, "ng-container", 17)(8, TourDetailsComponent_div_9_ng_container_8_Template, 2, 2, "ng-container", 17)(9, TourDetailsComponent_div_9_ng_container_9_Template, 2, 1, "ng-container", 17)(10, TourDetailsComponent_div_9_ng_container_10_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 18)(12, "div", 19)(13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 23)(20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "path", 26)(23, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "svg", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "circle", 32)(36, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 34)(39, "div", 35)(40, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "circle", 38)(43, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div")(45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "path", 43)(53, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div")(55, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div")(64, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Fitness");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "svg", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "path", 46)(72, "circle", 47)(73, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div")(75, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Age Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 49)(80, "nav", 50)(81, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TourDetailsComponent_div_9_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedSegment = "overview");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TourDetailsComponent_div_9_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedSegment = "itinerary");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TourDetailsComponent_div_9_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedSegment = "inclusions");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Inclusions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TourDetailsComponent_div_9_Template_button_click_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.selectedSegment = "info");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, TourDetailsComponent_div_9_div_89_Template, 19, 3, "div", 52)(90, TourDetailsComponent_div_9_div_90_Template, 8, 1, "div", 52)(91, TourDetailsComponent_div_9_div_91_Template, 17, 2, "div", 52)(92, TourDetailsComponent_div_9_div_92_Template, 19, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.getImageUrl(ctx_r1.tour.image), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("sold", ctx_r1.tour.availableSlots <= 0)("critical", ctx_r1.tour.availableSlots > 0 && ctx_r1.tour.availableSlots <= 3)("warning", ctx_r1.tour.availableSlots > 3 && ctx_r1.tour.availableSlots <= 10)("ok", ctx_r1.tour.availableSlots > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 0 && ctx_r1.tour.availableSlots <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 3 && ctx_r1.tour.availableSlots <= 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("diff-" + ctx_r1.tour.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.tour.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.tour.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.rating, " \u00B7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r1.tour.reviewCount, " reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.tour.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.tour.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.tour.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.tour.fitnessLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r1.tour.minAge, "\u2013", ctx_r1.tour.maxAge, " yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-selected", ctx_r1.selectedSegment === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-selected", ctx_r1.selectedSegment === "itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "inclusions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-selected", ctx_r1.selectedSegment === "inclusions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r1.selectedSegment === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-selected", ctx_r1.selectedSegment === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "itinerary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "inclusions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.selectedSegment === "info");
  }
}
function TourDetailsComponent_div_10_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TourDetailsComponent_div_10_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.bookTrek(ctx_r1.tour));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "rect", 135)(3, "path", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "circle", 138)(3, "path", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Sold Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TourDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 125)(1, "div", 126)(2, "div", 127)(3, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Starting from");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "/ person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TourDetailsComponent_div_10_button_10_Template, 5, 0, "button", 131)(11, TourDetailsComponent_div_10_div_11_Template, 5, 0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 3, ctx_r1.tour.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.tour.availableSlots == 0);
  }
}
function TourDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 140)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span")(5, "span")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Loading trek details\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function TourDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 145)(1, "div", 146)(2, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "path", 149)(5, "circle", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h3", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Trek Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "The trek you're looking for doesn't exist or may have been removed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "svg", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "path", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Back to Trek List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
class TourDetailsComponent {
  constructor(route, router, tourDetailsService, authModal) {
    this.route = route;
    this.router = router;
    this.tourDetailsService = tourDetailsService;
    this.authModal = authModal;
    this.tour = null;
    this.isLoading = true;
    this.tourUuid = '';
    this.selectedSegment = 'overview';
    this.baseUrl = 'http://localhost:4001/';
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const uuid = params.get('uuid');
      if (!uuid) return;
      this.tourUuid = uuid;
      this.isLoading = true;
      this.tour = null;
      this.loadTrekDetails();
    });
  }
  loadTrekDetails() {
    this.isLoading = true;
    this.tourDetailsService.getTrekByUuid(this.tourUuid).subscribe(res => {
      if (res.success) {
        this.isLoading = false;
        this.mapTourData(res.data);
      }
    });
  }
  mapTourData(result) {
    const firstBatch = result.batch;
    this.tour = {
      id: firstBatch?.batchId,
      name: result.name,
      location: result.location,
      category: result.category,
      difficulty: result.difficulty,
      fitnessLevel: result.fitness_level,
      duration: firstBatch?.duration || 'N/A',
      price: firstBatch ? Number(firstBatch.price) : 0,
      // Mock data for rating/reviews (replace with real data if available)
      rating: 4.8,
      reviewCount: 145,
      // Images
      image: result.cover_image,
      gallery: result.galleryImages || [],
      // Content
      overview: result.description,
      highlights: result.highlights || [],
      thingsToCarry: result.thingsToCarry || [],
      importantNotes: result.importantNotes || [],
      // Batch-specific data
      inclusions: firstBatch?.inclusions || [],
      exclusions: firstBatch?.exclusions || [],
      // Itinerary mapping
      itinerary: firstBatch?.itineraryDays?.map(day => ({
        day: day.day_number,
        title: day.title,
        activities: day.activities || []
      })) || [],
      // Batch dates
      nextDates: result.batches?.map(b => this.formatDate(b.start_date)) || [],
      // Additional info
      availableSlots: firstBatch?.availableSlots - firstBatch?.bookedSlots,
      minAge: firstBatch?.minAge || 0,
      maxAge: firstBatch?.maxAge || 0
    };
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
  formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  }
  getDifficultyColor(difficulty) {
    const difficultyMap = {
      'Easy': 'bg-success text-white',
      'Moderate': 'bg-warning text-dark',
      'Difficult': 'bg-danger text-white',
      'Challenging': 'bg-dark text-white'
    };
    return difficultyMap[difficulty] || 'bg-secondary text-white';
  }
  getImageUrl(path) {
    return `${this.baseUrl}${path}`;
  }
  bookTrek(tour) {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.openLoginPanel();
      return;
    } else {
      this.router.navigate(['/booking', tour.id]);
    }
  }
  openLoginPanel() {
    var _this = this;
    return (0,_var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield _this.authModal.openLogin();
      } catch (err) {}
    })();
  }
  // Add these methods to your component
  getBadgeClass(tour) {
    const remaining = tour.availableSlots;
    if (remaining <= 0) {
      return 'bg-danger';
    } else if (remaining <= 3) {
      return 'bg-warning text-dark';
    } else if (remaining <= 10) {
      return 'bg-info text-dark';
    } else {
      return 'bg-success';
    }
  }
  getBadgeText(tour) {
    const remaining = tour.availableSlots;
    if (remaining <= 0) {
      return 'Sold Out';
    } else if (remaining <= 3) {
      return `Only ${remaining} seat${remaining === 1 ? '' : 's'} left!`;
    } else if (remaining <= 10) {
      return `Selling Fast - ${remaining} slots left`;
    } else {
      return `${remaining} slots available`;
    }
  }
  toggleDay(day) {
    if (this.openDay === day) {
      this.openDay = null; // Close if already open
    } else {
      this.openDay = day; // Open the selected day
    }
  }
  static #_ = _staticBlock = () => (this.ɵfac = function TourDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TourDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tour_details__WEBPACK_IMPORTED_MODULE_8__.TourDetails), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_9__.AuthModalService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TourDetailsComponent,
    selectors: [["app-tour-details"]],
    decls: 13,
    vars: 4,
    consts: [["aria-label", "Back navigation", 1, "td-topbar"], ["routerLink", "", "aria-label", "Back to search", 1, "td-back-btn"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2"], ["d", "M19 12H5M12 5l-7 7 7 7", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "td-topbar-title"], [1, "td-topbar-spacer"], ["class", "td-page", 4, "ngIf"], ["class", "td-booking-bar", "role", "complementary", "aria-label", "Booking", 4, "ngIf"], ["class", "td-loading", "role", "status", "aria-label", "Loading trek details", 4, "ngIf"], ["class", "td-error", "role", "alert", 4, "ngIf"], [1, "td-page"], ["aria-label", "Trek hero image", 1, "td-hero"], [1, "td-hero-img-wrap"], [1, "td-hero-img", 3, "error", "src", "alt"], [1, "td-hero-overlay"], [1, "td-slots-badge-wrap"], [1, "td-slots-badge"], [4, "ngIf"], [1, "td-hero-content"], [1, "td-hero-badges"], [1, "td-badge", "td-badge-diff"], [1, "td-badge", "td-badge-category"], [1, "td-hero-title"], [1, "td-hero-meta"], [1, "td-meta-item"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "width", "13", "height", "13"], ["d", "M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z"], ["cx", "8", "cy", "6", "r", "1.5"], [1, "td-meta-sep"], ["viewBox", "0 0 16 16", "fill", "#ffb250", "width", "12", "height", "12"], ["d", "M8 1l2 4.5H15l-4 3.5 1.5 5L8 11l-4.5 3 1.5-5-4-3.5H6z"], [2, "opacity", ".65"], ["cx", "8", "cy", "8", "r", "6.5"], ["d", "M8 4.5V8l2.5 2", "stroke-linecap", "round"], [1, "td-facts-strip"], [1, "td-facts-inner"], [1, "td-fact"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "width", "22", "height", "22", 1, "td-fact-icon"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 6v6l4 2", "stroke-linecap", "round"], [1, "td-fact-label"], [1, "td-fact-val"], [1, "td-fact-div"], ["d", "M3 17l4-8 4 4 3-6 4 10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 20h18", "stroke-linecap", "round"], ["d", "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], [1, "td-content-wrap"], ["role", "tablist", "aria-label", "Trek information tabs", 1, "td-tab-bar"], ["role", "tab", 1, "td-tab", 3, "click"], ["class", "td-tab-panel", 4, "ngIf"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "12"], ["cx", "8", "cy", "8", "r", "6"], ["d", "M5 5l6 6M11 5l-6 6", "stroke-linecap", "round"], [1, "td-tab-panel"], [1, "td-card"], [1, "td-section-title"], [1, "td-section-icon"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "width", "16"], ["d", "M9 12h6M9 8h6M5 12h.01M5 8h.01", "stroke-linecap", "round"], ["x", "3", "y", "3", "width", "14", "height", "14", "rx", "2"], [1, "td-body-text"], ["d", "M10 2l2.4 4.9L18 8l-4 3.9.9 5.6L10 15 5.1 17.5 6 11.9 2 8l5.6-.1z", "stroke-linejoin", "round"], ["role", "list", 1, "td-highlights-list"], ["class", "td-highlight-item", 4, "ngFor", "ngForOf"], ["class", "td-card", 4, "ngIf"], [1, "td-highlight-item"], ["aria-hidden", "true", 1, "td-hl-dot"], ["x", "2", "y", "2", "width", "16", "height", "16", "rx", "2"], ["cx", "7", "cy", "7", "r", "1.5", "fill", "currentColor"], ["d", "M2 13l5-5 4 4 3-3 4 4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "td-gallery-grid"], ["class", "td-gallery-item", 4, "ngFor", "ngForOf"], [1, "td-gallery-item"], ["loading", "lazy", 1, "td-gallery-img", 3, "error", "src", "alt"], ["d", "M10 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z", "stroke-linejoin", "round"], ["class", "td-itin-accordion", 4, "ngFor", "ngForOf"], [1, "td-itin-accordion"], ["type", "button", 1, "td-itin-toggle", 3, "click"], [1, "td-itin-day-num"], [1, "td-itin-day-title"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "14", 1, "td-itin-chevron"], ["d", "M4 6l4 4 4-4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "region", 1, "td-itin-body"], [1, "td-timeline"], ["class", "td-tl-item", 3, "last", 4, "ngFor", "ngForOf"], [1, "td-tl-item"], [1, "td-tl-time"], [1, "td-tl-dot-wrap"], [1, "td-tl-dot"], ["class", "td-tl-line", 4, "ngIf"], [1, "td-tl-content"], [1, "td-tl-line"], [1, "td-section-title", "td-section-title--green"], [1, "td-section-icon", "td-section-icon--green"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "15"], ["d", "M4 10l5 5 8-8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["role", "list", 1, "td-inc-list", "td-inc-list--included", "inclusions"], ["class", "td-inc-item", 4, "ngFor", "ngForOf"], [1, "td-section-title", "td-section-title--red"], [1, "td-section-icon", "td-section-icon--red"], ["d", "M4 4l12 12M16 4L4 16", "stroke-linecap", "round"], ["role", "list", 1, "td-inc-list", "td-inc-list--excluded", "exclusions"], [1, "td-inc-item"], ["aria-hidden", "true", 1, "td-inc-icon", "td-inc-icon--in"], ["d", "M3 8l4 4 6-6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-hidden", "true", 1, "td-inc-icon", "td-inc-icon--ex"], ["d", "M4 4l8 8M12 4l-8 8", "stroke-linecap", "round"], ["d", "M7 4h6a1 1 0 011 1v11a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z"], ["d", "M9 4V2h2v2", "stroke-linecap", "round"], ["role", "list", 1, "td-carry-list", "carry-list"], ["class", "td-carry-item", 4, "ngFor", "ngForOf"], [1, "td-card", "td-card--alert"], [1, "td-section-title", "td-section-title--amber"], [1, "td-section-icon", "td-section-icon--amber"], ["d", "M10 2l8 14H2L10 2z", "stroke-linejoin", "round"], ["d", "M10 8v4M10 14h.01", "stroke-linecap", "round"], ["role", "list", 1, "td-notes-list", "notes-list"], ["class", "td-note-item", 4, "ngFor", "ngForOf"], [1, "td-carry-item"], ["aria-hidden", "true", 1, "td-carry-dot"], [1, "td-note-item"], ["aria-hidden", "true", 1, "td-note-bullet"], ["role", "complementary", "aria-label", "Booking", 1, "td-booking-bar"], [1, "td-booking-bar-inner"], [1, "td-price-block"], [1, "td-price-from"], [1, "td-price-val"], [1, "td-price-per"], ["class", "td-book-btn", "aria-label", "Book this trek", 3, "click", 4, "ngIf"], ["class", "td-sold-out", "aria-label", "Sold out", 4, "ngIf"], ["aria-label", "Book this trek", 1, "td-book-btn", 3, "click"], ["viewBox", "0 0 20 20", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16"], ["x", "2", "y", "3", "width", "16", "height", "14", "rx", "2"], ["d", "M7 7h6M7 11h4", "stroke-linecap", "round"], ["aria-label", "Sold out", 1, "td-sold-out"], ["cx", "10", "cy", "10", "r", "8"], ["d", "M6 6l8 8M14 6l-8 8", "stroke-linecap", "round"], ["role", "status", "aria-label", "Loading trek details", 1, "td-loading"], [1, "td-loading-inner"], ["src", "../../assets/assets/Bus vehicle.gif", "width", "160", "alt", "Loading\u2026", "aria-hidden", "true"], ["aria-hidden", "true", 1, "td-loading-dots"], [1, "td-loading-text"], ["role", "alert", 1, "td-error"], [1, "td-error-inner"], ["aria-hidden", "true", 1, "td-error-graphic"], ["viewBox", "0 0 80 60", "fill", "none", "width", "80"], ["d", "M10 50 L30 15 L50 35 L65 10 L75 25 L75 50Z", "fill", "rgba(126,167,107,.1)", "stroke", "rgba(126,167,107,.3)", "stroke-width", "1.5", "stroke-linejoin", "round"], ["cx", "65", "cy", "12", "r", "6", "fill", "rgba(255,178,80,.15)", "stroke", "rgba(255,178,80,.4)", "stroke-width", "1.5"], [1, "td-error-title"], [1, "td-error-sub"], ["routerLink", "/treklist", 1, "td-error-btn"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "13"], ["d", "M10 3L5 8l5 5", "stroke-linecap", "round", "stroke-linejoin", "round"]],
    template: function TourDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Trek Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TourDetailsComponent_div_9_Template, 93, 44, "div", 6)(10, TourDetailsComponent_div_10_Template, 12, 5, "div", 7)(11, TourDetailsComponent_div_11_Template, 9, 0, "div", 8)(12, TourDetailsComponent_div_12_Template, 14, 0, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tour && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tour && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.tour);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHrefDelegate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Barlow[_ngcontent-%COMP%]:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600&family=Barlow[_ngcontent-%COMP%] + Condensed[_ngcontent-%COMP%]:wght@500;600[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];[_nghost-%COMP%] {\n  --forest: #2d4a22;\n  --forest-mid: #3d6130;\n  --forest-lt: #7ea76b;\n  --forest-pale: rgba(45, 74, 34, 0.06);\n  --stone: #f5f1eb;\n  --stone-dark: #e8e0d4;\n  --stone-deep: #cfc5b4;\n  --amber: #e8921a;\n  --amber-lt: #ffb250;\n  --amber-pale: rgba(255, 178, 80, 0.1);\n  --danger: #c0392b;\n  --danger-pale: rgba(192, 57, 43, 0.08);\n  --sky: #4a9bbe;\n  --text-dark: #1e2b18;\n  --text-mid: #5a6e4a;\n  --text-muted: #8a9e7a;\n  --booking-h: 80px;\n  --ease: cubic-bezier(0.22, 1, 0.36, 1);\n  display: block;\n  font-family: \"Barlow\", sans-serif;\n  background: var(--stone);\n  color: var(--text-dark);\n  min-height: 100vh;\n}\n\n.td-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  height: 56px;\n  background: var(--forest);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);\n}\n\n.td-back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: rgba(255, 255, 255, 0.85);\n  text-decoration: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  padding: 6px 12px 6px 8px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 9px;\n  transition: background 0.2s, color 0.2s, border-color 0.2s;\n}\n.td-back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.td-back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.35);\n}\n\n.td-topbar-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.td-topbar-spacer[_ngcontent-%COMP%] {\n  width: 88px;\n}\n\n.td-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(300px, 45vw, 480px);\n  overflow: hidden;\n}\n\n.td-hero-img-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n\n.td-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  transition: transform 0.6s var(--ease);\n}\n\n.td-hero[_ngcontent-%COMP%]:hover   .td-hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n\n.td-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(10, 20, 8, 0.88) 0%, rgba(10, 20, 8, 0.35) 45%, transparent 75%);\n}\n\n.td-slots-badge-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 2;\n}\n\n.td-slots-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 5px 12px;\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n}\n.td-slots-badge.sold[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.9);\n  color: #fff;\n}\n.td-slots-badge.critical[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.85);\n  color: #fff;\n}\n.td-slots-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(232, 146, 26, 0.9);\n  color: #fff;\n}\n.td-slots-badge.ok[_ngcontent-%COMP%] {\n  background: rgba(45, 74, 34, 0.88);\n  color: #fff;\n}\n\n.td-hero-content[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 28px 24px;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_heroIn 0.7s var(--ease) both;\n}\n\n@keyframes _ngcontent-%COMP%_heroIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.td-hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n\n.td-badge[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  padding: 3px 10px;\n  border-radius: 6px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.td-badge-diff.diff-easy[_ngcontent-%COMP%] {\n  background: rgba(45, 180, 80, 0.88);\n  color: #fff;\n}\n.td-badge-diff.diff-moderate[_ngcontent-%COMP%] {\n  background: rgba(232, 160, 26, 0.88);\n  color: #fff;\n}\n.td-badge-diff.diff-hard[_ngcontent-%COMP%], .td-badge-diff.diff-difficult[_ngcontent-%COMP%], .td-badge-diff.diff-challenging[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.88);\n  color: #fff;\n}\n\n.td-badge-category[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.45);\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.td-badge-diff[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.45);\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.td-hero-title[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: clamp(22px, 5vw, 42px);\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  margin-bottom: 12px;\n}\n\n.td-hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.td-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: rgba(255, 255, 255, 0.78);\n  font-size: 13px;\n  font-weight: 400;\n}\n\n.td-meta-sep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 14px;\n  background: rgba(255, 255, 255, 0.25);\n  flex-shrink: 0;\n}\n\n.td-facts-strip[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid var(--stone-dark);\n  box-shadow: 0 2px 8px rgba(45, 74, 34, 0.06);\n}\n\n.td-facts-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  max-width: 800px;\n  margin: 0 auto;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.td-facts-inner[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.td-fact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 24px;\n  flex: 1;\n  min-width: 120px;\n}\n\n.td-fact-icon[_ngcontent-%COMP%] {\n  color: var(--forest-lt);\n  flex-shrink: 0;\n}\n\n.td-fact-label[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 1px;\n}\n\n.td-fact-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-dark);\n  white-space: nowrap;\n}\n\n.td-fact-div[_ngcontent-%COMP%] {\n  width: 1px;\n  background: var(--stone-dark);\n  margin: 10px 0;\n  flex-shrink: 0;\n}\n\n.td-content-wrap[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 16px clamp(100px, 12vw, 120px);\n}\n\n.td-tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  padding: 16px 0 12px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  position: sticky;\n  top: 56px;\n  z-index: 40;\n  background: var(--stone);\n  border-bottom: 2px solid var(--stone-dark);\n  margin-bottom: 20px;\n}\n.td-tab-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.td-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 90px;\n  background: none;\n  border: 1px solid transparent;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: color 0.2s, background 0.2s, border-color 0.2s;\n}\n.td-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--text-dark);\n  background: var(--stone-dark);\n}\n.td-tab.active[_ngcontent-%COMP%] {\n  color: var(--forest);\n  background: rgba(45, 74, 34, 0.07);\n  border-color: rgba(45, 74, 34, 0.2);\n}\n\n.td-tab-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_panelIn 0.3s var(--ease) both;\n}\n\n@keyframes _ngcontent-%COMP%_panelIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.td-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--stone-dark);\n  border-radius: 16px;\n  padding: 22px 20px;\n  box-shadow: 0 2px 8px rgba(45, 74, 34, 0.04);\n}\n.td-card--alert[_ngcontent-%COMP%] {\n  background: rgba(232, 146, 26, 0.04);\n  border-color: rgba(232, 146, 26, 0.2);\n}\n\n.td-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.td-section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: var(--stone-dark);\n}\n.td-section-title--green[_ngcontent-%COMP%] {\n  color: var(--forest-mid);\n}\n.td-section-title--red[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.td-section-title--amber[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n\n.td-section-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 7px;\n  background: rgba(45, 74, 34, 0.08);\n  color: var(--forest);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.td-section-icon--green[_ngcontent-%COMP%] {\n  background: rgba(45, 74, 34, 0.1);\n  color: var(--forest-mid);\n}\n.td-section-icon--red[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.08);\n  color: var(--danger);\n}\n.td-section-icon--amber[_ngcontent-%COMP%] {\n  background: rgba(232, 146, 26, 0.1);\n  color: var(--amber);\n}\n\n.td-body-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.75;\n  color: var(--text-mid);\n  text-align: justify;\n}\n\n.td-highlights-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.td-highlight-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 11px 14px;\n  background: var(--stone);\n  border-radius: 10px;\n  font-size: 13px;\n  color: var(--text-mid);\n  line-height: 1.5;\n  border: 1px solid var(--stone-dark);\n}\n\n.td-hl-dot[_ngcontent-%COMP%] {\n  color: var(--forest-lt);\n  font-size: 12px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.td-gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n@media (min-width: 480px) {\n  .td-gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n.td-gallery-item[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 10px;\n  overflow: hidden;\n  background: var(--stone-dark);\n}\n\n.td-gallery-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.35s var(--ease);\n}\n.td-gallery-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n\n.td-itin-accordion[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--stone-dark);\n}\n.td-itin-accordion[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.td-itin-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 14px 0;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.td-itin-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(45, 74, 34, 0.02);\n}\n.td-itin-toggle.open[_ngcontent-%COMP%]   .td-itin-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.td-itin-day-num[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: var(--forest);\n  color: #fff;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.td-itin-toggle.open[_ngcontent-%COMP%]   .td-itin-day-num[_ngcontent-%COMP%] {\n  background: var(--amber);\n  box-shadow: 0 2px 8px rgba(232, 146, 26, 0.4);\n}\n\n.td-itin-day-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-dark);\n  line-height: 1.3;\n}\n\n.td-itin-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--text-muted);\n  transition: transform 0.25s var(--ease);\n}\n\n.td-itin-body[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.35s var(--ease), opacity 0.25s ease;\n  opacity: 0;\n}\n.td-itin-body.open[_ngcontent-%COMP%] {\n  max-height: 1200px;\n  opacity: 1;\n}\n\n.td-timeline[_ngcontent-%COMP%] {\n  padding: 4px 0 16px 0;\n}\n\n.td-tl-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  position: relative;\n}\n\n.td-tl-time[_ngcontent-%COMP%] {\n  min-width: 72px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  font-family: \"Barlow Condensed\", sans-serif;\n  letter-spacing: 0.03em;\n  padding-top: 2px;\n  text-align: right;\n}\n@media (max-width: 400px) {\n  .td-tl-time[_ngcontent-%COMP%] {\n    min-width: 58px;\n    font-size: 11px;\n  }\n}\n\n.td-tl-dot-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n}\n\n.td-tl-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--forest-lt);\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 2px var(--forest-lt);\n  margin-top: 3px;\n  flex-shrink: 0;\n}\n\n.td-tl-line[_ngcontent-%COMP%] {\n  width: 2px;\n  flex: 1;\n  min-height: 20px;\n  background: var(--stone-dark);\n  margin: 4px 0;\n}\n\n.td-tl-content[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  color: var(--text-mid);\n  line-height: 1.55;\n  padding-bottom: 16px;\n}\n\n.td-inc-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4px 20px;\n}\n@media (max-width: 500px) {\n  .td-inc-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.td-inc-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--stone-dark);\n  font-size: 13px;\n  color: var(--text-mid);\n  line-height: 1.45;\n}\n.td-inc-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: none;\n}\n@media (max-width: 500px) {\n  .td-inc-item[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n\n.td-inc-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.td-inc-icon--in[_ngcontent-%COMP%] {\n  background: rgba(45, 74, 34, 0.1);\n  color: var(--forest);\n}\n.td-inc-icon--ex[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.1);\n  color: var(--danger);\n}\n\n.td-carry-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4px 20px;\n}\n@media (max-width: 500px) {\n  .td-carry-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.td-carry-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--stone-dark);\n  font-size: 13px;\n  color: var(--text-mid);\n  line-height: 1.45;\n}\n.td-carry-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: none;\n}\n@media (max-width: 500px) {\n  .td-carry-item[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n\n.td-carry-dot[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-shrink: 0;\n}\n\n.td-notes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4px 20px;\n}\n@media (max-width: 500px) {\n  .td-notes-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.td-note-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(232, 146, 26, 0.15);\n  font-size: 13px;\n  color: var(--text-mid);\n  line-height: 1.45;\n}\n.td-note-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  border-bottom: none;\n}\n@media (max-width: 500px) {\n  .td-note-item[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n}\n\n.td-note-bullet[_ngcontent-%COMP%] {\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.td-booking-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background: #fff;\n  border-top: 1px solid var(--stone-dark);\n  box-shadow: 0 -4px 24px rgba(45, 74, 34, 0.1);\n}\n\n.td-booking-bar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n  gap: 16px;\n}\n\n.td-price-block[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.td-price-from[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 1px;\n}\n\n.td-price-val[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-dark);\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n\n.td-price-per[_ngcontent-%COMP%] {\n  font-family: \"Barlow\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--text-muted);\n}\n\n.td-book-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--forest);\n  color: #fff;\n  border: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  padding: 13px 28px;\n  border-radius: 12px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;\n  box-shadow: 0 4px 16px rgba(45, 74, 34, 0.3);\n}\n.td-book-btn[_ngcontent-%COMP%]:hover {\n  background: var(--forest-mid);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(45, 74, 34, 0.35);\n}\n.td-book-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.td-sold-out[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--danger);\n  background: var(--danger-pale);\n  border: 1px solid rgba(192, 57, 43, 0.2);\n  padding: 12px 20px;\n  border-radius: 12px;\n}\n\n.td-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n}\n\n.td-loading-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n.td-loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.td-loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--forest-lt);\n  animation: _ngcontent-%COMP%_dotPulse 1.2s ease-in-out infinite;\n}\n.td-loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.td-loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n\n@keyframes _ngcontent-%COMP%_dotPulse {\n  0%, 80%, 100% {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n  40% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.td-loading-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n\n.td-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  padding: 32px;\n}\n\n.td-error-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n}\n\n.td-error-graphic[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.td-error-title[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-dark);\n}\n\n.td-error-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  max-width: 260px;\n  line-height: 1.6;\n}\n\n.td-error-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--forest);\n  color: #fff;\n  text-decoration: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  padding: 10px 22px;\n  border-radius: 10px;\n  margin-top: 8px;\n  transition: background 0.2s;\n}\n.td-error-btn[_ngcontent-%COMP%]:hover {\n  background: var(--forest-mid);\n}\n\n@media (max-width: 600px) {\n  .td-hero-content[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .td-facts-strip[_ngcontent-%COMP%]   .td-fact[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    min-width: 110px;\n  }\n  .td-content-wrap[_ngcontent-%COMP%] {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n  .td-card[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n    border-radius: 14px;\n  }\n  .td-booking-bar-inner[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n  }\n  .td-book-btn[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .td-price-val[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG91ci1kZXRhaWxzL3RvdXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBRUEsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7QUFWRjtBQVlFO0VBQU0sV0FBQTtFQUFhLFlBQUE7QUFSckI7QUFVRTtFQUNFLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBUko7O0FBWUE7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQVRGOztBQVlBO0VBQW9CLFdBQUE7QUFScEI7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQVZGOztB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RUFuQ0E7SUFBbUIsa0JBQUE7RUFzQ25CO0VBckNBO0lBQW1CLGVBQUE7RUF3Q25CO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b3VyLWRldGFpbHMuY29tcG9uZW50LnNjc3Ncbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBBbHBpbmUgVHJlayBUaGVtZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEFlc3RoZXRpYzogZWRpdG9yaWFsIGFscGluZSDDosKAwpQgUGxheWZhaXIgRGlzcGxheSBoZWFkbGluZXMsIEJhcmxvdyBib2R5LFxuLy8gZm9yZXN0IGdyZWVuICsgZWFydGh5IGFtYmVyIGFjY2VudHMgb24gd2FybSBzdG9uZSBiYWNrZ3JvdW5kLlxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDYwMDswLDcwMDsxLDYwMCZmYW1pbHk9QmFybG93OndnaHRAMzAwOzQwMDs1MDA7NjAwJmZhbWlseT1CYXJsb3crQ29uZGVuc2VkOndnaHRANTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIMOiwpTCgMOiwpTCgCBEZXNpZ24gdG9rZW5zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuOmhvc3Qge1xuICAtLWZvcmVzdDogICAgICAgICMyZDRhMjI7XG4gIC0tZm9yZXN0LW1pZDogICAgIzNkNjEzMDtcbiAgLS1mb3Jlc3QtbHQ6ICAgICAjN2VhNzZiO1xuICAtLWZvcmVzdC1wYWxlOiAgIHJnYmEoNDUsIDc0LCAzNCwgMC4wNik7XG4gIC0tc3RvbmU6ICAgICAgICAgI2Y1ZjFlYjtcbiAgLS1zdG9uZS1kYXJrOiAgICAjZThlMGQ0O1xuICAtLXN0b25lLWRlZXA6ICAgICNjZmM1YjQ7XG4gIC0tYW1iZXI6ICAgICAgICAgI2U4OTIxYTtcbiAgLS1hbWJlci1sdDogICAgICAjZmZiMjUwO1xuICAtLWFtYmVyLXBhbGU6ICAgIHJnYmEoMjU1LCAxNzgsIDgwLCAwLjEpO1xuICAtLWRhbmdlcjogICAgICAgICNjMDM5MmI7XG4gIC0tZGFuZ2VyLXBhbGU6ICAgcmdiYSgxOTIsIDU3LCA0MywgMC4wOCk7XG4gIC0tc2t5OiAgICAgICAgICAgIzRhOWJiZTtcbiAgLS10ZXh0LWRhcms6ICAgICAjMWUyYjE4O1xuICAtLXRleHQtbWlkOiAgICAgICM1YTZlNGE7XG4gIC0tdGV4dC1tdXRlZDogICAgIzhhOWU3YTtcbiAgLS1ib29raW5nLWg6ICAgICA4MHB4O1xuICAtLWVhc2U6ICAgICAgICAgIGN1YmljLWJlemllcigwLjIyLCAxLCAwLjM2LCAxKTtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdG9uZSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgVE9QQkFSXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC10b3BiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRkLWJhY2stYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNnB4IDEycHggNnB4IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycywgY29sb3IgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG5cbiAgc3ZnIHsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB9XG59XG5cbi50ZC10b3BiYXItdGl0bGUge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLnRkLXRvcGJhci1zcGFjZXIgeyB3aWR0aDogODhweDsgfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vICBIRVJPXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGNsYW1wKDMwMHB4LCA0NXZ3LCA0ODBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZC1oZXJvLWltZy13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbn1cblxuLnRkLWhlcm8taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyB2YXIoLS1lYXNlKTtcbn1cblxuLnRkLWhlcm86aG92ZXIgLnRkLWhlcm8taW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcbn1cblxuLnRkLWhlcm8tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byB0b3AsXG4gICAgcmdiYSgxMCwgMjAsIDgsIDAuODgpIDAlLFxuICAgIHJnYmEoMTAsIDIwLCA4LCAwLjM1KSA0NSUsXG4gICAgdHJhbnNwYXJlbnQgNzUlXG4gICk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBTbG90cyBiYWRnZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC1zbG90cy1iYWRnZS13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4udGQtc2xvdHMtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAmLnNvbGQgICAgIHsgYmFja2dyb3VuZDogcmdiYSgxOTIsIDU3LCA0MywgMC45KTsgIGNvbG9yOiAjZmZmOyB9XG4gICYuY3JpdGljYWwgeyBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgNTcsIDQzLCAwLjg1KTsgY29sb3I6ICNmZmY7IH1cbiAgJi53YXJuaW5nICB7IGJhY2tncm91bmQ6IHJnYmEoMjMyLCAxNDYsIDI2LCAwLjkpOyBjb2xvcjogI2ZmZjsgfVxuICAmLm9rICAgICAgIHsgYmFja2dyb3VuZDogcmdiYSg0NSwgNzQsIDM0LCAwLjg4KTsgIGNvbG9yOiAjZmZmOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIZXJvIHRleHQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtaGVyby1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAyOHB4IDI0cHg7XG4gIHotaW5kZXg6IDI7XG4gIGFuaW1hdGlvbjogaGVyb0luIDAuN3MgdmFyKC0tZWFzZSkgYm90aDtcbn1cblxuQGtleWZyYW1lcyBoZXJvSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLnRkLWhlcm8tYmFkZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50ZC1iYWRnZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG59XG5cbi50ZC1iYWRnZS1kaWZmIHtcbiAgJi5kaWZmLWVhc3kgICAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCAxODAsIDgwLCAwLjg4KTsgY29sb3I6ICNmZmY7IH1cbiAgJi5kaWZmLW1vZGVyYXRlICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMTYwLCAyNiwgMC44OCk7IGNvbG9yOiAjZmZmOyB9XG4gICYuZGlmZi1oYXJkLFxuICAmLmRpZmYtZGlmZmljdWx0LFxuICAmLmRpZmYtY2hhbGxlbmdpbmcgeyBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgNTcsIDQzLCAwLjg4KTsgY29sb3I6ICNmZmY7IH1cbn1cblxuLnRkLWJhZGdlLWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG59XG5cbi50ZC1iYWRnZS1kaWZme1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG59XG5cbi50ZC1oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMjJweCwgNXZ3LCA0MnB4KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4udGQtaGVyby1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50ZC1tZXRhLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OCk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRkLW1ldGEtc2VwIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgUVVJQ0sgRkFDVFMgU1RSSVBcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRkLWZhY3RzLXN0cmlwIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0b25lLWRhcmspO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg0NSwgNzQsIDM0LCAwLjA2KTtcbn1cblxuLnRkLWZhY3RzLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG59XG5cbi50ZC1mYWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi50ZC1mYWN0LWljb24ge1xuICBjb2xvcjogdmFyKC0tZm9yZXN0LWx0KTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi50ZC1mYWN0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi50ZC1mYWN0LXZhbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZC1mYWN0LWRpdiB7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0b25lLWRhcmspO1xuICBtYXJnaW46IDEwcHggMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gIENPTlRFTlQgQVJFQVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtY29udGVudC13cmFwIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMTZweCBjbGFtcCgxMDBweCwgMTJ2dywgMTIwcHgpOyAvLyBzcGFjZSBmb3Igc3RpY2t5IGZvb3RlclxufVxuXG4vLyDDosKUwoDDosKUwoAgVGFiIGJhciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC10YWItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycHg7XG4gIHBhZGRpbmc6IDE2cHggMCAxMnB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNTZweDsgLy8gYmVsb3cgdG9wYmFyXG4gIHotaW5kZXg6IDQwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdG9uZSk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zdG9uZS1kYXJrKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cbn1cblxuLnRkLXRhYiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJhY2tncm91bmQgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG5cbiAgJjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN0b25lLWRhcmspO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS1mb3Jlc3QpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNDUsIDc0LCAzNCwgMC4wNyk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ1LCA3NCwgMzQsIDAuMik7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFRhYiBwYW5lbCBhbmltYXRpb24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtdGFiLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBhbmltYXRpb246IHBhbmVsSW4gMC4zcyB2YXIoLS1lYXNlKSBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIHBhbmVsSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgU0VDVElPTiBDQVJEU1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0b25lLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAyMnB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDQ1LCA3NCwgMzQsIDAuMDQpO1xuXG4gICYtLWFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgMTQ2LCAyNiwgMC4wNCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMiwgMTQ2LCAyNiwgMC4yKTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgU2VjdGlvbiB0aXRsZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC1zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN0b25lLWRhcmspO1xuICB9XG5cbiAgJi0tZ3JlZW4geyBjb2xvcjogdmFyKC0tZm9yZXN0LW1pZCk7IH1cbiAgJi0tcmVkICAgeyBjb2xvcjogdmFyKC0tZGFuZ2VyKTsgfVxuICAmLS1hbWJlciB7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cbn1cblxuLnRkLXNlY3Rpb24taWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZDogcmdiYSg0NSwgNzQsIDM0LCAwLjA4KTtcbiAgY29sb3I6IHZhcigtLWZvcmVzdCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcblxuICAmLS1ncmVlbiB7IGJhY2tncm91bmQ6IHJnYmEoNDUsIDc0LCAzNCwgMC4xKTsgY29sb3I6IHZhcigtLWZvcmVzdC1taWQpOyB9XG4gICYtLXJlZCAgIHsgYmFja2dyb3VuZDogcmdiYSgxOTIsIDU3LCA0MywgMC4wOCk7IGNvbG9yOiB2YXIoLS1kYW5nZXIpOyB9XG4gICYtLWFtYmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzIsIDE0NiwgMjYsIDAuMSk7IGNvbG9yOiB2YXIoLS1hbWJlcik7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAIEJvZHkgdGV4dCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC1ib2R5LXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICBjb2xvcjogdmFyKC0tdGV4dC1taWQpO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vICBISUdITElHSFRTXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC1oaWdobGlnaHRzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4udGQtaGlnaGxpZ2h0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0b25lKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1taWQpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdG9uZS1kYXJrKTtcbn1cblxuLnRkLWhsLWRvdCB7XG4gIGNvbG9yOiB2YXIoLS1mb3Jlc3QtbHQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gIEdBTExFUllcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRkLWdhbGxlcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMTBweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5cbi50ZC1nYWxsZXJ5LWl0ZW0ge1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0b25lLWRhcmspO1xufVxuXG4udGQtZ2FsbGVyeS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIHZhcigtLWVhc2UpO1xuXG4gICY6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gIElUSU5FUkFSWSBBQ0NPUkRJT05cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRkLWl0aW4tYWNjb3JkaW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0b25lLWRhcmspO1xuXG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbn1cblxuLnRkLWl0aW4tdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg0NSwgNzQsIDM0LCAwLjAyKTsgfVxuXG4gICYub3BlbiAudGQtaXRpbi1jaGV2cm9uIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5cbi50ZC1pdGluLWRheS1udW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRkLWl0aW4tdG9nZ2xlLm9wZW4gLnRkLWl0aW4tZGF5LW51bSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMjMyLCAxNDYsIDI2LCAwLjQpO1xufVxuXG4udGQtaXRpbi1kYXktdGl0bGUge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4udGQtaXRpbi1jaGV2cm9uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIHZhcigtLWVhc2UpO1xufVxuXG4udGQtaXRpbi1ib2R5IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjM1cyB2YXIoLS1lYXNlKSwgb3BhY2l0eSAwLjI1cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuXG4gICYub3BlbiB7XG4gICAgbWF4LWhlaWdodDogMTIwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAIFRpbWVsaW5lIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRkLXRpbWVsaW5lIHtcbiAgcGFkZGluZzogNHB4IDAgMTZweCAwO1xufVxuXG4udGQtdGwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRkLXRsLXRpbWUge1xuICBtaW4td2lkdGg6IDcycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBtaW4td2lkdGg6IDU4cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5cbi50ZC10bC1kb3Qtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udGQtdGwtZG90IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QtbHQpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tZm9yZXN0LWx0KTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnRkLXRsLWxpbmUge1xuICB3aWR0aDogMnB4O1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdG9uZS1kYXJrKTtcbiAgbWFyZ2luOiA0cHggMDtcbn1cblxuLnRkLXRsLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1pZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgSU5DTFVTSU9OUyAvIEVYQ0xVU0lPTlNcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRkLWluYy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDRweCAyMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbi50ZC1pbmMtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdG9uZS1kYXJrKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1taWQpO1xuICBsaW5lLWhlaWdodDogMS40NTtcblxuICAmOm50aC1sYXN0LWNoaWxkKC1uKzIpIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHsgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfSB9XG59XG5cbi50ZC1pbmMtaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAxcHg7XG5cbiAgJi0taW4geyBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCA3NCwgMzQsIDAuMSk7IGNvbG9yOiB2YXIoLS1mb3Jlc3QpOyB9XG4gICYtLWV4IHsgYmFja2dyb3VuZDogcmdiYSgxOTIsIDU3LCA0MywgMC4xKTsgY29sb3I6IHZhcigtLWRhbmdlcik7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgVEhJTkdTIFRPIENBUlJZXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZC1jYXJyeS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDRweCAyMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxufVxuXG4udGQtY2FycnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdG9uZS1kYXJrKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1taWQpO1xuICBsaW5lLWhlaWdodDogMS40NTtcblxuICAmOm50aC1sYXN0LWNoaWxkKC1uKzIpIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHsgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfSB9XG59XG5cbi50ZC1jYXJyeS1kb3QgeyBmb250LXNpemU6IDE0cHg7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gIElNUE9SVEFOVCBOT1RFU1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtbm90ZXMtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiA0cHggMjBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbn1cblxuLnRkLW5vdGUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIzMiwgMTQ2LCAyNiwgMC4xNSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbWlkKTtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG5cbiAgJjpudGgtbGFzdC1jaGlsZCgtbisyKSB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7ICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH0gfVxufVxuXG4udGQtbm90ZS1idWxsZXQgeyBmb250LXNpemU6IDEzcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gIFNUSUNLWSBCT09LSU5HIEZPT1RFUlxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtYm9va2luZy1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN0b25lLWRhcmspO1xuICBib3gtc2hhZG93OiAwIC00cHggMjRweCByZ2JhKDQ1LCA3NCwgMzQsIDAuMSk7XG59XG5cbi50ZC1ib29raW5nLWJhci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZ2FwOiAxNnB4O1xufVxuXG4udGQtcHJpY2UtYmxvY2sgeyBmbGV4OiAxOyB9XG5cbi50ZC1wcmljZS1mcm9tIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi50ZC1wcmljZS12YWwge1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDRweDtcbn1cblxuLnRkLXByaWNlLXBlciB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi50ZC1ib29rLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEzcHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCB0cmFuc2Zvcm0gMC4xNXMsIGJveC1zaGFkb3cgMC4ycztcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDQ1LCA3NCwgMzQsIDAuMyk7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9yZXN0LW1pZCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSg0NSwgNzQsIDM0LCAwLjM1KTtcbiAgfVxuXG4gICY6YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi50ZC1zb2xkLW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXItcGFsZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkyLCA1NywgNDMsIDAuMik7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgTE9BRElORyBTVEFURVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udGQtbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4udGQtbG9hZGluZy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxuLnRkLWxvYWRpbmctZG90cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuXG4gIHNwYW4ge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcmVzdC1sdCk7XG4gICAgYW5pbWF0aW9uOiBkb3RQdWxzZSAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXG4gICAgJjpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cbiAgICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogMC40czsgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZG90UHVsc2Uge1xuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMC4yNTsgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTsgfVxuICA0MCUgICAgICAgICAgIHsgb3BhY2l0eTogMTsgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG4udGQtbG9hZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgRVJST1IgU1RBVEVcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRkLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIHBhZGRpbmc6IDMycHg7XG59XG5cbi50ZC1lcnJvci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGQtZXJyb3ItZ3JhcGhpYyB7IG1hcmdpbi1ib3R0b206IDhweDsgfVxuXG4udGQtZXJyb3ItdGl0bGUge1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbn1cblxuLnRkLWVycm9yLXN1YiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBtYXgtd2lkdGg6IDI2MHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4udGQtZXJyb3ItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvcmVzdCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tZm9yZXN0LW1pZCk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4vLyAgUkVTUE9OU0lWRVxuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRkLWhlcm8tY29udGVudCB7IHBhZGRpbmc6IDIwcHggMTZweDsgfVxuICAudGQtZmFjdHMtc3RyaXAgIC50ZC1mYWN0IHsgcGFkZGluZzogMTRweCAxNnB4OyBtaW4td2lkdGg6IDExMHB4OyB9XG4gIC50ZC1jb250ZW50LXdyYXAgeyBwYWRkaW5nLWxlZnQ6IDEycHg7IHBhZGRpbmctcmlnaHQ6IDEycHg7IH1cbiAgLnRkLWNhcmQgICAgICAgICB7IHBhZGRpbmc6IDE4cHggMTZweDsgYm9yZGVyLXJhZGl1czogMTRweDsgfVxuICAudGQtYm9va2luZy1iYXItaW5uZXIgeyBwYWRkaW5nOiAxMHB4IDE2cHg7IH1cbiAgLnRkLWJvb2stYnRuICAgICB7IHBhZGRpbmc6IDEycHggMjBweDsgfVxuICAudGQtcHJpY2UtdmFsICAgIHsgZm9udC1zaXplOiAyMnB4OyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_tour-details_tour-details-module_ts.js.map