<template>
  <a-layout>
    <a-layout-content>
      <div
        :style="{
          padding: '50px 60px 50px 23px',
          
        }"
        class="watchlist-create"
      >
        <h1>Create a new Watchlist</h1>
        <div id="components-form-demo-vuex">
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item>
              <label for="Name">Name </label>
              <a-input
                v-decorator="[
                  'name',
                  {
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
              <label for="Description">Description </label>
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your description!',
                      },
                    ],
                  },
                ]"
                :rows="10"
              />
            </a-form-item>

            <a-button id="btnRedhover" html-type="submit" block size="large">
              Create Watchlist
            </a-button>
          </a-form>
        </div>
      </div>
      <div v-show="clickLoad" class="bg-gray middle-screen">
        <a-icon type="loading" :style="{ fontSize: '48px', color: '#f33f3f' }" />
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      clickLoad:false,
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
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      await this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.commit('watchlist/addData', values)
          this.$message.success('ทำการเพิ่มข้อมูล Watchlist ใหม่แล้ว')
          this.clickLoad = true
          setTimeout(() => {
            this.$router.push('/')
          }, 2000);
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
  },
}
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
}
.watchlist-create .ant-btn {
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
  color: #e1e1e1;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  min-height: 45px;
}
.watchlist-create form.ant-form.ant-form-horizontal div {
  margin-bottom: 30px;
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
  }
}
@media only screen and (min-device-width: 300px) and (max-device-width: 787px) {
  .watchlist-create {
    padding-left: 50px !important;
  }
}
</style>
