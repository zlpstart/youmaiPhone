<template>
  <div class="news">
    <div class="news_contentWrap">
      <div class="box_wrap_wrap_box">
        <div class="news_content">
          <div class="box_title_title">
            <h1>{{recommend.title}}</h1>
          </div>
          <div class="news_content_date">
            <p>{{recommend.create_time}}</p>
          </div>
          <div class="box_img_img_img">
            <img :src="recommend.new_img" alt />
          </div>
          <div class="news_content_txt">
            <p>{{recommend.content}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="news_other box_wrap_wrap_box">
      <div class="news_other_title">
        <p>其他新闻</p>
      </div>
      <div class="news_other_list" v-for="item in Norecommend" :key="item.name" @click="changeNews(item.id)">
        <div class="news_other_list_txt">
          <h1>{{item.title}}</h1>
          <p>{{item.create_time}}</p>
        </div>
        <div class="news_other_list_img">
          <img :src="item.new_img" alt />
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
import {getNews,getNewsContent} from '../../api/News/index'
import "../../styles/view/News/index.css";
import "../../styles/layout.css";

export default {
  name: "news",
  data() {
    return {
      close: false,
      navTop: false,
      recommend:{},  
      Norecommend:[],
    };
  },
  components: {
    topBar,
    bottomB,
    navB
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true),
    getNews().then(res => {
      this.recommend = res.data.data.recommend
      this.Norecommend = res.data.data.Norecommend
    })
    this.createNews()
  },
  methods: {
    createNews(){

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
    },
    changeNews(e){
      const para = {
        id:e
      }
      let a = JSON.stringify(para)
      getNewsContent(a).then(res => {
        this.recommend = res.data.data
      })
    }
  }
};
</script>

<style scoped>
.news {
  background: rgba(244, 244, 244, 1);
}
.news_contentWrap {
  background: white;
}
.news_content {
  margin-top: 32px;
  background: white;
  padding-bottom: 62px;
}
.news_content_date p {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 20px;
  margin-bottom: 30px;
}
.news_content_txt p {
  margin-top: 29px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 35px;
}
.news_other {
  margin-top: 10px;
  background: white;
}
.news_other_title {
  padding-top: 57px;
}
.news_other_title p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
}
.news_other_list:nth-last-child(1) {
  border: none;
}
.news_other_list {
  width: 100%;
  height: 210px;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(222, 222, 222, 1);
}
.news_other_list_txt {
  width: 414px;
}
.news_other_list_txt h1 {
  width: 414px;
  height: 50px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 33px;
  color: rgba(51, 51, 51, 1);
}
.news_other_list_txt p {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 70px;
}
.news_other_list_img {
  width: 226px;
  height: 150px;
}
.news_other_list_img img {
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
.box_title_title h1 {
  font-size:30px;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height: 38px;
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