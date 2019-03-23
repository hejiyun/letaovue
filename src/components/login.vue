<template>
  <div class="login">
    <nav-vue title="登录"></nav-vue>
   <mt-field id="changehe" label="用户名" placeholder="请输入用户名"  v-model="username"></mt-field>
  <mt-field class="changehe" label="密码" placeholder="请输入密码" type="password" v-modal="password"></mt-field>
  <a href="javascript:;" class="btnbox">
 <mt-button  type="primary" size="small">登录</mt-button>
   <mt-button type="danger" size="small">重置</mt-button>
  </a>
  <footer-vue></footer-vue>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
  },
  props: [ 'title' ]
}
</script>
<style scoped>
.login{
    padding-top:45px;
}
a,a:link,a:hover,a:active{
  border-bottom: 1px solid #ccc;
  color: black;
  display: block;
  min-height: 40px;
}
.btnbox{
  text-align: center;
}
.btnbox button{
  margin-top: 4px;
}
</style>
