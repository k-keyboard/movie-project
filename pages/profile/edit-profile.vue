<template>
  <a-layout>
    <a-layout-content>
      <div class="edit-profile">
        <h1>Edit profile <a @click="logout">Log out</a></h1>
        <div id="components-form-demo-vuex">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <img
                id="blah"
                src="../../assets/icon-button/Ellipse 6.svg"
                alt="your image"
                width="100"
                height="100"
              /><br />
              <span class="btn btn-file">
                <a-icon type="camera" :style="{ fontSize: '24px' }" />
                <span class="text-btn-upload">Remove avatar</span>
                <input
                  type="file"
                  onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
                />
              </span>
            </a-form-item>
            <a-form-item>
              <label for="Name">Name *</label><br />
              <a-input
                v-decorator="[
                  'name',
                  {
                    initialValue:dataProfileDetail.name,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your name!',
                        whitespace: true,
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item>
              <label for="Name">Email *</label><br />
              <a-input
                v-decorator="[
                  'email',
                  {
                    initialValue:dataProfileDetail.email,
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item>
              <label for="Name">Password *</label><br />
              <a-input
                v-decorator="[
                  'password',
                  {
                    initialValue:dataProfileDetail.password,
                    rules: [
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ],
                  },
                ]"
                type="password"
              />
            </a-form-item>

            <a-button id="btnRedhover" html-type="submit" block size="large">
              Update Profile
            </a-button>
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
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    }
  },
  computed: {
    dataProfileDetail() {
      const index = this.$store.state.profile.dataProfileIndex
      if (index !== '') {
        return this.$store.state.profile.dataProfile[index]
      } else {
        return { name: 'Michael', email: 'test@test.com', password: '123456' }
      }
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.commit('profile/updateData', values)
          this.$router.push('/profile/edit-profile')
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    logout() {
      const index = this.$store.state.profile.dataProfileIndex
      this.$store.commit('profile/updateLogout', index)
      this.$router.push('/profile')
    },
  },
}
</script>

<style scoped>
@import url('~/assets/css/style.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.edit-profile {
  padding: 50px 60px 50px 23px;
}
.edit-profile div:nth-child(1) {
  text-align: center;
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
}
.edit-profile form.ant-form.ant-form-horizontal div {
  margin-bottom: 20px;
}
.edit-profile form.ant-form.ant-form-horizontal div:nth-child(1) {
  margin-bottom: 0;
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
  margin-top: 32px;
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
.edit-profile input.ant-input {
  background: transparent;
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
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
img#blah {
  border-radius: 50%;
  margin: 0 0 8px 0;
  object-fit: cover;
}
.btn-file {
  position: relative;
  overflow: hidden;
}
.btn-file input[type='file'] {
  position: absolute;
  top: 0;
  right: 0;
  color: transparent;
  min-width: 100%;
  min-height: 100%;
  text-align: right;
  outline: none;
  cursor: inherit;
  display: block;
}
.btn-file input[type='file']::-webkit-file-upload-button {
  display: none;
}
span.text-btn-upload {
  margin: 0 0 0 15px;
}
.btn,
.btn-large,
.btn-small {
  background-color: transparent !important;
  color: #e1e1e1;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  -webkit-box-shadow: none;
  text-transform: none;
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
  }
}
@media only screen and (min-device-width: 300px) and (max-device-width: 787px) {
  .edit-profile {
    padding-left: 40px !important;
  }
}
</style>
