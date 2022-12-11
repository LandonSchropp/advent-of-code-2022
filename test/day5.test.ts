import { part1, part2 } from "../source/day5";
import { formatInput } from "./helpers";

const EXAMPLE_STACKS = formatInput(`
      [D]
  [N] [C]
  [Z] [M] [P]
  1   2   3
`);

const EXAMPLE_MOVES = formatInput(`
  move 1 from 2 to 1
  move 3 from 1 to 3
  move 2 from 2 to 1
  move 1 from 1 to 2
`);

const EXAMPLE_INPUT = `${ EXAMPLE_STACKS }\n\n${ EXAMPLE_MOVES }`;

describe("part1", () => {

  describe("when moving a single item", () => {
    const moves = "move 1 from 2 to 3";

    it("produces the correct result", () => {
      expect(part1(`${ EXAMPLE_STACKS }\n\n${ moves }`)).toEqual("NCD");
    });
  });

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part1(EXAMPLE_INPUT)).toEqual("CMZ");
    });
  });
});

describe("part2", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part2(EXAMPLE_INPUT)).toEqual("MCD");
    });
  });
});
