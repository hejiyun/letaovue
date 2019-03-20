<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(product,id) in products" :key="id">
        <router-link :to="{name:'shooes'}">{{product.name}}</router-link>
        <router-link :to="{name:'cart'}">{{product.size}}</router-link>
      </li>
    </ul>
    <table>
      <tr>
        <th>产品名</th>
        <th>产品id</th>
        <th>产品尺码</th>
      </tr>
      <tr v-for="(product ,id) in products" :key="id">
        <td @click="dianji">{{product.name}}</td>
        <td>{{product.id}}</td>
        <td>{{product.size}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '渲染部分',
      products: [{
        name: '耐克',
        id: '2',
        size: '4'
      },
      {
        name: '耐克',
        id: '3',
        size: '5'
      },
      {
        name: '耐克',
        id: '1',
        size: '3'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      },
      {
        name: '耐克',
        id: '5',
        size: '7'
      }
      ]
    }
  },
  methods: {
    dianji () {
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-left:180px;
  float: left;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
td:hover{
  cursor: pointer;
}
</style>
