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

const stackPositions = ['F3', 'DW', 'DC', 'WW', 'CW'];

export function addSkatersToStacks(skaterData, stack) {
  if (stackPositions.includes(stack.Pos)) {
    const names = stack.Name.split(";");
    return names.map((name => {
      return skaterData.find((o) => o.Name === name.trim());
    }))
  }
  return [stack];
}