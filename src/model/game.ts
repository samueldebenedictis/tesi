import { Player } from "./player";
import { Square } from "./square";

export class Game {
  private board: Square[];
  private players: Player[];

  constructor(boardDimension: number, playersName: string[]) {
    const squaresNumbers = Array.from(
      { length: boardDimension },
      (_, i) => i + 1,
    );
    this.board = squaresNumbers.map((n) => new Square(n));

    this.players = playersName.map((name, i) => new Player(i, name));
  }

  getBoard = () => this.board;
  getPlayers = () => this.players;
}
