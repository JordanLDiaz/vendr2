export class Snack {
  constructor(name, price, emoji) {
    this.name = name
    this.price = price
    this.emoji = emoji
  }

  get SnackTemplate() {
    return `
    <h3 onclick="app.snacksController.buySnack('${this.name}')" class="col-2 p-2 selectable" title="${this.name}">${this.emoji}</h3>
    <h4 class="p-2 text-center">Price: $<span>${this.price}</span></h4>
    `
  }

  get MySnackTemplate() {
    return `
    <div class="col-3">
      <h3> ${this.emoji} </h3>
    </div>
    `
  }
}