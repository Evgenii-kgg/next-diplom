import storage from '~/service/storage'

export const state = () => ({
  address: '',
  items: storage.get('basket') || [],
  phone: ''
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
  addItems (state) {
    // const similar = state.items.find(item => (item.id === action.payload.id && item.size === action.payload.size))
  },
  async getItem ({ commit }) {
    await fetch('http://localhost:7070/api/items').then(resp => resp.json()).then((response) => {
      commit('setItems', response)
    })
  }
}
