import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"

function _drawHouses() {
  let content = ''
  AppState.houses.forEach(house => content += house.houseCard)
}
// Public
export class HomeController {
  constructor() {

    // console.log('This is the Home Controller')
    // console.log('Here we are', AppState.houses)
  }

  testButton() {
    Pop.success('The button Works 😎')
  }


}