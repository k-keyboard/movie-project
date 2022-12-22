<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="movie-history"
      >
        <p class="clear-history">
          <a>Clear history</a>
        </p>

        <a-row id="card" type="flex">
          <CardMovie></CardMovie>
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
    viewDetail(id) {
      this.$router.push('/' + id)
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.movie-history > p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #f33f3f;
  text-align: right;
  margin: 0 -30px;
  padding-bottom: 40px;
}
p > a {
  color: #f33f3f;
}
</style>
