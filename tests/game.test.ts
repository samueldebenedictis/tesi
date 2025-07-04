import { describe, expect, test, vi } from "vitest";
import { Game } from "@/model/game";

describe("Game", () => {
  test("Board", () => {
    const game = new Game(10, ["Renzo", "Lucia"]);
    const board = game.getBoard();
    expect(board).toHaveLength(10);

    for (let i = 0; i < 10; i++) {
      expect(board[i].getId()).toBe(i + 1);
    }
  });

  test("Players", () => {
    const game = new Game(10, ["Renzo", "Lucia"]);
    const players = game.getPlayers();
    expect(players).toHaveLength(2);

    expect(players[0].getName()).toBe("Renzo");
    expect(players[0].getPosition()).toBe(0);
    expect(players[1].getName()).toBe("Lucia");
    expect(players[1].getPosition()).toBe(0);
  });

  test("Turns and rounds", () => {
    const game = new Game(10, ["Renzo", "Lucia"]);

    expect(game.getTurn()).toBe(0);
    expect(game.getRound()).toBe(1);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).not.toBe(0);
    expect(game.getTurn()).toBe(1);
    expect(game.getRound()).toBe(1);

    game.playTurn();

    expect(game.getTurn()).toBe(0);
    expect(game.getRound()).toBe(2);
  });

  test("Max position", () => {
    const game = new Game(2, ["Renzo", "Lucia"]);

    game.playTurn();
    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(2);
  });

  test("If game ended players don't move", () => {
    const game = new Game(2, ["Renzo", "Lucia"]);

    // Mock once play turn in order to end game
    const spy = vi.spyOn(game, "playTurn").mockImplementation(() => {
      // biome-ignore lint: force private field
      (game as any).gameEnded = true;
    });
    game.playTurn();
    spy.mockRestore();

    expect(game.getPlayers()[0].getPosition()).toBe(0);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(0);
    expect(game.getPlayers()[1].getPosition()).toBe(0);
  });
});
