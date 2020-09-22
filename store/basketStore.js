import storage from '~/service/storage'

export const state = () => ({
  address: '',
  items: storage.get('basket') || [],
  phone: '',
  sale: ''
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  setItems (state, data) {
    console.log(data)
    state.items = data
  }
}

export const actions = {
  async getItem ({ commit }) {
    await fetch('http://localhost:7070/api/items').then(resp => resp.json()).then((response) => {
      commit('setItems', response)
    })
  },
  async postOrder (state) {
    await fetch('http://localhost:7070/api/items').then((response) => {
      console.log(response)
    })
  }
}
