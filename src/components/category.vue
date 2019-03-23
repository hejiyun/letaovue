<template>
  <div class="category">
    <header-vue title="乐淘云购"></header-vue>
    <div class="left">
      <ul>
        <li v-for="(category,id) in categories" :key="id">
          <router-link :to="{name:'product'}">{{category.categoryName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <!-- <router-view></router-view> -->
      <ul>
        <li v-for="(product,id) in products" :key="id">
          <a  href="javascript:;">
            <img :src="product.url" alt="">
            <p>{{product.name}}</p>
          </a>
        </li>
      </ul>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>
<script>
export default {
  name: 'category',
  data () {
    return {
      products: [{
        name: '耐克',
        id: '1',
        url: '../../static/images/brand1.png'
      },
      {
        name: '耐克',
        id: '2',
        url: '../../static/images/brand2.png'
      },
      {
        name: '耐克',
        id: '3',
        url: '../../static/images/brand3.png'
      },
      {
        name: '耐克',
        id: '4',
        url: '../../static/images/brand4.png'
      },
      {
        name: '耐克',
        id: '5',
        url: '../../static/images/brand5.png'
      }
      ],
      categories: [{
        id: 1,
        categoryName: '女装',
        isDelete: 1
      },
      {
        id: 2,
        categoryName: '男装',
        isDelete: 1
      },
      {
        id: 3,
        categoryName: '家具',
        isDelete: 1
      },
      {
        id: 4,
        categoryName: '家电',
        isDelete: 1
      },
      {
        id: 5,
        categoryName: '箱包',
        isDelete: 1
      },
      {
        id: 6,
        categoryName: '珠宝',
        isDelete: 1
      }
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.category{
  width: 100%;
  height: 100%;
  padding-top: 45px;
  text-align: center;
}
a{
  color: #666;
}
.left{
  float: left;
  left: 0;
  top:0;
  width: 90px;
  height: 100%;
}
.left ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.letf ul li{
  box-sizing: border-box;
}
.left ul li a{
    display: block;
    width: 90px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #666;
    background-color: #E3E4E5;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.left ul li a.current{
  background-color: none;
    border-right: none;
}
.right{
  overflow: hidden;
  height: 100%;
}
.right ul{
  width: 100%;
  list-style: none;
}
.right ul li {
  float: left;
  width: 33.3%;
}
.right ul li a {
  width: 100%;
  height: 100%;
}
.right ul li a img{
  width: 70px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
}
.right ul li a p{
  font-size: 14px;
    margin-top: 0;
    margin-bottom: 10px;
    color: #8f8f94;
}
</style>
