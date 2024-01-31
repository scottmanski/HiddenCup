function windowShiny() {
  // Use `any` type as we know what we are doing is _dangerous_
  // Immediately init shiny on the window
  if (!window["Shiny"]) {
    window["Shiny"] = {};
  }
  return window["Shiny"];
}
export { windowShiny };