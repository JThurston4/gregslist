import Job from "../../models/job.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs"
})

/**@type {Array<Job>} */
let _jobs = []

function handleError(err) {
  throw new Error(err)
}

export default class JobsService {
  //HTTP
  destroyJob(id, showJobs) {
    _api.delete(id)
      .then(res => {
        this.getJobs(showJobs)
      })
      .catch(handleError)
  }
  //HTTP
  addJob(formData, fnToRunOnSuccess) {
    // send formData to api (SERVER)
    // wait for server to respond
    // when the server responds 
    // handle the response
    if (!formData) {
      throw new Error("You must supply form data")
    }
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }

    _api.post('', formData)
      .then(res => {
        //tell me via a callback 
        this.getJobs(fnToRunOnSuccess)
      }) // successful
      .catch(handleError)

  }
  //HTTP
  getJobs(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        // _jobs =[]
        // for (let i = 0; i < res.data.data.length; i++) {
        //   const item = res.data.data[i];
        //   _jobs.push(item)
        // }
        // ^^^^ SAME AS ABOVE
        _jobs = res.data.data.map(item => new Job(item))
        fnToRunOnSuccess()
        console.log(_jobs)
      })
      .catch(handleError)
  }

  // sync call
  get jobs() {
    console.log("someone needs the jobs")
    return _jobs
  }

}