export function add(first: number, second: number) {
  return first + second;
}

export function sum(numbers: number[]) {
  return numbers.reduce(add);
}
