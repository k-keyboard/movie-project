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
        <h1>Edit your Watchlist <a href="#">Delete Watchlist</a></h1>
        <div id="components-form-demo-vuex">
          <a-form>
            <label for="Name">Name</label>
            <a-input value="Movies by Tom Cruise" />
            <label for="Description">Description</label>
            <a-textarea
              :auto-size="{ minRows: 10, maxRows: 20 }"
              value="This list lorem ipsum dolor et blah blah blah"
            />
          </a-form>
          <label for="Name">Movie</label>
          <div></div>
          <span v-for="n in maxList" :key="n">
            <div id="list-movie">
              <div id="img-card">
                <img
                  src="~/assets/card-images/poster1 1.png"
                  height="75"
                  alt=""
                />
                <font>Top Gun: Maverick (2022)</font>
              </div>
              <div>
                <a-button id="remove" type="danger" ghost @click="removeMax" > Remove </a-button>
              </div>
            </div>
          </span>
          <a-button id="btnRedhover" class="save" block size="large"> Save </a-button>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  data(){
    return{
      maxList : 3
    }
  },
  methods:{
    removeMax(){
      this.maxList = this.maxList-1;
    }
  }
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
  margin-top: 5px;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-bottom: 30px;
  min-height: 45px;
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
