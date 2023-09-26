export function beginByIndex(arr, index = 0) {
  if (index >= arr.length) throw new RangeError("Index out of bounds");
  const temp = [...arr];
  const deleted = temp.splice(index);
  return deleted.concat(temp);
}
