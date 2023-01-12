<template>
  <a-layout >
    <a-layout-content>
      <div class="movie-search">
        <p class="clear-history">Search Results: {{ searchTitleMovie }}</p>
        <a-row id="card" type="flex">
          <CardMovie :movies="movies" />
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import CardMovie from '~/components/CardMovie.vue'
export default {
  components: { CardMovie },
  data() {
    return {
      movies: [],
    }
  },
  computed: {
    searchTitleMovie() {
      return this.$store.state.search.textSearch
    },
    check(){
      return this.$store.state.search.check
    }
  },
  watch: {
    searchTitleMovie(newSearchTitleMovie, oldSearchTitleMovie) {
      this.searchMovie()
    },
    
      
    
  },
  methods: {
    searchMovie() {
      const vm = this
      const axios = require('axios')
      const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key':
            '5364e43201msh7e05079eee5843cp14d301jsn99dfbf47e6b6',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      }
      axios
        .request(options)
        .then(function (response) {
          const movieAll = response.data
          const movieSearch = movieAll.filter((movie) =>
            movie.title.includes(vm.searchTitleMovie)
          )
          vm.movies = movieSearch
        })
        .catch(function (error) {
          console.error(error)
        })
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.movie-search {
  padding: 50px 60px;
}
.movie-search > p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 46px;
  color: #e1e1e1;
}
</style>
