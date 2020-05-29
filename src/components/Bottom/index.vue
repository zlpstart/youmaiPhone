<template>
    <div class="bottom">
        <p>@苏ICP备20030431号</p>
        <p>中国 南京 雨花台区大周路88号D区1栋4层</p>
        <p>邮箱：fuwu@iyoumai.net  联系电话：025-57796391</p>
        <p>工作时间：周一-周五09:00-18:00</p>
        <p>公网安备</p>
    </div>
</template>

<script>
import '../../styles/components/Bottom/index.css'

export default {
    name:"bottom",
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.bottom {
    width: 100%;
    height: 344px;
    padding: 55px 0 0 0;
    background: #262626;
    text-align: center;
}
.bottom p {
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:24px;
    margin-top: 29px;
}
.bottom p:nth-child(1){
    margin-top: 0;
}
</style>