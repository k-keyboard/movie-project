<template>
  <a-layout>
    <a-layout-content>
      <div class="movie-search">
        <p class="clear-history">Search Results: {{ search }}</p>

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
  props: {
    search: {
      type: String,
      default: 'movies by Tom Cruise',
    },
  },
  data() {
    return {
      movies: [],
    }
  },
  mounted() {
    const vm = this
    const axios = require('axios')
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': 'a7ec56d375mshe6a438ca0facb1bp1d4a70jsn6a473d45d30c',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }
    axios
      .request(options)
      .then(function (response) {
        vm.movies = response.data
      })
      .catch(function (error) {
        console.error(error)
      })
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    viewDetail(id) {
      this.$router.push('/' + id)
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
