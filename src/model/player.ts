export class Player {
  private name: string;
  private id: number;
  private position: number;

  constructor(id: number, name: string) {
    this.name = name;
    this.id = id;
    this.position = 0;
  }

  getName = () => this.name;
  getPosition = () => this.position;
}
