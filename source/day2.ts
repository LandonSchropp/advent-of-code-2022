import { sum } from "../lib/math";

const MOVES = [ "B", "C", "A", "X", "Y", "Z" ] as const;
type Move = typeof MOVES[number]

function parse(input: string) {
  return input.split("\n").map(line => line.split(" ") as [Move, Move]);
}

function score([ opponent, player ]: [Move, Move]) {
  return (MOVES.indexOf(player) - MOVES.indexOf(opponent)) % 3 * 3 + MOVES.indexOf(player) - 2;
}

export function part1(input: string) {
  return sum(parse(input).map(score));
}
