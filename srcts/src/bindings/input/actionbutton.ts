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
import { hasDefinedProperty } from "../../utils";
import { InputBinding } from "./inputBinding";
var ActionButtonInputBinding = /*#__PURE__*/function (_InputBinding) {
  _inherits(ActionButtonInputBinding, _InputBinding);
  var _super = _createSuper(ActionButtonInputBinding);
  function ActionButtonInputBinding() {
    _classCallCheck(this, ActionButtonInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(ActionButtonInputBinding, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find(".action-button");
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      return $(el).data("val") || 0;
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      $(el).data("val", value);
    }
  }, {
    key: "getType",
    value: function getType(el) {
      return "shiny.action";
      el;
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("click.actionButtonInputBinding",
      // e: Event
      function () {
        var $el = $(this);
        var val = $el.data("val") || 0;
        $el.data("val", val + 1);
        callback(false);
      });
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
      var $el = $(el);

      // retrieve current label and icon
      var label = $el.text();
      var icon = "";

      // to check (and store) the previous icon, we look for a $el child
      // object that has an i tag, and some (any) class (this prevents
      // italicized text - which has an i tag but, usually, no class -
      // from being mistakenly selected)
      if ($el.find("i[class]").length > 0) {
        var iconHtml = $el.find("i[class]")[0];
        if (iconHtml === $el.children()[0]) {
          // another check for robustness
          icon = $(iconHtml).prop("outerHTML");
        }
      }

      // update the requested properties
      if (hasDefinedProperty(data, "label")) {
        label = data.label;
      }
      if (hasDefinedProperty(data, "icon")) {
        var _data$icon;
        // `data.icon` can be an [] if user gave `character(0)`.
        icon = Array.isArray(data.icon) ? "" : (_data$icon = data.icon) !== null && _data$icon !== void 0 ? _data$icon : "";
      }

      // produce new html
      $el.html(icon + " " + label);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".actionButtonInputBinding");
    }
  }]);
  return ActionButtonInputBinding;
}(InputBinding); // TODO-barret should this be put in the init methods?
$(document).on("click", "a.action-button", function (e) {
  e.preventDefault();
});
export { ActionButtonInputBinding };