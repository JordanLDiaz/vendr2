import { appState } from "../AppState.js";
import { moniesService } from "../Services/MoniesService.js";
import { setText } from "../Utils/Writer.js";

function _drawMoney() {
  setText('money', appState.money)
}

export class MoniesController {
  constructor() {
    appState.on('money', _drawMoney)
    _drawMoney()
  }

  getMoney() {
    moniesService.getMoney()
    _drawMoney()
  }
}