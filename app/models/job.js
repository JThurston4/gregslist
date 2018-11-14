export default class Job {
  constructor(data) {
    if (!data._id || !data.company || !data.jobTitle || !data.rate || !data.hours) {
      throw new Error("Invalid Job Creation")
    }
    this.hours = data.hours
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.description = data.description
    this._id = data._id
  }
}