"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_search_search_module_ts"],{

/***/ 4626
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const _c0 = () => [1, 2, 3, 4, 5, 6];
const _forTrack0 = ($index, $item) => $item.id ?? $item.name;
function SearchComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Searching\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SearchComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "circle", 59)(2, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SearchComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 61)(3, "line", 62)(4, "line", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Expedition failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Conditional_82_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function SearchComponent_Conditional_83_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "article", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 71)(4, "div", 72)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SearchComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](3, SearchComponent_Conditional_83_For_4_Template, 6, 0, "article", 68, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](0, _c0));
  }
}
function SearchComponent_Conditional_84_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u2B50 Featured");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SearchComponent_Conditional_84_For_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "circle", 112)(3, "path", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", trek_r5.duration, " ");
  }
}
function SearchComponent_Conditional_84_For_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trek_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", trek_r5.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", trek_r5.reviews ?? 0, ")");
  }
}
function SearchComponent_Conditional_84_For_16_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 117)(3, "circle", 118)(4, "path", 119)(5, "circle", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Max ", trek_r5.maxGroupSize, " ");
  }
}
function SearchComponent_Conditional_84_For_16_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, trek_r5.date, "d MMM"), " ");
  }
}
function SearchComponent_Conditional_84_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Conditional_84_For_16_Template_li_click_0_listener() {
      const trek_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onSelectTrek(trek_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 88)(6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](8, SearchComponent_Conditional_84_For_16_Conditional_8_Template, 2, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SearchComponent_Conditional_84_For_16_div_9_Template, 5, 1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 70)(11, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "path", 94)(14, "circle", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](21, SearchComponent_Conditional_84_For_16_Conditional_21_Template, 6, 2, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](22, SearchComponent_Conditional_84_For_16_Conditional_22_Template, 7, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 101)(24, "div", 102)(25, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "from");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "/ person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Conditional_84_For_16_Template_button_click_32_listener($event) {
      const trek_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.onBook(trek_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Book now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "svg", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](36, SearchComponent_Conditional_84_For_16_Conditional_36_Template, 3, 4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const trek_r5 = ctx.$implicit;
    const ɵ$index_229_r6 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("animation-delay", ɵ$index_229_r6 * 0.08 + "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", trek_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", trek_r5.coverColor ?? "var(--grad-default)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("d", trek_r5.landscapePath ?? ctx_r2.defaultLandscape);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("diff-" + trek_r5.difficulty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.diffLabel(trek_r5.difficulty), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](trek_r5.featured ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", trek_r5.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", trek_r5.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](trek_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](trek_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](trek_r5.rating ? 21 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](trek_r5.maxGroupSize ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](29, 19, trek_r5.price, "INR", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Book " + trek_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](trek_r5.date ? 36 : -1);
  }
}
function SearchComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 74)(1, "p", 75)(2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 77)(6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Sort:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Popular");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Price \u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Newest");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](15, SearchComponent_Conditional_84_For_16_Template, 37, 24, "li", 82, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.treksTours.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" expedition", ctx_r2.treksTours.length !== 1 ? "s" : "", " found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r2.treksTours);
  }
}
function SearchComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 123)(4, "circle", 124)(5, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "No expeditions found");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Try adjusting your filters or explore a different region.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SearchComponent_Conditional_85_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.resetSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Clear filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class SearchComponent {
  constructor() {
    this.loading = false;
    this.error = null;
    this.treksTours = [];
    this.searchParams = {
      location: '',
      difficulty: '',
      priceMin: null,
      priceMax: null,
      date: ''
    };
    this.defaultLandscape = 'M0 120 L60 60 L100 85 L150 30 L200 70 L260 20 L320 65 L370 40 L400 55 L400 120Z';
  }
  ngOnInit() {
    this.loadInitial();
  }
  loadInitial() {
    this.loading = true;
    setTimeout(() => {
      this.treksTours = MOCK_TREKS;
      this.loading = false;
    }, 1000);
  }
  onSearch() {
    this.loading = true;
    this.error = null;
    // Replace with real API call:
    // this.trekService.search(this.searchParams).subscribe({ ... })
    setTimeout(() => {
      this.treksTours = MOCK_TREKS.filter(t => {
        const locMatch = !this.searchParams.location || t.location.toLowerCase().includes(this.searchParams.location.toLowerCase()) || t.name.toLowerCase().includes(this.searchParams.location.toLowerCase());
        const diffMatch = !this.searchParams.difficulty || t.difficulty === this.searchParams.difficulty;
        const minMatch = !this.searchParams.priceMin || t.price >= this.searchParams.priceMin;
        const maxMatch = !this.searchParams.priceMax || t.price <= this.searchParams.priceMax;
        return locMatch && diffMatch && minMatch && maxMatch;
      });
      this.loading = false;
    }, 800);
  }
  resetSearch() {
    this.searchParams = {
      location: '',
      difficulty: '',
      priceMin: null,
      priceMax: null,
      date: ''
    };
    this.loadInitial();
  }
  onSelectTrek(trek) {
    console.log('Selected trek:', trek);
    // router.navigate(['/trek', trek.id])
  }
  onBook(trek) {
    console.log('Booking trek:', trek);
    // router.navigate(['/book', trek.id])
  }
  diffLabel(d) {
    return {
      easy: '🟢 Easy',
      moderate: '🟡 Moderate',
      hard: '🔴 Hard'
    }[d] ?? d;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function SearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["app-search"]],
    decls: 86,
    vars: 14,
    consts: [["searchForm", "ngForm"], [1, "search-page"], ["aria-label", "Search hero", 1, "hero"], ["aria-hidden", "true", 1, "hero-bg"], ["viewBox", "0 0 1440 320", "preserveAspectRatio", "xMidYMid slice", 1, "mountains"], ["d", "M0 320 L120 180 L260 260 L380 140 L500 220 L640 80  L760 200 L880 100 L1000 200 L1140 60  L1280 180 L1440 120 L1440 320Z", 1, "m-far"], ["d", "M0 320 L80  220 L200 280 L340 160 L460 240 L580 120 L700 230 L840 130 L960 210 L1100 90  L1240 200 L1360 150 L1440 190 L1440 320Z", 1, "m-mid"], ["d", "M0 320 L60  250 L160 300 L280 200 L420 270 L540 170 L660 260 L780 180 L920 250 L1060 160 L1180 240 L1320 170 L1440 220 L1440 320Z", 1, "m-near"], ["d", "M0 320 L0  300 L100 280 L220 310 L380 260 L520 300 L660 270 L800 305 L960 265 L1100 295 L1260 270 L1440 290 L1440 320Z", 1, "m-front"], [1, "hero-stars"], [1, "hero-mist"], [1, "hero-content"], [1, "hero-eyebrow"], [1, "hero-title"], [1, "hero-title-accent"], [1, "hero-sub"], ["aria-label", "Trek and Tour Search", 1, "search-form", 3, "ngSubmit"], [1, "field-group", "field-location"], ["aria-hidden", "true", 1, "field-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "field-inner"], ["for", "location", 1, "field-label"], ["id", "location", "name", "location", "type", "text", "placeholder", "Himalayas, Patagonia\u2026", "autocomplete", "off", "aria-label", "Location", 1, "field-input", 3, "ngModelChange", "ngModel"], ["aria-hidden", "true", 1, "field-divider"], [1, "field-group", "field-difficulty"], ["d", "M3 17l4-8 4 4 3-6 4 10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["for", "difficulty", 1, "field-label"], ["id", "difficulty", "name", "difficulty", "aria-label", "Difficulty level", 1, "field-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "easy"], ["value", "moderate"], ["value", "hard"], [1, "field-group", "field-price"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M14.5 9a3.5 3.5 0 00-5 0v6a3.5 3.5 0 005 0"], ["x1", "12", "y1", "6", "x2", "12", "y2", "7"], ["x1", "12", "y1", "17", "x2", "12", "y2", "18"], [1, "field-label"], [1, "price-range"], ["id", "priceMin", "name", "priceMin", "type", "number", "placeholder", "Min", "aria-label", "Minimum price", 1, "field-input", "price-input", 3, "ngModelChange", "ngModel"], ["aria-hidden", "true", 1, "price-sep"], ["id", "priceMax", "name", "priceMax", "type", "number", "placeholder", "Max", "aria-label", "Maximum price", 1, "field-input", "price-input", 3, "ngModelChange", "ngModel"], [1, "field-group", "field-date"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["for", "date", 1, "field-label"], ["id", "date", "name", "date", "type", "date", "aria-label", "Departure date", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "submit", "aria-label", "Search treks and tours", 1, "search-btn", 3, "disabled"], ["aria-hidden", "true", 1, "scroll-cue"], [1, "scroll-line"], ["aria-label", "Search results", 1, "results-section"], ["role", "alert", "aria-live", "assertive", 1, "state-error"], ["aria-live", "polite", 1, "state-empty"], ["aria-hidden", "true", 1, "btn-spinner"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35", "stroke-linecap", "round"], ["d", "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "error-retry", 3, "click"], ["aria-live", "polite", "aria-label", "Loading results", 1, "results-header", "skeleton-header"], [1, "skeleton", "skeleton-text", "w-40"], [1, "trek-grid"], ["aria-hidden", "true", 1, "trek-card", "skeleton-card"], [1, "skeleton", "card-img-skel"], [1, "card-body"], [1, "skeleton", "skeleton-text", "w-60"], [1, "skeleton", "skeleton-text", "w-80", 2, "margin-top", "8px"], [1, "skeleton", "skeleton-text", "w-40", 2, "margin-top", "8px"], [1, "results-header"], [1, "results-count"], [1, "count-num"], [1, "results-sort"], [1, "sort-label"], [1, "sort-btn", "active"], [1, "sort-btn"], ["role", "list", 1, "trek-grid"], ["role", "listitem", 1, "trek-card", 3, "animation-delay"], ["role", "listitem", 1, "trek-card", 3, "click"], [1, "card-visual"], [1, "card-img-bg"], ["viewBox", "0 0 400 120", "preserveAspectRatio", "xMidYMax slice", "aria-hidden", "true", 1, "card-landscape"], ["fill", "rgba(0,0,0,0.25)"], [1, "card-badges"], [1, "badge-diff"], [1, "badge-feat"], ["class", "card-duration", 4, "ngIf"], [1, "card-location"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "width", "11", "height", "11"], ["d", "M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z"], ["cx", "8", "cy", "6", "r", "1.5"], [1, "card-name"], [1, "card-desc"], [1, "card-meta"], [1, "meta-rating"], [1, "meta-group"], [1, "card-footer"], [1, "card-price"], [1, "price-from"], [1, "price-val"], [1, "price-per"], [1, "book-btn", 3, "click"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "12", "height", "12"], ["d", "M3 8h10M9 4l4 4-4 4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-label", "Departure date", 1, "card-date-ribbon"], [1, "card-duration"], ["viewBox", "0 0 16 16", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "width", "12", "height", "12"], ["cx", "8", "cy", "8", "r", "6.5"], ["d", "M8 4.5V8l2.5 2", "stroke-linecap", "round"], ["viewBox", "0 0 16 16", "fill", "currentColor", "width", "12", "height", "12"], ["d", "M8 1l2 4.5H15l-4 3.5 1.5 5L8 11l-4.5 3 1.5-5-4-3.5H6z"], [1, "meta-rating-count"], ["d", "M11 14v-1.5a3.5 3.5 0 00-7 0V14"], ["cx", "7.5", "cy", "5.5", "r", "2.5"], ["d", "M14 14v-1.5a3.5 3.5 0 00-2-3.17"], ["cx", "13", "cy", "5", "r", "2"], ["aria-hidden", "true", 1, "empty-graphic"], ["viewBox", "0 0 120 80", "fill", "none"], ["d", "M10 70 L35 20 L55 45 L75 5 L100 40 L115 25 L115 70Z", "fill", "rgba(126,167,107,0.12)", "stroke", "rgba(126,167,107,0.35)", "stroke-width", "1.5", "stroke-linejoin", "round"], ["cx", "95", "cy", "18", "r", "8", "fill", "rgba(255,178,80,0.15)", "stroke", "rgba(255,178,80,0.4)", "stroke-width", "1.5"], ["d", "M30 70 Q60 55 90 70", "stroke", "rgba(126,167,107,0.3)", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "empty-title"], [1, "empty-sub"], [1, "empty-reset", 3, "click"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "section", 2)(2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 5)(5, "path", 6)(6, "path", 7)(7, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 9)(9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 11)(11, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Discover the world's finest trails");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Find Your");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Next Summit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "form", 16, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSearch());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17)(23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "path", 20)(26, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 22)(28, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Where");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchParams.location, $event) || (ctx.searchParams.location = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 26)(33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22)(37, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SearchComponent_Template_select_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchParams.difficulty, $event) || (ctx.searchParams.difficulty = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Any level");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\uD83D\uDFE2 Easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\uD83D\uDFE1 Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\uD83D\uDD34 Hard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 34)(50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "circle", 35)(53, "path", 36)(54, "line", 37)(55, "line", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 22)(57, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Budget (\u20B9)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 40)(60, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchParams.priceMin, $event) || (ctx.searchParams.priceMin = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\u2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_63_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchParams.priceMax, $event) || (ctx.searchParams.priceMax = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 44)(66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "rect", 45)(69, "line", 46)(70, "line", 47)(71, "line", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 22)(73, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "When");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchParams.date, $event) || (ctx.searchParams.date = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](77, SearchComponent_Conditional_77_Template, 3, 0)(78, SearchComponent_Conditional_78_Template, 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](82, SearchComponent_Conditional_82_Template, 12, 1, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](83, SearchComponent_Conditional_83_Template, 5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](84, SearchComponent_Conditional_84_Template, 17, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](85, SearchComponent_Conditional_85_Template, 12, 0, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.treksTours.length > 0 ? ctx.treksTours.length + " expeditions found" : "2,400+ curated treks & tours worldwide");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchParams.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchParams.difficulty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchParams.priceMin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchParams.priceMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchParams.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.loading ? 77 : 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.error ? 82 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.loading ? 83 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.loading && ctx.treksTours.length > 0 ? 84 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.loading && ctx.treksTours.length === 0 && !ctx.error ? 85 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Barlow[_ngcontent-%COMP%]:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600&family=Barlow[_ngcontent-%COMP%] + Condensed[_ngcontent-%COMP%]:wght@500;600[_ngcontent-%COMP%];700&display=swap)[_ngcontent-%COMP%];\n\n[_ngcontent-%COMP%]:root {\n  --night: #0b0f14;\n  --night-mid: #111820;\n  --night-light: #1a2535;\n  --forest: #2d4a22;\n  --forest-mid: #3d6130;\n  --forest-lt: #7ea76b;\n  --stone: #f0ece4;\n  --stone-dark: #e0d8cc;\n  --stone-deeper:#c8bfb0;\n  --amber: #e8921a;\n  --amber-lt: #ffb250;\n  --amber-pale: #fff4e0;\n  --sky: #4a9bbe;\n  --danger: #c0392b;\n  --text-hero: rgba(255,255,255,0.95);\n  --text-sub: rgba(255,255,255,0.55);\n  --text-dark: #1e2b18;\n  --text-mid: #5a6e4a;\n  --text-muted: #8a9e7a;\n  --grad-default:linear-gradient(135deg,#2d4a22,#7ea76b);\n  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.search-page[_ngcontent-%COMP%] {\n  font-family: \"Barlow\", sans-serif;\n  background: var(--stone);\n  min-height: 100vh;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 540px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: 80px 24px 120px;\n}\n\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(175deg, var(--night) 0%, #0f2030 55%, #1a3520 100%);\n  z-index: 0;\n}\n\n.mountains[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.mountains[_ngcontent-%COMP%]   .m-far[_ngcontent-%COMP%] {\n  fill: rgba(255, 255, 255, 0.04);\n  animation: _ngcontent-%COMP%_drift 25s ease-in-out infinite alternate;\n}\n.mountains[_ngcontent-%COMP%]   .m-mid[_ngcontent-%COMP%] {\n  fill: rgba(255, 255, 255, 0.06);\n  animation: _ngcontent-%COMP%_drift 20s ease-in-out infinite alternate-reverse;\n}\n.mountains[_ngcontent-%COMP%]   .m-near[_ngcontent-%COMP%] {\n  fill: rgba(45, 74, 34, 0.35);\n}\n.mountains[_ngcontent-%COMP%]   .m-front[_ngcontent-%COMP%] {\n  fill: rgba(26, 37, 53, 0.9);\n}\n\n@keyframes _ngcontent-%COMP%_drift {\n  from {\n    transform: translateX(-8px);\n  }\n  to {\n    transform: translateX(8px);\n  }\n}\n.hero-stars[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(1px 1px at 15% 25%, rgba(255, 255, 255, 0.7) 0%, transparent 100%), radial-gradient(1px 1px at 42% 12%, rgba(255, 255, 255, 0.5) 0%, transparent 100%), radial-gradient(1px 1px at 68% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 100%), radial-gradient(1px 1px at 83% 8%, rgba(255, 255, 255, 0.4) 0%, transparent 100%), radial-gradient(1px 1px at 27% 45%, rgba(255, 255, 255, 0.3) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 55% 20%, rgba(255, 200, 100, 0.8) 0%, transparent 100%), radial-gradient(1px 1px at 90% 35%, rgba(255, 255, 255, 0.5) 0%, transparent 100%);\n  animation: _ngcontent-%COMP%_twinkle 4s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_twinkle {\n  from {\n    opacity: 0.6;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.hero-mist[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: -10%;\n  right: -10%;\n  height: 140px;\n  background: radial-gradient(ellipse 120% 100% at 50% 100%, rgba(45, 74, 34, 0.4) 0%, transparent 70%);\n  filter: blur(20px);\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  animation: _ngcontent-%COMP%_heroIn 0.9s var(--ease-out) both;\n}\n\n@keyframes _ngcontent-%COMP%_heroIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--amber-lt);\n  margin-bottom: 16px;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: clamp(42px, 8vw, 78px);\n  font-weight: 700;\n  color: var(--text-hero);\n  line-height: 1.05;\n  letter-spacing: -0.02em;\n}\n.hero-title-accent[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--amber-lt);\n  display: block;\n}\n\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 400;\n  color: var(--text-sub);\n  margin-top: 16px;\n  letter-spacing: 0.02em;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: stretch;\n  background: rgba(255, 255, 255, 0.97);\n  border-radius: 18px;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45), 0 4px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.15);\n  margin-top: 40px;\n  width: 100%;\n  max-width: 900px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_formRise 1s var(--ease-out) 0.2s both;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n}\n\n@keyframes _ngcontent-%COMP%_formRise {\n  from {\n    opacity: 0;\n    transform: translateY(32px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  flex: 1;\n  min-width: 0;\n  transition: background 0.2s;\n}\n.field-group[_ngcontent-%COMP%]:hover {\n  background: rgba(45, 74, 34, 0.03);\n}\n.field-group[_ngcontent-%COMP%]:focus-within {\n  background: rgba(232, 146, 26, 0.04);\n}\n\n.field-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n  color: var(--forest-lt);\n}\n.field-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.field-inner[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-bottom: 2px;\n}\n\n.field-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: \"Barlow\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-dark);\n  padding: 0;\n}\n.field-input[_ngcontent-%COMP%]::placeholder {\n  color: #b0a898;\n  font-weight: 400;\n}\n.field-input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0.3;\n  cursor: pointer;\n}\n.field-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\nselect.field-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: none;\n  -webkit-appearance: none;\n}\n\n.price-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.price-input[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.price-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .price-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n\n.price-sep[_ngcontent-%COMP%] {\n  color: var(--stone-deeper);\n  font-size: 16px;\n}\n\n.field-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: var(--stone-dark);\n  margin: 12px 0;\n  flex-shrink: 0;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: var(--forest);\n  color: #fff;\n  border: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 0 32px;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s;\n  min-width: 120px;\n}\n.search-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--forest-mid);\n}\n.search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.search-btn.loading[_ngcontent-%COMP%] {\n  background: var(--forest-mid);\n}\n\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.scroll-cue[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1;\n}\n\n.scroll-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4));\n  animation: _ngcontent-%COMP%_scrollPulse 2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_scrollPulse {\n  0%, 100% {\n    opacity: 0;\n    transform: scaleY(0.3);\n    transform-origin: top;\n  }\n  50% {\n    opacity: 1;\n    transform: scaleY(1);\n  }\n}\n.results-section[_ngcontent-%COMP%] {\n  padding: 40px 32px 80px;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.results-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.results-count[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-mid);\n  font-weight: 400;\n}\n.results-count[_ngcontent-%COMP%]   .count-num[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-right: 6px;\n  vertical-align: middle;\n}\n\n.results-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.sort-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-family: \"Barlow Condensed\", sans-serif;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.sort-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--stone-dark);\n  font-family: \"Barlow\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  padding: 5px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.sort-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--forest-lt);\n  color: var(--text-dark);\n}\n.sort-btn.active[_ngcontent-%COMP%] {\n  background: var(--forest);\n  color: #fff;\n  border-color: var(--forest);\n}\n\n.trek-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 24px;\n  list-style: none;\n  padding: 0;\n}\n\n.trek-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid var(--stone-dark);\n  box-shadow: 0 2px 8px rgba(45, 74, 34, 0.06);\n  cursor: pointer;\n  position: relative;\n  transition: transform 0.25s var(--ease-out), box-shadow 0.25s;\n  animation: _ngcontent-%COMP%_cardIn 0.5s var(--ease-out) both;\n}\n.trek-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 48px rgba(45, 74, 34, 0.14), 0 4px 12px rgba(45, 74, 34, 0.08);\n}\n\n@keyframes _ngcontent-%COMP%_cardIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.card-visual[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  overflow: hidden;\n}\n\n.card-img-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  transition: transform 0.4s var(--ease-out);\n}\n\n.trek-card[_ngcontent-%COMP%]:hover   .card-img-bg[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n\n.card-landscape[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 80px;\n}\n\n.card-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.badge-diff[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 3px 9px;\n  border-radius: 6px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.badge-diff.diff-easy[_ngcontent-%COMP%] {\n  background: rgba(45, 180, 80, 0.85);\n  color: #fff;\n}\n.badge-diff.diff-moderate[_ngcontent-%COMP%] {\n  background: rgba(232, 160, 26, 0.85);\n  color: #fff;\n}\n.badge-diff.diff-hard[_ngcontent-%COMP%] {\n  background: rgba(192, 57, 43, 0.85);\n  color: #fff;\n}\n\n.badge-feat[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 3px 9px;\n  border-radius: 6px;\n  background: rgba(0, 0, 0, 0.45);\n  color: var(--amber-lt);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.card-duration[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(0, 0, 0, 0.45);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 6px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 18px 20px 20px;\n}\n\n.card-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n  font-style: italic;\n  margin-bottom: 6px;\n}\n.card-location[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.card-name[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-dark);\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-mid);\n  line-height: 1.55;\n  margin-top: 6px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n\n.meta-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--amber);\n}\n.meta-rating[_ngcontent-%COMP%]   .meta-rating-count[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-weight: 400;\n  font-size: 11px;\n}\n\n.meta-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid var(--stone-dark);\n}\n\n.card-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.card-price[_ngcontent-%COMP%]   .price-from[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.card-price[_ngcontent-%COMP%]   .price-val[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text-dark);\n}\n.card-price[_ngcontent-%COMP%]   .price-per[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.book-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--forest);\n  color: #fff;\n  border: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  padding: 8px 16px;\n  border-radius: 9px;\n  cursor: pointer;\n  transition: background 0.2s, gap 0.2s;\n}\n.book-btn[_ngcontent-%COMP%]:hover {\n  background: var(--forest-mid);\n  gap: 9px;\n}\n\n.card-date-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 12px;\n  background: var(--amber);\n  color: #fff;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 3px 9px;\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(232, 146, 26, 0.45);\n}\n\n.skeleton-header[_ngcontent-%COMP%] {\n  min-height: 36px;\n}\n\n.skeleton[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--stone-dark) 25%, var(--stone-deeper) 50%, var(--stone-dark) 75%);\n  background-size: 200% 100%;\n  border-radius: 6px;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.skeleton-card[_ngcontent-%COMP%]   .card-img-skel[_ngcontent-%COMP%] {\n  height: 180px;\n  border-radius: 0;\n}\n\n.skeleton-text[_ngcontent-%COMP%] {\n  height: 14px;\n}\n\n.w-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.w-60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.w-80[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.state-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 24px;\n  background: #fdecea;\n  border: 1px solid rgba(192, 57, 43, 0.15);\n  border-radius: 14px;\n  color: var(--danger);\n  margin-bottom: 28px;\n}\n.state-error[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.state-error[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.state-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(192, 57, 43, 0.75);\n}\n\n.error-retry[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--danger);\n  color: #fff;\n  border: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 8px 16px;\n  border-radius: 9px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.error-retry[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.state-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 80px 32px;\n  gap: 10px;\n  text-align: center;\n}\n.state-empty[_ngcontent-%COMP%]   .empty-graphic[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.state-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 80px;\n}\n\n.empty-title[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-dark);\n}\n\n.empty-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  max-width: 280px;\n  line-height: 1.6;\n}\n\n.empty-reset[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: var(--forest);\n  color: #fff;\n  border: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.07em;\n  text-transform: uppercase;\n  padding: 10px 24px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.empty-reset[_ngcontent-%COMP%]:hover {\n  background: var(--forest-mid);\n}\n\n@media (max-width: 900px) {\n  .search-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    border-radius: 16px;\n  }\n  .field-group[_ngcontent-%COMP%] {\n    padding: 12px 20px;\n  }\n  .field-divider[_ngcontent-%COMP%] {\n    width: auto;\n    height: 1px;\n    margin: 0 20px;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    padding: 16px 32px;\n    justify-content: center;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 64px 20px 100px;\n  }\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    min-height: 480px;\n    padding: 56px 16px 90px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .search-form[_ngcontent-%COMP%] {\n    margin-top: 28px;\n    border-radius: 14px;\n  }\n  .results-section[_ngcontent-%COMP%] {\n    padding: 28px 16px 60px;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 18px;\n  }\n  .results-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .sort-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sort-btn.active[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .price-input[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsMENBQUE7QUFMRjs7QUFRQTtFQUFJLHNCQUFBO0VBQXdCLFNBQUE7RUFBVyxVQUFBO0FBRnZDOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLCtFQUFBO0VBQ0EsVUFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMRjtBQU9FO0VBQVUsK0JBQUE7RUFBOEIsbURBQUE7QUFIMUM7QUFJRTtFQUFVLCtCQUFBO0VBQThCLDJEQUFBO0FBQTFDO0FBQ0U7RUFBVSw0QkFBQTtBQUVaO0FBREU7RUFBVSwyQkFBQTtBQUlaOztBQURBO0VBQ0U7SUFBTywyQkFBQTtFQUtQO0VBSkE7SUFBTywwQkFBQTtFQU9QO0FBQ0Y7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLCtsQkFDRTtFQU9GLG9EQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUFPLFlBQUE7RUFDUDtFQUFBO0lBQU8sVUFBQTtF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QW9HZDtFQWxHQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFvR0Y7RUFqR0E7SUFBbUIsdUJBQUE7RUFvR25CO0VBbEdBO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBb0dGO0VBakdBO0lBQWtCLHNCQUFBO0lBQXdCLHVCQUFBO0VBcUcxQztFQW5HQTtJQUFZLGFBQUE7RUFzR1o7RUFyR0E7SUFBbUIsY0FBQTtFQXdHbkI7RUF0R0E7SUFBZSxXQUFBO0VBeUdmO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZXMgZm9yIFNlYXJjaCBDb21wb25lbnQgKi9cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLy8gIFRyZWsgJiBUb3VyIMOCwrcgU2VhcmNoIENvbXBvbmVudFxuLy8gIEFlc3RoZXRpYzogQ2luZW1hdGljIEFscGluZSDDgsK3IERhcmsgaGVybyArIGVhcnRoeSBjYXJkc1xuLy8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNjAwOzAsNzAwOzEsNjAwJmZhbWlseT1CYXJsb3c6d2dodEAzMDA7NDAwOzUwMDs2MDAmZmFtaWx5PUJhcmxvdytDb25kZW5zZWQ6d2dodEA1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuOnJvb3Qge1xuICAtLW5pZ2h0OiAgICAgICAjMGIwZjE0O1xuICAtLW5pZ2h0LW1pZDogICAjMTExODIwO1xuICAtLW5pZ2h0LWxpZ2h0OiAjMWEyNTM1O1xuICAtLWZvcmVzdDogICAgICAjMmQ0YTIyO1xuICAtLWZvcmVzdC1taWQ6ICAjM2Q2MTMwO1xuICAtLWZvcmVzdC1sdDogICAjN2VhNzZiO1xuICAtLXN0b25lOiAgICAgICAjZjBlY2U0O1xuICAtLXN0b25lLWRhcms6ICAjZTBkOGNjO1xuICAtLXN0b25lLWRlZXBlcjojYzhiZmIwO1xuICAtLWFtYmVyOiAgICAgICAjZTg5MjFhO1xuICAtLWFtYmVyLWx0OiAgICAjZmZiMjUwO1xuICAtLWFtYmVyLXBhbGU6ICAjZmZmNGUwO1xuICAtLXNreTogICAgICAgICAjNGE5YmJlO1xuICAtLWRhbmdlcjogICAgICAjYzAzOTJiO1xuICAtLXRleHQtaGVybzogICByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpO1xuICAtLXRleHQtc3ViOiAgICByZ2JhKDI1NSwyNTUsMjU1LDAuNTUpO1xuICAtLXRleHQtZGFyazogICAjMWUyYjE4O1xuICAtLXRleHQtbWlkOiAgICAjNWE2ZTRhO1xuICAtLXRleHQtbXV0ZWQ6ICAjOGE5ZTdhO1xuICAtLWdyYWQtZGVmYXVsdDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyZDRhMjIsIzdlYTc2Yik7XG4gIC0tZWFzZS1vdXQ6ICAgIGN1YmljLWJlemllcigwLjIyLCAxLCAwLjM2LCAxKTtcbn1cblxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuXG4uc2VhcmNoLXBhZ2Uge1xuICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0b25lKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuLy8gIEhFUk9cbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuLmhlcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDU0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogODBweCAyNHB4IDEyMHB4O1xufVxuXG4vLyDDosKUwoDDosKUwoAgQmFja2dyb3VuZCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3NWRlZywgdmFyKC0tbmlnaHQpIDAlLCAjMGYyMDMwIDU1JSwgIzFhMzUyMCAxMDAlKTtcbiAgei1pbmRleDogMDtcbn1cblxuLm1vdW50YWlucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLm0tZmFyICB7IGZpbGw6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGFuaW1hdGlvbjogZHJpZnQgMjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTsgfVxuICAubS1taWQgIHsgZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTsgYW5pbWF0aW9uOiBkcmlmdCAyMHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7IH1cbiAgLm0tbmVhciB7IGZpbGw6IHJnYmEoNDUsNzQsMzQsMC4zNSk7IH1cbiAgLm0tZnJvbnR7IGZpbGw6IHJnYmEoMjYsMzcsNTMsMC45KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGRyaWZ0IHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTsgfVxuICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7IH1cbn1cblxuLmhlcm8tc3RhcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDE1JSAyNSUsIHJnYmEoMjU1LDI1NSwyNTUsMC43KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNDIlIDEyJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDAlLCB0cmFuc3BhcmVudCAxMDAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA2OCUgMzAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNikgMCUsIHRyYW5zcGFyZW50IDEwMCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDgzJSA4JSwgIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwJSwgdHJhbnNwYXJlbnQgMTAwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMjclIDQ1JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjMpIDAlLCB0cmFuc3BhcmVudCAxMDAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNTUlIDIwJSwgcmdiYSgyNTUsMjAwLDEwMCwwLjgpIDAlLCB0cmFuc3BhcmVudCAxMDAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA5MCUgMzUlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNSkgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICBhbmltYXRpb246IHR3aW5rbGUgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHR3aW5rbGUge1xuICBmcm9tIHsgb3BhY2l0eTogMC42OyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi5oZXJvLW1pc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDsgbGVmdDogLTEwJTsgcmlnaHQ6IC0xMCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIDEyMCUgMTAwJSBhdCA1MCUgMTAwJSwgcmdiYSg0NSw3NCwzNCwwLjQpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICBmaWx0ZXI6IGJsdXIoMjBweCk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBIZXJvIENvbnRlbnQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaGVyby1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogaGVyb0luIDAuOXMgdmFyKC0tZWFzZS1vdXQpIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgaGVyb0luIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5oZXJvLWV5ZWJyb3cge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1hbWJlci1sdCk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoNDJweCwgOHZ3LCA3OHB4KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtaGVybyk7XG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcblxuICAmLWFjY2VudCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiB2YXIoLS1hbWJlci1sdCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmhlcm8tc3ViIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zdWIpO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4vLyDDosKUwoDDosKUwoAgU2VhcmNoIEZvcm0gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc2VhcmNoLWZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOTcpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3gtc2hhZG93OlxuICAgIDAgMjRweCA2NHB4IHJnYmEoMCwwLDAsMC40NSksXG4gICAgMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMiksXG4gICAgMCAwIDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbmltYXRpb246IGZvcm1SaXNlIDFzIHZhcigtLWVhc2Utb3V0KSAwLjJzIGJvdGg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbn1cblxuQGtleWZyYW1lcyBmb3JtUmlzZSB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzJweCkgc2NhbGUoMC45Nyk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxufVxuXG4uZmllbGQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoNDUsNzQsMzQsMC4wMyk7IH1cbiAgJjpmb2N1cy13aXRoaW4geyBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwxNDYsMjYsMC4wNCk7IH1cbn1cblxuLmZpZWxkLWljb24ge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcbiAgY29sb3I6IHZhcigtLWZvcmVzdC1sdCk7XG5cbiAgc3ZnIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgfVxufVxuXG4uZmllbGQtaW5uZXIgeyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cblxuLmZpZWxkLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmZpZWxkLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogI2IwYTg5ODsgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4gICZbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBvcGFjaXR5OiAwLjM7IGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIG9wdGlvbiB7IGJhY2tncm91bmQ6ICNmZmY7IH1cbn1cblxuc2VsZWN0LmZpZWxkLWlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5wcmljZS1yYW5nZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4ucHJpY2UtaW5wdXQge1xuICB3aWR0aDogNzBweDtcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxufVxuXG4ucHJpY2Utc2VwIHsgY29sb3I6IHZhcigtLXN0b25lLWRlZXBlcik7IGZvbnQtc2l6ZTogMTZweDsgfVxuXG4uZmllbGQtZGl2aWRlciB7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0b25lLWRhcmspO1xuICBtYXJnaW46IDEycHggMDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBTZWFyY2ggQnV0dG9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNlYXJjaC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvcmVzdCk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIG1pbi13aWR0aDogMTIwcHg7XG5cbiAgc3ZnIHsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgfVxuXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QtbWlkKTsgfVxuXG4gICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjc7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cblxuICAmLmxvYWRpbmcgeyBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QtbWlkKTsgfVxufVxuXG4uYnRuLXNwaW5uZXIge1xuICB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuN3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4geyB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxuXG4vLyDDosKUwoDDosKUwoAgU2Nyb2xsIGN1ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zY3JvbGwtY3VlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2Nyb2xsLWxpbmUge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkpO1xuICBhbmltYXRpb246IHNjcm9sbFB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbFB1bHNlIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlWSgwLjMpOyB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7IH1cbiAgNTAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZVkoMSk7IH1cbn1cblxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4vLyAgUkVTVUxUUyBTRUNUSU9OXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbi5yZXN1bHRzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0MHB4IDMycHggODBweDtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vLyDDosKUwoDDosKUwoAgUmVzdWx0cyBoZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ucmVzdWx0cy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucmVzdWx0cy1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbWlkKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAuY291bnQtbnVtIHtcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbi5yZXN1bHRzLXNvcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbn1cblxuLnNvcnQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnNvcnQtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3RvbmUtZGFyayk7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjJzO1xuXG4gICY6aG92ZXIgeyBib3JkZXItY29sb3I6IHZhcigtLWZvcmVzdC1sdCk7IGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspOyB9XG4gICYuYWN0aXZlIHsgYmFja2dyb3VuZDogdmFyKC0tZm9yZXN0KTsgY29sb3I6ICNmZmY7IGJvcmRlci1jb2xvcjogdmFyKC0tZm9yZXN0KTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgVHJlayBHcmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRyZWstZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vLyDDosKUwoDDosKUwoAgVHJlayBDYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnRyZWstY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0b25lLWRhcmspO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg0NSw3NCwzNCwwLjA2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyB2YXIoLS1lYXNlLW91dCksIGJveC1zaGFkb3cgMC4yNXM7XG4gIGFuaW1hdGlvbjogY2FyZEluIDAuNXMgdmFyKC0tZWFzZS1vdXQpIGJvdGg7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCA0OHB4IHJnYmEoNDUsNzQsMzQsMC4xNCksIDAgNHB4IDEycHggcmdiYSg0NSw3NCwzNCwwLjA4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNhcmRJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgQ2FyZCBWaXN1YWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2FyZC12aXN1YWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWltZy1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIHZhcigtLWVhc2Utb3V0KTtcbn1cblxuLnRyZWstY2FyZDpob3ZlciAuY2FyZC1pbWctYmcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xufVxuXG4uY2FyZC1sYW5kc2NhcGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDsgbGVmdDogMDsgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5jYXJkLWJhZGdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4OyBsZWZ0OiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYmFkZ2UtZGlmZiB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcblxuICAmLmRpZmYtZWFzeSAgICAgeyBiYWNrZ3JvdW5kOiByZ2JhKDQ1LDE4MCw4MCwwLjg1KTsgIGNvbG9yOiAjZmZmOyB9XG4gICYuZGlmZi1tb2RlcmF0ZSB7IGJhY2tncm91bmQ6IHJnYmEoMjMyLDE2MCwyNiwwLjg1KTsgY29sb3I6ICNmZmY7IH1cbiAgJi5kaWZmLWhhcmQgICAgIHsgYmFja2dyb3VuZDogcmdiYSgxOTIsNTcsNDMsMC44NSk7ICBjb2xvcjogI2ZmZjsgfVxufVxuXG4uYmFkZ2UtZmVhdCB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNDUpO1xuICBjb2xvcjogdmFyKC0tYW1iZXItbHQpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbn1cblxuLmNhcmQtZHVyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDsgcmlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNDUpO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBDYXJkIEJvZHkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMThweCAyMHB4IDIwcHg7XG59XG5cbi5jYXJkLWxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcblxuICBzdmcgeyBmbGV4LXNocmluazogMDsgfVxufVxuXG4uY2FyZC1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xufVxuXG4uY2FyZC1kZXNjIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1taWQpO1xuICBsaW5lLWhlaWdodDogMS41NTtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZC1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubWV0YS1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tYW1iZXIpO1xuXG4gIC5tZXRhLXJhdGluZy1jb3VudCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zaXplOiAxMXB4OyB9XG59XG5cbi5tZXRhLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4vLyDDosKUwoDDosKUwoAgQ2FyZCBGb290ZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uY2FyZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3RvbmUtZGFyayk7XG59XG5cbi5jYXJkLXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDRweDtcblxuICAucHJpY2UtZnJvbSB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXN0eWxlOiBpdGFsaWM7IH1cbiAgLnByaWNlLXZhbCAgeyBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTsgfVxuICAucHJpY2UtcGVyICB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG59XG5cbi5ib29rLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBnYXAgMC4ycztcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tZm9yZXN0LW1pZCk7IGdhcDogOXB4OyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgCBEYXRlIFJpYmJvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5jYXJkLWRhdGUtcmliYm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7IHJpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlcik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMjMyLDE0NiwyNiwwLjQ1KTtcbn1cblxuLy8gw6LClMKAw6LClMKAIFNrZWxldG9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnNrZWxldG9uLWhlYWRlciB7IG1pbi1oZWlnaHQ6IDM2cHg7IH1cblxuLnNrZWxldG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1zdG9uZS1kYXJrKSAyNSUsIHZhcigtLXN0b25lLWRlZXBlcikgNTAlLCB2YXIoLS1zdG9uZS1kYXJrKSA3NSUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBhbmltYXRpb246IHNoaW1tZXIgMS40cyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzaGltbWVyIHtcbiAgZnJvbSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxuICB0byAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxufVxuXG4uc2tlbGV0b24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAuY2FyZC1pbWctc2tlbCB7IGhlaWdodDogMTgwcHg7IGJvcmRlci1yYWRpdXM6IDA7IH1cbn1cblxuLnNrZWxldG9uLXRleHQgeyBoZWlnaHQ6IDE0cHg7IH1cbi53LTQwIHsgd2lkdGg6IDQwJTsgfVxuLnctNjAgeyB3aWR0aDogNjAlOyB9XG4udy04MCB7IHdpZHRoOiA4MCU7IH1cblxuLy8gw6LClMKAw6LClMKAIFN0YXRlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5zdGF0ZS1lcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgYmFja2dyb3VuZDogI2ZkZWNlYTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTIsNTcsNDMsMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuXG4gIHN2ZyB7IHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7IGZsZXgtc2hyaW5rOiAwOyBtYXJnaW4tdG9wOiAycHg7IH1cbiAgc3Ryb25nIHsgZGlzcGxheTogYmxvY2s7IGZvbnQtc2l6ZTogMTRweDsgbWFyZ2luLWJvdHRvbTogMnB4OyB9XG4gIHAgeyBmb250LXNpemU6IDEzcHg7IGNvbG9yOiByZ2JhKDE5Miw1Nyw0MywwLjc1KTsgfVxufVxuXG4uZXJyb3ItcmV0cnkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICY6aG92ZXIgeyBvcGFjaXR5OiAwLjg1OyB9XG59XG5cbi5zdGF0ZS1lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMzJweDtcbiAgZ2FwOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmVtcHR5LWdyYXBoaWMgeyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgc3ZnIHsgd2lkdGg6IDEyMHB4OyBoZWlnaHQ6IDgwcHg7IH1cbn1cblxuLmVtcHR5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5cbi5lbXB0eS1zdWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmVtcHR5LXJlc2V0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1mb3Jlc3QtbWlkKTsgfVxufVxuXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcbi8vICBSRVNQT05TSVZFXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcblxuLy8gw6LClMKAw6LClMKAIFRhYmxldDogc3RhY2sgZm9ybSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuc2VhcmNoLWZvcm0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuXG4gIC5maWVsZC1ncm91cCB7IHBhZGRpbmc6IDEycHggMjBweDsgfVxuXG4gIC5maWVsZC1kaXZpZGVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgfVxuXG4gIC5zZWFyY2gtYnRuIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaGVybyB7IHBhZGRpbmc6IDY0cHggMjBweCAxMDBweDsgfVxufVxuXG4vLyDDosKUwoDDosKUwoAgTW9iaWxlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvIHsgbWluLWhlaWdodDogNDgwcHg7IHBhZGRpbmc6IDU2cHggMTZweCA5MHB4OyB9XG5cbiAgLmhlcm8tdGl0bGUgeyBmb250LXNpemU6IDQwcHg7IH1cblxuICAuc2VhcmNoLWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgfVxuXG4gIC5yZXN1bHRzLXNlY3Rpb24geyBwYWRkaW5nOiAyOHB4IDE2cHggNjBweDsgfVxuXG4gIC50cmVrLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMThweDtcbiAgfVxuXG4gIC5yZXN1bHRzLWhlYWRlciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG5cbiAgLnNvcnQtYnRuIHsgZGlzcGxheTogbm9uZTsgfVxuICAuc29ydC1idG4uYWN0aXZlIHsgZGlzcGxheTogYmxvY2s7IH1cblxuICAucHJpY2UtaW5wdXQgeyB3aWR0aDogNjBweDsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  }));
}
// ── Mock data ─────────────────────────────────────────────────────────────────
_staticBlock();
const MOCK_TREKS = [{
  id: '1',
  name: 'Roopkund Glacier Trek',
  location: 'Uttarakhand, India',
  difficulty: 'hard',
  price: 18500,
  duration: '8 days',
  date: '2025-03-15',
  rating: 4.9,
  reviews: 312,
  maxGroupSize: 14,
  featured: true,
  description: 'Trek to the mysterious skeleton lake at 16,500 ft through dense forests and alpine meadows.',
  coverColor: 'linear-gradient(135deg, #1a3a5c 0%, #2d6a8a 50%, #4a9bbe 100%)',
  landscapePath: 'M0 120 L50 50 L90 80 L140 20 L200 55 L260 10 L330 50 L400 30 L400 120Z'
}, {
  id: '2',
  name: 'Valley of Flowers',
  location: 'Chamoli, Uttarakhand',
  difficulty: 'easy',
  price: 9800,
  duration: '6 days',
  date: '2025-07-10',
  rating: 4.7,
  reviews: 548,
  maxGroupSize: 20,
  description: 'A UNESCO World Heritage trek through a blooming alpine meadow bursting with rare Himalayan flora.',
  coverColor: 'linear-gradient(135deg, #1e4a2a 0%, #3d8a50 50%, #7ea76b 100%)',
  landscapePath: 'M0 120 L80 70 L140 95 L200 50 L280 75 L360 40 L400 60 L400 120Z'
}, {
  id: '3',
  name: 'Chadar Frozen River',
  location: 'Zanskar, Ladakh',
  difficulty: 'hard',
  price: 24000,
  duration: '10 days',
  date: '2025-01-20',
  rating: 5.0,
  reviews: 189,
  maxGroupSize: 10,
  featured: true,
  description: 'Walk on the frozen Zanskar River — one of the most extreme winter treks on earth.',
  coverColor: 'linear-gradient(135deg, #1a1f3a 0%, #2d3f6a 60%, #5a7ac4 100%)',
  landscapePath: 'M0 120 L40 60 L100 85 L170 30 L240 65 L310 20 L380 50 L400 40 L400 120Z'
}, {
  id: '4',
  name: 'Hampta Pass Crossing',
  location: 'Kullu, Himachal Pradesh',
  difficulty: 'moderate',
  price: 12500,
  duration: '5 days',
  date: '2025-06-05',
  rating: 4.6,
  reviews: 421,
  maxGroupSize: 16,
  description: 'Cross a dramatic high-altitude pass connecting the lush Kullu valley to the barren Lahaul plateau.',
  coverColor: 'linear-gradient(135deg, #3a2a1a 0%, #7a5030 50%, #c49060 100%)',
  landscapePath: 'M0 120 L60 80 L120 55 L190 85 L250 35 L320 60 L390 30 L400 35 L400 120Z'
}, {
  id: '5',
  name: 'Kedarkantha Summit',
  location: 'Uttarkashi, Uttarakhand',
  difficulty: 'moderate',
  price: 8200,
  duration: '6 days',
  date: '2025-12-22',
  rating: 4.8,
  reviews: 676,
  maxGroupSize: 18,
  description: 'The perfect winter trek with stunning 360° Himalayan views from the 12,500 ft summit.',
  coverColor: 'linear-gradient(135deg, #2a1a3a 0%, #5a3a8a 60%, #9a70c4 100%)',
  landscapePath: 'M0 120 L70 55 L130 80 L200 25 L270 60 L340 35 L400 55 L400 120Z'
}, {
  id: '6',
  name: 'Dzongri & Goecha La',
  location: 'Sikkim, India',
  difficulty: 'hard',
  price: 21000,
  duration: '11 days',
  date: '2025-04-18',
  rating: 4.9,
  reviews: 143,
  maxGroupSize: 12,
  description: 'Trek close to Mt. Kanchenjunga, the world\'s third highest peak, through pristine rhododendron forests.',
  coverColor: 'linear-gradient(135deg, #1a3a2a 0%, #2d6a5a 50%, #5abaa0 100%)',
  landscapePath: 'M0 120 L50 65 L110 90 L160 35 L230 70 L300 15 L370 50 L400 40 L400 120Z'
}];

/***/ },

/***/ 9045
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModule: () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ 4626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent
}];
class SearchModule {
  static #_ = _staticBlock = () => (this.ɵfac = function SearchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SearchModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SearchModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map