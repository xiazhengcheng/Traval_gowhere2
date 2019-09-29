<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
        
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang='stylus' scoped>
    @import '~@/assets/styles/mixins.styl'
    .title 
      width : 100%
      text-indent: .2rem
      padding:10px 0 10px 0;
      text-align: left;
      background-color:#f6f6f6;
      font-size: 12px;
    ul 
      width :100%
      list-style: none
      li 
        width : 100%
        height : 89px
        padding: 5.5px 5.5px 0 0
        border-bottom: 0.5px lightgray solid
        .item-img 
          float: left
          width: 25%
          height: 80px
          width :80px
          margin-left: 2.5%
          
        .item-info 
          float: left  
          width:65%
          padding-left :10px
          .item-title 
            text-align: left
            font-size: 14px
            margin-top: 5px
          .item-button 
            float: left
            background-color: #ff6623
            border-radius: 5px
            margin:5px 0 5px 0
          .item-desc
            text-align: left
            font-size: 12px
            margin-top :10px
            word-wrap: break-word
            color: darkgray
</style>

