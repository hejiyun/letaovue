<template>
  <div class="searchList" >
    <nav-vue title="商品列表"></nav-vue>
   <div class="searchmore">
    <nav-vue title="搜索中心"></nav-vue>
    <mt-search
  v-model="value"
  placeholder="请输入搜索关键字">
</mt-search>
<mt-button class="searchBtn" size="small" type="primary">搜索</mt-button>
</div>
<div class="list">
   <ul>
       <li><a href="javascript:;">上架时间</a></li>
       <li><a href="javascript:;">价格</a></li>
       <li><a href="javascript:;">库存</a></li>
       <li><a href="javascript:;">折扣</a></li>
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
    <footer-vue></footer-vue>
  </div>
</template>
<script>
export default {
  name: 'searchList',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.searchList{
    padding-top:45px;
    overflow: auto;
    height: 100%;
}
.searchmore{
  position: relative;
  overflow: hidden;
}
.searchBtn{
  position: absolute;
  top:10px;
  right:10px;
  z-index: 99;
  border-radius:0;
  border-top-right-radius:5px;
  background-color: #007AFF;
}
a,a:link,a:hover,a:active{
  border-bottom: 1px solid #ccc;
  color: black;
  height: 40px;
}
.mint-search{
    height: 100%;
}
.list{
    height: 30px;
}
.list ul li a{
       color: #666;
       font-size: 12px;
       line-height: 30px;
        text-decoration: none;
}
.list ul li{
    float: left;
    list-style: none;
    width: 25%;
    text-align: center;
    background-color: #EEEEEE;
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
  list-style: none;
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
