"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about-module_ts"],{

/***/ 6442
/*!***************************************!*\
  !*** ./src/app/about/about-module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent
}];
class AboutModule {
  static #_ = _staticBlock = () => (this.ɵfac = function AboutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AboutModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AboutModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2912
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;





function AboutComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.suffix);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r1.label);
  }
}
function AboutComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](value_r2.description);
  }
}
function AboutComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 51)(6, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", member_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", member_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r3.bio);
  }
}
function AboutComponent_li_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 54)(1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 56)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((i_r5 + 1).toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.description, " ");
  }
}
class AboutComponent {
  constructor() {
    this.team = [{
      name: "Rajesh Kumar",
      role: "Founder & Lead Trek Leader",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200",
      bio: "15+ years of trekking experience in the Western Ghats",
      suffix: "Founder & Lead Trek Leader"
    }, {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&size=200",
      bio: "Expert in trek logistics and safety protocols",
      suffix: "Operations Manager"
    }, {
      name: "Arjun Menon",
      role: "Senior Trek Guide",
      image: "https://ui-avatars.com/api/?name=Arjun+Menon&size=200",
      bio: "Certified wilderness first responder and mountaineer",
      suffix: "Senior Trek Guide"
    }, {
      name: "Meera Reddy",
      role: "Trek Guide & Naturalist",
      image: "https://ui-avatars.com/api/?name=Meera+Reddy&size=200",
      bio: "Wildlife enthusiast with deep knowledge of Western Ghats flora & fauna",
      suffix: "Trek Guide & Naturalist"
    }];
    this.values = [{
      icon: "shield-checkmark",
      title: "Safety First",
      description: "All our treks are led by certified guides with comprehensive safety protocols"
    }, {
      icon: "leaf",
      title: "Eco-Friendly",
      description: "We practice and promote responsible trekking with minimal environmental impact"
    }, {
      icon: "people",
      title: "Community",
      description: "Building a community of adventure enthusiasts who respect nature"
    }, {
      icon: "star",
      title: "Excellence",
      description: "Committed to providing exceptional experiences on every trek"
    }];
    this.stats = [{
      number: "10,000+",
      label: "Happy Trekkers",
      suffix: "Happy Trekkers"
    }, {
      number: "50+",
      label: "Trek Routes",
      suffix: "Trek Routes"
    }, {
      number: "15",
      label: "Years Experience",
      suffix: "Years Experience"
    }, {
      number: "4.8",
      label: "Average Rating",
      suffix: "Average Rating"
    }];
    this.safetyItems = [{
      icon: "shield-checkmark",
      title: "Certified Guides",
      description: "All treks led by certified guides with wilderness first aid training"
    }, {
      icon: "medkit",
      title: "Safety Briefings",
      description: "Comprehensive safety briefings before each trek"
    }, {
      icon: "call",
      title: "Emergency Communication",
      description: "Emergency communication devices on all treks"
    }, {
      icon: "cloudy-night",
      title: "Weather Monitoring",
      description: "Strict adherence to weather and trail conditions"
    }];
  }
  ngOnInit() {}
  static #_ = _staticBlock = () => (this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AboutComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 96,
    vars: 4,
    consts: [[1, "page"], [1, "hero"], [1, "hero-year"], [1, "hero-inner"], [1, "hero-label"], [1, "hero-title"], [1, "hero-sub"], [1, "story-section"], [1, "story-aside"], [1, "section-number"], [1, "section-tag"], [1, "section-heading"], [1, "story-text"], [1, "pull-quote"], [1, "stats-section"], [1, "stats-grid"], ["class", "stat-item", 4, "ngFor", "ngForOf"], [1, "values-section"], [1, "values-header"], [1, "section-number", 2, "margin-bottom", "0"], [1, "section-tag", 2, "margin-bottom", "6px"], [1, "values-grid"], ["class", "value-card", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "divider-line"], [1, "divider-mark"], [1, "team-section"], [1, "team-header-wrap"], [1, "team-grid"], ["class", "team-card", 4, "ngFor", "ngForOf"], [1, "safety-section"], [1, "safety-inner"], [1, "safety-aside"], [1, "safety-desc"], [1, "safety-list"], ["class", "safety-item", 4, "ngFor", "ngForOf"], [1, "footer-cta"], [1, "footer-cta-inner"], ["routerLink", "/upcoming-treks", 1, "cta-btn"], [1, "stat-item"], [1, "stat-number"], [1, "stat-accent"], [1, "stat-label"], [1, "value-card"], [1, "value-icon"], [1, "value-title"], [1, "value-desc"], [1, "team-card"], [1, "team-img"], [3, "src", "alt"], [1, "team-role-tag"], [1, "team-body"], [1, "team-name"], [1, "team-bio"], [1, "safety-item"], [1, "safety-num"], [1, "safety-text"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Exploring Karnataka's");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Wilderness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Since 2011 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Your trusted partner for adventure and exploration in the Western Ghats");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section", 7)(17, "div", 8)(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Born from");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "a love of");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "wild places");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12)(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Karnataka Adventures was born out of a passion for the Western Ghats and a desire to share its beauty with fellow adventurers. What started as weekend treks with friends has grown into one of Karnataka's most trusted trekking organisations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13)(33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\"We've introduced thousands of people to the majestic peaks, dense forests, and hidden waterfalls of Karnataka.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Our mission remains simple: to create safe, memorable, and responsible trekking experiences while preserving the natural beauty that makes these adventures possible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "section", 14)(38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AboutComponent_div_39_Template, 7, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "section", 17)(41, "div", 18)(42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div")(45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "What drives us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, AboutComponent_div_52_Template, 7, 3, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "div", 24)(55, "div", 25)(56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "section", 26)(58, "div", 27)(59, "div", 18)(60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div")(63, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "The people behind the trails");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Meet Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, AboutComponent_div_70_Template, 10, 5, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "section", 30)(72, "div", 31)(73, "div", 32)(74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Non-negotiable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Safety");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Standards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " Every measure below is a baseline, not an aspiration. We review and upgrade our protocols every season. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, AboutComponent_li_87_Template, 7, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "section", 36)(89, "div", 37)(90, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Ready to find your trail?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Browse our upcoming treks and join thousands of adventurers who've trusted Karnataka Adventures.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Explore Upcoming Treks \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.stats);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.values);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.safetyItems);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHrefDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #f9f5ee;\n  color: var(--ink);\n  font-family: \"DM Sans\", system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n.page[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_revealPage 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_revealPage {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  background: #1e3326;\n  position: relative;\n  overflow: hidden;\n  padding: 100px 8vw 80px;\n  min-height: 520px;\n  display: flex;\n  align-items: flex-end;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(ellipse 140% 120% at 80% 50%, rgba(93, 139, 106, 0.18) 0%, transparent 60%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cellipse cx='300' cy='300' rx='80' ry='50' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.06'/%3E%3Cellipse cx='300' cy='300' rx='140' ry='90' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.05'/%3E%3Cellipse cx='300' cy='300' rx='205' ry='135' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.04'/%3E%3Cellipse cx='300' cy='300' rx='280' ry='185' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.03'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right -60px center, right -60px center;\n  pointer-events: none;\n}\n.hero[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.hero-year[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 8vw;\n  z-index: 1;\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 7rem;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.04);\n  line-height: 1;\n  letter-spacing: -0.04em;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 780px;\n}\n\n.hero-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #8ab89a;\n  margin-bottom: 28px;\n}\n.hero-label[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 28px;\n  height: 1px;\n  background: #8ab89a;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(2.6rem, 6vw, 5.5rem);\n  font-weight: 900;\n  line-height: 1;\n  color: #f4ede0;\n  letter-spacing: -0.02em;\n  margin-bottom: 8px;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 700;\n  color: #8ab89a;\n}\n\n.hero-sub[_ngcontent-%COMP%] {\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-style: italic;\n  font-size: 1.1rem;\n  color: rgba(244, 237, 224, 0.5);\n  margin-top: 20px;\n  line-height: 1.6;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 0 8vw;\n  margin: 60px 0;\n}\n\n.divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: rgba(27, 31, 28, 0.12);\n}\n\n.divider-mark[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border: 1.5px solid #b05e28;\n  transform: rotate(45deg);\n  flex-shrink: 0;\n}\n\n.section-number[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 5rem;\n  font-weight: 900;\n  color: rgba(27, 31, 28, 0.06);\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: -16px;\n}\n\n.section-tag[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 500;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #b05e28;\n  margin-bottom: 16px;\n  display: block;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(1.8rem, 3.5vw, 2.6rem);\n  font-weight: 700;\n  color: #1e3326;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n}\n.section-heading[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #3d6b4f;\n}\n\n.story-section[_ngcontent-%COMP%] {\n  padding: 80px 8vw 0;\n  display: grid;\n  grid-template-columns: 1fr 1.6fr;\n  gap: 80px;\n  align-items: start;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.story-aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 40px;\n}\n\n.story-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-size: 1rem;\n  line-height: 1.85;\n  color: #3a4040;\n  margin-bottom: 24px;\n}\n\n.pull-quote[_ngcontent-%COMP%] {\n  border-left: 3px solid #b05e28;\n  padding: 4px 0 4px 24px;\n  margin: 36px 0;\n}\n.pull-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  font-style: italic;\n  color: #1e3326;\n  line-height: 1.4;\n  margin: 0 !important;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  background: #1e3326;\n  position: relative;\n  overflow: hidden;\n  margin: 80px 0;\n  padding: 80px 8vw;\n}\n.stats-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  border-right: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: center;\n}\n.stat-item[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.stat-item[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n\n.stat-number[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(2.8rem, 5vw, 4.5rem);\n  font-weight: 900;\n  color: #f4ede0;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  display: block;\n}\n\n.stat-accent[_ngcontent-%COMP%] {\n  color: #c97040;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 400;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: rgba(244, 237, 224, 0.45);\n  margin-top: 10px;\n}\n\n.values-section[_ngcontent-%COMP%] {\n  padding: 0 8vw 80px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.values-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 24px;\n  margin-bottom: 48px;\n}\n\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2px;\n  background: rgba(27, 31, 28, 0.08);\n  border: 1px solid rgba(27, 31, 28, 0.08);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.value-card[_ngcontent-%COMP%] {\n  background: #f9f5ee;\n  padding: 40px 32px;\n  transition: background 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  position: relative;\n  overflow: hidden;\n}\n.value-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #b05e28;\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  background: #f4ede0;\n}\n.value-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.value-card[_ngcontent-%COMP%]:hover   .value-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 20px;\n  display: block;\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  line-height: 1;\n}\n\n.value-title[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1e3326;\n  margin-bottom: 12px;\n  letter-spacing: -0.01em;\n}\n\n.value-desc[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #8a9d8e;\n  line-height: 1.7;\n}\n\n.team-section[_ngcontent-%COMP%] {\n  background: #ede4d3;\n  padding: 80px 8vw;\n  position: relative;\n}\n.team-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect x='29' y='0' width='1' height='60' fill='%231b1f1c' opacity='0.03'/%3E%3Crect x='0' y='29' width='60' height='1' fill='%231b1f1c' opacity='0.03'/%3E%3C/svg%3E\");\n  pointer-events: none;\n}\n\n.team-header-wrap[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  max-width: 1200px;\n  margin: 48px auto 0;\n  position: relative;\n  z-index: 1;\n}\n\n.team-card[_ngcontent-%COMP%] {\n  background: #f9f5ee;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s;\n}\n.team-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 48px rgba(27, 31, 28, 0.14);\n}\n.team-card[_ngcontent-%COMP%]:hover   .team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.team-img[_ngcontent-%COMP%] {\n  height: 260px;\n  overflow: hidden;\n  position: relative;\n}\n.team-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  filter: sepia(15%) saturate(85%);\n}\n.team-img[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(27, 31, 28, 0.55) 0%, transparent 55%);\n}\n\n.team-role-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 14px;\n  left: 14px;\n  z-index: 1;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #f4ede0;\n  background: rgba(27, 31, 28, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 4px 10px;\n  border-radius: 30px;\n}\n\n.team-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.team-name[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1e3326;\n  margin-bottom: 10px;\n  letter-spacing: -0.01em;\n}\n\n.team-bio[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #8a9d8e;\n  line-height: 1.7;\n}\n\n.safety-section[_ngcontent-%COMP%] {\n  padding: 80px 8vw;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.safety-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 80px;\n  align-items: start;\n}\n\n.safety-aside[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.safety-desc[_ngcontent-%COMP%] {\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-size: 0.95rem;\n  line-height: 1.8;\n  color: #3a4040;\n  font-style: italic;\n  margin-top: 20px;\n}\n\n.safety-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n}\n\n.safety-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  align-items: start;\n  gap: 16px;\n  padding: 20px 0;\n  border-bottom: 1px solid rgba(27, 31, 28, 0.08);\n  transition: padding-left 0.2s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.safety-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid rgba(27, 31, 28, 0.08);\n}\n.safety-item[_ngcontent-%COMP%]:hover {\n  padding-left: 4px;\n}\n.safety-item[_ngcontent-%COMP%]:hover   .safety-num[_ngcontent-%COMP%] {\n  color: #b05e28;\n}\n\n.safety-num[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: rgba(27, 31, 28, 0.1);\n  line-height: 1;\n  transition: color 0.2s;\n  padding-top: 2px;\n}\n\n.safety-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  line-height: 1.6;\n  color: #3a4040;\n  padding-top: 4px;\n}\n.safety-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #1e3326;\n  margin-bottom: 2px;\n}\n\n.footer-cta[_ngcontent-%COMP%] {\n  background: #1e3326;\n  position: relative;\n  overflow: hidden;\n  padding: 80px 8vw;\n  text-align: center;\n}\n.footer-cta[_ngcontent-%COMP%]::before {\n  content: \"SINCE 2011\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: 14vw;\n  font-weight: 900;\n  color: rgba(255, 255, 255, 0.03);\n  line-height: 0.85;\n  letter-spacing: -0.04em;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.footer-cta-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 560px;\n  margin: 0 auto;\n}\n\n.footer-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Fraunces\", Georgia, serif;\n  font-size: clamp(1.6rem, 3.5vw, 2.8rem);\n  font-weight: 900;\n  color: #f4ede0;\n  margin-bottom: 16px;\n  letter-spacing: -0.02em;\n}\n\n.footer-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(244, 237, 224, 0.5);\n  font-size: 0.9rem;\n  line-height: 1.7;\n  margin-bottom: 36px;\n  font-family: \"Libre Baskerville\", Georgia, serif;\n  font-style: italic;\n}\n\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  background: #b05e28;\n  color: #fff;\n  font-family: \"DM Sans\", system-ui, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 14px 30px;\n  border-radius: 2px;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: background 0.2s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  background: #c97040;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(176, 94, 40, 0.4);\n}\n\n@media (max-width: 900px) {\n  .story-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .story-aside[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 40px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n    padding: 0 0 32px;\n    text-align: left;\n  }\n  .stat-item[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .safety-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%], .stats-section[_ngcontent-%COMP%], .team-section[_ngcontent-%COMP%], .footer-cta[_ngcontent-%COMP%] {\n    padding-left: 6vw;\n    padding-right: 6vw;\n  }\n  .story-section[_ngcontent-%COMP%], .values-section[_ngcontent-%COMP%], .safety-section[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%] {\n    padding-left: 6vw;\n    padding-right: 6vw;\n  }\n  .hero-year[_ngcontent-%COMP%] {\n    font-size: 5rem;\n    top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBeUIsc0JBQUE7QUFEekI7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQVEsOERBQUE7QUFDUjs7QUFDQTtFQUNFO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0VBSW5CO0VBSEE7SUFBTyxVQUFBO0lBQVksd0JBQUE7RUFPbkI7QUFDRjtBQUpBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQU1GO0FBSEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaXFCQUNFO0VBRUYsNEJBQUE7RUFDQSwyREFBQTtFQUNBLG9CQUFBO0FBR0o7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4VEFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFBVyxVQUFBO0VBQ1gsVUFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFBYSxXQUFBO0VBQ2IsbUJBQUE7QUFFSjs7QUFFQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNB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a0JBQUE7RUErQ2hGO0VBOUNBO0lBQWEsZUFBQTtJQUFpQixTQUFBO0VBa0Q5QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClMKAw6LClMKAw6LClMKAIEZPTlRTIMOiwoDClCBhZGQgdG8gaW5kZXguaHRtbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi8vIEZyYXVuY2VzICsgTGlicmUgQmFza2VydmlsbGUgKyBETSBTYW5zXG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZjlmNWVlO1xuICBjb2xvcjogdmFyKC0taW5rKTtcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLnBhZ2UgeyBhbmltYXRpb246IHJldmVhbFBhZ2UgMC43cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDsgfVxuXG5Aa2V5ZnJhbWVzIHJldmVhbFBhZ2Uge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEhFUk8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uaGVybyB7XG4gIGJhY2tncm91bmQ6ICMxZTMzMjY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTAwcHggOHZ3IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDUyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgLy8gVG9wb2dyYXBoaWMgb3ZlcmxheVxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgMTQwJSAxMjAlIGF0IDgwJSA1MCUsIHJnYmEoOTMsMTM5LDEwNiwwLjE4KSAwJSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCclM0UlM0NlbGxpcHNlIGN4PSczMDAnIGN5PSczMDAnIHJ4PSc4MCcgcnk9JzUwJyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjUnIG9wYWNpdHk9JzAuMDYnLyUzRSUzQ2VsbGlwc2UgY3g9JzMwMCcgY3k9JzMwMCcgcng9JzE0MCcgcnk9JzkwJyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScwLjUnIG9wYWNpdHk9JzAuMDUnLyUzRSUzQ2VsbGlwc2UgY3g9JzMwMCcgY3k9JzMwMCcgcng9JzIwNScgcnk9JzEzNScgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMC41JyBvcGFjaXR5PScwLjA0Jy8lM0UlM0NlbGxpcHNlIGN4PSczMDAnIGN5PSczMDAnIHJ4PScyODAnIHJ5PScxODUnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmZmZmJyBzdHJva2Utd2lkdGg9JzAuNScgb3BhY2l0eT0nMC4wMycvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC02MHB4IGNlbnRlciwgcmlnaHQgLTYwcHggY2VudGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLy8gR3JhaW5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwMCcgaGVpZ2h0PSczMDAnJTNFJTNDZmlsdGVyIGlkPSduJyUzRSUzQ2ZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9Jy44JyBudW1PY3RhdmVzPSc0JyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8lM0UlM0MvZmlsdGVyJTNFJTNDcmVjdCB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgZmlsdGVyPSd1cmwoJTIzbiknIG9wYWNpdHk9Jy4wNCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uaGVyby15ZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7IHJpZ2h0OiA4dnc7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmhlcm8taW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1heC13aWR0aDogNzgwcHg7XG59XG5cbi5oZXJvLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzhhYjg5YTtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyOHB4OyBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjOGFiODlhO1xuICB9XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDIuNnJlbSwgNnZ3LCA1LjVyZW0pO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS4wO1xuICBjb2xvcjogI2Y0ZWRlMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBlbSB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICM4YWI4OWE7IH1cbn1cblxuLmhlcm8tc3ViIHtcbiAgZm9udC1mYW1pbHk6ICAnTGlicmUgQmFza2VydmlsbGUnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6IHJnYmEoMjQ0LDIzNywyMjQsMC41KTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFVUSUxTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDAgOHZ3O1xuICBtYXJnaW46IDYwcHggMDtcbn1cblxuLmRpdmlkZXItbGluZSB7IGZsZXg6IDE7IGhlaWdodDogMXB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI3LDMxLDI4LDAuMTIpOyB9XG5cbi5kaXZpZGVyLW1hcmsge1xuICB3aWR0aDogOHB4OyBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjYjA1ZTI4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc2VjdGlvbi1udW1iZXIge1xuICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHJnYmEoMjcsMzEsMjgsMC4wNik7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG59XG5cbi5zZWN0aW9uLXRhZyB7XG4gIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNiMDVlMjg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgMy41dncsIDIuNnJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWUzMzI2O1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcblxuICBlbSB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgY29sb3I6ICMzZDZiNGY7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNUT1JZIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnN0b3J5LXNlY3Rpb24ge1xuICBwYWRkaW5nOiA4MHB4IDh2dyAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjZmcjtcbiAgZ2FwOiA4MHB4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN0b3J5LWFzaWRlIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiA0MHB4OyB9XG5cbi5zdG9yeS10ZXh0IHAge1xuICBmb250LWZhbWlseTogICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjg1O1xuICBjb2xvcjogIzNhNDA0MDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnB1bGwtcXVvdGUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiMDVlMjg7XG4gIHBhZGRpbmc6IDRweCAwIDRweCAyNHB4O1xuICBtYXJnaW46IDM2cHggMDtcblxuICBwIHtcbiAgICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjMWUzMzI2O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNUQVRTIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLnN0YXRzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMWUzMzI2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogODBweCAwO1xuICBwYWRkaW5nOiA4MHB4IDh2dztcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwMCcgaGVpZ2h0PSczMDAnJTNFJTNDZmlsdGVyIGlkPSduJyUzRSUzQ2ZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9Jy44JyBudW1PY3RhdmVzPSc0JyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8lM0UlM0MvZmlsdGVyJTNFJTNDcmVjdCB3aWR0aD0nMzAwJyBoZWlnaHQ9JzMwMCcgZmlsdGVyPSd1cmwoJTIzbiknIG9wYWNpdHk9Jy4wNCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uc3RhdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3RhdC1pdGVtIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gICY6Zmlyc3QtY2hpbGQgeyBwYWRkaW5nLWxlZnQ6IDA7IH1cbn1cblxuLnN0YXQtbnVtYmVyIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDIuOHJlbSwgNXZ3LCA0LjVyZW0pO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2Y0ZWRlMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN0YXQtYWNjZW50IHsgY29sb3I6ICNjOTcwNDA7IH1cblxuLnN0YXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcmdiYSgyNDQsMjM3LDIyNCwwLjQ1KTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFZBTFVFUyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi52YWx1ZXMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDAgOHZ3IDgwcHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnZhbHVlcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLnZhbHVlcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjcsMzEsMjgsMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMjgsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZhbHVlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjlmNWVlO1xuICBwYWRkaW5nOiA0MHB4IDMycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNiMDVlMjg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjRlZGUwO1xuICAgICY6OmJlZm9yZSB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XG4gICAgLnZhbHVlLWljb24geyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgfVxufVxuXG4udmFsdWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi52YWx1ZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWUzMzI2O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbn1cblxuLnZhbHVlLWRlc2Mge1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGNvbG9yOiAjOGE5ZDhlO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVEVBTSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50ZWFtLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZWRlNGQzO1xuICBwYWRkaW5nOiA4MHB4IDh2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnJTNFJTNDcmVjdCB4PScyOScgeT0nMCcgd2lkdGg9JzEnIGhlaWdodD0nNjAnIGZpbGw9JyUyMzFiMWYxYycgb3BhY2l0eT0nMC4wMycvJTNFJTNDcmVjdCB4PScwJyB5PScyOScgd2lkdGg9JzYwJyBoZWlnaHQ9JzEnIGZpbGw9JyUyMzFiMWYxYycgb3BhY2l0eT0nMC4wMycvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4udGVhbS1oZWFkZXItd3JhcCB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udGVhbS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAyNHB4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udGVhbS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjVlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBib3gtc2hhZG93IDAuMzVzO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDhweCByZ2JhKDI3LDMxLDI4LDAuMTQpO1xuXG4gICAgLnRlYW0taW1nIGltZyB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cbiAgfVxufVxuXG4udGVhbS1pbWcge1xuICBoZWlnaHQ6IDI2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgICBmaWx0ZXI6IHNlcGlhKDE1JSkgc2F0dXJhdGUoODUlKTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNywzMSwyOCwwLjU1KSAwJSwgdHJhbnNwYXJlbnQgNTUlKTtcbiAgfVxufVxuXG4udGVhbS1yb2xlLXRhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNHB4OyBsZWZ0OiAxNHB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE0ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZjRlZGUwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI3LDMxLDI4LDAuNik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLnRlYW0tYm9keSB7IHBhZGRpbmc6IDI0cHg7IH1cblxuLnRlYW0tbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFlMzMyNjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi50ZWFtLWJpbyB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6ICM4YTlkOGU7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBTQUZFVFkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc2FmZXR5LXNlY3Rpb24ge1xuICBwYWRkaW5nOiA4MHB4IDh2dztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2FmZXR5LWlubmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDgwcHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLnNhZmV0eS1hc2lkZSAuc2VjdGlvbi1oZWFkaW5nIHsgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uc2FmZXR5LWRlc2Mge1xuICBmb250LWZhbWlseTogICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGNvbG9yOiAjM2E0MDQwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zYWZldHktbGlzdCB7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLnNhZmV0eS1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IDFmcjtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMjgsMC4wOCk7XG4gIHRyYW5zaXRpb246IHBhZGRpbmctbGVmdCAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcblxuICAmOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMjgsMC4wOCk7IH1cblxuICAmOmhvdmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAuc2FmZXR5LW51bSB7IGNvbG9yOiAjYjA1ZTI4OyB9XG4gIH1cbn1cblxuLnNhZmV0eS1udW0ge1xuICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogcmdiYSgyNywzMSwyOCwwLjEpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLnNhZmV0eS10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBjb2xvcjogIzNhNDA0MDtcbiAgcGFkZGluZy10b3A6IDRweDtcblxuICBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhdW5jZXMnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFlMzMyNjtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZPT1RFUiBDVEEgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uZm9vdGVyLWN0YSB7XG4gIGJhY2tncm91bmQ6ICMxZTMzMjY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogODBweCA4dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdTSU5DRSAyMDExJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlOyB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LWZhbWlseTogJ0ZyYXVuY2VzJywgR2VvcmdpYSwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHZ3O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wMyk7XG4gICAgbGluZS1oZWlnaHQ6IDAuODU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxufVxuXG4uZm9vdGVyLWN0YS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb290ZXItY3RhIGgyIHtcbiAgZm9udC1mYW1pbHk6ICdGcmF1bmNlcycsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgMy41dncsIDIuOHJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZjRlZGUwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLmZvb3Rlci1jdGEgcCB7XG4gIGNvbG9yOiByZ2JhKDI0NCwyMzcsMjI0LDAuNSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICBmb250LWZhbWlseTogICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jdGEtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYmFja2dyb3VuZDogI2IwNWUyODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzk3MDQwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyOHB4IHJnYmEoMTc2LDk0LDQwLDAuNCk7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnN0b3J5LXNlY3Rpb24gIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogNDBweDsgfVxuICAuc3RvcnktYXNpZGUgICAgeyBwb3NpdGlvbjogc3RhdGljOyB9XG4gIC5zdGF0cy1ncmlkICAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7IGdhcDogNDBweDsgfVxuICAuc3RhdC1pdGVtICAgICAgeyBib3JkZXItcmlnaHQ6IG5vbmU7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyBwYWRkaW5nOiAwIDAgMzJweDsgdGV4dC1hbGlnbjogbGVmdDsgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfSB9XG4gIC52YWx1ZXMtZ3JpZCAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC50ZWFtLWdyaWQgICAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5zYWZldHktaW5uZXIgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBnYXA6IDQwcHg7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvLCAuc3RhdHMtc2VjdGlvbiwgLnRlYW0tc2VjdGlvbiwgLmZvb3Rlci1jdGEgeyBwYWRkaW5nLWxlZnQ6IDZ2dzsgcGFkZGluZy1yaWdodDogNnZ3OyB9XG4gIC5zdG9yeS1zZWN0aW9uLCAudmFsdWVzLXNlY3Rpb24sIC5zYWZldHktc2VjdGlvbiwgLmRpdmlkZXIgeyBwYWRkaW5nLWxlZnQ6IDZ2dzsgcGFkZGluZy1yaWdodDogNnZ3OyB9XG4gIC5oZXJvLXllYXIgeyBmb250LXNpemU6IDVyZW07IHRvcDogMjBweDsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_about_about-module_ts.js.map