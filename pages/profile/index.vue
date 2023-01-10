<template>
  <a-layout>
    <a-layout-content>
      <div class="login">
        <h1>
          Hello! <br />
          Please log in or create an account <br />
          to use the features of this app
        </h1>
        <div id="components-form-demo-vuex">
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <label for="Name">Email *</label><br />
              <a-input
                v-decorator="[
                  'email',
                  {
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
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ],
                  },
                ]"
                type="password"
              >
              </a-input>
            </a-form-item>

            <a-button
              id="btnRedhover"
              block
              size="large"
              html-type="submit"
              class="login-form-button"
            >
              Log in
            </a-button>
            <br />
            <p>
              or
              <a @click="$router.push('profile/create-profile')"
                >create an account</a
              >
            </p>
          </a-form>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<script>
export default {
  computed: {
    dataProfile() {
      return this.$store.state.profile.dataProfile
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    openNotification() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)

          // login
          const dataLogins = this.dataProfile
          const loginCheck = dataLogins.filter(
            (dataLogin) => dataLogin.email === values.email
          )

          let dataProfileID = -1
          for (let i = 0; i < dataLogins.length; i++) {
            if (dataLogins[i].email === loginCheck[0].email) {
              console.log('index is ', i);
              dataProfileID = i
              break
            }
          }
          if (loginCheck.length > 0) {
            console.log('have email in store and index =', dataProfileID)
            if (values.password === this.dataProfile[dataProfileID].password) {
              this.$store.commit('profile/updateLogin', dataProfileID)
              this.$router.push('/')
              alert('login Success')
            } else {
              alert('wrong password login , try agin')
            }
          } else {
            alert('wrong login , try agin')
          }
        }
      })
    },

  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
.login {
  padding: 50px 60px 50px 23px;
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
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #e1e1e1;
}
.login form#components-form-demo-normal-login div {
  margin-bottom: 20px;
}
.login .ant-form.ant-form-horizontal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
}
.login .ant-btn {
  margin-top: 22px;
  background: #f33f3f !important;
  border: #f33f3f !important;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  max-width: 247px;
  color: #141414 !important;
}
.login div {
  width: auto;
  margin: 0 auto;
}
.login input.ant-input {
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
  }
}
</style>
