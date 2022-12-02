function parseAndSumGroup(group: string) {
  return group
    .split("\n")
    .map(word => parseInt(word, 10))
    .reduce((accumulator, number) => accumulator + number);
}

export function part1(input: string) {
  return Math.max(...input.split("\n\n").map(parseAndSumGroup));
}
