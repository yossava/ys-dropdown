"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Pill = _ref => {
  let {
    option,
    onDelete
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-full px-2 py-1 bg-gray-100 flex  justify-between items-center text-xs"
  }, /*#__PURE__*/_react.default.createElement("span", null, option.label), /*#__PURE__*/_react.default.createElement("button", {
    className: "ml-1",
    onClick: () => onDelete(option)
  }, " ", /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-4"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }))));
};
var _default = exports.default = Pill;