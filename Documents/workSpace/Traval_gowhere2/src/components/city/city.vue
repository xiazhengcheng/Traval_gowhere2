<template>
    <div class="rootDiv">
        <city-header>
        </city-header>
        <city-search :cities="cities"></city-search>        
        <city-list :cities="cities" :hot="hotCities" :letter="letter" class="clityList"></city-list>
        <city-alphabet :cities="cities" @change='handleLetterChange' class="cityAlphabet"></city-alphabet>

    </div>  
</template>
<script>
import axios from 'axios'
import CityHeader from './cityHeader'
import CityList from './cityList'
import CitySearch from './citySearch'
import CityAlphabet from './cityAlphabet'

export default {
    name:'city',
    components:{
        CityHeader,
        CityList,
        CitySearch,
        CityAlphabet
    },
    data() {
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods: {
        getCityInfo() {
            axios.get('/static/mock/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res) {
            console.log('456');
            console.log(res);

            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
            console.log("letter:" + letter)
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo();
        console.log('123');
    }
}
</script>
<style>
    .cityList {
        display: inline;
        background-color: red;
    }
    .cityAlphabet {
        float: left;
    }
</style>


