function splitInputNameType(nameType) {
  var name2 = nameType.split(":");
  return {
    name: name2[0],
    inputType: name2.length > 1 ? name2[1] : ""
  };
}
export { splitInputNameType };