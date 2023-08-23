import { generateId } from "../utils/generateId.js"



export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
  get houseCard() {
    return ` <div class="col-3 elevation-3 p-3 bg-light g-2">
    <h1>price: ${this.price}</h1>
    <h2>year: ${this.year}</h2>
    <h2>bedrooms: ${this.bedrooms}</h2>
    <h2>bathrooms: ${this.bathrooms}</h2>
    <h2>Square Footage: ${this.sqft}</h2>
    <p>Description: ${this.description}</p>
    <img src=${this.imgUrl} class="img-fluid">
    <div class="text-end py-2">
      <button class="btn btn-danger" onclick="app.HousesController.deleteHouse('${this.id}')">Remove House <i class="mdi mdi-delete"></i> </button>
    </div>
    
  </div>`
  }
}