<template>
  <div class="nav">
    <!-- <topBar /> -->
    <div class="nav_top box_wrap_wrap_box">
      <!-- <div class="nav_top_center"></div> -->
      <div class="nav_top_right">
        <p @click="close">
          <img src="../../assets/icon_close_nor.png" alt />
        </p>
      </div>
    </div>
    <div class="box_wrap_wrap_box">
      <ul>
        <router-link to="/">
          <li>首页</li>
        </router-link>
        <router-link to="/news">
          <li>新闻</li>
        </router-link>
        <li class="list" @click="showList">
          产品
          <p v-if="!listLi">
            <img src="../../assets/icon_xiala.png" alt />
          </p>
          <p v-else>
            <img src="../../assets/icon_xiala.png" alt />
          </p>
        </li>
        <ul class="children" v-if="listLi">
          <router-link to="/serve">
            <li>有麦企服</li>
          </router-link>
          <router-link to="/homeland">
            <li>有麦家园</li>
          </router-link>
          <router-link to="/market">
            <li>有麦集市</li>
          </router-link>
          <router-link to="/mall">
            <li>有麦mall</li>
          </router-link>
          <router-link to="/exploit">
            <li>有麦开发</li>
          </router-link>
          <router-link to="/renting">
            <li>有麦租房</li>
          </router-link>
        </ul>
        <router-link to="/garden">
          <li>产业园</li>
        </router-link>
        <router-link to="/versions">
          <li>官方招聘</li>
        </router-link>
        <router-link to="/about">
          <li>关于我们</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import topBar from "../../components/TopBar/index";
import "../../styles/layout.css";
import "../../styles/components/Nav/index.css";

export default {
  name: "nav",
  data() {
    return {
      listLi: false
    };
  },
  components: {
    topBar
  },
  methods: {
    showList() {
      this.listLi = !this.listLi;
    },
    close() {
      this.$emit("closeThis", false);
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
.nav_top {
  width: 100%;
  height: 62px;
  position: relative;
}
.nav_top_center {
  width: 86px;
  height: 62px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background: url("../../assets/img_logo_youmai.png") no-repeat;
  background-size: 100%;
}
.nav_top_center img {
  width: 100%;
  height: 100%;
}
.nav_top_right {
  width: 27px;
  height: 28px;
  margin-top: 25px;
  float: right;
}
.nav_top_right img {
  width: 27px;
  height: 27px;
}
.box_wrap_wrap_box a {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 90px;
}
.children li {
  height: 80px;
  line-height: 80px;
  margin-left: 50px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 90px;
}
.children a {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 72px;
}
.list {
  height: 80px;
  line-height: 80px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 90px;
  display: flex;
  justify-content: space-between;
}
.list p {
  width: 30px;
  height: 30px;
}
.list img {
  width: 100%;
  height: 100%;
}
</style>