<template>
  <a-layout>
    <a-layout-content>
      <div class="movie-content">
        <a-row>
          <a-col :span="24" :offset="0">
            <p>Welcome to <span>Watchlists</span></p>
            <p>
              Browse movies, add them to watchlists and share them with friends.
            </p>
            <p>
              Just click the to add a movie, the
              <img src="~/assets/icon-button/Property 1=Default.svg" alt="" />
              poster to see more details or
              <img
                src="~/assets/icon-button/Property 1=Default (1).svg"
                alt=""
              />
              to mark the movie as watched.
            </p>
          </a-col>
        </a-row>
        <a-input-search
          placeholder="Search for movies by title"
          enter-button="Search"
          size="large"
          @search="onSearch"
        >
          <a-icon
            slot="prefix"
            type="search"
            :style="{ color: 'rgba(217, 217, 217, 0.3)' }"
          />
        </a-input-search>
        <p>Popular movies right now</p>

        <a-row id="card" type="flex">
          <CardMovie :movies="movies" :limit="5" />
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
.movie-content .ant-col.ant-col-24 {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid #a41b1b;
  border-radius: 8px;
  padding: 20px;
}
.movie-content {
  padding: 50px 60px;
}
.movie-content .ant-col.ant-col-24 p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #e1e1e1;
}
.movie-content .ant-col.ant-col-24 p span {
  color: #f33f3f;
}
.movie-content .ant-col.ant-col-24 p:nth-child(2) {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #e1e1e1;
}
.movie-content .ant-col.ant-col-24 p:nth-child(3) {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 0;
  color: #e1e1e1;
}
.movie-content > span {
  border: 1px solid rgba(217, 217, 217, 0.3) !important;
  border-radius: 6px !important;
  margin-top: 40px;
}
.movie-content > span > span button {
  background: #f33f3f;
  border-radius: 6px;
  color: #000000;
  border: none;
}
.movie-content > span > span button:hover {
  background: #f56363;
  color: #000000;
}
.movie-content > p {
  font-family: 'Lato';
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  margin: 35px 0;
  color: #e1e1e1;
}
.movie-content .ant-col.ant-col-24 {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid #a41b1b;
  border-radius: 8px;
  padding: 20px;
}
.movie-content .ant-col.ant-col-24 p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #e1e1e1;
}
.movie-content .ant-col.ant-col-24 p span {
  color: #f33f3f;
}
.movie-content .ant-col.ant-col-24 p:nth-child(2) {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #e1e1e1;
}
.movie-content .ant-col.ant-col-24 p:nth-child(3) {
  font-family: 'Lato';
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 0;
  color: #e1e1e1;
}
::v-deep .movie-content > span > span > span > input {
  background: inherit;
  border: none;
  color: white;
  padding-left: 50px !important;
}
::v-deep .movie-content span.ant-input-group-addon {
  background: none;
}
::v-deep .movie-content > span > span button {
  background: #f33f3f;
  border-radius: 6px !important;
  color: #000000;
  border: none;
}
::v-deep .movie-content > span > span button:hover {
  background: #f56363;
  color: #000000;
}
.movie-content > p {
  font-family: 'Lato';
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  margin: 35px 0;
  color: #e1e1e1;
}
</style>
