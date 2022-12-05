import { negate, zip } from "lodash-es";

/**
 * Returns true if the string is blank.
 */
export function isBlank(input: string): boolean {
  return /^\s*$/.test(input);
}

/**
 * Returns true if the string is not blank.
 */
export const isPresent = negate(isBlank);

/**
 * Transposes a string.
 */
export function transpose(input: string): string {
  const items = input.split("\n").map(line => line.split(""));
  return zip(...items).map(line => line.join("")).join("\n");
}
