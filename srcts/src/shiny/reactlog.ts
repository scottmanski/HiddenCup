import $ from "jquery";
import { shinyShinyApp } from "./initedMethods";
import { showNotification } from "./notifications";
// We can use this method as `shinyShinyApp()` will throw if not initialized
function shinyAppConfig() {
  return shinyShinyApp().config;
}
function initReactlog() {
  $(document).on("keydown", function (e) {
    if (e.which !== 114 || !e.ctrlKey && !e.metaKey || e.shiftKey || e.altKey) return;
    var url = "reactlog?w=" + window.escape(shinyAppConfig().workerId) + "&s=" + window.escape(shinyAppConfig().sessionId);
    window.open(url);
    e.preventDefault();
  });
  $(document).on("keydown", function (e) {
    if (
    // if not one of the key combos below
    !(
    // cmd/ctrl + fn + f4

    e.which === 115 && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey ||
    // cmd/ctrl + shift + fn + f3
    e.which === 114 && (e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey)) {
      return;
    }
    var url = "reactlog/mark?w=" + window.escape(shinyAppConfig().workerId) + "&s=" + window.escape(shinyAppConfig().sessionId);

    // send notification
    /* eslint-disable @typescript-eslint/no-floating-promises */
    $.get(url, function (result) {
      if (result !== "marked") return;
      var html = '<span id="shiny-reactlog-mark-text">Marked time point in reactlog</span>';
      showNotification({
        html: html,
        closeButton: true
      });
    }).fail(function () {
      // found returned error while marking, should open webpage
      window.open(url);
    });
    e.preventDefault();
  });
}
export { initReactlog };