import { Dice } from "./dice";
import { Player } from "./player";
import { Square } from "./square";

export class Game {
  private boardSize: number;
  private board: Square[];
  private players: Player[];
  private turn: number;
  private round: number;
  private dice: Dice;

  constructor(boardDimension: number, playersName: string[]) {
    this.boardSize = boardDimension;
    const squaresNumbers = Array.from(
      { length: boardDimension },
      (_, i) => i + 1,
    );
    this.board = squaresNumbers.map((n) => new Square(n));
    this.players = playersName.map((name, i) => new Player(i, name));
    this.round = 1;
    this.turn = 0;
    this.dice = new Dice(6);
  }

  getBoard = () => this.board;
  getPlayers = () => this.players;
  getTurn = () => this.turn;
  getRound = () => this.round;

  /**
   * Il giocatore attuale lancia il dado e aggiorna la sua posizione.
   */
  playTurn = () => {
    const actualPlayer = this.players[this.turn];
    const diceValue = this.dice.roll();
    // TODO: refactor check sul dado e updatePlayer solo con valori > 0
    const newPositionTemp = actualPlayer.getPosition() + diceValue;
    const newPosition =
      newPositionTemp > this.boardSize ? this.boardSize : newPositionTemp;
    actualPlayer.setPosition(newPosition);

    if (this.turn === this.players.length - 1) {
      this.turn = 0;
      this.round++;
    } else {
      this.turn++;
    }
  };
}
