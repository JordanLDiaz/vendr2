import { MoniesController } from "./Controllers/MoniesController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController();
  moniesController = new MoniesController();
}

window["app"] = new App();
