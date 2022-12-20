<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px 50px 23px',
          background: '#161616',
          minHeight: '100vh',
        }"
        class="edit-profile"
      >
        <h1>Edit profile <a href="#">Log out</a></h1>
        <div id="components-form-demo-vuex">
          <a-form>
            <div>
              <img src="~/assets/icon-button/Ellipse 6.svg" />
              <p>
                <a-upload
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  :headers="headers"
                  @change="handleChange"
                >
                  <a-button ghost>
                    <a-icon type="camera" /> Remove Avatar
                  </a-button>
                </a-upload>
              </p>
            </div>
            <div>
              <label for="Name">Name *</label><br />
              <a-input value="Michael" />
            </div>
            <div>
              <label for="Name">Email *</label><br />
              <a-input type="email" value="test@test.com" />
            </div>
            <div>
              <label for="Name">Password *</label><br />
              <a-input type="password" value="12345" />
            </div>

            <a-button block size="large"> Update Profile </a-button><br />
          </a-form>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    }
  },
  methods: {
    push(path) {
      this.$router.push('/' + path)
    },
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
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
.edit-profile div:nth-child(1) {
  text-align: center;
}
.edit-profile img {
  width: 100px;
  height: 100px;
}
.edit-profile div:nth-child(1) p {
  margin-top: 8px;
}
.edit-profile div:nth-child(1) p > i {
  margin-right: 15px;
  font-size: 24px;
}
.edit-profile h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #e1e1e1;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.edit-profile h1 > a {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-decoration-line: underline;
  color: #f33f3f;
}
.edit-profile p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}
.edit-profile p a {
  color: #f33f3f;
  text-decoration: underline;
}
.edit-profile label {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e1e1e1;
  margin-bottom: 5px !important;
}
.edit-profile .ant-form.ant-form-horizontal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
}
.edit-profile .ant-btn.ant-btn.ant-btn-background-ghost {
  margin-top: 8px;
  border: none;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #e1e1e1;
}
.edit-profile .ant-btn.ant-btn.ant-btn-background-ghost:hover {
  color: #e1e1e1;
}
.edit-profile .ant-btn.ant-btn.ant-btn-background-ghost > i {
  font-size: 24px;
}
.edit-profile .ant-btn.ant-btn-lg {
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
.edit-profile .ant-btn:hover {
  background: #f56363;
  border: #f56363;
  color: #141414;
}
.edit-profile div {
  width: auto;
  margin: 0 auto;
}
.edit-profile input.ant-input,
.edit-profile textarea.ant-input {
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
.edit-profile {
  padding-left: 50px !important;
}
@media only screen and (min-device-width: 922px) {
  .edit-profile {
    padding-left: 30px !important;
  }
  .edit-profile div {
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
@media only screen and (min-device-width: 300px) and (max-device-width: 787px) {
  .edit-profile {
    padding-left: 40px !important;
  }
}
</style>
