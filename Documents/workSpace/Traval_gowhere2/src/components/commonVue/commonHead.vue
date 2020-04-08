<template>
    <div class="commonHead">
        详情
      <div class="iconfont header-back" @click="navBack()">&#xe624;</div>
    </div>
</template>

<script>
export default {
    name:'commonHead',
    methods: {
        navBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~@/assets/styles/varibles.styl';
    .commonHead
        height: $headerHeight;
        line-height: $headerHeight;
        background-color: $bgColor;
        color : white;
        font-size: 20px;
        .header-back
            position: absolute;
            top: 0;
            left: 0;
            width: 0.64rem;
            text-align: center;
            font-size: 0.4rem;
            color: #fff;
</style>
