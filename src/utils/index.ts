export function genThresholds() {
  const arr = [0];
  const steps = 100;

  for (let i = 1; i <= 100; i++) {
    arr.push(i / steps);
  }

  return arr;
}
