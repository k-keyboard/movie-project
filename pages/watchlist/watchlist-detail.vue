<template>
  <a-layout>
    <a-layout-content>
      <div class="watchlist-detail"
      >
        <a-row>
          <p>
            Movies by Tom Cruise
            <a-icon type="form" @click="go('watchlist/watchlist-edit')" />
          </p>
          <p>About this watchlist</p>
          <small> This list lorem ipsum dolor et blah blah blah </small>
        </a-row>
        <a-row id="card-total">
          <a-col :xs="{ span: 12 }" :lg="{ span: 5 }">
            <p align="center">ITEMS ON LIST</p>
            <p align="center">10</p>
          </a-col>
          <a-col :xs="{ span: 12 }" :lg="{ span: 5 }">
            <p align="center">UNWATCHED RUNTIME</p>
            <p align="center">14h 30m</p>
          </a-col>
          <a-col :xs="{ span: 12 }" :lg="{ span: 5 }">
            <p align="center">AVERAGE SCORE</p>
            <p align="center">73</p>
          </a-col>
        </a-row>

        <a-row id="card" type="flex">
          <CardMovie :limit="7" :lable="2"> </CardMovie>
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import CardMovie from '~/components/CardMovie.vue'
export default {
  components: { CardMovie },
  methods: {
    onSearch(value) {
      console.log(value)
    },
    go(id) {
      this.$router.push('/' + id)
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.watchlist-detail {
  padding: 26px 50px;
}
p {
  margin: 0;
}
.watchlist-detail .ant-col {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid #a41b1b;
  border-radius: 8px;
  padding: 20px;
}

.watchlist-detail div > p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  color: #e1e1e1;
  margin-bottom: 26px;
}
.watchlist-detail div > p:nth-child(1) > i {
  padding-left: 50px;
  color: #949494;
  font-size: 24px;
}
.watchlist-detail div > p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 4px;
  color: #e1e1e1;
  margin-bottom: 10px;
}
.watchlist-detail div > small {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #e1e1e1;
  margin-bottom: 70px;
}
.watchlist-detail #card-total div {
  margin-right: 40px;
  margin-bottom: 40px;
}
.watchlist-detail .ant-col {
  width: auto;
  padding: 15px;
  display: grid;
  gap: 21px;
}
.watchlist-detail .ant-col p:nth-child(1) {
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #e1e1e1;
  margin: 0;
}
.watchlist-detail .ant-col p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  align-items: center;
  color: #f33f3f;
  margin: 0;
}
.watchlist-detail .ant-col p span {
  color: #f33f3f;
}

.watchlist-detail > span {
  margin-top: 40px;
}
.watchlist-detail > span > span {
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
}
.watchlist-detail > span > span > span > input {
  background: inherit;
  border: none;
  color: white;
  padding-left: 50px !important;
}
.watchlist-detail > span > span button {
  background: #f33f3f;
  border-radius: 6px;
  color: #000000;
  border: none;
}
.watchlist-detail > p {
  font-family: 'Lato';
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  margin: 35px 0;
  color: #e1e1e1;
}
div#card {
  margin: 0px !important;
  grid-gap: 60px;
}
.ant-card-bordered {
  border: none;
}
div#card .ant-col {
  max-width: 300px;
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

.ant-menu-inline {
  width: 47px;
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
  
  .watchlist-detail {
    padding: 26px 30px;
  }
  .watchlist-detail #card-total div {
    margin-right: 40px;
    margin-bottom: 70px;
  }
}
@media only screen and (max-device-width: 420px) {
  .watchlist-detail {
    padding: 30px 40px;
  }
  .watchlist-detail #card-total div {
    margin-bottom: 20px;
  }
}
</style>
