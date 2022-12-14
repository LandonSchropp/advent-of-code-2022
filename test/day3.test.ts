import { part1, part2 } from "../source/day3";
import { formatInput } from "./helpers";

const EXAMPLE_INPUT = formatInput(`
  vJrwpWtwJgWrhcsFMMfFFhFp
  jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  PmmdzqPrVvPwwTWBwg
  wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
  ttgJtRGJQctTZtZT
  CrZsJsPPZsGzwwsLwLmpwMDw
`);

describe("part1", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part1(EXAMPLE_INPUT)).toEqual(157);
    });
  });
});

describe("part2", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part2(EXAMPLE_INPUT)).toEqual(70);
    });
  });
});
