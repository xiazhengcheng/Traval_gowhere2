<template>
  <div>
    <div  class="child2" ref="content1">{{contentStr}}</div>
  </div>
</template>

<script>
export default {
  name: "Child2",
  data() {
    return {
      contentStr: 'child2'
    };
  },
  mounted() {

      var that = this
      this.$root.Bus.$on("log", content => {
        // alert(content);
        that.contentStr = content
      });
  }
};
</script>

<style lang='stylus' scoped>

.child2
    position absolute
    width 50%
    height .5rem
    line-height .5rem
    top 1.54rem
    margin 0 auto
    background-color yellow 

</style>
