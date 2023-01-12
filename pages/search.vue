<template>
  <a-layout @load="searchMovie()">
    <a-layout-content>
      <div v-if="loadingData" class="movie-search">
        <p class="clear-history">Search Results: {{ searchTitleMovie }}</p>
        <a-row id="card" type="flex">
          <CardMovie :movies="movies" />
        </a-row>
      </div>
      <div v-else class="movie-detail middle-screen">
        <a-icon
          type="loading"
          :style="{ fontSize: '48px', color: '#f33f3f' }"
        />
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
      loadingData: false,
    }
  },
  computed: {
    searchTitleMovie() {
      return this.$store.state.search.textSearch
    },
    check() {
      return this.$store.state.search.check
    },
  },
  watch: {
    searchTitleMovie(newSearchTitleMovie, oldSearchTitleMovie) {
      this.loadingData = false
      this.searchMovie()
    },
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    const vm = this
    const axios = require('axios')
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '5364e43201msh7e05079eee5843cp14d301jsn99dfbf47e6b6',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }
    await axios
      .request(options)
      .then(function (response) {
        const movieAll = response.data
        const movieSearch = movieAll.filter((movie) =>
          movie.title.includes(vm.searchTitleMovie)
        )
        vm.movies = movieSearch
        setTimeout(() => {
          vm.loadingData = true
        }, 500)
      })
      .catch(function (error) {
        console.error(error)
      })
  },
  methods: {
    async searchMovie() {
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
      await axios
        .request(options)
        .then(function (response) {
          const movieAll = response.data
          const movieSearch = movieAll.filter((movie) =>
            movie.title.includes(vm.searchTitleMovie)
          )
          vm.movies = movieSearch
          setTimeout(() => {
            vm.loadingData = true
          }, 500)
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
