export const state = () => ({
  textSearch: '',
  check: false,
})

export const actions = {}

export const mutations = {
  addInput(state, searchText) {
    state.textSearch = searchText
  },
  addCheck(state) {
    state.check = !state.check
  },
}

export const getters = {
  getSearch(state) {
    return state.textSearch
  },
}
