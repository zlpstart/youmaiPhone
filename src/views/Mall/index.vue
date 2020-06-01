<template>
  <div class="mall">
    <!-- <topBar @showNavList="showNavList" /> -->
    <swiperList />
    <div class="mall_content box_wrap_wrap_box">
      <div class="mall_content_about">
        <div class="box_title_title">
          <h1>关于有麦MALL</h1>
        </div>
        <div class="segmentation"></div>
        <div class="mall_content_img">
          <img src="../../assets/img_mall_nor.png" alt />
        </div>
        <div class="mall_content_txt">
          <p>集B2B2C于一身，是一个拥有多元化购物方式的线上购物平台。平台属于垂直化电商们主要销售摄影类器材与直播类器材。有麦MALL以此为核心，项目宗旨为拍客、主播与企业提供一个线上交易平台。</p>
          <p>企业提供带货产品，通过平台上传短视频。拍客与主播通过平台获取带货产品的相关信息，拍成创意短视频或直播间带货销售，成功后获取企业佣金。同时企业可以通过线上投资平台投资拍客与主播，资金用于场地建设、器材购买、网络推广等，产生收益后以股权回报。</p>
        </div>
      </div>
      <div class="show">
        <div class="show_box">
          <div class="box_title_title">
            <h1>产品展示</h1>
          </div>
          <div class="segmentation"></div>
          <div class="show_box_img">
            <img src="../../assets/img_mall_product.png" alt />
          </div>
        </div>
      </div>
      <download />
    </div>
    <navB @closeThis="closeThis" v-if="close" />
    <bottomB />
    <div class="topNav" v-if="navTop">
      <div class="topNav_left">
        <img src="../../assets/img_logo .png" alt />
      </div>
      <div class="topNav_right" @click="showNavList">
        <img src="../../assets/home_icon_nav_black.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import swiperList from "../../components/SwiperList/index";
import topBar from "../../components/TopBar/index";
import bottomB from "../../components/Bottom/index";
import navB from "../../components/Nav/index";
import download from "../../components/Download/index";
import show from "../../components/Show/index";
import "../../styles/view/Mall/index.css";
import "../../styles/layout.css";

export default {
  name: "mall",
  data() {
    return {
      close: false,
      navTop: false
    };
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
      if (!this.close) {
        if (scroll < 0) {
          this.navTop = false;
          this.showTop = false;
        } else {
          this.showTop = true;
          this.navTop = true;
        }
      } else {
        this.navTop = false;
        this.showTop = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    // 监听（绑定）滚轮 滚动事件
  }
};
</script>

<style scoped>
.mall_content_img {
  width: 100%;
  height: 457px;
  margin-top: 20px;
}
.mall_content_about {
  margin-bottom: 79px;
}
.mall_content_img img {
  width: 100%;
  height: 100%;
}
.mall_content_txt {
  margin-top: 31px;
  margin-bottom: 79px;
}
.mall_content_txt p {
  font-size: 26px;
  line-height: 32px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
}
.show_box_img img {
  width: 100%;
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