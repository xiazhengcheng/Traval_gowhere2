<template>
    <div class="head">
        <div class="header-left">
            <div class="back-icon"></div>
        </div>
        <div class="header-input">
            <span class="iconfont"></span>
            <input type="text">
        </div>
        <router-link :to="{name:'city'}">
            <div class="header-right">
                <span class='arrow-icon'>&#xe64a;</span>
                {{city}}
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  props: {
    city: {
      type: String
    }
  },
  data() {
    return {
      currentCity: ""
    };
  },
  created() {},
  mounted() {
    this.currentCity = this.city;
  }
};
</script>

<style lang='stylus' scoped>
@import '../../assets/styles/varibles.styl';

.head {
    display: flex;
    line-height: $headerHeight;
    background-color: $bgColor;
    color: #fff;

    .header-left {
        width: 0.64rem;
        float: left;

        .back-icon {
            text-align: center;
            font-size: 0.4rem;
            background: url('../../assets/imageData/nav_back.png') no-repeat;
        }
    }

    .header-input {
        flex: 1;
        height: 0.64rem;
        line-height: 0.64rem;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        color: #ccc;
    }

    .header-right {
        min-width: 1.04rem;
        padding: 0 0.1rem;
        float: right;
        text-align: center;
        color: #fff;

        .arrow-icon {
            margin-left: -0.04rem;
            font-size: 0.24rem;
        }
    }
}
</style>
