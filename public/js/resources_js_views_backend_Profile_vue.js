"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profile",
  components: {
    Nav: function Nav() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Nav_vue-_422b1").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Nav.vue */ "./resources/js/components/Nav.vue"));
    },
    PaginationComponet: function PaginationComponet() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Pagination_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Pagination.vue */ "./resources/js/components/Pagination.vue"));
    }
  },
  data: function data() {
    return {
      userDetails: {},
      treatments: {
        meta: {
          current_page: 1
        }
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["user"])),
  created: function created() {
    this.getMyProfile(this.$route.params.id);
    this.getAllAppointments();
  },
  methods: {
    //get my profile
    getMyProfile: function getMyProfile(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var api_url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                api_url = "https://extralive.herokuapp.com/api/v1/" + "account-details/";
                _context.next = 3;
                return axios.get(api_url + id, {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem("token"))
                  }
                });

              case 3:
                response = _context.sent;
                _this.userDetails = response.data.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //get all treatments
    getAllTreatmentes: function getAllTreatmentes() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var vm, api_url;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                vm = _this2;
                api_url = "https://extralive.herokuapp.com/api/v1/" + "my-treatments?page=".concat(vm.treatments.meta.current_page);
                _context2.next = 4;
                return axios.get(api_url, {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem("token"))
                  }
                }).then(function (response) {
                  vm.treatments = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //format date
    formatDate: function formatDate(dateString) {
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Profile container */\n.profile[data-v-74b67d5f] {\n  margin: 20px 0;\n}\n\n/* Profile sidebar */\n.profile-sidebar[data-v-74b67d5f] {\n  padding: 20px 0 10px 0;\n  background: #fff;\n}\n.profile-userpic img[data-v-74b67d5f] {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important;\n}\n.profile-usertitle[data-v-74b67d5f] {\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-usertitle-name[data-v-74b67d5f] {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.profile-usertitle-job[data-v-74b67d5f] {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.profile-userbuttons[data-v-74b67d5f] {\n  text-align: center;\n  margin-top: 10px;\n}\n.profile-userbuttons .btn[data-v-74b67d5f] {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\n.profile-userbuttons .btn[data-v-74b67d5f]:last-child {\n  margin-right: 0px;\n}\n.profile-usermenu[data-v-74b67d5f] {\n  margin-top: 30px;\n}\n.profile-usermenu ul li[data-v-74b67d5f] {\n  border-bottom: 1px solid #f0f4f7;\n}\n.profile-usermenu ul li[data-v-74b67d5f]:last-child {\n  border-bottom: none;\n}\n.profile-usermenu ul li a[data-v-74b67d5f] {\n  color: #93a3b5;\n  font-size: 14px;\n  font-weight: 400;\n}\n.profile-usermenu ul li a i[data-v-74b67d5f] {\n  margin-right: 8px;\n  font-size: 14px;\n}\n.profile-usermenu ul li a[data-v-74b67d5f]:hover {\n  background-color: #fafcfd;\n  color: #5b9bd1;\n}\n.profile-usermenu ul li.active[data-v-74b67d5f] {\n  border-bottom: none;\n}\n.profile-usermenu ul li.active a[data-v-74b67d5f] {\n  color: #5b9bd1;\n  background-color: #f6f9fb;\n  border-left: 2px solid #5b9bd1;\n  margin-left: -2px;\n}\n\n/* Profile Content */\n.profile-content[data-v-74b67d5f] {\n  padding: 20px;\n  background: #fff;\n  min-height: 460px;\n}\na[data-v-74b67d5f],\nbutton[data-v-74b67d5f],\ncode[data-v-74b67d5f],\ndiv[data-v-74b67d5f],\nimg[data-v-74b67d5f],\ninput[data-v-74b67d5f],\nlabel[data-v-74b67d5f],\nli[data-v-74b67d5f],\np[data-v-74b67d5f],\npre[data-v-74b67d5f],\nselect[data-v-74b67d5f],\nspan[data-v-74b67d5f],\nsvg[data-v-74b67d5f],\ntable[data-v-74b67d5f],\ntd[data-v-74b67d5f],\ntextarea[data-v-74b67d5f],\nth[data-v-74b67d5f],\nul[data-v-74b67d5f] {\n  border-radius: 0 !important;\n}\n.dashboard-stat[data-v-74b67d5f],\n.portlet[data-v-74b67d5f] {\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n}\n.portlet[data-v-74b67d5f] {\n  margin-top: 0;\n  margin-bottom: 25px;\n  padding: 0;\n  border-radius: 4px;\n}\n.portlet.bordered[data-v-74b67d5f] {\n  border-left: 2px solid #e6e9ec !important;\n}\n.portlet.light[data-v-74b67d5f] {\n  padding: 12px 20px 15px;\n  background-color: #fff;\n}\n.portlet.light.bordered[data-v-74b67d5f] {\n  border: 1px solid #e7ecf1 !important;\n}\n.list-separated[data-v-74b67d5f] {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.profile-stat[data-v-74b67d5f] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f0f4f7;\n}\n.profile-stat-title[data-v-74b67d5f] {\n  color: #7f90a4;\n  font-size: 25px;\n  text-align: center;\n}\n.uppercase[data-v-74b67d5f] {\n  text-transform: uppercase !important;\n}\n.profile-stat-text[data-v-74b67d5f] {\n  color: #5b9bd1;\n  font-size: 10px;\n  font-weight: 600;\n  text-align: center;\n}\n.profile-desc-title[data-v-74b67d5f] {\n  color: #7f90a4;\n  font-size: 17px;\n  font-weight: 600;\n}\n.profile-desc-text[data-v-74b67d5f] {\n  color: #7e8c9e;\n  font-size: 14px;\n}\n.margin-top-20[data-v-74b67d5f] {\n  margin-top: 20px !important;\n}\n[class*=\" fa-\"][data-v-74b67d5f]:not(.fa-stack),\n[class*=\" glyphicon-\"][data-v-74b67d5f],\n[class*=\" icon-\"][data-v-74b67d5f],\n[class^=\"fa-\"][data-v-74b67d5f]:not(.fa-stack),\n[class^=\"glyphicon-\"][data-v-74b67d5f],\n[class^=\"icon-\"][data-v-74b67d5f] {\n  display: inline-block;\n  line-height: 14px;\n  -webkit-font-smoothing: antialiased;\n}\n.profile-desc-link i[data-v-74b67d5f] {\n  width: 22px;\n  font-size: 19px;\n  color: #abb6c4;\n  margin-right: 5px;\n}\n.center[data-v-74b67d5f] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_74b67d5f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_74b67d5f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_74b67d5f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/backend/Profile.vue":
/*!************************************************!*\
  !*** ./resources/js/views/backend/Profile.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_74b67d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=74b67d5f&scoped=true& */ "./resources/js/views/backend/Profile.vue?vue&type=template&id=74b67d5f&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_id_74b67d5f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css& */ "./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_74b67d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_74b67d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "74b67d5f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/backend/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_74b67d5f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=style&index=0&id=74b67d5f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/backend/Profile.vue?vue&type=template&id=74b67d5f&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/backend/Profile.vue?vue&type=template&id=74b67d5f&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_74b67d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_74b67d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_74b67d5f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=74b67d5f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=template&id=74b67d5f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=template&id=74b67d5f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/Profile.vue?vue&type=template&id=74b67d5f&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary",
      },
      [
        _c("Nav"),
        _vm._v(" "),
        _c("div", { staticClass: "h-screen flex-grow-1 overflow-y-lg-auto" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("main", { staticClass: "py-6 bg-surface-secondary" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row profile" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "profile-sidebar" }, [
                    _c("div", { staticClass: "profile-userpic" }, [
                      _c("img", {
                        staticClass: "img-responsive center",
                        attrs: { src: _vm.asset("avater.jpg"), alt: "" },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "profile-usertitle" }, [
                      _c("div", { staticClass: "profile-usertitle-name" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.userDetails.details.name) +
                            "\n                  "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "profile-usertitle-job" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.userDetails.role) +
                            "\n                  "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "portlet light bordered" }, [
                      _c("div", [
                        _c("h4", { staticClass: "profile-desc-title" }, [
                          _vm._v("Address"),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "profile-desc-text" }, [
                          _vm._v(
                            "\n                      " +
                              _vm._s(_vm.userDetails.details.address) +
                              "\n                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "margin-top-20 profile-desc-link" },
                          [
                            _vm._v(
                              "\n                      Email :\n                      "
                            ),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://www.apollowebstudio.com",
                                },
                              },
                              [_vm._v(_vm._s(_vm.userDetails.email))]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "margin-top-20 profile-desc-link" },
                          [
                            _vm._v(
                              "\n                      Phone :\n                      "
                            ),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: "https://www.twitter.com/jasondavisfl/",
                                },
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.userDetails.details.phone_number)
                                ),
                              ]
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _vm.userDetails.role == "user"
                          ? _c("span", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Genotype :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.userDetails.details.genotype)
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Blood Group :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.blood_group
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("div", { staticClass: "profile-content" }, [
                    _vm.userDetails.role == "user"
                      ? _c("span", [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        NOK Name :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.apollowebstudio.com",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(
                                            _vm.userDetails.details.nok_name
                                          )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        DOB :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.apollowebstudio.com",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.userDetails.details.dob)
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Town :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.userDetails.details.town)
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        PHC :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.relationships
                                            .primary_healthcare
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        State :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.relationships
                                            .state
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Lga :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.relationships
                                            .lga
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        NOK Address :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.apollowebstudio.com",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(
                                            _vm.userDetails.details.nok_address
                                          )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        NOK Phone :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.apollowebstudio.com",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.nok_phone
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        NOK Relationship :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details
                                            .nok_relationship
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        NOK Address :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.nok_address
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Marital Status :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.marital_status
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Number of Dependants :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details
                                            .no_of_dependants
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Active Status :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.apollowebstudio.com",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(
                                            _vm.userDetails.details
                                              .is_subscribed
                                          )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Cancer :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.apollowebstudio.com",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.userDetails.details.cancer)
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Sickle Cell :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.sickle_cell
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Hypertension :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.hypertension
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Kidney Issue :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.kidney_issue
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "margin-top-20 profile-desc-link",
                                },
                                [
                                  _vm._v(
                                    "\n                        Registration Agent :\n                        "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "https://www.twitter.com/jasondavisfl/",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.userDetails.details.relationships
                                            .agents
                                        )
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.userDetails.role == "user"
                      ? _c("div", [
                          _c(
                            "div",
                            { staticClass: "card shadow border-0 mb-7" },
                            [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-hover table-nowrap",
                                  },
                                  [
                                    _c(
                                      "thead",
                                      { staticClass: "thead-light" },
                                      [
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("No..")]
                                          ),
                                          _vm._v(" "),
                                          _vm.user.role === "superadmin"
                                            ? _c(
                                                "th",
                                                { attrs: { scope: "col" } },
                                                [
                                                  _vm._v(
                                                    "\n                              Hospital Name\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("ENROLLEE ID")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Patient Name")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Doctor Name")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Cost of Treatment")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { attrs: { scope: "col" } },
                                            [_vm._v("Date")]
                                          ),
                                          _vm._v(" "),
                                          _c("th"),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.treatments.data,
                                        function (treatment, index) {
                                          return _c(
                                            "tr",
                                            { key: treatment.id },
                                            [
                                              _c("td", [
                                                _vm._v(_vm._s(index + 1)),
                                              ]),
                                              _vm._v(" "),
                                              _vm.user.role === "superadmin"
                                                ? _c("td", [
                                                    _vm._v(
                                                      "\n                              " +
                                                        _vm._s(
                                                          treatment
                                                            .relationships
                                                            .hospital.name
                                                        ) +
                                                        "\n                            "
                                                    ),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                              " +
                                                    _vm._s(
                                                      treatment.relationships
                                                        .enrolle.emp_id
                                                    ) +
                                                    "\n                            "
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  "\n                              " +
                                                    _vm._s(
                                                      treatment.relationships
                                                        .enrolle.first_name
                                                    ) +
                                                    "\n                            "
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(treatment.verified_by)
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    treatment.cost_of_treatment
                                                  )
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.formatDate(
                                                      treatment.date_and_time
                                                    )
                                                  )
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                { staticClass: "text-end" },
                                                [
                                                  _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "\n                                  btn btn-sm btn-square btn-info\n                                  text-danger-hover\n                                ",
                                                      attrs: {
                                                        to: "/",
                                                        type: "button",
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "bi bi-eye",
                                                      }),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.user.role === "superadmin"
                                                    ? _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "\n                                  btn btn-sm btn-square btn-danger\n                                  text-danger-hover\n                                ",
                                                          attrs: {
                                                            type: "button",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.deleteTreatments(
                                                                treatment.id
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "bi bi-trash",
                                                          }),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                ],
                                                1
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-footer border-0 py-5" },
                                [
                                  _c("PaginationComponet", {
                                    attrs: {
                                      pagination: _vm.treatments,
                                      offset: 10,
                                    },
                                    on: {
                                      paginate: function ($event) {
                                        return _vm.getAllAppointments()
                                      },
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      { staticClass: "bg-surface-primary border-bottom pt-6 pb-5" },
      [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "mb-npx" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-sm-6 col-12 mb-4 mb-sm-0" }, [
                _c("h1", { staticClass: "h2 mb-0 ls-tight" }, [
                  _vm._v("Profile"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-userbuttons" }, [
      _c(
        "button",
        { staticClass: "btn btn-success btn-sm", attrs: { type: "button" } },
        [_vm._v("\n                    Follow\n                  ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-danger btn-sm", attrs: { type: "button" } },
        [_vm._v("\n                    Message\n                  ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "profile-usermenu" }, [
      _c("ul", { staticClass: "nav" }, [
        _c("li", { staticClass: "active" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("i", { staticClass: "glyphicon glyphicon-home" }),
            _vm._v(
              "\n                        Overview\n                      "
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("All Appointments")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);