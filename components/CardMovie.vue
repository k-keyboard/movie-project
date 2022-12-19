<template>
  <a-col :flex="1" @click="viewDetail('movie-detail')">
      <img
      
        v-if="lable === 1"
        id="lable-c"
        src="~/assets/card-images/check-white.svg"
        alt=""
      />
      <img
        v-else-if="lable === 2"
        id="lable-c"
        src="~/assets/card-images/check-green.svg"
        alt=""
      />
      <img
        v-else
        id="lable"
        src="~/assets/icon-button/Property 1=Default.svg"
        alt=""
      />
      <a-card hoverable style="width: 100%">
        <img
          slot="cover"
          alt="example"
          :src="image"
        />

        <div id="score">
          <div>
            <img v-if="score > 80" src="~/assets/card-images/Vector.svg" height="19" alt="" />
            <img v-else-if="score >= 50" src="~/assets/card-images/Vector (1).svg" height="19" alt="" />
            <img v-else src="~/assets/card-images/Vector (2).svg" height="19" alt="" />
          </div>
          <div>
            {{score}}
          </div>
          <div>/100</div>
        </div>

        <p>
          {{name}} <br>
          ({{year}})
        </p>
      </a-card>
  </a-col>
</template>

<script>
export default {
    
    props: {
    id: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      default: 0
    },
    // eslint-disable-next-line vue/require-default-prop
    lable: {
      type: Number
    },
    name: {
      type: String,
      default: "title Default",
    },
    image: {
      type: String,
      default: "",
    },
    year: {
        type: String,
        default: "0000",
    }
    },
    methods: {
    viewDetail(id) {
      
      this.$router.push('/' + id)
    }
    },
}
</script>

<style>
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
.ant-col > img#lable-c {
  position: absolute;
  right: 10px;
  top: 16px;
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
div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
  div#card {
    gap: 40px;
  }
@media only screen and (min-device-width: 1280px) {
  div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
}
@media only screen and (min-device-width : 300px) and (max-device-width : 787px) {
  div#card .ant-col {
    max-width: 160px;
    min-width: 150px;
    width: auto;
    /* display: table-cell; */
  }
  div#card {
    gap: 30px;
  }
}
</style>
