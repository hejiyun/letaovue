<template>
  <div class="user">
    <nav-vue title="会员中心"></nav-vue>
    <mt-cell title="itcast" label="绑定手机号: 13574748568">
    <img slot="icon" src="../../static/images/none.png" width="42" height="42">
    </mt-cell>
    <mt-cell title="账号与安全"  is-link></mt-cell>
    <mt-cell title="我的购物车"  is-link></mt-cell>
    <mt-cell title="收货地址管理"  is-link></mt-cell>
    <router-link  :to="{name:'login'}">
    <mt-button type="default" size="large">退出</mt-button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.user{
  padding-top: 45px;
}
a,a:link,a:hover,a:active{
  border-bottom: 1px solid #ccc;
  color: black;
}
</style>
