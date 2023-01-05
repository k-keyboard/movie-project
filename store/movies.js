export const state = () => ({
    // dataMovies:[],
     options: {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'a7ec56d375mshe6a438ca0facb1bp1d4a70jsn6a473d45d30c',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      }

})

export const actions = {
     dataMovies(context){
        return  this.$axios(`${context.state.options}`)
    }
}

export const mutations = {}

export const getters = {}
