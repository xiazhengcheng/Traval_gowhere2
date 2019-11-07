<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="请输入城市名和拼音">  
        </div>    
    </div>
</template>
<script>
export default {
  name: "CitySearch",
  data() {
      return {
          city:'123'
      };
  },
  methods: {
  }
};
</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/varibles.styl'
.search 
    height: .8rem;
    display: flex;
    position :relative;
    display: -webkit-flex;
    background-color $bgColor
    .search-input 
        margin: 0 auto;
        margin-top: 5px;
        height: 30px;
        width: 100%;
        margin  0 .2rem 0 .2rem
        text-align: center;
        border-radius: 5px;
        background-color: #fff;
</style>


