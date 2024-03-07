export default class Car {
  constructor(brand, model, color) {
    this._brand = brand;
    this._model = model;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
