<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper" class="swiper">
            <swiper-slide v-for="item of list" :key="item.id" class="swiper_slide">
                <img  class="swiper-img" :src="item.imgUrl" alt="">    
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'HomeSwiper',
    props: {
        list:Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: 3000,
                effect: "",
                grabCursor: true,
                direction:'horizontal',
                setWrapperSize: true,
                paginationClickable: true,
                mousewheelControl: true,
                observeParents: true,
                pagination: {
                  el: ".swiper-pagination",
                  bulletClass: "my-bullet",
                  bulletActiveClass: "my-bullet-active"
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                },
            }      
        }
    },
    computed: {
        showSwiper() {
            console.log("swiper++test")
            console.log(this.list );
            return this.list.length;
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style type="text/css">
    .wrapper {
        width: 100%;
        height: 120px;
        /* background-color: antiquewhite; */
    }
    .swiper .swiper_slide {
        width: 320px;
        height: 120px;
    }
</style>
