<template>
    <div class="home">
        <home-header class="head" :city='lastCity'></home-header>
        <home-swiper :list='swiperList' class="scroll"></home-swiper>
        <home-icon :list='iconList' class="icons"></home-icon>
        <home-recommend :list='recommendList' class="recommend"></home-recommend>
        <home-weekend :list='weekendList' class="weekend"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './head'
import HomeIcon from './icons'
import HomeSwiper from './swiper'
import HomeRecommend from './recommend'
import HomeWeekend from './weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'home',
    data(){
        return {
            lastCity:"",
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],

        }
    },
    created(){
        console.log("-----create");
    },
    mounted () {
        console.log("======2");
        this.getHomeInfo() 
        },
    components: {
        HomeHeader,
        HomeIcon,
        HomeSwiper,
        HomeRecommend,
        HomeWeekend

    },
    computed: {
        ...mapState(['city'])
    },
    
    methods: {
        getHomeInfo () {
            console.log("======1");
            axios.get('/static/mock/index.json')
                .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess (res) {
        res = res.data 
         if(res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
            this.lastCity = "上海"
            }

            // console.log("=====",res);
        },
        
        activated () {
            if(this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo()
            }
        },
    }
}
</script>
<style>

    .home {
        width: 100%;
    }
</style>

