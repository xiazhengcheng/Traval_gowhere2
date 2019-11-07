<template>
    <div>
        <div  class="child1" @click='handleClick'>child1</div>
    </div>
</template>
<script>
export default {
    name: 'Child1',
    data() {
        return {

        }
    },
    methods: {
        handleClick() {
            this.$root.Bus.$emit('log',120)
        }
    }
}
</script>
<style lang='stylus' scoped>

.child1
    position absolute
    width 50%
    height .5rem
    line-height .5rem
    top .64rem
    margin 0 auto
    background-color yellow 

</style>

