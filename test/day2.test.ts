import { part1 } from "../source/day2";

const EXAMPLE_INPUT = "A Y\nB X\nC Z";

describe("part1", () => {

  describe("when the input is the example provided in the problem", () => {

    it("produces the expected example solution", () => {
      expect(part1(EXAMPLE_INPUT)).toEqual(15);
    });
  });
});
