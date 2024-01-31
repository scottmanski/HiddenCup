import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import { imageOutputBinding } from "../bindings/output/image";
import { shinySetInputValue } from "../shiny/initedMethods";
function resetBrush(brushId) {
  shinySetInputValue(brushId, null);
  imageOutputBinding.find(document.documentElement).trigger("shiny-internal:brushed", {
    brushId: brushId,
    outputId: null
  });
}
export { resetBrush };