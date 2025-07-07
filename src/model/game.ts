import { Dice } from "./dice";
import { Player } from "./player";
import { SpecialSquare, Square } from "./square";

class Board {
  private squares: Square[];

  constructor(board: Square[]) {
    this.squares = board;
  }

  getSquares = () => this.squares;
}

export class BoardBuilder {
  private board: Square[] | undefined;
  private boardSize: number | undefined;

  setBoard = (squareArray: Square[]) => {
    this.board = squareArray;
    return this;
  };

  setBoardSize = (size: number) => {
    this.boardSize = size;
    return this;
  };

  buildWithSpecificBoard() {
    if (this.board === undefined) {
      throw new Error("Board not defined");
    }
    return new Board(this.board);
  }

  buildWithSize() {
    if (this.boardSize === undefined) {
      throw new Error("Size not defined");
    }
    const squaresNumbers = Array.from(
      { length: this.boardSize },
      (_, i) => i + 1,
    );
    const b = squaresNumbers.map((n) => new Square(n));
    return new Board(b);
  }
}

export class Game {
  private boardSize: number;
  private board: Board;
  private players: Player[];
  private turn: number;
  private round: number;
  private dice: Dice;
  private gameEnded: boolean;
  private winner: Player | undefined;

  constructor(board: Board, playersName: string[]) {
    this.boardSize = board.getSquares().length;
    this.board = board;
    this.players = playersName.map((name, i) => new Player(i, name));
    this.round = 1;
    this.turn = 0;
    this.dice = new Dice(6);
    this.gameEnded = false;
  }

  getBoard = () => this.board.getSquares();
  getPlayers = () => this.players;
  getTurn = () => this.turn;
  getRound = () => this.round;

  getWinner = () => this.winner;

  private endGameAndSetWinner = (player: Player) => {
    this.winner = player;
    this.gameEnded = true;
  };

  private movePlayer = (newPosition: number, actualPlayer: Player) => {
    const landingPosition =
      newPosition >= this.boardSize ? this.boardSize : newPosition;

    if (landingPosition === this.boardSize) {
      this.endGameAndSetWinner(actualPlayer);
    }

    const landingSquare = this.board.getSquares()[landingPosition];
    if (landingSquare instanceof SpecialSquare) {
      const specialMoveValue = landingSquare.getValue();
      this.movePlayer(newPosition + specialMoveValue, actualPlayer);
      return;
    }

    return actualPlayer.setPosition(landingPosition);
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
      this.movePlayer(newPosition, actualPlayer);

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
