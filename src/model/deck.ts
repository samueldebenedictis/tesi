import type { Card } from "./card";

export class Deck {
  cards: Card[];
  usedCards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
    this.usedCards = [];
  }

  shuffle = () => {
    const unshuffled = this.cards.map((el) => ({
      card: el,
      value: Math.random(),
    }));
    const shuffled = unshuffled.sort((a, b) => a.value - b.value);
    this.cards = shuffled.map((el) => el.card);
  };

  updateCounter = () => {};

  draw = () => {
    if (this.cards.length === 0) {
      this.cards = this.usedCards;
      this.shuffle();
    }
    const card = this.cards.pop();
    this.usedCards.push(card as Card);
    return card;
  };
}
