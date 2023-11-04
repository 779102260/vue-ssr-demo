(self["webpackChunksrr_0_1"] = self["webpackChunksrr_0_1"] || []).push([["src_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&setup=true&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&setup=true&lang=js& ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createPinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createPinia */ "./src/createPinia.js");




var __default__ = {
  // 自定义，代替serverPrefetch 更灵活些
  asyncData: function asyncData(_ref) {
    return (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var pinia, route, userStore;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pinia = _ref.pinia, route = _ref.route;
            // 触发 action 后，会返回 Promise
            // return store.dispatch('fetchUser')
            userStore = (0,_createPinia__WEBPACK_IMPORTED_MODULE_3__.useUserStore)(pinia);
            _context.next = 4;
            return userStore.setUser();
          case 4:
            return _context.abrupt("return", {});
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  } // vue ssr内部调用
  // serverPrefetch(vm) {
  //     console.log('serverPrefetch', vm.$store, vm.$route)
  //     return vm.$store.dispatch('fetchUser')
  // }
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(__default__, {
  __name: 'Home',
  props: {
    msg: String
  },
  setup: function setup(__props) {
    var props = __props;

    // const vm = getCurrentInstance()
    // const store = vm.proxy.$store
    // const user = computed(() => store.state.user)
    // const count = computed(() => store.state.count)
    var userStore = (0,_createPinia__WEBPACK_IMPORTED_MODULE_3__.useUserStore)();
    var countStore = (0,_createPinia__WEBPACK_IMPORTED_MODULE_3__.useCounterStore)();
    function onAddClick() {
      // store.commit('setCount', count.value + 1)
      countStore.setCount(countStore.count + 1);
    }
    function onSubClick() {
      // store.commit('setCount', count.value  -1)
      countStore.setCount(countStore.count - 1);
    }
    return {
      __sfc: true,
      props: props,
      userStore: userStore,
      countStore: countStore,
      onAddClick: onAddClick,
      onSubClick: onSubClick
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_vm._v("\n    HOME"), _c("span", [_vm._v("~")]), _vm._v("BIG\n    "), _c("p", [_vm._v(_vm._s(_setup.userStore.user.name))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_setup.countStore.count))]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.onAddClick
    }
  }, [_vm._v("+")]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.onSubClick
    }
  }, [_vm._v("-")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js-pure/es/object/assign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/assign.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.object.assign */ "./node_modules/core-js-pure/modules/es.object.assign.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.assign;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-assign.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js-pure/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js-pure/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js-pure/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.assign.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js-pure/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/assign.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/assign */ "./node_modules/core-js-pure/es/object/assign.js");

module.exports = parent;


/***/ }),

/***/ "./src/pages/Home.vue":
/*!****************************!*\
  !*** ./src/pages/Home.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_5a90ec03___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=5a90ec03& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&");
/* harmony import */ var _Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&setup=true&lang=js& */ "./src/pages/Home.vue?vue&type=script&setup=true&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  _Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_5a90ec03___WEBPACK_IMPORTED_MODULE_2__.render,
  _Home_vue_vue_type_template_id_5a90ec03___WEBPACK_IMPORTED_MODULE_2__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/pages/Home.vue?vue&type=script&setup=true&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/Home.vue?vue&type=script&setup=true&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&setup=true&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&setup=true&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/assign */ "./node_modules/core-js-pure/stable/object/assign.js");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDUixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxxRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2dLLENBQUMsaUVBQWUsb0xBQUcsRUFBQzs7Ozs7Ozs7OztBQ0FuTSxvSUFBNkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcnItMC0xL0hvbWUudnVlIiwid2VicGFjazovL3Nyci0wLTEvLi9zcmMvcGFnZXMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL3NyYy9wYWdlcy9Ib21lLnZ1ZT8yYTYwIiwid2VicGFjazovL3Nyci0wLTEvLi9zcmMvcGFnZXMvSG9tZS52dWU/OTgxYyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2Fzc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgSE9NRTxzcGFuPn48L3NwYW4+QklHXG4gICAgICAgIDxwPnt7IHVzZXJTdG9yZS51c2VyLm5hbWUgfX08L3A+XG4gICAgICAgIDxwPnt7IGNvdW50U3RvcmUuY291bnQgIH19PC9wPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9uQWRkQ2xpY2tcIj4rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwib25TdWJDbGlja1wiPi08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgb25Nb3VudGVkIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgdXNlVXNlclN0b3JlLCB1c2VDb3VudGVyU3RvcmUgfSBmcm9tIFwiLi4vY3JlYXRlUGluaWFcIjtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgbXNnOiBTdHJpbmdcbn0pXG5cbi8vIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbi8vIGNvbnN0IHN0b3JlID0gdm0ucHJveHkuJHN0b3JlXG4vLyBjb25zdCB1c2VyID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuc3RhdGUudXNlcilcbi8vIGNvbnN0IGNvdW50ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuc3RhdGUuY291bnQpXG5jb25zdCB1c2VyU3RvcmUgPSB1c2VVc2VyU3RvcmUoKVxuY29uc3QgY291bnRTdG9yZSA9IHVzZUNvdW50ZXJTdG9yZSgpXG5cbmZ1bmN0aW9uIG9uQWRkQ2xpY2soKSB7XG4gICAgLy8gc3RvcmUuY29tbWl0KCdzZXRDb3VudCcsIGNvdW50LnZhbHVlICsgMSlcbiAgICBjb3VudFN0b3JlLnNldENvdW50KGNvdW50U3RvcmUuY291bnQgKyAxKVxufVxuXG5mdW5jdGlvbiBvblN1YkNsaWNrKCkge1xuICAgIC8vIHN0b3JlLmNvbW1pdCgnc2V0Q291bnQnLCBjb3VudC52YWx1ZSAgLTEpXG4gICAgY291bnRTdG9yZS5zZXRDb3VudChjb3VudFN0b3JlLmNvdW50ICAtMSlcbn0gICBcblxuPC9zY3JpcHQ+XG48c2NyaXB0PlxuaW1wb3J0IHsgdXNlVXNlclN0b3JlIH0gZnJvbSBcIi4uL2NyZWF0ZVBpbmlhXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8g6Ieq5a6a5LmJ77yM5Luj5pu/c2VydmVyUHJlZmV0Y2gg5pu054G15rS75LqbXG4gICAgYXN5bmMgYXN5bmNEYXRhKHtwaW5pYSwgcm91dGV9KSB7XG4gICAgICAgIC8vIOinpuWPkSBhY3Rpb24g5ZCO77yM5Lya6L+U5ZueIFByb21pc2VcbiAgICAgICAgLy8gcmV0dXJuIHN0b3JlLmRpc3BhdGNoKCdmZXRjaFVzZXInKVxuICAgICAgICBjb25zdCB1c2VyU3RvcmUgPSB1c2VVc2VyU3RvcmUocGluaWEpXG4gICAgICAgIGF3YWl0IHVzZXJTdG9yZS5zZXRVc2VyKClcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcbiAgICAvLyB2dWUgc3Ny5YaF6YOo6LCD55SoXG4gICAgLy8gc2VydmVyUHJlZmV0Y2godm0pIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlcnZlclByZWZldGNoJywgdm0uJHN0b3JlLCB2bS4kcm91dGUpXG4gICAgLy8gICAgIHJldHVybiB2bS4kc3RvcmUuZGlzcGF0Y2goJ2ZldGNoVXNlcicpXG4gICAgLy8gfVxufVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2MsXG4gICAgX3NldHVwID0gX3ZtLl9zZWxmLl9zZXR1cFByb3h5XG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl92KFwiXFxuICAgIEhPTUVcIiksXG4gICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJ+XCIpXSksXG4gICAgX3ZtLl92KFwiQklHXFxuICAgIFwiKSxcbiAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3NldHVwLnVzZXJTdG9yZS51c2VyLm5hbWUpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF9zZXR1cC5jb3VudFN0b3JlLmNvdW50KSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF9zZXR1cC5vbkFkZENsaWNrIH0gfSwgW192bS5fdihcIitcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF9zZXR1cC5vblN1YkNsaWNrIH0gfSwgW192bS5fdihcIi1cIildKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24nKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLk9iamVjdC5hc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWFzc2lnbiAtLSBzYWZlXG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmICRhc3NpZ24oeyBiOiAxIH0sICRhc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN5bWJvbCAtLSBzYWZlXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQob2JqZWN0S2V5cyhTKSwgZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGNhbGwocHJvcGVydHlJc0VudW1lcmFibGUsIFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1hc3NpZ24gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBhcml0eTogMiwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2Fzc2lnbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5MGVjMDMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2NjL0QvdnVlLXNzci1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVhOTBlYzAzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhOTBlYzAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhOTBlYzAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTkwZWMwMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTkwZWMwMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3BhZ2VzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3QvYXNzaWduXCIpOyJdLCJuYW1lcyI6WyJ1c2VVc2VyU3RvcmUiLCJhc3luY0RhdGEiLCJwaW5pYSIsInJvdXRlIiwidXNlclN0b3JlIiwiX2NvbnRleHQiLCJzZXRVc2VyIiwiY29tcHV0ZWQiLCJnZXRDdXJyZW50SW5zdGFuY2UiLCJvbk1vdW50ZWQiLCJ1c2VDb3VudGVyU3RvcmUiLCJjb3VudFN0b3JlIiwib25BZGRDbGljayIsInNldENvdW50IiwiY291bnQiLCJvblN1YkNsaWNrIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9zZXR1cCIsIl9zZXR1cFByb3h5IiwiX3YiLCJfcyIsInVzZXIiLCJuYW1lIiwib24iLCJjbGljayIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9