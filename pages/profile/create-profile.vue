<template>
  <a-layout>
    <a-layout-content>
      <div class="create-profile">
        <h1>
          Hello! <br />
          Please log in or create an account <br />
          to use the features of this app
        </h1>
        <div id="components-form-demo-vuex">
          <a-form>
            <div>
              <a-avatar :size="100" icon="user" />
              <p>
                <a-upload
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  :headers="headers"
                  @change="handleChange"
                >
                  <a-button ghost>
                    <a-icon type="camera" /> Click to Upload
                  </a-button>
                </a-upload>
              </p>
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

            <a-button id="create" block size="large"> Create Profile </a-button
            ><br />
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
<style scoped>
@import url('~/assets/css/style.css');
.create-profile {
  padding: 50px 60px 50px 23px;
}
.create-profile div:nth-child(1) {
  text-align: center;
}
.create-profile div:nth-child(1) p {
  margin-top: 8px;
}
.create-profile div:nth-child(1) p > i {
  margin-right: 15px;
  font-size: 24px;
}
.create-profile h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: #e1e1e1;
}
.create-profile p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
}
.create-profile p a {
  color: #f33f3f;
  text-decoration: underline;
}
.create-profile label {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e1e1e1;
  margin-bottom: 5px !important;
}
.create-profile .ant-form.ant-form-horizontal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
}
.create-profile .ant-btn.ant-btn.ant-btn-background-ghost {
  margin-top: 8px;
  border: none;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #e1e1e1;
}
.create-profile .ant-btn.ant-btn.ant-btn-background-ghost:hover {
  color: #e1e1e1;
}
.create-profile .ant-btn.ant-btn.ant-btn-background-ghost > i {
  font-size: 24px;
}
.create-profile .ant-btn.ant-btn-lg {
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
.create-profile .ant-btn:hover {
  background: #f56363;
  border: #f56363;
  color: #141414;
}
.create-profile div {
  width: auto;
  margin: 0 auto;
}
.create-profile input.ant-input,
.create-profile textarea.ant-input {
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
.create-profile {
  padding-left: 50px !important;
}
@media only screen and (min-device-width: 922px) {
  .create-profile {
    padding-left: 30px !important;
  }
  .create-profile div {
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
  .create-profile {
    padding-left: 40px !important;
  }
}
</style>
