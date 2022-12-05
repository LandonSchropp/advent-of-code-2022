import { dropRightWhile, dropWhile, min, negate } from "lodash-es";

import { isBlank } from "../lib/string";

/**
 * Removes empty lines from the beginning and end of a string without affecting other lines or their
 * whitespace.
 */
function trimEmptyLines(input: string): string {
  return dropRightWhile(dropWhile(input.split("\n"), isBlank), isBlank).join("\n");
}

/**
 * Unindents a string.
 */
function unindent(input: string): string {
  const minIndent = min(
    input
      .split("\n")
      .filter(negate(isBlank))
      .map(line => line.replace(/[^\n ].*$/, ""))
      .map(whitespace => whitespace.length)
  );

  return input
    .split("\n")
    .map(line => line.replace(new RegExp(`^ {${ minIndent }}`), ""))
    .join("\n");
}

/**
 * It's often convenient to record constant test input with extra whitespace for clarity. This
 * function formats the input so it matches the input files provided by Advent of Code.
 */
export function formatInput(input: string): string {
  return unindent(trimEmptyLines(input));
}
