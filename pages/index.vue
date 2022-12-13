<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="banner">Watchlists</div>

      <div class="components-input-demo-presuffix">
        <a-input ref="userNameInput" placeholder="Search">
          <a-icon slot="prefix" type="search" :style="{ color: 'rgba(217, 217, 217, 0.3)' }" />
        </a-input>
        <br />
      </div>

      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="textalign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint(broken) {
      console.log(broken)
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
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

.components-input-demo-presuffix {
  box-sizing: border-box;
  padding: 20px 43px 40px 30px;
}
.components-input-demo-presuffix .ant-input {
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
  background: inherit;
  height: 35px;
  width: 100%;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;

}
.ant-input::placeholder{
  color: rgba(217, 217, 217, 0.3);
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;

}

@media only screen and (min-device-width: 1280px) and (max-device-width: 1440px) {
  aside.ant-layout-sider.ant-layout-sider-dark {
    flex: 0 0 auto !important;
    max-width: 320px !important;
    /* min-width: 200px !important; */
    width: 320px !important;
  }
}
</style>
