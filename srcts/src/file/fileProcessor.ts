function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.to-string-tag.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import $ from "jquery";
import { triggerFileInputChanged } from "../events/inputChanged";
import { $escape } from "../utils";
import { getFileInputBinding } from "../shiny/initedMethods";
// Generic driver class for doing chunk-wise asynchronous processing of a
// FileList object. Subclass/clone it and override the `on*` functions to
// make it do something useful.
var FileProcessor = /*#__PURE__*/function () {
  // Currently need to use small chunk size because R-Websockets can't
  // handle continuation frames

  function FileProcessor(files) {
    var exec$run = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, FileProcessor);
    _defineProperty(this, "files", void 0);
    _defineProperty(this, "fileIndex", -1);
    _defineProperty(this, "aborted", false);
    _defineProperty(this, "completed", false);
    this.files = Array.from(files);

    // TODO: Register error/abort callbacks
    if (exec$run) {
      this.$run();
    }
  }

  // Begin callbacks. Subclassers/cloners may override any or all of these.
  _createClass(FileProcessor, [{
    key: "onBegin",
    value: function onBegin(files, cont) {
      files;
      setTimeout(cont, 0);
    }
  }, {
    key: "onFile",
    value: function onFile(file, cont) {
      file;
      setTimeout(cont, 0);
    }
  }, {
    key: "onComplete",
    value: function onComplete() {
      return;
    }
  }, {
    key: "onAbort",
    value: function onAbort() {
      return;
    }
    // End callbacks

    // Aborts processing, unless it's already completed
  }, {
    key: "abort",
    value: function abort() {
      if (this.completed || this.aborted) return;
      this.aborted = true;
      this.onAbort();
    }

    // Returns a bound function that will call this.$run one time.
  }, {
    key: "$getRun",
    value: function $getRun() {
      var _this = this;
      var called = false;
      return function () {
        if (called) return;
        called = true;
        _this.$run();
      };
    }

    // This function will be called multiple times to advance the process.
    // It relies on the state of the object's fields to know what to do next.
  }, {
    key: "$run",
    value: function $run() {
      if (this.aborted || this.completed) return;
      if (this.fileIndex < 0) {
        // Haven't started yet--begin
        this.fileIndex = 0;
        this.onBegin(this.files, this.$getRun());
        return;
      }
      if (this.fileIndex === this.files.length) {
        // Just ended
        this.completed = true;
        this.onComplete();
        return;
      }

      // If we got here, then we have a file to process, or we are
      // in the middle of processing a file, or have just finished
      // processing a file.

      var file = this.files[this.fileIndex++];
      this.onFile(file, this.$getRun());
    }
  }]);
  return FileProcessor;
}();
var FileUploader = /*#__PURE__*/function (_FileProcessor) {
  _inherits(FileUploader, _FileProcessor);
  var _super = _createSuper(FileUploader);
  function FileUploader(shinyapp, id, files, el) {
    var _this2;
    _classCallCheck(this, FileUploader);
    // Init super with files, do not execute `this.$run()` before setting variables
    _this2 = _super.call(this, files, false);
    _defineProperty(_assertThisInitialized(_this2), "shinyapp", void 0);
    _defineProperty(_assertThisInitialized(_this2), "id", void 0);
    _defineProperty(_assertThisInitialized(_this2), "el", void 0);
    _defineProperty(_assertThisInitialized(_this2), "jobId", void 0);
    _defineProperty(_assertThisInitialized(_this2), "uploadUrl", void 0);
    _defineProperty(_assertThisInitialized(_this2), "progressBytes", void 0);
    _defineProperty(_assertThisInitialized(_this2), "totalBytes", void 0);
    _this2.shinyapp = shinyapp;
    _this2.id = id;
    _this2.el = el;
    _this2.$run();
    return _this2;
  }
  _createClass(FileUploader, [{
    key: "makeRequest",
    value: function makeRequest(method, args, onSuccess, onFailure, blobs) {
      this.shinyapp.makeRequest(method, args, onSuccess, onFailure, blobs);
    }
  }, {
    key: "onBegin",
    value: function onBegin(files, cont) {
      var _this3 = this;
      // Reset progress bar
      this.$setError(null);
      this.$setActive(true);
      this.$setVisible(true);
      this.onProgress(null, 0);
      this.totalBytes = 0;
      this.progressBytes = 0;
      $.each(files, function (i, file) {
        _this3.totalBytes += file.size;
      });
      var fileInfo = $.map(files, function (file) {
        return {
          name: file.name,
          size: file.size,
          type: file.type
        };
      });
      this.makeRequest("uploadInit", [fileInfo], function (response) {
        _this3.jobId = response.jobId;
        _this3.uploadUrl = response.uploadUrl;
        cont();
      }, function (error) {
        _this3.onError(error);
      }, undefined);
    }
  }, {
    key: "onFile",
    value: function onFile(file, cont) {
      var _this4 = this;
      this.onProgress(file, 0);

      /* eslint-disable @typescript-eslint/no-floating-promises */
      $.ajax(this.uploadUrl, {
        type: "POST",
        cache: false,
        xhr: function xhr() {
          if (typeof $.ajaxSettings.xhr !== "function") throw "jQuery's XHR is not a function";
          var xhrVal = $.ajaxSettings.xhr();
          if (xhrVal.upload) {
            xhrVal.upload.onprogress = function (e) {
              if (e.lengthComputable) {
                _this4.onProgress(file, (_this4.progressBytes + e.loaded) / _this4.totalBytes);
              }
            };
          }
          return xhrVal;
        },
        data: file,
        contentType: "application/octet-stream",
        processData: false,
        success: function success() {
          _this4.progressBytes += file.size;
          cont();
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          errorThrown;
          _this4.onError(jqXHR.responseText || textStatus);
        }
      });
    }
  }, {
    key: "onComplete",
    value: function onComplete() {
      var _this5 = this;
      var fileInfo = $.map(this.files, function (file, i) {
        return {
          name: file.name,
          size: file.size,
          type: file.type
        };
        i;
      });

      // Trigger shiny:inputchanged. Unlike a normal shiny:inputchanged event,
      // it's not possible to modify the information before the values get
      // sent to the server.
      var evt = triggerFileInputChanged(this.id, fileInfo, getFileInputBinding(), this.el, "shiny.fileupload", document);
      this.makeRequest("uploadEnd", [this.jobId, this.id], function () {
        _this5.$setActive(false);
        _this5.onProgress(null, 1);
        _this5.$bar().text("Upload complete");
        // Reset the file input's value to "". This allows the same file to be
        // uploaded again. https://stackoverflow.com/a/22521275
        $(evt.el).val("");
      }, function (error) {
        _this5.onError(error);
      }, undefined);
      this.$bar().text("Finishing upload");
    }
  }, {
    key: "onError",
    value: function onError(message) {
      this.$setError(message || "");
      this.$setActive(false);
    }
  }, {
    key: "onAbort",
    value: function onAbort() {
      this.$setVisible(false);
    }
  }, {
    key: "onProgress",
    value: function onProgress(file, completed) {
      this.$bar().width(Math.round(completed * 100) + "%");
      this.$bar().text(file ? file.name : "");
    }
  }, {
    key: "$container",
    value: function $container() {
      return $("#" + $escape(this.id) + "_progress.shiny-file-input-progress");
    }
  }, {
    key: "$bar",
    value: function $bar() {
      return $("#" + $escape(this.id) + "_progress.shiny-file-input-progress .progress-bar");
    }
  }, {
    key: "$setVisible",
    value: function $setVisible(visible) {
      this.$container().css("visibility", visible ? "visible" : "hidden");
    }
  }, {
    key: "$setError",
    value: function $setError(error) {
      this.$bar().toggleClass("progress-bar-danger", error !== null);
      if (error !== null) {
        this.onProgress(null, 1);
        this.$bar().text(error);
      }
    }
  }, {
    key: "$setActive",
    value: function $setActive(active) {
      this.$container().toggleClass("active", !!active);
    }
  }]);
  return FileUploader;
}(FileProcessor);
export { FileUploader };