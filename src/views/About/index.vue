<template>
  <div class="about">
    <!-- <topBar @showNavList="showNavList" /> -->
    <swiper />
    <div class="about_introduce">
      <div class="about_introduce_title">
        <h1>背景介绍</h1>
      </div>
      <div class="segmentation"></div>
      <div class="about_txt">
        <p>江苏有麦科技服务有限公司成立于2020年4月17日， 由原南京电商产业园孵化团队全资成立，其将与软件谷现有的科创城共同打造“有麦电商视频产业园”。现公司以打造新媒体内容生产基地、网络直播孵化基地等多功能为一体的智慧服务型产业园为主，为创客提供短视频拍摄基地、直播路演基地、众创传媒管理、办公及生活配套设施等服务，专注于从事新媒体产业，基于“互联、流量、智能、数据”发展多元文化的孵化，构筑海量数字内容产业的新媒体从业者与线下企业实现获客、产品销售高效价值变现平台。</p>
      </div>
    </div>
    <div class="idea">
      <div class="idea_title">
        <h1>我们的理念</h1>
      </div>
      <div class="segmentation"></div>
      <div class="idea_content">
        <div class="idea_content_box">
          <div class="idea_content_box_img">
            <img src="../../assets/img_linian.png" alt />
          </div>
          <div class="idea_content_box_txt">
            <div class="idea_content_box_txt_title">
              <h1>企业理念</h1>
            </div>
            <div class="idea_content_box_txt_text">
              <p>成就他人</p>
              <p>成就自我</p>
            </div>
          </div>
        </div>
        <div class="idea_content_box">
          <div class="idea_content_box_img">
            <img src="../../assets/img_fuwu.png" alt />
          </div>
          <div class="idea_content_box_txt">
            <div class="idea_content_box_txt_title">
              <h1>服务理念</h1>
            </div>
            <div class="idea_content_box_txt_text">
              <p>创意支持</p>
              <p>紧随潮流</p>
              <p>互动链接</p>
            </div>
          </div>
        </div>
        <div class="idea_content_box">
          <div class="idea_content_box_img">
            <img src="../../assets/img_hexin.png" alt />
          </div>
          <div class="idea_content_box_txt">
            <div class="idea_content_box_txt_title">
              <h1>核心使命</h1>
            </div>
            <div class="idea_content_box_txt_text">
              <p>让您的产品与世界连麦</p>
            </div>
          </div>
        </div>
        <div class="idea_content_box">
          <div class="idea_content_box_img">
            <img src="../../assets/img_jiazhi.png" alt />
          </div>
          <div class="idea_content_box_txt">
            <div class="idea_content_box_txt_title">
              <h1>价值观</h1>
            </div>
            <div class="idea_content_box_txt_text">
              <p>创意创新</p>
              <p>开放协作</p>
              <p>共创共赢</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="idea_title">
        <h1>我们的优势</h1>
      </div>
      <div class="segmentation"></div>
      <div class="advantage_list">
        <div class="advantage_list_box">
          <div class="advantage_list_box_img">
            <img src="../../assets/img_zhaunye.png" alt />
          </div>
          <div class="advantage_list_txt">
            <p>专业的技术团队</p>
          </div>
        </div>
        <div class="advantage_list_box">
          <div class="advantage_list_box_img">
            <img src="../../assets/img_yitihua.png" alt />
          </div>
          <div class="advantage_list_txt">
            <p>一体化服务平台</p>
          </div>
        </div>
        <div class="advantage_list_box">
          <div class="advantage_list_box_img">
            <img src="../../assets/img_yingxiao.png" alt />
          </div>
          <div class="advantage_list_txt">
            <p>全方位整合营销</p>
          </div>
        </div>
        <div class="advantage_list_box">
          <div class="advantage_list_box_img">
            <img src="../../assets/img_siwei.png" alt />
          </div>
          <div class="advantage_list_txt">
            <p>网络化制作思维</p>
          </div>
        </div>
      </div>
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
import topBar from "../../components/TopBar/index";
import swiper from "../../components/Swiper/index";
import navB from "../../components/Nav/index";
import bottomB from "../../components/Bottom/index";
import "../../styles/view/About/index.css";

export default {
  name: "about",
  data() {
    return {
      close: false,
      navTop: false
    };
  },
  components: {
    topBar,
    bottomB,
    swiper,
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
.about_introduce {
  width: 750px;
  margin: auto;
  padding: 0 46px 0 32px;
  margin-top: 49px;
}
.about_introduce h1 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.segmentation {
  width: 100px;
  height: 1px;
  background: rgba(239, 239, 239, 1);
  margin-top: 18px;
}
.about_txt {
  /* width: 750px; */
  margin: auto;
  margin-top: 20px;
}
.about_txt p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 35px;
  margin-top: 20px;
}
.about_txt p:nth-child(1) {
  margin-top: 0;
}
.idea {
  margin-top: 70px;
  padding: 0 46px 0 32px;
}
.idea_title {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.idea_content {
  margin: auto;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  height: 510px;
}
.idea {
  width: 750px;
  margin: auto;
  margin-top: 70px;
}
.idea_content::-webkit-scrollbar {
  display: none;
}
.advantage_list::-webkit-scrollbar {
  display: none;
}
.idea_content_box {
  flex-shrink: 0;
  width: 270px;
  height: 410px;
  box-shadow: 0px 3px 61px 9px rgba(0, 0, 0, 0.06);
  margin-top: 52px;
  margin-left: 20px;
}
.idea_content_box:nth-child(1) {
  margin-left: 0;
}
.idea_content_box_img {
  width: 100%;
  height: 152px;
}
.idea_content_box_img img {
  width: 100%;
  height: 100%;
}
.idea_content_box_txt {
  margin-top: 43px;
  padding: 0 12px;
}
.idea_content_box_txt_text {
  margin-top: 38px;
  margin-left: 12px;
}
.idea_content_box_txt_text p {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
  margin-top: 5px;
}
.idea_content_box_txt_title h1 {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 35px;
  margin-left: 12px;
}
.idea_content_box_txt p {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
}
.advantage {
  width: 750px;
  margin: auto;
  margin-top: 70px;
  padding: 0 46px 0 32px;
}
.advantage_list {
  margin-top: 60px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.advantage_list_box {
  flex-shrink: 0;
  width: 270px;
  text-align: center;
  margin-left: 20px;
}
.advantage_list_box:nth-child(1) {
  margin-left: 0;
}
.advantage_list_box_img {
  width: 270px;
  height: 270px;
}
.advantage_list_box_img img {
  width: 100%;
  height: 100%;
}
.advantage_list_txt {
  margin-top: 22px;
}
.advantage_list_txt {
  margin-bottom: 107px;
}
.advantage_list_txt p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
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