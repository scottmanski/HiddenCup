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
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.json.stringify.js";
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
import { $escape, hasDefinedProperty, updateLabel } from "../../utils";
import { indirectEval } from "../../utils/eval";
function getLabelNode(el) {
  var escapedId = $escape(el.id);
  if (isSelectize(el)) {
    escapedId += "-selectized";
  }
  return $(el).parent().parent().find('label[for="' + escapedId + '"]');
}
// Return true if it's a selectize input, false if it's a regular select input.
// eslint-disable-next-line camelcase
function isSelectize(el) {
  var config = $(el).parent().find('script[data-for="' + $escape(el.id) + '"]');
  return config.length > 0;
}
var SelectInputBinding = /*#__PURE__*/function (_InputBinding) {
  _inherits(SelectInputBinding, _InputBinding);
  var _super = _createSuper(SelectInputBinding);
  function SelectInputBinding() {
    _classCallCheck(this, SelectInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(SelectInputBinding, [{
    key: "find",
    value: function find(scope) {
      // Inputs also have .shiny-input-select class
      return $(scope).find("select");
    }
  }, {
    key: "getType",
    value: function getType(el) {
      var $el = $(el);
      if (!$el.hasClass("symbol")) {
        // default character type
        return null;
      }
      if ($el.attr("multiple") === "multiple") {
        return "shiny.symbolList";
      } else {
        return "shiny.symbol";
      }
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return InputBinding.prototype.getId.call(this, el) || el.name;
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      if (!isSelectize(el)) {
        return $(el).val();
      } else {
        var selectize = this._selectize(el);
        return selectize === null || selectize === void 0 ? void 0 : selectize.getValue();
      }
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      if (!isSelectize(el)) {
        $(el).val(value);
      } else {
        var selectize = this._selectize(el);
        selectize === null || selectize === void 0 ? void 0 : selectize.setValue(value);
      }
    }
  }, {
    key: "getState",
    value: function getState(el) {
      // Store options in an array of objects, each with with value and label
      var options = new Array(el.length);
      for (var i = 0; i < el.length; i++) {
        options[i] = {
          // TODO-barret; Is this a safe assumption?; Are there no Option Groups?
          value: el[i].value,
          label: el[i].label
        };
      }
      return {
        label: getLabelNode(el),
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
        var selectize = this._selectize(el);

        // Must destroy selectize before appending new options, otherwise
        // selectize will restore the original select
        selectize === null || selectize === void 0 ? void 0 : selectize.destroy();
        // Clear existing options and add each new one
        $el.empty().append(data.options);
        this._selectize(el);
      }

      // re-initialize selectize
      if (hasDefinedProperty(data, "config")) {
        $el.parent().find('script[data-for="' + $escape(el.id) + '"]').replaceWith(data.config);
        this._selectize(el, true);
      }

      // use server-side processing for selectize
      if (hasDefinedProperty(data, "url")) {
        var _selectize2 = this._selectize(el);
        _selectize2.clearOptions();
        var loaded = false;
        _selectize2.settings.load = function (query, callback) {
          var settings = _selectize2.settings;

          /* eslint-disable @typescript-eslint/no-floating-promises */
          $.ajax({
            url: data.url,
            data: {
              query: query,
              field: JSON.stringify([settings.searchField]),
              value: settings.valueField,
              conju: settings.searchConjunction,
              maxop: settings.maxOptions
            },
            type: "GET",
            error: function error() {
              callback();
            },
            success: function success(res) {
              // res = [{label: '1', value: '1', group: '1'}, ...]
              // success is called after options are added, but
              // groups need to be added manually below
              $.each(res, function (index, elem) {
                // Call selectize.addOptionGroup once for each optgroup; the
                // first argument is the group ID, the second is an object with
                // the group's label and value. We use the current settings of
                // the selectize object to decide the fieldnames of that obj.
                var optgroupId = elem[settings.optgroupField || "optgroup"];
                var optgroup = {};
                optgroup[settings.optgroupLabelField || "label"] = optgroupId;
                optgroup[settings.optgroupValueField || "value"] = optgroupId;
                _selectize2.addOptionGroup(optgroupId, optgroup);
              });
              callback(res);
              if (!loaded) {
                if (hasDefinedProperty(data, "value")) {
                  _selectize2.setValue(data.value);
                } else if (settings.maxItems === 1) {
                  // first item selected by default only for single-select
                  _selectize2.setValue(res[0].value);
                }
              }
              loaded = true;
            }
          });
        };
        // perform an empty search after changing the `load` function
        _selectize2.load(function (callback) {
          _selectize2.settings.load.apply(_selectize2, ["", callback]);
        });
      } else if (hasDefinedProperty(data, "value")) {
        this.setValue(el, data.value);
      }
      updateLabel(data.label, getLabelNode(el));
      $(el).trigger("change");
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      var _this = this;
      $(el).on("change.selectInputBinding",
      // event: Event
      function () {
        // https://github.com/rstudio/shiny/issues/2162
        // Prevent spurious events that are gonna be squelched in
        // a second anyway by the onItemRemove down below
        if (el.nonempty && _this.getValue(el) === "") {
          return;
        }
        callback(false);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".selectInputBinding");
    }
  }, {
    key: "initialize",
    value: function initialize(el) {
      this._selectize(el);
    }
  }, {
    key: "_selectize",
    value: function _selectize(el) {
      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Apps like 008-html do not have the selectize js library
      // Safe-guard against missing the selectize js library
      if (!$.fn.selectize) return undefined;
      var $el = $(el);
      var config = $el.parent().find('script[data-for="' + $escape(el.id) + '"]');
      if (config.length === 0) return undefined;
      var options = $.extend({
        labelField: "label",
        valueField: "value",
        searchField: ["label"]
      }, JSON.parse(config.html()));

      // selectize created from selectInput()
      if (typeof config.data("nonempty") !== "undefined") {
        el.nonempty = true;
        options = $.extend(options, {
          onItemRemove: function onItemRemove(value) {
            if (this.getValue() === "") $("select#" + $escape(el.id)).empty().append($("<option/>", {
              value: value,
              selected: true
            })).trigger("change");
          },
          onDropdownClose:
          // $dropdown: any
          function onDropdownClose() {
            if (this.getValue() === "") {
              this.setValue($("select#" + $escape(el.id)).val());
            }
          }
        });
      } else {
        el.nonempty = false;
      }
      // options that should be eval()ed
      if (config.data("eval") instanceof Array) $.each(config.data("eval"), function (i, x) {
        /*jshint evil: true*/
        // @ts-expect-error; Need to type `options` keys to know exactly which values are accessed.
        options[x] = indirectEval("(" + options[x] + ")");
      });
      var control = $el.selectize(options)[0].selectize;
      // .selectize() does not really update settings; must destroy and rebuild

      if (update) {
        var settings = $.extend(control.settings, options);
        control.destroy();
        control = $el.selectize(settings)[0].selectize;
      }
      return control;
    }
  }]);
  return SelectInputBinding;
}(InputBinding);
export { SelectInputBinding };