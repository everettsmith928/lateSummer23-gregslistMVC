import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawJobs() {
  let content = ''
  AppState.jobs.forEach(job => content += job.jobCard)
  setHTML('jobs', content)
}
export class JobsController {
  constructor() {
    console.log('Working the Jobs Area')
    _drawJobs()
  }

}