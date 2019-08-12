<template>
    <div class="list" ref="wrapper">

        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{$route.params.city}}</div>
                </div>
            </div>
        </div>

        <div class="areaHot">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button" v-for="item of hot" :key="item.id">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="list-div">
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
             <div class="sepDiv">{{key}}</div>

             <div class="item-list">
                <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleClick(innerItem.name)">{{innerItem.name}}
                    <div class="line"></div>

                </div>
            </div>
        </div> 
        </div>
        
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex';
// const Bscroll = window.Bscroll
export default {
    name:'CityList',
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },computed:{
        ...mapState({
            currentCity:"city"
        })
    },
    methods: {
        handleCityClick (city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter() {
            if (this.letter) {
                // console.log('refs' + this.$refs)
                const element = this.$refs[this.letter][0]

                console.log('element' + element)
                console.log(this.letter)
                console.log('++++' + this.$refs[this.letter])
                // console.log('scroll' + this.scroll);

                this.scroll.scrollTo(element)
            }
        }
    },
    mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
    created() {
            // console.log("test:"+Bscroll)
        }
}
</script>
<style>
    .wrapper {
        width: 320px;
        position: absolute;
        top: 74px;
        overflow: hidden;
        z-index: 1;
    }
    .button {
        text-align: left;
        width: 320px;
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
        font-size: 12px;
        /* background-color: rebeccapurple; */
    }
    .sepDiv {
        width: 320px;
        height: 30px;
        background-color: #f8f8f8;
        line-height: 30px;
        text-align: left;
    }
    .border-bottom {
        width: 320px;
        height: 30px;
        line-height: 30px;
        text-align: left;
        font-size: 12px;
    }
    .line {
        width: 320px;
        height: 0.5px;
        background-color: #f8f8f8;
    }
    .areaHot {
       flex: auto; 
       flex-direction: row;
       flex-wrap: wrap;
    }
</style>
