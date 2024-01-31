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
/* eslint-disable indent */
var Throttler = /*#__PURE__*/function () {
  function Throttler(target, func, delayMs) {
    _classCallCheck(this, Throttler);
    _defineProperty(this, "target", void 0);
    _defineProperty(this, "func", void 0);
    _defineProperty(this, "delayMs", void 0);
    _defineProperty(this, "timerId", void 0);
    _defineProperty(this, "args", void 0);
    this.target = target;
    this.func = func;
    this.delayMs = delayMs;
    this.timerId = null;
    this.args = null;
  }

  // If no timer is currently running, immediately call the function and set the
  // timer; if a timer is running out, just queue up the args for the call when
  // the timer runs out. Later calls during the same timeout will overwrite
  // earlier ones.
  _createClass(Throttler, [{
    key: "normalCall",
    value: function normalCall() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // This will be an empty array (not null) if called without arguments, and
      // `[null]` if called with `null`.
      this.args = args;

      // Only invoke immediately if there isn't a timer running.
      if (this.timerId === null) {
        this.$invoke();
      }
    }

    // Reset the timer if active and call immediately
  }, {
    key: "immediateCall",
    value: function immediateCall() {
      this.$clearTimer();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.args = args;
      this.$invoke();
    }

    // Is there a call waiting to send?
  }, {
    key: "isPending",
    value: function isPending() {
      return this.args !== null;
    }
  }, {
    key: "$clearTimer",
    value: function $clearTimer() {
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
    }

    // Invoke the throttled function with the currently-stored args and start the
    // timer.
  }, {
    key: "$invoke",
    value: function $invoke() {
      var _this = this;
      if (this.args === null) {
        // Shouldn't get here, because $invoke should only be called right after
        // setting this.args. But just in case.
        return;
      }
      this.func.apply(this.target, this.args);

      // Clear the stored args. This is used to track if a call is pending.
      this.args = null;

      // Set this.timerId to a newly-created timer, which will invoke a call with
      // the most recently called args (if any) when it expires.
      this.timerId = setTimeout(function () {
        // IE8 doesn't reliably clear timeout, so this additional check is needed
        if (_this.timerId === null) return;
        _this.$clearTimer();
        // Do we have a call queued up?
        if (_this.isPending()) {
          // If so, invoke the call with queued args and reset timer.
          _this.$invoke();
        }
      }, this.delayMs);
    }
  }]);
  return Throttler;
}(); // // Returns a throttled version of the given function.
// // Throttling means that the underlying function will
// // be executed no more than once every `threshold`
// // milliseconds.
// //
// // For example, if a function is throttled with a
// // threshold of 1000ms, then calling it 17 times at
// // 900ms intervals will result in something like 15
// // or 16 executions of the underlying function.
// // eslint-disable-next-line no-unused-vars
// function throttle<T>(
//   threshold: number,
//   func: (...args: T[]) => void
// ): (...args: T[]) => void {
//   let executionPending = false;
//   let timerId: number | null = null;
//   let self: unknown, args: T[] | null;
//   function throttled(...argumentVals: T[]) {
//     self = null;
//     args = null;
//     if (timerId === null) {
//       // Haven't seen a call recently. Execute now and
//       // start a timer to buffer any subsequent calls.
//       timerId = setTimeout(function () {
//         // When time expires, clear the timer; and if
//         // there has been a call in the meantime, repeat.
//         timerId = null;
//         if (executionPending) {
//           executionPending = false;
//           throttled.apply(self, args || []);
//         }
//       }, threshold);
//       func.apply(this, argumentVals);
//     } else {
//       // Something executed recently. Don't do anything
//       // except set up target/arguments to be called later
//       executionPending = true;
//       self = this as unknown;
//       args = argumentVals;
//     }
//   }
//   return throttled;
// }
export { Throttler
// throttle
};