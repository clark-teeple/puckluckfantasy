export function sortIntegerColumn(aa, bb) {
  const a = parseInt(aa, 10);
  const b = parseInt(bb, 10);
  if (a === b) {
    return a > b ? 1 : -1;
  }
  return a > b ? 1 : -1;
}

export function sortFloatColumn(aa, bb) {
  const a = parseFloat(aa, 10);
  const b = parseFloat(bb, 10);
  if (a === b) {
    return a > b ? 1 : -1;
  }
  return a > b ? 1 : -1;
}
