//    ^        ^        ^        ^        ^        ^        ^        ^
//   ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^
//  ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^
// ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^
//   |||      |||      |||      |||      |||      |||      |||      |||

import { chunk, intersection, sum } from "lodash-es";

const UPPER_A_CODE = "A".charCodeAt(0);
const LOWER_A_CODE = "a".charCodeAt(0);
const NUMBER_OF_LETTERS = 26;

function parse(input: string): string[][] {
  return input
    .split("\n")
    .map(line => line.split(""));
}

function divideInHalf(items: string[]): [ string[], string[] ] {
  return [ items.slice(0, items.length / 2), items.slice(items.length / 2) ];
}

function priority(character: string) {
  return /[a-z]/.test(character)
    ? character.charCodeAt(0) - LOWER_A_CODE + 1
    : character.charCodeAt(0) - UPPER_A_CODE + NUMBER_OF_LETTERS + 1;
}

function intersectionPrioritySum(items: string[][]) {
  return sum(intersection(...items).map(priority));
}

export function part1(input: string) {
  return sum(parse(input).map(divideInHalf).map(intersectionPrioritySum));
}

export function part2(input: string) {
  return sum(chunk(parse(input), 3).map(intersectionPrioritySum));
}
