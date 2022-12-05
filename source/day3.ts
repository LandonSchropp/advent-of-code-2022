//    ^        ^        ^        ^        ^        ^        ^        ^
//   ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^
//  ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^
// ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^
//   |||      |||      |||      |||      |||      |||      |||      |||

import { intersection, sum } from "lodash-es";

const UPPER_A_CODE = "A".charCodeAt(0);
const LOWER_A_CODE = "a".charCodeAt(0);
const NUMBER_OF_LETTERS = 26;

function parse(input: string): [string[], string[]][] {
  return input
    .split("\n")
    .map(line => line.split(""))
    .map(line => [ line.slice(0, line.length / 2), line.slice(line.length / 2) ]);
}

function priority(character: string) {
  return /[a-z]/.test(character)
    ? character.charCodeAt(0) - LOWER_A_CODE + 1
    : character.charCodeAt(0) - UPPER_A_CODE + NUMBER_OF_LETTERS + 1;
}

function intersectionPrioritySum([ compartment1, compartment2 ]: [string[], string[]]) {
  return sum(intersection(compartment1, compartment2).map(priority));
}

export function part1(input: string) {
  return sum(parse(input).map(intersectionPrioritySum));
}
