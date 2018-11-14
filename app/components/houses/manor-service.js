import Manor from "../../models/manor.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses"
})

/**@type {Array<Manor>} */
let _manors = []

function handleError(err) {
  throw new Error(err)
}

export default class ManorService {
  //HTTP
  destroyManor(id, showManors) {
    _api.delete(id)
      .then(res => {
        this.getManors(showManors)
      })
      .catch(handleError)
  }
  //HTTP
  addManor(formData, fnToRunOnSuccess) {
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
        this.getManors(fnToRunOnSuccess)
      }) // successful
      .catch(handleError)

  }
  //HTTP
  getManors(fnToRunOnSuccess) {
    if (typeof fnToRunOnSuccess != 'function') {
      throw new Error("You must supply a success function")
    }
    _api.get('')
      .then(res => {
        // _manors =[]
        // for (let i = 0; i < res.data.data.length; i++) {
        //   const item = res.data.data[i];
        //   _manors.push(item)
        // }
        // ^^^^ SAME AS ABOVE

        _manors = res.data.data.map(item => new Manor(item))
        fnToRunOnSuccess()
        console.log(_manors)
      })
      .catch(handleError)
  }

  // sync call
  get manors() {
    console.log("someone needs the manors")
    return _manors
  }

}