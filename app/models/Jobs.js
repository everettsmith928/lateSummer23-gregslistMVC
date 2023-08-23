import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { generateId } from "../utils/generateId.js"

function _drawJobs() {
  let content = ''
  AppState.jobs.forEach(job => content += 'something')
  setHTML('jobs', content)

}
export class Job {
  constructor(data) {
    this.id = data.id || generateId()
    this.job = data.job
    this.bounty = data.bounty
    this.description = data.description
  }

  get jobCard() {
    return `<h1>${this.job} + ${this.bounty} + ${this.description}</h1>`
  }
}