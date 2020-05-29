<template>
  <div class="garden">
    <!-- <topBar @showNavList="showNavList" /> -->
    <div class="garden_wrap box_wrap_wrap_box">
      <div class="garden_wrap_top">
        <div class="garden_wrap_top_box">
          <div class="garden_wrap_top_box_xian"></div>
          <h1>南京科创城</h1>
        </div>
      </div>
      <div class="garden_wrap_content">
        <div class="garden_wrap_content_title box_title_title">
          <h1>办公环境</h1>
        </div>
        <div class="segmentation"></div>
        <div class="box_img_img_img box_box_box">
          <div class="box_img_img_img_box" v-if="swiper==0">
            <img src="../../assets/img_huanjing.png" alt />
          </div>
          <!-- <div class="box_img_img_img_box" v-if="swiper==1">
            <img src="../../assets/img_hexin.png" alt />
          </div> -->
          <div class="box_img_img_img_box" v-if="swiper==1">
            <img src="../../assets/img_yuhua.png" alt />
          </div>
          <div class="box_li">
            <ul>
              <li :class="{isBlue:true,isBlue:true}"></li>
              <li :class="{isWhite:true,isBlue:swiper==0}"></li>
              <li :class="{isWhite:true,isBlue:swiper==1}"></li>
              <!-- <li :class="{isWhite:true,isBlue:swiper==2}"></li> -->
            </ul>
          </div>
        </div>
        <div class="box_txt_txt_txt garden_wrap_content_txt">
          <p>集接待、会议、拍摄为一体，打造复合型新概念办公空间。明快自在的接待区、自然温馨的会议室，丰富多元的拍摄区。在各自扮演者重要角色功能的同时，又制造着互动的惊喜。</p>
        </div>
      </div>
      <div class="garden_wrap_site">
        <div class="garden_wrap_content_title box_title_title">
          <h1>拍摄场景</h1>
        </div>
        <div class="segmentation"></div>
        <div class="box_img_img_img garden_wrap_site_margin">
          <img src="../../assets/img_photo_1.png" alt />
        </div>
        <div class="garden_wrap_site_img">
          <div class="garden_wrap_site_img_box">
            <h1>直播基地</h1>
            <div class="xian"></div>
            <p>有麦直播基地位于软件谷科创城D1栋内，该基地为有麦平台会员提供共享拍摄道具及场地，基地内有丰富多样的拍摄器材，短视频制作主题房间与创意交流茶吧空间。经过专业筛选，满足各类拍摄需求</p>
          </div>
        </div>
      </div>
      <div class="garden_wrap_relaxation">
        <div class="garden_wrap_content_title box_title_title">
          <h1>休闲区</h1>
        </div>
        <div class="segmentation"></div>
        <div class="box_img_img_img box_box_box">
          <div class="box_img_img_img_box" v-if="swiper==0">
            <img src="../../assets/garden1.png" alt />
          </div>
          <div class="box_img_img_img_box" v-if="swiper==1">
            <img src="../../assets/garden2.png" alt />
          </div>
          <!-- <div class="box_img_img_img_box" v-if="swiper==2">
            <img src="../../assets/garden3.png" alt />
          </div> -->
          <div class="box_li">
            <ul>
              <li :class="{isBlue:true,isBlue:true}"></li>
              <li :class="{isWhite:true,isBlue:swiper==0}"></li>
              <li :class="{isWhite:true,isBlue:swiper==1}"></li>
              <!-- <li :class="{isWhite:true,isBlue:swiper==2}"></li> -->
            </ul>
          </div>
        </div>
        <div class="garden_wrap_relaxation_p">
          <p>休闲空间作为缓解员工紧张工作的休息放松、交流娱乐区域，是办公空间人性化标志设计之一。宽敞舒适的空间搭配丰富的绿化、充足的阳光或柔和的人工光源，营造轻松、愉悦的环境，这对于从事创造性工作的员工来说不无裨益。</p>
        </div>
      </div>
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
import topBar from "../../components/TopBar/index";
import bottomB from "../../components/Bottom/index";
import navB from "../../components/Nav/index";
import "../../styles/view/Garden/index.css";
import "../../styles/layout.css";

export default {
  name: "garden",
  data() {
    return {
      close: false,
      navTop: false,
      swiper:0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    let timer = setInterval(()=>{
      this.swiper += 1
      if(this.swiper >= 2){
        this.swiper = 0
      }
    },3000)
    // 监听（绑定）滚轮 滚动事件
  },
  components: {
    topBar,
    bottomB,
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
.garden_wrap_top {
  width: 100%;
  height: 457px;
  background: url("../../assets/img_yuhua (1).png") center center;
  background-size: 100%;
  position: relative;
}
.garden_wrap_relaxation_p p {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 32px;
  color: rgba(102, 102, 102, 1);
}
.garden_wrap_top_box {
  width: 277px;
  height: 173px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0px 0px 0px 10px;
  padding: 60px 20px 46px 20px;
}
.garden_wrap_top_box_xian {
  width: 109px;
  height: 1px;
  background: white;
  opacity: 1;
}
.garden_wrap_top_box h1 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: white;
  margin-top: 37px;
  opacity: 1;
}
.garden_wrap_content {
  margin-top: 49px;
}
.garden_wrap_content_title {
}
.garden_wrap_relaxation {
  margin-bottom: 71px;
}
.garden_wrap_content {
  margin-bottom: 59px;
}
.garden_wrap_content_txt {
  margin-top: 20px;
}
.garden_wrap_content_txt p {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 32px;
  color: rgba(102, 102, 102, 1);
}
.garden_wrap_site {
  margin-bottom: 60px;
}
.garden_wrap_site_margin {
  margin-bottom: 0;
}
.garden_wrap_site_img {
  width: 100%;
  height: 310px;
  background: url("../../assets/img_photo_2.png") center center;
  background-size: 100%;
}
.garden_wrap_site_img_box {
  width: 343px;
  height: 310px;
  padding: 25px 27px 35px 32px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.7;
}
.xian {
  width: 109px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
  margin-top: 14px;
}
.garden_wrap_site_img_box h1 {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.garden_wrap_site_img_box p {
  width: 285px;
  font-size: 22px;
  font-family: PingFang SC;
  line-height: 28px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 15px;
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
.box_box_box {
  position: relative;
}
.box_img_img_img_box {
  width: 100%;
  height: 100%;
  position: absolute;
}
.box_li {
  width: 60px;
  height: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%,0);
}
.box_li ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.isWhite {
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: white;
}
.isBlue {
  background: #1DB2EA;
}
</style>