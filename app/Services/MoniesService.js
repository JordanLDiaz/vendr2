import { appState } from "../AppState.js";

class MoniesService {
  getMoney() {
    console.log('money before add', appState.money)
    appState.money += .25
    console.log('money after add', appState.money)
  }

}

export const moniesService = new MoniesService();