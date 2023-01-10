export const state = () => ({
    textSearch:''
    
  })
  
  export const actions = {
    
    
  }
  
  export const mutations = {
       addInput(state, searchText){
          state.textSearch = searchText
       }
  }
  
  export const getters = {
    getSearch(state){
        return state.textSearch
      }
  }
  
  
  
  