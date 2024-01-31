import { TextOutputBinding } from "./text";
import { BindingRegistry } from "../registry";
import { DownloadLinkOutputBinding } from "./downloadlink";
import { DatatableOutputBinding } from "./datatable";
import { HtmlOutputBinding } from "./html";
import { imageOutputBinding } from "./image";
import { OutputBinding } from "./outputBinding";
function initOutputBindings() {
  var outputBindings = new BindingRegistry();
  outputBindings.register(new TextOutputBinding(), "shiny.textOutput");
  outputBindings.register(new DownloadLinkOutputBinding(), "shiny.downloadLink");
  outputBindings.register(new DatatableOutputBinding(), "shiny.datatableOutput");
  outputBindings.register(new HtmlOutputBinding(), "shiny.htmlOutput");
  outputBindings.register(imageOutputBinding, "shiny.imageOutput");
  return {
    outputBindings: outputBindings
  };
}
export { OutputBinding, initOutputBindings };