"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_faqs_faqs-module_ts"],{

/***/ 3170
/*!*************************************!*\
  !*** ./src/app/faqs/faqs-module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqsModule: () => (/* binding */ FaqsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _faqs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.component */ 8920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent
}];
class FaqsModule {
  static #_ = _staticBlock = () => (this.ɵfac = function FaqsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FaqsModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: FaqsModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FaqsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _faqs_component__WEBPACK_IMPORTED_MODULE_3__.FaqsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 8920
/*!****************************************!*\
  !*** ./src/app/faqs/faqs.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqsComponent: () => (/* binding */ FaqsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;








function FaqsComponent_ion_segment_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-segment-button", 13)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", category_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r1.label);
  }
}
function FaqsComponent_ion_card_14_ion_card_content_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", faq_r3.answer, " ");
  }
}
function FaqsComponent_ion_card_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 14)(1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FaqsComponent_ion_card_14_Template_ion_item_click_1_listener() {
      const faq_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleFaq(faq_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label", 17)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, FaqsComponent_ion_card_14_ion_card_content_6_Template, 2, 1, "ion-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const faq_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", faq_r3.expanded ? "chevron-up" : "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](faq_r3.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", faq_r3.expanded);
  }
}
function FaqsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No questions found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Try a different search term or category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class FaqsComponent {
  constructor() {
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.categories = [{
      value: 'all',
      label: 'All'
    }, {
      value: 'booking',
      label: 'Booking'
    }, {
      value: 'cancellation',
      label: 'Cancellation'
    }, {
      value: 'fitness',
      label: 'Fitness'
    }, {
      value: 'safety',
      label: 'Safety & Gear'
    }, {
      value: 'general',
      label: 'General'
    }];
    this.faqs = [{
      question: "How do I book a trek?",
      answer: "You can book a trek through our website or mobile app. Select your preferred trek, choose a date, fill in your details, and proceed with payment. You'll receive a confirmation email with all the details.",
      category: "booking"
    }, {
      question: "What is your cancellation policy?",
      answer: "Full refund if cancelled 15+ days before trek. 50% refund for 7-14 days. No refund for cancellations within 7 days. However, you can transfer your booking to another date without charges.",
      category: "cancellation"
    }, {
      question: "Do I need to be very fit for trekking?",
      answer: "Fitness requirements vary by trek. Easy treks require basic fitness - ability to walk 5-6 km. Moderate treks need regular exercise routine. Challenging treks require high stamina and previous trekking experience. We recommend starting with easier treks.",
      category: "fitness"
    }, {
      question: "What should I bring for the trek?",
      answer: "Essential items include: comfortable trekking shoes, water bottle, sunscreen, hat, basic first aid, personal medications, extra clothes, raincoat, and snacks. We provide detailed packing lists after booking.",
      category: "safety"
    }, {
      question: "Are the treks suitable for beginners?",
      answer: "Yes! We have treks for all levels. Easy treks like Tadiandamol and Mullayanagiri are perfect for beginners. Our guides provide full support and we maintain a comfortable pace.",
      category: "general"
    }, {
      question: "What's included in the trek price?",
      answer: "Trek price includes: experienced trek leader, support staff, all meals during trek, camping equipment, first aid kit, forest permits, and transportation from designated base point.",
      category: "booking"
    }, {
      question: "Can I join if I'm traveling solo?",
      answer: "Absolutely! Many of our trekkers are solo travelers. It's a great way to meet like-minded people. We ensure everyone feels welcome and part of the group.",
      category: "general"
    }, {
      question: "What if it rains during the trek?",
      answer: "We trek in light to moderate rain with proper gear. In case of heavy rain or dangerous weather, we may modify the route or reschedule for safety. Rescheduling is free of charge.",
      category: "safety"
    }, {
      question: "Is travel insurance necessary?",
      answer: "While not mandatory, we strongly recommend travel insurance covering adventure activities. It provides protection against unforeseen circumstances like accidents or medical emergencies.",
      category: "safety"
    }, {
      question: "What's your age policy?",
      answer: "Minimum age is 12 for easy treks, 15 for moderate, and 18 for challenging treks. Minors must be accompanied by guardians. Senior citizens can participate if medically fit.",
      category: "general"
    }, {
      question: "Can I transfer my booking to someone else?",
      answer: "Yes, you can transfer your booking to another person up to 7 days before the trek date. Contact us with the new participant's details.",
      category: "booking"
    }, {
      question: "Do you provide trekking equipment?",
      answer: "We provide tents, sleeping bags, and basic camping gear. Personal items like trekking poles, shoes, and backpacks are your responsibility. We offer rentals for some equipment.",
      category: "safety"
    }];
  }
  ngOnInit() {}
  get filteredFaqs() {
    let filtered = this.faqs;
    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === this.selectedCategory);
    }
    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(faq => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query));
    }
    return filtered;
  }
  toggleFaq(faq) {
    faq.expanded = !faq.expanded;
  }
  static #_ = _staticBlock = () => (this.ɵfac = function FaqsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FaqsComponent)();
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FaqsComponent,
    selectors: [["app-faqs"]],
    decls: 26,
    vars: 5,
    consts: [["placeholder", "Search questions...", "animated", "true", 3, "ngModelChange", "ngModel"], [1, "px-3"], [1, "faqs-header"], ["name", "help-circle-outline"], [1, "filter-section"], ["scrollable", "true", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "faqs-list"], ["class", "faq-card", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "contact-cta"], ["expand", "block", "color", "success", "routerLink", "/contact"], ["slot", "end", "name", "arrow-forward"], [3, "value"], [1, "faq-card"], ["button", "", "detail", "false", "lines", "none", 3, "click"], ["slot", "start", "color", "success", 3, "name"], [1, "ion-text-wrap"], ["class", "answer", 4, "ngIf"], [1, "answer"], [1, "no-results"], ["name", "search-outline"]],
    template: function FaqsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-searchbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_Template_ion_searchbar_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Find answers to common questions about our treks");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "ion-segment", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function FaqsComponent_Template_ion_segment_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FaqsComponent_ion_segment_button_12_Template, 3, 2, "ion-segment-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, FaqsComponent_ion_card_14_Template, 7, 3, "ion-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FaqsComponent_div_15_Template, 6, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 10)(17, "ion-card")(18, "ion-card-content")(19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Can't find what you're looking for? We're here to help!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredFaqs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filteredFaqs.length === 0);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_faqs_faqs-module_ts.js.map