import $ from "jquery";
import { InputBinding, OutputBinding } from "../bindings";
import { resetBrush } from "../imageutils/resetBrush";
import { $escape, compareVersion } from "../utils";
import { showNotification, removeNotification } from "./notifications";
import { showModal, removeModal } from "./modal";
import { showReconnectDialog, hideReconnectDialog } from "./reconnectDialog";
import { renderContentAsync, renderContent, renderDependenciesAsync, renderDependencies, renderHtmlAsync, renderHtml } from "./render";
import { initShiny } from "./init";
import { setFileInputBinding } from "./initedMethods";
import { addCustomMessageHandler } from "./shinyapp";
import { initInputBindings } from "../bindings/input";
import { initOutputBindings } from "../bindings/output";
var windowShiny;
function setShiny(windowShiny_) {
  windowShiny = windowShiny_;

  // `process.env.SHINY_VERSION` is overwritten to the Shiny version at build time.
  // During testing, the `Shiny.version` will be `"development"`
  windowShiny.version = process.env.SHINY_VERSION || "development";
  var _initInputBindings = initInputBindings(),
    inputBindings = _initInputBindings.inputBindings,
    fileInputBinding = _initInputBindings.fileInputBinding;
  var _initOutputBindings = initOutputBindings(),
    outputBindings = _initOutputBindings.outputBindings;

  // set variable to be retrieved later
  setFileInputBinding(fileInputBinding);
  windowShiny.$escape = $escape;
  windowShiny.compareVersion = compareVersion;
  windowShiny.inputBindings = inputBindings;
  windowShiny.InputBinding = InputBinding;
  windowShiny.outputBindings = outputBindings;
  windowShiny.OutputBinding = OutputBinding;
  windowShiny.resetBrush = resetBrush;
  windowShiny.notifications = {
    show: showNotification,
    remove: removeNotification
  };
  windowShiny.modal = {
    show: showModal,
    remove: removeModal
  };
  windowShiny.addCustomMessageHandler = addCustomMessageHandler;
  windowShiny.showReconnectDialog = showReconnectDialog;
  windowShiny.hideReconnectDialog = hideReconnectDialog;
  windowShiny.renderDependenciesAsync = renderDependenciesAsync;
  windowShiny.renderDependencies = renderDependencies;
  windowShiny.renderContentAsync = renderContentAsync;
  windowShiny.renderContent = renderContent;
  windowShiny.renderHtmlAsync = renderHtmlAsync;
  windowShiny.renderHtml = renderHtml;
  $(function () {
    // Init Shiny a little later than document ready, so user code can
    // run first (i.e. to register bindings)
    setTimeout(function () {
      /* eslint-disable @typescript-eslint/no-floating-promises */
      initShiny(windowShiny);
    }, 1);
  });
}
export { windowShiny, setShiny };