class Storage {
  jsonParse = (data) => {
    if (!data) {
      return {}
    }
    return JSON.parse(data)
  }

  get = (name) => {
    console.log('get')
    return this.jsonParse(localStorage.getItem(name))
  }

  set = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data))
  }
}

const storage = new Storage()

export default storage
