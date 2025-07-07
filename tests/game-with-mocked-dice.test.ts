import { afterAll, describe, expect, test, vi } from "vitest";

vi.mock("@/model/dice", () => {
  const rollMock = vi.fn(() => 1);

  const DiceMock = vi.fn().mockImplementation(function (
    this: { faces: number; roll: () => number },
    faces: number,
  ) {
    this.faces = faces;
    this.roll = rollMock;
  });

  return {
    Dice: DiceMock,
    __esModule: true,
  };
});

import { Dice } from "@/model/dice";
import { BoardBuilder, Game } from "@/model/game";

describe("Mocked dice", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("Should always return 1 from mocked Dice", () => {
    const b = new BoardBuilder().setBoardSize(10).buildWithSize();
    const game = new Game(b, ["Lucia", "Tiziano"]);
    expect(Dice).toHaveBeenCalledWith(6);

    expect(game.getPlayers()[0].getPosition()).toBe(0);
    expect(game.getPlayers()[1].getPosition()).toBe(0);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(1);
    expect(game.getPlayers()[1].getPosition()).toBe(0);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(1);
    expect(game.getPlayers()[1].getPosition()).toBe(1);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(2);
    expect(game.getPlayers()[1].getPosition()).toBe(1);
  });
});
