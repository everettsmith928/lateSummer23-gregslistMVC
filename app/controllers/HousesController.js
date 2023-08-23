import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawHouses() {
  let content = ''
  AppState.houses.forEach(house => content += house.houseCard)
  // console.log('drawing houses')
  setHTML('houses', content)
}

export class HousesController {
  constructor() {
    console.log('Running the Houses Controller')
    _drawHouses()
    AppState.on('houses', _drawHouses)
  }

  createHouse() {

    window.event.preventDefault()
    const formEvent = window.event.target
    console.log('Testing', formEvent)
    const formData = getFormData(formEvent)
    // formEvent.reset
    houseService.createHouse(formData)
  }

  async deleteHouse(houseId) {
    // NOTE we use await here to WAIT for the response before we run the next lines of code
    if (await Pop.confirm("Are you sure you want to remove this car?")) {
      console.log('deleting', houseId)
      houseService.deleteHouse(houseId)
    }
  }
}