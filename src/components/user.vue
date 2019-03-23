<template>
  <div class="user">
    <nav-vue title="会员中心"></nav-vue>
    <div class="usermsg">
     <img slot="icon" src="../../static/images/none.png" width="42" height="42">
     <div class="msg">
       <p>{{ user.name }}</p>
       <p>绑定手机:{{ user.phone }}</p>
     </div>
 </div>
    <!-- <mt-cell title="itcast" label="绑定手机号: 13574748568">
    </mt-cell> -->
    <mt-cell title="账号与安全"  is-link></mt-cell>
    <mt-cell title="我的购物车"  is-link></mt-cell>
    <mt-cell title="收货地址管理"  is-link></mt-cell>
    <router-link  :to="{name:'login'}">
    <mt-button type="default" size="large">退出</mt-button>
    </router-link>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      user: {name: 'itcast', phone: '13576934058'}
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
  min-height: 40px;
}
.usermsg{
  min-height: 60px;
  overflow: hidden;
   border-bottom: 1px solid #ccc;
  width: 100%;
}
.usermsg img{
  float: left;
   border-radius: 50%;
   margin: 10px;
}
.msg{
  float: left;
  margin: 10px 5px;
     font-size: 14px;
}
.msg p:first-child{
 font-size: 17px;
}
</style>
