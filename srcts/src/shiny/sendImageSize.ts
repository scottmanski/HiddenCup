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
import { debounce, Debouncer } from "../time";
var SendImageSize = /*#__PURE__*/function () {
  function SendImageSize() {
    _classCallCheck(this, SendImageSize);
    // This function gets defined in initShiny() and 'hoisted' so it can be reused
    // (to send CSS info) inside of Shiny.renderDependencies()
    _defineProperty(this, "regular", void 0);
    _defineProperty(this, "transitioned", void 0);
  }
  _createClass(SendImageSize, [{
    key: "setImageSend",
    value: function setImageSend(inputBatchSender, doSendImageSize) {
      var sendImageSizeDebouncer = new Debouncer(null, doSendImageSize, 0);
      this.regular = function () {
        sendImageSizeDebouncer.normalCall();
      };

      // Make sure sendImageSize actually gets called before the inputBatchSender
      // sends data to the server.
      inputBatchSender.lastChanceCallback.push(function () {
        if (sendImageSizeDebouncer.isPending()) sendImageSizeDebouncer.immediateCall();
      });

      // A version of sendImageSize which debounces for longer.
      this.transitioned = debounce(200, this.regular);
      return sendImageSizeDebouncer;
    }
  }]);
  return SendImageSize;
}();
var sendImageSizeFns = new SendImageSize();
export { sendImageSizeFns };