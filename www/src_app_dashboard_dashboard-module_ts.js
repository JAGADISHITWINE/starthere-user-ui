"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard-module_ts"],{

/***/ 5722
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard-module.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 2320);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent
}];
class DashboardModule {
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: DashboardModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DashboardModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2320
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard */ 2625);
var _staticBlock;









function DashboardComponent_div_0_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_0_button_34_Template_button_click_0_listener() {
      const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.setFilter(filter_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.selectedFilter === filter_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", filter_r2.label, " ");
  }
}
function DashboardComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Upcoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Treks");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.filteredTreks == null ? null : ctx_r2.filteredTreks.length, " expeditions available");
  }
}
function DashboardComponent_div_0_section_36_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](h_r5);
  }
}
function DashboardComponent_div_0_section_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 25)(6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 27)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 29)(15, "div", 30)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, DashboardComponent_div_0_section_36_div_1_span_23_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 34)(25, "div", 35)(26, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "/ person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardComponent_div_0_section_36_div_1_Template_button_click_30_listener() {
      const trek_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewDetails(trek_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Book Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const trek_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", trek_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", trek_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](trek_r6.difficulty == null ? null : trek_r6.difficulty.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", trek_r6.difficulty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", trek_r6.rating, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](trek_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\uD83D\uDCCD ", trek_r6.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u23F1 ", trek_r6.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\uD83D\uDC65 ", trek_r6.groupSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \uD83D\uDCC5 ", trek_r6.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", trek_r6.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](trek_r6.price);
  }
}
function DashboardComponent_div_0_section_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DashboardComponent_div_0_section_36_div_1_Template, 34, 13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.filteredTreks);
  }
}
function DashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "section", 4)(2, "div", 5)(3, "div", 6)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Explore the");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Wild Ghats");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Weekend escapes through ancient forests,");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "misty ridgelines & hidden waterfalls.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " View All Treks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "48+");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Active Routes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 10)(24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "4.9\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Avg Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 10)(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "3.2k");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Trekkers / yr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, DashboardComponent_div_0_button_34_Template, 2, 3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, DashboardComponent_div_0_div_35_Template, 7, 1, "div", 13)(36, DashboardComponent_div_0_section_36_Template, 2, 1, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.filters);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filteredTreks == null ? null : ctx_r2.filteredTreks.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.filteredTreks == null ? null : ctx_r2.filteredTreks.length);
  }
}
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\uD83C\uDF3F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Loading Expeditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Treks Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Try adjusting your filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class DashboardComponent {
  constructor(router, dashboardService) {
    this.router = router;
    this.dashboardService = dashboardService;
    this.treks = []; // Changed to array
    this.selectedFilter = 'all';
    this.isLoading = false;
    this.errorMessage = '';
    this.filters = [{
      id: 'all',
      label: 'All Treks'
    }, {
      id: 'easy',
      label: 'Easy'
    }, {
      id: 'moderate',
      label: 'Moderate'
    }, {
      id: 'challenging',
      label: 'Challenging'
    }];
  }
  ngOnInit() {
    this.isLoading = true;
    this.dashboardService.loadDashboardData().subscribe(data => {
      if (data.success === true) {
        this.isLoading = false;
        // Check if data.data is an array or single object
        if (Array.isArray(data.data)) {
          this.treks = data.data.map(trek => this.mapTourData(trek));
        } else {
          // If it's a single object, wrap it in an array
          this.treks = [this.mapTourData(data.data)];
        }
      }
    });
  }
  mapTourData(result) {
    return {
      id: result.id,
      name: result.name,
      location: result.location,
      duration: result.duration,
      difficulty: result.difficulty,
      price: Number(result.price),
      rating: 4.8,
      reviewCount: 145,
      groupSize: `${result.min_participants} - ${result.max_participants}`,
      // Cover image URL construction
      image: result.cover_image ? `http://localhost:4001/${result.cover_image}` : null,
      date: this.formatDateRange(result.startDate, result.endDate),
      highlights: result.highlights || []
    };
  }
  formatDateRange(start, end) {
    if (!start || !end) return '';
    const s = new Date(start);
    const e = new Date(end);
    const sDay = s.getDate().toString().padStart(2, '0');
    const eDay = e.getDate().toString().padStart(2, '0');
    const sMonth = s.toLocaleString('en-GB', {
      month: 'short'
    });
    const eMonth = e.toLocaleString('en-GB', {
      month: 'short'
    });
    const sYear = s.getFullYear();
    const eYear = e.getFullYear();
    // same day
    if (s.toDateString() === e.toDateString()) {
      return `${sDay} ${sMonth} ${sYear}`;
    }
    // same month & year
    if (sMonth === eMonth && sYear === eYear) {
      return `${sDay}-${eDay} ${sMonth} ${sYear}`;
    }
    // different month or year
    if (sYear === eYear) {
      return `${sDay} ${sMonth} - ${eDay} ${eMonth} ${sYear}`;
    }
    // different year
    return `${sDay} ${sMonth} ${sYear} - ${eDay} ${eMonth} ${eYear}`;
  }
  get filteredTreks() {
    if (this.selectedFilter === 'all') {
      return this.treks;
    }
    return this.treks.filter(trek => trek.difficulty.toLowerCase() === this.selectedFilter);
  }
  setFilter(filterId) {
    this.selectedFilter = filterId;
  }
  getDifficultyColor(difficulty) {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'moderate':
        return 'warning';
      case 'challenging':
        return 'danger';
      default:
        return 'medium';
    }
  }
  viewDetails(trek) {
    this.router.navigate(['/tour-details', trek.id]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dashboard__WEBPACK_IMPORTED_MODULE_7__.Dashboard));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 3,
    vars: 3,
    consts: [["class", "page-wrapper", 4, "ngIf"], ["class", "loader-wrapper", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-wrapper"], [1, "hero-section"], [1, "hero-content"], [1, "hero-text"], ["routerLink", "upcomingtours", 1, "hero-button"], [1, "btn-icon"], [1, "hero-stats"], [1, "stat-item"], [1, "filter-section"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "content-header", 4, "ngIf"], ["class", "trek-grid", 4, "ngIf"], [3, "click"], [1, "content-header"], [1, "content-title"], [1, "content-meta"], [1, "trek-grid"], ["class", "trek-card", 4, "ngFor", "ngForOf"], [1, "trek-card"], [1, "trek-image-container"], ["loading", "lazy", 3, "src", "alt"], [1, "difficulty-badge"], [1, "card-rating"], [1, "star"], [1, "trek-header"], [1, "location"], [1, "trek-content"], [1, "trek-details"], [1, "trek-date"], [1, "highlights"], ["class", "chip", 4, "ngFor", "ngForOf"], [1, "trek-footer"], [1, "price"], [1, "price-amount"], [1, "price-label"], [1, "book-btn", 3, "click"], [1, "btn-arrow"], [1, "chip"], [1, "loader-wrapper"], [1, "loader-icon"], [1, "custom-loader"], [1, "empty-state"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 37, 3, "div", 0)(1, DashboardComponent_div_1_Template, 6, 0, "div", 1)(2, DashboardComponent_div_2_Template, 5, 0, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && (!ctx.filteredTreks || !ctx.filteredTreks.length));
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0[_ngcontent-%COMP%], 600[_ngcontent-%COMP%];0[_ngcontent-%COMP%], 700[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 400[_ngcontent-%COMP%];1[_ngcontent-%COMP%], 600&family=Jost[_ngcontent-%COMP%]:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600&display=swap)[_ngcontent-%COMP%];@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --radius-card: 4px;\n  --40px: 40px;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #faf7f2;\n  color: #1a1f1b;\n  font-family: \"Jost\", system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageReveal 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_pageReveal {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 92vh;\n  min-height: 600px;\n  overflow: hidden;\n  background: url(\"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85\") center/cover no-repeat;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(14, 22, 16, 0.92) 0%, rgba(14, 22, 16, 0.3) 55%, transparent 100%);\n  z-index: 1;\n}\n.hero-section[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23g)' opacity='.045'/%3E%3C/svg%3E\");\n  z-index: 2;\n  pointer-events: none;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 7vw 72px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: flex-end;\n  gap: 24px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%] {\n  max-width: 700px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #ffffff;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-eyebrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 32px;\n  height: 1px;\n  background: #7fb896;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: clamp(3rem, 7vw, 6.5rem);\n  font-weight: 700;\n  line-height: 0.95;\n  color: #f5f0e8;\n  letter-spacing: -0.01em;\n  \n\n  -webkit-text-stroke: 0.1px white;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #7fb896;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px 0 36px;\n  color: rgba(245, 240, 232, 0.65);\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: 0.03em;\n  line-height: 1.7;\n  max-width: 420px;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-left: 1px solid rgba(245, 240, 232, 0.12);\n  padding-left: 32px;\n  margin-bottom: 4px;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  padding: 18px 0;\n  border-bottom: 1px solid rgba(245, 240, 232, 0.08);\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #f5f0e8;\n  line-height: 1;\n}\n.hero-content[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.7rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  margin-top: 4px;\n  display: block;\n}\n\n.hero-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #f5f0e8;\n  color: #1a1f1b;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 14px 26px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.hero-button[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  background: #3a6349;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.hero-button[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  transform: translateY(-2px);\n}\n.hero-button[_ngcontent-%COMP%]:hover   .btn-icon[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n\n.hero-rule[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 0 7vw;\n  background: #2e3b30;\n}\n.hero-rule[_ngcontent-%COMP%]   .rule-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #7fb896;\n  padding: 14px 24px 14px 0;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n  margin-right: 24px;\n}\n.hero-rule[_ngcontent-%COMP%]   .rule-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  display: flex;\n  gap: 8px;\n  padding: 10px 0;\n  scrollbar-width: none;\n}\n.hero-rule[_ngcontent-%COMP%]   .rule-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.filter-section[_ngcontent-%COMP%] {\n  background: #2e3b30;\n  padding: 0 7vw;\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  scrollbar-width: none;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.filter-section[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.filter-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 16px 20px;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: rgb(255, 255, 255);\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.filter-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #f5f0e8;\n}\n.filter-section[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #7fb896;\n  border-bottom-color: #7fb896;\n}\n\n.content-header[_ngcontent-%COMP%] {\n  padding: 56px 7vw 32px;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.content-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2.6rem;\n  font-weight: 600;\n  color: #1a1f1b;\n  letter-spacing: -0.01em;\n}\n.content-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #3a6349;\n}\n.content-header[_ngcontent-%COMP%]   .content-meta[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.82rem;\n  letter-spacing: 0.06em;\n}\n\n.trek-grid[_ngcontent-%COMP%] {\n  padding: 0 7vw 100px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 28px;\n}\n\n.trek-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  border: 1px solid rgba(58, 99, 73, 0.14);\n  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.35s;\n  display: flex;\n  flex-direction: column;\n}\n.trek-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 32px 64px rgba(30, 50, 35, 0.14);\n  border-color: rgba(58, 99, 73, 0.28);\n}\n.trek-card[_ngcontent-%COMP%]:hover   .trek-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.trek-card[_ngcontent-%COMP%]:hover   .book-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n\n.trek-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 230px;\n  overflow: hidden;\n}\n.trek-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);\n  display: block;\n}\n.trek-image-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%);\n  pointer-events: none;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  left: 14px;\n  z-index: 1;\n  font-size: 0.67rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 5px 12px;\n  border-radius: 40px;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge.easy[_ngcontent-%COMP%] {\n  background: rgba(26, 71, 49, 0.88);\n  color: #6ee7b7;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge.moderate[_ngcontent-%COMP%] {\n  background: rgba(61, 42, 10, 0.88);\n  color: #fbbf24;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge.hard[_ngcontent-%COMP%] {\n  background: rgba(59, 18, 18, 0.88);\n  color: #f87171;\n}\n.trek-image-container[_ngcontent-%COMP%]   .difficulty-badge[_ngcontent-%COMP%]:not(.easy):not(.moderate):not(.hard) {\n  background: rgba(58, 99, 73, 0.88);\n  color: #d1fae5;\n}\n.trek-image-container[_ngcontent-%COMP%]   .card-rating[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  right: 14px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 30px;\n  padding: 4px 10px;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.trek-image-container[_ngcontent-%COMP%]   .card-rating[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 0.75rem;\n}\n\n.trek-header[_ngcontent-%COMP%] {\n  padding: 20px 20px 0;\n  border-bottom: 1px solid #ede8df;\n  padding-bottom: 16px;\n}\n.trek-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 1.4rem;\n  font-weight: 600;\n  line-height: 1.2;\n  color: #1a1f1b;\n  margin: 0 0 6px;\n  letter-spacing: -0.01em;\n}\n.trek-header[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #5a8a6a;\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n}\n\n.trek-content[_ngcontent-%COMP%] {\n  padding: 16px 20px 20px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.trek-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.trek-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: #ede8df;\n  color: #2e3b30;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 5px 10px;\n  border-radius: 6px;\n  flex: 1;\n  justify-content: center;\n}\n\n.trek-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #8a9b8e;\n  font-size: 0.8rem;\n  margin-bottom: 14px;\n  padding-bottom: 14px;\n  border-bottom: 1px dashed rgba(58, 99, 73, 0.15);\n}\n\n.highlights[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.highlights[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid rgba(58, 99, 73, 0.25);\n  color: #3a6349;\n  font-size: 0.7rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  padding: 4px 10px;\n  border-radius: 30px;\n  transition: background 0.2s, color 0.2s;\n}\n.highlights[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]:hover {\n  background: #3a6349;\n  color: #fff;\n}\n\n.trek-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 16px;\n  border-top: 1px solid #ede8df;\n}\n.trek-footer[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.trek-footer[_ngcontent-%COMP%]   .price-amount[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 1.9rem;\n  font-weight: 700;\n  color: #3a6349;\n  line-height: 1;\n}\n.trek-footer[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.75rem;\n}\n\n.book-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #1a1f1b;\n  color: #f5f0e8;\n  font-family: \"Jost\", system-ui, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 10px 18px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.book-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);\n  font-size: 0.85rem;\n}\n.book-btn[_ngcontent-%COMP%]:hover {\n  background: #3a6349;\n}\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  background: #faf7f2;\n}\n.loader-wrapper[_ngcontent-%COMP%]   .loader-icon[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_breathe 1.8s ease-in-out infinite;\n}\n.loader-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #8a9b8e;\n  animation: _ngcontent-%COMP%_breathe 1.8s ease-in-out infinite;\n}\n\n.custom-loader[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@keyframes _ngcontent-%COMP%_breathe {\n  0%, 100% {\n    opacity: 0.4;\n    transform: scale(0.97);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  text-align: center;\n  padding: 40px;\n}\n.empty-state[_ngcontent-%COMP%]::before {\n  content: \"\uD83C\uDFD4\";\n  font-size: 3.5rem;\n  opacity: 0.25;\n  margin-bottom: 20px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Cormorant Garamond\", Georgia, serif;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2e3b30;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8a9b8e;\n  font-size: 0.9rem;\n  letter-spacing: 0.04em;\n}\n\n@media (max-width: 900px) {\n  .hero-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-bottom: 56px;\n  }\n  .hero-content[_ngcontent-%COMP%]   .hero-stats[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .content-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n@media (max-width: 600px) {\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.8rem;\n  }\n  .trek-grid[_ngcontent-%COMP%] {\n    padding: 0 4vw 60px;\n  }\n  .filter-section[_ngcontent-%COMP%] {\n    padding: 0 4vw;\n  }\n  .content-header[_ngcontent-%COMP%] {\n    padding: 40px 4vw 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFJaEI7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFNQTtFQUF5QixzQkFBQTtFQUF3QixTQUFBO0VBQVcsVUFBQTtBQUE1RDs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFHQTtFQUNFLDhEQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtFQUVuQjtFQURBO0lBQU8sVUFBQTtJQUFZLHdCQUFBO0VBS25CO0FBQ0Y7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrSEFDRTtBQUdKO0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkdBQ0U7RUFDRixVQUFBO0FBQUo7QUFJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwrVEFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUZKOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFIRjtBQU1FO0VBQ0UsZ0JBQUE7QUFKSjtBQU9FO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFMTjtBQVNBO0VBQ0UsaURBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFD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OlsiLy8gw6LClMKAw6LClMKAw6LClMKAIEdPT0dMRSBGT05UUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudCtHYXJhbW9uZDppdGFsLHdnaHRAMCw0MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw2MDAmZmFtaWx5PUpvc3Q6d2dodEAzMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUT0tFTlMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG46cm9vdCB7XG5cbiAgLS1yYWRpdXMtY2FyZDogNHB4O1xuICAtLTQwcHg6IDQwcHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSRVNFVCAmIEJBU0Ugw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmFmN2YyO1xuICBjb2xvcjogIzFhMWYxYjtcbiAgZm9udC1mYW1pbHk6ICdKb3N0Jywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFBBR0UgV1JBUFBFUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5wYWdlLXdyYXBwZXIge1xuICBhbmltYXRpb246IHBhZ2VSZXZlYWwgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDtcbn1cblxuQGtleWZyYW1lcyBwYWdlUmV2ZWFsIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBIRVJPIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmhlcm8tc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5MnZoO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDpcbiAgICB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2OTA1OTI1MzQ2LTIxYmRhNGQzMmRmND93PTE4MDAmcT04NScpXG4gICAgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0O1xuXG4gIC8vIENpbmVtYXRpYyBncmFkaWVudCDDosKAwpQgZGFyayBhdCBib3R0b20sIHN1YnRsZSBhdCB0b3BcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDpcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMTQsIDIyLCAxNiwgMC45MikgMCUsIHJnYmEoMTQsIDIyLCAxNiwgMC4zKSA1NSUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAvLyBHcmFpbiB0ZXh0dXJlXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNTYnIGhlaWdodD0nMjU2JyUzRSUzQ2ZpbHRlciBpZD0nZyclM0UlM0NmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScuOScgbnVtT2N0YXZlcz0nNCcgc3RpdGNoVGlsZXM9J3N0aXRjaCcvJTNFJTNDL2ZpbHRlciUzRSUzQ3JlY3Qgd2lkdGg9JzI1NicgaGVpZ2h0PScyNTYnIGZpbHRlcj0ndXJsKCUyM2cpJyBvcGFjaXR5PScuMDQ1Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmhlcm8tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCA3dncgNzJweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDI0cHg7XG5cbiAgLy8gTGVmdDogaGVhZGxpbmUgYmxvY2tcbiAgLmhlcm8tdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgfVxuXG4gIC5oZXJvLWV5ZWJyb3cge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQ6ICM3ZmI4OTY7XG4gICAgfVxuICB9XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCA3dncsIDYuNXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjk1O1xuICBjb2xvcjogI2Y1ZjBlODtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG5cbiAgLyogV2hpdGUgT3V0bGluZSAqL1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjFweCB3aGl0ZTtcbn1cblxuaDEgZW0ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjN2ZiODk2O1xufVxuXG4gIHAge1xuICAgIG1hcmdpbjogMjBweCAwIDM2cHg7XG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDAsIDIzMiwgMC42NSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gIH1cblxuICAvLyBSaWdodDogdmVydGljYWwgc3RhdCBzdHJpcFxuICAuaGVyby1zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjQ1LCAyNDAsIDIzMiwgMC4xMik7XG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuXG4gIC5zdGF0LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDE4cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDUsIDI0MCwgMjMyLCAwLjA4KTtcblxuICAgICY6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuICAgIHN0cm9uZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogI2Y1ZjBlODtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cblxuICAgIHNtYWxsIHtcbiAgICAgIGNvbG9yOiM4YTliOGU7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi5oZXJvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWYwZTg7XG4gIGNvbG9yOiAjMWExZjFiO1xuICBmb250LWZhbWlseTogJ0pvc3QnLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTRweCAyNnB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzO1xuICAuYnRuLWljb24ge1xuICAgIHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7XG4gICAgYmFja2dyb3VuZDogIzNhNjM0OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcblxuICAgIC5idG4taWNvbiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpOyB9XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBydWxlIHRoYXQgYnJpZGdlcyBoZXJvIGFuZCBjb250ZW50XG4uaGVyby1ydWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwO1xuICBwYWRkaW5nOiAwIDd2dztcbiAgYmFja2dyb3VuZDojMmUzYjMwO1xuXG4gIC5ydWxlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3ZmI4OTY7XG4gICAgcGFkZGluZzogMTRweCAyNHB4IDE0cHggMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cblxuICAucnVsZS1zY3JvbGwge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGSUxURVIgU0VDVElPTiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5maWx0ZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IzJlM2IzMDtcbiAgcGFkZGluZzogMCA3dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICBidXR0b24ge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycywgYm9yZGVyLWNvbG9yIDAuMnM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmNWYwZTg7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICM3ZmI4OTY7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjN2ZiODk2O1xuICAgIH1cbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ09OVEVOVCBBUkVBIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgcGFkZGluZzogNTZweCA3dncgMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLmNvbnRlbnQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzFhMWYxYjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgY29sb3I6ICMzYTYzNDk7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtbWV0YSB7XG4gICAgY29sb3I6ICM4YTliOGU7XG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRSRUsgR1JJRCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50cmVrLWdyaWQge1xuICBwYWRkaW5nOiAwIDd2dyAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzQwcHgsIDFmcikpO1xuICBnYXA6IDI4cHg7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUUkVLIENBUkQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4udHJlay1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU4LCA5OSwgNzMsIDAuMTQpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMzVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm9yZGVyLWNvbG9yIDAuMzVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDMycHggNjRweCByZ2JhKDMwLCA1MCwgMzUsIDAuMTQpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSg1OCwgOTksIDczLCAwLjI4KTtcblxuICAgIC50cmVrLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG5cbiAgICAuYm9vay1idG4gLmJ0bi1hcnJvdyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSU1BR0Vcbi50cmVrLWltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41NXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLy8gQm90dG9tIGZhZGVcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDAuNCkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAuZGlmZmljdWx0eS1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTRweDtcbiAgICBsZWZ0OiAxNHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1zaXplOiAwLjY3cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG5cbiAgICAmLmVhc3kgICAgIHsgYmFja2dyb3VuZDogcmdiYSgyNiwgNzEsIDQ5LCAwLjg4KTsgY29sb3I6ICM2ZWU3Yjc7IH1cbiAgICAmLm1vZGVyYXRlIHsgYmFja2dyb3VuZDogcmdiYSg2MSwgNDIsIDEwLCAwLjg4KTsgY29sb3I6ICNmYmJmMjQ7IH1cbiAgICAmLmhhcmQgICAgIHsgYmFja2dyb3VuZDogcmdiYSg1OSwgMTgsIDE4LCAwLjg4KTsgY29sb3I6ICNmODcxNzE7IH1cbiAgICAvLyBEZWZhdWx0IGZhbGxiYWNrXG4gICAgJjpub3QoLmVhc3kpOm5vdCgubW9kZXJhdGUpOm5vdCguaGFyZCkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg1OCwgOTksIDczLCAwLjg4KTtcbiAgICAgIGNvbG9yOiAjZDFmYWU1O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLXJhdGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTRweDtcbiAgICByaWdodDogMTRweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgIC5zdGFyIHsgY29sb3I6ICNmYmJmMjQ7IGZvbnQtc2l6ZTogMC43NXJlbTsgfVxuICB9XG59XG5cbi8vIEhFQURFUlxuLnRyZWstaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlOGRmO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgY29sb3I6ICMxYTFmMWI7XG4gICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICB9XG5cbiAgLmxvY2F0aW9uIHtcbiAgICBjb2xvcjogIzVhOGE2YTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIH1cbn1cblxuLy8gQ09OVEVOVFxuLnRyZWstY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMjBweCAyMHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyBNRVRBIFJPV1xuLnRyZWstZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWRlOGRmO1xuICAgIGNvbG9yOiAjMmUzYjMwO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi8vIERBVEVcbi50cmVrLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgY29sb3I6ICM4YTliOGU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDU4LCA5OSwgNzMsIDAuMTUpO1xufVxuXG4vLyBISUdITElHSFRTXG4uaGlnaGxpZ2h0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLmNoaXAge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTgsIDk5LCA3MywgMC4yNSk7XG4gICAgY29sb3I6ICMzYTYzNDk7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBjb2xvciAwLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjM2E2MzQ5O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG59XG5cbi8vIEZPT1RFUlxuLnRyZWstZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGU4ZGY7XG5cbiAgLnByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBnYXA6IDRweDtcbiAgfVxuXG4gIC5wcmljZS1hbW91bnQge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzNhNjM0OTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIC5wcmljZS1sYWJlbCB7XG4gICAgY29sb3I6ICM4YTliOGU7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi5ib29rLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogIzFhMWYxYjtcbiAgY29sb3I6ICNmNWYwZTg7XG4gIGZvbnQtZmFtaWx5OiAnSm9zdCcsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcblxuICAuYnRuLWFycm93IHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzYTYzNDk7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIExPQURFUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5sb2FkZXItd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmYWY3ZjI7XG5cbiAgLmxvYWRlci1pY29uIHtcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBhbmltYXRpb246IGJyZWF0aGUgMS44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzhhOWI4ZTtcbiAgICBhbmltYXRpb246IGJyZWF0aGUgMS44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxufVxuXG4uY3VzdG9tLWxvYWRlciB7XG4gIC8vIHJlcGxhY2VkIGJ5IC5sb2FkZXItaWNvbiDDosKAwpQga2VlcCBmb3IgQW5ndWxhciBjb21wYXRpYmlsaXR5XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgYnJlYXRoZSB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMC40OyB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpOyB9XG4gIDUwJSAgICAgICB7IG9wYWNpdHk6IDE7ICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRU1QVFkgU1RBVEUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJ8Owwp/Cj8KUJztcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzJlM2IzMDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogIzhhOWI4ZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBSRVNQT05TSVZFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5oZXJvLWNvbnRlbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1NnB4O1xuXG4gICAgLmhlcm8tc3RhdHMgeyBkaXNwbGF5OiBub25lOyB9XG4gIH1cblxuICAudHJlay1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cblxuICAuY29udGVudC1oZWFkZXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDRweDsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlcm8tY29udGVudCBoMSB7IGZvbnQtc2l6ZTogMi44cmVtOyB9XG4gIC50cmVrLWdyaWQgeyBwYWRkaW5nOiAwIDR2dyA2MHB4OyB9XG4gIC5maWx0ZXItc2VjdGlvbiB7IHBhZGRpbmc6IDAgNHZ3OyB9XG4gIC5jb250ZW50LWhlYWRlciB7IHBhZGRpbmc6IDQwcHggNHZ3IDI0cHg7IH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
}
_staticBlock();

/***/ },

/***/ 2625
/*!****************************************!*\
  !*** ./src/app/dashboard/dashboard.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class Dashboard {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  loadDashboardData() {
    return this.http.get(`${this.API}/dashData`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Dashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Dashboard,
    factory: Dashboard.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_dashboard_dashboard-module_ts.js.map