<template>
    <ul class="list-letter">
        <li class="item" v-for="item of letters" :key="item" :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >{{item}}</li>
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        cities: Object
    },
    computed:{
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data() {
        return {
            touchStatus:false,
            startY: 0,
            timer: null
        }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick(e) {
            console.log(123);
            this.$emit('change',e.target.innerText)
            console.log(e.target.innerText)
        },
        handleTouchStart() {
            this.touchStatus = true
        },
        handleTouchMove(e) {
            if(this.touchStatus) {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                this.startY = this.$refs['A'][0].offsetTop

                this.timer = setTimeout(() => {

                    const touchY = e.touches[0].clientY - 200
                    const index =Math.floor((touchY - startY)/20)
                    if(index >= 0 && index < this.letters.length){

                        this.$emit('change',this.letters[index])
                    }                
                },16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>
<style>
    ul,li {
        padding: 0;
        margin: 0;
    }
    .list-letter {
        width: 15px;
        height: 500px;
        background-color:red;
        list-style: none;
        position:fixed;
        right:5px;
        top:200px;
        
    }   
</style>

