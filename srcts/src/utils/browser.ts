var isQtVal = false;
var isIEVal = false;
var versionIE = -1;
function setIsQt(isQt) {
  isQtVal = isQt;
}
function setIsIE(isIE) {
  isIEVal = isIE;
}
function setIEVersion(versionIE_) {
  versionIE = versionIE_;
}
function isQt() {
  return isQtVal;
}
function isIE() {
  return isIEVal;
}

// (Name existed before TS conversion)
// eslint-disable-next-line @typescript-eslint/naming-convention
function IEVersion() {
  return versionIE;
}
export { isQt, isIE, IEVersion, setIsQt, setIsIE, setIEVersion };