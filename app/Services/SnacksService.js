import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"

class SnacksService {
  buySnack(name) {
    let currentSnack = appState.snacks.find(s => s.name == name)
    console.log(currentSnack)
    if (appState.money >= currentSnack.price) {
      appState.money -= currentSnack.price
      appState.mySnacks = [...appState.mySnacks, currentSnack]
      saveState('mySnacks', appState.mySnacks)
    } else {
      window.alert("You don't have enough money to purchase this item.")
    }
  }
}

export const snacksService = new SnacksService()