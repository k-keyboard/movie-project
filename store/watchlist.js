export const state = () => ({
  dataWatchlist: [],
})

export const mutations = {
  addData(state, object) {
    state.dataWatchlist.push({
      name: object.name,
      description: object.description,
      watchlistID: Math.random().toString().slice(2, 11),
    })
  },
  updateData(state, object) {
    state.dataWatchlist[object.idList].name = object.name
    state.dataWatchlist[object.idList].description = object.description
    alert('Update Watchlist Success')
  },
  deleteData(state, id) {
    const objWithIdIndex = state.dataWatchlist.findIndex((obj) => obj.watchlistID === id)
    state.dataWatchlist.splice(objWithIdIndex, 1)
    alert('Delete Watchlist Success')
  },
}

export const actions = {
  addData(context) {
    context.commit('setData', this.getters.getData.dataWatchlist)
  },
  updateLogin(context) {},
}

export const getters = {
  dataWatchlist: (state) => state.dataWatchlist,
}
