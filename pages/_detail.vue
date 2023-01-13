<template>
  <a-layout>
    <a-layout-content>
      <div v-if="loadingData" class="movie-detail">
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
                <a-button
                  v-if="checkLoginIndex !== ''"
                  id="btnRedhover"
                  class="add-watchlist"
                  @click="() => (modal2Visible = true)"
                >
                  Add to Watchlist
                </a-button>
                <a-modal
                  v-model="modal2Visible"
                  class="modal-add-watchlist"
                  title="Add Movie"
                  centered
                  @ok="() => (modal2Visible = false)"
                >
                  <p class="modal-title-watchlist">
                    Add Movie:
                    <span>{{ movieDetail.title }}</span>
                  </p>
                  <p>To watchlist:</p>
                  <p>
                    <a-button
                      v-for="(watchlist, index) in dataWatchlist"
                      v-show="watchlist.show"
                      :key="index"
                      class="btn-watchlist"
                      block
                      size="large"
                      @click="addDataMovie(index)"
                    >
                      <img src="~/assets/icon-button/Group 64.svg" alt="" />
                      {{ watchlist.name }}
                    </a-button>
                    <a-button
                      id="btnRedhover"
                      class="btn-red"
                      block
                      size="large"
                      @click="() => setModal1Visible(true)"
                    >
                      <span class="icon">+</span> New watchlist
                    </a-button>
                    <a-modal
                      v-model="modal1Visible"
                      class="modal-create-watchlist"
                      title="Add Movie"
                      centered
                      @ok="() => (modal1Visible = false)"
                    >
                      <p>
                        <span>Create new watchlist</span>
                      </p>
                      <div id="components-form-demo-vuex">
                        <a-form :form="form" @submit="handleSubmit">
                          <a-row
                            type="flex"
                            justify="space-between"
                            align="bottom"
                          >
                            <a-col :span="16">
                              <a-form-item label="name">
                                <a-input
                                  v-decorator="[
                                    'name',
                                    {
                                      rules: [
                                        {
                                          required: true,
                                          message: 'Please input your name!',
                                          whitespace: true,
                                        },
                                      ],
                                    },
                                  ]"
                                />
                              </a-form-item>
                              <a-form-item label="Description">
                                <a-textarea
                                  v-decorator="[
                                    'description',
                                    {
                                      rules: [
                                        {
                                          required: true,
                                          message:
                                            'Please input your description!',
                                        },
                                      ],
                                    },
                                  ]"
                                  :rows="10"
                                />
                              </a-form-item>
                            </a-col>
                            <a-col :span="8" class="btn-modal">
                              <a @click="() => (modal1Visible = false)"
                                >cancel</a
                              >
                              <a-button
                                id="btnRedhover"
                                html-type="submit"
                                block
                                size="large"
                              >
                                save
                              </a-button>
                            </a-col>
                          </a-row>
                        </a-form>
                      </div>
                    </a-modal>
                  </p>
                </a-modal>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <p id="related-movies">Related Movies</p>

        <a-row id="card" type="flex">
          <CardMovie :movies="movies" :limit="5" />
        </a-row>
      </div>
      <div v-else class="movie-detail middle-screen">
        <a-icon type="loading" :style="{ fontSize: '48px', color: '#f33f3f' }" />
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
      loadingData: false,
      id: this.$route.params.detail,
      movieDetail: [],
      movies: [],
      movieDetailAddWatchlist: [],
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      modal1Visible: false,
      modal2Visible: false,
    }
  },
  computed: {
    dataProfile() {
      return this.$store.state.profile.dataProfile
    },
    checkLoginIndex() {
      return this.$store.state.profile.dataProfileIndex
    },
    dataWatchlist() {
      const checkShow = this.$store.state.watchlist.dataWatchlist
      for (let i = 0; i < checkShow.length; i++) {
        if (checkShow[i].movies.length > 0) {
          const movieInList =
            this.$store.state.watchlist.dataWatchlist[i].movies
          for (let j = 0; j < movieInList.length; j++) {
            if (movieInList[j].id === this.movieDetail.id) {
              this.$store.commit('watchlist/checkShowFalse', i)
            } else {
              this.$store.commit('watchlist/checkShowTrue', i)
            }
          }
        } else {
          this.$store.commit('watchlist/checkShowTrue', i)
        }
      }

      return this.$store.state.watchlist.dataWatchlist
    },
    dataLogin() {
      const index = this.$store.state.profile.dataProfileIndex
      if (index !== '') {
        return this.$store.state.profile.dataProfile[index]
      } else {
        return 0
      }
    },
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
    const id = this.$route.params.detail
    const vm = this
    const axios1 = require('axios')
    const options = {
      method: 'GET',
      url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
      headers: {
        'X-RapidAPI-Key': 'a7ec56d375mshe6a438ca0facb1bp1d4a70jsn6a473d45d30c',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }

    await axios1
      .request(options)
      .then((response) => {
        this.movieDetail = response.data
        console.log(this.movieDetail)
        vm.movieDetailAddWatchlist.push({
          id: `${this.movieDetail.id}`,
          title: `${this.movieDetail.title}`,
          year: `${this.movieDetail.year}`,
          rating: `${this.movieDetail.rating}`,
          image: `${this.movieDetail.image}`,
          lable: false,
        })
      })
      .catch(function (error) {
        console.error(error)
      })

    const axios2 = require('axios')
    const options2 = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '5364e43201msh7e05079eee5843cp14d301jsn99dfbf47e6b6',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    }
    await axios2
      .request(options2)
      .then(function (response) {
        vm.movies = response.data
        setTimeout(() => {
          vm.loadingData = true
        }, 5000)
      })
      .catch(function (error) {
        console.error(error)
      })
  },
  methods: {
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible
    },
    async handleSubmit(e) {
      e.preventDefault()
      await this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.commit('watchlist/addData', values)
          setTimeout(() => {
            this.$message.success('ทำการสร้าง Watchlist ใหม่แล้ว')
          }, 250)
          this.modal1Visible = false
        }
      })
    },
    async addDataMovie(indexList) {
      const dataAdd = [
        {
          indexListID: `${indexList}`,
        },
      ]
      dataAdd.push(await this.movieDetailAddWatchlist[0])
      await this.$store.commit('watchlist/addMovieToMylist', dataAdd)
      setTimeout(() => {
        this.$message.success('เพิ่มรายการหนังไปยัง Watchlist ที่เลือกแล้ว')
      }, 200)
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.movie-detail {
  padding: 50px 60px;
}
.middle-screen{
  display: flex;
  justify-content: center;
  align-items: center;
}
.movie-detail #image-detail {
  margin-right: 45px;
}
.movie-detail #image-detail img {
  border-radius: 6px;
}
.movie-detail #text-detail > p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  padding-top: 32px;
  margin: 0;
  color: #e1e1e1;
}
.movie-detail #text-detail > p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-top: 10px;
  margin: 0;
  color: #e1e1e1;
}
.movie-detail #text-detail > p:nth-child(3) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-top: 50px;
  margin: 0;
  color: #ffffff;
}
.movie-detail #text-detail > p:nth-child(2) > span {
  margin: 0 15px;
}
.movie-detail #text-detail > p:nth-child(4) {
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
.movie-detail .ant-row-flex.ant-row-flex-start {
  margin: 0;
  padding-top: 56px;
  align-content: center;
}
.movie-detail .ant-col-xs-offset-1 {
  margin-left: 0;
}
.movie-detail div.score {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid #a41b1b;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  min-width: 81px;
  height: auto;
  margin: 0;
}
.movie-detail div.score > p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  color: #e1e1e1;
}
::v-deep .ant-btn.btn-red {
  background: #f33f3f;
  border: #f33f3f;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  max-width: 247px;
  max-height: 300px;
  color: #141414;
  padding: 0;
  cursor: pointer;
}
::v-deep .ant-btn.btn-watchlist {
  background: #000000;
  border: none;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  max-width: 247px;
  color: #e1e1e1;
  cursor: pointer;
  margin: 0 0 15px 0;
  padding: 12px;
}
::v-deep .ant-btn.btn-watchlist > span {
  margin: 0 16px;
}
::v-deep .ant-btn.btn-watchlist > img {
  height: 21px;
}
::v-deep .ant-btn.btn-red > span.icon {
  font-size: 20px;
  text-align: center;
  background: #d9d9d9;
  border-radius: 8px;
  width: 22px;
  height: 22px;
  margin: 10px;
}
::v-deep label.ant-form-item-required {
  color: #e1e1e1;
}
::v-deep .ant-form-item-label {
  width: 120px;
  padding: 0 0 0 20px;
}
.movie-detail button.btn-watchlist {
  background: #000000;
  border-radius: 6px;
  color: #e1e1e1;
}
.movie-detail div.score > p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #f33f3f;
  margin: 0;
  margin-top: 15px;
}
::v-deep .ant-modal-content {
  position: relative;
  background-color: #161616;
  background-clip: padding-box;
  color: #e1e1e1;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  max-width: 700px;
  width: 700px;
}
::v-deep .ant-modal-close {
  color: #e1e1e1;
}
::v-deep .ant-modal-header,
::v-deep .ant-modal-footer {
  display: none;
}
::v-deep .ant-modal-body {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  color: #e1e1e1;
}
::v-deep .ant-modal-body > p:not(.modal-title-watchlist) {
  font-size: 16px;
  line-height: 19px;
  display: grid;
}
::v-deep .ant-modal-body > p:nth-child(1) > span {
  font-size: 20px;
  line-height: 24px;
  padding-left: 20px;
}
.btn-modal.ant-col-8 {
  display: flex;
  align-items: center;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.btn-modal.ant-col-8 > a {
  margin: 0 30px;
  align-items: center;
  text-decoration-line: underline;
  color: #f33f3f;
}
.btn-modal.ant-col-8 > button {
  background: #f33f3f;
  border: none;
  border-radius: 6px;
}
.ant-form-item {
  color: #e1e1e1;
  display: flex;
}
.ant-form-item input {
  height: 45px;
}
.ant-form-item textarea {
  height: 141px;
}
.ant-form-item input,
.ant-form-item input:hover,
.ant-form-item textarea,
.ant-form-item textarea:hover {
  color: #e1e1e1;
  background: transparent;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  max-width: 295px;
  width: 295px;
}
.movie-detail
  .ant-row-flex.ant-row-flex-start
  > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2 {
  margin-left: 0;
  display: flex;
  align-items: center;
}
.movie-detail button.add-watchlist {
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
.movie-detail div#card {
  margin: 0px !important;
}
.ant-card-bordered {
  border: none;
}
.movie-detail div#card .ant-col {
  max-width: 150px;
  min-width: 150px;
}
.movie-detail .ant-card {
  background: #1f1f1f;
  height: 100% !important;
  color: #e1e1e1;
}
.movie-detail .ant-col > img#lable {
  position: absolute;
  z-index: 999;
  cursor: pointer;
}
.movie-detail div#score {
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
.movie-detail div#score > div:nth-child(1) {
  font-size: 16px;
  line-height: 19px;
}
.movie-detail div#score > div:nth-child(2) {
  font-size: 16px;
  line-height: 19px;
  margin-left: 5px;
}
.movie-detail div#score > div:nth-child(3) {
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
