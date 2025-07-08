import { describe, expect, test } from "vitest";
import { BoardBuilder } from "@/model/board";
import { Square } from "@/model/square";

describe("Board", () => {
  test("Build from size", () => {
    const size = 10;
    const board = new BoardBuilder().setBoardSize(size).buildWithSize();
    expect(board.getSquares()).toHaveLength(10);
  });

  test("Build with squares", () => {
    const squares = [new Square(0), new Square(1)];
    const board = new BoardBuilder().setBoard(squares).buildWithSpecificBoard();
    expect(board.getSquares()).toHaveLength(2);
  });

  test("Failed build from size", () => {
    const squares = [new Square(0), new Square(1)];
    const board = () => new BoardBuilder().setBoard(squares).buildWithSize();
    expect(board).toThrow();
  });

  test("Failed build with squares", () => {
    const size = 10;
    const board = () =>
      new BoardBuilder().setBoardSize(size).buildWithSpecificBoard();
    expect(board).toThrow();
  });
});
