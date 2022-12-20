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
        <p class="clear-history">Search Results: movies by Tom Cruise</p>

        <a-row id="card" type="flex">
          <list-data></list-data>
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
import ListData from '~/components/ListData.vue'
export default {
  components: { ListData },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    search: {
      type: String,
    },
  },
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
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  margin: 0;
  margin-bottom: 46px;
  color: #e1e1e1;
}
</style>
