<template>
  <div class="homepage">
    <header-vue title="乐淘云购"></header-vue>
    <mt-swipe :auto="4000" style="height:200px;">
      <mt-swipe-item ><img  src="../../static/images/banner1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner3.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner4.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner5.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner6.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner7.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner8.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img  src="../../static/images/banner9.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="classify">
      <ul>
        <li>
         <router-link :to="{}">
           <img src="../assets/nav1.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../assets/nav2.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../assets/nav3.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../assets/nav4.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../assets/nav5.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../assets/nav6.png" alt="">
         </router-link>
        </li>
      </ul>
    </div>
    <div class="sy-product">
      <ul>
        <li v-for="product in products" :key="product.id">
               <img :src="product.picAddr" alt="">
                <p class="info">{{ product.proName }}</p>
                <p>
                  <span class="price">{{ product.price }}</span>
                  <span class="oldPrice">{{ product.oldPrice }}</span>
                </p>
                   <router-link :to="{name:'product',query:{id: product.id }}">
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li class="mt_90"></li>
      </ul>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      products: [
        {
          id: 1,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 2,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 3,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 4,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 5,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 6,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 7,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 8,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 9,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 10,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 11,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        },
        {
          id: 12,
          proName: '匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮',
          oldPrice: 888.1,
          price: 499.1,
          picAddr: '../../static/images/product.jpg'
        }
      ]
    }
  },
  mounted () {
    // var img = this.$refs.img1.$el
    // window.onresize = function () {
    //   changeHeight = 'height:' + img.children[0].offsetHeight + 'px'
    //   console.log(changeHeight)
    // }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage{
  height: 100%;
  overflow: auto;
  padding-top: 45px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
td:hover{
  cursor: pointer;
}
.mint-swipe img{
  width: 100%;
  height: 100%;
}
.classify{
  width: 100%;
  padding: 10px;
}
.classify ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.classify ul li {
  width: 33.3%;
  float: left;
  padding: 0;
  margin: 0;
}
.classify ul li img {
  width: 100%;
  display: block;
}
.sy-product {
  padding: 10px;
  box-sizing: border-box;
}
.sy-product ul {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.sy-product ul li {
  border: 1px solid #ccc;
  padding: 10px;
  float: left;
  width: 48%;
  margin-bottom: 10px;
  text-align: center;
  box-sizing: border-box;
}
.sy-product ul li a{
  margin: 0;
  padding: 0;
}
.sy-product ul li img {
  width: 130px;
  height: 130px;
}
.sy-product ul li  p {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #8f8f94;
  overflow:hidden;
  /* word-wrap: break-word; */
  white-space:nowrap;
  display: -webkit-box;
  white-space: normal !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sy-product ul li  p span.price {
  color: red;
}
.sy-product ul li  p span.oldprice {
  text-decoration: line-through;
}
.sy-product ul li:nth-child(2n+1) {
  margin-right: 4%;
}
.sy-product button{
  background-color: #007aff;
  font-size: 14px;
  width: 82px;
  height: 33px;
}
.sy-product ul li.mt_90{
  margin-top: 90px;
}
</style>
