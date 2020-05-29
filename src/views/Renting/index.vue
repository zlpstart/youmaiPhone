<template>
  <div class="renting">
    <!-- <topBar @showNavList="showNavList" /> -->
    <swiperList />
    <div class="box_wrap_wrap_box">
      <div class="box_title_title">
        <h1>关于有麦租房</h1>
      </div>
      <div class="segmentation"></div>
      <div class="box_img_img_img">
        <img src="../../assets/img_zufang_nor.png" alt />
      </div>
      <div class="box_txt_txt_txt">
        <p>将传统B2C电商二级分销模式引入办公租赁招商系统中，打造一个真正意义上的全民招商系统。</p>
        <p>用户通过APP转发房源，企业通过链接注册申请入驻园区招商部对接签约，成功后推广人获得推荐佣金奖励。系统实现租房申请、租房审核、合同签订等流程化的全面管理。 该系统结合了线上线下业务场景，为房产机构及租客提供便捷、高效的租房服务。</p>
      </div>
    </div>
    <div class="box_wrap_wrap_box renting_content">
      <div class="box_title_title">
        <h1>有麦租房内容</h1>
      </div>
      <div class="segmentation"></div>
      <div class="renting_content_img">
        <img src="../../assets/img_zufang_mob.png" alt="">
        <!-- <img src="../../assets/img_zufang_mob.png" alt /> -->
      </div>
      <div class="renting_list">
        <div class="renting_list_box">
          <div class="renting_list_box_img">
            <img src="../../assets/icon_message.png" alt />
          </div>
          <div class="renting_list_box_txt">
            <h1>房源信息</h1>
            <p>一二手皆有，房客源均包，实时更新</p>
          </div>
        </div>
        <div class="renting_list_box">
          <div class="renting_list_box_img">
            <img src="../../assets/icon_zulin.png" alt />
          </div>
          <div class="renting_list_box_txt">
            <h1>房源租赁</h1>
            <p>个性化营销中心，全方位提供租赁服务</p>
          </div>
        </div>
        <div class="renting_list_box">
          <div class="renting_list_box_img">
            <img src="../../assets/icon_wechat.png" alt />
          </div>
          <div class="renting_list_box_txt">
            <h1>房源微商</h1>
            <p>提供意向客户，精选推广，快速提升效果</p>
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
            <img src="../../assets/img_zufang_product (1).png" alt />
          </div>
        </div>
      </div>
      <download />
      <navB @closeThis="closeThis" v-if="close" />
    </div>
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
import "../../styles/view/Renting/index.css";
import "../../styles/layout.css";

export default {
  name: "renting",
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
      if (scroll < 0) {
        this.navTop = false;
        this.showTop = false;
      } else {
        this.showTop = true;
        this.navTop = true;
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
.renting_content {
  margin-top: 82px;
  margin-bottom: 99px;
}
.renting_content_img {
  margin-top: 63px;
}
.renting_list {
  margin-top: 39px;
}
.renting_list_box:nth-child(1) {
  margin-top: 0;
}
.renting_list_box {
  width: 100%;
  height:162px;
  padding: 63px 20px 0 20px;
  position: relative;
  margin-top: 58px;
  background:rgba(255,255,255,1);
  box-shadow:0px 7px 29px 0px rgba(183,179,179,0.2);
}
.renting_list_box_img {
  width: 80px;
  height: 80px;
  position: absolute;
  top: -43px;
  left: 22px;
}
.renting_list_box_img img {
  width: 100%;
  height: 100%;
}
.renting_list_box_txt h1 {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  margin-top:-10px;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.renting_list_box_txt p {
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
  margin-top: 18px;
}
.renting_content_img {
  width: 100%;
  height: 758px;
}
.renting_content_img img {
  height: 100%;
  margin-left: 100px;
}
.box_txt_txt_txt p {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
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
.show_box_img img {
  width: 100%;
  height: 100%;
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