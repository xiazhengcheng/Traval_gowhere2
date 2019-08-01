<template>
    <div class="head">
        <div class="header-left">
            <div class="back-icon"></div>
        </div>
        <div class="header-input">
            <span class="iconfont"></span>
            <input type="text">
        </div>
        <router-link :to="{name:'city',params:{city:city}}">
            <div class="header-right">
                <span class='arrow-icon'>&#xe64a;</span>
                {{city}}
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
    name: "HomeHeader",
    props:{
        city:String
    },
    data () {
        return {

        }
    }
}
</script>

<style>
    h,p,a {
        margin:0;
        padding:0;
    }
    .head {
        background-color: #ff6623;
        width: 320px;
        height:44px;
        /* position: fixed; */
    }
    .header-left {
        width:44px;
        height:44px;
        line-height:40px;
        color:white;
        font-size:10px;
        float:left;

        
    }
    .back-icon {
        height:19px;
        width:11px;
        margin:12px; 
        background: url('../../assets/imageData/nav_back.png') no-repeat;
    }
    .header-input {
        float:left;
        background-color:white;
        width:200px;
        height:30px;
        margin-top:6px; 
        font-size:10px; 
        text-align:left;
        line-height:30px;
        color:darkGray;
        background-color:#f9f9f9;
    }
    input {
        width:167px;
        height:28px;
        float:right;
        border:0 white solid;

    }
    .iconfont {
        font-size:10px;
        display:block;
        float:left;
        width:12px;
        height:12px;
        margin:8px 3px 0 5px;
        background:url('../../assets/imageData/nav_search.png')
    }
    .header-right {
        float:left;
        color:white;
        height:30px;
        margin-top:6px;
        font-size:10px;
        line-height:30px;

    }
    .arrow-icon {
        margin-left: 20px;
    }
</style>
