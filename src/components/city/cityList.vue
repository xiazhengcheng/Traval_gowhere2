<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">上海</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item-wrapper border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  data () {
      return {
          scroll: Bscroll
      }
  },
  mounted() {
      setTimeout(()=>{
        this.scroll = new Bscroll(this.$refs.wrapper);
        console.log('scroll:' + this.scroll)  
      },1000)
    
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  watch: {
    letter() {
      if (this.letter) {
        // console.log('refs' + this.$refs)
        const element = this.$refs[this.letter][0];

        console.log("element" + element);
        console.log(this.letter);
        console.log("++++" + this.$refs[this.letter]);
        // console.log('scroll' + this.scroll);

        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl';
.border-topbottom
    &:before
        border-color #777
    &:after
        border-color #777
.border-topbottom
    &:after
        border-color #777
.list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title 
        line-height .54rem
        background-color #eee
        padding-left .2rem
        color #666
        font-size .26rem
        text-align left 
    .button-list
        padding 0 .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
            width 33.33%
            float left
            .button
                text-align center
                padding .1rem 0
                margin .1rem
                border .02rem solid #eee
    .item-list
        padding 0 .6rem 0 .1rem
        .item-wrapper
            height .6rem
            line-height .6rem
            text-align left  
            border-bottom .01rem solid #eee
            font-size .2rem
            padding-left .1rem
</style>
