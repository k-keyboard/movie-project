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
          <a-col id="image-detail" :xs="{ span: 24, offset: 1 }" :lg="{ span: 8, offset: 2 }">
            <img src="~/assets/card-images/poster1 1.png" alt="" width="100%" />
          </a-col>
          <a-col id="text-detail" :xs="{ span: 24, offset: 1 }" :lg="{ span: 14, offset: 2 }">
            <p>Top Gun Maverick (2022)</p>
            <p>Action, Drama<span>&middot;</span>2h 11m</p>
            <p>Overview</p>
            <p>
              After more than thirty years of service as one of the Navy’s top
              aviators, and dodging the advancement in rank that would ground
              him, Pete “Maverick” Mitchell finds himself training a detachment
              of TOP GUN graduates for a specialized mission the likes of which
              no living pilot has ever seen.
            </p>
            <a-row type="flex" justify="start">
              <a-col :xs="{ span: 24, offset: 1 }" :lg="{ span: 4, offset: 2 }">
                <div class="score">
                  <p>Score</p>
                  <p>83</p>
                </div>
              </a-col>
              <a-col :xs="{ span: 24, offset: 1 }" :lg="{ span: 12, offset: 2 }">
                <button>Add to Watchlist</button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <p id="rm">Related Movies</p>

        <a-row id="card" type="flex">
          <list-data :limit="5">

          </list-data>
        </a-row>


      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import ListData from '~/components/ListData.vue'
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
/* body{
  margin: 0 auto !important;
  background: #141414 !important;
} */

aside {
  flex: 0 0 320px !important;
  max-width: 320px !important;
  min-width: 320px !important;
  width: 320px !important;
}
aside.ant-layout-sider-zero-width {
  flex: 0 0 0px !important;
  max-width: 0px !important;
  min-width: 0px !important;
  width: 0px !important;
}
.banner {
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  margin: 0 auto;
  color: #f33f3f;
  font-size: 40px;
  margin: 19px auto auto 42px;
}
.ant-layout-sider .ant-layout-sider-dark {
  background: rgba(0, 0, 0, 1);
}
hr {
  margin-top: 20px;
  max-width: 260px;
  width: auto;
  height: 0;
  border: 1px solid rgba(217, 217, 217, 0.3);
}
aside p {
  font-family: 'Lato';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #9a9a9a;
  margin: 19px 42px;
}
.components-input-demo-presuffix {
  box-sizing: border-box;
  padding: 20px 43px 40px 30px;
}
.ant-input-prefix {
  /* margin:auto 12px; */
  font-size: 21px;
}
.components-input-demo-presuffix .ant-input {
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
  background: inherit;
  height: 35px;
  width: 100%;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-left: 50px !important;
}
.ant-input::placeholder {
  color: rgba(217, 217, 217, 0.3);
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  /* padding-left: 17px; */
}
.ant-layout-sider,
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  background: #000000 !important;
}
.ant-menu-item-selected {
  background: rgba(31, 31, 31, 1) !important;
}
.ant-menu-item {
  padding-left: 12px !important;
}
.ant-menu-dark .anticon {
  color: #e1e1e1 !important;
  font-size: 21px;
}
.ant-menu-dark .anticon + span {
  color: #e1e1e1 !important;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}
.ant-menu-item {
  border-radius: 9px;
}
ul.ant-menu .ant-btn-primary {
  margin-top: 40px;
  background: #f33f3f;
  border: #f33f3f;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;

  color: #141414;
}
ul.ant-menu .ant-btn-primary:hover {
  background: #f56363;
  border: #f56363;
}
.btn-profile {
  width: 100%;
}
.btn-profile .ant-btn-group.ant-dropdown-button {
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
}
.btn-profile .ant-btn-group.ant-dropdown-button .ant-btn.ant-btn-default {
  width: 80%;
  text-align: left;
  padding: 0;
}
.btn-profile .ant-btn-group.ant-dropdown-button .ant-btn.ant-btn-default img {
  margin: 6px 10px;
}
.btn-profile .ant-btn-group.ant-dropdown-button .ant-btn.ant-btn-default span {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
.btn-profile .ant-btn.ant-btn-default.ant-dropdown-trigger {
  width: 20% !important;
  text-align: right !important;
  margin-right: 14px;
  font-size: 21px;
}
.btn-profile .ant-btn {
  height: 41px;
  background: transparent;
  border: none;

  color: #e1e1e1;
}
/* .btn-profile img {
  margin: 6px 10px;
} */
.text-profile {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  align-items: center;
  text-align: center;
  color: #e1e1e1;
}
.icon-list-profile svg {
  position: absolute;
  right: 14px;
  top: 30%;
  bottom: 30%;
}
#image-detail{
    margin-right: 45px;
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
.ant-col-xs-offset-1{
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
div.score
  > p:nth-child(1) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  color: #e1e1e1;
}
div.score
  > p:nth-child(2) {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  color: #f33f3f;
  margin: 0;
  margin-top: 15px;
}
.ant-row-flex.ant-row-flex-start > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2 {
  margin-left: 0;
  margin-top: 40px;
  display: flex;
  align-items: center;
}
.ant-row-flex.ant-row-flex-start > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2 > button {
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
  font-size: 16px ;
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
.movie-content > p#rm{
    margin-top: 45px;
font-family: 'Lato';
font-weight: 700;
font-size: 20px;
line-height: 24px;
margin-bottom: 20px ;
color: #FFFFFF;
}
@media only screen and (min-device-width: 992px) {
  div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
  .ant-col-lg-offset-2 ,.ant-col-xs-offset-1{
    margin-left: 0 !important;
  }
  .ant-row-flex.ant-row-flex-start > .ant-col.ant-col-xs-24.ant-col-xs-offset-1.ant-col-lg-12.ant-col-lg-offset-2 {
  margin-left: 90px !important;
  margin-top: 0;
  display: flex;
  align-items: center;
}
}
</style>
