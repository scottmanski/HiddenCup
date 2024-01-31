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
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.to-string-tag.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import $ from "jquery";
// import { NameValueHTMLElement } from ".";
import { formatDateUTC, updateLabel, $escape, hasDefinedProperty } from "../../utils";
import { TextInputBindingBase } from "./text";

// interface SliderHTMLElement extends NameValueHTMLElement {
//   checked?: any;
// }

// Necessary to get hidden sliders to send their updated values
function forceIonSliderUpdate(slider) {
  if (slider.$cache && slider.$cache.input) slider.$cache.input.trigger("change");else console.log("Couldn't force ion slider to update");
}
function getTypePrettifyer(dataType, timeFormat, timezone) {
  var timeFormatter;
  var prettify;
  if (dataType === "date") {
    timeFormatter = window.strftime.utc();
    prettify = function prettify(num) {
      return timeFormatter(timeFormat, new Date(num));
    };
  } else if (dataType === "datetime") {
    if (timezone) timeFormatter = window.strftime.timezone(timezone);else timeFormatter = window.strftime;
    prettify = function prettify(num) {
      return timeFormatter(timeFormat, new Date(num));
    };
  } else {
    // The default prettify function for ion.rangeSlider adds thousands
    // separators after the decimal mark, so we have our own version here.
    // (#1958)
    prettify = function prettify(num) {
      // When executed, `this` will refer to the `IonRangeSlider.options`
      // object.
      return formatNumber(num, this.prettify_separator);
    };
  }
  return prettify;
}
function getLabelNode(el) {
  return $(el).parent().find('label[for="' + $escape(el.id) + '"]');
}
// Number of values; 1 for single slider, 2 for range slider
function numValues(el) {
  if ($(el).data("ionRangeSlider").options.type === "double") return 2;else return 1;
}
var SliderInputBinding = /*#__PURE__*/function (_TextInputBindingBase) {
  _inherits(SliderInputBinding, _TextInputBindingBase);
  var _super = _createSuper(SliderInputBinding);
  function SliderInputBinding() {
    _classCallCheck(this, SliderInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(SliderInputBinding, [{
    key: "find",
    value: function find(scope) {
      // Check if ionRangeSlider plugin is loaded
      if (!$.fn.ionRangeSlider) {
        // Return empty set of _found_ items
        return $();
      }
      return $(scope).find("input.js-range-slider");
    }
  }, {
    key: "getType",
    value: function getType(el) {
      var dataType = $(el).data("data-type");
      if (dataType === "date") return "shiny.date";else if (dataType === "datetime") return "shiny.datetime";else return null;
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      var $el = $(el);
      var result = $(el).data("ionRangeSlider").result;

      // Function for converting numeric value from slider to appropriate type.
      var convert;
      var dataType = $el.data("data-type");
      if (dataType === "date") {
        convert = function convert(val) {
          return formatDateUTC(new Date(Number(val)));
        };
      } else if (dataType === "datetime") {
        convert = function convert(val) {
          // Convert ms to s
          return Number(val) / 1000;
        };
      } else {
        convert = function convert(val) {
          return Number(val);
        };
      }
      if (numValues(el) === 2) {
        return [convert(result.from), convert(result.to)];
      } else {
        return convert(result.from);
      }
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      var $el = $(el);
      var slider = $el.data("ionRangeSlider");
      $el.data("immediate", true);
      try {
        if (numValues(el) === 2 && value instanceof Array) {
          slider.update({
            from: value[0],
            to: value[1]
          });
        } else {
          slider.update({
            from: value
          });
        }
        forceIonSliderUpdate(slider);
      } finally {
        $el.data("immediate", false);
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("change.sliderInputBinding", function () {
        callback(!$(el).data("immediate") && !$(el).data("animating"));
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".sliderInputBinding");
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      var $el = $(el);
      var slider = $el.data("ionRangeSlider");
      var msg = {};
      if (hasDefinedProperty(data, "value")) {
        if (numValues(el) === 2 && data.value instanceof Array) {
          msg.from = data.value[0];
          msg.to = data.value[1];
        } else {
          if (Array.isArray(data.value)) {
            var errorReason = ["an empty array.", "a single-value array.", "an array with more than two values."];
            throw "Slider requires two values to update with an array, " + "but message value was " + errorReason[Math.min(data.value.length, 2)];
          }
          msg.from = data.value;
        }
      }
      var sliderFeatures = ["min", "max", "step"];
      for (var i = 0; i < sliderFeatures.length; i++) {
        var feats = sliderFeatures[i];
        if (hasDefinedProperty(data, feats)) {
          msg[feats] = data[feats];
        }
      }
      updateLabel(data.label, getLabelNode(el));

      // (maybe) update data elements
      var domElements = ["data-type", "time-format", "timezone"];
      for (var _i = 0; _i < domElements.length; _i++) {
        var elem = domElements[_i];
        if (hasDefinedProperty(data, elem)) {
          $el.data(elem, data[elem]);
        }
      }

      // retrieve latest data values
      var dataType = $el.data("data-type");
      var timeFormat = $el.data("time-format");
      var timezone = $el.data("timezone");
      msg.prettify = getTypePrettifyer(dataType, timeFormat, timezone);
      $el.data("immediate", true);
      try {
        slider.update(msg);
        forceIonSliderUpdate(slider);
      } finally {
        $el.data("immediate", false);
      }
    }
  }, {
    key: "getRatePolicy",
    value: function getRatePolicy(el) {
      return {
        policy: "debounce",
        delay: 250
      };
      el;
    }
    // TODO-barret Why not implemented?
  }, {
    key: "getState",
    value: function getState(el) {
      // empty
      el;
    }
  }, {
    key: "initialize",
    value: function initialize(el) {
      var $el = $(el);
      var dataType = $el.data("data-type");
      var timeFormat = $el.data("time-format");
      var timezone = $el.data("timezone");
      var opts = {
        prettify: getTypePrettifyer(dataType, timeFormat, timezone)
      };
      $el.ionRangeSlider(opts);
    }
  }]);
  return SliderInputBinding;
}(TextInputBindingBase); // Format numbers for nicer output.
// formatNumber(1234567.12345)           === "1,234,567.12345"
// formatNumber(1234567.12345, ".", ",") === "1.234.567,12345"
// formatNumber(1000, " ")               === "1 000"
// formatNumber(20)                      === "20"
// formatNumber(1.2345e24)               === "1.2345e+24"
function formatNumber(num) {
  var thousandSep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ",";
  var decimalSep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
  var parts = num.toString().split(".");

  // Add separators to portion before decimal mark.
  parts[0] = parts[0].replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + thousandSep);
  if (parts.length === 1) return parts[0];else if (parts.length === 2) return parts[0] + decimalSep + parts[1];else return "";
}

// TODO-barret ; this should be put in the "init" areas, correct?
$(document).on("click", ".slider-animate-button", function (evt) {
  evt.preventDefault();
  var self = $(this);
  var target = $("#" + $escape(self.attr("data-target-id")));
  var startLabel = "Play";
  var stopLabel = "Pause";
  var loop = self.attr("data-loop") !== undefined && !/^\s*false\s*$/i.test(self.attr("data-loop"));
  var animInterval = self.attr("data-interval");
  if (isNaN(animInterval)) animInterval = 1500;else animInterval = Number(animInterval);
  if (!target.data("animTimer")) {
    var timer;

    // Separate code paths:
    // Backward compatible code for old-style jsliders (Shiny <= 0.10.2.2),
    // and new-style ionsliders.
    if (target.hasClass("jslider")) {
      var slider = target.slider();

      // If we're currently at the end, restart
      if (!slider.canStepNext()) slider.resetToStart();
      timer = setInterval(function () {
        if (loop && !slider.canStepNext()) {
          slider.resetToStart();
        } else {
          slider.stepNext();
          if (!loop && !slider.canStepNext()) {
            // TODO-barret replace with self.trigger("click")
            self.click(); // stop the animation
          }
        }
      }, animInterval);
    } else {
      var _slider = target.data("ionRangeSlider");
      // Single sliders have slider.options.type == "single", and only the
      // `from` value is used. Double sliders have type == "double", and also
      // use the `to` value for the right handle.
      var sliderCanStep = function sliderCanStep() {
        if (_slider.options.type === "double") return _slider.result.to < _slider.result.max;else return _slider.result.from < _slider.result.max;
      };
      var sliderReset = function sliderReset() {
        var val = {
          from: _slider.result.min
        };
        // Preserve the current spacing for double sliders

        if (_slider.options.type === "double") val.to = val.from + (_slider.result.to - _slider.result.from);
        _slider.update(val);
        forceIonSliderUpdate(_slider);
      };
      var sliderStep = function sliderStep() {
        // Don't overshoot the end
        var val = {
          from: Math.min(_slider.result.max, _slider.result.from + _slider.options.step)
        };
        if (_slider.options.type === "double") val.to = Math.min(_slider.result.max, _slider.result.to + _slider.options.step);
        _slider.update(val);
        forceIonSliderUpdate(_slider);
      };

      // If we're currently at the end, restart
      if (!sliderCanStep()) sliderReset();
      timer = setInterval(function () {
        if (loop && !sliderCanStep()) {
          sliderReset();
        } else {
          sliderStep();
          if (!loop && !sliderCanStep()) {
            self.click(); // stop the animation
          }
        }
      }, animInterval);
    }
    target.data("animTimer", timer);
    self.attr("title", stopLabel);
    self.addClass("playing");
    target.data("animating", true);
  } else {
    clearTimeout(target.data("animTimer"));
    target.removeData("animTimer");
    self.attr("title", startLabel);
    self.removeClass("playing");
    target.removeData("animating");
  }
});
export { SliderInputBinding };