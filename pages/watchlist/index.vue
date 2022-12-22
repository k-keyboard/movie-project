<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px 50px 23px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="watchlist-create"
      >
        <h1>Create a new Watchlist</h1>
        <div id="components-form-demo-vuex">
          <a-form>
            <label for="Name">Name</label>
            <a-input />
            <label for="Description">Description</label>
            <a-textarea :auto-size="{ minRows: 10, maxRows: 20 }" />
            <a-button id="create" block size="large"> Create watchlist </a-button>
          </a-form>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.watchlist-create h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #e1e1e1;
  margin-bottom: 50px;
}
.watchlist-create label {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e1e1e1;
  margin-bottom: 5px !important;
}
.watchlist-create .ant-btn {
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
.watchlist-create input.ant-input,
.watchlist-create textarea.ant-input {
  background: transparent;
  margin-top: 5px;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-bottom: 30px;
  min-height: 45px;
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
@media only screen and (min-device-width: 300px) and (max-device-width: 787px) {
  .watchlist-create {
    padding-left: 50px !important;
  }
}
</style>
