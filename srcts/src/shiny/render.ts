function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.entries.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.promise.all-settled.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.async-iterator.js";
import "core-js/modules/es.symbol.to-string-tag.js";
import "core-js/modules/es.json.to-string-tag.js";
import "core-js/modules/es.math.to-string-tag.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.array.reverse.js";
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import $ from "jquery";
import { asArray, hasDefinedProperty } from "../utils";
import { isIE } from "../utils/browser";
import { shinyBindAll, shinyInitializeInputs, shinyUnbindAll } from "./initedMethods";
import { sendImageSizeFns } from "./sendImageSize";
import { renderHtml as singletonsRenderHtml } from "./singletons";
// There are synchronous and asynchronous versions of the exported functions
// renderContent(), renderHtml(), and renderDependencies(). This is because they
// the original versions of these functions were synchronous, but we added
// support for asynchronous rendering, to avoid the deprecated XMLHttpRequest
// function (https://github.com/rstudio/shiny/pull/3666).
//
// At the bottom, there is the appendScriptTags(), which calls $.append(), which
// in turn calls (synchronous) XMLHttpRequest(); and its counterpart
// appendScriptTagsAsync(), which uses a different (asynchronous) method. The
// sync and async versions of this function necessitate the sync and async
// versions of the other functions.
//
// The async versions of these functions are used internally and should be used
// for new external code when possible, but for backward compatibility for
// external code that calls these functions, we'll keep the synchronous versions
// around as well.
// =============================================================================
// renderContent
// =============================================================================
// Render HTML in a DOM element, add dependencies, and bind Shiny
// inputs/outputs. `content` can be null, a string, or an object with
// properties 'html' and 'deps'.
function renderContentAsync(_x, _x2) {
  return _renderContentAsync.apply(this, arguments);
}
function _renderContentAsync() {
  _renderContentAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(el, content) {
    var where,
      html,
      dependencies,
      scope,
      $parent,
      $grandparent,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          where = _args.length > 2 && _args[2] !== undefined ? _args[2] : "replace";
          if (where === "replace") {
            shinyUnbindAll(el);
          }
          html = "";
          dependencies = [];
          if (content === null) {
            html = "";
          } else if (typeof content === "string") {
            html = content;
          } else if (_typeof(content) === "object") {
            html = content.html;
            dependencies = content.deps || [];
          }
          _context.next = 7;
          return renderHtmlAsync(html, el, dependencies, where);
        case 7:
          scope = el;
          if (!(where === "replace")) {
            _context.next = 14;
            break;
          }
          shinyInitializeInputs(el);
          _context.next = 12;
          return shinyBindAll(el);
        case 12:
          _context.next = 19;
          break;
        case 14:
          $parent = $(el).parent();
          if ($parent.length > 0) {
            scope = $parent;
            if (where === "beforeBegin" || where === "afterEnd") {
              $grandparent = $parent.parent();
              if ($grandparent.length > 0) scope = $grandparent;
            }
          }
          shinyInitializeInputs(scope);
          _context.next = 19;
          return shinyBindAll(scope);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _renderContentAsync.apply(this, arguments);
}
function renderContent(el, content) {
  var where = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "replace";
  if (where === "replace") {
    shinyUnbindAll(el);
  }
  var html = "";
  var dependencies = [];
  if (content === null) {
    html = "";
  } else if (typeof content === "string") {
    html = content;
  } else if (_typeof(content) === "object") {
    html = content.html;
    dependencies = content.deps || [];
  }
  renderHtml(html, el, dependencies, where);
  var scope = el;
  if (where === "replace") {
    shinyInitializeInputs(el);
    return shinyBindAll(el);
  } else {
    var $parent = $(el).parent();
    if ($parent.length > 0) {
      scope = $parent;
      if (where === "beforeBegin" || where === "afterEnd") {
        var $grandparent = $parent.parent();
        if ($grandparent.length > 0) scope = $grandparent;
      }
    }
    shinyInitializeInputs(scope);
    return shinyBindAll(scope);
  }
}

// =============================================================================
// renderHtml
// =============================================================================
// Render HTML in a DOM element, inserting singletons into head as needed
function renderHtmlAsync(_x3, _x4, _x5) {
  return _renderHtmlAsync.apply(this, arguments);
} // Render HTML in a DOM element, inserting singletons into head as needed
function _renderHtmlAsync() {
  _renderHtmlAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(html, el, dependencies) {
    var where,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          where = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : "replace";
          _context2.next = 3;
          return renderDependenciesAsync(dependencies);
        case 3:
          return _context2.abrupt("return", singletonsRenderHtml(html, el, where));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _renderHtmlAsync.apply(this, arguments);
}
function renderHtml(html, el, dependencies) {
  var where = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "replace";
  renderDependencies(dependencies);
  return singletonsRenderHtml(html, el, where);
}

// =============================================================================
// renderDependencies
// =============================================================================
function renderDependenciesAsync(_x6) {
  return _renderDependenciesAsync.apply(this, arguments);
}
function _renderDependenciesAsync() {
  _renderDependenciesAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(dependencies) {
    var _iterator2, _step2, dep;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!dependencies) {
            _context3.next = 18;
            break;
          }
          _iterator2 = _createForOfIteratorHelper(dependencies);
          _context3.prev = 2;
          _iterator2.s();
        case 4:
          if ((_step2 = _iterator2.n()).done) {
            _context3.next = 10;
            break;
          }
          dep = _step2.value;
          _context3.next = 8;
          return renderDependencyAsync(dep);
        case 8:
          _context3.next = 4;
          break;
        case 10:
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](2);
          _iterator2.e(_context3.t0);
        case 15:
          _context3.prev = 15;
          _iterator2.f();
          return _context3.finish(15);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 12, 15, 18]]);
  }));
  return _renderDependenciesAsync.apply(this, arguments);
}
function renderDependencies(dependencies) {
  if (dependencies) {
    var _iterator = _createForOfIteratorHelper(dependencies),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dep = _step.value;
        renderDependency(dep);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

// =============================================================================
// HTML dependency types
// =============================================================================

// =============================================================================
// renderDependency helper functions
// =============================================================================
var htmlDependencies = {};
function registerDependency(name, version) {
  htmlDependencies[name] = version;
}

// Re-render stylesheet(s) if the dependency has specificially requested it
// and it matches an existing dependency (name and version)
function needsRestyle(dep) {
  if (!dep.restyle) {
    return false;
  }
  var names = Object.keys(htmlDependencies);
  var idx = names.indexOf(dep.name);
  if (idx === -1) {
    return false;
  }
  return htmlDependencies[names[idx]] === dep.version;
}
function addStylesheetsAndRestyle(links) {
  var $head = $("head").first();

  // This inline <style> based approach works for IE11
  var refreshStyle = function refreshStyle(href, oldSheet) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", href);
    xhr.onload = function () {
      var id = "shiny_restyle_" + href.split("?restyle")[0].replace(/\W/g, "_");
      var oldStyle = $head.find("style#" + id);
      var newStyle = $("<style>").attr("id", id).html(xhr.responseText);
      $head.append(newStyle);

      // We can remove the old styles immediately because the new styles
      // should have been applied synchronously.
      oldStyle.remove();
      removeSheet(oldSheet);
      sendImageSizeFns.transitioned();
    };
    xhr.send();
  };
  var findSheet = function findSheet(href) {
    if (!href) return null;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      // The sheet's href is a full URL

      if (typeof sheet.href === "string" && sheet.href.indexOf(href) > -1) {
        return sheet;
      }
    }
    return null;
  };

  // Removes the stylesheet from document.styleSheets, and also removes
  // the owning <link> element, if present.
  var removeSheet = function removeSheet(sheet) {
    if (!sheet) return;
    sheet.disabled = true;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore; .cssText doesn't normally exist, but it does on IE?
    if (isIE()) sheet.cssText = "";
    if (sheet.ownerNode instanceof Element) {
      $(sheet.ownerNode).remove();
    }
  };
  links.map(function (link) {
    var $link = $(link);
    // Find any document.styleSheets that match this link's href
    // so we can remove it after bringing in the new stylesheet
    var oldSheet = findSheet($link.attr("href"));

    // Add a timestamp to the href to prevent caching
    var href = $link.attr("href") + "?restyle=" + new Date().getTime();
    // Use inline <style> approach for IE, otherwise use the more elegant
    // <link> -based approach

    if (isIE()) {
      refreshStyle(href, oldSheet);
    } else {
      $link.attr("href", href);

      // This part is a bit tricky. The link's onload callback will be
      // invoked after the file is loaded, but it can be _before_ the
      // styles are actually applied. The amount of time it takes for the
      // style to be applied is not predictable. We need to make sure the
      // styles are applied before we send updated size/style information
      // to the server.
      //
      // We do this by adding _another_ link, with CSS content
      // base64-encoded and inlined into the href. We also add a dummy DOM
      // element that the CSS applies to. The dummy CSS includes a
      // transition, and when the `transitionend` event happens, we call
      // sendImageSizeFns.transitioned() and remove the old sheet. We also remove the
      // dummy DOM element and dummy CSS content.
      //
      // The reason this works is because (we assume) that if multiple
      // <link> tags are added, they will be applied in the same order
      // that they are loaded. This seems to be true in the browsers we
      // have tested.
      //
      // Because it is common for multiple stylesheets to arrive close
      // together, but not on exactly the same tick, we call
      // sendImageSizeFns.transitioned(), which is debounced. Otherwise, it can result in
      // the same plot being redrawn multiple times with different
      // styling.
      $link.attr("onload", function () {
        var $dummyEl = $("<div>").css("transition", "0.1s all").css("position", "absolute").css("top", "-1000px").css("left", "0");
        $dummyEl.one("transitionend", function () {
          $dummyEl.remove();
          removeSheet(oldSheet);
          sendImageSizeFns.transitioned();
        });
        $(document.body).append($dummyEl);

        // To ensure a transition actually happens, change the inline style _after_
        // the DOM element has been added, and also use a new random color each time
        // to prevent any potential caching done by the browser
        var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setTimeout(function () {
          return $dummyEl.css("color", color);
        }, 10);
      });
      $head.append(link);
    }
  });
}
function getStylesheetLinkTags(dep) {
  // Convert stylesheet objs to links early, because if `restyle` is true, we'll
  // pass them through to `addStylesheetsAndRestyle` below.
  return dep.stylesheet.map(function (x) {
    // Add "rel" and "type" fields if not already present.
    if (!hasDefinedProperty(x, "rel")) x.rel = "stylesheet";
    if (!hasDefinedProperty(x, "type")) x.type = "text/css";
    var link = document.createElement("link");
    Object.entries(x).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        val = _ref2[1];
      if (attr === "href") {
        val = encodeURI(val);
      }
      // If val isn't truthy (e.g., null), consider it a boolean attribute
      link.setAttribute(attr, val ? val : "");
    });
    return link;
  });
}
function appendStylesheetLinkTags(dep, $head) {
  var stylesheetLinks = getStylesheetLinkTags(dep);
  if (stylesheetLinks.length !== 0) {
    $head.append(stylesheetLinks);
  }
}
function appendScriptTags(dep, $head) {
  dep.script.forEach(function (x) {
    var script = document.createElement("script");
    Object.entries(x).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        attr = _ref4[0],
        val = _ref4[1];
      if (attr === "src") {
        val = encodeURI(val);
      }
      // If val isn't truthy (e.g., null), consider it a boolean attribute
      script.setAttribute(attr, val ? val : "");
    });
    $head.append(script);
  });
}
function appendScriptTagsAsync(_x7) {
  return _appendScriptTagsAsync.apply(this, arguments);
}
function _appendScriptTagsAsync() {
  _appendScriptTagsAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dep) {
    var scriptPromises;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          scriptPromises = [];
          dep.script.forEach(function (x) {
            var script = document.createElement("script");
            if (!hasDefinedProperty(x, "async")) {
              // Set async to false by default, so that if there are multiple script
              // tags, they are guaranteed to run in order. For dynamically added
              // <script> tags, browsers set async to true by default, which differs
              // from static <script> tags in the html, which default to false.
              //
              // Refs:
              // https://stackoverflow.com/a/8996894/412655
              // https://jason-ge.medium.com/dynamically-load-javascript-files-in-order-5318ac6bcc61
              //
              // Note that one odd thing about these dynamically-created <script> tags
              // is that even though the JS object's `x.script` property is true, it
              // does NOT show up as a property on the <script> element.
              script.async = false;
            }
            Object.entries(x).forEach(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                attr = _ref10[0],
                val = _ref10[1];
              if (attr === "src") {
                val = encodeURI(val);
              }
              // If val isn't truthy (e.g., null), consider it a boolean attribute
              script.setAttribute(attr, val ? val : "");
            });
            var p = new Promise(function (resolve, reject) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              script.onload = function (e) {
                resolve(null);
              };
              script.onerror = function (e) {
                reject(e);
              };
            });
            scriptPromises.push(p);
            document.head.append(script);
          });
          _context4.next = 4;
          return Promise.allSettled(scriptPromises);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _appendScriptTagsAsync.apply(this, arguments);
}
function appendMetaTags(dep, $head) {
  dep.meta.forEach(function (x) {
    var meta = document.createElement("meta");
    for (var _i2 = 0, _Object$entries = Object.entries(x); _i2 < _Object$entries.length; _i2++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        attr = _Object$entries$_i[0],
        val = _Object$entries$_i[1];
      meta.setAttribute(attr, val);
    }
    $head.append(meta);
  });
}
function appendAttachmentLinkTags(dep, $head) {
  dep.attachment.forEach(function (x) {
    var link = $("<link rel='attachment'>").attr("id", dep.name + "-" + x.key + "-attachment").attr("href", encodeURI(x.href));
    $head.append(link);
  });
}
function appendExtraHeadContent(dep, $head) {
  if (dep.head) {
    var $newHead = $("<head></head>");
    $newHead.html(dep.head);
    $head.append($newHead.children());
  }
}

// =============================================================================
// renderDependency
// =============================================================================
// Client-side dependency resolution and rendering
function renderDependencyAsync(_x8) {
  return _renderDependencyAsync.apply(this, arguments);
} // Old-school synchronous version of renderDependencyAsync. This function is
// here to preserve compatibility with outside packages that use it. The
// implementation is the same except that it calls appendScriptTags() instead of
// appendScriptTagsAsync().
function _renderDependencyAsync() {
  _renderDependencyAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(dep_) {
    var dep, $head;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          dep = normalizeHtmlDependency(dep_); // If a restyle is needed, do that stuff and return. Note that other items
          // (like scripts) aren't added, because they would have been added in a
          // previous run.
          if (!needsRestyle(dep)) {
            _context5.next = 4;
            break;
          }
          addStylesheetsAndRestyle(getStylesheetLinkTags(dep));
          return _context5.abrupt("return", true);
        case 4:
          if (!hasDefinedProperty(htmlDependencies, dep.name)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", false);
        case 6:
          registerDependency(dep.name, dep.version);
          $head = $("head").first(); // Add each type of element to the DOM.
          appendMetaTags(dep, $head);
          appendStylesheetLinkTags(dep, $head);
          _context5.next = 12;
          return appendScriptTagsAsync(dep);
        case 12:
          appendAttachmentLinkTags(dep, $head);
          appendExtraHeadContent(dep, $head);
          return _context5.abrupt("return", true);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _renderDependencyAsync.apply(this, arguments);
}
function renderDependency(dep_) {
  var dep = normalizeHtmlDependency(dep_);

  // If a restyle is needed, do that stuff and return. Note that other items
  // (like scripts) aren't added, because they would have been added in a
  // previous run.
  if (needsRestyle(dep)) {
    addStylesheetsAndRestyle(getStylesheetLinkTags(dep));
    return true;
  }
  if (hasDefinedProperty(htmlDependencies, dep.name)) return false;
  registerDependency(dep.name, dep.version);
  var $head = $("head").first();

  // Add each type of element to the DOM.
  appendMetaTags(dep, $head);
  appendStylesheetLinkTags(dep, $head);
  appendScriptTags(dep, $head);
  appendAttachmentLinkTags(dep, $head);
  appendExtraHeadContent(dep, $head);
  return true;
}

// Convert legacy HtmlDependency to new HTMLDependency format. This is
// idempotent; new HTMLDependency objects are returned unchanged.
function normalizeHtmlDependency(dep) {
  var _dep$src;
  var hrefPrefix = (_dep$src = dep.src) === null || _dep$src === void 0 ? void 0 : _dep$src.href;
  var result = {
    name: dep.name,
    version: dep.version,
    restyle: dep.restyle,
    meta: [],
    stylesheet: [],
    script: [],
    attachment: [],
    head: dep.head
  };
  if (dep.meta) {
    if (Array.isArray(dep.meta)) {
      // Assume we already have the canonical format:
      //   [{name: "myname", content: "mycontent"}, ...]
      result.meta = dep.meta;
    } else {
      // If here, then we have the legacy format, which we have to convert.
      //   {myname: "mycontent", ...}
      result.meta = Object.entries(dep.meta).map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          attr = _ref6[0],
          val = _ref6[1];
        return {
          name: attr,
          content: val
        };
      });
    }
  }
  result.stylesheet = asArray(dep.stylesheet).map(function (s) {
    if (typeof s === "string") {
      s = {
        href: s
      };
    }
    if (hrefPrefix) {
      s.href = hrefPrefix + "/" + s.href;
    }
    return s;
  });
  result.script = asArray(dep.script).map(function (s) {
    if (typeof s === "string") {
      s = {
        src: s
      };
    }
    if (hrefPrefix) {
      s.src = hrefPrefix + "/" + s.src;
    }
    return s;
  });

  // dep.attachment might be one of the following types, which we will convert
  // as shown:
  // 0. undefined => []
  // 1. A single string:
  //    "foo.txt"
  //    => [{key: "1", href: "foo.txt"}]
  // 2. An array of strings:
  //    ["foo.txt" ,"bar.dat"]
  //    => [{key: "1", href: "foo.txt"}, {key: "2", href: "bar.dat"}]
  // 3. An object:
  //    {foo: "foo.txt", bar: "bar.dat"}
  //    => [{key: "foo", href: "foo.txt"}, {key: "bar", href: "bar.dat"}]
  // 4. An array of objects:
  //    [{key: "foo", href: "foo.txt"}, {key: "bar", href: "bar.dat"}]
  //    => (Returned unchanged)
  //
  // Note that the first three formats are from legacy code, and the last format
  // is from new code.
  var attachments = dep.attachment;

  // Convert format 0 (undefined) to format 2 or 4.
  if (!attachments) attachments = [];

  // Convert format 1 to format 2.
  if (typeof attachments === "string") attachments = [attachments];
  if (Array.isArray(attachments)) {
    // If we've gotten here, the format is either 2 or 4. Even though they are
    // quite different, we can handle them both in the same loop.

    // Need to give TypeScript a bit of help so that it's happy with .map()
    // below. Instead of a union of two array types, tell it it's an array of
    // a union of two types.
    var tmp = attachments;

    // The contract for attachments is that arrays of attachments are
    // addressed using 1-based indexes. Convert this array to an object.
    attachments = tmp.map(function (attachment, index) {
      if (typeof attachment === "string") {
        return {
          key: (index + 1).toString(),
          href: attachment
        };
      } else {
        return attachment;
      }
    });
  } else {
    // If we got here, it's format 3.
    attachments = Object.entries(attachments).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        attr = _ref8[0],
        val = _ref8[1];
      return {
        key: attr,
        href: val
      };
    });
  }

  // At this point, we've normalized the format to #4. Now we can iterate over
  // it and prepend `hrefPrefix`.
  result.attachment = attachments.map(function (s) {
    if (hrefPrefix) {
      s.href = hrefPrefix + "/" + s.href;
    }
    return s;
  });
  return result;
}
export { renderContentAsync, renderContent, renderHtmlAsync, renderHtml, renderDependenciesAsync, renderDependencies, registerDependency };