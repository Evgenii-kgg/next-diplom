export const state = () => ({
  count: 0,
  search: '',
  searchGlobal: '',
  searchCollection: [],
  offset: [],
  page: 1,
  items: [],
  top: [],
  categories: [],
  currentCategory: '1',
  lastPage: false,
  product: {},
  snackbars: []
})

export const mutations = {
  increment (state, data) {
    state.count = data
  },
  updateInput (state, message) {
    state.searchGlobal = message
  },
  setItems (state, data) {
    console.log(data)
    state.items = data
  },
  setTop (state, data) {
    console.log(data)
    state.top = data
  },
  setProduct (state, data) {
    console.log(data)
    state.product = data
  },
  setCategories (state, data) {
    state.categories = data
  },
  SET_SNACKBAR (state, snackbar) {
    state.snackbars = state.snackbars.concat(snackbar)
  }
}

export const actions = {
  async getItem ({ commit }) {
    await fetch('http://localhost:7070/api/items').then(resp => resp.json()).then((response) => {
      commit('setItems', response)
    })
  },
  getCategories ({ commit }) {
    fetch('http://localhost:7070/api/categories').then(resp => resp.json()).then((response) => {
      commit('setCategories', response)
    })
  },
  setCategories ({ commit }, state) {
    fetch(`http://localhost:7070/api/items?categoryId=${state}`).then(resp => resp.json()).then((response) => {
      commit('setItems', response)
    })
  },
  async getSearch ({ commit, state }) {
    console.log(state)

    await fetch(`http://localhost:7070/api/items?q=${state.searchGlobal}`).then(resp => resp.json()).then((response) => {
      commit('setItems', response)
    })
  },
  async getProduct ({ commit }, id) {
    await fetch(`http://localhost:7070/api/items/${id}`).then(resp => resp.json()).then((response) => {
      console.log('response', response)
      commit('setProduct', response)
    })
  },
  async getTop ({ commit }) {
    await fetch('http://localhost:7070/api/top-sales').then(resp => resp.json()).then((response) => {
      commit('setTop', response)
    })
  },
  setSnackbar ({ commit }, snackbar) {
    snackbar.showing = true
    snackbar.color = snackbar.color || 'success'
    commit('SET_SNACKBAR', snackbar)
  }
}
