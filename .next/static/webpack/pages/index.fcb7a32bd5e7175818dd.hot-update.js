/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Counter.tsx":
/*!************************************!*\
  !*** ./src/components/Counter.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/liam/Documents/next-counter/src/components/Counter.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n__webpack_require__(\"./src/components sync recursive\")();\n\nfunction Counter() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      count = _useState[0],\n      setCount = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var count = Number(localStorage.getItem(\"count\") || 0);\n    setCount(count);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    localStorage.setItem(\"count\", count);\n  }, [count]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"body\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"App\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"app-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CounterCircle, {\n          counterName: \"Count\",\n          count: count\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          id: \"buttons-row\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CounterButton, {\n            colour: \"red\",\n            text: \"-\",\n            onClick: function onClick() {\n              return setCount(count - 1);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CounterButton, {\n            colour: \"white\",\n            text: \"0\",\n            onClick: function onClick() {\n              return setCount(0);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CounterButton, {\n            colour: \"green\",\n            text: \"+\",\n            onClick: function onClick() {\n              return setCount(count + 1);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Counter, \"MD2HH0EjGUMCoeKoB+fX0xWGIOA=\");\n\n_c = Counter;\n\nvar _c;\n\n$RefreshReg$(_c, \"Counter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VudGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0FHLHNEQUFPOztBQUVRLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFDOUIsa0JBQTBCSCwrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7QUFBQSxNQUFPSSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUcsS0FBSyxHQUFHRSxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixLQUFpQyxDQUFsQyxDQUFwQjtBQUNBSCxJQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQUgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pNLElBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixFQUE4QkwsS0FBOUI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDSTtBQUFLLFVBQUUsRUFBQyxhQUFSO0FBQUEsZ0NBQ0ksOERBQUMsYUFBRDtBQUFlLHFCQUFXLEVBQUMsT0FBM0I7QUFBbUMsZUFBSyxFQUFFQTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxZQUFFLEVBQUMsYUFBUjtBQUFBLGtDQUNJLDhEQUFDLGFBQUQ7QUFBZSxrQkFBTSxFQUFDLEtBQXRCO0FBQTRCLGdCQUFJLEVBQUMsR0FBakM7QUFBcUMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNQyxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsYUFBRDtBQUFlLGtCQUFNLEVBQUMsT0FBdEI7QUFBOEIsZ0JBQUksRUFBQyxHQUFuQztBQUF1QyxtQkFBTyxFQUFFO0FBQUEscUJBQU1DLFFBQVEsQ0FBQyxDQUFELENBQWQ7QUFBQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0ksOERBQUMsYUFBRDtBQUFlLGtCQUFNLEVBQUMsT0FBdEI7QUFBOEIsZ0JBQUksRUFBQyxHQUFuQztBQUF1QyxtQkFBTyxFQUFFO0FBQUEscUJBQU1BLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBZDtBQUFBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDs7R0ExQnVCRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRlci50c3g/OThhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbnJlcXVpcmUoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudGVyKCkge1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50XCIpIHx8IDApO1xuICAgICAgICBzZXRDb3VudChjb3VudCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudFwiLCBjb3VudClcbiAgICB9LCBbY291bnRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYXBwLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvdW50ZXJDaXJjbGUgY291bnRlck5hbWU9XCJDb3VudFwiIGNvdW50PXtjb3VudH0+PC9Db3VudGVyQ2lyY2xlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYnV0dG9ucy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVyQnV0dG9uIGNvbG91cj1cInJlZFwiIHRleHQ9XCItXCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgLSAxKX0+PC9Db3VudGVyQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZXJCdXR0b24gY29sb3VyPVwid2hpdGVcIiB0ZXh0PVwiMFwiIG9uQ2xpY2s9eygpID0+IHNldENvdW50KDApfT48L0NvdW50ZXJCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlckJ1dHRvbiBjb2xvdXI9XCJncmVlblwiIHRleHQ9XCIrXCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+PC9Db3VudGVyQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2JvZHkgPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJDb3VudGVyIiwiY291bnQiLCJzZXRDb3VudCIsIk51bWJlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Counter.tsx\n");

/***/ }),

/***/ "./src/components sync recursive":
/*!******************************!*\
  !*** ./src/components/ sync ***!
  \******************************/
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/components sync recursive";
module.exports = webpackEmptyContext;

/***/ })

});