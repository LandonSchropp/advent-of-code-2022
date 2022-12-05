//    ^        ^        ^        ^        ^        ^        ^        ^
//   ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^
//  ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^
// ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^
//   |||      |||      |||      |||      |||      |||      |||      |||

import { sum, toNumber } from "lodash-es";

type Range = [number, number]

function parse(input: string): [Range, Range][] {
  return input
    .split("\n")
    .map(line => {
      const [ a, b, c, d ] = line.split(/\D/).map(toNumber);
      return [ [ a!, b! ], [ c!, d! ] ];
    });
}

function rangeContains([ a, b ]: Range, [ c, d ]: Range) {
  return a <= c && b >= d;
}

function eitherRangeContains([ first, second ]: [Range, Range]) {
  return rangeContains(first, second) || rangeContains(second, first);
}

export function part1(input: string) {
  return sum(parse(input).map(eitherRangeContains));
}
