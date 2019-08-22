<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="请输入城市名和拼音">  
            <div class="cancel" @click="cancelClick">取消</div>  
        </div>    
    </div>
</template>
<script>
export default {
  name: "CitySearch",
  data: {},
  methods: {
    cancelClick: function() {}
  }
};
</script>
<style lang='stylus' scoped>
.search 
    width: 100%
    height: 40px
    display: flex
    display: -webkit-flex

    .search-input 
        margin: 0 auto
        margin-top: 5px
        height: 30px
        width: 85%
        text-align: center
        border-radius: 5px
        background-color: #f6f6f6
    
    .cancel 
        width: 10%
        margin: 0 auto
        margin-top: 5px
        text-align: center
        line-height: 30px
        height: 30px
        border-radius: 5px
        background-color: #f6f6f6
</style>


