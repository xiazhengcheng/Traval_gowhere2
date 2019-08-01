<template>
    <div class="head">
        <div class="header-left">
            <div class="back-icon" @click='navClick'></div>
        </div>
        <div class="nav_title">
            城市列表
        </div>
    </div>
</template>
<script>
export default {
    name:'CityHeader',
    methods: {
        navClick() {
            console.log(this.$router);
            this.$router.go(-1);
        }
    }
}
</script>
<style>
    .div,p{
        padding: 0;
        margin: 0;
    }

    .header-left {
        width:44px;
        height:44px;
        line-height:40px;
        color:white;
        font-size:10px;
        float:left;

        
    }
    .head {
        width: 320px;
        height: 44px;
        /* position: fixed; */
    }
    .back-icon {
        height:19px;
        width:11px;
        margin:12px; 
        background: url('../../assets/imageData/nav_back.png') no-repeat;
    }
    .nav_title {
        width: 260px;
        height: 44px;
        color: white;
        font-size: 16px;
        float: left;
        /* background-color: blue; */
        line-height: 44px;
    }
</style>


