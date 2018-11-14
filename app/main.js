import AutosController from "./components/autos/autos-controller.js";
import ManorController from "./components/houses/manor-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      manorCtrl: new ManorController()
      // RealEstatesController,
      // JobsController
    }
  }
}


window.app = new App()
