export default class Manor {
  constructor(data) {
    if (!data._id || !data.bedrooms || !data.year || !data.price || !data.levels) {
      throw new Error("Invalid Manor Creation")
    }
    this.price = data.price
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.levels = data.levels
    this.description = data.description
    this._id = data._id
  }
}