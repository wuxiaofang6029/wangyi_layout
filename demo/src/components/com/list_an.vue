<template>
    <div class="lists">
      <dl>
        <dt>
          <img src="../../assets/list_3.jpg" alt="">
        </dt>
        <dd>要做什么梦</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_4.jpg" alt="">
        </dt>
        <dd>若不能一起</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_5.jpg" alt="">
        </dt>
        <dd>我的民谣</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_1.jpg" alt="">
        </dt>
        <dd>12大美女</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_2.jpg" alt="">
        </dt>
        <dd>12大美女</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_3.jpg" alt="">
        </dt>
        <dd>要做什么梦</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_4.jpg" alt="">
        </dt>
        <dd>若不能一起</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_5.jpg" alt="">
        </dt>
        <dd>我的民谣</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/list_1.jpg" alt="">
        </dt>
        <dd>12大美女</dd>
      </dl>
    </div>
  </template>

<script>
    export default {

    }
</script>

<style>
    .lists {
        width: 100%;
        flex: 1;
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        padding: 10px 10px;
        box-sizing: border-box;
    }
    
    .lists dl {
        width: 33%;
        display: flex;
        flex-direction: column;
    }
    
    .lists dl dt {
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    
    .lists dl dt img {
        width: 100%;
        height: 100%;
    }
    
    .lists dl dd {
        line-height: 2.5;
        text-align: center;
    }
</style>