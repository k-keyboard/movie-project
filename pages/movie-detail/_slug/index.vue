<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="movie-detail"
      >
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
                <button>Add to Watchlist</button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <p id="related-movies">Related Movies</p>

        <a-row id="card" type="flex">
          <list-data :limit="5"> </list-data>
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import ListData from '~/components/ListData.vue'
const axios = require('axios')
export default {
  components: { ListData },
  data() {
    return {
      id: this.$route.params.slug,
      movieDetail: [],
    }
  },
  mounted() {
    const id = this.$route.params.slug
    const options = {
      method: 'GET',
      url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
      headers: {
        'X-RapidAPI-Key': '5364e43201msh7e05079eee5843cp14d301jsn99dfbf47e6b6',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then((response) => {
        this.movieDetail = response.data
        console.log(this.movieDetail)
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
<style>
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
  /* border: #f33f3f solid 1px; */
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
.ant-row-flex.ant-row-flex-start
  > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2
  > button {
  background: #f33f3f;
  border-radius: 4px;
  border: none;
  padding: 23px 32px !important;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  cursor: pointer;
}
.ant-row-flex.ant-row-flex-start > .ant-col.ant-col-12 > button:hover {
  background: #f56363;
  border: #f56363;
  transition: all 0.3s;
}

div#card {
  margin: 0px !important;
  /* border: #e1e1e1 1px solid; */
  grid-gap: 60px;
}
.ant-card-bordered {
  border: none;
}
div#card .ant-col {
  max-width: 150px;
  min-width: 150px;
  /* display: table-cell; */
}
.ant-card {
  background: #1f1f1f;
  height: 100% !important;
  color: #e1e1e1;
}
.ant-card-body {
  padding: 5px;
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
.ant-card-body > p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
  padding-bottom: 10px;
  margin-bottom: 0px !important;
}
.ant-menu-inline {
  width: 247px;
  margin-left: 30px;
}
.btn-profile {
  height: 45px;
  width: calc(100% - 60px);
  margin-left: 30px;
  align-content: flex-end;
  color: #e1e1e1;
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
  div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
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
