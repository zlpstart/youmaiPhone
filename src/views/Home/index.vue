<template>
  <div class="home">
    <!-- <topBar @showNavList="showNavList" /> -->
    <div class="home_swiper">
      <div class="home_swiper_top">
        <div class="home_swiper_top_logo">
          <img src="../../assets/home/home_logo.png" alt />
        </div>
        <div class="home_swiper_top_list" @click="showNavList">
          <img src="../../assets/home/home_icon_nav.png" alt />
        </div>
      </div>
      <div class="home_swiper_txt_txt">
        <h1>欢迎来到有麦官网</h1>
      </div>
    </div>
    <div class="home_product home_wrap">
      <div class="home_product_title home_h1">
        <h1>我们的产品</h1>
      </div>
      <div class="segmentation"></div>
      <div class="home_product_list">
        <div class="home_product_list_box">
          <router-link to="/serve">
            <div class="home_product_list_box_img">
              <img src="../../assets/home/icon_qifu_nor.png" alt />
            </div>
            <p>有麦企服</p>
          </router-link>
        </div>
        <div class="home_product_list_box">
          <router-link to="/homeland">
            <div class="home_product_list_box_img">
              <img src="../../assets/home/icon_jiayuan_nor.png" alt />
            </div>
            <p>有麦家园</p>
          </router-link>
        </div>
        <div class="home_product_list_box">
          <router-link to="/market">
            <div class="home_product_list_box_img">
              <img src="../../assets/home/icon_jishi.png" alt />
            </div>
            <p>有麦集市</p>
          </router-link>
        </div>
        <div class="home_product_list_box">
          <router-link to="/mall">
            <div class="home_product_list_box_img">
              <img src="../../assets/home/icon_mall.png" alt />
            </div>
            <p>有麦MALL</p>
          </router-link>
        </div>
        <div class="home_product_list_box">
          <router-link to="/exploit">
            <div class="home_product_list_box_img">
              <img src="../../assets/home/icon_kaifa.png" alt />
            </div>
            <p>有麦开发</p>
          </router-link>
        </div>
        <div class="home_product_list_box">
          <router-link to="/renting">
            <div class="home_product_list_box_img">
              <img src="../../assets/home/icon_zufang.png" alt />
            </div>
            <p>有麦租房</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="home_news home_wrap" @click="pushNews">
      <div class="home_news_title home_h1">
        <h1>有麦新闻</h1>
        <p>更多</p>
      </div>
      <div class="segmentation"></div>
      <div class="home_news_img">
        <img :src="news.pc_img_small" alt />
      </div>
      <div class="home_news_txt">
        <h1>{{news.title}}</h1>
        <p v-for="item in news.content" :key="item">{{item}}</p>
      </div>
    </div>
    <div class="home_garden home_wrap">
      <div class="home_garden_title home_h1">
        <h1>产业园</h1>
      </div>
      <div class="segmentation"></div>
      <div class="home_garden_list_wrap">
        <div class="home_garden_list">
          <div class="home_garden_list_title">
            <div class="home_garden_list_title_box">
              <h1>有麦（南京科创城）</h1>
              <p>南京雨花台区南京软件谷科创城D区D1栋4层</p>
              <p>2020.05</p>
            </div>
          </div>
        </div>
        <div class="home_garden_list">
          <div class="home_garden_list_title">
            <div class="home_garden_list_title_box">
              <h1>有麦（南京科创城）</h1>
              <p>南京雨花台区南京软件谷科创城D区D1栋4层</p>
              <p>2020.05</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_partner home_wrap">
      <div class="home_partner_title home_h1">
        <h1>合作伙伴</h1>
      </div>
      <div class="segmentation"></div>
      <div class="home_partner_list_box">
        <div class="home_partner_list">
          <img src="../../assets/img_jianshebank.png" alt />
        </div>
        <div class="home_partner_list">
          <img src="../../assets/img_pufabank.png" alt />
        </div>
        <div class="home_partner_list">
          <img src="../../assets/img_dongnan.png" alt />
        </div>
        <div class="home_partner_list">
          <img src="../../assets/img_caijin.png" alt />
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="home_partner_title home_h1">
        <h1>联系我们</h1>
      </div>
      <div class="segmentation"></div>
      <div class="contact_form">
        <input type="text" v-model="relation.name" placeholder="姓名:" />
        <input type="text" v-model="relation.email" placeholder="邮箱:" />
        <input type="text" v-model="relation.phone" placeholder="联系电话:" />
        <input type="text" v-model="relation.issue" placeholder="您的问题:" />
        <button @click="showOK">立即联系</button>
      </div>
    </div>
    <div class="over_alert" v-show="show">
      <div class="over_alert_alert">
        <div class="over_alert_alert_wrap">
          <div class="over_alert_close" @click="closeAlert"></div>
          <div class="over_alert_alert_top">
            <img src="../../assets/icon_success.png" alt />
          </div>
          <div class="over_alert_txt">
            <h1>您的问题已提交！</h1>
            <p>我们将在两个工作日内给您回复，请耐心等待，谢谢</p>
          </div>
          <div class="over_alert_button">
            <button @click="closeAlert">知道了</button>
          </div>
        </div>
      </div>
    </div>
    <navB @closeThis="closeThis" v-if="close" />
    <div class="goTop" @click="goTop" v-show="showTop">
      <img src="../../assets/icon_top.png" alt />
    </div>
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
import bottomB from "../../components/Bottom/index";
import navB from "../../components/Nav/index";
import { sendForm } from "../../api/Home/index";
import { getNews } from "../../api/News/index";
import "../../styles/view/Home/index.css";

export default {
  name: "home",
  data() {
    return {
      close: false,
      show: false,
      i: 0,
      showTop: false,
      relation: {
        name: "",
        email: "",
        phone: "",
        issue: ""
      },
      navTop: false,
      news: {}
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true), 
    this.getNewss();
  },
  computed: {
    getphone() {
      let scrollTop = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      let curH = window.innerHeight + scrollTop;
      let docH = Math.max(
        document.documentElement.clientHeight,
        document.body.clientHeight
      );
      return scrollTop, curH, docH;
    }
  },
  components: {
    topBar,
    bottomB,
    navB
  },
  methods: {
    go: function() {
      var _this = this;
      this.timer = setInterval(function() {
        _this.autoPlay();
      }, 2000);
    },
    stop: function() {
      clearInterval(this.timer);
      this.timer = null;
    },
    showNavList() {
      this.close = true;
    },
    closeThis(e) {
      this.close = e;
    },
    showOK() {
      if (
        this.relation.name != "" &&
        this.relation.email != "" &&
        this.relation.phone != "" &&
        this.relation.issue != ""
      ) {
        const para = {
          name: this.relation.name,
          email: this.relation.email,
          phone: this.relation.phone,
          problem: this.relation.issue
        };
        let a = this.phone(para.phone);
        let b = this.email(para.email);
        if (a && b) {
          const jsonA = JSON.stringify(para);
          sendForm(jsonA).then(res => {
            console.log(res.data);
            if (res.data.status == 200) {
              this.show = true;
            } else {
              alert("系统异常");
            }
          });
        } else {
          alert("手机号或邮箱有误");
        }
      } else {
        alert("您的信息并未完善");
      }
    },
    closeAlert() {
      this.show = false;
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
    goTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    pushNews() {
      this.$router.push("/news");
    },
    getNewss() {
      getNews().then(res => {
        this.news = res.data.data.recommend;
      });
    },
    phone(e) {
      const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(e)) {
        return false;
      } else {
        return true;
      }
    },
    email(e) {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(e)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.home_swiper {
  width: 100%;
  height: 419px;
  padding: 30px 32px 0 32px;
  background: url("../../assets/home_banner_mo (1).png") no-repeat center center;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.home_h1 h1 {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.home_h1 p {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #999999;
  line-height: 28px;
}
.home_wrap {
  width: 686px;
  margin: auto;
}
.home_swiper_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.home_swiper_top_logo {
  width: 60px;
  height: 43px;
}
.home_swiper_top_logo img {
  width: 100%;
  height: 100%;
}
.home_swiper_top_list {
  width: 36px;
  height: 28px;
}
.home_swiper_top_list img {
  width: 100%;
  height: 100%;
}
.home_swiper_txt {
  margin-top: 91px;
}
.home_swiper_txt_txt {
  margin-top: 59px;
}
.home_swiper_txt_txt h1 {
  font-size: 32px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.home_swiper_txt h1 {
  color: rgba(255, 255, 255, 1);
}
.home_swiper_txt p {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  opacity: 0.5;
  margin-top: 31px;
}
.home_product {
  width: 686px;
  height: 487px;
  margin: auto;
  margin-top: 46px;
}
.home_product_title {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.home_product_list {
  margin-top: 17px;
}
.home_product_list_box {
  width: 210px;
  height: 180px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 54px 0 35px 0;
}
.home_product_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.home_product_list_box_img {
  width: 52px;
  height: 45px;
  margin: auto;
}
.home_product_list_box_img img {
  width: 100%;
}
.home_product_list_box p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  text-align: center;
  color: rgba(51, 51, 51, 1);
  margin-top: 23px;
}
.home_news_title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.home_news_title p {
  width: 74px;
  height: 34px;
  border: 1px solid rgba(222, 222, 222, 1);
  text-align: center;
  line-height: 34px;
  color: #999999;
}
.home_news_title .segmentation {
  width: 100px;
  height: 1px;
  background: rgba(239, 239, 239, 1);
  margin-top: 15px;
}
.home_news_img {
  width: 100%;
  height: 332px;
  margin-top: 20px;
}
.home_news_img img {
  width: 100%;
  height: 100%;
}
.home_news_txt {
  margin-top: 29px;
}
.home_news_txt h1 {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.home_news_txt p {
  font-size: 22px;
  height: 55px;
  overflow: hidden;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 28px;
  margin-top: 15px;
}
.home_garden {
  margin-top: 75px;
  padding: 10px;
}
.home_garden_list_wrap {
  height: 400px;
  position: relative;
  margin-top: 20px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
.home_garden_list_wrap::-webkit-scrollbar {
  display: none;
}
.home_garden_list {
  width: 599px;
  height: 300px;
  float: left;
  background-size: 100%;
  margin-left: 61px;
  flex-shrink: 0;
}
.home_garden_list:nth-child(1) {
  background: url("../../assets/img_kechuangc.png") no-repeat center;
  background-size: 100% auto;
}
.home_garden_list:nth-child(2) {
  background: url("../../assets/img_xinyi.png") no-repeat center;
  background-size: 100% auto;
}
.home_garden_list:nth-child(1) {
  margin-left: 0;
}
.home_garden_list_title {
  width: 600px;
  height: 186px;
  margin-top: 207px;
  margin-left: 30px;
  background: rgba(255, 255, 255, 1);
  padding: 21px 52px 20px 21px;
  box-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.07);
}
.home_garden_list_title h1 {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.home_garden_list_title p {
  line-height: 22px;
}
.home_garden_list_title p:nth-child(2) {
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  margin-top: 16px;
}
.home_garden_list_title p:nth-child(3) {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(153, 153, 153, 1);
  margin-top: 69px;
}
.home_partner {
  margin-top: 92px;
  margin-bottom: 160px;
}
.home_partner_list_box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 47px;
  flex-wrap: wrap;
}
.home_partner_list {
  width: 50%;
  margin-top: 10px;
}
/* .home_partner_list:nth-child(2) {
  margin-left: 54px;
  position: relative;
}
.home_partner_list:nth-child(3) {
  margin-top: 38px;
  position: relative;
}
.home_partner_list:nth-child(4) {
  margin-top: 29px;
  margin-left: 59px;
  position: relative;
} */
.home_partner_list_box .home_partner_list:nth-child(1) img {
  width: 264px;
  height: 53px;
}
.home_partner_list_box .home_partner_list:nth-child(2) img {
  width: 171;
  height: 52px;
}
.home_partner_list_box .home_partner_list:nth-child(3) img {
  width: 165px;
  margin-top: 48px;
  height: 47px;
}
.home_partner_list_box .home_partner_list:nth-child(4) img {
  width: 232px;
  height: 68px;
  margin-top: 48px;
}
.contact {
  width: 686px;
  margin-top: 195px;
  margin: auto;
  margin-bottom: 63px;
}
.contact_form {
  width: 686px;
  height: 500px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 7px 29px 0px rgba(0, 0, 0, 0.07);
  margin-top: 30px;
  position: relative;
}
.contact_form input {
  width: 100%;
  height: 88px;
  font-size: 24px !important;
  padding: 0 30px;
  background: rgba(255, 255, 255, 1);
  border: none;
}
.contact_form button {
  width: 310px;
  height: 88px;
  background: rgba(29, 178, 234, 1);
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 28px;
  border: none;
  position: absolute;
  left: 50%;
  top: 382px;
  transform: translate(-50%, 0);
  margin-bottom: 63px;
}
.over_alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
.over_alert_alert {
  width: 476px;
  height: 482px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 58px;
}
.over_alert_alert_wrap {
  width: 359px;
  margin: auto;
}
.over_alert_alert_top {
  width: 90px;
  height: 90px;
  margin: auto;
}
.over_alert_alert_top img {
  width: 100%;
  height: 100%;
}
.over_alert_txt h1 {
  font-size: 30px;
  margin-left: 27px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 61px;
  margin-top: 39px;
}
.over_alert_close {
  width: 26px;
  height: 26px;
  background: red;
  float: right;
  margin-top: -40px;
  margin-right: -40px;
  background: url("../../assets/icon_close (1).png") no-repeat center center;
}
.over_alert_txt p {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
  margin-top: 21px;
}
.over_alert_txt {
  text-align: center;
}
.over_alert_button {
  width: 300px;
  margin: auto;
  margin-top: 60px;
  background: white;
}
.over_alert_button button {
  font-size: 25px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 41px;
  width: 300px;
  height: 60px;
  border: 1px solid rgba(0, 175, 240, 1);
  border-radius: 2px;
  background: white;
}
.goTop {
  width: 157px;
  height: 157px;
  position: fixed;
  top: 800px;
  cursor: pointer;
  right: 0;
}
.goTop img {
  width: 100%;
  height: 100%;
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
.topNav_right {
  width: 36px;
  height: 28px;
}
.topNav_right img {
  margin-top: 5px;
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
.home_garden_list_title_box {
  box-shadow: none;
}
</style>