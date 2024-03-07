export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get getSqft() {
    return this._sqft;
  }

  set setSqft(newSqft) {
    this._sqft = newSqft;
  }
}
