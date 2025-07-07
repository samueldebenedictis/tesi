export class Square {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  getId = () => this.id;
  getNumber = () => this.id + 1;
  isSpecial = () => false;
}

export abstract class SpecialSquare extends Square {
  abstract getValue(): number;
  isSpecial = () => true;
}

export class MoveSquare extends SpecialSquare {
  moveValue: number;
  constructor(id: number, moveValue: number) {
    super(id);
    this.moveValue = moveValue;
  }
  getValue() {
    return this.moveValue;
  }
}
