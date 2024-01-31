import $ from "jquery";
function disableFormSubmission() {
  // disable form submissions
  $(document).on("submit", "form:not([action])", function (e) {
    e.preventDefault();
  });
}
export { disableFormSubmission };