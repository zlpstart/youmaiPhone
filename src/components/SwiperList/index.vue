<template>
  <div class="swiperList">
    <div class="swiperList_img">
      <!-- 企服 -->
      <img src="../../assets/img_banner_jishi.png" v-if="$route.path == '/serve'" alt />
      <!-- 家园 -->
      <img src="../../assets/img_jiayuan_mob.png" v-if="$route.path == '/homeland'" alt="">
      <!-- 集市  -->
      <img src="../../assets/img_banner_jishi.png" v-if="$route.path == '/market'" alt="">
      <!-- mall -->
      <img src="../../assets/img_mall_mob.png" v-if="$route.path == '/mall'" alt="">
      <!-- 开发 -->
      <img src="../../assets/img_kafa_mob.png" v-if="$route.path == '/exploit'" alt="">
      <!-- 租房 -->
      <img src="../../assets/img_zufang_mob (2).png" v-if="$route.path == '/renting'" alt="">
    </div>
    <div class="swiperList_list">
      <div class="swiperList_list_box">
        <div class="swiperList_list_box_img">
          <img src="../../assets/icon_zhihui .png" alt />
        </div>
        <div class="swiperList_list_box_txt">
          <p>智慧</p>
        </div>
      </div>
      <div class="swiperList_list_box">
        <div class="swiperList_list_box_img">
          <img src="../../assets/icon_gaoxiao.png" alt />
        </div>
        <div class="swiperList_list_box_txt">
          <p>高效</p>
        </div>
      </div>
      <div class="swiperList_list_box">
        <div class="swiperList_list_box_img">
          <img src="../../assets/icon_lianjie.png" alt />
        </div>
        <div class="swiperList_list_box_txt">
          <p>连接</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/components/SwiperList/index.css";

export default {
  name: "swiperList",
  data() {
    return {};
  },
  props:["backgroundImg"],
  mounted(){
    // console.log(this.$route.path)
  }
};
</script>

<style scoped>
.swiperList {
    width:100%;
    height:493px;
    position: relative;
    margin-bottom: 60px;
}
.swiperList_img {
    width: 100%;
    height:360px;
    background:rgba(0,0,0,1);
}
.swiperList_img img {
    width: 100%;
    height: 100%;
}
.swiperList_list {
    height: 180px;
    position: absolute;
    top: 313px;
    left: 50%;
    transform: translate(-50%,0);
    width:600px;
    display: flex;
    justify-content: space-between;
}
.swiperList_list_box {
    width: 180px;
    height: 180px;
    text-align: center;
    background: white;
    box-shadow:0px 0px 6px 0px #dedede;
}
.swiperList_list_box_img {
    width: 47px;
    height: 47px;
    margin: auto;
    margin-top: 42px;
}
.swiperList_list_box_img img {
    width: 100%;
    height: 100%;
}
.swiperList_list_box_txt p {
    font-size:22px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:28px;
    margin-top: 31px;
}


</style>