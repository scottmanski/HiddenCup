import "core-js/modules/es.array.map.js";
// Map a value x from a domain to a range. If clip is true, clip it to the

import { mapValues } from "../utils";
// range.
function mapLinear(x, domainMin, domainMax, rangeMin, rangeMax) {
  var clip = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  // By default, clip to range
  clip = clip || true;
  var factor = (rangeMax - rangeMin) / (domainMax - domainMin);
  var val = x - domainMin;
  var newval = val * factor + rangeMin;
  if (clip) {
    var max = Math.max(rangeMax, rangeMin);
    var min = Math.min(rangeMax, rangeMin);
    if (newval > max) newval = max;else if (newval < min) newval = min;
  }
  return newval;
}

// Create scale and inverse-scale functions for a single direction (x or y).
function scaler1D(domainMin, domainMax, rangeMin, rangeMax, logbase) {
  return {
    scale: function scale(val, clip) {
      if (logbase) val = Math.log(val) / Math.log(logbase);
      return mapLinear(val, domainMin, domainMax, rangeMin, rangeMax, clip);
    },
    scaleInv: function scaleInv(val, clip) {
      var res = mapLinear(val, rangeMin, rangeMax, domainMin, domainMax, clip);
      if (logbase) res = Math.pow(logbase, res);
      return res;
    }
  };
}
// Modify panel, adding scale and inverse-scale functions that take objects
// like {x:1, y:3}, and also add clip function.
function addScaleFuns(panel_) {
  var panel = panel_;
  var d = panel.domain;
  var r = panel.range;
  var xlog = panel.log && panel.log.x ? panel.log.x : null;
  var ylog = panel.log && panel.log.y ? panel.log.y : null;
  var xscaler = scaler1D(d.left, d.right, r.left, r.right, xlog);
  var yscaler = scaler1D(d.bottom, d.top, r.bottom, r.top, ylog);

  // Given an object of form {x:1, y:2}, or {x:1, xmin:2:, ymax: 3}, convert
  // from data coordinates to img. Whether a value is converted as x or y
  // depends on the first character of the key.
  // (val: Offset, clip?: boolean): Offset;
  // (val: Bounds, clip?: boolean): Bounds;
  // (val: { [key: `${"x" | "y"}${string}`]: number }, clip?: boolean): { [key: `${"x" | "y"}${string}`]: number }
  // (val: { [key: string]: number | null }, clip?: boolean): {
  //   [key: string]: number | null;
  // };
  function scaleDataToImg(val, clip) {
    return mapValues(val, function (value, key) {
      var prefix = key.substring(0, 1);
      if (prefix === "x") {
        return xscaler.scale(value, clip);
      } else if (prefix === "y") {
        return yscaler.scale(value, clip);
      }
      // TODO-future; If we know the input is a valid input (starts with x/y), why do we still have this value?
      return null;
    });
  }
  panel.scaleDataToImg = scaleDataToImg;
  function scaleImgToData(val, clip) {
    return mapValues(val, function (value, key) {
      var prefix = key.substring(0, 1);
      if (prefix === "x") {
        return xscaler.scaleInv(value, clip);
      } else if (prefix === "y") {
        return yscaler.scaleInv(value, clip);
      }
      // TODO-future; If we know the input is a valid input (starts with x/y), why do we still have this value?
      return null;
    });
  }
  panel.scaleImgToData = scaleImgToData;

  // Given a scaled offset (in img pixels), clip it to the nearest panel region.
  panel.clipImg = function (offsetImg) {
    var newOffset = {
      x: offsetImg.x,
      y: offsetImg.y
    };
    var bounds = panel.range;
    if (offsetImg.x > bounds.right) newOffset.x = bounds.right;else if (offsetImg.x < bounds.left) newOffset.x = bounds.left;
    if (offsetImg.y > bounds.bottom) newOffset.y = bounds.bottom;else if (offsetImg.y < bounds.top) newOffset.y = bounds.top;
    return newOffset;
  };
  return panel;
}

// Modifies the panel objects in a coordmap, adding scaleImgToData(),
// scaleDataToImg(), and clipImg() functions to each one. The panel objects
// use img and data coordinates only; they do not use css coordinates. The
// domain is in data coordinates; the range is in img coordinates.
function initPanelScales(panels) {
  // Add the functions to each panel object.
  return panels.map(function (panel) {
    return addScaleFuns(panel);
  });
}
export { initPanelScales };