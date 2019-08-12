<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名和拼音">    
        </div>    
    </div>
</template>
<script>
export default {
    name:'CitySearch',
}
</script>
<style>
    .search {
        width: 320px;
        height: 40px;
        /* background-color: #f8f8f8; */
    }
    .search-input {
        margin: 0 10px 5px 10px;
        height: 30px;
        width: 300px;
        text-align: center;
        border-radius: 5px;
        background-color: #f8f8f8;

    }
</style>


