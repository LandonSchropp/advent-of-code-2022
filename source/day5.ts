//    ^        ^        ^        ^        ^        ^        ^        ^
//   ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^
//  ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^
// ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^
//   |||      |||      |||      |||      |||      |||      |||      |||

import { cloneDeep, last, reject, reverse, times, toNumber, zip } from "lodash-es";

import { isBlank } from "../lib/string";

type Move = [number, number, number]
type Stack = string[]

// TODO: THE PUZZLE INPUT IS NOT PARSING CORRECTLY!
function parseStacks(input: string): Stack[] {
  const stacks = input.split("\n").map(line => line.replace(/(.)(.)(.).?/g, "$2").split(""));
  return (zip(...stacks) as string[][]).map(stack => reject(stack, isBlank)).map(reverse);
}

function parseMoves(input: string): Move[] {
  return input.split("\n").map(line => line.replace(/^\D+/, "").split(/\D+/).map(toNumber) as Move);
}

function parse(input: string): [Stack[], Move[]] {
  const [ stackInput, moveInput ] = input.split(/\n[^\n]+\n\n/);
  return [ parseStacks(stackInput!), parseMoves(moveInput!) ];
}

function moveItem(stacks: Stack[], from: number, to: number): Stack[] {
  stacks = cloneDeep(stacks);
  stacks[to - 1]!.push(stacks[from - 1]!.pop()!);
  return stacks;
}

function moveItems(stacks: Stack[], quantity: number, from: number, to: number): Stack[] {
  return times(quantity).reduce((accumulator) => moveItem(accumulator, from, to), stacks);
}

function applyMoves(stacks: Stack[], moves: Move[]) {
  return moves.reduce((accumulator, move) => moveItems(accumulator, ...move), stacks);
}

export function part1(input: string) {
  const [ stacks, moves ] = parse(input);
  return applyMoves(stacks, moves).map(last).join("");
}

export function part2(input: string) {
  return null;
}
