import { expect, test } from "vitest";
import { Square } from "@/model/square";

test("Square", () => {
  const player = new Square(0);
  expect(player.getNumber()).toBe(1);
  expect(player.getId()).toBe(0);
});
