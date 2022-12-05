//    ^        ^        ^        ^        ^        ^        ^        ^
//   ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^      ^^^
//  ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^    ^^^^^
// ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^  ^^^^^^^
//   |||      |||      |||      |||      |||      |||      |||      |||

import { flip, sum, toNumber } from "lodash-es";

type Range = [number, number]

function parse(input: string): [Range, Range][] {
  return input
    .split("\n")
    .map(line => {
      const [ a, b, c, d ] = line.split(/\D/).map(toNumber);
      return [ [ a!, b! ], [ c!, d! ] ];
    });
}

type RangePredicate = (range1: Range, range2: Range) => boolean

const rangeContains: RangePredicate = ([ a, b ], [ c, d ]) => {
  return a <= c && b >= d;
};

const rangeOverlaps: RangePredicate = ([ a, b ], [ c, d ]) => {
  return a >= c && a <= d || b >= c && b <= d;
};

function bothWays(func: RangePredicate): RangePredicate {
  return (...ranges) => func(...ranges) || flip(func)(...ranges);
}

export function part1(input: string) {
  return sum(parse(input).map(ranges => bothWays(rangeContains)(...ranges)));
}

export function part2(input: string) {
  return sum(parse(input).map(ranges => bothWays(rangeOverlaps)(...ranges)));
}
