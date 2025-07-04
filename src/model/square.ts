export class Square {
  private id: number;

  constructor(id: number) {
    this.id = id;
  }

  getId = () => this.id;
  getNumber = () => this.id + 1;
}
