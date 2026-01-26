import { describe, expect, test } from "vitest";
import { cleanInput } from "./repl";

// Clean Input Tests - START
describe.each([
  {
    // Leading and Trailing white space
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    // Example of Pokemon with different casings
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"]
  },
  {
    // Null Input
    input: "",
    expected: []
  },
  {
    // Weird Casing with Trailing White Space
    input: "ScytHER   ",
    expected: ["scyther"]
  },
  {
    // Multiple Whitespace between text items
    input: "Goldeen   Spheal  Dugong starmie",
    expected: ["goldeen", "spheal", "dugong", "starmie"]
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
// Clean Input Tests - END