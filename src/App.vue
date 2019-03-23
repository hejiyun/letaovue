<template>
  <div id="app">
    <router-view></router-view>
   <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a,a:link,a:hover,a:active{
    color: white;
  text-decoration: none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
body,html{
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 640px;
  position: relative;
  overflow: hidden;
}

</style>
