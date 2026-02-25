"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_blog-detail_blog-detail-module_ts"],{

/***/ 8218
/*!***************************************************!*\
  !*** ./src/app/blog-detail/blog-detail-module.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailModule: () => (/* binding */ BlogDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-detail.component */ 4112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
var _staticBlock;






const routes = [{
  path: ':id',
  component: _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent
}];
class BlogDetailModule {
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetailModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetailModule)();
  }, this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: BlogDetailModule
  }), this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)]
  }));
}
_staticBlock();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogDetailModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ },

/***/ 4112
/*!******************************************************!*\
  !*** ./src/app/blog-detail/blog-detail.component.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailComponent: () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _blog_detail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-detail */ 3505);
/* harmony import */ var _auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth-modal.service */ 2454);
/* harmony import */ var src_app_core_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/token.service */ 6280);

var _staticBlock;











function BlogDetailComponent_ion_chip_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-chip", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r1);
  }
}
function BlogDetailComponent_ion_card_59_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54)(1, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_59_div_9_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.startEdit(comment_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_59_div_9_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.deleteComment(comment_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogDetailComponent_ion_card_59_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r4.content, " ");
  }
}
function BlogDetailComponent_ion_card_59_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BlogDetailComponent_ion_card_59_div_11_Template_ion_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r4.editedContent, $event) || (ctx_r4.editedContent = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_59_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.updateComment(comment_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_59_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.editedContent);
  }
}
function BlogDetailComponent_ion_card_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 43)(1, "ion-card-content")(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 46)(5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BlogDetailComponent_ion_card_59_div_9_Template, 5, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BlogDetailComponent_ion_card_59_p_10_Template, 2, 1, "p", 50)(11, BlogDetailComponent_ion_card_59_div_11_Template, 6, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 52)(13, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_ion_card_59_Template_ion_button_click_13_listener() {
      const comment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.likeComment(comment_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const comment_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", comment_r4.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", comment_r4.author.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r4.author.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](comment_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", comment_r4.userId == ctx_r4.currentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.editingCommentId !== comment_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.editingCommentId === comment_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", comment_r4.likes, " ");
  }
}
function BlogDetailComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No comments yet. Be the first to share your thoughts!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function BlogDetailComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Loading Related Articles... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function BlogDetailComponent_div_62_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_div_62_ion_card_1_Template_ion_card_click_0_listener() {
      const relatedPost_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.viewRelatedPost(relatedPost_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-card-content")(3, "ion-chip", 70)(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const relatedPost_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", relatedPost_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", relatedPost_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.getCategoryLabel(relatedPost_r8.category), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](relatedPost_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", relatedPost_r8.readTime, " ");
  }
}
function BlogDetailComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BlogDetailComponent_div_62_ion_card_1_Template, 11, 5, "ion-card", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.relatedPosts);
  }
}
function BlogDetailComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72)(1, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No related articles found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class BlogDetailComponent {
  constructor(route, router, blogDetailService, authModal, tokenService) {
    this.route = route;
    this.router = router;
    this.blogDetailService = blogDetailService;
    this.authModal = authModal;
    this.tokenService = tokenService;
    this.newComment = "";
    this.isSubmittingComment = false;
    this.currentUserId = null;
    this.editingCommentId = null;
    this.editedContent = "";
    this.Loading = false;
    this.relatedPosts = [];
    this.comments = [];
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = +params["id"];
      this.loadPost();
      this.loadComments();
      this.setCurrentUser();
    });
  }
  setCurrentUser() {
    if (!this.tokenService.isValid()) {
      this.currentUserId = null;
      return;
    }
    const decoded = this.tokenService.decode();
    this.currentUserId = decoded ? Number(decoded?.id ?? decoded?.userId ?? null) : null;
  }
  loadPost() {
    this.blogDetailService.getPostById(this.postId).subscribe(result => {
      const res = result.data;
      this.post = {
        id: res.id,
        title: res.title,
        image: `http://localhost:4001/${res.featured_image}`,
        author: {
          name: res.author_name || "Admin",
          avatar: res.author_avatar || "https://ui-avatars.com/api/?name=Admin",
          bio: res.author_bio || ""
        },
        category: res.category,
        categoryId: res.category_id,
        // Store category ID for related posts
        tags: res.tags || [],
        date: res.published_at ? new Date(res.published_at).toDateString() : "",
        readTime: res.read_time || "5 min read",
        views: res.views || 0,
        likes: res.likes || 0,
        // sanitize HTML coming from server before binding to [innerHTML]
        content: res.content || ''
      };
      // Load related posts after getting the post data
      if (this.post.categoryId) {
        this.loadRelated(this.post.categoryId);
      }
    });
  }
  loadComments() {
    this.blogDetailService.getComments(this.postId).subscribe(res => {
      const commentsData = res.data || [];
      this.comments = commentsData.map(comment => ({
        id: comment.id,
        userId: comment.user_id,
        author: {
          name: comment.author_name || "User",
          avatar: comment.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "User")}&size=100`
        },
        content: comment.content,
        date: this.formatCommentDate(comment.created_at),
        likes: comment.likes || 0,
        replies: comment.replies || []
      }));
    }, error => {
      console.error("Error loading comments:", error);
      this.comments = [];
    });
  }
  loadRelated(categoryId) {
    this.blogDetailService.getRelatedPosts(categoryId, this.postId).subscribe(res => {
      if (res.success == true) {
        this.Loading = false;
        const relatedData = res.data || [];
        this.relatedPosts = relatedData.map(post => ({
          id: post.id,
          title: post.title,
          image: `http://localhost:4001/${post.featured_image}`,
          category: post.category,
          readTime: post.read_time || "5 min"
        }));
      } else {
        this.relatedPosts = res.data || [];
        this.Loading = true;
      }
    });
  }
  openLoginPanel() {
    var _this = this;
    return (0,_var_www_html_StartHere_starthere_user_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield _this.authModal.openLogin();
      } catch (err) {}
    })();
  }
  postComment() {
    if (!this.newComment?.trim()) return;
    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return; // 🚀 hard stop
    }
    const decodedUser = this.tokenService.decode();
    if (!decodedUser?.id) {
      this.openLoginPanel();
      return;
    }
    this.isSubmittingComment = true;
    const commentData = {
      post_id: this.postId,
      content: this.newComment.trim()
    };
    this.blogDetailService.addComment(commentData).subscribe(res => {
      const comment = res.data;
      this.comments.unshift({
        id: comment.id,
        userId: comment.user_id,
        author: {
          name: comment.author_name,
          avatar: comment.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "User")}&size=100`
        },
        content: comment.content,
        date: "Just now",
        likes: 0
      });
      this.newComment = "";
      this.isSubmittingComment = false;
    }, error => {
      console.error("Error posting comment:", error);
      this.isSubmittingComment = false;
    });
  }
  likePost() {
    this.blogDetailService.likePost(this.postId).subscribe(res => {
      this.post.likes = res.data.likes;
    }, error => {
      console.error("Error liking post:", error);
    });
  }
  likeComment(commentId) {
    this.blogDetailService.likeComment(commentId).subscribe(res => {
      const comment = this.comments.find(c => c.id === commentId);
      if (comment) {
        comment.likes = res.data.likes;
      }
    }, error => {
      console.error("Error liking comment:", error);
    });
  }
  viewRelatedPost(postId) {
    this.router.navigate(["/blog", postId]).then(() => {
      // Reload the page to fetch new data
      window.location.reload();
    });
  }
  getCategoryLabel(category) {
    return category.replace(/-/g, " ");
  }
  formatCommentDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    return date.toLocaleDateString();
  }
  startEdit(comment) {
    this.editingCommentId = comment.id;
    this.editedContent = comment.content;
  }
  cancelEdit() {
    this.editingCommentId = null;
    this.editedContent = "";
  }
  updateComment(commentId) {
    if (!this.editedContent.trim()) return;
    const content = this.editedContent.trim();
    this.blogDetailService.updateComment(commentId, this.currentUserId, content).subscribe(res => {
      if (res.success == true) {
        this.cancelEdit();
        this.loadComments();
      }
    }, err => {
      console.error("Update failed", err);
    });
  }
  deleteComment(commentId) {
    this.blogDetailService.deleteComment(commentId, this.currentUserId).subscribe(res => {
      if (res.success == true) {
        this.comments = this.comments.filter(c => c.id !== commentId);
        this.loadComments();
        this.cancelEdit();
      }
    }, err => {
      console.error("Delete failed", err);
    });
  }
  createPost() {
    this.router.navigate(["/blog-post"]);
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_blog_detail__WEBPACK_IMPORTED_MODULE_7__.BlogDetail), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_auth_modal_service__WEBPACK_IMPORTED_MODULE_8__.AuthModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_token_service__WEBPACK_IMPORTED_MODULE_9__.TokenService));
  }, this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BlogDetailComponent,
    selectors: [["app-blog-detail"]],
    decls: 66,
    vars: 29,
    consts: [[1, "post-hero"], [3, "src", "alt"], [1, "article-header"], ["color", "success", 1, "category-chip"], ["name", "map"], [1, "article-meta"], [1, "author-section"], [1, "author-avatar", 3, "src", "alt"], [1, "author-details"], [1, "author-name"], [1, "author-bio"], [1, "post-info"], [1, "info-item"], ["name", "calendar-outline"], ["name", "time-outline"], ["name", "eye-outline"], [1, "article-content", 3, "innerHTML"], [1, "article-tags"], [1, "tags-list"], ["outline", "true", 4, "ngFor", "ngForOf"], [1, "article-actions"], ["fill", "outline", "color", "danger", 3, "click"], ["name", "heart-outline", "slot", "start"], ["fill", "outline", "color", "primary"], ["name", "chatbubble-outline", "slot", "start"], [1, "author-card"], [1, "author-card-content"], [1, "author-avatar-large", 3, "src", "alt"], [1, "author-info"], [1, "comments-section"], [1, "add-comment-card"], ["placeholder", "Share your thoughts...", "rows", "3", 3, "ngModelChange", "ngModel", "disabled"], [1, "btn", "btn-success", "w-100", 3, "click", "disabled"], [1, "bi", "bi-telegram"], ["class", "comment-card", 4, "ngFor", "ngForOf"], ["class", "no-comments", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center loader-wrapper", "style", "min-height: 80vh", 4, "ngIf"], ["class", "related-grid mb-2", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], [1, "btn", "btn-success", "position-fixed", "bottom-0", "end-0", "m-4", "rounded-circle", "shadow-lg", 2, "width", "56px", "height", "56px", "z-index", "1000", 3, "click"], ["name", "add", 2, "font-size", "24px"], ["outline", "true"], ["name", "pricetag-outline"], [1, "comment-card"], [1, "comment-header"], [1, "comment-avatar", 3, "src", "alt"], [1, "comment-author-info"], [1, "comment-author-name"], [1, "comment-date"], ["class", "comment-owner-actions", 4, "ngIf"], ["class", "comment-content", 4, "ngIf"], [4, "ngIf"], [1, "comment-actions"], ["fill", "clear", "size", "small", 3, "click"], [1, "comment-owner-actions"], ["name", "create-outline"], ["fill", "clear", "size", "small", "color", "danger", 3, "click"], ["name", "trash-outline"], [1, "comment-content"], ["rows", "3", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "no-comments"], [1, "d-flex", "justify-content-center", "align-items-center", "loader-wrapper", 2, "min-height", "80vh"], [1, "text-center"], ["src", "../../assets/assets/Bus vehicle.gif", "width", "180", "alt", "Loading"], [1, "mt-3", "text-muted", "text-center"], [1, "related-grid", "mb-2"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], ["size", "small", "color", "success", "outline", "true"], [1, "read-time"], [1, "text-center", "mt-4"], [1, "text-muted"]],
    template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "ion-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11)(18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 17)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, BlogDetailComponent_ion_chip_32_Template, 4, 1, "ion-chip", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 20)(34, "ion-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_Template_ion_button_click_34_listener() {
          return ctx.likePost();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "ion-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "ion-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 25)(41, "ion-card")(42, "ion-card-content")(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 28)(46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 29)(51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "ion-card", 30)(54, "ion-card-content")(55, "ion-textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function BlogDetailComponent_Template_ion_textarea_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.newComment, $event) || (ctx.newComment = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_Template_button_click_56_listener() {
          return ctx.postComment();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, BlogDetailComponent_ion_card_59_Template, 16, 8, "ion-card", 34)(60, BlogDetailComponent_div_60_Template, 3, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, BlogDetailComponent_div_61_Template, 5, 0, "div", 36)(62, BlogDetailComponent_div_62_Template, 2, 1, "div", 37)(63, BlogDetailComponent_div_63_Template, 3, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlogDetailComponent_Template_button_click_64_listener() {
          return ctx.createPost();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "ion-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.post.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getCategoryLabel(ctx.post.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.post.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.post.author.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.post.date, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.post.readTime, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.post.views, " views ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.post.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Like (", ctx.post.likes, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Comment (", ctx.comments.length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.post.author.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.post.author.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.post.author.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Comments (", ctx.comments.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.newComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isSubmittingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.newComment.trim() || ctx.isSubmittingComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isSubmittingComment ? "Posting..." : "Post Comment", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.comments.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.Loading && ctx.relatedPosts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.Loading && ctx.relatedPosts.length === 0);
      }
    },
    dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: [".post-hero[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: hidden;\n}\n.post-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .post-hero[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n\n.article-header[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.article-header[_ngcontent-%COMP%]   .category-chip[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-weight: 600;\n}\n.article-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  line-height: 1.3;\n  color: #1f2937;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .article-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n\n.article-meta[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 20px 0;\n  margin-bottom: 32px;\n}\n\n.author-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.author-section[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n.author-section[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1f2937;\n  font-size: 1.125rem;\n  margin-bottom: 4px;\n}\n.author-section[_ngcontent-%COMP%]   .author-bio[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n\n.post-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n}\n.post-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.post-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  padding: 0 20px 40px;\n  max-width: 800px;\n  margin: 0 auto;\n  font-size: 1.125rem;\n  line-height: 1.8;\n  color: #374151;\n}\n.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-top: 40px;\n  margin-bottom: 16px;\n}\n.article-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-top: 32px;\n  margin-bottom: 12px;\n}\n.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding-left: 24px;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.article-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-weight: 600;\n}\n\n.article-tags[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n  border-top: 1px solid #e5e7eb;\n}\n.article-tags[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 16px;\n  color: #1f2937;\n}\n.article-tags[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.article-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  padding: 24px 20px;\n  border-top: 1px solid #e5e7eb;\n  flex-wrap: wrap;\n}\n\n.author-card[_ngcontent-%COMP%] {\n  padding: 0 20px 32px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-avatar-large[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 8px;\n  color: #1f2937;\n}\n.author-card[_ngcontent-%COMP%]   .author-card-content[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 12px;\n}\n\n.comments-section[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.comments-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 24px;\n  color: #1f2937;\n}\n\n.add-comment-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.add-comment-card[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --background: #f9fafb;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n\n.comment-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.comment-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-author-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n}\n.comment-header[_ngcontent-%COMP%]   .comment-date[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n\n.comment-content[_ngcontent-%COMP%] {\n  color: #4b5563;\n  line-height: 1.6;\n  margin-bottom: 12px;\n}\n\n.comment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.related-posts[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  background: #f9fafb;\n}\n.related-posts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin-bottom: 24px;\n  color: #1f2937;\n  text-align: center;\n}\n\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin: 12px 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.related-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .read-time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKO0FBR0U7RUFWRjtJQVdJLGFBQUE7RUFBRjtBQUNGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBUEY7SUFRSSxrQkFBQTtFQURKO0FBQ0Y7O0FBS0E7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBTEY7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsZUFBQTtBQUxOOztBQVdBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJGO0FBVUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLG1CQUFBO0FBVko7QUFhRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWFJO0VBQ0UsbUJBQUE7QUFYTjtBQWVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBYko7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQWZGO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFmSjtBQWtCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWhCSjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFsQkY7O0FBc0JBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFuQkY7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBbkJKO0FBcUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFuQk47QUFzQkk7RUFDRSxPQUFBO0FBcEJOO0FBc0JNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFwQlI7QUF1Qk07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFyQlI7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF6QkY7QUEyQkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXpCSjs7QUE2QkE7RUFDRSxtQkFBQTtBQTFCRjtBQTRCRTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUExQko7O0FBOEJBO0VBQ0UsbUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBM0JGO0FBNkJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTNCSjtBQThCRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQTVCSjtBQStCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQTdCSjs7QUFpQ0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQTlCRjs7QUFrQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBL0JGO0FBaUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQS9CSjs7QUFtQ0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBaENGO0FBa0NFO0VBQ0UsU0FBQTtBQWhDSjtBQWtDSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFoQ047QUFtQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFqQ047QUFvQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBbENOIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9zdCBIZXJvXG4ucG9zdC1oZXJvIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbn1cblxuLy8gQXJ0aWNsZSBIZWFkZXJcbi5hcnRpY2xlLWhlYWRlciB7XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLmNhdGVnb3J5LWNoaXAge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4uYXJ0aWNsZS1tZXRhIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlN2ViO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5hdXRob3Itc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAuYXV0aG9yLWF2YXRhciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5hdXRob3ItbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFmMjkzNztcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuXG4gIC5hdXRob3ItYmlvIHtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5cbi5wb3N0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjBweDtcblxuICAuaW5mby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQXJ0aWNsZSBDb250ZW50XG4uYXJ0aWNsZS1jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB4IDQwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBjb2xvcjogIzM3NDE1MTtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICB1bCwgb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLy8gQXJ0aWNsZSBUYWdzXG4uYXJ0aWNsZS10YWdzIHtcbiAgcGFkZGluZzogMzJweCAyMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGNvbG9yOiAjMWYyOTM3O1xuICB9XG5cbiAgLnRhZ3MtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG59XG5cbi8vIEFydGljbGUgQWN0aW9uc1xuLmFydGljbGUtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDI0cHggMjBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gQXV0aG9yIENhcmRcbi5hdXRob3ItY2FyZCB7XG4gIHBhZGRpbmc6IDAgMjBweCAzMnB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICAuYXV0aG9yLWNhcmQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5hdXRob3ItYXZhdGFyLWxhcmdlIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxuXG4gICAgLmF1dGhvci1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbW1lbnRzIFNlY3Rpb25cbi5jb21tZW50cy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMzJweCAyMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gIH1cbn1cblxuLmFkZC1jb21tZW50LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG59XG5cbi5jb21tZW50LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY29tbWVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgLmNvbW1lbnQtYXZhdGFyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLmNvbW1lbnQtYXV0aG9yLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gIH1cblxuICAuY29tbWVudC1kYXRlIHtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5cbi5jb21tZW50LWNvbnRlbnQge1xuICBjb2xvcjogIzRiNTU2MztcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmNvbW1lbnQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4vLyBSZWxhdGVkIFBvc3RzXG4ucmVsYXRlZC1wb3N0cyB7XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5yZWxhdGVkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBtYXJnaW46IDEycHggMDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnJlYWQtdGltZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
}
_staticBlock();

/***/ },

/***/ 3505
/*!********************************************!*\
  !*** ./src/app/blog-detail/blog-detail.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetail: () => (/* binding */ BlogDetail)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _core_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/encryption.service */ 3242);
var _staticBlock;





class BlogDetail {
  constructor(http, crypto) {
    this.http = http;
    this.crypto = crypto;
    this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
  }
  // ==================== GET METHODS ====================
  getPostById(id) {
    return this.http.get(`${this.API}/blog/posts/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getRelatedPosts(categoryId, excludePostId) {
    return this.http.get(`${this.API}/blog/posts/related`, {
      params: {
        category_id: categoryId.toString(),
        exclude_id: excludePostId.toString(),
        limit: '3'
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  getComments(postId) {
    return this.http.get(`${this.API}/blog/posts/${postId}/comments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  // ==================== POST/PUT METHODS ====================
  addComment(commentData) {
    const encryptedPayload = this.crypto.encrypt(commentData);
    return this.http.post(`${this.API}/blog/comments`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      try {
        const decrypted = this.crypto.encrypt(res.data);
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
  likePost(postId) {
    const encryptedPayload = this.crypto.encrypt({
      postId
    });
    return this.http.post(`${this.API}/blog/posts/${postId}/like`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  likeComment(commentId) {
    const encryptedPayload = this.crypto.encrypt({
      commentId
    });
    return this.http.post(`${this.API}/blog/comments/${commentId}/like`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  updateComment(commentId, userId, content) {
    const encryptedPayload = this.crypto.encrypt({
      user_id: userId,
      content
    });
    return this.http.put(`${this.API}/blog/comments/${commentId}`, {
      encryptedPayload
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  deleteComment(commentId, userId) {
    const encryptedPayload = this.crypto.encrypt({
      user_id: userId
    });
    return this.http.delete(`${this.API}/blog/comments/${commentId}`, {
      body: {
        encryptedPayload
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      const decrypted = this.crypto.decrypt(res.data);
      return {
        ...res,
        data: decrypted
      };
    }));
  }
  static #_ = _staticBlock = () => (this.ɵfac = function BlogDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BlogDetail)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService));
  }, this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: BlogDetail,
    factory: BlogDetail.ɵfac,
    providedIn: 'root'
  }));
}
_staticBlock();

/***/ }

}]);
//# sourceMappingURL=src_app_blog-detail_blog-detail-module_ts.js.map