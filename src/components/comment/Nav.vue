<template>
  <div class="nav">
    <mt-header class="mheader" :title="title">
  <router-link  to="" slot="left">
    <mt-button id="btn"  @click.native="$router.back(-1)" icon="back"></mt-button>
  </router-link>
</mt-header>
  </div>
</template>
<script>
export default {
  name: 'Nav',
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
.nav{
  z-index: 998;
   position: fixed;
  width: 100%;
  top: 0;
  left: auto;
  max-width: 640px;
}
.mheader{
  width: 100%;
  height: 45px;
  background-color: #006699;
  font-size: 20px;
  color: white;
}
#btn{
  padding-left:5px;
}
</style>
