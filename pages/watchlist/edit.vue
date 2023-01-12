<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px 50px 23px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="watchlist-edit"
      >
        <h1>
          Edit your Watchlist

          <a-popconfirm
            title="คุณแน่ใจแล้วใช่ไหมที่จะทำการลบรายการนี้?"
            ok-text="ยืนยัน"
            cancel-text="ยกเลิก"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a> Delete Watchlist </a>
          </a-popconfirm>
        </h1>
        <div id="components-form-demo-vuex">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <label for="Name">Name </label>
              <a-input
                v-decorator="[
                  'name',
                  {
                    initialValue: dataWatchlistDetail.name,
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
            <a-form-item>
              <label for="Description">Description </label>
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    initialValue: dataWatchlistDetail.description,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your description!',
                      },
                    ],
                  },
                ]"
                :rows="10"
              />
              <a-input
                v-decorator="[
                  'idList',
                  {
                    initialValue: id,
                  },
                ]"
                type="hidden"
              />
            </a-form-item>

            <label for="Name">Movie</label>
            <div></div>
            <span v-for="(movie, index) in movieInWatchlist" :key="index">
              <div id="list-movie">
                <div id="img-card">
                  <img :src="movie.image" height="75" alt="" />
                  <font>{{ movie.title }} ({{ movie.year }})</font>
                </div>
                <div>
                  <a-button
                    id="remove"
                    type="danger"
                    ghost
                    @click="removeDataMovie(index)"
                  >
                    Remove
                  </a-button>
                </div>
              </div>
            </span>
            <a-button
              id="btnRedhover"
              class="save"
              html-type="submit"
              block
              size="large"
            >
              Save
            </a-button>
          </a-form>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.watchlistid,
      dataWatchlistDetail: [],
      maxList: 3,
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    }
  },
  computed: {
    dataWatchlist() {
      return this.$store.state.watchlist.dataWatchlist
    },
    movieInWatchlist() {
      const movieNew = []
      if (this.id) {
        const movieIn = this.$store.state.watchlist.dataWatchlist[this.id]
        const dataMovies = movieIn.movies

        for (let i = 0; i < dataMovies.length; i++) {
          movieNew.push({
            id: `${dataMovies[i].id}`,
            title: `${dataMovies[i].title}`,
            year: `${dataMovies[i].year}`,
            rating: `${dataMovies[i].rating}`,
            image: `${dataMovies[i].image}`,
            lable: dataMovies[i].lable,
            index: `${i}`,
          })
        }
      }
      return movieNew
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  mounted() {
    const id = this.$route.query.watchlistid
    this.dataWatchlistDetail = this.dataWatchlist[id]
  },
  methods: {
    async confirm(e) {
      console.log(e)
      await this.$message.success('ทำการกดยืนยันลบข้อมูลเรียบร้อย')
      this.deleteWatchlist(this.dataWatchlistDetail.watchlistID)
    },
    cancel(e) {
      console.log(e)
    },
    async removeDataMovie(indexList) {
      const dataRemove = [
        {
          indexMovieID: `${indexList}`,
          indexWatchlistID: `${this.id}`,
        },
      ]
      await this.$store.commit('watchlist/removeMovieToMylist', dataRemove)
      await this.$store.commit('watchlist/checkShowFalse', this.id)
      await this.$message.success('ทำการแก้ไขข้อมูลของหนังออกจาก Watchlist ที่เลือกแล้ว')
    },
    deleteNotification() {
      this.$notification.open({
        message: 'ทำการลบข้อมูลสำเร็จ',
        duration: 2.5,
      })
    },
    deleteWatchlist(idWatchlist) {
      this.$store.commit('watchlist/deleteData', idWatchlist)
      this.id = ''
      this.$router.push('/')
    },
    async handleSubmit(e) {
      e.preventDefault()
      await this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.commit('watchlist/updateData', values)
          setTimeout(() => {
            this.$message.success('ทำการแก้ไขข้อมูลของ Watchlist ที่เลือกแล้ว')
          }, 500)
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.watchlist-edit h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #e1e1e1;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.watchlist-edit h1 > a {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-decoration-line: underline;
  color: #f33f3f;
}
.watchlist-edit label {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e1e1e1;
  margin-bottom: 5px !important;
}
.watchlist-edit #remove {
  margin: 17px 15px;
  padding: 10px;
  height: 41px;
  font-family: 'Lato';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e1 !important;
  background: none;
}
button.save {
  margin-top: 30px;
  background: #f33f3f !important;
  border: #f33f3f !important;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  max-width: 247px;
  color: #141414 !important;
}
button#remove:hover {
  background: #f33f3f !important;
  color: #141414 !important;
}
.watchlist-edit input.ant-input,
.watchlist-edit textarea.ant-input {
  background: transparent;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  min-height: 45px;
}
.watchlist-edit .ant-form-item-with-help {
  margin-bottom: 30px;
}
.watchlist-edit div#list-movie {
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  display: flex;
  color: #e1e1e1;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
}
.watchlist-edit div#list-movie #img-card > font {
  margin-left: 15px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e1e1e1;
}
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
@media only screen and (min-device-width: 1280px) {
  div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
}
</style>
