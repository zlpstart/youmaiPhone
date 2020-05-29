<template>
  <div class="download">
    <div class="download">
      <div class="box_title_title">
        <h1>下载关注</h1>
      </div>
      <div class="segmentation"></div>
      <div class="download_content">
        <div class="download_content_box">
          <div class="download_content_box_img">
            <img src="../../assets/erweima.png" alt />
          </div>
          <div class="download_content_box_txt">
            <p v-if="$route.path == '/serve'">有麦企服公众号</p>
            <p v-if="$route.path == '/homeland'">有麦家园公众号</p>
            <p v-if="$route.path == '/market'">有麦集市公众号</p>
            <p v-if="$route.path == '/mall'">有麦mall公众号</p>
            <p v-if="$route.path == '/exploit'">有麦开发公众号</p>
            <p v-if="$route.path == '/renting'">有麦租房公众号</p>
          </div>
        </div>
        <div class="download_content_box">
          <div class="download_content_box_img">
            <img src="../../assets/erweima.png" alt />
          </div>
          <div class="download_content_box_txt">
            <p v-if="$route.path == '/serve'">有麦企服APP</p>
            <p v-if="$route.path == '/homeland'">有麦家园APP</p>
            <p v-if="$route.path == '/market'">有麦集市APP</p>
            <p v-if="$route.path == '/mall'">有麦mallAPP</p>
            <p v-if="$route.path == '/exploit'">有麦开发APP</p>
            <p v-if="$route.path == '/renting'">有麦租房APP</p>
          </div>
        </div>
        <div class="download_content_box_phone">
            <!-- <img src="../../assets/img_mobile.png" alt /> -->
            <!-- 租房 -->
            <img src="../../assets/img_mobile (9).png"  v-if="$route.path == '/renting'">
            <!-- mall -->
            <img src="../../assets/img_mobile (4).png"  v-if="$route.path == '/mall'">
            <!-- 开发 -->
            <img src="../../assets/img_mobile (5).png"  v-if="$route.path == '/exploit'">
            <!-- 企服 -->
            <img src="../../assets/img_mobile (6).png"  v-if="$route.path == '/serve'">
            <!-- 集市 -->
            <img src="../../assets/img_mobile (7).png"  v-if="$route.path == '/market'">
            <!-- 家园 -->
            <img src="../../assets/img_mobile (8).png"  v-if="$route.path == '/homeland'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../styles/components/Download/index.css'

export default {
  name:"download",
  data(){
    return {
      
    }
  },
  props:[]
};
</script>

<style scoped>
.download {
    margin-top: 111px;
}
.download_content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 95px;
}
.download_content_box {
    width: 208px;
}
.download_content_box_img {
    width: 100%;
    height: 207px;
}
.download_content_box_img img {
    width: 100%;
}
.download_content_box_txt {
    margin-top: 18px;
}
.download_content_box_txt p {
    font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(51,51,51,1);
    text-align: center;
}
.download_content_box_phone {
    width:227px;
    height:330px;
}
.download_content_box_phone img {
    width: 100%;
    height: 100%;
}
</style>