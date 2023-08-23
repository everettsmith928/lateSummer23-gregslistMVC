import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";
import { HouseView } from "./views/HouseView.js";
import { JobView } from "./views/JobView.js";

export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    // NOTE this is essentially the HTML 'template' that is draw to the about page but has been abstracted to its own file in the views folder
    view: AboutView
  },
  {
    path: '#/cars',
    // NOTE controller is the interface layer that we want the user to interact with 
    controller: CarsController,
    // NOTE view is what is injected to the HTML: what we see on the page
    view: CarsView
  },

  // TODO for the students: start here for houses page
  {
    path: '#/houses',
    controller: HousesController,
    view: HouseView
  },
  {
    path: '#/jobs',
    controller: JobsController,
    view: JobView
  }
]