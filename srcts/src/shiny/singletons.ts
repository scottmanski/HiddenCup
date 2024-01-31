import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.array.join.js";
import $ from "jquery";
var reSingleton = /<!--(SHINY.SINGLETON\[([\w]+)\])-->([\s\S]*?)<!--\/\1-->/;
var reHead = /<head(?:\s[^>]*)?>([\s\S]*?)<\/head>/;
var knownSingletons = {};
function renderHtml(html, el, where) {
  var processed = processHtml(html);
  addToHead(processed.head);
  register(processed.singletons);

  // N.B. even though the DOM insertion below _could_ be done with vanilla JS,
  // we intentionally use jQuery so that <script> tags execute.
  // https://github.com/rstudio/shiny/pull/3630
  switch (where.toLowerCase()) {
    case "replace":
      $(el).html(processed.html);
      break;
    case "beforebegin":
      $(el).before(processed.html);
      break;
    case "afterbegin":
      $(el).prepend(processed.html);
      break;
    case "beforeend":
      $(el).append(processed.html);
      break;
    case "afterend":
      $(el).after(processed.html);
      break;
    default:
      throw new Error("Unknown where position: " + where);
  }
  return processed;
}
// Take an object where keys are names of singletons, and merges it into
// knownSingletons
function register(s) {
  $.extend(knownSingletons, s);
}
// Takes a string or array of strings and adds them to knownSingletons
function registerNames(s) {
  if (typeof s === "string") {
    knownSingletons[s] = true;
  } else if (s instanceof Array) {
    for (var i = 0; i < s.length; i++) {
      knownSingletons[s[i]] = true;
    }
  }
}
// Inserts new content into document head
function addToHead(head) {
  if (head.length > 0) {
    var tempDiv = $("<div>" + head + "</div>").get(0);
    var $head = $("head");
    while (tempDiv.hasChildNodes()) {
      // @ts-expect-error; TODO-barret; IDK how this function works. Seems like it would add the first child forever.
      $head.append(tempDiv.firstChild);
    }
  }
}
// Reads HTML and returns an object with info about singletons
function processHtml(val) {
  var newSingletons = {};
  var newVal;
  var findNewPayload = function findNewPayload(match, p1, sig, payload) {
    if (knownSingletons[sig] || newSingletons[sig]) return "";
    newSingletons[sig] = true;
    return payload;
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    newVal = val.replace(reSingleton, findNewPayload);
    if (val.length === newVal.length) break;
    val = newVal;
  }
  var heads = [];
  var headAddPayload = function headAddPayload(match, payload) {
    heads.push(payload);
    return "";
  };

  // eslint-disable-next-line no-constant-condition
  while (true) {
    newVal = val.replace(reHead, headAddPayload);
    if (val.length === newVal.length) break;
    val = newVal;
  }
  return {
    html: val,
    head: heads.join("\n"),
    singletons: newSingletons
  };
}
export { renderHtml, registerNames };