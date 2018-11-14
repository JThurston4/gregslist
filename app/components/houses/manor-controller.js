import ManorService from "./manor-service.js";

let _manorService = new ManorService

export default class ManorController {
  constructor() {
    console.log("manor controller checking in")
  }
  showManorBtn() {
    _manorService.getManors(this.showManor)
  }

  showManor() {
    let manor = _manorService.manors
    let template = ""
    manor.forEach(manor => {
      template += `
        <div class="col-sm-4 my-1 card">
          <div class="">
            <img class="card-img-top" src="${manor.imgUrl}">
            <div class="card-body">
              <h5 class="card-title">${manor.bedrooms} - ${manor.bathrooms} ${manor.year}</h5>
              <div class="card-text">
                <p>Price: ${manor.price}</p>
                <p>${manor.description}</p>
                <div>
                  <i class="fa fa-fw fa-trash action muted" onclick="app.controllers.manorCtrl.destroyManor('${manor._id}')"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    })
    template +=
      `<form onsubmit = "app.controllers.manorCtrl.addManor(event)">
        <div class="form-group">
          <label for="bedrooms">Bedrooms</label>
          <input type="text" name="bedrooms" />
        </div>
        <div class="form-group">
          <label for="bathrooms">Bathrooms:</label>
          <input type="text" name="bathrooms" />
        </div>
        <div class="form-group">
          <label for="year">Year:</label>
          <input type="number" name="year" />
        </div>
        <div class="form-group">
          <label for="PRICE">Price:</label>
          <input type="number" name="PRICE" />
        </div>
        <div class="form-group">
          <label for="levels">Levels:</label>
          <input type="number" name="levels" />
        </div>
        <div class="form-group">
          <label for="imgUrl">Image:</label>
          <input type="url" name="imgUrl" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea type="text" name="description"></textarea>
        </div>
        <button type="submit">Add Manor</button>
    </form>`
    document.getElementById('main-content').innerHTML = template
  }

  addManor(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      year: form.year.value,
      price: form.PRICE.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      levels: form.levels.value
    }
    _manorService.addManor(formData, this.showManor)
    form.reset()
  }

  destroyManor(id) {
    _manorService.destroyManor(id, this.showManor)
  }

}
