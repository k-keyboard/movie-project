export const state = () => ({
  dataProfile: [
    {
      name:'keyboard Kay',
      email:'keyboard@gmail.com',
      password:123456
    }
  ],
  
})

export const actions = {
  addData(context){
    context.commit('setData', this.getters.getData.dataProfile.unshift)
  },
  
  
}

export const mutations = {
    setData(state, object){
      state.dataProfile = object
    },
    
}

export const getters = {
  getData(state){
    return state.dataProfile
  }
}



