import "core-js/modules/es.function.name.js";
import $ from "jquery";
function triggerFileInputChanged(name, value, binding, el, inputType, onEl) {
  var evt = $.Event("shiny:inputchanged");
  evt.name = name;
  evt.value = value;
  evt.binding = binding;
  evt.el = el;
  evt.inputType = inputType;
  $(onEl).trigger(evt);
  return evt;
}
export { triggerFileInputChanged };