import { describe, expect, test } from "vitest";
import { BoardBuilder, Game } from "@/model/game";

describe("Game", () => {
  test("Board", () => {
    const b = new BoardBuilder().setBoardSize(10).buildWithSize();
    const game = new Game(b, ["Renzo", "Lucia"]);
    const board = game.getBoard();
    expect(board).toHaveLength(10);

    for (let i = 0; i < 10; i++) {
      expect(board[i].getId()).toBe(i + 1);
    }
  });

  test("Players", () => {
    const b = new BoardBuilder().setBoardSize(10).buildWithSize();
    const game = new Game(b, ["Renzo", "Lucia"]);
    const players = game.getPlayers();
    expect(players).toHaveLength(2);

    expect(players[0].getName()).toBe("Renzo");
    expect(players[0].getPosition()).toBe(0);
    expect(players[1].getName()).toBe("Lucia");
    expect(players[1].getPosition()).toBe(0);
  });

  test("Turns and rounds", () => {
    const b = new BoardBuilder().setBoardSize(10).buildWithSize();
    const game = new Game(b, ["Renzo", "Lucia"]);

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
    const b = new BoardBuilder().setBoardSize(1).buildWithSize();
    const game = new Game(b, ["Renzo", "Lucia"]);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(1);
  });

  test("If game ended players don't move", () => {
    const b = new BoardBuilder().setBoardSize(1).buildWithSize();
    const game = new Game(b, ["Renzo", "Lucia"]);

    game.playTurn();

    expect(game.getPlayers()[0].getPosition()).toBe(1);

    expect(() => game.playTurn()).toThrow();

    expect(game.getPlayers()[0].getPosition()).toBe(1);
    expect(game.getPlayers()[1].getPosition()).toBe(0);
    expect(game.getWinner()?.getName()).toBe("Renzo");
  });
});
