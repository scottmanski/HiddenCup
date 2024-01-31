function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import $ from "jquery";
import { splitInputNameType } from "./splitInputNameType";
var InputEventDecorator = /*#__PURE__*/function () {
  function InputEventDecorator(target) {
    _classCallCheck(this, InputEventDecorator);
    _defineProperty(this, "target", void 0);
    this.target = target;
  }
  _createClass(InputEventDecorator, [{
    key: "setInput",
    value: function setInput(nameType, value, opts) {
      var evt = $.Event("shiny:inputchanged");
      var input = splitInputNameType(nameType);
      evt.name = input.name;
      evt.inputType = input.inputType;
      evt.value = value;
      evt.binding = opts.binding || null;
      evt.el = opts.el || null;
      evt.priority = opts.priority;

      // The `shiny:inputchanged` JavaScript event now triggers on the related
      // input element instead of `document`. Existing event listeners bound to
      // `document` will still detect the event due to event bubbling. #2446
      // If no `el` exists, use `document` instead. #3584
      $(opts.el || window.document).trigger(evt);
      if (!evt.isDefaultPrevented()) {
        var name = evt.name;
        if (evt.inputType !== "") name += ":" + evt.inputType;

        // Most opts aren't passed along to lower levels in the input decorator
        // stack.
        this.target.setInput(name, evt.value, {
          priority: opts.priority
        });
      }
    }
  }]);
  return InputEventDecorator;
}();
export { InputEventDecorator };