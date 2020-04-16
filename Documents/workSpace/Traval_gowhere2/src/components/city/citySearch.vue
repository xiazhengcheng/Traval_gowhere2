<template>
    <div>
        <div class="search">
            <input class="search-input" v-model='keyWord' type="text" placeholder="请输入城市名和拼音">  
        </div>   
        <div class="search-city-list" v-show="this.list.length" ref="scroll">
            <ul >
                <li 
                class="city-content border-topbottom" 
                v-for="(item,key) of this.list" 
                :key="key" 
                :ref="key"
                @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
            </ul> 
        </div>

    </div>
</template>
<script>
import Cookies from "js-cookie";
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyWord: "",
      timer: null,
      list: [],
      scroll: Bscroll
    };
  },
  mounted() {
    // setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.scroll);
    // }, 100);
  },
  methods: {
    handleCityClick(city) {
      console.log("城市点击");
      this.city = city;
      var cityInfo = { cityName: city };
      this.$store.commit("SET_CITY", cityInfo);

      Cookies.set("city", cityInfo);
      this.$router.go("-1");
    }
  },
  watch: {
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // console.log('搜索城市' + this.cities);
      if (!this.keyWord) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const searchCity = [];
        var that = this;
        for (let i in that.cities) {
          that.cities[i].forEach(element => {
            // console.log('keyWord' + that.keyWord)
            if (
              element.spell.indexOf(that.keyWord) > -1 ||
              element.name.indexOf(that.keyWord) > -1
            ) {
              searchCity.push(element);
              // console.log(123);
            }
          });
        }
        this.list = searchCity;
      }, 100);
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

.search {
  height: 0.8rem;
  display: flex;
  position: relative;
  display: -webkit-flex;
  background-color: $bgColor;

  .search-input {
    margin: 0 auto;
    margin-top: 5px;
    height: 30px;
    width: 100%;
    margin: 0 0.2rem 0 0.2rem;
    text-align: center;
    border-radius: 5px;
    background-color: #fff;
  }
}

.search-city-list {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  top: 1.58rem;
  overflow: hidden;

  .city-content {
    height: 0.6rem;
    color: #666;
    line-height: 0.6rem;
    text-align: left;
    background-color: #fff;
    padding-left: 0.2rem;
    border-bottom: 0.01rem solid #eee;
  }
}
</style>


