import { describe, expect, test } from "vitest";
import { Player } from "@/model/player";

describe("Player", () => {
  test("Position", () => {
    const player = new Player(0, "Sam");
    expect(player.getName()).toBe("Sam");
    expect(player.getId()).toBe(0);

    player.setPosition(1);

    expect(player.getPosition()).toBe(1);

    expect(() => player.setPosition(-1)).toThrow();
  });
});
