<template>
  <div class="market">
    <!-- <topBar @showNavList="showNavList" /> -->
    <swiperList />
    <div class="box_wrap_wrap_box">
      <div class="box_title_title">
        <h1>关于有麦集市</h1>
      </div>
      <div class="segmentation"></div>
      <div class="box_wrap_wrap_box_img">
        <img src="../../assets/img_jishi_mo.png" alt />
      </div>
    </div>
    <div class="youmai_content_content">
      <div class="youmai_content_content_wrap">
        <div class="box_wrap_wrap_box">
          <div class="youmai_content_content_wrap_txt">
            <p>有麦集市包括集市办公，集市创作以及有麦网。是通过有麦网直播短视频交易平台，搜集并整合资源成为自媒体创作中心，办公、创作的聚集地。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box_wrap_wrap_box market_content_content">
      <div class="box_title_title">
        <h1>有麦集市内容</h1>
      </div>
      <div class="segmentation"></div>
      <div class="market_content_content_img">
        <div class="market_content_content_img_left">
          <div class="market_content_content_img_left_box">
            <h1>需求发布</h1>
            <p>客户通过集市发布个性化需求</p>
          </div>
          <div class="market_content_content_img_left_box">
            <h1>需求交易</h1>
            <p>线上自由交易，集市办公人员赚取劳务费</p>
          </div>
        </div>
        <div class="market_content_content_img_center">
          <img src="../../assets/img_youmaijishi_nor.png" alt />
        </div>
        <div class="market_content_content_img_right">
          <div class="market_content_content_img_right_box">
            <h1>投资对接</h1>
            <p>单位与个人可以在APP上找寻对接方</p>
          </div>
          <div class="market_content_content_img_right_box">
            <h1>服务商城</h1>
            <p>为每一个单位与个体提供舒适便捷的开发设计交流地</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box_wrap_wrap_box">
      <div class="show">
        <div class="show_box">
          <div class="box_title_title">
            <h1>产品展示</h1>
          </div>
          <div class="segmentation"></div>
          <div class="show_box_img">
            <img src="../../assets/img_jishi_product.png" alt />
          </div>
        </div>
      </div>
      <download />
    </div>
    <navB @closeThis="closeThis" v-if="close" />
    <div class="topNav" v-if="navTop">
      <div class="topNav_left">
        <img src="../../assets/img_logo .png" alt />
      </div>
      <div class="topNav_right" @click="showNavList">
        <img src="../../assets/home_icon_nav_black.png" alt />
      </div>
    </div>
    <bottomB />
  </div>
</template>

<script>
import swiperList from "../../components/SwiperList/index";
import topBar from "../../components/TopBar/index";
import bottomB from "../../components/Bottom/index";
import download from "../../components/Download/index";
import navB from "../../components/Nav/index";
import show from "../../components/Show/index";
import "../../styles/view/Market/index.css";
import "../../styles/layout.css";

export default {
  data() {
    return {
      close: false,
      urlImg: "../../assets/img_banner_jishi.png",
      navTop: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    // 监听（绑定）滚轮 滚动事件
  },
  components: {
    swiperList,
    topBar,
    bottomB,
    download,
    show,
    navB
  },
  methods: {
    showNavList(e) {
      this.close = e;
    },
    closeThis(e) {
      this.close = e;
    },
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scroll < 0) {
        this.navTop = false;
        this.showTop = false;
      } else {
        this.showTop = true;
        this.navTop = true;
      }
    }
  }
};
</script>

<style scoped>
.market_youmai {
  width: 750px;
  height: 346px;
  background: url("../../assets/img_jishi.png");
  opacity: 0.8;
}
.show_box_img {
  margin-top: 45px;
}
.show_box_img img {
  width: 100%;
  height: 100%;
}
.box_wrap_wrap_box p {
  padding-top: 19px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
}
.market_content_content {
  margin-top: 79px;
  margin-bottom: 125px;
}
.market_content_content_img {
  width: 100%;
  height: 541px;
  margin-top: 125px;
  position: relative;
}
.market_content_content_img_left_box {
  position: absolute;
}
.market_content_content_img_left_box p {
  width: 159px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}
.market_content_content_img_right_box p {
  width: 159px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}
.market_content_content_img_right_box h1 {
  width: 159px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 18px;
}
.market_content_content_img_right {
  position: relative;
}
.market_content_content_img_center {
  background: none;
}
.market_content_content_img_center img {
  margin-left: -30px;
}
.market_content_content_img_right .market_content_content_img_right_box {
  position: absolute;
}
.market_content_content_img_left
  .market_content_content_img_left_box:nth-child(2) {
  top: 330px;
}
.market_content_content_img_right
  .market_content_content_img_right_box:nth-child(1) {
  left: -50px;
}
.market_content_content_img_right
  .market_content_content_img_right_box:nth-child(2) {
  left: -50px;
  top: 400px;
}
.market_youmai_youmai p {
  width: 311px;
  padding-top: 80px;
}
.market_youmai_youmai_txt {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
}
.youmai_content_content {
  width: 100%;
  height: 345px;
  background: url("../../assets/img_jishi.png");
  opacity: 0.7;
}
.youmai_content_content_wrap {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  opacity: 0.8;
}
.youmai_content_content_wrap_txt {
  width: 311px;
  padding-top: 87px;
  padding-left: 33px;
}
.youmai_content_content_wrap_txt p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
}
.topNav {
  width: 100%;
  height: 100px;
  background: white;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  padding: 29px 32px;
  box-shadow: 1px 1px 10px #dedede;
}
.topNav_right img {
  margin-top: 5px;
}
.topNav_left {
  width: 60px;
  height: 43px;
}
.topNav_left img {
  width: 100%;
  height: 100%;
}
.topNav_right {
  width: 36px;
  height: 28px;
}
.topNav_right img {
  margin-top: 5px;
  width: 100%;
  height: 100%;
}
</style>