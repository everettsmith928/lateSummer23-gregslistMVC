import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { saveState } from "../utils/Store.js"

function _saveHouses() {
  saveState('houses', AppState.houses)
}
class HouseService {
  _drawHouses() {
    console.log('test')
  }

  createHouse(formData) {
    console.log('creating house', formData)
    let newHouse = new House(formData)
    AppState.houses.push(newHouse)
    AppState.emit('houses')
    console.log(AppState.houses)
  }

  deleteHouse(houseId) {
    console.log('deleting', houseId)
    let afterHouseRemoved = AppState.houses.filter(house => house.id != houseId)
    AppState.houses = afterHouseRemoved
    _saveHouses()
  }
}

export const houseService = new HouseService()