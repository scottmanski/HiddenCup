import "core-js/modules/es.parse-int.js";
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import $ from "jquery";
import { shinySetInputValue } from "../shiny/initedMethods";
import { mapValues } from "../utils";
import { initPanelScales } from "./initPanelScales";

// -----------------------------------------------------------------------
// Utility functions for finding dimensions and locations of DOM elements
// -----------------------------------------------------------------------

// Returns the ratio that an element has been scaled (for example, by CSS
// transforms) in the x and y directions.
function findScalingRatio($el) {
  var boundingRect = $el[0].getBoundingClientRect();
  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    x: boundingRect.width / $el.outerWidth(),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    y: boundingRect.height / $el.outerHeight()
  };
}
function findOrigin($el) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  var offset = $el.offset();
  var scalingRatio = findScalingRatio($el);

  // Find the size of the padding and border, for the top and left. This is
  // before any transforms.
  var paddingBorder = {
    left: parseInt($el.css("border-left-width")) + parseInt($el.css("padding-left")),
    top: parseInt($el.css("border-top-width")) + parseInt($el.css("padding-top"))
  };

  // offset() returns the upper left corner of the element relative to the
  // page, but it includes padding and border. Here we find the upper left
  // of the element, not including padding and border.
  return {
    x: offset.left + scalingRatio.x * paddingBorder.left,
    y: offset.top + scalingRatio.y * paddingBorder.top
  };
}

// Find the dimensions of a tag, after transforms, and without padding and
// border.
function findDims($el) {
  // If there's any padding/border, we need to find the ratio of the actual
  // element content compared to the element plus padding and border.
  var contentRatio = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    x: $el.width() / $el.outerWidth(),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    y: $el.height() / $el.outerHeight()
  };

  // Get the dimensions of the element _after_ any CSS transforms. This
  // includes the padding and border.
  var boundingRect = $el[0].getBoundingClientRect();

  // Dimensions of the element after any CSS transforms, and without
  // padding/border.
  return {
    x: contentRatio.x * boundingRect.width,
    y: contentRatio.y * boundingRect.height
  };
}
// This adds functions to the coordmap object to handle various
// coordinate-mapping tasks, and send information to the server. The input
// coordmap is an array of objects, each of which represents a panel. coordmap
// must be an array, even if empty, so that it can be modified in place; when
// empty, we add a dummy panel to the array. It also calls initPanelScales,
// which modifies each panel object to have scaleImgToData, scaleDataToImg,
// and clip functions.
//
// There are three coordinate spaces which we need to translate between:
//
// 1. css: The pixel coordinates in the web browser, also known as CSS pixels.
//    The origin is the upper-left corner of the <img> (not including padding
//    and border).
// 2. img: The pixel coordinates of the image data. A common case is on a
//    HiDPI device, where the source PNG image could be 1000 pixels wide but
//    be displayed in 500 CSS pixels. Another case is when the image has
//    additional scaling due to CSS transforms or width.
// 3. data: The coordinates in the data space. This is a bit more complicated
//    than the other two, because there can be multiple panels (as in facets).
function initCoordmap($el, coordmap_) {
  var $img = $el.find("img");
  var img = $img[0];

  // If we didn't get any panels, create a dummy one where the domain and range
  // are simply the pixel dimensions.
  // that we modify.
  if (coordmap_.panels.length === 0) {
    var bounds = {
      top: 0,
      left: 0,
      right: img.clientWidth - 1,
      bottom: img.clientHeight - 1
    };
    coordmap_.panels[0] = {
      domain: bounds,
      range: bounds,
      mapping: {}
    };
  }
  var coordmap = coordmap_;
  // If no dim height and width values are found, set them to the raw image height and width
  // These values should be the same...
  // This is only done to initialize an image output, whose height and width are unknown until the image is retrieved

  coordmap.dims.height = coordmap.dims.height || img.naturalHeight;
  coordmap.dims.width = coordmap.dims.width || img.naturalWidth;

  // Add scaling functions to each panel
  coordmap.panels = initPanelScales(coordmap_.panels);

  // This returns the offset of the mouse in CSS pixels relative to the img,
  // but not including the  padding or border, if present.
  coordmap.mouseOffsetCss = function (mouseEvent) {
    var imgOrigin = findOrigin($img);

    // The offset of the mouse from the upper-left corner of the img, in
    // pixels.
    return {
      x: mouseEvent.pageX - imgOrigin.x,
      y: mouseEvent.pageY - imgOrigin.y
    };
  };

  // Given an offset in an img in CSS pixels, return the corresponding offset
  // in source image pixels. The offsetCss can have properties like "x",
  // "xmin", "y", and "ymax" -- anything that starts with "x" and "y". If the
  // img content is 1000 pixels wide, but is scaled to 400 pixels on screen,
  // and the input is x:400, then this will return x:1000.

  function scaleCssToImg(offsetCss) {
    var pixelScaling = coordmap.imgToCssScalingRatio();
    var result = mapValues(offsetCss, function (value, key) {
      var prefix = key.substring(0, 1);
      if (prefix === "x") {
        return offsetCss[key] / pixelScaling.x;
      } else if (prefix === "y") {
        return offsetCss[key] / pixelScaling.y;
      }
      return null;
    });
    return result;
  }
  coordmap.scaleCssToImg = scaleCssToImg;

  // Given an offset in an img, in source image pixels, return the
  // corresponding offset in CSS pixels. If the img content is 1000 pixels
  // wide, but is scaled to 400 pixels on screen, and the input is x:1000,
  // then this will return x:400.

  function scaleImgToCss(offsetImg) {
    var pixelScaling = coordmap.imgToCssScalingRatio();
    var result = mapValues(offsetImg, function (value, key) {
      var prefix = key.substring(0, 1);
      if (prefix === "x") {
        return offsetImg[key] * pixelScaling.x;
      } else if (prefix === "y") {
        return offsetImg[key] * pixelScaling.y;
      }
      return null;
    });
    return result;
  }
  coordmap.scaleImgToCss = scaleImgToCss;

  // Returns the x and y ratio the image content is scaled to on screen. If
  // the image data is 1000 pixels wide and is scaled to 300 pixels on screen,
  // then this returns 0.3. (Note the 300 pixels refers to CSS pixels.)
  coordmap.imgToCssScalingRatio = function () {
    var imgDims = findDims($img);
    return {
      x: imgDims.x / coordmap.dims.width,
      y: imgDims.y / coordmap.dims.height
    };
  };
  coordmap.cssToImgScalingRatio = function () {
    var res = coordmap.imgToCssScalingRatio();
    return {
      x: 1 / res.x,
      y: 1 / res.y
    };
  };

  // Given an offset in css pixels, return an object representing which panel
  // it's in. The `expand` argument tells it to expand the panel area by that
  // many pixels. It's possible for an offset to be within more than one
  // panel, because of the `expand` value. If that's the case, find the
  // nearest panel.
  coordmap.getPanelCss = function (offsetCss) {
    var expand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var offsetImg = coordmap.scaleCssToImg(offsetCss);
    var x = offsetImg.x;
    var y = offsetImg.y;

    // Convert expand from css pixels to img pixels
    var cssToImgRatio = coordmap.cssToImgScalingRatio();
    var expandImg = {
      x: expand * cssToImgRatio.x,
      y: expand * cssToImgRatio.y
    };
    var matches = []; // Panels that match
    var dists = []; // Distance of offset to each matching panel
    var b;
    var i;
    for (i = 0; i < coordmap.panels.length; i++) {
      b = coordmap.panels[i].range;
      if (x <= b.right + expandImg.x && x >= b.left - expandImg.x && y <= b.bottom + expandImg.y && y >= b.top - expandImg.y) {
        matches.push(coordmap.panels[i]);

        // Find distance from edges for x and y
        var xdist = 0;
        var ydist = 0;
        if (x > b.right && x <= b.right + expandImg.x) {
          xdist = x - b.right;
        } else if (x < b.left && x >= b.left - expandImg.x) {
          xdist = x - b.left;
        }
        if (y > b.bottom && y <= b.bottom + expandImg.y) {
          ydist = y - b.bottom;
        } else if (y < b.top && y >= b.top - expandImg.y) {
          ydist = y - b.top;
        }

        // Cartesian distance
        dists.push(Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2)));
      }
    }
    if (matches.length) {
      // Find shortest distance
      var minDist = Math.min.apply(null, dists);
      for (i = 0; i < matches.length; i++) {
        if (dists[i] === minDist) {
          return matches[i];
        }
      }
    }
    return null;
  };

  // Is an offset (in css pixels) in a panel? If supplied, `expand` tells us
  // to expand the panels by that many pixels in all directions.
  coordmap.isInPanelCss = function (offsetCss) {
    var expand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (coordmap.getPanelCss(offsetCss, expand)) return true;
    return false;
  };

  // Returns a function that sends mouse coordinates, scaled to data space.
  // If that function is passed a null event, it will send null.
  coordmap.mouseCoordinateSender = function (inputId) {
    var clip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var nullOutside = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return function (e) {
      if (e === null) {
        shinySetInputValue(inputId, null);
        return;
      }
      var coordsCss = coordmap.mouseOffsetCss(e);
      // If outside of plotting region

      if (!coordmap.isInPanelCss(coordsCss)) {
        if (nullOutside) {
          shinySetInputValue(inputId, null);
          return;
        }
        if (clip) return;
        var _coords = {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          coords_css: coordsCss,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          coords_img: coordmap.scaleCssToImg(coordsCss)
        };
        shinySetInputValue(inputId, _coords, {
          priority: "event"
        });
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      var panel = coordmap.getPanelCss(coordsCss);
      var coordsImg = coordmap.scaleCssToImg(coordsCss);
      var coordsData = panel.scaleImgToData(coordsImg);
      var coords = {
        x: coordsData === null || coordsData === void 0 ? void 0 : coordsData.x,
        y: coordsData === null || coordsData === void 0 ? void 0 : coordsData.y,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        coords_css: coordsCss,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        coords_img: coordsImg,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        img_css_ratio: coordmap.cssToImgScalingRatio()
      };

      // Add the panel (facet) variables, if present
      $.extend(coords, panel.panel_vars);

      // Add variable name mappings
      coords.mapping = panel.mapping;

      // Add scaling information
      coords.domain = panel.domain;
      coords.range = panel.range;
      coords.log = panel.log;
      shinySetInputValue(inputId, coords, {
        priority: "event"
      });
    };
  };
  return coordmap;
}
export { initCoordmap, findOrigin };