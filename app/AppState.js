import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Job } from "./models/Jobs.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  cars = loadState('cars', [Car])

  houses = loadState('houses', [House])
  jobs = [
    new Job({ bounty: 100, job: 'raking', description: 'Something' }),
    new Job({ bounty: 200, job: 'mowing', description: 'Something' }),
    new Job({ bounty: 300, job: 'driving', description: 'Something' })
  ]

  // [
  //   // new House({ year: '1974', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 375000, description: 'something', imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' }),
  //   // new House({ year: '1955', bedrooms: 3, bathrooms: 1.5, sqft: 1400, price: 375000, description: 'something', imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' }),
  //   // new House({ year: '1990', bedrooms: 3, bathrooms: 2.5, sqft: 100, price: 375000, description: 'something', imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' }),
  //   // new House({ year: '1980', bedrooms: 3, bathrooms: 2.5, sqft: 100, price: 35000, description: 'something', imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80' })
  // ]

  // cars = [

  //   new Car({
  //     make: "BMW",
  //     model: "335i",
  //     year: 1973,
  //     imgUrl: "https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627",
  //     price: 50000,
  //     isNew: true,
  //     description: "Mint",
  //     color: "silver"
  //   }),
  //   new Car(
  //     {
  //       make: "Mazda",
  //       model: "Miata",
  //       year: 1997,
  //       imgUrl: "https://bringatrailer.com/wp-content/uploads/2022/06/1997_mazda_mx-5-miata_img_1612-5-84972.jpg?fit=940%2C626",
  //       price: 8000,
  //       isNew: false,
  //       description: "Perfect for cruisin' down the coast",
  //       color: "black"
  //     }
  //   ),
  //   new Car(
  //     {
  //       make: "Muscle",
  //       model: "Car",
  //       year: 2043,
  //       imgUrl: "https://media.tenor.com/EgMfjYtMD3oAAAAC/car-jump.gif",
  //       price: 900000,
  //       isNew: false,
  //       description: "Getcha one of these bad boys",
  //       color: "red"
  //     }
  //   )

  // ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
