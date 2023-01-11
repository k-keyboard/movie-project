export const state = () => ({
  dataWatchlist: [
    {
      name: 'Test Watchlist 01',
      description: 'test system list data Watchlist',
      watchlistID: '123456',
      movies:[],
      show:true
    },
    {
      name: 'Test Watchlist 02',
      description: 'test system list data Watchlist',
      watchlistID: '123456',
      movies:[],
      show:true
    },
  ],
})

export const mutations = {
  addData(state, object) {
    state.dataWatchlist.push({
      name: object.name,
      description: object.description,
      watchlistID: Math.random().toString().slice(2, 11),
      movies:[],
      show:true
    })
  },
  checkShowFalse(state, id){
    state.dataWatchlist[id].show = false
  },
  checkShowTrue(state, id){
    state.dataWatchlist[id].show = true
  },
  changeMovieLable(state, data) {
    state.dataWatchlist[data[0].indexWatchlist].movies[data[0].indexMovie].lable = !state.dataWatchlist[data[0].indexWatchlist].movies[data[0].indexMovie].lable

    // alert('Checked Watchlist Success')

  },
  updateData(state, object) {
    state.dataWatchlist[object.idList].name = object.name
    state.dataWatchlist[object.idList].description = object.description
    alert('Update Watchlist Success')
  },
  addMovieToMylist(state, object) {
    console.log('OBJ = ',object);
    state.dataWatchlist[object[0].indexListID].movies.push(object[1])
    alert('Add Movie to Watchlist Success')
    console.log('add = ',state.dataWatchlist[object.indexListID]);
  },
  deleteData(state, id) {
    const objWithIdIndex = state.dataWatchlist.findIndex(
      (obj) => obj.watchlistID === id
    )
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
