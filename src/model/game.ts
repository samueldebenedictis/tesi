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
  private gameEnded: boolean;
  private winner: Player | undefined;

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
    this.gameEnded = false;
  }

  getBoard = () => this.board;
  getPlayers = () => this.players;
  getTurn = () => this.turn;
  getRound = () => this.round;

  getWinner = () => this.winner;

  private endGameAndSetWinner = (player: Player) => {
    this.winner = player;
    this.gameEnded = true;
  };

  /**
   * Il giocatore attuale lancia il dado e aggiorna la sua posizione.
   * Il turno ed eventualmente il round vengono incrementati.
   * Se un giocatore arriva all'ultima casella vince e il gioco termina.
   */
  playTurn = () => {
    if (!this.gameEnded) {
      const actualPlayer = this.players[this.turn];
      const diceValue = this.dice.roll();
      // TODO: refactor check sul dado e updatePlayer solo con valori > 0
      const newPosition = actualPlayer.getPosition() + diceValue;

      if (newPosition >= this.boardSize) {
        actualPlayer.setPosition(this.boardSize);
        this.endGameAndSetWinner(actualPlayer);
      } else {
        actualPlayer.setPosition(newPosition);
      }

      if (this.turn === this.players.length - 1) {
        this.turn = 0;
        this.round++;
      } else {
        this.turn++;
      }
    } else {
      throw new Error("playTurn not avalaible, the game is already ended");
    }
  };
}
