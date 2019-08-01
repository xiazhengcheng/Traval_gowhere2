<template>
    <div class="icons">
         <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>     
        </swiper>   
    </div>
</template>
<script>
export default {
    name:'HomeIcon',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay:false
            }
        }
    },
    computed: {
        pages() {
            const pages = [];
            this.list.forEach((item ,index) => {
                const page = Math.floor(index/8)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style>
    .icons {
        width: 320px;
    }
    .icon {
        width: 25%;
        float: left;
        margin-top: 20px;
    }
    .icon-img img{
        width: 70%;
    } 
    .icon-desc {
        font-size: 8px;
    }
</style>


