function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.isShown = false;
        this.title = 'sharayu';
      }

      _createClass(AppComponent, [{
        key: "hideNav",
        value: function hideNav() {
          this.elem = document.getElementById('navbarSupportedContent');
          this.elem.style.display = 'hidden';
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 70,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.8.1/css/all.css", "integrity", "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", "crossorigin", "anonymous"], [1, "navbar", "sticky-top", "navbar-expand-lg", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", "a-link"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fas", "fa-bars"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "w-100", "justify-content-end"], [1, "nav-item", "active"], ["href", "#", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link", "hidden-xs", "a-link"], [1, "sr-only"], ["href", "#", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link", "visible-xs", "a-link", 3, "click"], [1, "nav-item"], ["href", "#about", "data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "nav-link", "hidden-xs", "a-link"], ["href", "#about", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link", "visible-xs", "a-link"], ["href", "#contact", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link", "hidden-xs", "a-link"], ["href", "#contact", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "nav-link", "visible-xs", "a-link"], [1, "intro", "w-100", "top"], [1, "center", "w-100"], ["id", "round", "src", "/sharayu/assets/images/download.jpg", "alt", "", 1, "round"], [1, "text-center"], ["id", "about", 1, "about", "pad-top-150"], [1, "pad-top-150", "visible-xs"], [1, "font-50", "text-center"], [1, "font-25", "top", "margin-3"], ["id", "contact", 1, "contact", "pad-top-150"], [1, "margin-4", "pad-t", "d-flex", "flex-sm-row", "flex-column", "justify-content-around"], [1, "col1", "pt-10"], [1, "top-link", "visible-xs"], ["href", "https://github.com/sharayu134"], ["src", "./assets/images/gitt.png", "alt", "", 1, "icon"], [1, "font-25", "top-link", "a-link"], ["src", "./assets/images/gmail1.jpg", "alt", "", 1, "icon"], [1, "font-25", "top-link"], ["href", "https://www.linkedin.com/in/sharayu-yadav-4a698918b"], ["src", "./assets/images/incolor.png", "alt", "", 1, "icon"], [1, "work"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener() {
            return ctx.hideNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sharayu Yadav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "article", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Software Developer with 1+ years of experience working with Digital Banking and Foreign Exchange related products. Good exposure in product development, analysis and understanding of client requirements, debugging, build and deploy process. Experience in developing with coding standard as well as unit testing. Possess good communication & interpersonal skills and perseverance to undertake challenging jobs. Love to get hands on Angular, TypeScript, JavaScript, HTML, CSS, BootStrap, Tailwind, Spring Boot, JAVA, MySQL, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "article", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " gitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ysharayu18@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " linkedin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "section", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Titillium+Web\");\n*[_ngcontent-%COMP%] {\n  font-family: \"Titillium Web\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  height: 2000px;\n}\n.navbar[_ngcontent-%COMP%] {\n  min-height: 120px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 10px;\n  color: white;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n.fa-bars[_ngcontent-%COMP%] {\n  color: #007bff;\n  color: #9B59B6;\n  font-size: 30px;\n}\n.fa-bars[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n.navbar-collapse.in[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.intro[_ngcontent-%COMP%] {\n  font-size: 100px;\n  background-color: #9B59B6;\n  color: white;\n  margin-bottom: 5%;\n}\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #9B59B6;\n  color: white;\n}\n.contact[_ngcontent-%COMP%] {\n  background-color: #9B59B6;\n  color: white;\n}\n.about[_ngcontent-%COMP%] {\n  background-color: #9B59B6;\n  color: white;\n}\n.h1[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 300px !important;\n}\n.pad-t[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.a-link[_ngcontent-%COMP%]:hover {\n  color: #9B59B6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXEFuZ3VsYXJQcm9qZWN0c1xccG9ydGZvbGlvXFxzaGFyYXl1L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRUFBQTtBQUNSO0VBQ0Usd0NBQUE7QUNDRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FEQUE7RUFDRSxpQkFBQTtBQ0dGO0FEREE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0lGO0FERkE7RUFDRSxrQkFBQTtBQ0tGO0FESEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTUY7QURMRTtFQUNFLGNBQUE7QUNPSjtBREpBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFJQSxlQUFBO0FDSUY7QURQRTtFQUNFLGNBQUE7QUNTSjtBRExBO0VBQ0UseUJBQUE7QUNRRjtBRE5BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1NGO0FEUEE7RUFDRSw2QkFBQTtBQ1VGO0FEUkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNXRjtBRFRBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDWUY7QURWQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ2FGO0FEWEE7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0FDY0Y7QURaQTtFQUNFLGlCQUFBO0FDZUY7QURiQTtFQUNFLGlCQUFBO0FDZ0JGO0FEYkU7RUFDRSx5QkFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRpdGlsbGl1bStXZWJcIik7XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRpdGlsbGl1bSBXZWJcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDIwMDBweDtcclxufVxyXG4ubmF2YmFye1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFyIC5uYXYtaXRlbSB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbi5uYXZiYXIgLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIDpob3ZlcntcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxufVxyXG4uZmEtYmFycyB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICM5QjU5QjY7XHJcbiAgOmhvdmVye1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ubmF2YmFyLWNvbGxhcHNlLmluIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnRyb3tcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5QjU5QjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufVxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5QjU5QjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250YWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5QjU5QjY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hYm91dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI1OUI2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaDF7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDMwMHB4IWltcG9ydGFudDtcclxufVxyXG4ucGFkLXR7XHJcbiAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG4ucHQtMTB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmEtbGlua3tcclxuICAmOmhvdmVye1xyXG4gICAgY29sb3I6ICM5QjU5QjYhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRpdGlsbGl1bStXZWJcIik7XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiVGl0aWxsaXVtIFdlYlwiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAyMDAwcHg7XG59XG5cbi5uYXZiYXIge1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cblxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXIgLm5hdi1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubmF2YmFyIC5uYXYtbGluayB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uYXZiYXIgLm5hdi1saW5rIDpob3ZlciB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uZmEtYmFycyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogIzlCNTlCNjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmZhLWJhcnMgOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5uYXZiYXItY29sbGFwc2UuaW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uaW50cm8ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI1OUI2O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI1OUI2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlCNTlCNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI1OUI2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWQtdCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmEtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjOUI1OUI2ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\AngularProjects\portfolio\sharayu\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map