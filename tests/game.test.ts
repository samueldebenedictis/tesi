import { expect, test } from "vitest";
import { Game } from "@/model/game";

test("Game's board", () => {
  const game = new Game(10, ["Renzo", "Lucia"]);
  const board = game.getBoard();
  expect(board).toHaveLength(10);

  for (let i = 0; i < 10; i++) {
    expect(board[i].getId()).toBe(i + 1);
  }
});

test("Game's players", () => {
  const game = new Game(10, ["Renzo", "Lucia"]);
  const players = game.getPlayers();
  expect(players).toHaveLength(2);

  expect(players[0].getName()).toBe("Renzo");
  expect(players[0].getPosition()).toBe(0);
  expect(players[1].getName()).toBe("Lucia");
  expect(players[1].getPosition()).toBe(0);
});
