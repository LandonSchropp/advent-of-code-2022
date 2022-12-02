function add(first: number, second: number) {
  return first + second;
}

function sum(numbers: number[]) {
  return numbers.reduce(add);
}

function parse(input: string): number[][] {
  return input
    .split("\n\n")
    .map(group => {
      return group
        .split("\n")
        .map(word => parseInt(word, 10));
    });
}

export function part1(input: string) {
  return Math.max(...parse(input).map(sum));
}

export function part2(input: string) {
  return parse(input)
    .map(sum)
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3)
    .reduce(add);
}
