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
import { formatDateUTC, updateLabel, $escape, parseDate, hasDefinedProperty } from "../../utils";
var DateInputBindingBase = /*#__PURE__*/function (_InputBinding) {
  _inherits(DateInputBindingBase, _InputBinding);
  var _super = _createSuper(DateInputBindingBase);
  function DateInputBindingBase() {
    _classCallCheck(this, DateInputBindingBase);
    return _super.apply(this, arguments);
  }
  _createClass(DateInputBindingBase, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find(".shiny-date-input");
    }
  }, {
    key: "getType",
    value: function getType(el) {
      return "shiny.date";
      el;
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("keyup.dateInputBinding input.dateInputBinding",
      // event: Event
      function () {
        // Use normal debouncing policy when typing
        callback(true);
      });
      $(el).on("changeDate.dateInputBinding change.dateInputBinding",
      // event: Event
      function () {
        // Send immediately when clicked
        callback(false);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".dateInputBinding");
    }
  }, {
    key: "getRatePolicy",
    value: function getRatePolicy() {
      return {
        policy: "debounce",
        delay: 250
      };
    }
  }, {
    key: "setValue",
    value: function setValue(el, data) {
      throw "not implemented";
      el;
      data;
    }
  }, {
    key: "initialize",
    value: function initialize(el) {
      var $input = $(el).find("input");

      // The challenge with dates is that we want them to be at 00:00 in UTC so
      // that we can do comparisons with them. However, the Date object itself
      // does not carry timezone information, so we should call _floorDateTime()
      // on Dates as soon as possible so that we know we're always working with
      // consistent objects.

      var date = $input.data("initial-date");
      // If initial_date is null, set to current date

      if (date === undefined || date === null) {
        // Get local date, but normalized to beginning of day in UTC.
        date = this._floorDateTime(this._dateAsUTC(new Date()));
      }
      this.setValue(el, date);

      // Set the start and end dates, from min-date and max-date. These always
      // use yyyy-mm-dd format, instead of bootstrap-datepicker's built-in
      // support for date-startdate and data-enddate, which use the current
      // date format.
      if ($input.data("min-date") !== undefined) {
        this._setMin($input[0], $input.data("min-date"));
      }
      if ($input.data("max-date") !== undefined) {
        this._setMax($input[0], $input.data("max-date"));
      }
    }
  }, {
    key: "_getLabelNode",
    value: function _getLabelNode(el) {
      return $(el).find('label[for="' + $escape(el.id) + '"]');
    }
    // Given a format object from a date picker, return a string
  }, {
    key: "_formatToString",
    value: function _formatToString(format) {
      // Format object has structure like:
      // { parts: ['mm', 'dd', 'yy'], separators: ['', '/', '/' ,''] }
      var str = "";
      var i;
      for (i = 0; i < format.parts.length; i++) {
        str += format.separators[i] + format.parts[i];
      }
      str += format.separators[i];
      return str;
    }
    // Given an unambiguous date string or a Date object, set the min (start) date.
    // null will unset. undefined will result in no change,
  }, {
    key: "_setMin",
    value: function _setMin(el, date) {
      if (date === null) {
        $(el).bsDatepicker("setStartDate", null);
        return;
      }
      var parsedDate = this._newDate(date);

      // If date parsing fails, do nothing
      if (parsedDate === null) return;

      // (Assign back to date as a Date object)
      date = parsedDate;
      if (isNaN(date.valueOf())) return;
      // Workarounds for
      // https://github.com/rstudio/shiny/issues/2335
      var curValue = $(el).bsDatepicker("getUTCDate");

      // Note that there's no `setUTCStartDate`, so we need to convert this Date.
      // It starts at 00:00 UTC, and we convert it to 00:00 in local time, which
      // is what's needed for `setStartDate`.
      $(el).bsDatepicker("setStartDate", this._utcDateAsLocal(date));

      // If the new min is greater than the current date, unset the current date.
      if (date && curValue && date.getTime() > curValue.getTime()) {
        $(el).bsDatepicker("clearDates");
      } else {
        // Setting the date needs to be done AFTER `setStartDate`, because the
        // datepicker has a bug where calling `setStartDate` will clear the date
        // internally (even though it will still be visible in the UI) when a
        // 2-digit year format is used.
        // https://github.com/eternicode/bootstrap-datepicker/issues/2010
        $(el).bsDatepicker("setUTCDate", curValue);
      }
    }
    // Given an unambiguous date string or a Date object, set the max (end) date
    // null will unset.
  }, {
    key: "_setMax",
    value: function _setMax(el, date) {
      if (date === null) {
        $(el).bsDatepicker("setEndDate", null);
        return;
      }
      var parsedDate = this._newDate(date);

      // If date parsing fails, do nothing
      if (parsedDate === null) return;
      date = parsedDate;
      if (isNaN(date.valueOf())) return;

      // Workaround for same issue as in _setMin.
      var curValue = $(el).bsDatepicker("getUTCDate");
      $(el).bsDatepicker("setEndDate", this._utcDateAsLocal(date));

      // If the new min is greater than the current date, unset the current date.
      if (date && curValue && date.getTime() < curValue.getTime()) {
        $(el).bsDatepicker("clearDates");
      } else {
        $(el).bsDatepicker("setUTCDate", curValue);
      }
    }
    // Given a date string of format yyyy-mm-dd, return a Date object with
    // that date at 12AM UTC.
    // If date is a Date object, return it unchanged.
  }, {
    key: "_newDate",
    value: function _newDate(date) {
      if (date instanceof Date) return date;
      if (!date) return null;

      // Get Date object - this will be at 12AM in UTC, but may print
      // differently at the Javascript console.
      var d = parseDate(date);

      // If invalid date, return null
      if (isNaN(d.valueOf())) return null;
      return d;
    }
    // A Date can have any time during a day; this will return a new Date object
    // set to 00:00 in UTC.
  }, {
    key: "_floorDateTime",
    value: function _floorDateTime(date) {
      date = new Date(date.getTime());
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    // Given a Date object, return a Date object which has the same "clock time"
    // in UTC. For example, if input date is 2013-02-01 23:00:00 GMT-0600 (CST),
    // output will be 2013-02-01 23:00:00 UTC. Note that the JS console may
    // print this in local time, as "Sat Feb 02 2013 05:00:00 GMT-0600 (CST)".
  }, {
    key: "_dateAsUTC",
    value: function _dateAsUTC(date) {
      return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    }
    // The inverse of _dateAsUTC. This is needed to adjust time zones because
    // some bootstrap-datepicker methods only take local dates as input, and not
    // UTC.
  }, {
    key: "_utcDateAsLocal",
    value: function _utcDateAsLocal(date) {
      return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }
  }]);
  return DateInputBindingBase;
}(InputBinding);
var DateInputBinding = /*#__PURE__*/function (_DateInputBindingBase) {
  _inherits(DateInputBinding, _DateInputBindingBase);
  var _super2 = _createSuper(DateInputBinding);
  function DateInputBinding() {
    _classCallCheck(this, DateInputBinding);
    return _super2.apply(this, arguments);
  }
  _createClass(DateInputBinding, [{
    key: "getValue",
    value:
    // Return the date in an unambiguous format, yyyy-mm-dd (as opposed to a
    // format like mm/dd/yyyy)
    function getValue(el) {
      var date = $(el).find("input").bsDatepicker("getUTCDate");
      return formatDateUTC(date);
    }
    // value must be an unambiguous string like '2001-01-01', or a Date object.
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      // R's NA, which is null here will remove current value
      if (value === null) {
        $(el).find("input").val("").bsDatepicker("update");
        return;
      }
      var date = this._newDate(value);
      if (date === null) {
        return;
      }

      // If date is invalid, do nothing
      if (isNaN(date.valueOf())) return;
      $(el).find("input").bsDatepicker("setUTCDate", date);
    }
  }, {
    key: "getState",
    value: function getState(el) {
      var $el = $(el);
      var $input = $el.find("input");
      var min = $input.data("datepicker").startDate;
      var max = $input.data("datepicker").endDate;

      // Stringify min and max. If min and max aren't set, they will be
      // -Infinity and Infinity; replace these with null.
      min = min === -Infinity ? null : formatDateUTC(min);
      max = max === Infinity ? null : formatDateUTC(max);

      // startViewMode is stored as a number; convert to string
      var startview = $input.data("datepicker").startViewMode;
      if (startview === 2) startview = "decade";else if (startview === 1) startview = "year";else if (startview === 0) startview = "month";
      return {
        label: this._getLabelNode(el).text(),
        value: this.getValue(el),
        valueString: $input.val(),
        min: min,
        max: max,
        language: $input.data("datepicker").language,
        weekstart: $input.data("datepicker").weekStart,
        format: this._formatToString($input.data("datepicker").format),
        startview: startview
      };
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      var $input = $(el).find("input");
      updateLabel(data.label, this._getLabelNode(el));
      if (hasDefinedProperty(data, "min")) this._setMin($input[0], data.min);
      if (hasDefinedProperty(data, "max")) this._setMax($input[0], data.max);

      // Must set value only after min and max have been set. If new value is
      // outside the bounds of the previous min/max, then the result will be a
      // blank input.
      if (hasDefinedProperty(data, "value")) this.setValue(el, data.value);
      $(el).trigger("change");
    }
  }]);
  return DateInputBinding;
}(DateInputBindingBase);
export { DateInputBinding, DateInputBindingBase };