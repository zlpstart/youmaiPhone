<template>
  <div class="versions">
    <!-- <topBar @showNavList="showNavList" /> -->
    <div class="swiper">
      <img src="../../assets/img_zhaopin_nor.png" alt />
    </div>
    <!-- <swiper /> -->
    <div class="versions_post">
      <div class="versions_post_title">
        <h1>招聘职位</h1>
      </div>
      <div class="segmentation"></div>
      <div 
        class="versions_post_list" 
        @click="pushJob(item.id)"
        v-for="item in RecruitDutyList"
        :key="item.id"
      >
        <h1>{{item.position_name}}</h1>
        <div class="versions_post_list_contact">
          <div class="versions_post_list_left">
            <p>{{item.address}}</p>
            <p>{{item.department}}</p>
          </div>
          <div class="versions_post_list_right">
            <img src="../../assets/icon_link.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="versions_phone">
      <div class="versions_post_title">
        <h1>招聘专线</h1>
      </div>
      <div class="segmentation"></div>
      <div class="versions_phone_list">
        <div class="versions_phone_list_box">
          <div class="versions_phone_list_box_img">
            <div class="versions_phone_list_box_img_img">
              <img src="../../assets/icon_email (2).png" alt />
            </div>
          </div>
          <div class="versions_phone_list_box_txt">
            <h1>邮箱地址：</h1>
            <p>youmai@keji.net</p>
          </div>
        </div>
        <div class="versions_phone_list_box">
          <div class="versions_phone_list_box_img">
            <div class="versions_phone_list_box_img_img">
              <img src="../../assets/icon_phone (2).png" alt />
            </div>
          </div>
          <div class="versions_phone_list_box_txt">
            <h1>公司电话</h1>
            <p>025-57796391</p>
          </div>
        </div>
      </div>
    </div>
    <div class="topNav" v-if="navTop">
      <div class="topNav_left">
        <img src="../../assets/img_logo .png" alt />
      </div>
      <div class="topNav_right" @click="showNavList">
        <img src="../../assets/home_icon_nav_black.png" alt />
      </div>
    </div>

    <navB @closeThis="closeThis" v-if="close" />
    <bottomB />
  </div>
</template>

<script>
import topBar from "../../components/TopBar/index";
import swiper from "../../components/Swiper/index";
import navB from "../../components/Nav/index";
import bottomB from "../../components/Bottom/index";
import "../../styles/view/Versions/index.css";
import {RecruitDuty} from '../../api/versions/index'

export default {
  name: "versions",
  data() {
    return {
      close: false,
      navTop: false,
      RecruitDutyList:[]
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
    pushJob(e) {
      this.$router.push(`/workIntroduce/${e}`);
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
    },
    getVersions(){
      RecruitDuty().then(res => {
        console.log(res.data.data)
        this.RecruitDutyList = res.data.data
      })
    }
  },
  mounted() {
    // 监听（绑定）滚轮 滚动事件
    window.addEventListener("scroll", this.handleScroll, true);
    this.getVersions()
  }
};
</script>

<style scoped>
.versions_post {
  width:750px;
  margin: auto;
  padding: 0 46px 0 32px;
  margin-top: 48px;
}
.versions_post_title h1 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.segmentation {
  width: 100px;
  height: 2px;
  background: rgba(239, 239, 239, 1);
  margin-top: 18px;
}
.versions_post_list {
  margin-top: 20px;
  padding: 24px 0;
}
.versions_post_list h1 {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.versions_post_list_contact {
  display: flex;
  justify-content: space-between;
}
.versions_post_list_left p {
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 9px;
}
.versions_phone {
  width: 750px;
  margin: auto;
  padding: 0 46px 0 32px;
  margin-top: 57px;
}
.versions_phone_list {
  margin-top: 47px;
}
.versions_phone_list_box {
  width: 292px;
  height: 90px;
  display: flex;
  justify-content: space-between;
}
.versions_phone_list_box_img {
  width: 90px;
  height: 90px;
}
.versions_phone_list_box_img_img {
  width: 90px;
  height: 90px;
  margin: auto;
  margin-top: 35px;
  border: linear-gradient(to right, #ccc 0%, #ccc 50%, transparent 50%);
}
.versions_phone_list_box_img_img img {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 360px;
  background: rgba(0, 0, 0, 1);
}
.swiper img {
  width: 100;
  height: 100%;
}
.versions_phone_list_box_txt {
  margin-top: 50px;
  margin-left: 35px;
}
.versions_phone_list_box_txt h1 {
  font-size: 24px;
  color: #666666;
}
.versions_phone_list_box_txt p {
  width: 200px;
  font-size: 24px;
  color: #333333;
  margin-top: 10px;
  font-weight: Bold;
}
.versions_phone_list .versions_phone_list_box:nth-child(2){
  margin-bottom: 100px;
}
.versions_phone_list_box {
  margin-top: 30px;
}
.versions_phone_list_box:nth-child(1) {
  margin-top: 0px;
}
.versions_phone_list_box:nth-last-child(1) {
  margin-bottom: 102px;
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