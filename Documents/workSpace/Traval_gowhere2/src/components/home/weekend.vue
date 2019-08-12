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
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>

<style lang='stylus' scoped>
.title 
    margin-top: 10px;
    padding: 10px 0 10px 30px;
    text-align: left;
    background-color: #f6f6f6;
    font-size: 12px;
    width: 100%;

.item-img-wrapper {
    margin-top: 10px;
}

.item-info {
    width: 100%;
    margin-top: 10px;
}

.item-img {
    width: 100%;
}

.item-desc {
    font-size: 14px;
    color: darkgray;
}
</style>



