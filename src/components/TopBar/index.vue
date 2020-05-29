<template>
    <div class="topbar">
        <div class="topbar_left">
            <p>X</p>
        </div>
        <div class="topbar_center">
            <p>有麦科技服务</p>
        </div>
        <div class="topbar_right" @click="showNav">
            。。。
        </div>
    </div>
</template>

<script>
import '../../styles/components/TopBar/index.css'

export default {
    name:"topbar",
    data(){
        return {

        }
    },
    methods:{
        showNav(){
            console.log(111)
            this.$emit("showNavList",true)
        }
    }
}
</script>

<style scoped>
.topbar {
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    line-height: 88px;
    padding: 0 33px;
    text-align: center;
}
.topbar_center {
    width: 100%;
    justify-content: center;
}
.topbar_center p {
    font-size:32px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(51,51,51,1);
    text-align: center;
}
.topbar_left p {

}
</style>