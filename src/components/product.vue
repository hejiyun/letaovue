<template>
  <div class="product">
      <nav-vue title="商品详情"></nav-vue>
      <div class="pr-main">
        <div class="mui-scroll-wrapper" data-scroll="1">
            <div class="mui-scroll" id="xuanranchange" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
    <mt-swipe class="swipe" :auto="4000">
   <mt-swipe-item><img src="../../static/images/banner2.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner3.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/images/banner4.png" alt=""></mt-swipe-item>
  </mt-swipe>
      <div class="lt_pro_name item_box">
        <strong>匡威三星标1970s converse复刻 142334c 144757c三星标黑色高帮</strong>
      </div>
      <div class="lt_price item_box">
        价格:
        <span class="price">¥499.1</span>
        <span class="oldPrice">¥888.1</span>
      </div>
      <div class="lt_size item_box">
        尺码:
          <span class="ch-size">40</span>
          <span class="ch-size">41</span>
          <span class="ch-size">42</span>
          <span class="ch-size">43</span>
          <span class="ch-size">44</span>
          <span class="ch-size">45</span>
          <span class="ch-size">46</span>
          <span class="ch-size">47</span>
          <span class="ch-size">48</span>
          <span class="ch-size">49</span>
          <span class="ch-size">50</span>
      </div>
      <div class="lt_num item_box">
       <span class="span1">数量:  </span>
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="20" data-numbox-step="1">
          <mt-button type="default" size="small">-</mt-button>
          <input id="addput">
         <mt-button type="default" size="small">+</mt-button>
        </div>
        <span>剩余数量: <span id="maxnum">20</span>双 </span>
      </div>
      <!-- 详情描述 -->
      <div class="lt_price item_box">
        详情: 描述
      </div>
</div>
        </div>
     </div>
     <div class="ds-footer">
       <a href="javascript:;" class="pull-left">前往购物车</a>
         <button type="button" >买买买</button>
       <button type="button"  id="addcartBtn">加入购物车</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.product{
    padding-top: 45px;
    overflow: auto;
    font-size: 14px;
    line-height: 21px;
    overflow: auto;
    height: 100%;
}
.product .ds-footer{
  border-top: 1px solid  red;
  background-color: #EFEFF4;
  padding: 5px 10px ;
  height: 55px;
  z-index: 9999;
   position:fixed;
    left: 0;
    bottom:0;
    max-width: 640px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
}
.swipe{
    width: 100%;
    height: 339px;
}
.swipe img{
    width: 100%;
    height: 100%;
}
.product .ds-footer a{
    display: block;
    width: 95px;
    height: 30px;
    padding: 3px 0 3px 5px;
    font-size: 14px;
    line-height: 35px;
    color: #007aff;

}
.product .ds-footer button{
    margin-top:5px;
    width: 68px;
    height: 33px;
        border-radius: 3px;
        color: white;
        outline: none;
}
.product .ds-footer button:nth-child(2){
 background-color: #f0ad4e;
}
.product .ds-footer button:nth-child(3){
    margin-right: 5px;
    background-color:#dd524d;
    width: 96px;
}
.pr-main{
    width: 100%;
    height: 100%;
    position: relative;
}
.current{
   background-color:  red;
}
#addput{
    width: 30px !important;
}
.mui-numbox{
    float: left;
}
.item_box{
    clear: both;
}
.item_box.lt_num span{
   line-height: 30px;
}
.span1{
    float: left;
}
.ds-footer button{
    float: right;
    margin: auto 0;
    border:none;
}
.ds-footer a{
  float: left;
  height: 50px;
}
</style>
