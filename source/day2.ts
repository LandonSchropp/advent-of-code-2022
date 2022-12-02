import { sum } from "../lib/math";

const MOVES = [ "A", "B", "C" ];
const OUTCOMES = [ "X", "Y", "Z" ];

function parse(input: string): [number, number][] {
  return input
    .split("\n")
    .map(line => {
      const [ move, outcome ] = line.split(" ");
      return [ MOVES.indexOf(move!), OUTCOMES.indexOf(outcome!) ];
    });
}

function score(move: number, outcome: number) {
  return outcome * 3 + move + 1;
}

function part1Score([ opponent, player ]: [number, number]) {
  return score(player, (player - opponent + 4) % 3);
}

function part2Score([ opponent, outcome ]: [number, number]) {
  return score((opponent + outcome + 2) % 3, outcome);
}

export function part1(input: string) {
  return sum(parse(input).map(part1Score));
}

export function part2(input: string) {
  return sum(parse(input).map(part2Score));
}
