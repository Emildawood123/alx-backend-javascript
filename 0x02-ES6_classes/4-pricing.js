export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get getAmount() {
    return this._amount;
  }

  set setAmount(newAmount) {
    this._amount = newAmount;
  }

  get getCurrency() {
    return this.currency;
  }

  set setCurrency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }
}
