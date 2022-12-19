<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px 50px 23px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="login"
      >
        <h1>
          Hello! <br />
          Please log in or create an account <br />
          to use the features of this app
        </h1>
        <div id="components-form-demo-vuex">
          <a-form>
            <div>
              <a-avatar :size="100" icon="user" />
              <p><a-icon type="camera" />Add an avatar</p>
            </div>
            <div>
              <label for="Name">Name *</label><br />
              <a-input />
            </div>
            <div>
              <label for="Name">Email *</label><br />
              <a-input />
            </div>
            <div>
              <label for="Name">Password *</label><br />
              <a-input />
            </div>

            <a-button block size="large"> Create Profile </a-button><br />
          </a-form>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  methods: {
    push(path) {
      this.$router.push('/' + path)
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
.login div:nth-child(1){
    text-align: center;
}
.login div:nth-child(1) p{
    margin-top: 8px;
}
.login div:nth-child(1) p > i{
    margin-right: 15px;
    font-size: 24px;
}
.login h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: #e1e1e1;
}
.login p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}
.login p a {
  color: #f33f3f;
  text-decoration: underline;
}
.login label {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e1e1e1;
  margin-bottom: 5px !important;
}
.login .ant-form.ant-form-horizontal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
}
.login .ant-btn {
  margin-top: 30px;
  background: #f33f3f !important;
  border: #f33f3f !important;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  max-width: 247px;
  color: #141414 !important;
}
.login .ant-btn:hover {
  background: #f56363;
  border: #f56363;
  color: #141414;
}
.login div {
  width: auto;
  margin: 0 auto;
}
.login input.ant-input,
.login textarea.ant-input {
  background: transparent;
  margin-top: 5px;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  margin-bottom: 30px;
  min-height: 45px;
  min-width: 250px;
  max-width: 350px;
}
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
.login {
  padding-left: 50px !important;
}
@media only screen and (min-device-width: 922px) {
  .login {
    padding-left: 30px !important;
  }
  .login div {
    width: 350px;
    margin: 0 auto;
  }
  div#card .ant-col {
    max-width: 150px;
    min-width: 150px;
    width: 150px;
    /* display: table-cell; */
  }
}
@media only screen and (min-device-width : 300px) and (max-device-width : 787px) {
  .login{
    padding-left: 40px !important;
  }
}
</style>
