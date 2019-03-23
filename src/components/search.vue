<template>
  <div class="search" >
    <div class="searchmore">
    <nav-vue title="搜索中心"></nav-vue>
    <mt-search
  v-model="value"
  placeholder="请输入搜索关键字">
</mt-search>
<router-link :to="{name:'searchList'}">
<mt-button class="searchBtn" size="small" type="primary">搜索</mt-button>
</router-link>
</div>
<div class="list">
  <ul>
      <li><a href="">没有更多了</a></li>
  </ul>
</div>
<footer-vue></footer-vue>
  </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.search{
    padding-top:45px;
}
a,a:link,a:hover,a:active{
  border-bottom: 1px solid #ccc;
  color: black;
  height: 40px;
}
.mint-search{
    height: 100%;
    margin-bottom:20px;
}
.searchmore{
  position: relative;
  overflow: hidden;
}
.searchBtn{
  position: absolute;
  top:10px;
  right:10px;
  z-index: 99;
  border-radius:0;
  border-top-right-radius:5px;
  background-color: #007AFF;
}
.list{
    padding: 10px;
}
.list ul li a{
       color: #8f8f94;
       font-size: 14px;
}
</style>
