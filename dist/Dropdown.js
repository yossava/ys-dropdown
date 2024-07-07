"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _Pill = _interopRequireDefault(require("./Pill"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Dropdown = _ref => {
  let {
    options,
    isMultiple = false,
    label = "Label",
    usePortal = true,
    enableSearch = true,
    outlined = true,
    id = "",
    order = "asc"
  } = _ref;
  const [selectedOptions, setSelectedOptions] = (0, _react.useState)([]);
  const [searchTerm, setSearchTerm] = (0, _react.useState)("");
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const inputRef = (0, _react.useRef)(null);
  const containerRef = (0, _react.useRef)(null);
  const sortOptions = (0, _react.useMemo)(() => {
    const sorted = options === null || options === void 0 ? void 0 : options.sort((a, b) => {
      if (order === "asc") {
        return a.label.localeCompare(b.label);
      } else {
        return b.label.localeCompare(a.label);
      }
    });
    return sorted === null || sorted === void 0 ? void 0 : sorted.map(o => {
      if (searchTerm.length < 1) {
        return {
          value: o.value,
          label: o.label
        };
      }
      const regex = new RegExp("(".concat(searchTerm, ")"), "gi");
      return {
        value: o.value,
        label: o.label.split(regex).map((part, i) => regex.test(part) ? /*#__PURE__*/_react.default.createElement("span", {
          className: "bg-teal-200",
          key: i
        }, part) : /*#__PURE__*/_react.default.createElement("span", {
          key: i
        }, part))
      };
    });
  }, [options, order, searchTerm]);
  (0, _react.useEffect)(() => {
    if (isVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisible]);
  const handleDeleteOption = option => {
    setSelectedOptions(selectedOptions.filter(o => o !== option));
  };
  const handleOptionSelect = optionValue => {
    const selectedOption = options.find(option => option.value === optionValue);
    if (isMultiple) {
      if (!selectedOptions.includes(selectedOption)) {
        setSelectedOptions([...selectedOptions, selectedOption]);
      }
    } else {
      setSelectedOptions([selectedOption]);
      setIsVisible(false);
    }
  };
  const handleInputFocus = () => {
    setSearchTerm("");
    setIsVisible(true);
  };
  const handleClickOutside = event => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  (0, _react.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const dropdown = /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "flex flex-col lg:flex-row lg:items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full lg:w-2/12"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    ref: containerRef,
    className: "relative w-full lg:w-10/12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => handleInputFocus(),
    className: "".concat(outlined ? "border bg-white" : "border-none bg-gray-50", " border px-2 min-h-[40px] p-2 w-full rounded flex justify-between items-center cursor-pointer")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.map(option => /*#__PURE__*/_react.default.createElement(_Pill.default, {
    key: option.value,
    option: option,
    onDelete: handleDeleteOption
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-5"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-[9999] w-full mt-2 bg-white shadow-lg border ".concat(isVisible ? "" : "hidden")
  }, enableSearch && /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    ref: inputRef,
    className: "w-full pl-10 pr-4 h-[40px] border-b focus:outline-none focus:ring-0 focus:none"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "size-5"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }))), searchTerm.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-3"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setSearchTerm(""),
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "size-5"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",
    clipRule: "evenodd"
  }))))), sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.map(option => /*#__PURE__*/_react.default.createElement("div", {
    key: option.value,
    className: "px-4 py-2 cursor-pointer hover:bg-teal-50",
    onClick: () => handleOptionSelect(option.value)
  }, option.label)))));
  if (usePortal) {
    return /*#__PURE__*/_reactDom.default.createPortal(dropdown, document.getElementById("popup-root"));
  }
  return dropdown;
};
Dropdown.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    label: _propTypes.default.string.isRequired
  })).isRequired,
  isMultiple: _propTypes.default.bool.isRequired,
  usePortal: _propTypes.default.bool,
  enableSearch: _propTypes.default.bool,
  outlined: _propTypes.default.bool,
  label: _propTypes.default.string,
  id: _propTypes.default.string,
  order: _propTypes.default.string
};
var _default = exports.default = Dropdown;