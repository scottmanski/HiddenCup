// Shift an array of values so that they are within a min and max. The vals
// will be shifted so that they maintain the same spacing internally. If the
// range in vals is larger than the range of min and max, the result might not
// make sense.
function shiftToRange(vals, min, max) {
  if (!(vals instanceof Array)) vals = [vals];
  var maxval = Math.max.apply(null, vals);
  var minval = Math.min.apply(null, vals);
  var shiftAmount = 0;
  if (maxval > max) {
    shiftAmount = max - maxval;
  } else if (minval < min) {
    shiftAmount = min - minval;
  }
  var newvals = [];
  for (var i = 0; i < vals.length; i++) {
    newvals[i] = vals[i] + shiftAmount;
  }
  return newvals;
}
export { shiftToRange };