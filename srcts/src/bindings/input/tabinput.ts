function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.to-string-tag.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import $ from "jquery";
import { InputBinding } from "./inputBinding";
import { hasDefinedProperty, isBS3 } from "../../utils";
function getTabName(anchor) {
  return anchor.attr("data-value") || anchor.text();
}
var BootstrapTabInputBinding = /*#__PURE__*/function (_InputBinding) {
  _inherits(BootstrapTabInputBinding, _InputBinding);
  var _super = _createSuper(BootstrapTabInputBinding);
  function BootstrapTabInputBinding() {
    _classCallCheck(this, BootstrapTabInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(BootstrapTabInputBinding, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find("ul.nav.shiny-tab-input");
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      // prettier-ignore
      // The BS4+ selectors may not work as is for dropdowns within dropdowns, but BS3+ dropped support for those anyway
      var anchor = isBS3() ? $(el).find("li:not(.dropdown).active > a") : $(el).find(".nav-link:not(.dropdown-toggle).active, .dropdown-menu .dropdown-item.active");
      if (anchor.length === 1) return getTabName(anchor);
      return null;
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      var success = false;
      if (value) {
        // prettier-ignore
        // The BS4+ selectors may not work as is for dropdowns within dropdowns, but BS3+ dropped support for those anyway
        var anchors = isBS3() ? $(el).find("li:not(.dropdown) > a") : $(el).find(".nav-link:not(.dropdown-toggle), .dropdown-menu .dropdown-item");
        anchors.each(function () {
          if (getTabName($(this)) === value) {
            $(this).tab("show");
            success = true;
            return false; // Break out of each()
          }

          return;
        });
      }
      if (!success) {
        // This is to handle the case where nothing is selected, e.g. the last tab
        // was removed using removeTab.
        $(el).trigger("change");
      }
    }
  }, {
    key: "getState",
    value: function getState(el) {
      return {
        value: this.getValue(el)
      };
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      if (hasDefinedProperty(data, "value")) this.setValue(el, data.value);
      $(el).trigger("change");
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("change shown.bootstrapTabInputBinding shown.bs.tab.bootstrapTabInputBinding",
      // event: Event
      function () {
        callback(false);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".bootstrapTabInputBinding");
    }
  }]);
  return BootstrapTabInputBinding;
}(InputBinding);
export { BootstrapTabInputBinding };