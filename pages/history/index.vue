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
      
    <p class="clear-history">
        <a>Clear history</a>
    </p>

      <a-row id="card" type="flex">
        <list-data ></list-data>
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
<style scoped>
.movie-content > p {
  font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-decoration-line: underline;
color: #F33F3F;
text-align: right;
margin: 0 -30px;
padding-bottom: 40px;
}
p > a {
  color: #F33F3F;
}
</style>