<template>
  <div class="show">
    <div class="show_box">
      <div class="box_title_title">
        <h1>产品展示</h1>
      </div>
      <div class="segmentation"></div>
      <div class="show_box_img">
        <img :src="urlImg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/components/Show/index.css";

export default {
  name:"show",
  data(){
    return {
      
    }
  },
  props:["urlImg"]
};
</script>

<style scoped>
.show_box {
    margin-bottom: 111px;
}
.show_box_img {
    width: 100%;
    height: 460px;
    margin-top: 53px;
}
.show_box_img img {
    width: 100%;
    height: 100%;
}
.market_youmai_youmai p {
    padding-top: 104px;
}
</style>