function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
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
// Schedules data to be sent to shinyapp at the next setTimeout(0).
// Batches multiple input calls into one websocket message.
var InputBatchSender = /*#__PURE__*/function () {
  // We need this field to satisfy the InputPolicy interface

  function InputBatchSender(shinyapp) {
    _classCallCheck(this, InputBatchSender);
    _defineProperty(this, "target", void 0);
    _defineProperty(this, "shinyapp", void 0);
    _defineProperty(this, "pendingData", {});
    _defineProperty(this, "reentrant", false);
    _defineProperty(this, "sendIsEnqueued", false);
    _defineProperty(this, "lastChanceCallback", []);
    this.shinyapp = shinyapp;
  }
  _createClass(InputBatchSender, [{
    key: "setInput",
    value: function setInput(nameType, value, opts) {
      var _this = this;
      this.pendingData[nameType] = value;
      if (!this.reentrant) {
        if (opts.priority === "event") {
          this._sendNow();
        } else if (!this.sendIsEnqueued) {
          this.shinyapp.taskQueue.enqueue(function () {
            _this.sendIsEnqueued = false;
            _this._sendNow();
          });
        }
      }
    }
  }, {
    key: "_sendNow",
    value: function _sendNow() {
      if (this.reentrant) {
        console.trace("Unexpected reentrancy in InputBatchSender!");
      }
      this.reentrant = true;
      try {
        this.lastChanceCallback.forEach(function (callback) {
          return callback();
        });
        var currentData = this.pendingData;
        this.pendingData = {};
        this.shinyapp.sendInput(currentData);
      } finally {
        this.reentrant = false;
      }
    }
  }]);
  return InputBatchSender;
}();
export { InputBatchSender };