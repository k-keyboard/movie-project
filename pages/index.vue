<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="movie-content"
      >
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
          <list-data :limit="5">
          </list-data>
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import ListData from '../components/ListData.vue'
export default {
  components: { ListData },
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
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.movie-content .ant-col.ant-col-24 {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid #a41b1b;
  border-radius: 8px;
  padding: 20px;
}
.movie-content {
  width: 100%;
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
  /* margin-top: 35px; */
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
  margin-top: 40px;
}
.movie-content > span > span {
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
}
.movie-content > span > span > span > input {
  background: inherit;
  border: none;
  color: white;
  padding-left: 50px !important;
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
div#card {
  margin: 0px !important;
  /* border: #e1e1e1 1px solid; */
  grid-gap: 60px;
}
.ant-card-bordered {
  border: none;
}
div#card .ant-col {
  max-width: 300px;
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

@media only screen and (min-device-width: 1280px) {
  div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
  
}
</style>
