function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.trim.js";
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
import $ from "jquery";
import { InputBinding } from "./inputBinding";
import { $escape, updateLabel, hasDefinedProperty } from "../../utils";
// Get the DOM element that contains the top-level label
function getLabelNode(el) {
  return $(el).find('label[for="' + $escape(el.id) + '"]');
}
// Given an input DOM object, get the associated label. Handles labels
// that wrap the input as well as labels associated with 'for' attribute.
function getLabel(obj) {
  var parentNode = obj.parentNode;

  // If <label><input /><span>label text</span></label>
  if (parentNode.tagName === "LABEL") {
    return $(parentNode).find("span").text().trim();
  }
  return null;
}
// Given an input DOM object, set the associated label. Handles labels
// that wrap the input as well as labels associated with 'for' attribute.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setLabel(obj, value) {
  var parentNode = obj.parentNode;

  // If <label><input /><span>label text</span></label>
  if (parentNode.tagName === "LABEL") {
    $(parentNode).find("span").text(value);
  }
  return null;
}
var CheckboxGroupInputBinding = /*#__PURE__*/function (_InputBinding) {
  _inherits(CheckboxGroupInputBinding, _InputBinding);
  var _super = _createSuper(CheckboxGroupInputBinding);
  function CheckboxGroupInputBinding() {
    _classCallCheck(this, CheckboxGroupInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(CheckboxGroupInputBinding, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find(".shiny-input-checkboxgroup");
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      // Select the checkbox objects that have name equal to the grouping div's id
      var $objs = $('input:checkbox[name="' + $escape(el.id) + '"]:checked');
      var values = new Array($objs.length);
      for (var i = 0; i < $objs.length; i++) {
        values[i] = $objs[i].value;
      }
      return values;
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      var _value;
      // Null value should be treated as empty array
      value = (_value = value) !== null && _value !== void 0 ? _value : [];

      // Clear all checkboxes
      $('input:checkbox[name="' + $escape(el.id) + '"]').prop("checked", false);

      // Accept array
      if (value instanceof Array) {
        for (var i = 0; i < value.length; i++) {
          $('input:checkbox[name="' + $escape(el.id) + '"][value="' + $escape(value[i]) + '"]').prop("checked", true);
        }
        // Else assume it's a single value
      } else {
        $('input:checkbox[name="' + $escape(el.id) + '"][value="' + $escape(value) + '"]').prop("checked", true);
      }
    }
  }, {
    key: "getState",
    value: function getState(el) {
      var $objs = $('input:checkbox[name="' + $escape(el.id) + '"]');

      // Store options in an array of objects, each with with value and label
      var options = new Array($objs.length);
      for (var i = 0; i < options.length; i++) {
        options[i] = {
          value: $objs[i].value,
          label: getLabel($objs[i])
        };
      }
      return {
        label: getLabelNode(el).text(),
        value: this.getValue(el),
        options: options
      };
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      var $el = $(el);

      // This will replace all the options
      if (hasDefinedProperty(data, "options")) {
        // Clear existing options and add each new one
        $el.find("div.shiny-options-group").remove();
        // Backward compatibility: for HTML generated by shinybootstrap2 package
        $el.find("label.checkbox").remove();
        $el.append(data.options);
      }
      if (hasDefinedProperty(data, "value")) {
        this.setValue(el, data.value);
      }
      updateLabel(data.label, getLabelNode(el));
      $(el).trigger("change");
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("change.checkboxGroupInputBinding", function () {
        callback(false);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".checkboxGroupInputBinding");
    }
  }]);
  return CheckboxGroupInputBinding;
}(InputBinding);
export { CheckboxGroupInputBinding };