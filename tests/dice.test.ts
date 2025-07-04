import { expect, test } from "vitest";
import { Dice } from "@/model/dice";

const RANDOM_TEST_NUMBER = 100;

test("Dice build", () => {
  const dice = new Dice(10);

  const value = dice.roll();
  expect(value).toBeLessThanOrEqual(10);
  expect(value).toBeGreaterThan(0);
});

test("Dice random roll", () => {
  const dice = new Dice(6);

  for (let i = 0; i++; i < RANDOM_TEST_NUMBER) {
    const value = dice.roll();
    expect(value).toBeLessThanOrEqual(6);
    expect(value).toBeGreaterThan(0);
  }
});
