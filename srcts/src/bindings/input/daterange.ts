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
import { $escape, formatDateUTC, hasDefinedProperty, updateLabel } from "../../utils";
import { DateInputBindingBase } from "./date";
function getLabelNode(el) {
  return $(el).find('label[for="' + $escape(el.id) + '"]');
}
var DateRangeInputBinding = /*#__PURE__*/function (_DateInputBindingBase) {
  _inherits(DateRangeInputBinding, _DateInputBindingBase);
  var _super = _createSuper(DateRangeInputBinding);
  function DateRangeInputBinding() {
    _classCallCheck(this, DateRangeInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(DateRangeInputBinding, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find(".shiny-date-range-input");
    }
    // Return the date in an unambiguous format, yyyy-mm-dd (as opposed to a
    // format like mm/dd/yyyy)
  }, {
    key: "getValue",
    value: function getValue(el) {
      var $inputs = $(el).find("input");
      var start = $inputs.eq(0).bsDatepicker("getUTCDate");
      var end = $inputs.eq(1).bsDatepicker("getUTCDate");
      return [formatDateUTC(start), formatDateUTC(end)];
    }
    // value must be an object, with optional fields `start` and `end`. These
    // should be unambiguous strings like '2001-01-01', or Date objects.
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      if (!(value instanceof Object)) {
        return;
      }

      // Get the start and end input objects
      var $inputs = $(el).find("input");

      // If value is undefined, don't try to set
      // null will remove the current value
      if (value.start !== undefined) {
        if (value.start === null) {
          $inputs.eq(0).val("").bsDatepicker("update");
        } else {
          var start = this._newDate(value.start);
          $inputs.eq(0).bsDatepicker("setUTCDate", start);
        }
      }
      if (value.end !== undefined) {
        if (value.end === null) {
          $inputs.eq(1).val("").bsDatepicker("update");
        } else {
          var end = this._newDate(value.end);
          $inputs.eq(1).bsDatepicker("setUTCDate", end);
        }
      }
    }
  }, {
    key: "getState",
    value: function getState(el) {
      var $el = $(el);
      var $inputs = $el.find("input");
      var $startinput = $inputs.eq(0);
      var $endinput = $inputs.eq(1);

      // For many of the properties, assume start and end have the same values
      var min = $startinput.bsDatepicker("getStartDate");
      var max = $startinput.bsDatepicker("getEndDate");

      // Stringify min and max. If min and max aren't set, they will be
      // -Infinity and Infinity; replace these with null.
      var minStr = min === -Infinity ? null : formatDateUTC(min);
      var maxStr = max === Infinity ? null : formatDateUTC(max);

      // startViewMode is stored as a number; convert to string
      var startview = $startinput.data("datepicker").startView;
      if (startview === 2) startview = "decade";else if (startview === 1) startview = "year";else if (startview === 0) startview = "month";
      return {
        label: getLabelNode(el).text(),
        value: this.getValue(el),
        valueString: [$startinput.val(), $endinput.val()],
        min: minStr,
        max: maxStr,
        weekstart: $startinput.data("datepicker").weekStart,
        format: this._formatToString($startinput.data("datepicker").format),
        language: $startinput.data("datepicker").language,
        startview: startview
      };
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      var $el = $(el);
      var $inputs = $el.find("input");
      var $startinput = $inputs.eq(0);
      var $endinput = $inputs.eq(1);
      updateLabel(data.label, getLabelNode(el));
      if (hasDefinedProperty(data, "min")) {
        this._setMin($startinput[0], data.min);
        this._setMin($endinput[0], data.min);
      }
      if (hasDefinedProperty(data, "max")) {
        this._setMax($startinput[0], data.max);
        this._setMax($endinput[0], data.max);
      }

      // Must set value only after min and max have been set. If new value is
      // outside the bounds of the previous min/max, then the result will be a
      // blank input.
      if (hasDefinedProperty(data, "value")) {
        this.setValue(el, data.value);
      }
      $el.trigger("change");
    }
  }, {
    key: "initialize",
    value: function initialize(el) {
      var $el = $(el);
      var $inputs = $el.find("input");
      var $startinput = $inputs.eq(0);
      var $endinput = $inputs.eq(1);
      var start = $startinput.data("initial-date");
      var end = $endinput.data("initial-date");

      // If empty/null, use local date, but as UTC
      if (start === undefined || start === null) start = this._dateAsUTC(new Date());
      if (end === undefined || end === null) end = this._dateAsUTC(new Date());
      this.setValue(el, {
        start: start,
        end: end
      });

      // // Set the start and end dates, from min-date and max-date. These always
      // // use yyyy-mm-dd format, instead of bootstrap-datepicker's built-in
      // // support for date-startdate and data-enddate, which use the current
      // // date format.
      this._setMin($startinput[0], $startinput.data("min-date"));
      this._setMin($endinput[0], $startinput.data("min-date"));
      this._setMax($startinput[0], $endinput.data("max-date"));
      this._setMax($endinput[0], $endinput.data("max-date"));
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("keyup.dateRangeInputBinding input.dateRangeInputBinding",
      // event: Event
      function () {
        // Use normal debouncing policy when typing
        callback(true);
      });
      $(el).on("changeDate.dateRangeInputBinding change.dateRangeInputBinding",
      // event: Event
      function () {
        // Send immediately when clicked
        callback(false);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".dateRangeInputBinding");
    }
  }]);
  return DateRangeInputBinding;
}(DateInputBindingBase);
export { DateRangeInputBinding };