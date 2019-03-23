<template>
  <div class="search" >
    <nav-vue title="搜索中心"></nav-vue>
    <mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="请输入关键字">
</mt-search>
<div class="list">
  <ul>
      <li><a href="">没有更多了</a></li>
  </ul>
</div>
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
.list{
    padding: 10px;
}
.list ul li a{
       color: #8f8f94;
       font-size: 14px;
}
</style>
