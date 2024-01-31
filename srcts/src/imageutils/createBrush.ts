function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.some.js";
import "core-js/modules/es.object.values.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.object.define-properties.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import $ from "jquery";
import { findOrigin } from "./initCoordmap";
import { equal, isnan, mapValues, roundSignif } from "../utils";
import { findBox } from "./findbox";
import { shiftToRange } from "./shiftToRange";
// Returns an object that represents the state of the brush. This gets wrapped
// in a brushHandler, which provides various event listeners.
function createBrush($el, opts, coordmap, expandPixels) {
  // Number of pixels outside of brush to allow start resizing
  var resizeExpand = 10;
  var el = $el[0];
  var $div = null; // The div representing the brush

  var state = {};

  // Aliases for conciseness
  var cssToImg = coordmap.scaleCssToImg;
  var imgToCss = coordmap.scaleImgToCss;
  reset();
  function reset() {
    // Current brushing/dragging/resizing state
    state.brushing = false;
    state.dragging = false;
    state.resizing = false;

    // Offset of last mouse down and up events (in CSS pixels)
    state.down = {
      x: NaN,
      y: NaN
    };
    state.up = {
      x: NaN,
      y: NaN
    };

    // Which side(s) we're currently resizing
    state.resizeSides = {
      left: false,
      right: false,
      top: false,
      bottom: false
    };

    // Bounding rectangle of the brush, in CSS pixel and data dimensions. We
    // need to record data dimensions along with pixel dimensions so that when
    // a new plot is sent, we can re-draw the brush div with the appropriate
    // coords.
    state.boundsCss = {
      xmin: NaN,
      xmax: NaN,
      ymin: NaN,
      ymax: NaN
    };
    state.boundsData = {
      xmin: NaN,
      xmax: NaN,
      ymin: NaN,
      ymax: NaN
    };

    // Panel object that the brush is in
    state.panel = null;

    // The bounds at the start of a drag/resize (in CSS pixels)
    state.changeStartBounds = {
      xmin: NaN,
      xmax: NaN,
      ymin: NaN,
      ymax: NaN
    };
    if ($div) $div.remove();
  }
  function hasOldBrush() {
    var oldDiv = $el.find("#" + el.id + "_brush");
    return oldDiv.length > 0;
  }

  // If there's an existing brush div, use that div to set the new brush's
  // settings, provided that the x, y, and panel variables have the same names,
  // and there's a panel with matching panel variable values.
  function importOldBrush() {
    var oldDiv = $el.find("#" + el.id + "_brush");
    if (oldDiv.length === 0) return;
    var oldBoundsData = oldDiv.data("bounds-data");
    var oldPanel = oldDiv.data("panel");
    if (!oldBoundsData || !oldPanel) return;

    // Find a panel that has matching vars; if none found, we can't restore.
    // The oldPanel and new panel must match on their mapping vars, and the
    // values.
    for (var i = 0; i < coordmap.panels.length; i++) {
      var curPanel = coordmap.panels[i];
      if (equal(oldPanel.mapping, curPanel.mapping) && equal(oldPanel.panel_vars, curPanel.panel_vars)) {
        // We've found a matching panel
        state.panel = coordmap.panels[i];
        break;
      }
    }

    // If we didn't find a matching panel, remove the old div and return
    if (state.panel === null) {
      oldDiv.remove();
      return;
    }
    $div = oldDiv;
    boundsData(oldBoundsData);
    updateDiv();
  }

  // This will reposition the brush div when the image is resized, maintaining
  // the same data coordinates. Note that the "resize" here refers to the
  // wrapper div/img being resized; elsewhere, "resize" refers to the brush
  // div being resized.
  function onResize() {
    var boundsDataVal = boundsData();

    // Check to see if we have valid boundsData
    if (Object.values(boundsDataVal).some(isnan)) return;
    boundsData(boundsDataVal);
    updateDiv();
  }

  // Return true if the offset is inside min/max coords
  function isInsideBrush(offsetCss) {
    var bounds = state.boundsCss;
    return offsetCss.x <= bounds.xmax && offsetCss.x >= bounds.xmin && offsetCss.y <= bounds.ymax && offsetCss.y >= bounds.ymin;
  }

  // Return true if offset is inside a region to start a resize
  function isInResizeArea(offsetCss) {
    var sides = whichResizeSides(offsetCss);
    return sides.left || sides.right || sides.top || sides.bottom;
  }

  // Return an object representing which resize region(s) the cursor is in.
  function whichResizeSides(offsetCss) {
    var b = state.boundsCss;
    // Bounds with expansion
    var e = {
      xmin: b.xmin - resizeExpand,
      xmax: b.xmax + resizeExpand,
      ymin: b.ymin - resizeExpand,
      ymax: b.ymax + resizeExpand
    };
    var res = {
      left: false,
      right: false,
      top: false,
      bottom: false
    };
    if ((opts.brushDirection === "xy" || opts.brushDirection === "x") && offsetCss.y <= e.ymax && offsetCss.y >= e.ymin) {
      if (offsetCss.x < b.xmin && offsetCss.x >= e.xmin) res.left = true;else if (offsetCss.x > b.xmax && offsetCss.x <= e.xmax) res.right = true;
    }
    if ((opts.brushDirection === "xy" || opts.brushDirection === "y") && offsetCss.x <= e.xmax && offsetCss.x >= e.xmin) {
      if (offsetCss.y < b.ymin && offsetCss.y >= e.ymin) res.top = true;else if (offsetCss.y > b.ymax && offsetCss.y <= e.ymax) res.bottom = true;
    }
    return res;
  }

  // Sets the bounds of the brush (in CSS pixels), given a box and optional
  // panel. This will fit the box bounds into the panel, so we don't brush
  // outside of it. This knows whether we're brushing in the x, y, or xy
  // directions, and sets bounds accordingly. If no box is passed in, just
  // return current bounds.

  function boundsCss(boxCss) {
    if (boxCss === undefined) {
      return _objectSpread({}, state.boundsCss);
    }
    var minCss = {
      x: boxCss.xmin,
      y: boxCss.ymin
    };
    var maxCss = {
      x: boxCss.xmax,
      y: boxCss.ymax
    };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    var panel = state.panel;
    var panelBoundsImg = panel.range;
    if (opts.brushClip) {
      minCss = imgToCss(panel.clipImg(cssToImg(minCss)));
      maxCss = imgToCss(panel.clipImg(cssToImg(maxCss)));
    }
    if (opts.brushDirection === "xy") {
      // No change
    } else if (opts.brushDirection === "x") {
      // Extend top and bottom of plotting area
      minCss.y = imgToCss({
        y: panelBoundsImg.top
      }).y;
      maxCss.y = imgToCss({
        y: panelBoundsImg.bottom
      }).y;
    } else if (opts.brushDirection === "y") {
      minCss.x = imgToCss({
        x: panelBoundsImg.left
      }).x;
      maxCss.x = imgToCss({
        x: panelBoundsImg.right
      }).x;
    }
    state.boundsCss = {
      xmin: minCss.x,
      xmax: maxCss.x,
      ymin: minCss.y,
      ymax: maxCss.y
    };

    // Positions in data space
    var minData = panel.scaleImgToData(cssToImg(minCss));
    var maxData = panel.scaleImgToData(cssToImg(maxCss));
    // For reversed scales, the min and max can be reversed, so use findBox
    // to ensure correct order.

    state.boundsData = findBox(minData, maxData);
    // Round to 14 significant digits to avoid spurious changes in FP values
    // (#1634).
    state.boundsData = mapValues(state.boundsData, function (val) {
      return roundSignif(val, 14);
    });

    // We also need to attach the data bounds and panel as data attributes, so
    // that if the image is re-sent, we can grab the data bounds to create a new
    // brush. This should be fast because it doesn't actually modify the DOM.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    $div.data("bounds-data", state.boundsData);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    $div.data("panel", state.panel);
    return undefined;
  }

  // Get or set the bounds of the brush using coordinates in the data space.

  function boundsData(boxData) {
    if (typeof boxData === "undefined") {
      return _objectSpread({}, state.boundsData);
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    var boxCss = imgToCss(state.panel.scaleDataToImg(boxData));
    // Round to 13 significant digits to avoid spurious changes in FP values
    // (#2197).

    boxCss = mapValues(boxCss, function (val) {
      return roundSignif(val, 13);
    });

    // The scaling function can reverse the direction of the axes, so we need to
    // find the min and max again.
    boundsCss({
      xmin: Math.min(boxCss.xmin, boxCss.xmax),
      xmax: Math.max(boxCss.xmin, boxCss.xmax),
      ymin: Math.min(boxCss.ymin, boxCss.ymax),
      ymax: Math.max(boxCss.ymin, boxCss.ymax)
    });
    return undefined;
  }
  function getPanel() {
    return state.panel;
  }

  // Add a new div representing the brush.
  function addDiv() {
    /* eslint-disable @typescript-eslint/naming-convention */
    if ($div) $div.remove();

    // Start hidden; we'll show it when movement occurs
    $div = $(document.createElement("div")).attr("id", el.id + "_brush").css({
      "background-color": opts.brushFill,
      opacity: opts.brushOpacity,
      "pointer-events": "none",
      position: "absolute"
    }).hide();
    var borderStyle = "1px solid " + opts.brushStroke;
    if (opts.brushDirection === "xy") {
      $div.css({
        border: borderStyle
      });
    } else if (opts.brushDirection === "x") {
      $div.css({
        "border-left": borderStyle,
        "border-right": borderStyle
      });
    } else if (opts.brushDirection === "y") {
      $div.css({
        "border-top": borderStyle,
        "border-bottom": borderStyle
      });
    }
    $el.append($div);
    $div.offset(
    // @ts-expect-error; This is a jQuery Typing issue
    {
      x: 0,
      y: 0
    }).width(0).outerHeight(0);
  }

  // Update the brush div to reflect the current brush bounds.
  function updateDiv() {
    // Need parent offset relative to page to calculate mouse offset
    // relative to page.
    var imgOffsetCss = findOrigin($el.find("img"));
    var b = state.boundsCss;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    $div.offset({
      top: imgOffsetCss.y + b.ymin,
      left: imgOffsetCss.x + b.xmin
    }).outerWidth(b.xmax - b.xmin + 1).outerHeight(b.ymax - b.ymin + 1);
  }
  function down(offsetCss) {
    if (offsetCss === undefined) return state.down;
    state.down = offsetCss;
    return undefined;
  }
  function up(offsetCss) {
    if (offsetCss === undefined) return state.up;
    state.up = offsetCss;
    return undefined;
  }
  function isBrushing() {
    return state.brushing;
  }
  function startBrushing() {
    state.brushing = true;
    addDiv();
    state.panel = coordmap.getPanelCss(state.down, expandPixels);
    boundsCss(findBox(state.down, state.down));
    updateDiv();
  }
  function brushTo(offsetCss) {
    boundsCss(findBox(state.down, offsetCss));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    $div.show();
    updateDiv();
  }
  function stopBrushing() {
    state.brushing = false;
    // Save the final bounding box of the brush
    boundsCss(findBox(state.down, state.up));
  }
  function isDragging() {
    return state.dragging;
  }
  function startDragging() {
    state.dragging = true;
    state.changeStartBounds = _objectSpread({}, state.boundsCss);
  }
  function dragTo(offsetCss) {
    // How far the brush was dragged
    var dx = offsetCss.x - state.down.x;
    var dy = offsetCss.y - state.down.y;

    // Calculate what new positions would be, before clipping.
    var start = state.changeStartBounds;
    var newBoundsCss = {
      xmin: start.xmin + dx,
      xmax: start.xmax + dx,
      ymin: start.ymin + dy,
      ymax: start.ymax + dy
    };

    // Clip to the plotting area
    if (opts.brushClip) {
      var panel = state.panel;
      var panelBoundsImg = panel.range;
      var newBoundsImg = cssToImg(newBoundsCss);

      // Convert to format for shiftToRange
      var xvalsImg = [newBoundsImg.xmin, newBoundsImg.xmax];
      var yvalsImg = [newBoundsImg.ymin, newBoundsImg.ymax];
      xvalsImg = shiftToRange(xvalsImg, panelBoundsImg.left, panelBoundsImg.right);
      yvalsImg = shiftToRange(yvalsImg, panelBoundsImg.top, panelBoundsImg.bottom);

      // Convert back to bounds format
      newBoundsCss = imgToCss({
        xmin: xvalsImg[0],
        xmax: xvalsImg[1],
        ymin: yvalsImg[0],
        ymax: yvalsImg[1]
      });
    }
    boundsCss(newBoundsCss);
    updateDiv();
  }
  function stopDragging() {
    state.dragging = false;
  }
  function isResizing() {
    return state.resizing;
  }
  function startResizing() {
    state.resizing = true;
    state.changeStartBounds = _objectSpread({}, state.boundsCss);
    state.resizeSides = whichResizeSides(state.down);
  }
  function resizeTo(offsetCss) {
    // How far the brush was dragged
    var dCss = {
      x: offsetCss.x - state.down.x,
      y: offsetCss.y - state.down.y
    };
    var dImg = cssToImg(dCss);

    // Calculate what new positions would be, before clipping.
    var bImg = cssToImg(state.changeStartBounds);
    var panel = state.panel;
    var panelBoundsImg = panel.range;
    if (state.resizeSides.left) {
      var xminImg = shiftToRange(bImg.xmin + dImg.x, panelBoundsImg.left, bImg.xmax)[0];
      bImg.xmin = xminImg;
    } else if (state.resizeSides.right) {
      var xmaxImg = shiftToRange(bImg.xmax + dImg.x, bImg.xmin, panelBoundsImg.right)[0];
      bImg.xmax = xmaxImg;
    }
    if (state.resizeSides.top) {
      var yminImg = shiftToRange(bImg.ymin + dImg.y, panelBoundsImg.top, bImg.ymax)[0];
      bImg.ymin = yminImg;
    } else if (state.resizeSides.bottom) {
      var ymaxImg = shiftToRange(bImg.ymax + dImg.y, bImg.ymin, panelBoundsImg.bottom)[0];
      bImg.ymax = ymaxImg;
    }
    boundsCss(imgToCss(bImg));
    updateDiv();
  }
  function stopResizing() {
    state.resizing = false;
  }
  return {
    reset: reset,
    hasOldBrush: hasOldBrush,
    importOldBrush: importOldBrush,
    isInsideBrush: isInsideBrush,
    isInResizeArea: isInResizeArea,
    whichResizeSides: whichResizeSides,
    onResize: onResize,
    // A callback when the wrapper div or img is resized.

    boundsCss: boundsCss,
    boundsData: boundsData,
    getPanel: getPanel,
    down: down,
    up: up,
    isBrushing: isBrushing,
    startBrushing: startBrushing,
    brushTo: brushTo,
    stopBrushing: stopBrushing,
    isDragging: isDragging,
    startDragging: startDragging,
    dragTo: dragTo,
    stopDragging: stopDragging,
    isResizing: isResizing,
    startResizing: startResizing,
    resizeTo: resizeTo,
    stopResizing: stopResizing
  };
}
export { createBrush };