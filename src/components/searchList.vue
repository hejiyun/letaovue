<template>
  <div class="searchList" >
    <nav-vue title="商品列表"></nav-vue>
    <mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="请输入关键字">
</mt-search>
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
.mint-search{
    height: 0vh;
    height: 52px !important;
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
       color: #8f8f94;
       font-size: 14px;
       line-height: 30px;
}
.list ul li{
    float: left;
    list-style: none;
    width: 25%;
    text-align: center;
    background-color: #ccc;
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
  list-style: none;
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
