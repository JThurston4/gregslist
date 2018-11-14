export default class Job {
  constructor(data) {

    this.hours = data.hours
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.description = data.description
    this._id = data._id
  }
}