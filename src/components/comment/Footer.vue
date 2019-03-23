<template>
  <div class="footer">
    <mt-tabbar  class="bottom-bar">
      <router-link  class="mt-tab-item" :to="{name:'homepage'}" exact>
        <i>图标</i>
        <p>首页</p>
      </router-link>
      <router-link  class="mt-tab-item"  :to="{name:'category'}" exact>
        <i>图标</i>
        <p>分类页</p>
      </router-link>
      <router-link class="mt-tab-item"  :to="{name:'cart'}" exact>
        <i>图标</i>
        <p>购物车</p>
      </router-link>
      <router-link  class="mt-tab-item"  :to="{name:'user'}" exact>
        <i>图标</i>
        <p>用户中心</p>
      </router-link>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    index () {
      console.log(1)
      location.href = 'HelloWorld'
    },
    category () {
      console.log(2)
      location.href = 'Category'
    },
    cart () {
      console.log(3)
      // location.href = 'Cart'
    },
    user () {
      console.log(4)
      // location.href = 'user'
    }
  },
  watch: {
    selected: function (val, oldVal) {
      console.log(val)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.footer{
  z-index: 998;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 55px;
  left: auto;
  max-width: 640px;
}
.bottom-bar {
  height: 55px;
  background-color: #006699;
  color: white;
}
.bottom-bar .mt-tab-item {
  display: block;
  width: 100%;
  height: 100%;
}
.bottom-bar i {
  display: block;
  margin-top: 8px;
  font-size: 14px;
}
.bottom-bar p {
  height: 20px;
  line-height: 25px;
  font-size: 14px;
}
.router-link-exact-active{
    background-color: #006699;
    color: orange ;
  }
</style>
