<template>
  <div>
    <a-row id="card-movie" type="flex">
      <a-col
        v-for="(movie, index) in movies.slice(0, limit)"
        :key="index"
        :flex="1"
        @click="viewDetail(`${movie.id}`)"
      >
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
          <img id="cover" slot="cover" alt="example" :src="movie.image" />

          <div id="score">
            <div>
              <img
                v-if="movie.rating * 10 > 80"
                src="~/assets/card-images/Vector.svg"
                height="19"
                alt=""
              />
              <img
                v-else-if="movie.rating * 10 >= 50"
                src="~/assets/card-images/Vector (1).svg"
                height="19"
                alt=""
              />
              <img
                v-else
                src="~/assets/card-images/Vector (2).svg"
                height="19"
                alt=""
              />
            </div>
            <div>
              {{ movie.rating * 10 }}
            </div>
            <div>/100</div>
          </div>

          <p>
            {{ movie.title }} <br />
            ({{ movie.year }})
          </p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'CardMovie',
  props: {
    limit: {
      type: Number,
      default: 100,
    },
    lable: {
      type: Number,
      default:null,
    },
    // eslint-disable-next-line vue/require-default-prop
    movies: Object,
  },
  
  methods: {
    viewDetail(id) {
      this.$router.push(id)
    },
    onSearch(value) {
      console.log(value)
    },
  },
}
</script>

<style scoped>
@import url('~/assets/css/style.css');
#card-movie {
  margin: 0px !important;
}
#card-movie .ant-card-bordered {
  border: none;
}
#card-movie .ant-col {
  max-width: 300px;
  cursor: pointer;
}
#card-movie .ant-card {
  background: #1f1f1f;
  height: 100% !important;
  color: #e1e1e1;
}
#card-movie .img#cover {
  border-radius: 4px 4px 0px 0px;
}
#card-movie .ant-col > img#lable {
  position: absolute;
  z-index: 999;
  cursor: pointer;
}
#card-movie .ant-col > img#lable-c {
  position: absolute;
  right: 10px;
  top: 16px;
  z-index: 999;
  cursor: pointer;
}
#card-movie div#score {
  display: flex;
  flex-direction: row;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin: 5px;
  align-content: flex-start;
  justify-content: flex-end;
}
#card-movie div#score > div:nth-child(1) {
  font-size: 16px;
  line-height: 19px;
}
#card-movie div#score > div:nth-child(2) {
  font-size: 16px;
  line-height: 19px;
  margin-left: 5px;
}
#card-movie div#score > div:nth-child(3) {
  font-size: 10px;
  line-height: 12px;
}
#card-movie div#card .ant-col {
  max-width: 150px;
  min-width: 150px;
  width: 150px;
}
#card-movie {
  gap: 40px;
}

#card-movie .ant-card-bordered {
  border: none;
}
#card-movie div#card .ant-col {
  max-width: 300px;
}
#card-movie .ant-card {
  background: #1f1f1f;
  height: 100% !important;
  color: #e1e1e1;
}
#card-movie .ant-menu-inline {
  width: 247px;
  margin-left: 30px;
}
::v-deep div#card-movie .ant-card-body {
  padding: 0;
  margin: 0;
}
::v-deep #card-movie .ant-card-body > p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
  padding-bottom: 10px !important;
}

@media only screen and (min-device-width: 1280px) {
  #card-movie .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
  }
  #card-movie .ant-card-body {
    padding: 0 !important;
  }
  #card-movie {
    gap: 60px;
  }
}

@media only screen and (min-device-width: 300px) and (max-device-width: 787px) {
  #card-movie div#card .ant-col {
    max-width: 160px;
    min-width: 150px;
    width: auto;
    min-height: expression(parseInt(row)-43);
  }
  #card-movie {
    gap: 30px;
  }
}
</style>
