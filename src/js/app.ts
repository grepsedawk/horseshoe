require("@rails/ujs").start();

import * as Turbo from "@hotwired/turbo";

import { Application } from "@hotwired/stimulus";

// import MyController from "./controllers/my_controller"

window.Stimulus = Application.start();
// Stimulus.register("my-controller", MyController)
