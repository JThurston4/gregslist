import AutosController from "./components/autos/autos-controller.js";
import ManorController from "./components/houses/manor-controller.js";
import JobsController from "./components/jobs/jobs-controller.js";

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      manorCtrl: new ManorController(),
      jobsCtrl: new JobsController()
      // RealEstatesController,
      // JobsController
    }
  }
}


window.app = new App()
