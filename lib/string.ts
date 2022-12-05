import { zip } from "lodash-es";

/**
 * Returns true if the string is blank.
 */
export function isBlank(input: undefined | null | string): boolean {
  return !input || /^\s*$/.test(input);
}

/**
 * Transposes a string.
 */
export function transpose(input: string): string {
  const items = input.split("\n").map(line => line.split(""));
  return zip(...items).map(line => line.join("")).join("\n");
}
