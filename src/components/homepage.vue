<template>
  <div class="homepage">
    <header-vue title="乐淘云购"></header-vue>
    <mt-swipe :auto="4000">
      <mt-swipe-item><a href=""><img  src="../../static/images/banner1.png" alt=""></a></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner3.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner4.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner5.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner6.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner7.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner8.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner9.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="classify">
      <ul>
        <li>
         <router-link :to="{}">
           <img src="../../static/images/nav1.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../../static/images/nav2.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../../static/images/nav3.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../../static/images/nav4.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../../static/images/nav5.png" alt="">
         </router-link>
        </li>
        <li>
         <router-link :to="{}">
           <img src="../../static/images/nav6.png" alt="">
         </router-link>
        </li>
      </ul>
    </div>
    <div class="sy-product">
      <ul>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'shooes'}">
               <img src="../../static/images/product.jpg" alt="">
                <p class="info mt-ellipsis-2">adidas阿迪达斯 男式 场下休闲篮球鞋S83700场下休闲篮球鞋S83700 </p>
                <p>
                  <span class="price">¥560</span>
                  <span class="oldPrice">¥580</span>
                </p>
                <mt-button type="primary">立即购买</mt-button>
          </router-link>
        </li>
        <li class="mt_90"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: '渲染部分',
      products: [{
        name: '耐克',
        id: '2',
        size: '4'
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
.mint-swipe{
  height: 100%;
  height:212px ;
}
.mint-swipe img{
  width: 100%;
  height: 212px;
}
.classify{
  width: 100%;
  padding: 10px;
  height:220px ;
  box-sizing: border-box;
}
.classify ul {
  width: 100%;
  height: 100%;
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
}
.sy-product ul li {
  border: 1px solid #ccc;
  padding: 10px;
  float: left;
  width: 40%;
  margin-bottom: 10px;
  text-align: center;
}
.sy-product ul li a{
  margin: 0;
  padding: 0;
}
.sy-product ul li img {
  width: 130px;
  height: 130px;
}
.sy-product ul li a p {
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
.sy-product ul li a p span.price {
  color: red;
}
.sy-product ul li a p span.oldprice {
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
