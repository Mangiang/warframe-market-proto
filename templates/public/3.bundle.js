(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../public/css/relicForm.module.css":
/*!******************************************!*\
  !*** ../public/css/relicForm.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../static/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../static/node_modules/css-loader/dist/cjs.js!./relicForm.module.css */ \"./node_modules/css-loader/dist/cjs.js!../public/css/relicForm.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcHVibGljL2Nzcy9yZWxpY0Zvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9wdWJsaWMvY3NzL3JlbGljRm9ybS5tb2R1bGUuY3NzP2U2MTciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3RhdGljL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vc3RhdGljL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVsaWNGb3JtLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkobW9kdWxlLmlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../public/css/relicForm.module.css\n");

/***/ }),

/***/ "./js/components/RelicForm.jsx":
/*!*************************************!*\
  !*** ./js/components/RelicForm.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactstrap = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n\nvar _relicsStore = __webpack_require__(/*! ../store/relicsStore */ \"./js/store/relicsStore.jsx\");\n\nvar _relicsStore2 = _interopRequireDefault(_relicsStore);\n\nvar _relicsFormStore = __webpack_require__(/*! ../store/relicsFormStore */ \"./js/store/relicsFormStore.jsx\");\n\nvar _relicsFormStore2 = _interopRequireDefault(_relicsFormStore);\n\nvar _reactTabs = __webpack_require__(/*! react-tabs */ \"./node_modules/react-tabs/esm/index.js\");\n\n__webpack_require__(/*! react-tabs/style/react-tabs.css */ \"./node_modules/react-tabs/style/react-tabs.css\");\n\n__webpack_require__(/*! ../../../public/css/relicForm.module.css */ \"../public/css/relicForm.module.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RelicForm = function RelicForm(props) {\n    var _useState = (0, _react.useState)(_relicsFormStore2.default.initialState),\n        _useState2 = _slicedToArray(_useState, 2),\n        relicsFormState = _useState2[0],\n        setRelicsFormState = _useState2[1];\n\n    var _useState3 = (0, _react.useState)(_relicsStore2.default.initialState),\n        _useState4 = _slicedToArray(_useState3, 2),\n        relicsState = _useState4[0],\n        setRelicsState = _useState4[1];\n\n    (0, _react.useLayoutEffect)(function () {\n        var formSubscription = _relicsFormStore2.default.subscribe(setRelicsFormState);\n        _relicsFormStore2.default.init();\n        var storeSubscription = _relicsStore2.default.subscribe(setRelicsState);\n        _relicsStore2.default.init();\n\n        __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! axios */ \"./node_modules/axios/index.js\", 7)).then(function (axios) {\n            axios.get(\"http://localhost:5000\" + '/getRefinementList').then(function (res) {\n                _relicsStore2.default.setRefinementList(res.data);\n            });\n\n            axios.get(\"http://localhost:5000\" + '/getRelicsList').then(function (res) {\n                _relicsStore2.default.setRelicsTypesList(res.data);\n            });\n        });\n        return function () {\n            formSubscription.unsubscribe();\n            storeSubscription.unsubscribe();\n        };\n    }, []);\n\n    var handleCheckboxChange = function handleCheckboxChange(event, isrefinement) {\n        var target = event.target;\n        var value = target.type === 'checkbox' ? target.checked : target.value;\n        var name = target.name;\n\n        if (isrefinement) {\n            if (value) _relicsFormStore2.default.addRefinementList(name);else _relicsFormStore2.default.removeRefinementList(name);\n        } else {\n            if (value) _relicsFormStore2.default.addRelicsTypesList(name);else _relicsFormStore2.default.removeRelicsTypesList(name);\n        }\n    };\n\n    var checkRelics = function checkRelics(name) {\n        return relicsFormState.relicsTypesList.indexOf(name) !== -1;\n    };\n\n    var submit = function submit() {\n        __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! axios */ \"./node_modules/axios/index.js\", 7)).then(function (axios) {\n            axios.post(\"http://localhost:5000\" + '/getRelicsStats', {\n                refinement: relicsFormState.refinementList,\n                relic_name: relicsFormState.relicsTypesList\n            }).then(function (res) {\n                props.setRelicsStats(res.data);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        });\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n            _reactstrap.Form,\n            null,\n            _react2.default.createElement(\n                'div',\n                { className: 'row justify-content-center align-items-center' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-6' },\n                    _react2.default.createElement(\n                        'fieldset',\n                        { className: 'borderForm' },\n                        _react2.default.createElement(\n                            'legend',\n                            { className: 'legend' },\n                            'Refinement'\n                        ),\n                        relicsState.refinementList.map(function (refin) {\n                            return _react2.default.createElement(\n                                _reactstrap.FormGroup,\n                                { key: refin, check: true },\n                                _react2.default.createElement(\n                                    _reactstrap.Label,\n                                    { check: true },\n                                    _react2.default.createElement(_reactstrap.Input, { name: refin, value: 'refin', type: 'checkbox',\n                                        onChange: function onChange(event) {\n                                            return handleCheckboxChange(event, true);\n                                        } }),\n                                    ' ',\n                                    refin\n                                )\n                            );\n                        })\n                    )\n                ),\n                relicsState.relicsTypesList.length > 0 && _react2.default.createElement(\n                    'div',\n                    { className: 'col-6' },\n                    _react2.default.createElement(\n                        'fieldset',\n                        { className: 'borderForm float-right' },\n                        _react2.default.createElement(\n                            'legend',\n                            { className: 'legend' },\n                            'Relics'\n                        ),\n                        _react2.default.createElement(\n                            _reactTabs.Tabs,\n                            { defaultIndex: 0 },\n                            _react2.default.createElement(\n                                _reactTabs.TabList,\n                                null,\n                                relicsState.relicsTypesList.map(function (relic) {\n                                    return _react2.default.createElement(\n                                        _reactTabs.Tab,\n                                        { key: 'tab_' + relic.era },\n                                        relic.era\n                                    );\n                                })\n                            ),\n                            relicsState.relicsTypesList.map(function (relic) {\n                                return _react2.default.createElement(\n                                    _reactTabs.TabPanel,\n                                    { key: 'tabpanel_' + relic.era, className: 'items' },\n                                    relic.names.sort().map(function (relicName) {\n                                        return _react2.default.createElement(\n                                            _reactstrap.FormGroup,\n                                            { key: relic.era + '_' + relicName, check: true,\n                                                className: 'item' },\n                                            _react2.default.createElement(\n                                                _reactstrap.Label,\n                                                { check: true },\n                                                _react2.default.createElement(_reactstrap.Input, { value: relic.era + '_' + relicName,\n                                                    name: relic.era + '_' + relicName,\n                                                    defaultChecked: checkRelics(relic.era + '_' + relicName),\n                                                    type: 'checkbox',\n                                                    onChange: function onChange(event) {\n                                                        return handleCheckboxChange(event, false);\n                                                    } }),\n                                                ' ',\n                                                relicName\n                                            )\n                                        );\n                                    })\n                                );\n                            })\n                        )\n                    )\n                )\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'row' },\n            _react2.default.createElement(\n                'div',\n                { className: 'col' },\n                _react2.default.createElement(\n                    _reactstrap.Button,\n                    { color: 'primary', className: 'float-right', onClick: submit },\n                    'Search'\n                )\n            )\n        )\n    );\n};\n\nexports.default = RelicForm;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9jb21wb25lbnRzL1JlbGljRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvY29tcG9uZW50cy9SZWxpY0Zvcm0uanN4P2ExZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWx9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgcmVsaWNzU3RvcmUgZnJvbSAnLi4vc3RvcmUvcmVsaWNzU3RvcmUnO1xyXG5pbXBvcnQgcmVsaWNzRm9ybVN0b3JlIGZyb20gJy4uL3N0b3JlL3JlbGljc0Zvcm1TdG9yZSc7XHJcbmltcG9ydCB7VGFiLCBUYWJMaXN0LCBUYWJQYW5lbCwgVGFic30gZnJvbSBcInJlYWN0LXRhYnNcIjtcclxuXHJcbmltcG9ydCAncmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzcyc7XHJcbmltcG9ydCBcIi4uLy4uLy4uL3B1YmxpYy9jc3MvcmVsaWNGb3JtLm1vZHVsZS5jc3NcIlxyXG5cclxuY29uc3QgUmVsaWNGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3JlbGljc0Zvcm1TdGF0ZSwgc2V0UmVsaWNzRm9ybVN0YXRlXSA9IHVzZVN0YXRlKHJlbGljc0Zvcm1TdG9yZS5pbml0aWFsU3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IFtyZWxpY3NTdGF0ZSwgc2V0UmVsaWNzU3RhdGVdID0gdXNlU3RhdGUocmVsaWNzU3RvcmUuaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAgICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVN1YnNjcmlwdGlvbiA9IHJlbGljc0Zvcm1TdG9yZS5zdWJzY3JpYmUoc2V0UmVsaWNzRm9ybVN0YXRlKTtcclxuICAgICAgICAgICAgcmVsaWNzRm9ybVN0b3JlLmluaXQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVTdWJzY3JpcHRpb24gPSByZWxpY3NTdG9yZS5zdWJzY3JpYmUoc2V0UmVsaWNzU3RhdGUpO1xyXG4gICAgICAgICAgICByZWxpY3NTdG9yZS5pbml0KCk7XHJcblxyXG4gICAgICAgICAgICBpbXBvcnQoJ2F4aW9zJykudGhlbihheGlvcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYCR7QkFDS0VORF9VUkx9L2dldFJlZmluZW1lbnRMaXN0YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxpY3NTdG9yZS5zZXRSZWZpbmVtZW50TGlzdChyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0JBQ0tFTkRfVVJMfS9nZXRSZWxpY3NMaXN0YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxpY3NTdG9yZS5zZXRSZWxpY3NUeXBlc0xpc3QocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgIHN0b3JlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudCwgaXNyZWZpbmVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IHRhcmdldC5jaGVja2VkIDogdGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNyZWZpbmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsaWNzRm9ybVN0b3JlLmFkZFJlZmluZW1lbnRMaXN0KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGljc0Zvcm1TdG9yZS5yZW1vdmVSZWZpbmVtZW50TGlzdChuYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZWxpY3NGb3JtU3RvcmUuYWRkUmVsaWNzVHlwZXNMaXN0KG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGljc0Zvcm1TdG9yZS5yZW1vdmVSZWxpY3NUeXBlc0xpc3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjaGVja1JlbGljcyA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWxpY3NGb3JtU3RhdGUucmVsaWNzVHlwZXNMaXN0LmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaW1wb3J0KCdheGlvcycpLnRoZW4oYXhpb3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgJHtCQUNLRU5EX1VSTH0vZ2V0UmVsaWNzU3RhdHNgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmaW5lbWVudDogcmVsaWNzRm9ybVN0YXRlLnJlZmluZW1lbnRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGljX25hbWU6IHJlbGljc0Zvcm1TdGF0ZS5yZWxpY3NUeXBlc0xpc3RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0UmVsaWNzU3RhdHMocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiYm9yZGVyRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwibGVnZW5kXCI+UmVmaW5lbWVudDwvbGVnZW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxpY3NTdGF0ZS5yZWZpbmVtZW50TGlzdC5tYXAocmVmaW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGtleT17cmVmaW59IGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtyZWZpbn0gdmFsdWU9XCJyZWZpblwiIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKGV2ZW50LCB0cnVlKX0vPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlZmlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbGljc1N0YXRlLnJlbGljc1R5cGVzTGlzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJib3JkZXJGb3JtIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJsZWdlbmRcIj5SZWxpY3M8L2xlZ2VuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFicyBkZWZhdWx0SW5kZXg9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxpY3NTdGF0ZS5yZWxpY3NUeXBlc0xpc3QubWFwKHJlbGljID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGtleT17YHRhYl8ke3JlbGljLmVyYX1gfT57cmVsaWMuZXJhfTwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxpY3NTdGF0ZS5yZWxpY3NUeXBlc0xpc3QubWFwKHJlbGljID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBrZXk9e2B0YWJwYW5lbF8ke3JlbGljLmVyYX1gfSBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsaWMubmFtZXMuc29ydCgpLm1hcChyZWxpY05hbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBrZXk9e2Ake3JlbGljLmVyYX1fJHtyZWxpY05hbWV9YH0gY2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtgJHtyZWxpYy5lcmF9XyR7cmVsaWNOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgJHtyZWxpYy5lcmF9XyR7cmVsaWNOYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17Y2hlY2tSZWxpY3MoYCR7cmVsaWMuZXJhfV8ke3JlbGljTmFtZX1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGVja2JveENoYW5nZShldmVudCwgZmFsc2UpfS8+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbGljTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiIG9uQ2xpY2s9e3N1Ym1pdH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICA7XHJcbiAgICB9XHJcbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbGljRm9ybTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQURBO0FBREE7QUFGQTtBQURBO0FBY0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQUZBO0FBREE7QUFGQTtBQURBO0FBUEE7QUFGQTtBQURBO0FBaEJBO0FBREE7QUFvREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFyREE7QUE2REE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/components/RelicForm.jsx\n");

/***/ }),

/***/ "./js/store/relicsFormStore.jsx":
/*!**************************************!*\
  !*** ./js/store/relicsFormStore.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _rxjs = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar subject = new _rxjs.Subject();\n\nvar initialState = {\n    refinementList: [],\n    relicsTypesList: []\n};\nvar state = initialState;\n\nvar relicsFormStore = {\n    init: function init() {\n        return subject.next(state);\n    },\n    subscribe: function subscribe(setState) {\n        return subject.subscribe(setState);\n    },\n    unsubscribe: function unsubscribe() {\n        return subject.unsubscribe();\n    },\n    addRefinementList: function addRefinementList(newRefin) {\n        state = _extends({}, state, {\n            refinementList: [].concat(_toConsumableArray(state.refinementList), [newRefin])\n        });\n        subject.next(state);\n    },\n    removeRefinementList: function removeRefinementList(newRefin) {\n        state = _extends({}, state, {\n            refinementList: state.refinementList.filter(function (refin) {\n                return newRefin === refin;\n            })\n        });\n        subject.next(state);\n    },\n    addRelicsTypesList: function addRelicsTypesList(newRelic) {\n        state = _extends({}, state, {\n            relicsTypesList: [].concat(_toConsumableArray(state.relicsTypesList), [newRelic])\n        });\n        subject.next(state);\n    },\n    removeRelicsTypesList: function removeRelicsTypesList(newRelic) {\n        state = _extends({}, state, {\n            relicsTypesList: state.refinementList.filter(function (relic) {\n                return newRelic === relic;\n            })\n        });\n        subject.next(state);\n    },\n    initialState: initialState\n};\n\nexports.default = relicsFormStore;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdG9yZS9yZWxpY3NGb3JtU3RvcmUuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL3N0b3JlL3JlbGljc0Zvcm1TdG9yZS5qc3g/YTM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICByZWZpbmVtZW50TGlzdDogW10sXHJcbiAgICByZWxpY3NUeXBlc0xpc3Q6IFtdXHJcbn07XHJcbmxldCBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuXHJcbmNvbnN0IHJlbGljc0Zvcm1TdG9yZSA9IHtcclxuICAgIGluaXQ6ICgpID0+IHN1YmplY3QubmV4dChzdGF0ZSksXHJcbiAgICBzdWJzY3JpYmU6IHNldFN0YXRlID0+IHN1YmplY3Quc3Vic2NyaWJlKHNldFN0YXRlKSxcclxuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiBzdWJqZWN0LnVuc3Vic2NyaWJlKCksXHJcbiAgICBhZGRSZWZpbmVtZW50TGlzdDogbmV3UmVmaW4gPT4ge1xyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcmVmaW5lbWVudExpc3Q6IFsuLi5zdGF0ZS5yZWZpbmVtZW50TGlzdCwgbmV3UmVmaW5dLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ViamVjdC5uZXh0KHN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVSZWZpbmVtZW50TGlzdDogbmV3UmVmaW4gPT4ge1xyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcmVmaW5lbWVudExpc3Q6IHN0YXRlLnJlZmluZW1lbnRMaXN0LmZpbHRlcihyZWZpbiA9PiBuZXdSZWZpbiA9PT0gcmVmaW4pLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ViamVjdC5uZXh0KHN0YXRlKTtcclxuICAgIH0sXHJcbiAgICBhZGRSZWxpY3NUeXBlc0xpc3Q6IG5ld1JlbGljID0+IHtcclxuICAgICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHJlbGljc1R5cGVzTGlzdDogWy4uLnN0YXRlLnJlbGljc1R5cGVzTGlzdCwgbmV3UmVsaWNdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ViamVjdC5uZXh0KHN0YXRlKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVSZWxpY3NUeXBlc0xpc3Q6IG5ld1JlbGljID0+IHtcclxuICAgICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHJlbGljc1R5cGVzTGlzdDogc3RhdGUucmVmaW5lbWVudExpc3QuZmlsdGVyKHJlbGljID0+IG5ld1JlbGljID09PSByZWxpYyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdWJqZWN0Lm5leHQoc3RhdGUpO1xyXG4gICAgfSxcclxuICAgIGluaXRpYWxTdGF0ZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVsaWNzRm9ybVN0b3JlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBaENBO0FBQ0E7QUFrQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/store/relicsFormStore.jsx\n");

/***/ }),

/***/ "./js/store/relicsStore.jsx":
/*!**********************************!*\
  !*** ./js/store/relicsStore.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _rxjs = __webpack_require__(/*! rxjs */ \"./node_modules/rxjs/_esm5/index.js\");\n\nvar subject = new _rxjs.Subject();\n\nvar initialState = {\n    refinementList: [],\n    relicsTypesList: []\n};\nvar state = initialState;\n\nvar relicsStore = {\n    init: function init() {\n        return subject.next(state);\n    },\n    subscribe: function subscribe(setState) {\n        return subject.subscribe(setState);\n    },\n    unsubscribe: function unsubscribe() {\n        return subject.unsubscribe();\n    },\n    setRefinementList: function setRefinementList(newList) {\n        state = _extends({}, state, {\n            refinementList: newList\n        });\n        subject.next(state);\n    },\n    setRelicsTypesList: function setRelicsTypesList(newList) {\n        state = _extends({}, state, {\n            relicsTypesList: newList\n        });\n        subject.next(state);\n    },\n    initialState: initialState\n};\n\nexports.default = relicsStore;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdG9yZS9yZWxpY3NTdG9yZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3RvcmUvcmVsaWNzU3RvcmUuanN4PzNlNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbmNvbnN0IHN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcmVmaW5lbWVudExpc3Q6IFtdLFxyXG4gICAgcmVsaWNzVHlwZXNMaXN0OiBbXVxyXG59O1xyXG5sZXQgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcblxyXG5jb25zdCByZWxpY3NTdG9yZSA9IHtcclxuICAgIGluaXQ6ICgpID0+IHN1YmplY3QubmV4dChzdGF0ZSksXHJcbiAgICBzdWJzY3JpYmU6IHNldFN0YXRlID0+IHN1YmplY3Quc3Vic2NyaWJlKHNldFN0YXRlKSxcclxuICAgIHVuc3Vic2NyaWJlOiAoKSA9PiBzdWJqZWN0LnVuc3Vic2NyaWJlKCksXHJcbiAgICBzZXRSZWZpbmVtZW50TGlzdDogbmV3TGlzdCA9PiB7XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICByZWZpbmVtZW50TGlzdDogbmV3TGlzdCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN1YmplY3QubmV4dChzdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVsaWNzVHlwZXNMaXN0OiBuZXdMaXN0ID0+IHtcclxuICAgICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHJlbGljc1R5cGVzTGlzdDogbmV3TGlzdCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN1YmplY3QubmV4dChzdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbFN0YXRlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWxpY3NTdG9yZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBbEJBO0FBQ0E7QUFvQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/store/relicsStore.jsx\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../public/css/relicForm.module.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../public/css/relicForm.module.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../static/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".items {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.item {\\r\\n    flex: 1 0 10%;\\r\\n    box-sizing: border-box;\\r\\n    color: #171e42;\\r\\n    padding: 5px;\\r\\n}\\r\\n\\r\\n.borderForm {\\r\\n    border: 2px groove #ddd !important;\\r\\n    padding: 0 1.4em 1.4em 1.4em !important;\\r\\n    margin: 0 0 1.5em 0 !important;\\r\\n}\\r\\n\\r\\n.legend {\\r\\n    font-size: 1.2em !important;\\r\\n    font-weight: bold !important;\\r\\n    text-align: left !important;\\r\\n    width: auto;\\r\\n    padding-left: 10px;\\r\\n    padding-right: 10px;\\r\\n    border-bottom: none;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9wdWJsaWMvY3NzL3JlbGljRm9ybS5tb2R1bGUuY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3B1YmxpYy9jc3MvcmVsaWNGb3JtLm1vZHVsZS5jc3M/NDY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL3N0YXRpYy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICBmbGV4OiAxIDAgMTAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBjb2xvcjogIzE3MWU0MjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyRm9ybSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IGdyb292ZSAjZGRkICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDAgMS40ZW0gMS40ZW0gMS40ZW0gIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMS41ZW0gMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVnZW5kIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!../public/css/relicForm.module.css\n");

/***/ })

}]);