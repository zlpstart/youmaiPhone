<template>
  <div class="homeland">
    <!-- <topBar @showNavList="showNavList" /> -->
    <swiperList />
    <div class="box_wrap_wrap_box">
      <div class="box_title_title">
        <h1>关于有麦家园</h1>
      </div>
      <div class="segmentation"></div>
      <div class="homeland_about">
        <div class="homeland_about_box">
          <div class="homeland_about_box_left">
            <img src="../../assets/img_jiayuan_about.png" alt />
          </div>
          <div class="homeland_about_box_right">
            <h1>有 麦 家 园</h1>
            <p>有麦新媒体产业园的建设将大力促进新媒体领域人员、电子商务领域人员，积极转化科技成果，致力于打造在家门口的创业就业以及整合吃住玩乐一体式的“互联网+社区”，带动企业竞争力和实现多方合作共赢。</p>
          </div>
        </div>
        <div class="homeland_about_box">
          <div class="homeland_about_box_right">
            <h1>有 麦 家 园</h1>
            <p>使用在线工单程序，智能便捷的提供多元化服务需求，为有麦短视频产业园内入驻企业提供如“企业申报、物业服务、办公需求对接、场地扩建租赁”等系列线下服务。</p>
          </div>
          <div class="homeland_about_box_left">
            <img src="../../assets/img_jiayuan_ab.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="box_wrap_wrap_box homeland_content">
      <div class="box_title_title">
        <h1>有麦家园内容</h1>
      </div>
      <div class="segmentation"></div>
      <div class="homeland_content_img">
        <img src="../../assets/img_mobile.png" alt />
      </div>
    </div>
    <div class="homeland_content_under"></div>
    <div class="box_wrap_wrap_box homeland_list">
      <div class="homeland_list_box">
        <div class="homeland_list_box_img">
          <img src="../../assets/icon_quanzi.png" alt />
        </div>
        <div class="homeland_list_box_title">
          <h1>圈子</h1>
          <p>兴趣互动社区，划分圈子多向互动</p>
        </div>
      </div>
      <div class="homeland_list_box">
        <div class="homeland_list_box_img">
          <img src="../../assets/icon_jiaoxue.png" alt />
        </div>
        <div class="homeland_list_box_title">
          <h1>教学</h1>
          <p>针对咨询疑问，专门教程讲解</p>
        </div>
      </div>
      <div class="homeland_list_box">
        <div class="homeland_list_box_img">
          <img src="../../assets/icon_daren.png" alt />
        </div>
        <div class="homeland_list_box_title">
          <h1>达人</h1>
          <p>有麦家园中的活跃分子,草根用户的舞台</p>
        </div>
      </div>
      <div class="homeland_list_box">
        <div class="homeland_list_box_img">
          <img src="../../assets/icon_activity.png" alt />
        </div>
        <div class="homeland_list_box_title">
          <h1>活动</h1>
          <p>不定期举办活动，活跃家园气氛</p>
        </div>
      </div>
      <div class="homeland_list_box">
        <div class="homeland_list_box_img">
          <img src="../../assets/icon_huati.png" alt />
        </div>
        <div class="homeland_list_box_title">
          <h1>话题</h1>
          <p>超话让志同道合的人相聚在此,分享快乐,结交同好知音</p>
        </div>
      </div>
      <div class="homeland_list_box">
        <div class="homeland_list_box_img">
          <img src="../../assets/icon_zhishi (1).png" alt />
        </div>
        <div class="homeland_list_box_title">
          <h1>知识</h1>
          <p>行业资讯，新闻资讯</p>
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
            <img src="../../assets/img_jiayuan_product.png" alt />
          </div>
        </div>
      </div>
      <navB @closeThis="closeThis" v-if="close" />
      <download />
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
import "../../styles/view/Homeland/index.css";
import "../../styles/layout.css";

export default {
  name: "",
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
    closeThis(e) {
      this.close = e;
    },
    showNavList(e) {
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
.homeland_about {
  margin-top: 20px;
  margin: auto;
}
.homeland_about_box:nth-child(1){
  margin-top: 20px;
}
.homeland_about_box {
  display: flex;
}
.homeland_about_box_left {
  width: 343px;
  height: 343px;
}
.homeland_about_box_left img {
  width: 100%;
  height: 100%;
}
.homeland_about_box_right {
  height: 343px;
  width: 343px;
  padding: 51px 16px 21px 10px;
}
.homeland_about_box_right h1 {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.homeland_about_box_right p {
  font-size: 22px;
  line-height: 30px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 34px;
}
.homeland_content {
  margin-top: 80px;
  z-index: 2;
}
.homeland_content_img {
  width: 430px;
  height: 690px;
  margin: auto;
  margin-top: 125px;
}
.homeland_content_img img {
  width: 100%;
  height: 100%;
}
.homeland_content_under {
  width: 100%;
  height: 250px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.7;
  position: absolute;
  z-index: -1;
  margin-top: -50px;
}
.homeland_list {
  width: 750px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 115px;
  margin-bottom: 90px;
}
.homeland_list_box {
  width: 194px;
  height: 286px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
box-shadow: 1px 1px 10px #dedede;
  padding-top: 40px;
  margin-top: 30px;
}
.homeland_list_box:nth-child(1) {
  margin-top: 0;
}
.homeland_list_box:nth-child(2) {
  margin-top: 0;
}
.homeland_list_box:nth-child(3) {
  margin-top: 0;
}
.homeland_list_box_img {
  width: 39px;
  margin: auto;
  height: 39px;
}
.homeland_list_box_img img {
  width: 100%;
  height: 100%;
}
.homeland_list_box_title h1 {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin-top: 29px;
}
.homeland_list_box_title p {
  width: 153px;
  font-size: 22px;
  font-family: PingFang SC;
  margin: auto;
  margin-top: 20px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
}
.show_box_img {
  margin-top: 41px;
}
.show_box_img img {
  width: 100%;
  height: 100%;
}
.homeland_list_box_title p {
  text-align: left;
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