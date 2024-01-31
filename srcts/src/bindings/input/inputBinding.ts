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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var InputBinding = /*#__PURE__*/function () {
  function InputBinding() {
    _classCallCheck(this, InputBinding);
    _defineProperty(this, "name", void 0);
  }
  _createClass(InputBinding, [{
    key: "find",
    value:
    // Returns a jQuery object or element array that contains the
    // descendants of scope that match this binding
    function find(scope) {
      throw "Not implemented";
      scope; // unused var
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return el.getAttribute("data-input-id") || el.id;
    }

    // Gives the input a type in case the server needs to know it
    // to deserialize the JSON correctly
  }, {
    key: "getType",
    value: function getType(el) {
      return null;
      el; // unused var
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      throw "Not implemented";
      el; // unused var
    }

    // The callback method takes one argument, whose value is boolean. If true,
    // allow deferred (debounce or throttle) sending depending on the value of
    // getRatePolicy. If false, send value immediately. Default behavior is `false`
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      // empty
      el; // unused var
      callback; // unused var
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      // empty
      el; // unused var
    }

    // This is used for receiving messages that tell the input object to do
    // things, such as setting values (including min, max, and others).
    // 'data' should be an object with elements corresponding to value, min,
    // max, etc., as appropriate for the type of input object. It also should
    // trigger a change event.
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      throw "Not implemented";
      el; // unused var
      data; // unused var
    }
  }, {
    key: "getState",
    value: function getState(el) {
      throw "Not implemented";
      el; // unused var
    }
  }, {
    key: "getRatePolicy",
    value: function getRatePolicy(el) {
      return null;
      el; // unused var
    }

    // Some input objects need initialization before being bound. This is
    // called when the document is ready (for statically-added input objects),
    // and when new input objects are added to the document with
    // htmlOutputBinding.renderValue() (for dynamically-added input objects).
    // This is called before the input is bound.
  }, {
    key: "initialize",
    value: function initialize(el) {
      //empty
      el;
    }

    // This is called after unbinding the output.
  }, {
    key: "dispose",
    value: function dispose(el) {
      //empty
      el;
    }
  }]);
  return InputBinding;
}(); //// NOTES FOR FUTURE DEV
// Turn register systemin into something that is intialized for every instance.
// "Have a new instance for every item, not an instance that does work on every item"
//
// * Keep register as is for historical purposes
// make a new register function that would take a class
// these class could be constructed at build time
// store the constructed obj on the ele and retrieve
// Then the classes could store their information within their local class, rather than on the element
// VERY CLEAN!!!
// to invoke methods, it would be something like `el.shinyClass.METHOD(x,y,z)`
// * See https://github.com/rstudio/shinyvalidate/blob/c8becd99c01fac1bac03b50e2140f49fca39e7f4/srcjs/shinyvalidate.js#L157-L167
// these methods would be added using a new method like `inputBindings.registerClass(ClassObj, name)`
// things to watch out for:
// * unbind, then rebind. Maybe we stash the local content.
// Updates:
// * Feel free to alter method names on classes. (And make them private)
//// END NOTES FOR FUTURE DEV
export { InputBinding };