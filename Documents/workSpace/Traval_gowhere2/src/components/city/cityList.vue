<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button" @click="handleCityClick(city)">{{city}}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item-wrapper border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
import Cookies from "js-cookie";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data() {
    return {
      scroll: Bscroll,
      city: ""
    };
  },
  mounted() {
    this.city = this.$store.getters.city.cityName;
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper);
      console.log("scroll:" + this.scroll);
    }, 100);
  },
  methods: {
    handleCityClick(city) {
      console.log("城市点击");
      this.city = city;
      var cityInfo = { cityName: city };
      this.$store.commit("SET_CITY", cityInfo);

      Cookies.set("city", cityInfo);

      // this.changeCity(city);
      this.$router.go("-1");
    }
    // ...mapMutations(["changeCity"])
  },
  //   computed: {
  //       ...mapState(['city'])
  //   },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
    &:before {
        border-color: #777;
    }

    &:after {
        border-color: #777;
    }
}

.border-topbottom {
    &:after {
        border-color: #777;
    }
}

.list {
    position: absolute;
    overflow: hidden;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        line-height: 0.54rem;
        background-color: #eee;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.26rem;
        text-align: left;
    }

    .button-list {
        padding: 0 0.6rem 0.1rem 0.1rem;
        overflow: hidden;

        .button-wrapper {
            width: 33.33%;
            float: left;

            .button {
                text-align: center;
                padding: 0.1rem 0;
                margin: 0.1rem;
                border: 0.02rem solid #eee;
            }
        }
    }

    .item-list {
        padding: 0 0.6rem 0 0.1rem;

        .item-wrapper {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: left;
            border-bottom: 0.01rem solid #eee;
            font-size: 0.2rem;
            padding-left: 0.1rem;
        }
    }
}
</style>
