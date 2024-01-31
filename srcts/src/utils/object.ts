// Inspriation from https://fettblog.eu/typescript-hasownproperty/
// But mixing with "NonNullable key of Obj" instead of "key to unknown values"
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// Return true if the key exists on the object and the value is not undefined.
//
// This method is mainly used in input bindings' `receiveMessage` method.
// Since we know that the values are sent by Shiny via `{jsonlite}`,
// then we know that there are no `undefined` values. `null` is possible, but not `undefined`.
function hasDefinedProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] !== undefined;
}

// Return type for non-null value

// Logic
function ifUndefined(value, alternate) {
  if (value === undefined) return alternate;
  return value;
}
export { hasOwnProperty, hasDefinedProperty, ifUndefined };