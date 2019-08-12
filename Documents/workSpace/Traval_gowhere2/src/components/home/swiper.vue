<template>
    <swiper :options="swiperOption" ref='mySwiper' v-if="showSwiper" class="swiper">
        <swiper-slide v-for="item of list" :key="item.id" class="swiper_slide">
            <img  class="swiper-img" :src="item.imgUrl" alt="">    
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        grabCursor: true,
        direction: "horizontal",
        setWrapperSize: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      },
      showSwiper: true
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    var that = this;
    console.log("数组：" + this.list);
    var swiperList = this.list;
    setInterval(() => {
      if (swiperList.length < 4) {
        that.list.push(swiperList.length + 1);
      } else {
        swiperList = [];
        swiperList.push(that.list[0]);
      }
    }, 3000);
  }
};
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active 
  background: #fff

.swiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee

  .swiper-img {
    width: 100%;
  }
}
</style>

