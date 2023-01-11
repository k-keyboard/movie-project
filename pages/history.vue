<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="movie-history"
      >
        <p class="clear-history">
          <a @click="clearHistory">Clear history</a>
        </p>

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
  mounted() {
    const vm = this
    const axios = require('axios')
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key':'5364e43201msh7e05079eee5843cp14d301jsn99dfbf47e6b6',
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
    clearHistory() {
      this.movies = []
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.movie-history > p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #f33f3f;
  text-align: right;
  margin: 0 -30px;
  padding-bottom: 40px;
}
p > a {
  color: #f33f3f;
}
</style>
