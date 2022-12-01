/**
 * It's often convenient to record constant test input with extra whitespace for clarity. This
 * function formats the input so it matches the input files provided by Advent of Code.
 */
export function formatInput(input: string): string {
  return input
    .trim()
    .replaceAll(/^[ ]+/gm, "");
}
