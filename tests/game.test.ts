import { Game } from "@/model/game";
import { expect, test } from "vitest";

test("Game's board", () => {
  const game = new Game(10, ['Renzo', 'Lucia']);
  const board = game.getBoard();
  expect(board).toHaveLength(10);

  for (let i = 0; i < 10; i++) {
    expect(board[i].getId()).toBe(i + 1);
  }
});
