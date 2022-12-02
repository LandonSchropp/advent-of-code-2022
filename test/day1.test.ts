import { part1 } from "../source/day1";
import { formatInput } from "./helpers";

let input: string;

describe("part1", () => {

  describe("when the input is the example provided in the problem", () => {
    beforeEach(() => {
      input = formatInput(`
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
    });

    it("produces the expected example solution", () => {
      expect(part1(input)).toEqual(24000);
    });
  });
});
