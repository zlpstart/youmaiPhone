<template>
  <div class="WorkIntroduce">
    <!-- <topBar @showNavList="showNavList" /> -->
    <swiper />
    <div class="WorkIntroduce_responsibility">
      <div class="WorkIntroduce_responsibility_title">
        <h1>岗位职责</h1>
      </div>
      <div class="segmentation"></div>
      <div class="WorkIntroduce_responsibility_txt">
        <p v-for="item in duty" :key="item">{{item}}</p>
      </div>
    </div>
    <div class="WorkIntroduce_require">
      <div class="WorkIntroduce_responsibility_title">
        <h1>任职要求</h1>
      </div>
      <div class="segmentation"></div>
      <div class="WorkIntroduce_responsibility_txt">
        <p v-for="item in requirement" :key="item">{{item}}</p>
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
import "../../styles/view/WorkIntroduce/index.css";
import {RecruitDuty} from '../../api/WorkIntroduce/index'

export default {
  name: "WorkIntroduce",
  data() {
    return {
      close: false,
      navTop: false,
      showDatas:null,
      duty:[],
      requirement:[]
    };
  },
  mounted() {
    // 监听（绑定）滚轮 滚动事件
    window.addEventListener("scroll", this.handleScroll, true);
    const para = {
      id:this.$route.params.e
    }
    let a = JSON.stringify(para)
    RecruitDuty(a).then(res => {
      this.duty = res.data.data.duty
      this.requirement = res.data.data.requirement
    })
    // this.showData()
  },
  components: {
    topBar,
    bottomB,
    swiper,
    navB
  },
  methods: {
    getListId(){
    },
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
.WorkIntroduce_responsibility {
  width: 750px;
  margin: auto;
  margin-top: 48px;
  padding: 0 46px 0 32px;
}
.segmentation {
  width: 100px;
  height: 1px;
  background: rgba(239, 239, 239, 1);
  margin-top: 18px;
}
.WorkIntroduce_responsibility_txt {
  margin-top: 36px;
  margin-bottom: 100px;
}
.WorkIntroduce_responsibility_txt p:nth-child(1) {
  margin-top: 0;
}
.WorkIntroduce_responsibility_txt p {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-top: 20px;
}
.WorkIntroduce_require {
  width: 750px;
  margin: auto;
  padding: 0 46px 0 32px;
}
.WorkIntroduce_responsibility_title h1 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
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