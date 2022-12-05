import { part1 } from "../source/day4";
import { formatInput } from "./helpers";

const EXAMPLE_INPUT = formatInput(`
  2-4,6-8
  2-3,4-5
  5-7,7-9
  2-8,3-7
  6-6,4-6
  2-6,4-8
`);

describe("part2", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part1(EXAMPLE_INPUT)).toEqual(2);
    });
  });
});
