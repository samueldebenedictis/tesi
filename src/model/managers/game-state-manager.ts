import type { Player } from "../player";

/**
 * Gestisce lo stato del gioco e le condizioni di vittoria.
 * Controlla se il gioco è terminato e chi è il vincitore.
 */
export class GameStateManager {
  private gameEnded = false;
  private winner?: Player;

  /**
   * Crea un nuovo gestore dello stato del gioco.
   * @param boardSize - Dimensione del tabellone (numero di caselle)
   */
  constructor(private boardSize: number) {}

  /**
   * Controlla se il giocatore ha raggiunto la condizione di vittoria.
   * Se la posizione è uguale o superiore alla dimensione del tabellone, il giocatore vince.
   * @param player - Il giocatore da controllare
   * @param position - La posizione raggiunta dal giocatore
   * @returns True se il giocatore ha vinto, false altrimenti
   */
  checkWinCondition(player: Player, position: number): boolean {
    if (position >= this.boardSize) {
      this.endGame(player);
      return true;
    }
    return false;
  }

  /**
   * Termina il gioco e imposta il vincitore.
   * @param winner - Il giocatore vincitore
   */
  private endGame(winner: Player): void {
    this.winner = winner;
    this.gameEnded = true;
  }

  /**
   * Verifica se il gioco è terminato.
   * @returns True se il gioco è terminato, false altrimenti
   */
  isGameEnded(): boolean {
    return this.gameEnded;
  }

  /**
   * Restituisce il vincitore del gioco, se presente.
   * @returns Il giocatore vincitore o undefined se il gioco non è ancora terminato
   */
  getWinner(): Player | undefined {
    return this.winner;
  }

  /**
   * Forza la fine del gioco con un vincitore specifico.
   * Utilizzato per situazioni speciali dove il gioco deve terminare immediatamente.
   * @param winner - Il giocatore vincitore
   */
  forceEndGame(winner: Player): void {
    this.endGame(winner);
  }
}
