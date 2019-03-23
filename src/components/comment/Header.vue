<template>
  <div class="header">
    <mt-header class="mheader" :title="title">
  <router-link to="/" slot="left">
    <mt-button icon="more"></mt-button>
  </router-link>
  <router-link :to="{name:'search'}" slot="right">
  <mt-button icon="search"></mt-button>
   </router-link>
</mt-header>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    back () {
      location.href = 'homepage'
    },
    search () {
      location.href = 'Search'
    }
  },
  props: [ 'title' ]
}
</script>
<style scoped>
.header{
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
</style>
