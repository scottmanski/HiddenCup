function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/es.parse-float.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.string.search.js";
import "core-js/modules/es.string.split.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.symbol.async-iterator.js";
import "core-js/modules/es.symbol.to-string-tag.js";
import "core-js/modules/es.json.to-string-tag.js";
import "core-js/modules/es.math.to-string-tag.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.array.reverse.js";
import "core-js/modules/es.array.slice.js";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import $ from "jquery";
import { InputBatchSender, InputDeferDecorator, InputEventDecorator, InputNoResendDecorator, InputRateDecorator, InputValidateDecorator } from "../inputPolicies";
import { addDefaultInputOpts } from "../inputPolicies/inputValidateDecorator";
import { debounce, Debouncer } from "../time";
import { getComputedLinkColor, getStyle, hasDefinedProperty, mapValues, pixelRatio } from "../utils";
import { bindAll, unbindAll, _bindAll } from "./bind";
import { setShinyObj } from "./initedMethods";
import { registerDependency } from "./render";
import { sendImageSizeFns } from "./sendImageSize";
import { ShinyApp } from "./shinyapp";
import { registerNames as singletonsRegisterNames } from "./singletons";
// "init_shiny.js"
function initShiny(_x) {
  return _initShiny.apply(this, arguments);
} // function initShiny()
// Give any deferred iframes a chance to load.
function _initShiny() {
  _initShiny = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(windowShiny) {
    var shinyapp, inputBatchSender, inputsNoResend, inputsEvent, inputsRate, inputsDefer, target, inputs, inputBindings, outputBindings, shinyBindCtx, initializeInputs, getIdFromEl, initialValues, getComputedBgColor, getComputedFont, maybeAddThemeObserver, doSendTheme, doSendImageSize, isHidden, lastKnownVisibleOutputs, doSendOutputHiddenState, sendOutputHiddenStateDebouncer, sendOutputHiddenState, filterEventsByNamespace, bs3classes, singletonText, dependencyText;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          filterEventsByNamespace = function _filterEventsByNamesp(namespace, handler) {
            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }
            var namespaceArr = namespace.split(".");
            return function (e) {
              var _e$namespace$split, _e$namespace;
              var eventNamespace = (_e$namespace$split = (_e$namespace = e.namespace) === null || _e$namespace === void 0 ? void 0 : _e$namespace.split(".")) !== null && _e$namespace$split !== void 0 ? _e$namespace$split : [];

              // If any of the namespace strings aren't present in this event, quit.
              for (var i = 0; i < namespaceArr.length; i++) {
                if (eventNamespace.indexOf(namespaceArr[i]) === -1) return;
              }
              handler.apply(this, [namespaceArr, handler].concat(args));
            };
          };
          sendOutputHiddenState = function _sendOutputHiddenStat() {
            sendOutputHiddenStateDebouncer.normalCall();
          };
          doSendOutputHiddenState = function _doSendOutputHiddenSt() {
            var visibleOutputs = {};
            $(".shiny-bound-output").each(function () {
              var id = getIdFromEl(this);
              delete lastKnownVisibleOutputs[id];
              // Assume that the object is hidden when width and height are 0
              var hidden = isHidden(this),
                evt = {
                  type: "shiny:visualchange",
                  visible: !hidden
                };
              if (hidden) {
                inputs.setInput(".clientdata_output_" + id + "_hidden", true);
              } else {
                visibleOutputs[id] = true;
                inputs.setInput(".clientdata_output_" + id + "_hidden", false);
              }
              var $this = $(this);

              // @ts-expect-error; Can not remove info on a established, malformed Event object
              evt.binding = $this.data("shiny-output-binding");
              // @ts-expect-error; Can not remove info on a established, malformed Event object
              $this.trigger(evt);
            });
            // Anything left in lastKnownVisibleOutputs is orphaned
            for (var name in lastKnownVisibleOutputs) {
              if (hasDefinedProperty(lastKnownVisibleOutputs, name)) inputs.setInput(".clientdata_output_" + name + "_hidden", true);
            }
            // Update the visible outputs for next time
            lastKnownVisibleOutputs = visibleOutputs;
          };
          isHidden = function _isHidden(obj) {
            // null means we've hit the top of the tree. If width or height is
            // non-zero, then we know that no ancestor has display:none.
            if (obj === null || obj.offsetWidth !== 0 || obj.offsetHeight !== 0) {
              return false;
            } else if (getStyle(obj, "display") === "none") {
              return true;
            } else {
              return isHidden(obj.parentNode);
            }
          };
          doSendImageSize = function _doSendImageSize() {
            $(".shiny-image-output, .shiny-plot-output, .shiny-report-size").each(function () {
              var id = getIdFromEl(this),
                rect = this.getBoundingClientRect();
              if (rect.width !== 0 || rect.height !== 0) {
                inputs.setInput(".clientdata_output_" + id + "_width", rect.width);
                inputs.setInput(".clientdata_output_" + id + "_height", rect.height);
              }
            });
            $(".shiny-image-output, .shiny-plot-output, .shiny-report-theme").each(function () {
              doSendTheme(this);
            });
            $(".shiny-bound-output").each(function () {
              var $this = $(this),
                binding = $this.data("shiny-output-binding");
              $this.trigger({
                type: "shiny:visualchange",
                // @ts-expect-error; Can not remove info on a established, malformed Event object
                visible: !isHidden(this),
                binding: binding
              });
              binding.onResize();
            });
          };
          doSendTheme = function _doSendTheme(el) {
            // Sending theme info on error isn't necessary (it'd add an unnecessary additional round-trip)
            if (el.classList.contains("shiny-output-error")) {
              return;
            }
            var id = getIdFromEl(el);
            inputs.setInput(".clientdata_output_" + id + "_bg", getComputedBgColor(el));
            inputs.setInput(".clientdata_output_" + id + "_fg", getStyle(el, "color"));
            inputs.setInput(".clientdata_output_" + id + "_accent", getComputedLinkColor(el));
            inputs.setInput(".clientdata_output_" + id + "_font", getComputedFont(el));
          };
          maybeAddThemeObserver = function _maybeAddThemeObserve(el) {
            if (!window.MutationObserver) {
              return; // IE10 and lower
            }

            var cl = el.classList;
            var reportTheme = cl.contains("shiny-image-output") || cl.contains("shiny-plot-output") || cl.contains("shiny-report-theme");
            if (!reportTheme) {
              return;
            }
            var $el = $(el);
            if ($el.data("shiny-theme-observer")) {
              return; // i.e., observer is already observing
            }

            var observerCallback = new Debouncer(null, function () {
              return doSendTheme(el);
            }, 100);
            var observer = new MutationObserver(function () {
              return observerCallback.normalCall();
            });
            var config = {
              attributes: true,
              attributeFilter: ["style", "class"]
            };
            observer.observe(el, config);
            $el.data("shiny-theme-observer", observer);
          };
          getComputedFont = function _getComputedFont(el) {
            var fontFamily = getStyle(el, "font-family");
            var fontSize = getStyle(el, "font-size");
            return {
              families: fontFamily === null || fontFamily === void 0 ? void 0 : fontFamily.replace(/"/g, "").split(", "),
              size: fontSize
            };
          };
          getComputedBgColor = function _getComputedBgColor(el) {
            if (!el) {
              // Top of document, can't recurse further
              return null;
            }
            var bgColor = getStyle(el, "background-color");
            if (!bgColor) return bgColor;
            var m = bgColor.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
            if (bgColor === "transparent" || m && parseFloat(m[4]) === 0) {
              // No background color on this element. See if it has a background image.
              var bgImage = getStyle(el, "background-image");
              if (bgImage && bgImage !== "none") {
                // Failed to detect background color, since it has a background image
                return null;
              } else {
                // Recurse
                return getComputedBgColor(el.parentElement);
              }
            }
            return bgColor;
          };
          getIdFromEl = function _getIdFromEl(el) {
            var $el = $(el);
            var bindingAdapter = $el.data("shiny-output-binding");
            if (!bindingAdapter) return null;else return bindingAdapter.getId();
          };
          initializeInputs = function _initializeInputs() {
            var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
            var bindings = inputBindings.getBindings();

            // Iterate over all bindings
            for (var i = 0; i < bindings.length; i++) {
              var binding = bindings[i].binding;
              var inputObjects = binding.find(scope);
              if (inputObjects) {
                // Iterate over all input objects for this binding
                for (var j = 0; j < inputObjects.length; j++) {
                  var $inputObjectJ = $(inputObjects[j]);
                  if (!$inputObjectJ.data("_shiny_initialized")) {
                    $inputObjectJ.data("_shiny_initialized", true);
                    binding.initialize(inputObjects[j]);
                  }
                }
              }
            }
          };
          shinyBindCtx = function _shinyBindCtx() {
            return {
              inputs: inputs,
              inputsRate: inputsRate,
              sendOutputHiddenState: sendOutputHiddenState,
              maybeAddThemeObserver: maybeAddThemeObserver,
              inputBindings: inputBindings,
              outputBindings: outputBindings,
              initDeferredIframes: initDeferredIframes
            };
          };
          setShinyObj(windowShiny);
          shinyapp = windowShiny.shinyapp = new ShinyApp();
          windowShiny.progressHandlers = shinyapp.progressHandlers;
          inputBatchSender = new InputBatchSender(shinyapp);
          inputsNoResend = new InputNoResendDecorator(inputBatchSender);
          inputsEvent = new InputEventDecorator(inputsNoResend);
          inputsRate = new InputRateDecorator(inputsEvent);
          inputsDefer = new InputDeferDecorator(inputsEvent);
          if ($('input[type="submit"], button[type="submit"]').length > 0) {
            // If there is a submit button on the page, use defer decorator
            target = inputsDefer;
            $('input[type="submit"], button[type="submit"]').each(function () {
              $(this).click(function (event) {
                event.preventDefault();
                inputsDefer.submit();
              });
            });
          } else {
            // By default, use rate decorator
            target = inputsRate;
          }
          inputs = new InputValidateDecorator(target);
          windowShiny.setInputValue = windowShiny.onInputChange = function (name, value) {
            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var newOpts = addDefaultInputOpts(opts);
            inputs.setInput(name, value, newOpts);
          };

          // By default, Shiny deduplicates input value changes; that is, if
          // `setInputValue` is called with the same value as the input already
          // has, the call is ignored (unless opts.priority = "event"). Calling
          // `forgetLastInputValue` tells Shiny that the very next call to
          // `setInputValue` for this input id shouldn't be ignored, even if it
          // is a dupe of the existing value.
          windowShiny.forgetLastInputValue = function (name) {
            inputsNoResend.forget(name);
          };

          // MUST be called after `setShiny()`
          inputBindings = windowShiny.inputBindings;
          outputBindings = windowShiny.outputBindings;
          windowShiny.bindAll = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(scope) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return bindAll(shinyBindCtx(), scope);
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }();
          windowShiny.unbindAll = function (scope) {
            var includeSelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            unbindAll(shinyBindCtx(), scope, includeSelf);
          };

          // Calls .initialize() for all of the input objects in all input bindings,
          // in the given scope.

          windowShiny.initializeInputs = initializeInputs;
          // Initialize all input objects in the document, before binding
          initializeInputs(document.documentElement);

          // The input values returned by _bindAll() each have a structure like this:
          //   { value: 123, opts: { ... } }
          // We want to only keep the value. This is because when the initialValues is
          // passed to ShinyApp.connect(), the ShinyApp object stores the
          // initialValues object for the duration of the session, and the opts may
          // have a reference to the DOM element, which would prevent it from being
          // GC'd.
          _context2.t0 = mapValues;
          _context2.next = 33;
          return _bindAll(shinyBindCtx(), document.documentElement);
        case 33:
          _context2.t1 = _context2.sent;
          _context2.t2 = function (x) {
            return x.value;
          };
          initialValues = (0, _context2.t0)(_context2.t1, _context2.t2);
          // The server needs to know the size of each image and plot output element,
          // in case it is auto-sizing
          $(".shiny-image-output, .shiny-plot-output, .shiny-report-size").each(function () {
            var id = getIdFromEl(this),
              rect = this.getBoundingClientRect();
            if (rect.width !== 0 || rect.height !== 0) {
              initialValues[".clientdata_output_" + id + "_width"] = rect.width;
              initialValues[".clientdata_output_" + id + "_height"] = rect.height;
            }
          });
          $(".shiny-image-output, .shiny-plot-output, .shiny-report-theme").each(function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var el = this;
            var id = getIdFromEl(el);
            initialValues[".clientdata_output_" + id + "_bg"] = getComputedBgColor(el);
            initialValues[".clientdata_output_" + id + "_fg"] = getStyle(el, "color");
            initialValues[".clientdata_output_" + id + "_accent"] = getComputedLinkColor(el);
            initialValues[".clientdata_output_" + id + "_font"] = getComputedFont(el);
            maybeAddThemeObserver(el);
          });

          // Resend computed styles if *an output element's* class or style attribute changes.
          // This gives us some level of confidence that getCurrentOutputInfo() will be
          // properly invalidated if output container is mutated; but unfortunately,
          // we don't have a reasonable way to detect change in *inherited* styles
          // (other than session$setCurrentTheme())
          // https://github.com/rstudio/shiny/issues/3196
          // https://github.com/rstudio/shiny/issues/2998

          sendImageSizeFns.setImageSend(inputBatchSender, doSendImageSize);

          // Return true if the object or one of its ancestors in the DOM tree has
          // style='display:none'; otherwise return false.
          lastKnownVisibleOutputs = {}; // Set initial state of outputs to hidden, if needed
          $(".shiny-bound-output").each(function () {
            var id = getIdFromEl(this);
            if (isHidden(this)) {
              initialValues[".clientdata_output_" + id + "_hidden"] = true;
            } else {
              lastKnownVisibleOutputs[id] = true;
              initialValues[".clientdata_output_" + id + "_hidden"] = false;
            }
          });
          // Send update when hidden state changes
          // sendOutputHiddenState gets called each time DOM elements are shown or
          // hidden. This can be in the hundreds or thousands of times at startup.
          // We'll debounce it, so that we do the actual work once per tick.
          sendOutputHiddenStateDebouncer = new Debouncer(null, doSendOutputHiddenState, 0);
          // We need to make sure doSendOutputHiddenState actually gets called before
          // the inputBatchSender sends data to the server. The lastChanceCallback
          // here does that - if the debouncer has a pending call, flush it.
          inputBatchSender.lastChanceCallback.push(function () {
            if (sendOutputHiddenStateDebouncer.isPending()) sendOutputHiddenStateDebouncer.immediateCall();
          });

          // Given a namespace and a handler function, return a function that invokes
          // the handler only when e's namespace matches. For example, if the
          // namespace is "bs", it would match when e.namespace is "bs" or "bs.tab".
          // If the namespace is "bs.tab", it would match for "bs.tab", but not "bs".

          // The size of each image may change either because the browser window was
          // resized, or because a tab was shown/hidden (hidden elements report size
          // of 0x0). It's OK to over-report sizes because the input pipeline will
          // filter out values that haven't changed.
          $(window).resize(debounce(500, sendImageSizeFns.regular));
          // Need to register callbacks for each Bootstrap 3 class.
          bs3classes = ["modal", "dropdown", "tab", "tooltip", "popover", "collapse"];
          $.each(bs3classes, function (idx, classname) {
            $(document.body).on("shown.bs." + classname + ".sendImageSize", "*", filterEventsByNamespace("bs", sendImageSizeFns.regular));
            $(document.body).on("shown.bs." + classname + ".sendOutputHiddenState " + "hidden.bs." + classname + ".sendOutputHiddenState", "*", filterEventsByNamespace("bs", sendOutputHiddenState));
          });

          // This is needed for Bootstrap 2 compatibility and for non-Bootstrap
          // related shown/hidden events (like conditionalPanel)
          $(document.body).on("shown.sendImageSize", "*", sendImageSizeFns.regular);
          $(document.body).on("shown.sendOutputHiddenState hidden.sendOutputHiddenState", "*", sendOutputHiddenState);

          // Send initial pixel ratio, and update it if it changes
          initialValues[".clientdata_pixelratio"] = pixelRatio();
          $(window).resize(function () {
            inputs.setInput(".clientdata_pixelratio", pixelRatio());
          });

          // Send initial URL
          initialValues[".clientdata_url_protocol"] = window.location.protocol;
          initialValues[".clientdata_url_hostname"] = window.location.hostname;
          initialValues[".clientdata_url_port"] = window.location.port;
          initialValues[".clientdata_url_pathname"] = window.location.pathname;

          // Send initial URL search (query string) and update it if it changes
          initialValues[".clientdata_url_search"] = window.location.search;
          $(window).on("pushstate", function (e) {
            inputs.setInput(".clientdata_url_search", window.location.search);
            return;
            e;
          });
          $(window).on("popstate", function (e) {
            inputs.setInput(".clientdata_url_search", window.location.search);
            return;
            e;
          });

          // This is only the initial value of the hash. The hash can change, but
          // a reactive version of this isn't sent because watching for changes can
          // require polling on some browsers. The JQuery hashchange plugin can be
          // used if this capability is important.
          initialValues[".clientdata_url_hash_initial"] = window.location.hash;
          initialValues[".clientdata_url_hash"] = window.location.hash;
          $(window).on("hashchange", function (e) {
            inputs.setInput(".clientdata_url_hash", window.location.hash);
            return;
            e;
          });

          // The server needs to know what singletons were rendered as part of
          // the page loading
          singletonText = initialValues[".clientdata_singletons"] = $('script[type="application/shiny-singletons"]').text();
          singletonsRegisterNames(singletonText.split(/,/));
          dependencyText = $('script[type="application/html-dependencies"]').text();
          $.each(dependencyText.split(/;/), function (i, depStr) {
            var match = /\s*^(.+)\[(.+)\]\s*$/.exec(depStr);
            if (match) {
              registerDependency(match[1], match[2]);
            }
          });

          // We've collected all the initial values--start the server process!
          inputsNoResend.reset(initialValues);
          shinyapp.connect(initialValues);
          $(document).one("shiny:connected", function () {
            initDeferredIframes();
          });

          // window.console.log("Shiny version: ", windowShiny.version);
        case 67:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _initShiny.apply(this, arguments);
}
function initDeferredIframes() {
  // TODO-barret; This method uses `window.Shiny`. Could be replaced with `fullShinyObj_.shinyapp?.isConnected()`,
  // but that would not use `window.Shiny`. Is it a problem???
  if (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore; Do not want to define `window.Shiny` as a type to discourage usage of `window.Shiny`;
  // Can not expect error when combining with window available Shiny definition
  !window.Shiny ||
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore; Do not want to define `window.Shiny` as a type to discourage usage of `window.Shiny`;
  // Can not expect error when combining with window available Shiny definition
  !window.Shiny.shinyapp ||
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore; Do not want to define `window.Shiny` as a type to discourage usage of `window.Shiny`;
  // Can not expect error when combining with window available Shiny definition
  !window.Shiny.shinyapp.isConnected()) {
    // If somehow we accidentally call this before the server connection is
    // established, just ignore the call. At the time of this writing it
    // doesn't happen, but it's easy to imagine a later refactoring putting
    // us in this situation and it'd be hard to notice with either manual
    // testing or automated tests, because the only effect is on HTTP request
    // timing. (Update: Actually Aron saw this being called without even
    // window.Shiny being defined, but it was hard to repro.)
    return;
  }
  $(".shiny-frame-deferred").each(function (i, el) {
    var $el = $(el);
    $el.removeClass("shiny-frame-deferred");
    // @ts-expect-error; If it is undefined, set using the undefined value
    $el.attr("src", $el.attr("data-deferred-src"));
    $el.attr("data-deferred-src", null);
  });
}
export { initShiny };