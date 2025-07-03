import { expect, test } from "vitest";
import { sum } from "@/model/sum";

test("Sum", () => {
  expect(sum(1, 1)).toBe(2);
});
