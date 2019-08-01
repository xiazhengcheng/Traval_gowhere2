<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    }
}
</script>

<style>
    div,ul,li,img,p{
        padding: 0;
        margin: 0;
    }
    .title {
        margin-top: 10px;
        padding: 10px 0 10px 10px;
        text-align: left;
        background-color:#f6f6f6;
        font-size: 12px;
        width: 310px;
    }
    .item-img-wrapper {
        margin-top: 10px;
    }
    .item-img {
        width: 320px;
    }
    .item-title {
        font-size: 14px;
    }
    .item-desc {
        font-size: 12px;
        color: darkgray;
    }
</style>



