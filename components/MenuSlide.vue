<template>
  <a-layout-sider
    id="min"
    breakpoint="lg"
    collapsed-width="0"
    class="slidKeyboard"
    @breakpoint="onBreakpoint"
  >
    <div>
      <div class="banner">Watchlists</div>

      <div class="components-input-demo-presuffix">
        <a-input-search
          ref="userNameInput"
          placeholder="Search"
          @search="onSearch"
          @click="$router.push('search')"
        >
          <a-icon
            slot="prefix"
            type="search"
            :style="{ color: 'rgba(217, 217, 217, 0.3)' }"
          />
        </a-input-search>
        <br />
      </div>

      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="$router.push('/')">
          <a-icon type="home" />
          <span class="nav-text">Home</span>
        </a-menu-item>
        <a-menu-item key="2" @click="$router.push('/history')">
          <a-icon type="history" />
          <span class="nav-text">History</span>
        </a-menu-item>
        <a-button
          id="btnRedhover"
          block
          size="large"
          @click="$router.push('/watchlist')"
        >
          + Create watchlist
        </a-button>
      </a-menu>
      <div class="my-list">
        <hr />
        <p>My Lists</p>
        <div>
          <a-button
            ghost
            block
            size="large"
            @click="$router.push('/watchlist/watchlist-detail')"
          >
            <img src="~/assets/icon-button/Group 64.svg" alt="" />
            Movies by Tom Cruise
          </a-button>
        </div>
      </div>
    </div>
    <div>
      <a-row type="flex">
        <div id="components-dropdown-demo-placement" class="btn-profile">
          <a-dropdown-button @click="handleButtonClick">
            <img src="~/assets/icon-button/32.svg" alt="" />
            <span v-if="dataLogin !== 0">
              {{ dataLogin.name }}
            </span>
            <span v-else>GUEST</span>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item
                v-if="dataLogin === 0"
                key="1"
                @click="$router.push('/profile')"
              >
                <a-icon type="user" />Login
              </a-menu-item>
              <a-menu-item
                v-if="dataLogin === 0"
                key="2"
                @click="$router.push('/profile/create-profile')"
              >
                <a-icon type="plus-circle" />Create Profile
              </a-menu-item>
              <a-menu-item
                v-if="dataLogin !== 0 && dataLogin.loginStatus == true"
                key="3"
                @click="$router.push('/profile/edit-profile')"
              >
                <a-icon type="edit" />Update Profile
              </a-menu-item>
            </a-menu>
          </a-dropdown-button>
        </div>
      </a-row>
    </div>
  </a-layout-sider>
</template>
<script>
export default {
  props: {
    search: {
      type: String,
      default: '',
    },
  },
  computed: {
    dataProfile() {
      return this.$store.state.profile.dataProfile
    },
    // eslint-disable-next-line vue/return-in-computed-property
    dataLogin() {
      const index = this.$store.state.profile.dataProfileIndex
      if (index !== '') {
        return this.$store.state.profile.dataProfile[index]
      } else {
        return 0
      }
    },
  },
  methods: {
    onBreakpoint(broken) {
      console.log(broken)
    },
    handleButtonClick(e) {
      console.log('click left button', e)
    },
    handleMenuClick(e) {
      console.log('click', e)
    },
    onSearch(value) {
      console.log(value)
    },
  },
}
</script>
<style scoped>
@import url('~/assets/css/style.css');
aside {
  flex: 0 0 320px !important;
  max-width: 320px !important;
  min-width: 320px !important;
  width: 320px !important;
}

aside.ant-layout-sider-zero-width {
  flex: 0 0 0px !important;
  max-width: 0px !important;
  min-width: 0px !important;
  width: 0px !important;
}
::v-deep .ant-layout-sider-children {
  height: 100vh;
  top: 0;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.banner {
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  margin: 0 auto;
  color: #f33f3f;
  font-size: 40px;
  margin: 19px auto auto 42px;
}
.ant-layout-sider .ant-layout-sider-dark {
  background: rgba(0, 0, 0, 1);
}
.my-list {
  padding: 0 30px;
}
.my-list hr {
  margin-top: 20px;
  max-width: 260px;
  width: auto;
  height: 0;
  border: 1px solid rgba(217, 217, 217, 0.3);
}
.my-list p {
  font-family: 'Lato';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #9a9a9a;
  margin: 19px 5px;
}
.my-list div > button {
  border: none;
  background: transparent;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #e1e1e1;
  height: 41px;
  border-radius: 6px;
}
.my-list div > button:hover {
  background: rgba(255, 255, 255, 0.3);
  color: #e1e1e1;
}
::v-deep .my-list > div > button > img {
  margin-right: 16px;
}
::v-deep .components-input-demo-presuffix {
  box-sizing: border-box;
  padding: 20px 43px 40px 30px;
}
.ant-input-prefix {
  font-size: 21px;
}
::v-deep .components-input-demo-presuffix .ant-input {
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
  background: inherit;
  height: 35px;
  max-width: 247px;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-left: 50px !important;
}
.ant-layout-sider,
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  background: #000000 !important;
}
.ant-menu-item-selected {
  background: rgba(31, 31, 31, 1) !important;
}
.ant-menu-item {
  padding-left: 12px !important;
}
.ant-menu-dark .anticon {
  color: #e1e1e1 !important;
  font-size: 21px;
}
.ant-menu-dark .anticon + span {
  color: #e1e1e1 !important;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}
.ant-menu-item {
  border-radius: 9px;
}
ul.ant-menu .ant-btn {
  margin-top: 40px;
  background: #f33f3f;
  border: #f33f3f;
  font-family: 'Lato';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: #141414;
}
.ant-row-flex {
  margin-bottom: 30px;
}
::v-deep .btn-profile {
  width: 100%;
}
::v-deep .btn-profile .ant-btn-group.ant-dropdown-button {
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
}
::v-deep
  .btn-profile
  .ant-btn-group.ant-dropdown-button
  .ant-btn.ant-btn-default {
  width: 80%;
  text-align: left;
  padding: 0;
}
::v-deep
  .btn-profile
  .ant-btn-group.ant-dropdown-button
  .ant-btn.ant-btn-default
  img {
  margin: 6px 10px;
}
::v-deep
  .btn-profile
  .ant-btn-group.ant-dropdown-button
  .ant-btn.ant-btn-default
  span {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}
::v-deep .btn-profile .ant-btn.ant-btn-default.ant-dropdown-trigger {
  width: 20% !important;
  text-align: right !important;
  margin-right: 14px;
  font-size: 21px;
}
::v-deep .btn-profile .ant-btn {
  height: 41px;
  background: transparent;
  border: none;
  color: #e1e1e1;
}
::v-deep .text-profile {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: #e1e1e1;
}
::v-deep .icon-list-profile svg {
  position: absolute;
  right: 14px;
  top: 30%;
  bottom: 30%;
}
.ant-menu-inline {
  width: 247px;
  margin-left: 30px;
}
::v-deep .btn-profile {
  height: 45px;
  width: calc(100% - 60px);
  margin-left: 30px;
  align-content: flex-end;

  color: #e1e1e1;
}
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
