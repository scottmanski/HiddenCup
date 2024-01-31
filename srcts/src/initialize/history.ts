import $ from "jquery";
function trackHistory() {
  var origPushState = window.history.pushState;
  window.history.pushState = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var result = origPushState.apply(this, args);
    $(document).trigger("pushstate");
    return result;
  };
}
export { trackHistory };