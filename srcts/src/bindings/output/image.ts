function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.filter.js";
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
import { createBrushHandler, createClickHandler, createClickInfo, createHoverHandler, disableDrag, initCoordmap } from "../../imageutils";
import { strToBool, getComputedLinkColor, getStyle, hasOwnProperty } from "../../utils";
import { isIE, IEVersion } from "../../utils/browser";
import { ifUndefined } from "../../utils/object";
var ImageOutputBinding = /*#__PURE__*/function (_OutputBinding) {
  _inherits(ImageOutputBinding, _OutputBinding);
  var _super = _createSuper(ImageOutputBinding);
  function ImageOutputBinding() {
    _classCallCheck(this, ImageOutputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(ImageOutputBinding, [{
    key: "find",
    value: function find(scope) {
      return $(scope).find(".shiny-image-output, .shiny-plot-output");
    }
  }, {
    key: "renderValue",
    value: function renderValue(el, data) {
      // The overall strategy:
      // * Clear out existing image and event handlers.
      // * Create new image.
      // * Create various event handlers.
      // * Bind those event handlers to events.
      // * Insert the new image.

      var outputId = this.getId(el);
      var $el = $(el);
      var img;

      // Get existing img element if present.
      var $img = $el.find("img");
      if ($img.length === 0) {
        // If a img element is not already present, that means this is either
        // the first time renderValue() has been called, or this is after an
        // error.
        img = document.createElement("img");
        $el.append(img);
        $img = $(img);
      } else {
        // Trigger custom 'reset' event for any existing images in the div
        img = $img[0];
        $img.trigger("reset");
      }
      if (!data) {
        $el.empty();
        return;
      }

      // If value is undefined, return alternate. Sort of like ||, except it won't
      // return alternate for other falsy values (0, false, null).

      var opts = {
        clickId: $el.data("click-id"),
        clickClip: ifUndefined(strToBool($el.data("click-clip")), true),
        dblclickId: $el.data("dblclick-id"),
        dblclickClip: ifUndefined(strToBool($el.data("dblclick-clip")), true),
        dblclickDelay: ifUndefined($el.data("dblclick-delay"), 400),
        hoverId: $el.data("hover-id"),
        hoverClip: ifUndefined(strToBool($el.data("hover-clip")), true),
        hoverDelayType: ifUndefined($el.data("hover-delay-type"), "debounce"),
        hoverDelay: ifUndefined($el.data("hover-delay"), 300),
        hoverNullOutside: ifUndefined(strToBool($el.data("hover-null-outside")), false),
        brushId: $el.data("brush-id"),
        brushClip: ifUndefined(strToBool($el.data("brush-clip")), true),
        brushDelayType: ifUndefined($el.data("brush-delay-type"), "debounce"),
        brushDelay: ifUndefined($el.data("brush-delay"), 300),
        brushFill: ifUndefined($el.data("brush-fill"), "#666"),
        brushStroke: ifUndefined($el.data("brush-stroke"), "#000"),
        brushOpacity: ifUndefined($el.data("brush-opacity"), 0.3),
        brushDirection: ifUndefined($el.data("brush-direction"), "xy"),
        brushResetOnNew: ifUndefined(strToBool($el.data("brush-reset-on-new")), false),
        coordmap: data.coordmap
      };
      if (opts.brushFill === "auto") {
        opts.brushFill = getComputedLinkColor($el[0]);
      }
      if (opts.brushStroke === "auto") {
        opts.brushStroke = getStyle($el[0], "color");
      }

      // Copy items from data to img. Don't set the coordmap as an attribute.
      $.each(data, function (key, value) {
        if (value === null || key === "coordmap") {
          return;
        }
        // this checks only against base64 encoded src values
        // images put here are only from renderImage and renderPlot
        if (key === "src" && value === img.getAttribute("src")) {
          // Ensure the browser actually fires an onLoad event, which doesn't
          // happen on WebKit if the value we set on src is the same as the
          // value it already has
          // https://github.com/rstudio/shiny/issues/2197
          // https://stackoverflow.com/questions/5024111/javascript-image-onload-doesnt-fire-in-webkit-if-loading-same-image
          img.removeAttribute("src");
        }
        img.setAttribute(key, value);
      });

      // Unset any attributes in the current img that were not provided in the
      // new data.
      for (var i = 0; i < img.attributes.length; i++) {
        var attrib = img.attributes[i];
        // Need to check attrib.specified on IE because img.attributes contains
        // all possible attributes on IE.

        if (attrib.specified && !hasOwnProperty(data, attrib.name)) {
          img.removeAttribute(attrib.name);
        }
      }
      if (!opts.coordmap) {
        opts.coordmap = {
          panels: [],
          dims: {
            // These values be set to the naturalWidth and naturalHeight once the image has loaded
            height: null,
            width: null
          }
        };
      }

      // Remove event handlers that were added in previous runs of this function.
      $el.off(".image_output");
      $img.off(".image_output");

      // When the image loads, initialize all the interaction handlers. When the
      // value of src is set, the browser may not load the image immediately,
      // even if it's a data URL. If we try to initialize this stuff
      // immediately, it can cause problems because we use we need the raw image
      // height and width
      $img.off("load.shiny_image_interaction");
      $img.one("load.shiny_image_interaction", function () {
        // Use a local variable so the type check is happy
        var optsCoordmap = opts.coordmap = initCoordmap($el, opts.coordmap);

        // This object listens for mousedowns, and triggers mousedown2 and dblclick2
        // events as appropriate.
        var clickInfo = createClickInfo($el, opts.dblclickId, opts.dblclickDelay);
        $el.on("mousedown.image_output", clickInfo.mousedown);
        if (isIE() && IEVersion() === 8) {
          $el.on("dblclick.image_output", clickInfo.dblclickIE8);
        }

        // ----------------------------------------------------------
        // Register the various event handlers
        // ----------------------------------------------------------
        if (opts.clickId) {
          disableDrag($el, $img);
          var clickHandler = createClickHandler(opts.clickId, opts.clickClip, optsCoordmap);
          $el.on("mousedown2.image_output", clickHandler.mousedown);
          $el.on("resize.image_output", clickHandler.onResize);

          // When img is reset, do housekeeping: clear $el's mouse listener and
          // call the handler's onResetImg callback.
          $img.on("reset.image_output", clickHandler.onResetImg);
        }
        if (opts.dblclickId) {
          disableDrag($el, $img);

          // We'll use the clickHandler's mousedown function, but register it to
          // our custom 'dblclick2' event.
          var dblclickHandler = createClickHandler(opts.dblclickId, opts.clickClip, optsCoordmap);
          $el.on("dblclick2.image_output", dblclickHandler.mousedown);
          $el.on("resize.image_output", dblclickHandler.onResize);
          $img.on("reset.image_output", dblclickHandler.onResetImg);
        }
        if (opts.hoverId) {
          disableDrag($el, $img);
          var hoverHandler = createHoverHandler(opts.hoverId, opts.hoverDelay, opts.hoverDelayType, opts.hoverClip, opts.hoverNullOutside, optsCoordmap);
          $el.on("mousemove.image_output", hoverHandler.mousemove);
          $el.on("mouseout.image_output", hoverHandler.mouseout);
          $el.on("resize.image_output", hoverHandler.onResize);
          $img.on("reset.image_output", hoverHandler.onResetImg);
        }
        if (opts.brushId) {
          disableDrag($el, $img);
          var brushHandler = createBrushHandler(opts.brushId, $el, opts, optsCoordmap, outputId);
          $el.on("mousedown.image_output", brushHandler.mousedown);
          $el.on("mousemove.image_output", brushHandler.mousemove);
          $el.on("resize.image_output", brushHandler.onResize);
          $img.on("reset.image_output", brushHandler.onResetImg);
        }
        if (opts.clickId || opts.dblclickId || opts.hoverId || opts.brushId) {
          $el.addClass("crosshair");
        }
        if (data.error) console.log("Error on server extracting coordmap: " + data.error);
      });
    }
  }, {
    key: "renderError",
    value: function renderError(el, err) {
      $(el).find("img").trigger("reset");
      OutputBinding.prototype.renderError.call(this, el, err);
    }
  }, {
    key: "clearError",
    value: function clearError(el) {
      // Remove all elements except img and the brush; this is usually just
      // error messages.
      $(el).contents().filter(function () {
        return !(this instanceof HTMLElement && (this.tagName === "IMG" || this.id === el.id + "_brush"));
      }).remove();

      // TODO-barret does this work?: `super.clearError(el)`
      OutputBinding.prototype.clearError.call(this, el);
    }
  }, {
    key: "resize",
    value: function resize(el, width, height) {
      $(el).find("img").trigger("resize");
      return;
      width;
      height;
    }
  }]);
  return ImageOutputBinding;
}(OutputBinding);
var imageOutputBinding = new ImageOutputBinding();
export { imageOutputBinding, ImageOutputBinding };