export class Dice {
  faces: number;
  constructor(faces: number) {
    this.faces = faces;
  }

  roll = () => Math.floor(Math.random() * this.faces + 1);
}
