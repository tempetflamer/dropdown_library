"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
require("./Dropdown.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Dropdown(_ref) {
  let {
    textLabel,
    name,
    data
  } = _ref;
  if (!data[0]) {
    return '';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name
  }, textLabel), /*#__PURE__*/_react.default.createElement("select", {
    className: name,
    id: name,
    name: name
  }, data.map(val => /*#__PURE__*/_react.default.createElement("option", {
    value: data[0].value ? val.value : val.name,
    key: data[0].value ? val.value : val.name
  }, val.name))));
}
Dropdown.propTypes = {
  textLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.object])).isRequired
};