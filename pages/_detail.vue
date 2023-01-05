<template>
  <a-layout>
    <a-layout-content>
      <div class="movie-detail">
        <a-row>
          <a-col
            id="image-detail"
            :xs="{ span: 24, offset: 1 }"
            :lg="{ span: 8, offset: 2 }"
          >
            <img :src="`${movieDetail.image}`" alt="" width="100%" />
          </a-col>
          <a-col
            id="text-detail"
            :xs="{ span: 24, offset: 1 }"
            :lg="{ span: 14, offset: 2 }"
          >
            <p>{{ movieDetail.title }}({{ movieDetail.year }})</p>
            <p>
              <font v-for="(value, index) in movieDetail.genre" :key="index">
                {{ value
                }}<span v-if="index + 1 < movieDetail.genre.length"
                  >,&nbsp;</span
                >
              </font>
              <span>&middot;</span>
              2h 11m
            </p>
            <p>Overview</p>
            <p>
              {{ movieDetail.description }}
            </p>
            <a-row type="flex" justify="start">
              <a-col :xs="{ span: 24, offset: 1 }" :lg="{ span: 4, offset: 2 }">
                <div class="score">
                  <p>Score</p>
                  <p>{{ movieDetail.rating * 10 }}</p>
                </div>
              </a-col>
              <a-col
                :xs="{ span: 24, offset: 1 }"
                :lg="{ span: 12, offset: 2 }"
              >
                <a-button id="add">Add to Watchlist</a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <p id="related-movies">Related Movies</p>

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
      id: this.$route.params.detail,
      movieDetail: [],
      movies: [],
    }
  },
  mounted() {
    const id = this.$route.params.detail

    const axios1 = require('axios')
    const options = {
      method: 'GET',
      url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
      headers: {
        'X-RapidAPI-Key': 'a7ec56d375mshe6a438ca0facb1bp1d4a70jsn6a473d45d30c',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }

    axios1
      .request(options)
      .then((response) => {
        this.movieDetail = response.data
        console.log(this.movieDetail)
      })
      .catch(function (error) {
        console.error(error)
      })

    const vm = this
    const axios2 = require('axios')
    const options2 = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': 'a7ec56d375mshe6a438ca0facb1bp1d4a70jsn6a473d45d30c',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }
    axios2
      .request(options2)
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
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.movie-detail {
  padding: 50px 60px;
}
#image-detail {
  margin-right: 45px;
}
#image-detail img {
  border-radius: 6px;
}
#text-detail > p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  padding-top: 32px;
  margin: 0;
  color: #e1e1e1;
}
#text-detail > p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-top: 10px;
  margin: 0;
  color: #e1e1e1;
}
#text-detail > p:nth-child(3) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-top: 50px;
  margin: 0;
  color: #ffffff;
}
#text-detail > p:nth-child(2) > span {
  margin: 0 15px;
}
#text-detail > p:nth-child(4) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-top: 10px;
  max-width: 580px;
  margin: 0;
  color: #e1e1e1;
}
.ant-row-flex.ant-row-flex-start {
  margin: 0;
  padding-top: 56px;
  align-content: center;
}
.ant-col-xs-offset-1 {
  margin-left: 0;
}
div.score {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid #a41b1b;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  min-width: 81px;
  height: auto;
  margin: 0;
}
div.score > p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  color: #e1e1e1;
}
div.score > p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #f33f3f;
  margin: 0;
  margin-top: 15px;
}
.ant-row-flex.ant-row-flex-start
  > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2 {
  margin-left: 0;
  margin-top: 40px;
  display: flex;
  align-items: center;
}
button#add {
  background: #f33f3f;
  border-radius: 4px;
  height: 63px;
  border: none;
  padding: 23px 32px !important;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  cursor: pointer;
}
div#card {
  margin: 0px !important;
}
.ant-card-bordered {
  border: none;
}
div#card .ant-col {
  max-width: 150px;
  min-width: 150px;
}
.ant-card {
  background: #1f1f1f;
  height: 100% !important;
  color: #e1e1e1;
}

.ant-col > img#lable {
  position: absolute;
  z-index: 999;
  cursor: pointer;
}
div#score {
  display: flex;
  flex-direction: row;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  align-content: flex-start;
  justify-content: flex-end;
}
div#score > div:nth-child(1) {
  font-size: 16px;
  line-height: 19px;
}
div#score > div:nth-child(2) {
  font-size: 16px;
  line-height: 19px;
  margin-left: 5px;
}
div#score > div:nth-child(3) {
  font-size: 10px;
  line-height: 12px;
}
.movie-detail > p#related-movies {
  margin-top: 45px;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
  color: #ffffff;
}
@media only screen and (min-device-width: 992px) {
  .ant-col-lg-offset-2,
  .ant-col-xs-offset-1 {
    margin-left: 0 !important;
  }
  .ant-row-flex.ant-row-flex-start
    > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2 {
    margin-left: 90px !important;
    margin-top: 0;
    display: flex;
    align-items: center;
  }
}
</style>
