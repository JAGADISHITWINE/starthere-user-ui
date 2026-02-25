"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_blog_blog-module_ts"],{

/***/ 756
/*!*************************************!*\
  !*** ./src/app/blog/blog-module.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogModule: () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ 2242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: '',
  component: _blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent
}];
class BlogModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BlogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BlogModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 2242
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog */ 8051);

var _staticBlock;









function BlogComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_29_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewPost(ctx_r2.featuredPosts[0].id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 50)(5, "div")(6, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.featuredPosts[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx_r2.featuredPosts[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.featuredPosts[0].category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.featuredPosts[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", ctx_r2.featuredPosts[0].author.name, " \u00B7 ", ctx_r2.featuredPosts[0].date, " \u00B7 ", ctx_r2.featuredPosts[0].readTime);
  }
}
function BlogComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_button_32_Template_button_click_0_listener() {
      const category_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectedCategory = category_r5.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx_r2.selectedCategory === category_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", category_r5.label, " ");
  }
}
function BlogComponent_ng_container_35_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_ng_container_35_div_9_Template_div_click_0_listener() {
      const post_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewPost(post_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 60)(4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h3", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const post_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", post_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", post_r7.author.name, " \u00B7 ", post_r7.date, " \u00B7 ", post_r7.readTime);
  }
}
function BlogComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 24)(2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Featured Articles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BlogComponent_ng_container_35_div_9_Template, 10, 7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.featuredPosts.length - 1, " picks");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.featuredPosts.slice(1, 4));
  }
}
function BlogComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64)(1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No Articles Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Try a different search term or category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_43_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r2.searchQuery = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectedCategory = "all");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Clear Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogComponent_div_45_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_45_span_12_Template_span_click_0_listener($event) {
      const tag_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      ctx_r2.filterByTag(tag_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r12);
  }
}
function BlogComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_div_45_Template_div_click_0_listener() {
      const post_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.viewPost(post_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 69)(4, "div", 70)(5, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BlogComponent_div_45_span_12_Template, 2, 1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 76)(14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 81)(22, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const post_r10 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("big", i_r13 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", post_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r10.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", post_r10.tags.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", post_r10.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", post_r10.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r10.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r10.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](post_r10.readTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", post_r10.views, " views");
  }
}
function BlogComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_span_54_Template_span_click_0_listener() {
      const tag_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.filterByTag(tag_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r15);
  }
}
class BlogComponent {
  constructor(router, blogService, loadingController) {
    this.router = router;
    this.blogService = blogService;
    this.loadingController = loadingController;
    this.selectedCategory = "all";
    this.searchQuery = "";
    this.isLoading = false;
    this.imageBaseUrl = "http://localhost:4001";
    this.fallbackImage = "assets/assets/logo.png";
    this.categories = [{
      value: "all",
      label: "All Posts",
      icon: "apps"
    }, {
      value: "trek-guides",
      label: "Trek Guides",
      icon: "map"
    }, {
      value: "tips-tricks",
      label: "Tips & Tricks",
      icon: "bulb"
    }, {
      value: "gear-reviews",
      label: "Gear Reviews",
      icon: "bag-handle"
    }, {
      value: "travel-stories",
      label: "Travel Stories",
      icon: "book"
    }, {
      value: "safety",
      label: "Safety",
      icon: "shield-checkmark"
    }, {
      value: "destinations",
      label: "Destinations",
      icon: "location"
    }];
    this.allPosts = [];
    this.popularTags = [];
  }
  ngOnInit() {
    this.loadPosts();
    this.loadCategories();
  }
  loadPosts() {
    var _this = this;
    return (0,_var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      const loading = yield _this.loadingController.create({
        message: "Loading posts..."
      });
      yield loading.present();
      _this.blogService.getPublishedPosts().subscribe({
        next: posts => {
          _this.allPosts = posts.data.map(post => _this.mapPostToBlogPost(post));
          _this.extractPopularTags();
          loading.dismiss();
          _this.isLoading = false;
        },
        error: error => {
          console.error("Error loading posts:", error);
          loading.dismiss();
          _this.isLoading = false;
        }
      });
    })();
  }
  loadCategories() {
    var _this2 = this;
    return (0,_var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.blogService.getCategories().subscribe({
        next: categories => {
          // Map backend categories to frontend format
          const mappedCategories = categories.map(cat => ({
            value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
            label: cat.name,
            icon: _this2.getCategoryIconByName(cat.name)
          }));
          // Keep "All Posts" at the beginning
          _this2.categories = [{
            value: "all",
            label: "All Posts",
            icon: "apps"
          }, ...mappedCategories];
        },
        error: error => {
          console.error("Error loading categories:", error);
        }
      });
    })();
  }
  mapPostToBlogPost(post) {
    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: this.resolveImageUrl(post.featured_image),
      author: {
        name: post.author_name || "Admin",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || "Admin")}&size=100`
      },
      category: this.slugify(post.category_name || post.category),
      tags: post.tags || [],
      date: this.formatDate(post.published_at || post.created_at),
      readTime: this.calculateReadTime(post.content),
      views: post.views || 0,
      featured: post.views > 2000
    };
  }
  resolveImageUrl(imagePath) {
    if (!imagePath) return this.fallbackImage;
    if (/^https?:\/\//i.test(imagePath)) return imagePath;
    return `${this.imageBaseUrl}/${String(imagePath).replace(/^\/+/, "")}`;
  }
  slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
  }
  formatDate(dateString) {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric"
    };
    return date.toLocaleDateString("en-GB", options);
  }
  calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }
  extractPopularTags() {
    const tagFrequency = {};
    this.allPosts.forEach(post => {
      post.tags.forEach(tag => {
        tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
      });
    });
    // Sort tags by frequency and get top 12
    this.popularTags = Object.entries(tagFrequency).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([tag]) => tag);
  }
  getCategoryIconByName(name) {
    const iconMap = {
      "Trek Guides": "map",
      "Tips & Tricks": "bulb",
      "Gear Reviews": "bag-handle",
      "Travel Stories": "book",
      Safety: "shield-checkmark",
      Destinations: "location"
    };
    return iconMap[name] || "document-text";
  }
  get featuredPosts() {
    return this.allPosts.filter(post => post.featured).slice(0, 3);
  }
  get filteredPosts() {
    let posts = this.allPosts;
    // Filter by category
    if (this.selectedCategory !== "all") {
      posts = posts.filter(post => post.category === this.selectedCategory);
    }
    // Filter by search
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      posts = posts.filter(post => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query) || post.tags.some(tag => tag.toLowerCase().includes(query)));
    }
    // Exclude featured posts from regular list if showing all
    if (this.selectedCategory === "all" && !this.searchQuery) {
      posts = posts.filter(post => !post.featured);
    }
    return posts;
  }
  viewPost(postId) {
    // Increment view count
    this.blogService.incrementViews(postId).subscribe({
      next: () => {
        this.router.navigate(["/blog-details", postId]);
      }
    });
  }
  filterByTag(tag) {
    this.searchQuery = tag;
  }
  getCategoryIcon(category) {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.icon : "document-text";
  }
  getCategoryColor(category) {
    const colors = {
      "trek-guides": "primary",
      "tips-tricks": "success",
      "gear-reviews": "warning",
      "travel-stories": "tertiary",
      safety: "danger",
      destinations: "secondary"
    };
    return colors[category] || "medium";
  }
  get categoryTitle() {
    if (this.selectedCategory === "all") {
      return "Latest Articles";
    }
    const category = this.categories.find(c => c.value === this.selectedCategory);
    return category?.label ?? "Latest Articles";
  }
  refreshPosts(event) {
    this.loadPosts();
    if (event) {
      setTimeout(() => {
        event.target.complete();
      }, 1000);
    }
  }
  createPost() {
    this.router.navigate(["/blog-post"]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blog__WEBPACK_IMPORTED_MODULE_7__.Blog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 70,
    vars: 11,
    consts: [["nlEmail", ""], [1, "page"], [1, "top-bar"], [1, "top-bar-left"], ["routerLink", "/", 1, "top-brand"], [1, "top-divider"], [1, "top-label"], [1, "top-bar-right"], [1, "top-search"], [1, "si"], ["placeholder", "Search articles\u2026", 3, "ngModelChange", "ngModel"], [1, "write-btn", 3, "click"], [1, "hero"], [1, "hero-text"], [1, "hero-eyebrow"], [1, "hero-title"], [1, "hero-sub"], ["class", "hero-post", 3, "click", 4, "ngIf"], [1, "cat-rail"], [1, "cat-inner"], ["class", "cat-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "body-wrap"], [1, "main-col"], [4, "ngIf"], [1, "sec-head"], [1, "sec-num"], [1, "sec-title"], [1, "sec-count"], ["class", "empty-state", 4, "ngIf"], [1, "article-list"], ["class", "article-row", 3, "big", "click", 4, "ngFor", "ngForOf"], [1, "sidebar"], [1, "sidebar-block"], [1, "sb-head"], [1, "sb-title"], [1, "sb-count"], [1, "tag-grid"], ["class", "tag-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "newsletter"], [1, "nl-eyebrow"], [1, "nl-head"], [1, "nl-desc"], ["type", "email", "placeholder", "your@email.com", 1, "nl-input"], [1, "nl-btn"], [1, "nl-privacy"], ["title", "Write an article", 1, "fab", 3, "click"], [1, "hero-post", 3, "click"], [1, "hp-img-wrap"], [1, "hp-img", 3, "src", "alt"], [1, "hp-overlay"], [1, "hp-content"], [1, "hp-cat"], [1, "hp-title"], [1, "hp-byline"], [1, "cat-btn", 3, "click"], [1, "featured-strip"], ["class", "fs-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "fs-card", 3, "click"], [1, "fs-img"], [3, "src", "alt"], [1, "fs-body"], [1, "fs-cat"], [1, "fs-title"], [1, "fs-meta"], [1, "empty-state"], [1, "empty-num"], [1, "clear-btn", 3, "click"], [1, "article-row", 3, "click"], [1, "ar-img-wrap"], [1, "ar-body"], [1, "ar-top"], [1, "ar-cat"], [1, "ar-title"], [1, "ar-excerpt"], [1, "ar-tags"], ["class", "ar-tag", 3, "click", 4, "ngFor", "ngForOf"], [1, "ar-footer"], [1, "ar-author"], [1, "ar-avatar", 3, "src", "alt"], [1, "ar-author-name"], [1, "ar-date"], [1, "ar-right"], [1, "ar-read-time"], [1, "ar-views"], [1, "ar-tag", 3, "click"], [1, "tag-item", 3, "click"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Karnataka Adventures");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Trail Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u2315");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.createPost());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "+ Write");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "section", 12)(16, "div", 13)(17, "div")(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Stories from the trail");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Trek");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Tales");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "& Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Guides, stories, and hard-won wisdom from the trails of the Western Ghats.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, BlogComponent_div_29_Template, 12, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "nav", 18)(31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, BlogComponent_button_32_Template, 2, 3, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 21)(34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, BlogComponent_ng_container_35_Template, 10, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 24)(37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, BlogComponent_div_43_Template, 9, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, BlogComponent_div_45_Template, 26, 14, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "aside", 31)(47, "div", 32)(48, "div", 33)(49, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, BlogComponent_span_54_Template, 2, 1, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 38)(56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Never Miss a Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Trail stories and guides, delivered every fortnight.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "input", 42, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Subscribe \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Unsubscribe anytime. No spam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_68_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.createPost());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.featuredPosts[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedCategory === "all" && !ctx.searchQuery && ctx.featuredPosts.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedCategory === "all" && !ctx.searchQuery ? "02" : "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.categoryTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.filteredPosts.length, " articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filteredPosts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.popularTags.length, " tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.popularTags);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHrefDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #0a0a0a;\n  font-family: \"Lora\", Georgia, serif;\n  -webkit-font-smoothing: antialiased;\n  overflow-x: hidden;\n}\n\n.page[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n@keyframes _ngcontent-%COMP%_pageIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  background: #0a0a0a;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 6vw;\n  height: 44px;\n}\n\n.top-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.top-brand[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n}\n\n.top-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 16px;\n  background: rgba(255, 255, 255, 0.15);\n}\n\n.top-label[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #e84c00;\n}\n\n.top-bar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.top-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  padding: 5px 12px;\n  width: 180px;\n  transition: border-color 0.2s;\n}\n.top-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #e84c00;\n}\n.top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  color: #fff;\n  width: 100%;\n}\n.top-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n.top-search[_ngcontent-%COMP%]   .si[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.9rem;\n}\n\n.write-btn[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  background: #e84c00;\n  color: #fff;\n  border: none;\n  padding: 7px 18px;\n  cursor: pointer;\n  transition: background 0.15s;\n  text-decoration: none;\n}\n.write-btn[_ngcontent-%COMP%]:hover {\n  background: #ff5a0e;\n}\n\n.hero[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0a0a0a;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  padding: 60px 6vw 60px;\n  border-right: 2px solid #0a0a0a;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 340px;\n}\n\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #e84c00;\n  margin-bottom: 20px;\n}\n.hero-eyebrow[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 24px;\n  height: 2px;\n  background: #e84c00;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: clamp(4rem, 8vw, 8rem);\n  font-weight: 900;\n  line-height: 0.88;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n  color: #0a0a0a;\n}\n.hero-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 700;\n  color: #e84c00;\n}\n\n.hero-sub[_ngcontent-%COMP%] {\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 0.9rem;\n  font-style: italic;\n  color: #888888;\n  line-height: 1.6;\n  margin-top: 24px;\n  max-width: 360px;\n}\n\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  margin-top: 40px;\n  padding-top: 24px;\n  border-top: 1px solid #e8e8e8;\n}\n\n.hero-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.stat-num[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 2rem;\n  font-weight: 900;\n  color: #0a0a0a;\n  line-height: 1;\n}\n\n.stat-lbl[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #888888;\n}\n\n.hero-vsep[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: #e8e8e8;\n}\n\n.hero-post[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 340px;\n  cursor: pointer;\n}\n.hero-post[_ngcontent-%COMP%]:hover   .hp-img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.hero-post[_ngcontent-%COMP%]:hover   .hp-title[_ngcontent-%COMP%] {\n  color: #e84c00;\n}\n\n.hp-img-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n\n.hp-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n  filter: brightness(0.55) saturate(0.7);\n}\n\n.hp-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.3) 60%, transparent 100%);\n}\n\n.hp-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 32px;\n}\n\n.hp-cat[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  background: #e84c00;\n  color: #fff;\n  padding: 4px 10px;\n  margin-bottom: 14px;\n}\n\n.hp-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: clamp(1.4rem, 2.5vw, 2rem);\n  font-weight: 800;\n  color: #fff;\n  line-height: 1.1;\n  letter-spacing: -0.01em;\n  margin-bottom: 10px;\n  transition: color 0.2s;\n  text-transform: uppercase;\n}\n\n.hp-byline[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  color: rgba(255, 255, 255, 0.5);\n  text-transform: uppercase;\n}\n\n.cat-rail[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0a0a0a;\n  background: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.cat-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  overflow-x: auto;\n  scrollbar-width: none;\n  padding: 0 6vw;\n}\n.cat-inner[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.cat-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 20px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #888888;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s, background 0.2s;\n  white-space: nowrap;\n}\n.cat-btn[_ngcontent-%COMP%]:hover {\n  color: #0a0a0a;\n}\n.cat-btn.active[_ngcontent-%COMP%] {\n  color: #0a0a0a;\n  border-bottom-color: #e84c00;\n  background: rgba(232, 76, 0, 0.03);\n}\n\n.body-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 280px;\n}\n\n.main-col[_ngcontent-%COMP%] {\n  border-right: 2px solid #0a0a0a;\n}\n\n.sec-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 20px;\n  padding: 20px 6vw;\n  border-bottom: 1px solid #e8e8e8;\n}\n\n.sec-num[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 4rem;\n  font-weight: 900;\n  color: #e8e8e8;\n  line-height: 1;\n  letter-spacing: -0.04em;\n}\n\n.sec-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #0a0a0a;\n}\n\n.sec-count[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #888888;\n}\n\n.featured-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  border-bottom: 1px solid #e8e8e8;\n}\n\n.fs-card[_ngcontent-%COMP%] {\n  border-right: 1px solid #e8e8e8;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.fs-card[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.fs-card[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 76, 0, 0.02);\n}\n.fs-card[_ngcontent-%COMP%]:hover   .fs-title[_ngcontent-%COMP%] {\n  color: #e84c00;\n}\n.fs-card[_ngcontent-%COMP%]:hover   .fs-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.fs-img[_ngcontent-%COMP%] {\n  height: 160px;\n  overflow: hidden;\n}\n.fs-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  filter: saturate(0.85);\n}\n\n.fs-body[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n}\n\n.fs-cat[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.58rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #e84c00;\n  margin-bottom: 6px;\n  display: block;\n}\n\n.fs-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 1rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #0a0a0a;\n  line-height: 1.2;\n  letter-spacing: -0.01em;\n  margin-bottom: 8px;\n  transition: color 0.2s;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.fs-meta[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.65rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #888888;\n  padding-top: 10px;\n  border-top: 1px solid #e8e8e8;\n}\n\n.article-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  border-bottom: 1px solid #e8e8e8;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.article-row[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 76, 0, 0.02);\n}\n.article-row[_ngcontent-%COMP%]:hover   .ar-title[_ngcontent-%COMP%] {\n  color: #e84c00;\n}\n.article-row[_ngcontent-%COMP%]:hover   .ar-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.article-row.big[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.article-row.big[_ngcontent-%COMP%]   .ar-img-wrap[_ngcontent-%COMP%] {\n  height: 340px;\n}\n.article-row.big[_ngcontent-%COMP%]   .ar-body[_ngcontent-%COMP%] {\n  padding: 28px 6vw;\n}\n.article-row.big[_ngcontent-%COMP%]   .ar-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n}\n\n.ar-img-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n  min-height: 180px;\n  flex-shrink: 0;\n}\n.ar-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  filter: saturate(0.85);\n}\n\n.ar-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 20px 6vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.ar-cat[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #e84c00;\n  margin-bottom: 8px;\n}\n\n.ar-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #0a0a0a;\n  line-height: 1.15;\n  letter-spacing: -0.01em;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  transition: color 0.2s;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.ar-excerpt[_ngcontent-%COMP%] {\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 0.82rem;\n  color: #888888;\n  line-height: 1.65;\n  margin-bottom: 14px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.ar-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n\n.ar-tag[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #888888;\n  border: 1px solid #e8e8e8;\n  padding: 2px 8px;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.ar-tag[_ngcontent-%COMP%]:hover {\n  background: #0a0a0a;\n  color: #ffffff;\n  border-color: #0a0a0a;\n}\n\n.ar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid #e8e8e8;\n}\n\n.ar-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.ar-avatar[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e8e8e8;\n  filter: grayscale(20%);\n}\n\n.ar-author-name[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  color: #0a0a0a;\n}\n\n.ar-date[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.68rem;\n  letter-spacing: 0.06em;\n  color: #888888;\n}\n\n.ar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.ar-read-time[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.68rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #888888;\n}\n\n.ar-views[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.68rem;\n  letter-spacing: 0.06em;\n  color: #888888;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 80px 6vw;\n  text-align: center;\n  border-bottom: 1px solid #e8e8e8;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-num[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 8rem;\n  font-weight: 900;\n  color: #e8e8e8;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #0a0a0a;\n  margin-bottom: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Lora\", Georgia, serif;\n  font-style: italic;\n  font-size: 0.85rem;\n  color: #888888;\n  margin-bottom: 24px;\n}\n\n.clear-btn[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  background: #0a0a0a;\n  color: #ffffff;\n  border: none;\n  padding: 12px 28px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background: #e84c00;\n}\n\n.sidebar-block[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #0a0a0a;\n}\n\n.sb-head[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sb-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #0a0a0a;\n}\n\n.sb-count[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: #888888;\n}\n\n.tag-grid[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.tag-item[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: #0a0a0a;\n  border: 1.5px solid #0a0a0a;\n  padding: 5px 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.tag-item[_ngcontent-%COMP%]:hover {\n  background: #e84c00;\n  color: #ffffff;\n  border-color: #e84c00;\n}\n\n.sb-article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72px 1fr;\n  gap: 12px;\n  padding: 14px 20px;\n  border-bottom: 1px solid #e8e8e8;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.sb-article[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sb-article[_ngcontent-%COMP%]:hover {\n  background: rgba(232, 76, 0, 0.02);\n}\n.sb-article[_ngcontent-%COMP%]:hover   .sba-title[_ngcontent-%COMP%] {\n  color: #e84c00;\n}\n\n.sba-img[_ngcontent-%COMP%] {\n  height: 56px;\n  overflow: hidden;\n}\n.sba-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  filter: grayscale(30%);\n}\n\n.sba-cat[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.55rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #e84c00;\n  margin-bottom: 4px;\n  display: block;\n}\n\n.sba-title[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #0a0a0a;\n  line-height: 1.2;\n  transition: color 0.2s;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n\n.sba-meta[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.62rem;\n  color: #888888;\n  letter-spacing: 0.04em;\n}\n\n.newsletter[_ngcontent-%COMP%] {\n  background: #0a0a0a;\n  padding: 32px 20px;\n}\n\n.nl-eyebrow[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 700;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #e84c00;\n  margin-bottom: 10px;\n}\n\n.nl-head[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #ffffff;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  margin-bottom: 10px;\n}\n\n.nl-desc[_ngcontent-%COMP%] {\n  font-family: \"Lora\", Georgia, serif;\n  font-size: 0.78rem;\n  font-style: italic;\n  color: rgba(255, 255, 255, 0.45);\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n\n.nl-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  padding: 10px 13px;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.85rem;\n  letter-spacing: 0.04em;\n  color: #fff;\n  outline: none;\n  margin-bottom: 8px;\n  transition: border-color 0.2s;\n}\n.nl-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.25);\n}\n.nl-input[_ngcontent-%COMP%]:focus {\n  border-color: #e84c00;\n}\n\n.nl-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #e84c00;\n  color: #fff;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  border: none;\n  padding: 12px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.nl-btn[_ngcontent-%COMP%]:hover {\n  background: #ff5a0e;\n}\n\n.nl-privacy[_ngcontent-%COMP%] {\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 0.62rem;\n  letter-spacing: 0.06em;\n  color: rgba(255, 255, 255, 0.2);\n  margin-top: 8px;\n}\n\n.fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 32px;\n  right: 32px;\n  width: 52px;\n  height: 52px;\n  background: #e84c00;\n  color: #fff;\n  border: none;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 300;\n  line-height: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 4px 4px 0 #0a0a0a;\n  transition: background 0.15s, transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s;\n  z-index: 200;\n}\n.fab[_ngcontent-%COMP%]:hover {\n  background: #ff5a0e;\n  transform: translate(-2px, -2px);\n  box-shadow: 6px 6px 0 #0a0a0a;\n}\n.fab[_ngcontent-%COMP%]:active {\n  transform: translate(1px, 1px);\n  box-shadow: 2px 2px 0 #0a0a0a;\n}\n\n@media (max-width: 1024px) {\n  .body-wrap[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .main-col[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    border-top: 2px solid #0a0a0a;\n  }\n  .featured-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .fs-card[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n  }\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 2px solid #0a0a0a;\n    min-height: auto;\n  }\n  .hero-post[_ngcontent-%COMP%] {\n    min-height: 280px;\n  }\n  .article-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ar-img-wrap[_ngcontent-%COMP%] {\n    height: 200px;\n    min-height: auto;\n  }\n  .top-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .featured-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .featured-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXlCLHNCQUFBO0FBRXpCOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFBUSwwREFBQTtBQUlSOztBQUhBO0VBQW9CO0lBQU8sVUFBQTtFQVF6QjtFQVJ1QztJQUFLLFVBQUE7RUFXNUM7QUFDRjtBQVRBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBV0Y7O0FBUkE7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQVdGOztBQVJBO0VBQ0UsVUFBQTtFQUFZLFlBQUE7RUFDWixxQ0FBQTtBQVlGOztBQVRBO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFZRjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFZRjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFZRjtBQVZFO0VBQWlCLHFCQUFBO0FBYW5CO0FBWEU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWFKO0FBWkk7RUFBaUIsK0JBQUE7QUFlckI7QUFaRTtFQUFNLCtCQUFBO0VBQThCLGlCQUFBO0FB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O0VBQ0U7SUFBbUIsMEJBQUE7RUF3RW5CO0VBdkVBO0lBQW1CLGtCQUFBO0lBQW9CLGdDQUFBO0lBQWtDLGdCQUFBO0VBNEV6RTtFQTNFQTtJQUFtQixpQkFBQTtFQThFbkI7RUE3RUE7SUFBbUIsMEJBQUE7RUFnRm5CO0VBL0VBO0lBQW1CLGFBQUE7SUFBZSxnQkFBQTtFQW1GbEM7RUFsRkE7SUFBbUIsYUFBQTtFQXFGbkI7RUFwRkE7SUFBbUIsOEJBQUE7RUF1Rm5CO0FBQ0Y7QUFyRkE7RUFDRTtJQUFtQiwwQkFBQTtFQXdGbkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIgeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzBhMGEwYTtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgR2VvcmdpYSwgc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5wYWdlIHsgYW5pbWF0aW9uOiBwYWdlSW4gMC41cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDsgfVxuQGtleWZyYW1lcyBwYWdlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVE9QIEJBUiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi50b3AtYmFyIHtcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDZ2dztcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4udG9wLWJhci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNHB4O1xufVxuXG4udG9wLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRvcC1kaXZpZGVyIHtcbiAgd2lkdGg6IDFweDsgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xufVxuXG4udG9wLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2U4NGMwMDtcbn1cblxuLnRvcC1iYXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi50b3Atc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICB3aWR0aDogMTgwcHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuXG4gICY6Zm9jdXMtd2l0aGluIHsgYm9yZGVyLWNvbG9yOiAjZTg0YzAwOyB9XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7IH1cbiAgfVxuXG4gIC5zaSB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7IGZvbnQtc2l6ZTogMC45cmVtOyB9XG59XG5cbi53cml0ZS1idG4ge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQ6ICNlODRjMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDdweCAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2ZmNWEwZTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSEVSTyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5oZXJvIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwYTBhMGE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIHBhZGRpbmc6IDYwcHggNnZ3IDYwcHg7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwYTBhMGE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogMzQwcHg7XG59XG5cbi5oZXJvLWV5ZWJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2U4NGMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTg0YzAwO1xuICB9XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBjbGFtcCg0cmVtLCA4dncsIDhyZW0pO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMC44ODtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMGEwYTBhO1xuXG4gIGVtIHsgZm9udC1zdHlsZTogaXRhbGljOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2U4NGMwMDsgfVxufVxuXG4uaGVyby1zdWIge1xuICBmb250LWZhbWlseTogJ0xvcmEnLCBHZW9yZ2lhLCBzZXJpZjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1heC13aWR0aDogMzYwcHg7XG59XG5cbi5oZXJvLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbn1cblxuLmhlcm8tc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnB4O1xufVxuXG4uc3RhdC1udW0ge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjMGEwYTBhO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnN0YXQtbGJsIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjYycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLmhlcm8tdnNlcCB7IHdpZHRoOiAxcHg7IGhlaWdodDogMzZweDsgYmFja2dyb3VuZDogI2U4ZThlODsgfVxuXG4vLyBIZXJvIHBvc3Rcbi5oZXJvLXBvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDM0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciAuaHAtaW1nIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTsgfVxuICAmOmhvdmVyIC5ocC10aXRsZSB7IGNvbG9yOiAjZTg0YzAwOyB9XG59XG5cbi5ocC1pbWctd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ocC1pbWcge1xuICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNTUpIHNhdHVyYXRlKDAuNyk7XG59XG5cbi5ocC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgxMCwxMCwxMCwwLjkyKSAwJSwgcmdiYSgxMCwxMCwxMCwwLjMpIDYwJSwgdHJhbnNwYXJlbnQgMTAwJSk7XG59XG5cbi5ocC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDMycHg7XG59XG5cbi5ocC1jYXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC42MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogI2U4NGMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uaHAtdGl0bGUge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMi41dncsIDJyZW0pO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ocC1ieWxpbmUge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDQVRFR09SWSBSQUlMIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmNhdC1yYWlsIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwYTBhMGE7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY2F0LWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgcGFkZGluZzogMCA2dnc7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG4uY2F0LWJ0biB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJvcmRlci1jb2xvciAwLjJzLCBiYWNrZ3JvdW5kIDAuMnM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpob3ZlciB7IGNvbG9yOiAjMGEwYTBhOyB9XG4gICYuYWN0aXZlIHsgY29sb3I6ICMwYTBhMGE7IGJvcmRlci1ib3R0b20tY29sb3I6ICNlODRjMDA7IGJhY2tncm91bmQ6IHJnYmEoMjMyLDc2LDAsMC4wMyk7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEJPRFkgTEFZT1VUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmJvZHktd3JhcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDI4MHB4O1xufVxuXG4ubWFpbi1jb2wgeyBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMGEwYTBhOyB9XG5cbi8vIFNlY3Rpb24gaGVhZGVyc1xuLnNlYy1oZWFkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHggNnZ3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbn1cblxuLnNlYy1udW0ge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZThlOGU4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG59XG5cbi5zZWMtdGl0bGUge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzBhMGEwYTtcbn1cblxuLnNlYy1jb3VudCB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZFQVRVUkVEIFNUUklQIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmZlYXR1cmVkLXN0cmlwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XG59XG5cbi5mcy1jYXJkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlODtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzO1xuXG4gICY6bGFzdC1jaGlsZCB7IGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMzIsNzYsMCwwLjAyKTsgfVxuICAmOmhvdmVyIC5mcy10aXRsZSB7IGNvbG9yOiAjZTg0YzAwOyB9XG4gICY6aG92ZXIgLmZzLWltZyBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XG59XG5cbi5mcy1pbWcge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40NXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMC44NSk7XG4gIH1cbn1cblxuLmZzLWJvZHkgeyBwYWRkaW5nOiAxNnB4IDE4cHg7IH1cblxuLmZzLWNhdCB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC41OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNlODRjMDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mcy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mcy1tZXRhIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQVJUSUNMRSBMSVNUIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFydGljbGUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXM7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjMyLDc2LDAsMC4wMik7IH1cbiAgJjpob3ZlciAuYXItdGl0bGUgeyBjb2xvcjogI2U4NGMwMDsgfVxuICAmOmhvdmVyIC5hci1pbWctd3JhcCBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XG5cbiAgJi5iaWcge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIC5hci1pbWctd3JhcCB7IGhlaWdodDogMzQwcHg7IH1cbiAgICAuYXItYm9keSB7IHBhZGRpbmc6IDI4cHggNnZ3OyB9XG4gICAgLmFyLXRpdGxlIHsgZm9udC1zaXplOiBjbGFtcCgxLjZyZW0sIDN2dywgMi40cmVtKTsgfVxuICB9XG59XG5cbi5hci1pbWctd3JhcCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40NXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMC44NSk7XG4gIH1cbn1cblxuLmFyLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4IDI0cHggMjBweCA2dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFyLWNhdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZTg0YzAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5hci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzBhMGEwYTtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXItZXhjZXJwdCB7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsIEdlb3JnaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGNvbG9yOiAjODg4ODg4O1xuICBsaW5lLWhlaWdodDogMS42NTtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFyLXRhZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uYXItdGFnIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGNvbG9yOiAjZmZmZmZmOyBib3JkZXItY29sb3I6ICMwYTBhMGE7IH1cbn1cblxuLmFyLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xufVxuXG4uYXItYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5hci1hdmF0YXIge1xuICB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZThlOGU4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgyMCUpO1xufVxuXG4uYXItYXV0aG9yLW5hbWUge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGNvbG9yOiAjMGEwYTBhO1xufVxuXG4uYXItZGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbi5hci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cblxuLmFyLXJlYWQtdGltZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLmFyLXZpZXdzIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjY4cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEVNUFRZIFNUQVRFIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxuLmVtcHR5LXN0YXRlIHtcbiAgcGFkZGluZzogODBweCA2dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XG5cbiAgLmVtcHR5LW51bSB7XG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogI2U4ZThlODtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMGEwYTBhO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIEdlb3JnaWEsIHNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxufVxuXG4uY2xlYXItYnRuIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiAjMGEwYTBhO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNlODRjMDA7IH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFNJREVCQVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4uc2lkZWJhci1ibG9jayB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGEwYTBhOyB9XG5cbi5zYi1oZWFkIHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2ItdGl0bGUge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwYTBhMGE7XG59XG5cbi5zYi1jb3VudCB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbi50YWctZ3JpZCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA2cHg7XG59XG5cbi50YWctaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzBhMGEwYTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMGEwYTBhO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogI2U4NGMwMDsgY29sb3I6ICNmZmZmZmY7IGJvcmRlci1jb2xvcjogI2U4NGMwMDsgfVxufVxuXG4vLyBTaWRlYmFyIGFydGljbGUgbGlzdFxuLnNiLWFydGljbGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcycHggMWZyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcblxuICAmOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIzMiw3NiwwLDAuMDIpOyB9XG4gICY6aG92ZXIgLnNiYS10aXRsZSB7IGNvbG9yOiAjZTg0YzAwOyB9XG59XG5cbi5zYmEtaW1nIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xuICB9XG59XG5cbi5zYmEtY2F0IHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjU1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2U4NGMwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNiYS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwYTBhMGE7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnNiYS1tZXRhIHtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjYycmVtO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIE5FV1NMRVRURVIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4ubmV3c2xldHRlciB7XG4gIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbn1cblxuLm5sLWV5ZWJyb3cge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZTg0YzAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubmwtaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ubC1kZXNjIHtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm5sLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XG4gIHBhZGRpbmc6IDEwcHggMTNweDtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcblxuICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpOyB9XG4gICY6Zm9jdXMgeyBib3JkZXItY29sb3I6ICNlODRjMDA7IH1cbn1cblxuLm5sLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZTg0YzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xOGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNmZjVhMGU7IH1cbn1cblxuLm5sLXByaXZhY3kge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNjJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZBQiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcbi5mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzJweDsgcmlnaHQ6IDMycHg7XG4gIHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7XG4gIGJhY2tncm91bmQ6ICNlODRjMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAwICMwYTBhMGE7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMsIHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYm94LXNoYWRvdyAwLjJzO1xuICB6LWluZGV4OiAyMDA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmNWEwZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDAgIzBhMGEwYTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwICMwYTBhMGE7XG4gIH1cbn1cblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJFU1BPTlNJVkUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ib2R5LXdyYXAgICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAubWFpbi1jb2wgICAgICAgIHsgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gIC5zaWRlYmFyICAgICAgICAgeyBib3JkZXItdG9wOiAycHggc29saWQgIzBhMGEwYTsgfVxuICAuZmVhdHVyZWQtc3RyaXAgIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLmZzLWNhcmQgICAgICAgICB7IGJvcmRlci1yaWdodDogbm9uZTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvICAgICAgICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxuICAuaGVyby10ZXh0ICAgICAgIHsgYm9yZGVyLXJpZ2h0OiBub25lOyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBhMGEwYTsgbWluLWhlaWdodDogYXV0bzsgfVxuICAuaGVyby1wb3N0ICAgICAgIHsgbWluLWhlaWdodDogMjgwcHg7IH1cbiAgLmFydGljbGUtcm93ICAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XG4gIC5hci1pbWctd3JhcCAgICAgeyBoZWlnaHQ6IDIwMHB4OyBtaW4taGVpZ2h0OiBhdXRvOyB9XG4gIC50b3Atc2VhcmNoICAgICAgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5mZWF0dXJlZC1zdHJpcCAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5mZWF0dXJlZC1zdHJpcCAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  }));
}
_staticBlock();

/***/ },

/***/ 8051
/*!******************************!*\
  !*** ./src/app/blog/blog.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blog: () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class Blog {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  // ==================== GET METHODS ====================
  getPost(id) {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getAllPosts() {
    return this.http.get(`${this.API}/blog/posts`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getPublishedPosts() {
    return this.http.get(`${this.API}/blog/posts`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getPublishedPost(idOrSlug) {
    return this.http.get(`${this.API}/blog/posts/${idOrSlug}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getPostsByCategory(category) {
    return this.http.get(`${this.API}/blog/posts/category/${category}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getCategories() {
    return this.http.get(`${this.API}/blog/categories`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  incrementViews(postId) {
    return this.http.post(`${this.API}/blog/posts/${postId}/view`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  // ==================== POST/PUT METHODS ====================
  savePost(id, formData) {
    // NOTE: FormData cannot be encrypted directly.
    // Extract fields, encrypt non-file data, then reattach image.
    const plainData = {};
    formData.forEach((value, key) => {
      if (!(value instanceof File)) {
        plainData[key] = value;
      }
    });
    const encryptedPayload = this.crypto.encrypt(plainData);
    const encryptedFormData = new FormData();
    encryptedFormData.append('encryptedPayload', encryptedPayload);
    // Re-attach image file if present
    const imageFile = formData.get('image');
    if (imageFile instanceof File) {
      encryptedFormData.append('image', imageFile, imageFile.name);
    }
    const request$ = id ? this.http.put(`${this.API}/blog/posts/${id}`, encryptedFormData) : this.http.post(`${this.API}/blog/posts`, encryptedFormData);
    return request$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      try {
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
  deletePost(id) {
    const encryptedPayload = this.crypto.encrypt({
      id
    });
    return this.http.delete(`${this.API}/blog/posts/${id}`, {
      body: {
        encryptedPayload
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  publishPost(id) {
    const encryptedPayload = this.crypto.encrypt({
      id
    });
    return this.http.patch(`${this.API}/blog/posts/${id}/publish`, {
      encryptedPayload
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function Blog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Blog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: Blog,
    factory: Blog.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_blog_blog-module_ts.js.map