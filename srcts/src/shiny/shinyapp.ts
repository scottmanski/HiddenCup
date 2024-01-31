function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.array.splice.js";
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.json.stringify.js";
import "core-js/modules/es.array-buffer.constructor.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.data-view.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.string.search.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.symbol.async-iterator.js";
import "core-js/modules/es.symbol.to-string-tag.js";
import "core-js/modules/es.json.to-string-tag.js";
import "core-js/modules/es.math.to-string-tag.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.array.reverse.js";
import "core-js/modules/es.array.from.js";
import $ from "jquery";
import { $escape, hasOwnProperty, randomId, scopeExprToFunc } from "../utils";
import { getShinyCreateWebsocket, getShinyOnCustomMessage, setShinyUser, shinyForgetLastInputValue, shinyUnbindAll } from "./initedMethods";
import { isQt } from "../utils/browser";
import { showNotification, removeNotification } from "./notifications";
import { showModal, removeModal } from "./modal";
import { renderContentAsync, renderHtmlAsync } from "./render";
import { hideReconnectDialog, showReconnectDialog } from "./reconnectDialog";
import { resetBrush } from "../imageutils/resetBrush";
import { indirectEval } from "../utils/eval";
import { AsyncQueue } from "../utils/asyncQueue";
//// 2021/03 - TypeScript conversion note:
// These four variables were moved from being internally defined to being defined globally within the file.
// Before the TypeScript conversion, the values where attached to `window.Shiny.addCustomMessageHandler()`.
// This prevents multiple instances of `ShinyApp` from existing independently. :-/
// This behavior is also exhibited on `Shiny.progressHandlers`, however there are no instances of use on GitHub. So moving the assignment to within `initShiny()`.

// Records insertion order of handlers. Maps number to name. This is so
// we can dispatch messages to handlers in the order that handlers were
// added.
var messageHandlerOrder = [];
// Keep track of handlers by name. Maps name to handler function.
var messageHandlers = {};

// Two categories of message handlers: those that are from Shiny, and those
// that are added by the user. The Shiny ones handle messages in
// msgObj.values, msgObj.errors, and so on. The user ones handle messages
// in msgObj.custom.foo and msgObj.custom.bar.
var customMessageHandlerOrder = [];
var customMessageHandlers = {};

// Adds Shiny (internal) message handler
function addMessageHandler(type, handler) {
  if (messageHandlers[type]) {
    throw 'handler for message of type "' + type + '" already added.';
  }
  if (typeof handler !== "function") {
    throw "handler must be a function.";
  }
  if (handler.length !== 1) {
    throw "handler must be a function that takes one argument.";
  }
  messageHandlerOrder.push(type);
  messageHandlers[type] = handler;
}

// Adds custom message handler - this one is exposed to the user
function addCustomMessageHandler(type, handler) {
  // Remove any previously defined handlers so that only the most recent one
  // will be called
  if (customMessageHandlers[type]) {
    var typeIdx = customMessageHandlerOrder.indexOf(type);
    if (typeIdx !== -1) {
      customMessageHandlerOrder.splice(typeIdx, 1);
      delete customMessageHandlers[type];
    }
  }
  if (typeof handler !== "function") {
    throw "handler must be a function.";
  }
  if (handler.length !== 1) {
    throw "handler must be a function that takes one argument.";
  }
  customMessageHandlerOrder.push(type);
  customMessageHandlers[type] = handler;
}

//// End message handler variables
var ShinyApp = /*#__PURE__*/function () {
  // An asynchronous queue of functions. This is sort of like an event loop for
  // Shiny, to allow scheduling async callbacks so that they can run in order
  // without overlapping. This is used for handling incoming messages from the
  // server and scheduling outgoing messages to the server, and can be used for
  // other things tasks as well.

  // Cached input values

  // Input values at initialization (and reconnect)

  // Output bindings

  // Cached values/errors

  // Conditional bindings (show/hide element based on expression)

  function ShinyApp() {
    _classCallCheck(this, ShinyApp);
    _defineProperty(this, "$socket", null);
    _defineProperty(this, "taskQueue", new AsyncQueue());
    _defineProperty(this, "config", null);
    _defineProperty(this, "$inputValues", {});
    _defineProperty(this, "$initialInput", null);
    _defineProperty(this, "$bindings", {});
    _defineProperty(this, "$values", {});
    _defineProperty(this, "$errors", {});
    _defineProperty(this, "$conditionals", {});
    _defineProperty(this, "$pendingMessages", []);
    _defineProperty(this, "$activeRequests", {});
    _defineProperty(this, "$nextRequestId", 0);
    _defineProperty(this, "$allowReconnect", false);
    _defineProperty(this, "scheduledReconnect", undefined);
    // How long should we wait before trying the next reconnection?
    // The delay will increase with subsequent attempts.
    // .next: Return the time to wait for next connection, and increment counter.
    // .reset: Reset the attempt counter.
    _defineProperty(this, "reconnectDelay", function () {
      var attempts = 0;
      // Time to wait before each reconnection attempt. If we go through all of
      // these values, repeated use the last one. Add 500ms to each one so that
      // in the last 0.5s, it shows "..."
      var delays = [1500, 1500, 2500, 2500, 5500, 5500, 10500];
      return {
        next: function next() {
          var i = attempts;
          // Instead of going off the end, use the last one

          if (i >= delays.length) {
            i = delays.length - 1;
          }
          attempts++;
          return delays[i];
        },
        reset: function reset() {
          attempts = 0;
        }
      };
    }());
    // Progress reporting ====================================================
    _defineProperty(this, "progressHandlers", {
      // Progress for a particular object
      binding: function binding(message) {
        var key = message.id;
        var binding = this.$bindings[key];
        if (binding) {
          $(binding.el).trigger({
            type: "shiny:outputinvalidated",
            // @ts-expect-error; Can not remove info on a established, malformed Event object
            binding: binding,
            name: key
          });
          if (binding.showProgress) binding.showProgress(true);
        }
      },
      // Open a page-level progress bar
      open: function () {
        var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
          var $container, depth, $progress, $progressBar, $progressText;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(message.style === "notification")) {
                  _context.next = 5;
                  break;
                }
                _context.next = 3;
                return showNotification({
                  html: "<div id=\"shiny-progress-".concat(message.id, "\" class=\"shiny-progress-notification\">") + '<div class="progress active" style="display: none;"><div class="progress-bar"></div></div>' + '<div class="progress-text">' + '<span class="progress-message">message</span> ' + '<span class="progress-detail"></span>' + "</div>" + "</div>",
                  id: message.id,
                  duration: null
                });
              case 3:
                _context.next = 6;
                break;
              case 5:
                if (message.style === "old") {
                  // For old-style (Shiny <=0.13.2) progress indicators.
                  // Add progress container (for all progress items) if not already present
                  $container = $(".shiny-progress-container");
                  if ($container.length === 0) {
                    $container = $('<div class="shiny-progress-container"></div>');
                    $(document.body).append($container);
                  }

                  // Add div for just this progress ID
                  depth = $(".shiny-progress.open").length; // The 'bar' class is needed for backward compatibility with Bootstrap 2.
                  $progress = $('<div class="shiny-progress open">' + '<div class="progress active"><div class="progress-bar bar"></div></div>' + '<div class="progress-text">' + '<span class="progress-message">message</span>' + '<span class="progress-detail"></span>' + "</div>" + "</div>");
                  $progress.attr("id", message.id);
                  $container.append($progress);

                  // Stack bars
                  $progressBar = $progress.find(".progress");
                  if ($progressBar) {
                    $progressBar.css("top", depth * $progressBar.height() + "px");

                    // Stack text objects
                    $progressText = $progress.find(".progress-text");
                    $progressText.css("top", 3 * $progressBar.height() + depth * $progressText.outerHeight() + "px");
                    $progress.hide();
                  }
                }
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function open(_x) {
          return _open.apply(this, arguments);
        }
        return open;
      }(),
      // Update page-level progress bar
      update: function update(message) {
        if (message.style === "notification") {
          // For new-style (starting in Shiny 0.14) progress indicators that use
          // the notification API.
          var $progress = $("#shiny-progress-" + message.id);
          if ($progress.length === 0) return;
          if (typeof message.message !== "undefined") {
            $progress.find(".progress-message").text(message.message);
          }
          if (typeof message.detail !== "undefined") {
            $progress.find(".progress-detail").text(message.detail);
          }
          if (typeof message.value !== "undefined" && message.value !== null) {
            $progress.find(".progress").show();
            $progress.find(".progress-bar").width(message.value * 100 + "%");
          }
        } else if (message.style === "old") {
          // For old-style (Shiny <=0.13.2) progress indicators.

          var _$progress = $("#" + message.id + ".shiny-progress");
          if (typeof message.message !== "undefined") {
            _$progress.find(".progress-message").text(message.message);
          }
          if (typeof message.detail !== "undefined") {
            _$progress.find(".progress-detail").text(message.detail);
          }
          if (typeof message.value !== "undefined" && message.value !== null) {
            _$progress.find(".progress").show();
            _$progress.find(".bar").width(message.value * 100 + "%");
          }
          _$progress.fadeIn();
        }
      },
      // Close page-level progress bar
      close: function close(message) {
        if (message.style === "notification") {
          removeNotification(message.id);
        } else if (message.style === "old") {
          var $progress = $("#" + message.id + ".shiny-progress");
          $progress.removeClass("open");
          $progress.fadeOut({
            complete: function complete() {
              $progress.remove();

              // If this was the last shiny-progress, remove container
              if ($(".shiny-progress").length === 0) $(".shiny-progress-container").remove();
            }
          });
        }
      }
    });
    this._init();
  }
  _createClass(ShinyApp, [{
    key: "connect",
    value: function connect(initialInput) {
      if (this.$socket) throw "Connect was already called on this application object";
      this.$socket = this.createSocket();
      this.$initialInput = initialInput;
      $.extend(this.$inputValues, initialInput);
      this.$updateConditionals();
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return !!this.$socket;
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      // This function can be invoked directly even if there's a scheduled
      // reconnect, so be sure to clear any such scheduled reconnects.
      clearTimeout(this.scheduledReconnect);
      if (this.isConnected()) throw "Attempted to reconnect, but already connected.";
      this.$socket = this.createSocket();
      this.$initialInput = $.extend({}, this.$inputValues);
      this.$updateConditionals();
    }
  }, {
    key: "createSocket",
    value: function createSocket() {
      var _this = this;
      var createSocketFunc = getShinyCreateWebsocket() || function () {
        var protocol = "ws:";
        if (window.location.protocol === "https:") protocol = "wss:";
        var defaultPath = window.location.pathname;
        // some older WebKit browsers return the pathname already decoded;
        // if we find invalid URL characters in the path, encode them

        if (!/^([$#!&-;=?-[\]_a-z~]|%[0-9a-fA-F]{2})+$/.test(defaultPath)) {
          defaultPath = encodeURI(defaultPath);
          // Bizarrely, QtWebKit requires us to encode these characters *twice*
          if (isQt()) {
            defaultPath = encodeURI(defaultPath);
          }
        }
        if (!/\/$/.test(defaultPath)) defaultPath += "/";
        defaultPath += "websocket/";
        var ws = new WebSocket(protocol + "//" + window.location.host + defaultPath);
        ws.binaryType = "arraybuffer";
        return ws;
      };
      var socket = createSocketFunc();
      var hasOpened = false;
      socket.onopen = function () {
        hasOpened = true;
        $(document).trigger({
          type: "shiny:connected",
          // @ts-expect-error; Can not remove info on a established, malformed Event object
          socket: socket
        });
        _this.onConnected();
        socket.send(JSON.stringify({
          method: "init",
          data: _this.$initialInput
        }));
        while (_this.$pendingMessages.length) {
          var msg = _this.$pendingMessages.shift();
          socket.send(msg);
        }

        // This launches the action queue loop, which just runs in the background,
        // so we don't need to await it.
        /* eslint-disable @typescript-eslint/no-floating-promises */
        _this.startActionQueueLoop();
      };
      socket.onmessage = function (e) {
        _this.taskQueue.enqueue( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.dispatchMessage(e.data);
              case 2:
                return _context2.abrupt("return", _context2.sent);
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
      };
      // Called when a successfully-opened websocket is closed, or when an
      // attempt to open a connection fails.
      socket.onclose = function (e) {
        var restarting = e.code === 1012; // Uvicorn sets this code when autoreloading
        // These things are needed only if we've successfully opened the
        // websocket.
        if (hasOpened) {
          $(document).trigger({
            type: "shiny:disconnected",
            // @ts-expect-error; Can not remove info on a established, malformed Event object
            socket: socket
          });
          _this.$notifyDisconnected();
        }
        _this.onDisconnected(restarting); // Must be run before this.$removeSocket()
        _this.$removeSocket();
      };
      return socket;
    }
  }, {
    key: "startActionQueueLoop",
    value: function () {
      var _startActionQueueLoop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var action;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!true) {
                _context3.next = 14;
                break;
              }
              _context3.next = 3;
              return this.taskQueue.dequeue();
            case 3:
              action = _context3.sent;
              _context3.prev = 4;
              _context3.next = 7;
              return action();
            case 7:
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](4);
              console.error(_context3.t0);
            case 12:
              _context3.next = 0;
              break;
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 9]]);
      }));
      function startActionQueueLoop() {
        return _startActionQueueLoop.apply(this, arguments);
      }
      return startActionQueueLoop;
    }()
  }, {
    key: "sendInput",
    value: function sendInput(values) {
      var msg = JSON.stringify({
        method: "update",
        data: values
      });
      this.$sendMsg(msg);
      $.extend(this.$inputValues, values);
      this.$updateConditionals();
    }
  }, {
    key: "$notifyDisconnected",
    value: function $notifyDisconnected() {
      if (window.parent) {
        window.parent.postMessage("disconnected", "*");
      }
    }
  }, {
    key: "$removeSocket",
    value: function $removeSocket() {
      this.$socket = null;
    }
  }, {
    key: "$scheduleReconnect",
    value: function $scheduleReconnect(delay) {
      var _this2 = this;
      this.scheduledReconnect = window.setTimeout(function () {
        _this2.reconnect();
      }, delay);
    }
  }, {
    key: "onDisconnected",
    value: function onDisconnected() {
      var reloading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Add gray-out overlay, if not already present
      if ($("#shiny-disconnected-overlay").length === 0) {
        $(document.body).append('<div id="shiny-disconnected-overlay"></div>');
      }
      $("#shiny-disconnected-overlay").toggleClass("reloading", reloading);

      // To try a reconnect, both the app (this.$allowReconnect) and the
      // server (this.$socket.allowReconnect) must allow reconnections, or
      // session$allowReconnect("force") was called. The "force" option should
      // only be used for testing.
      if (this.$allowReconnect === true &&
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.$socket.allowReconnect === true || this.$allowReconnect === "force") {
        var delay = this.reconnectDelay.next();
        showReconnectDialog(delay);
        this.$scheduleReconnect(delay);
      }
    }
  }, {
    key: "onConnected",
    value: function onConnected() {
      $("#shiny-disconnected-overlay").remove();
      hideReconnectDialog();
      this.reconnectDelay.reset();
    }

    // NB: Including blobs will cause IE to break!
    // TODO: Make blobs work with Internet Explorer
    //
    // Websocket messages are normally one-way--i.e. the client passes a
    // message to the server but there is no way for the server to provide
    // a response to that specific message. makeRequest provides a way to
    // do asynchronous RPC over websocket. Each request has a method name
    // and arguments, plus optionally one or more binary blobs can be
    // included as well. The request is tagged with a unique number that
    // the server will use to label the corresponding response.
    //
    // @param method A string that tells the server what logic to run.
    // @param args An array of objects that should also be passed to the
    //   server in JSON-ified form.
    // @param onSuccess A function that will be called back if the server
    //   responds with success. If the server provides a value in the
    //   response, the function will be called with it as the only argument.
    // @param onError A function that will be called back if the server
    //   responds with error, or if the request fails for any other reason.
    //   The parameter to onError will be a string describing the error.
    // @param blobs Optionally, an array of Blob, ArrayBuffer, or string
    //   objects that will be made available to the server as part of the
    //   request. Strings will be encoded using UTF-8.
  }, {
    key: "makeRequest",
    value: function makeRequest(method, args, onSuccess, onError, blobs) {
      var requestId = this.$nextRequestId;
      while (this.$activeRequests[requestId]) {
        requestId = (requestId + 1) % 1000000000;
      }
      this.$nextRequestId = requestId + 1;
      this.$activeRequests[requestId] = {
        onSuccess: onSuccess,
        onError: onError
      };
      var msg = JSON.stringify({
        method: method,
        args: args,
        tag: requestId
      });
      if (blobs) {
        // We have binary data to transfer; form a different kind of packet.
        // Start with a 4-byte signature, then for each blob, emit 4 bytes for
        // the length followed by the blob. The json payload is UTF-8 encoded
        // and used as the first blob.

        var uint32ToBuf = function uint32ToBuf(val) {
          var buffer = new ArrayBuffer(4);
          var view = new DataView(buffer);
          view.setUint32(0, val, true); // little-endian
          return buffer;
        };
        var payload = [];
        payload.push(uint32ToBuf(0x01020202)); // signature

        var jsonBuf = new Blob([msg]);
        payload.push(uint32ToBuf(jsonBuf.size));
        payload.push(jsonBuf);
        for (var i = 0; i < blobs.length; i++) {
          var _blob = blobs[i];
          payload.push(uint32ToBuf(_blob.byteLength || _blob.size || 0));
          payload.push(_blob);
        }
        var blob = new Blob(payload);
        msg = blob;
      }
      this.$sendMsg(msg);
    }
  }, {
    key: "$sendMsg",
    value: function $sendMsg(msg) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (!this.$socket.readyState) {
        this.$pendingMessages.push(msg);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.$socket.send(msg);
      }
    }
  }, {
    key: "receiveError",
    value: function receiveError(name, error) {
      if (this.$errors[name] === error) return;
      this.$errors[name] = error;
      delete this.$values[name];
      var binding = this.$bindings[name];
      var evt = $.Event("shiny:error");
      evt.name = name;
      evt.error = error;
      evt.binding = binding;
      $(binding ? binding.el : document).trigger(evt);
      if (!evt.isDefaultPrevented() && binding && binding.onValueError) {
        binding.onValueError(evt.error);
      }
    }
  }, {
    key: "receiveOutput",
    value: function () {
      var _receiveOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, value) {
        var binding, evt;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              binding = this.$bindings[name];
              evt = $.Event("shiny:value");
              evt.name = name;
              evt.value = value;
              evt.binding = binding;
              if (!(this.$values[name] === value)) {
                _context4.next = 8;
                break;
              }
              $(binding ? binding.el : document).trigger(evt);
              return _context4.abrupt("return", undefined);
            case 8:
              this.$values[name] = value;
              delete this.$errors[name];
              $(binding ? binding.el : document).trigger(evt);
              if (!(!evt.isDefaultPrevented() && binding)) {
                _context4.next = 14;
                break;
              }
              _context4.next = 14;
              return binding.onValueChange(evt.value);
            case 14:
              return _context4.abrupt("return", value);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function receiveOutput(_x2, _x3) {
        return _receiveOutput.apply(this, arguments);
      }
      return receiveOutput;
    }()
  }, {
    key: "bindOutput",
    value: function () {
      var _bindOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, binding) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (id) {
                _context5.next = 2;
                break;
              }
              throw "Can't bind an element with no ID";
            case 2:
              if (!this.$bindings[id]) {
                _context5.next = 4;
                break;
              }
              throw "Duplicate binding for ID " + id;
            case 4:
              this.$bindings[id] = binding;
              if (!(this.$values[id] !== undefined)) {
                _context5.next = 10;
                break;
              }
              _context5.next = 8;
              return binding.onValueChange(this.$values[id]);
            case 8:
              _context5.next = 11;
              break;
            case 10:
              if (this.$errors[id] !== undefined) binding.onValueError(this.$errors[id]);
            case 11:
              return _context5.abrupt("return", binding);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function bindOutput(_x4, _x5) {
        return _bindOutput.apply(this, arguments);
      }
      return bindOutput;
    }()
  }, {
    key: "unbindOutput",
    value: function unbindOutput(id, binding) {
      if (this.$bindings[id] === binding) {
        delete this.$bindings[id];
        return true;
      } else {
        return false;
      }
    }

    // Narrows a scopeComponent -- an input or output object -- to one constrained
    // by nsPrefix. Returns a new object with keys removed and renamed as
    // necessary.
  }, {
    key: "_narrowScopeComponent",
    value: function _narrowScopeComponent(scopeComponent, nsPrefix) {
      return Object.keys(scopeComponent).filter(function (k) {
        return k.indexOf(nsPrefix) === 0;
      }).map(function (k) {
        return _defineProperty({}, k.substring(nsPrefix.length), scopeComponent[k]);
      }).reduce(function (obj, pair) {
        return $.extend(obj, pair);
      }, {});
    }

    // Narrows a scope -- an object with input and output "subComponents" -- to
    // one constrained by the nsPrefix string.
    //
    // If nsPrefix is null or empty, returns scope without modification.
    //
    // Otherwise, returns a new object with keys in subComponents removed and
    // renamed as necessary.
  }, {
    key: "_narrowScope",
    value: function _narrowScope(scope, nsPrefix) {
      if (nsPrefix) {
        return {
          input: this._narrowScopeComponent(scope.input, nsPrefix),
          output: this._narrowScopeComponent(scope.output, nsPrefix)
        };
      }
      return scope;
    }
  }, {
    key: "$updateConditionals",
    value: function $updateConditionals() {
      // @ts-expect-error; TODO-barret; Could this be transformed into `.trigger(TYPE)`?
      $(document).trigger({
        type: "shiny:conditional"
      });
      var inputs = {};

      // Input keys use "name:type" format; we don't want the user to
      // have to know about the type suffix when referring to inputs.
      for (var name in this.$inputValues) {
        if (hasOwnProperty(this.$inputValues, name)) {
          var shortName = name.replace(/:.*/, "");
          inputs[shortName] = this.$inputValues[name];
        }
      }
      var scope = {
        input: inputs,
        output: this.$values
      };
      var conditionals = $(document).find("[data-display-if]");
      for (var i = 0; i < conditionals.length; i++) {
        var el = $(conditionals[i]);
        var condFunc = el.data("data-display-if-func");
        if (!condFunc) {
          var condExpr = el.attr("data-display-if");
          condFunc = scopeExprToFunc(condExpr);
          el.data("data-display-if-func", condFunc);
        }
        var nsPrefix = el.attr("data-ns-prefix");
        var nsScope = this._narrowScope(scope, nsPrefix);
        var show = condFunc(nsScope);
        var showing = el.css("display") !== "none";
        if (show !== showing) {
          if (show) {
            el.trigger("show");
            el.show();
            el.trigger("shown");
          } else {
            el.trigger("hide");
            el.hide();
            el.trigger("hidden");
          }
        }
      }
    }

    // Message handler management functions =================================

    // // Added in shiny init method
    // Shiny.addCustomMessageHandler = addCustomMessageHandler;
  }, {
    key: "dispatchMessage",
    value: function () {
      var _dispatchMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data) {
        var msgObj, len, typedv, typebuf, i, type, evt;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              msgObj = {};
              if (typeof data === "string") {
                msgObj = JSON.parse(data);
              } else {
                // data is arraybuffer
                len = new DataView(data, 0, 1).getUint8(0);
                typedv = new DataView(data, 1, len);
                typebuf = [];
                for (i = 0; i < len; i++) {
                  typebuf.push(String.fromCharCode(typedv.getUint8(i)));
                }
                type = typebuf.join("");
                data = data.slice(len + 1);
                msgObj.custom = {};
                // @ts-expect-error; `custom` value is of unknown type. So setting within it is not allowed
                msgObj.custom[type] = data;
              }
              evt = $.Event("shiny:message");
              evt.message = msgObj;
              $(document).trigger(evt);
              if (!evt.isDefaultPrevented()) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return");
            case 7:
              _context6.next = 9;
              return this._sendMessagesToHandlers(evt.message, messageHandlers, messageHandlerOrder);
            case 9:
              this.$updateConditionals();
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function dispatchMessage(_x6) {
        return _dispatchMessage.apply(this, arguments);
      }
      return dispatchMessage;
    }() // Message handlers =====================================================
    // A function for sending messages to the appropriate handlers.
    // - msgObj: the object containing messages, with format {msgObj.foo, msObj.bar
  }, {
    key: "_sendMessagesToHandlers",
    value: function () {
      var _sendMessagesToHandlers2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(msgObj, handlers, handlerOrder) {
        var i, msgType;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < handlerOrder.length)) {
                _context7.next = 9;
                break;
              }
              msgType = handlerOrder[i];
              if (!hasOwnProperty(msgObj, msgType)) {
                _context7.next = 6;
                break;
              }
              _context7.next = 6;
              return handlers[msgType].call(this, msgObj[msgType]);
            case 6:
              i++;
              _context7.next = 1;
              break;
            case 9:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function _sendMessagesToHandlers(_x7, _x8, _x9) {
        return _sendMessagesToHandlers2.apply(this, arguments);
      }
      return _sendMessagesToHandlers;
    }()
  }, {
    key: "_init",
    value: function _init() {
      var _this3 = this;
      // Dev note:
      // * Use arrow functions to allow the Types to propagate.
      // * However, `_sendMessagesToHandlers()` will adjust the `this` context to the same _`this`_.

      addMessageHandler("values", /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(message) {
          var name, _key;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                for (name in _this3.$bindings) {
                  if (hasOwnProperty(_this3.$bindings, name)) _this3.$bindings[name].showProgress(false);
                }
                _context8.t0 = _regeneratorRuntime().keys(message);
              case 2:
                if ((_context8.t1 = _context8.t0()).done) {
                  _context8.next = 9;
                  break;
                }
                _key = _context8.t1.value;
                if (!hasOwnProperty(message, _key)) {
                  _context8.next = 7;
                  break;
                }
                _context8.next = 7;
                return _this3.receiveOutput(_key, message[_key]);
              case 7:
                _context8.next = 2;
                break;
              case 9:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return function (_x10) {
          return _ref3.apply(this, arguments);
        };
      }());
      addMessageHandler("errors", function (message) {
        for (var _key2 in message) {
          if (hasOwnProperty(message, _key2)) _this3.receiveError(_key2, message[_key2]);
        }
      });
      addMessageHandler("inputMessages", /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(message) {
          var i, $obj, inputBinding, el, evt;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                i = 0;
              case 1:
                if (!(i < message.length)) {
                  _context9.next = 23;
                  break;
                }
                $obj = $(".shiny-bound-input#" + $escape(message[i].id));
                inputBinding = $obj.data("shiny-input-binding"); // Dispatch the message to the appropriate input object
                if (!($obj.length > 0)) {
                  _context9.next = 20;
                  break;
                }
                if (!$obj.attr("aria-live")) $obj.attr("aria-live", "polite");
                el = $obj[0];
                evt = $.Event("shiny:updateinput");
                evt.message = message[i].message;
                evt.binding = inputBinding;
                $(el).trigger(evt);
                if (evt.isDefaultPrevented()) {
                  _context9.next = 20;
                  break;
                }
                _context9.prev = 12;
                _context9.next = 15;
                return inputBinding.receiveMessage(el, evt.message);
              case 15:
                _context9.next = 20;
                break;
              case 17:
                _context9.prev = 17;
                _context9.t0 = _context9["catch"](12);
                console.error("[shiny] Error in inputBinding.receiveMessage()", {
                  error: _context9.t0,
                  binding: inputBinding,
                  message: evt.message
                });
              case 20:
                i++;
                _context9.next = 1;
                break;
              case 23:
              case "end":
                return _context9.stop();
            }
          }, _callee9, null, [[12, 17]]);
        }));
        return function (_x11) {
          return _ref4.apply(this, arguments);
        };
      }());
      addMessageHandler("javascript", function (message) {
        /*jshint evil: true */
        indirectEval(message);
      });
      addMessageHandler("console", function (message) {
        for (var i = 0; i < message.length; i++) {
          if (console.log) console.log(message[i]);
        }
      });
      addMessageHandler("progress", /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(message) {
          var handler;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                if (!(message.type && message.message)) {
                  _context10.next = 5;
                  break;
                }
                _context10.next = 3;
                return _this3.progressHandlers[message.type];
              case 3:
                handler = _context10.sent;
                if (handler) handler.call(_this3, message.message);
              case 5:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        }));
        return function (_x12) {
          return _ref5.apply(this, arguments);
        };
      }());
      addMessageHandler("notification", /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(message) {
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                if (!(message.type === "show")) {
                  _context11.next = 5;
                  break;
                }
                _context11.next = 3;
                return showNotification(message.message);
              case 3:
                _context11.next = 10;
                break;
              case 5:
                if (!(message.type === "remove")) {
                  _context11.next = 9;
                  break;
                }
                removeNotification(message.message);
                _context11.next = 10;
                break;
              case 9:
                throw "Unkown notification type: " + message.type;
              case 10:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        }));
        return function (_x13) {
          return _ref6.apply(this, arguments);
        };
      }());
      addMessageHandler("modal", /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(message) {
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                if (!(message.type === "show")) {
                  _context12.next = 5;
                  break;
                }
                _context12.next = 3;
                return showModal(message.message);
              case 3:
                _context12.next = 10;
                break;
              case 5:
                if (!(message.type === "remove")) {
                  _context12.next = 9;
                  break;
                }
                removeModal();
                _context12.next = 10;
                break;
              case 9:
                throw "Unkown modal type: " + message.type;
              case 10:
              case "end":
                return _context12.stop();
            }
          }, _callee12);
        }));
        return function (_x14) {
          return _ref7.apply(this, arguments);
        };
      }());
      addMessageHandler("response", function (message) {
        var requestId = message.tag;
        var request = _this3.$activeRequests[requestId];
        if (request) {
          delete _this3.$activeRequests[requestId];
          if ("value" in message) request.onSuccess(message.value);else request.onError(message.error);
        }
      });
      addMessageHandler("allowReconnect", function (message) {
        switch (message) {
          case true:
          case false:
          case "force":
            _this3.$allowReconnect = message;
            break;
          default:
            throw "Invalid value for allowReconnect: " + message;
        }
      });
      addMessageHandler("custom", /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(message) {
          var shinyOnCustomMessage;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
              case 0:
                // For old-style custom messages - should deprecate and migrate to new
                // method
                shinyOnCustomMessage = getShinyOnCustomMessage();
                if (!shinyOnCustomMessage) {
                  _context13.next = 4;
                  break;
                }
                _context13.next = 4;
                return shinyOnCustomMessage(message);
              case 4:
                _context13.next = 6;
                return _this3._sendMessagesToHandlers(message, customMessageHandlers, customMessageHandlerOrder);
              case 6:
              case "end":
                return _context13.stop();
            }
          }, _callee13);
        }));
        return function (_x15) {
          return _ref8.apply(this, arguments);
        };
      }());
      addMessageHandler("config", function (message) {
        _this3.config = {
          workerId: message.workerId,
          sessionId: message.sessionId
        };
        if (message.user) setShinyUser(message.user);
        $(document).trigger("shiny:sessioninitialized");
      });
      addMessageHandler("busy", function (message) {
        if (message === "busy") {
          $(document.documentElement).addClass("shiny-busy");
          $(document).trigger("shiny:busy");
        } else if (message === "idle") {
          $(document.documentElement).removeClass("shiny-busy");
          $(document).trigger("shiny:idle");
        }
      });
      addMessageHandler("recalculating", function (message) {
        if (hasOwnProperty(message, "name") && hasOwnProperty(message, "status")) {
          var binding = _this3.$bindings[message.name];
          if (binding) {
            $(binding.el).trigger("shiny:" + message.status);
          } else {
            $().trigger("shiny:" + message.status);
          }
        }
      });
      addMessageHandler("reload", function (message) {
        window.location.reload();
        return;
        message;
      });
      addMessageHandler("shiny-insert-ui", /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(message) {
          var targets, _iterator, _step, target;
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
              case 0:
                targets = $(message.selector);
                if (!(targets.length === 0)) {
                  _context14.next = 7;
                  break;
                }
                // render the HTML and deps to a null target, so
                // the side-effect of rendering the deps, singletons,
                // and <head> still occur
                console.warn('The selector you chose ("' + message.selector + '") could not be found in the DOM.');
                _context14.next = 5;
                return renderHtmlAsync(message.content.html, $([]), message.content.deps);
              case 5:
                _context14.next = 26;
                break;
              case 7:
                _iterator = _createForOfIteratorHelper(targets);
                _context14.prev = 8;
                _iterator.s();
              case 10:
                if ((_step = _iterator.n()).done) {
                  _context14.next = 18;
                  break;
                }
                target = _step.value;
                _context14.next = 14;
                return renderContentAsync(target, message.content, message.where);
              case 14:
                if (!(message.multiple === false)) {
                  _context14.next = 16;
                  break;
                }
                return _context14.abrupt("break", 18);
              case 16:
                _context14.next = 10;
                break;
              case 18:
                _context14.next = 23;
                break;
              case 20:
                _context14.prev = 20;
                _context14.t0 = _context14["catch"](8);
                _iterator.e(_context14.t0);
              case 23:
                _context14.prev = 23;
                _iterator.f();
                return _context14.finish(23);
              case 26:
              case "end":
                return _context14.stop();
            }
          }, _callee14, null, [[8, 20, 23, 26]]);
        }));
        return function (_x16) {
          return _ref9.apply(this, arguments);
        };
      }());
      addMessageHandler("shiny-remove-ui", function (message) {
        var els = $(message.selector);
        els.each(function (i, el) {
          shinyUnbindAll(el, true);
          $(el).remove();
          // If `multiple` is false, returning false terminates the function
          // and no other elements are removed; if `multiple` is true,
          // returning nothing continues removing all remaining elements.
          return message.multiple === false ? false : undefined;
        });
      });
      addMessageHandler("frozen", function (message) {
        for (var i = 0; i < message.ids.length; i++) {
          shinyForgetLastInputValue(message.ids[i]);
        }
      });
      function getTabset(id) {
        var $tabset = $("#" + $escape(id));
        if ($tabset.length === 0) throw "There is no tabsetPanel (or navbarPage or navlistPanel) " + "with id equal to '" + id + "'";
        return $tabset;
      }
      function getTabContent($tabset) {
        var tabsetId = $tabset.attr("data-tabsetid");
        var $tabContent = $("div.tab-content[data-tabsetid='" + $escape(tabsetId) + "']");
        return $tabContent;
      }
      function getTargetTabs($tabset, $tabContent, target) {
        var dataValue = "[data-value='" + $escape(target) + "']";
        var $aTag = $tabset.find("a" + dataValue);
        var $liTag = $aTag.parent();
        if ($liTag.length === 0) {
          throw "There is no tabPanel (or navbarMenu) with value" + " (or menuName) equal to '" + target + "'";
        }
        var $liTags = [];
        var $divTags = [];
        if ($aTag.attr("data-toggle") === "dropdown") {
          // dropdown
          var $dropdownTabset = $aTag.find("+ ul.dropdown-menu");
          var dropdownId = $dropdownTabset.attr("data-tabsetid");
          var $dropdownLiTags = $dropdownTabset.find("a[data-toggle='tab']").parent("li");
          $dropdownLiTags.each(function (i, el) {
            $liTags.push($(el));
          });
          var selector = "div.tab-pane[id^='tab-" + $escape(dropdownId) + "']";
          var $dropdownDivs = $tabContent.find(selector);
          $dropdownDivs.each(function (i, el) {
            $divTags.push($(el));
          });
        } else {
          // regular tab
          $divTags.push($tabContent.find("div" + dataValue));
        }
        return {
          $liTag: $liTag,
          $liTags: $liTags,
          $divTags: $divTags
        };
      }
      addMessageHandler("shiny-insert-tab", /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(message) {
          var $parentTabset, $tabset, $tabContent, tabsetId, $divTag, $liTag, $aTag, $targetLiTag, targetInfo, dropdown, index, tabId, _iterator2, _step2, el, getTabIndex, getDropdown;
          return _regeneratorRuntime().wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
              case 0:
                getDropdown = function _getDropdown() {
                  if (message.menuName !== null) {
                    // menuName is only provided if the user wants to prepend
                    // or append an item inside a navbarMenu (dropdown)
                    var $dropdownATag = $("a.dropdown-toggle[data-value='" + $escape(message.menuName) + "']");
                    if ($dropdownATag.length === 0) {
                      throw "There is no navbarMenu with menuName equal to '" + message.menuName + "'";
                    }
                    var $dropdownTabset = $dropdownATag.find("+ ul.dropdown-menu");
                    var dropdownId = $dropdownTabset.attr("data-tabsetid");
                    return {
                      $tabset: $dropdownTabset,
                      id: dropdownId
                    };
                  } else if (message.target !== null && $targetLiTag !== null) {
                    // if our item is to be placed next to a tab that is inside
                    // a navbarMenu, our item will also be inside
                    var $uncleTabset = $targetLiTag.parent("ul");
                    if ($uncleTabset.hasClass("dropdown-menu")) {
                      var uncleId = $uncleTabset.attr("data-tabsetid");
                      return {
                        $tabset: $uncleTabset,
                        id: uncleId
                      };
                    }
                  }
                  return null;
                };
                getTabIndex = function _getTabIndex($tabset, tabsetId) {
                  // The 0 is to ensure this works for empty tabsetPanels as well
                  var existingTabIds = [0];
                  // loop through all existing tabs, find the one with highest id
                  // (since this is based on a numeric counter), and increment

                  $tabset.find("> li").each(function () {
                    var $tab = $(this).find("> a[data-toggle='tab']");
                    if ($tab.length > 0) {
                      // remove leading url if it exists. (copy of bootstrap url stripper)
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      var href = $tab.attr("href").replace(/.*(?=#[^\s]+$)/, "");
                      // remove tab id to get the index
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      var _index = href.replace("#tab-" + tabsetId + "-", "");
                      existingTabIds.push(Number(_index));
                    }
                  });
                  return Math.max.apply(null, existingTabIds) + 1;
                };
                $parentTabset = getTabset(message.inputId);
                $tabset = $parentTabset;
                $tabContent = getTabContent($tabset);
                tabsetId = $parentTabset.attr("data-tabsetid");
                $divTag = $(message.divTag.html);
                $liTag = $(message.liTag.html);
                $aTag = $liTag.find("> a"); // Unless the item is being prepended/appended, the target tab
                // must be provided
                $targetLiTag = null;
                if (message.target !== null) {
                  targetInfo = getTargetTabs($tabset, $tabContent, message.target);
                  $targetLiTag = targetInfo.$liTag;
                }

                // If the item is to be placed inside a navbarMenu (dropdown),
                // change the value of $tabset from the parent's ul tag to the
                // dropdown's ul tag
                dropdown = getDropdown();
                if (!(dropdown !== null)) {
                  _context15.next = 18;
                  break;
                }
                if (!($aTag.attr("data-toggle") === "dropdown")) {
                  _context15.next = 15;
                  break;
                }
                throw "Cannot insert a navbarMenu inside another one";
              case 15:
                $tabset = dropdown.$tabset;
                tabsetId = dropdown.id;
                // In the BS4+ case, the server will be generating "top-level" nav markup
                // (i.e., `li.nav-item a.nav-link`), but when inserting inside a dropdown we
                // need `li a.dropdown-item` for correct styling
                // https://getbootstrap.com/docs/5.0/components/navs-tabs/#tabs-with-dropdowns
                $liTag.removeClass("nav-item").find(".nav-link").removeClass("nav-link").addClass("dropdown-item");
              case 18:
                // For regular tab items, fix the href (of the li > a tag)
                // and the id (of the div tag). This does not apply to plain
                // text items (which function as dividers and headers inside
                // navbarMenus) and whole navbarMenus (since those get
                // constructed from scratch on the R side and therefore
                // there are no ids that need matching)
                if ($aTag.attr("data-toggle") === "tab") {
                  index = getTabIndex($tabset, tabsetId);
                  tabId = "tab-" + tabsetId + "-" + index;
                  $liTag.find("> a").attr("href", "#" + tabId);
                  $divTag.attr("id", tabId);
                }

                // actually insert the item into the right place
                if (message.position === "before") {
                  if ($targetLiTag) {
                    $targetLiTag.before($liTag);
                  } else {
                    $tabset.prepend($liTag);
                  }
                } else if (message.position === "after") {
                  if ($targetLiTag) {
                    $targetLiTag.after($liTag);
                  } else {
                    $tabset.append($liTag);
                  }
                }
                _context15.next = 22;
                return renderContentAsync($liTag[0], {
                  html: $liTag.html(),
                  deps: message.liTag.deps
                });
              case 22:
                _context15.next = 24;
                return renderContentAsync($tabContent[0], {
                  html: "",
                  deps: message.divTag.deps
                },
                // @ts-expect-error; TODO-barret; There is no usage of beforeend
                "beforeend");
              case 24:
                _iterator2 = _createForOfIteratorHelper($divTag.get());
                _context15.prev = 25;
                _iterator2.s();
              case 27:
                if ((_step2 = _iterator2.n()).done) {
                  _context15.next = 34;
                  break;
                }
                el = _step2.value;
                // Must not use jQuery for appending el to the doc, we don't want any
                // scripts to run (since they will run when renderContent takes a crack).
                $tabContent[0].appendChild(el);
                // If `el` itself is a script tag, this approach won't work (the script
                // won't be run), since we're only sending innerHTML through renderContent
                // and not the whole tag. That's fine in this case because we control the
                // R code that generates this HTML, and we know that the element is not
                // a script tag.
                _context15.next = 32;
                return renderContentAsync(el, el.innerHTML || el.textContent);
              case 32:
                _context15.next = 27;
                break;
              case 34:
                _context15.next = 39;
                break;
              case 36:
                _context15.prev = 36;
                _context15.t0 = _context15["catch"](25);
                _iterator2.e(_context15.t0);
              case 39:
                _context15.prev = 39;
                _iterator2.f();
                return _context15.finish(39);
              case 42:
                if (message.select) {
                  $liTag.find("a").tab("show");
                }
                /* Barbara -- August 2017
                Note: until now, the number of tabs in a tabsetPanel (or navbarPage
                or navlistPanel) was always fixed. So, an easy way to give an id to
                a tab was simply incrementing a counter. (Just like it was easy to
                give a random 4-digit number to identify the tabsetPanel). Now that
                we're introducing dynamic tabs, we must retrieve these numbers and
                fix the dummy id given to the tab in the R side -- there, we always
                set the tab id (counter dummy) to "id" and the tabset id to "tsid")
                */
              case 43:
              case "end":
                return _context15.stop();
            }
          }, _callee15, null, [[25, 36, 39, 42]]);
        }));
        return function (_x17) {
          return _ref10.apply(this, arguments);
        };
      }());

      // If the given tabset has no active tabs, select the first one
      function ensureTabsetHasVisibleTab($tabset) {
        var inputBinding = $tabset.data("shiny-input-binding");

        // Use the getValue() method to avoid duplicating the CSS selector
        // for querying the DOM for the currently active tab
        if (!inputBinding.getValue($tabset)) {
          // Note: destTabValue may be null. We still want to proceed
          // through the below logic and setValue so that the input
          // value for the tabset gets updated (i.e. input$tabsetId
          // should be null if there are no tabs).
          var destTabValue = getFirstTab($tabset);
          var evt = $.Event("shiny:updateinput");
          evt.binding = inputBinding;
          $tabset.trigger(evt);
          inputBinding.setValue($tabset[0], destTabValue);
        }
      }

      // Given a tabset ul jquery object, return the value of the first tab
      // (in document order) that's visible and able to be selected.
      function getFirstTab($ul) {
        return $ul.find("li:visible a[data-toggle='tab']").first().attr("data-value") || null;
      }
      function tabApplyFunction(target, func) {
        var liTags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        $.each(target, function (key, el) {
          if (key === "$liTag") {
            // $liTag is always just one jQuery element
            func(el);
          } else if (key === "$divTags") {
            // $divTags is always an array (even if length = 1)
            $.each(el, function (i, div) {
              func(div);
            });
          } else if (liTags && key === "$liTags") {
            // $liTags is always an array (even if length = 0)
            $.each(el, function (i, div) {
              func(div);
            });
          }
        });
      }
      addMessageHandler("shiny-remove-tab", function (message) {
        var $tabset = getTabset(message.inputId);
        var $tabContent = getTabContent($tabset);
        var target = getTargetTabs($tabset, $tabContent, message.target);
        tabApplyFunction(target, removeEl);
        ensureTabsetHasVisibleTab($tabset);
        function removeEl($el) {
          shinyUnbindAll($el, true);
          $el.remove();
        }
      });
      addMessageHandler("shiny-change-tab-visibility", function (message) {
        var $tabset = getTabset(message.inputId);
        var $tabContent = getTabContent($tabset);
        var target = getTargetTabs($tabset, $tabContent, message.target);
        tabApplyFunction(target, changeVisibility, true);
        ensureTabsetHasVisibleTab($tabset);
        function changeVisibility($el) {
          if (message.type === "show") $el.css("display", "");else if (message.type === "hide") {
            $el.hide();
            $el.removeClass("active");
          }
        }
      });
      addMessageHandler("updateQueryString", function (message) {
        // leave the bookmarking code intact
        if (message.mode === "replace") {
          // @ts-expect-error; No title value being supplied
          window.history.replaceState(null, null, message.queryString);
          return;
        }
        var what = null;
        if (message.queryString.charAt(0) === "#") what = "hash";else if (message.queryString.charAt(0) === "?") what = "query";else throw "The 'query' string must start with either '?' " + "(to update the query string) or with '#' (to " + "update the hash).";
        var path = window.location.pathname;
        var oldQS = window.location.search;
        var oldHash = window.location.hash;

        /* Barbara -- December 2016
        Note: we could check if the new QS and/or hash are different
        from the old one(s) and, if not, we could choose not to push
        a new state (whether or not we would replace it is moot/
        inconsequential). However, I think that it is better to
        interpret each call to `updateQueryString` as representing
        new state (even if the message.queryString is the same), so
        that check isn't even performed as of right now.
        */

        var relURL = path;
        if (what === "query") relURL += message.queryString;else relURL += oldQS + message.queryString; // leave old QS if it exists
        // @ts-expect-error; No title value being supplied
        window.history.pushState(null, null, relURL);

        // for the case when message.queryString has both a query string
        // and a hash (`what = "hash"` allows us to trigger the
        // hashchange event)
        if (message.queryString.indexOf("#") !== -1) what = "hash";

        // for the case when there was a hash before, but there isn't
        // any hash now (e.g. for when only the query string is updated)
        if (window.location.hash !== oldHash) what = "hash";

        // This event needs to be triggered manually because pushState() never
        // causes a hashchange event to be fired,
        if (what === "hash") $(document).trigger("hashchange");
      });
      addMessageHandler("resetBrush", function (message) {
        resetBrush(message.brushId);
      });
    }
  }, {
    key: "getTestSnapshotBaseUrl",
    value:
    //// 2021/03: TypeScript Conversion
    // Added in `./shiny/init.ts` as there are no instances of progressHandlers being used right away on GitHub
    // Shiny.progressHandlers = this.progressHandlers;

    // Returns a URL which can be queried to get values from inside the server
    // function. This is enabled with `options(shiny.testmode=TRUE)`.
    function getTestSnapshotBaseUrl() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref11$fullUrl = _ref11.fullUrl,
        fullUrl = _ref11$fullUrl === void 0 ? true : _ref11$fullUrl;
      var loc = window.location;
      var url = "";
      if (fullUrl) {
        // Strip off everything after last slash in path, like dirname() in R
        url = loc.origin + loc.pathname.replace(/\/[^/]*$/, "");
      }
      url += "/session/" +
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      encodeURIComponent(this.config.sessionId) + "/dataobj/shinytest?w=" +
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      encodeURIComponent(this.config.workerId) + "&nonce=" + randomId();
      return url;
    }
  }]);
  return ShinyApp;
}();
export { ShinyApp, addCustomMessageHandler };