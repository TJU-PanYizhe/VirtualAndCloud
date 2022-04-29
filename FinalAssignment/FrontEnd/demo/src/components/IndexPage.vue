<template>
  <div id="IndexPage">
    <div id="siteBackground"></div>
    <div id="index">
      <transition name="navigation" appear>
        <div id="navigation">
          <div id="menu">
            <div id="menuList">
              <div
                class="menuChild"
                onclick="window.scroll({top:0,left:0,behavior:'instant'})"
              >
                <router-link to="/index" active-class="menuActive"
                  ><i class="el-icon-s-home"></i><span>主页</span></router-link
                >
              </div>
              <!-- <div
              class="menuChild"
              onclick="window.scroll({top:0,left:0,behavior:'instant'})"
            >
              <router-link to="/Video" active-class="menuActive"
                ><i class="el-icon-video-camera-solid"></i><span>视频</span></router-link
              >
            </div> -->
              <div
                class="menuChild"
                onclick="window.scroll({top:0,left:0,behavior:'instant'})"
              >
                <router-link to="/code" active-class="menuActive"
                  ><i class="el-icon-s-tools"></i><span>代码</span></router-link
                >
              </div>
              <div
                class="menuChild"
                onclick="window.scroll({top:0,left:0,behavior:'instant'})"
              >
                <router-link to="/document" active-class="menuActive"
                  ><i class="el-icon-s-management"></i><span>文档</span></router-link
                >
              </div>
              <!-- <div
              class="menuChild"
              onclick="window.scroll({top:0,left:0,behavior:'instant'})"
            >
              <router-link to="/Happy" active-class="menuActive"
                ><i class="el-icon-s-promotion"></i><span>娱乐</span></router-link
              >
            </div> -->
              <div
                class="menuChild"
                onclick="window.scroll({top:0,left:0,behavior:'instant'})"
              >
                <router-link to="/about" active-class="menuActive"
                  ><i class="el-icon-s-custom"></i><span>关于</span></router-link
                >
              </div>
              <!-- <div class="menuChild">
              <a href="https://travellings.link" target="_blank"
                ><i class="el-icon-share"></i><span>开往</span></a
              >
            </div> -->
            </div>
          </div>
        </div>
      </transition>
    </div>
    <h1 style="margin-top: 70px">虚拟化技术与云计算 - 基于Serverless的数据预处理服务</h1>
    <transition name="content" appear>
      <keep-alive><router-view></router-view></keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {},
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
#siteBackground {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url("../assets/burgers.svg");
  z-index: -7;
}
.hoverEffect {
  border-radius: 3.7px;
  border: 2px solid #dcdfe6 !important;
  /* transition: 0.5s; */
}
.hoverEffect:hover {
  border-color: #007aff !important;
}
.navigation-enter-active,
.navigation-leave-active {
  transition: 0.3s linear;
}
.navigation-enter,
.navigation-leave-to {
  transform: translateY(-100%);
}
.navigation-enter-to,
.navigation-leave {
  transform: translateY(0);
}
#navigation {
  position: fixed;
  width: 100%;
  height: 57px;
  border-bottom: 1px solid #007aff;
  top: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  z-index: 7;
}
#menu {
  height: 100%;
  position: absolute;
  /* right: 0; */
  justify-content: center;
  margin-right: 7px;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

#menuList {
  padding: 7px 17px 7px 17px;
  display: flex;
  align-items: center;
  color: #000;
  height: 100%;
}

.menuChild {
  height: 100%;
  align-items: center;
  display: flex;
}

.menuChild a {
  border: 2px solid #fff;
  transition: 0.3s;
}

#menuList a {
  text-decoration: none;
  margin: 0 7px 0 0;
  color: #000;
  padding: 7px 10px;
  transition: 0.3s;
}

.menuChild a:hover {
  background-color: rgb(242, 243, 245);
  border-bottom: 2px solid #007aff;
}

.menuActive {
  color: #007aff !important;
}
</style>
