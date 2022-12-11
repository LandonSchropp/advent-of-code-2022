import { readFile } from "fs/promises";
import { pathExists } from "fs-extra";

// Ensure the correct arguments were provided.
if (process.argv.length !== 4) {
  process.stderr.write("Usage: yarn answer <day> <part>\n");
  process.exit(1);
}

// Grab the arguments.
const DAY: number = parseInt(process.argv[2] as string, 10);
const PART: number = parseInt(process.argv[3] as string, 10);
const INPUT_PATH = `./input/day${ DAY }.txt`;
const SOLUTION_PATH = `./source/day${ DAY }.ts`;

// Validate the part
if (![ 1, 2 ].includes(PART)) {
  process.stderr.write(`The part '${ PART }' is not valid.\n`);
  process.exit(1);
}

// Check that the input file exists and load it.
if (!pathExists(INPUT_PATH)) {
  process.stderr.write(`The file '${ INPUT_PATH }' does not exist.\n`);
  process.exit(1);
}

const input = await readFile(INPUT_PATH, "utf8");

// Check that the solution exists and import it.
if (!pathExists(SOLUTION_PATH)) {
  process.stderr.write(`The file '${ SOLUTION_PATH }' does not exist.\n`);
  process.exit(1);
}

const { part1, part2 } = await import(SOLUTION_PATH);
const solution = (PART === 1 ? part1 : part2) as (solutionInput: string) => string | number;

if (typeof solution !== "function") {
  process.stderr.write(`The file '${ SOLUTION_PATH }' must export a 'part${ PART }' function.\n`);
  process.exit(1);
}

// Run the solution and output the result.
process.stdout.write(solution(input).toString());

// HACK: Top-level await calls are only allowed in modules. In order to make this file a module, we
// have to export something.
export {};
