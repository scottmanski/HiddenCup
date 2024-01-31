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
import { FileUploader } from "../../file/fileProcessor";
import { shinyShinyApp } from "../../shiny/initedMethods";
var zoneActive = "shiny-file-input-active";
var zoneOver = "shiny-file-input-over";
function zoneOf(el) {
  return $(el).closest("div.input-group");
}

// This function makes it possible to attach listeners to the dragenter,
// dragleave, and drop events of a single element with children. It's not
// intuitive to do directly because outer elements fire "dragleave" events
// both when the drag leaves the element and when the drag enters a child. To
// make it easier, we maintain a count of the elements being dragged across
// and trigger 3 new types of event:
//
// 1. draghover:enter - When a drag enters el and any of its children.
// 2. draghover:leave - When the drag leaves el and all of its children.
// 3. draghover:drop - When an item is dropped on el or any of its children.
function enableDraghover(el) {
  var $el = $(el);
  var childCounter = 0;

  /* eslint-disable @typescript-eslint/naming-convention */
  $el.on({
    "dragenter.draghover": function dragenterDraghover(e) {
      if (childCounter++ === 0) {
        $el.trigger("draghover:enter", e);
      }
    },
    "dragleave.draghover": function dragleaveDraghover(e) {
      if (--childCounter === 0) {
        $el.trigger("draghover:leave", e);
      }
      if (childCounter < 0) {
        console.error("draghover childCounter is negative somehow");
      }
    },
    "dragover.draghover": function dragoverDraghover(e) {
      e.preventDefault();
    },
    "drop.draghover": function dropDraghover(e) {
      childCounter = 0;
      $el.trigger("draghover:drop", e);
      e.preventDefault();
    }
  });
  return $el;
}
function disableDraghover(el) {
  return $(el).off(".draghover");
}
function enableDocumentEvents() {
  var $doc = $("html");
  enableDraghover($doc).on({
    "draghover:enter.draghover":
    // e: Event
    function draghoverEnterDraghover() {
      zoneOf($fileInputs).addClass(zoneActive);
    },
    "draghover:leave.draghover":
    // e: Event
    function draghoverLeaveDraghover() {
      zoneOf($fileInputs).removeClass(zoneActive);
    },
    "draghover:drop.draghover":
    // e: Event
    function draghoverDropDraghover() {
      zoneOf($fileInputs).removeClass(zoneOver).removeClass(zoneActive);
    }
  });
}
function disableDocumentEvents() {
  var $doc = $("html");
  $doc.off(".draghover");
  disableDraghover($doc);
}
function canSetFiles(fileList) {
  var testEl = document.createElement("input");
  testEl.type = "file";
  try {
    testEl.files = fileList;
  } catch (e) {
    return false;
  }
  return true;
}
function handleDrop(e, el) {
  var _e$originalEvent, _e$originalEvent$data;
  var files = (_e$originalEvent = e.originalEvent) === null || _e$originalEvent === void 0 ? void 0 : (_e$originalEvent$data = _e$originalEvent.dataTransfer) === null || _e$originalEvent$data === void 0 ? void 0 : _e$originalEvent$data.files,
    $el = $(el);
  if (files === undefined || files === null) {
    // 1. The FileList object isn't supported by this browser, and
    // there's nothing else we can try. (< IE 10)
    console.log("Dropping files is not supported on this browser. (no FileList)");
  } else if (!canSetFiles(files)) {
    // 2. The browser doesn't support assigning a type=file input's .files
    // property, but we do have a FileList to work with. (IE10+/Edge)
    $el.val("");
    uploadDroppedFilesIE10Plus(el, files);
  } else {
    // 3. The browser supports FileList and input.files assignment.
    // (Chrome, Safari)
    $el.val("");
    el.files = files;
    // Recent versions of Firefox (57+, or "Quantum" and beyond) don't seem to
    // automatically trigger a change event, so we trigger one manually here.
    // On browsers that do trigger change, this operation appears to be
    // idempotent, as el.files doesn't change between events.
    $el.trigger("change");
  }
}

// NOTE On Safari, at least version 10.1.2, *if the developer console is open*,
// setting the input's value will behave strangely because of a Safari bug. The
// uploaded file's name will appear over the placeholder value, instead of
// replacing it. The workaround is to restart Safari. When I (Alan Dipert) ran
// into this bug Winston Chang helped me diagnose the exact problem, and Winston
// then submitted a bug report to Apple.
function setFileText($el, files) {
  var $fileText = $el.closest("div.input-group").find("input[type=text]");
  if (files.length === 1) {
    $fileText.val(files[0].name);
  } else {
    $fileText.val(files.length + " files");
  }
}

// If previously selected files are uploading, abort that.
function abortCurrentUpload($el) {
  var uploader = $el.data("currentUploader");
  if (uploader) uploader.abort();
  // Clear data-restore attribute if present.
  $el.removeAttr("data-restore");
}
function uploadDroppedFilesIE10Plus(el, files) {
  var $el = $(el);
  abortCurrentUpload($el);

  // Set the label in the text box
  setFileText($el, files);

  // Start the new upload and put the uploader in 'currentUploader'.
  $el.data("currentUploader", new FileUploader(shinyShinyApp(), fileInputBindingGetId(el), files, el));
}
function uploadFiles(evt) {
  var $el = $(evt.target);
  abortCurrentUpload($el);
  var files = evt.target.files;
  var id = fileInputBindingGetId(evt.target);
  if (files.length === 0) return;

  // Set the label in the text box
  setFileText($el, files);

  // Start the new upload and put the uploader in 'currentUploader'.
  $el.data("currentUploader", new FileUploader(shinyShinyApp(), id, files, evt.target));
}

// Here we maintain a list of all the current file inputs. This is necessary
// because we need to trigger events on them in order to respond to file drag
// events. For example, they should all light up when a file is dragged on to
// the page.
// TODO-barret ; Should this be an internal class property?
var $fileInputs = $();
function fileInputBindingGetId(el) {
  return InputBinding.prototype.getId.call(this, el) || el.name;
}
var FileInputBinding = /*#__PURE__*/function (_InputBinding) {
  _inherits(FileInputBinding, _InputBinding);
  var _super = _createSuper(FileInputBinding);
  function FileInputBinding() {
    _classCallCheck(this, FileInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(FileInputBinding, [{
    key: "find",
    value: function find(scope) {
      // Inputs also have .shiny-input-file class
      return $(scope).find('input[type="file"]');
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return fileInputBindingGetId(el);
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      // This returns a non-undefined value only when there's a 'data-restore'
      // attribute, which is set only when restoring Shiny state. If a file is
      // uploaded through the browser, 'data-restore' gets cleared.
      var data = $(el).attr("data-restore");
      if (data) {
        var dataParsed = JSON.parse(data);

        // Set the label in the text box
        var $fileText = $(el).closest("div.input-group").find("input[type=text]");
        if (dataParsed.name.length === 1) {
          $fileText.val(dataParsed.name[0]);
        } else {
          $fileText.val(dataParsed.name.length + " files");
        }

        // Manually set up progress bar. A bit inelegant because it duplicates
        // code from FileUploader, but duplication is less bad than alternatives.
        var $progress = $(el).closest("div.form-group").find(".progress");
        var $bar = $progress.find(".progress-bar");
        $progress.removeClass("active");
        $bar.width("100%");
        $bar.css("visibility", "visible");
        return dataParsed;
      } else {
        return null;
      }
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      // Not implemented
      el;
      value;
    }
  }, {
    key: "getType",
    value: function getType(el) {
      // This will be used only when restoring a file from a saved state.
      return "shiny.file";
      el;
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      callback;
      $(el).on("change.fileInputBinding", uploadFiles);
      // Here we try to set up the necessary events for Drag and Drop ("DnD").
      if ($fileInputs.length === 0) enableDocumentEvents();
      $fileInputs = $fileInputs.add(el);
      var $zone = zoneOf(el);
      enableDraghover($zone).on({
        "draghover:enter.draghover": function draghoverEnterDraghover(e) {
          e;
          $zone.addClass(zoneOver);
        },
        "draghover:leave.draghover": function draghoverLeaveDraghover(e) {
          $zone.removeClass(zoneOver);
          // Prevent this event from bubbling to the document handler,
          // which would deactivate all zones.
          e.stopPropagation();
        },
        "draghover:drop.draghover": function draghoverDropDraghover(e, dropEvent) {
          e;
          handleDrop(dropEvent, el);
        }
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      var $el = $(el),
        $zone = zoneOf(el);
      $zone.removeClass(zoneOver).removeClass(zoneActive);
      disableDraghover($zone);
      $el.off(".fileInputBinding");
      $zone.off(".draghover");

      // Remove el from list of inputs and (maybe) clean up global event handlers.
      $fileInputs = $fileInputs.not(el);
      if ($fileInputs.length === 0) disableDocumentEvents();
    }
  }]);
  return FileInputBinding;
}(InputBinding);
export { FileInputBinding };