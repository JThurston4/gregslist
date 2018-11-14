import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()


export default class JobsController {

  constructor() {
    // _jobsService.getJobs(this.showJobs)
  }

  showJobsBtn() {
    _jobsService.getJobs(this.showJobs)
  }

  showJobs() {
    let jobs = _jobsService.jobs
    let template = ""
    jobs.forEach(job => {
      template += `
        <div class="col-sm-4 my-1 card">
            <div class="card-body">
              <h5 class="card-title">${job.jobTitle} - ${job.company} ${job.rate}</h5>
              <div class="card-text">
                <p>Price: ${job.hours}</p>
                <p>${job.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.jobsCtrl.destroyJob('${job._id}')"></i>
                </div>
              </div>
            </div>
        </div>
      `
    })
    template +=
      `<form onsubmit = "app.controllers.jobsCtrl.addJob(event)">
        <div class="form-group">
          <label for="jobTitle">Job Title</label>
          <input type="text" name="jobTitle" />
        </div>
        <div class="form-group">
          <label for="company">Company:</label>
          <input type="text" name="company" />
        </div>
        <div class="form-group">
          <label for="rate">Rate:</label>
          <input type="number" name="rate" />
        </div>
        <div class="form-group">
          <label for="hours">hours:</label>
          <input type="number" name="hours" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea type="text" name="description"></textarea>
        </div>
        <button type="submit">Add Job</button>
    </form>`
    document.getElementById('main-content').innerHTML = template
  }

  addJob(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value,
    }
    _jobsService.addJob(formData, this.showJobs)
    form.reset()
  }

  destroyJob(id) {
    _jobsService.destroyJob(id, this.showJobs)
  }

}