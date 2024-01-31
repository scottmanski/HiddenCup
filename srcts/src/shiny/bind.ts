function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
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
import $ from "jquery";
import { OutputBindingAdapter } from "../bindings/outputAdapter";
import { shinyAppBindOutput, shinyAppUnbindOutput } from "./initedMethods";
import { sendImageSizeFns } from "./sendImageSize";
var boundInputs = {};
// todo make sure allowDeferred can NOT be supplied and still work
function valueChangeCallback(inputs, binding, el, allowDeferred) {
  var id = binding.getId(el);
  if (id) {
    var value = binding.getValue(el);
    var type = binding.getType(el);
    if (type) id = id + ":" + type;
    var opts = {
      priority: allowDeferred ? "deferred" : "immediate",
      binding: binding,
      el: el
    };
    inputs.setInput(id, value, opts);
  }
}
function bindInputs(shinyCtx) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  var inputs = shinyCtx.inputs,
    inputsRate = shinyCtx.inputsRate,
    inputBindings = shinyCtx.inputBindings;
  var bindings = inputBindings.getBindings();
  var inputItems = {};
  var _loop = function _loop() {
    var binding = bindings[i].binding;
    var matches = binding.find(scope) || [];
    var _loop2 = function _loop2() {
      var el = matches[j];
      if (el.hasAttribute("data-shiny-no-bind-input")) return "continue";
      var id = binding.getId(el);

      // Check if ID is falsy, or if already bound
      if (!id || boundInputs[id]) return "continue";
      var type = binding.getType(el);
      var effectiveId = type ? id + ":" + type : id;
      inputItems[effectiveId] = {
        value: binding.getValue(el),
        opts: {
          immediate: true,
          binding: binding,
          el: el
        }
      };

      /*jshint loopfunc:true*/
      var thisCallback = function () {
        var thisBinding = binding;
        var thisEl = el;
        return function (allowDeferred) {
          valueChangeCallback(inputs, thisBinding, thisEl, allowDeferred);
        };
      }();
      binding.subscribe(el, thisCallback);
      $(el).data("shiny-input-binding", binding);
      $(el).addClass("shiny-bound-input");
      var ratePolicy = binding.getRatePolicy(el);
      if (ratePolicy !== null) {
        inputsRate.setRatePolicy(effectiveId, ratePolicy.policy, ratePolicy.delay);
      }
      boundInputs[id] = {
        binding: binding,
        node: el
      };
      $(el).trigger({
        type: "shiny:bound",
        // @ts-expect-error; Can not remove info on a established, malformed Event object
        binding: binding,
        bindingType: "input"
      });
    };
    for (var j = 0; j < matches.length; j++) {
      var _ret = _loop2();
      if (_ret === "continue") continue;
    }
  };
  for (var i = 0; i < bindings.length; i++) {
    _loop();
  }
  return inputItems;
}
function bindOutputs(_x) {
  return _bindOutputs.apply(this, arguments);
}
function _bindOutputs() {
  _bindOutputs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var sendOutputHiddenState,
      maybeAddThemeObserver,
      outputBindings,
      scope,
      $scope,
      bindings,
      i,
      binding,
      matches,
      j,
      _el2,
      id,
      $el,
      bindingAdapter,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sendOutputHiddenState = _ref.sendOutputHiddenState, maybeAddThemeObserver = _ref.maybeAddThemeObserver, outputBindings = _ref.outputBindings;
          scope = _args.length > 1 && _args[1] !== undefined ? _args[1] : document.documentElement;
          $scope = $(scope);
          bindings = outputBindings.getBindings();
          i = 0;
        case 5:
          if (!(i < bindings.length)) {
            _context.next = 33;
            break;
          }
          binding = bindings[i].binding;
          matches = binding.find($scope) || [];
          j = 0;
        case 9:
          if (!(j < matches.length)) {
            _context.next = 30;
            break;
          }
          _el2 = matches[j];
          id = binding.getId(_el2); // Check if ID is falsy
          if (id) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("continue", 27);
        case 14:
          if ($.contains(document.documentElement, _el2)) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("continue", 27);
        case 16:
          $el = $(_el2);
          if (!$el.hasClass("shiny-bound-output")) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("continue", 27);
        case 19:
          // If this element reports its CSS styles to getCurrentOutputInfo()
          // then it should have a MutationObserver() to resend CSS if its
          // style/class attributes change. This observer should already exist
          // for _static_ UI, but not yet for _dynamic_ UI
          maybeAddThemeObserver(_el2);
          bindingAdapter = new OutputBindingAdapter(_el2, binding);
          _context.next = 23;
          return shinyAppBindOutput(id, bindingAdapter);
        case 23:
          $el.data("shiny-output-binding", bindingAdapter);
          $el.addClass("shiny-bound-output");
          if (!$el.attr("aria-live")) $el.attr("aria-live", "polite");
          $el.trigger({
            type: "shiny:bound",
            // @ts-expect-error; Can not remove info on a established, malformed Event object
            binding: binding,
            bindingType: "output"
          });
        case 27:
          j++;
          _context.next = 9;
          break;
        case 30:
          i++;
          _context.next = 5;
          break;
        case 33:
          // Send later in case DOM layout isn't final yet.
          setTimeout(sendImageSizeFns.regular, 0);
          setTimeout(sendOutputHiddenState, 0);
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _bindOutputs.apply(this, arguments);
}
function unbindInputs() {
  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  var includeSelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var inputs = $(scope).find(".shiny-bound-input").toArray();
  if (includeSelf && $(scope).hasClass("shiny-bound-input")) {
    inputs.push(scope);
  }
  for (var i = 0; i < inputs.length; i++) {
    var _el = inputs[i];
    var binding = $(_el).data("shiny-input-binding");
    if (!binding) continue;
    var id = binding.getId(_el);
    $(_el).removeClass("shiny-bound-input");
    delete boundInputs[id];
    binding.unsubscribe(_el);
    $(_el).trigger({
      type: "shiny:unbound",
      // @ts-expect-error; Can not remove info on a established, malformed Event object
      binding: binding,
      bindingType: "input"
    });
  }
}
function unbindOutputs(_ref2) {
  var sendOutputHiddenState = _ref2.sendOutputHiddenState;
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var outputs = $(scope).find(".shiny-bound-output").toArray();
  if (includeSelf && $(scope).hasClass("shiny-bound-output")) {
    outputs.push(scope);
  }
  for (var i = 0; i < outputs.length; i++) {
    var $el = $(outputs[i]);
    var bindingAdapter = $el.data("shiny-output-binding");
    if (!bindingAdapter) continue;
    var id = bindingAdapter.binding.getId(outputs[i]);
    shinyAppUnbindOutput(id, bindingAdapter);
    $el.removeClass("shiny-bound-output");
    $el.removeData("shiny-output-binding");
    $el.trigger({
      type: "shiny:unbound",
      // @ts-expect-error; Can not remove info on a established, malformed Event object
      binding: bindingAdapter.binding,
      bindingType: "output"
    });
  }

  // Send later in case DOM layout isn't final yet.
  setTimeout(sendImageSizeFns.regular, 0);
  setTimeout(sendOutputHiddenState, 0);
}

// (Named used before TS conversion)
// eslint-disable-next-line @typescript-eslint/naming-convention
function _bindAll(_x2, _x3) {
  return _bindAll2.apply(this, arguments);
}
function _bindAll2() {
  _bindAll2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(shinyCtx, scope) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return bindOutputs(shinyCtx, scope);
        case 2:
          return _context2.abrupt("return", bindInputs(shinyCtx, scope));
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _bindAll2.apply(this, arguments);
}
function unbindAll(shinyCtx, scope) {
  var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  unbindInputs(scope, includeSelf);
  unbindOutputs(shinyCtx, scope, includeSelf);
}
function bindAll(_x4, _x5) {
  return _bindAll3.apply(this, arguments);
}
function _bindAll3() {
  _bindAll3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(shinyCtx, scope) {
    var currentInputItems, inputs;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _bindAll(shinyCtx, scope);
        case 2:
          currentInputItems = _context3.sent;
          inputs = shinyCtx.inputs;
          $.each(currentInputItems, function (name, item) {
            inputs.setInput(name, item.value, item.opts);
          });

          // Not sure if the iframe stuff is an intrinsic part of bindAll, but bindAll
          // is a convenient place to hang it. bindAll will be called anytime new HTML
          // appears that might contain inputs/outputs; it's reasonable to assume that
          // any such HTML may contain iframes as well.
          shinyCtx.initDeferredIframes();
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _bindAll3.apply(this, arguments);
}
export { unbindAll, bindAll, _bindAll };