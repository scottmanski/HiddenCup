function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.string.search.js";
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
import { OutputBinding } from "./outputBinding";
import { shinyUnbindAll } from "../../shiny/initedMethods";
import { debounce } from "../../time";
import { escapeHTML } from "../../utils";
import { indirectEval } from "../../utils/eval";
var DatatableOutputBinding = /*#__PURE__*/function (_OutputBinding) {
  _inherits(DatatableOutputBinding, _OutputBinding);
  var _super = _createSuper(DatatableOutputBinding);
  function DatatableOutputBinding() {
    _classCallCheck(this, DatatableOutputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(DatatableOutputBinding, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find(".shiny-datatable-output");
    }
  }, {
    key: "onValueError",
    value: function onValueError(el, err) {
      shinyUnbindAll(el);
      this.renderError(el, err);
    }
  }, {
    key: "renderValue",
    value: function renderValue(el, _data) {
      var _data$options$searchi, _data$options, _data$options2, _data$options2$search;
      var $el = $(el).empty();
      if (!_data || !_data.colnames) return;
      var colnames = $.makeArray(_data.colnames);
      var header = $.map(colnames, function (x) {
        return "<th>" + x + "</th>";
      }).join("");
      header = "<thead><tr>" + header + "</tr></thead>";
      var footer = "";
      if ((_data$options$searchi = (_data$options = _data.options) === null || _data$options === void 0 ? void 0 : _data$options.searching) !== null && _data$options$searchi !== void 0 ? _data$options$searchi : true) {
        footer = $.map(colnames, function (x) {
          // placeholder needs to be escaped (and HTML tags are stripped off)
          return '<th><input type="text" placeholder="' + escapeHTML(x.replace(/(<([^>]+)>)/gi, "")) + '" /></th>';
        }).join("");
        footer = "<tfoot>" + footer + "</tfoot>";
      }
      var content = '<table class="table table-striped table-hover">' + header + footer + "</table>";
      $el.append(content);

      // options that should be eval()ed
      if (_data.evalOptions) {
        $.each(_data.evalOptions, function (i, x) {
          /*jshint evil: true */
          // @ts-expect-error; If `evalOptions` is defined, `data.options` should be defined
          _data.options[x] = indirectEval("(" + _data.options[x] + ")");
        });
      }

      // caseInsensitive searching? default true
      var searchCI = ((_data$options2 = _data.options) === null || _data$options2 === void 0 ? void 0 : (_data$options2$search = _data$options2.search) === null || _data$options2$search === void 0 ? void 0 : _data$options2$search.caseInsensitive) !== false;
      var oTable = $(el).children("table").DataTable($.extend({
        processing: true,
        serverSide: true,
        order: [],
        orderClasses: false,
        pageLength: 25,
        ajax: {
          url: _data.action,
          type: "POST",
          data: function data(d) {
            d.search || (d.search = {});
            d.search.caseInsensitive = searchCI;
            // Copy from the R value (`data.escape`) to the escape option
            // (`d.escape`) similar to `data.options.escape`;
            // Note: this logic may be wrong, but the method is strongly
            // deprecated in favor of DT package. So users should not
            // naturally run this line of code
            d.escape = _data.escape;
          }
        }
      }, _data.options));
      // the table object may need post-processing

      if (typeof _data.callback === "string") {
        /*jshint evil: true */
        var callback = indirectEval("(" + _data.callback + ")");
        if (typeof callback === "function") callback(oTable);
      }

      // use debouncing for searching boxes
      $el.find("label input").first().unbind("keyup").keyup(debounce(_data.searchDelay, function () {
        oTable.search(this.value).draw();
      }));
      var searchInputs = $el.find("tfoot input");
      if (searchInputs.length > 0) {
        // this is a little weird: aoColumns/bSearchable are still in DT 1.10
        // https://github.com/DataTables/DataTables/issues/388
        $.each(oTable.settings()[0].aoColumns, function (i, x) {
          // hide the text box if not searchable
          if (!x.bSearchable) searchInputs.eq(i).hide();
        });
        searchInputs.keyup(debounce(_data.searchDelay, function () {
          oTable.column(searchInputs.index(this)).search(this.value).draw();
        }));
      }
      // FIXME: ugly scrollbars in tab panels b/c Bootstrap uses 'visible: auto'
      $el.parents(".tab-content").css("overflow", "visible");
    }
  }]);
  return DatatableOutputBinding;
}(OutputBinding);
export { DatatableOutputBinding };