import { part1, part2 } from "../source/day1";
import { formatInput } from "./helpers";

const EXAMPLE_INPUT = formatInput(`
  1000
  2000
  3000

  4000

  5000
  6000

  7000
  8000
  9000

  10000
`);

describe("part1", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part1(EXAMPLE_INPUT)).toEqual(24000);
    });
  });
});

describe("part2", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part2(EXAMPLE_INPUT)).toEqual(45000);
    });
  });
});
