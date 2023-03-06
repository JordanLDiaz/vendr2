import { appState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawSnacks() {
  let template = ''
  appState.snacks.forEach(s => template += s.SnackTemplate)
  setHTML('snacks', template)
  console.log('snacks drawn')
}

function _drawMySnacks() {
  let template = ''
  appState.mySnacks.forEach(s => template += s.MySnackTemplate)
  setHTML('my-snacks', template)
}

export class SnacksController {

  constructor() {
    appState.on('mySnacks', _drawMySnacks)
    _drawSnacks()
    _drawMySnacks()
  }

  buySnack(name) {
    snacksService.buySnack(name)
    console.log(name)
  }
}