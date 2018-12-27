<template>
  <div class="list">
    <dl>
      <dt>
        <img src="../../assets/list_1.jpg" alt="">
      </dt>
      <dd>
        <h4>末那大叔</h4>
        <p>节目：18</p>
        <p>愿你的故事有人能懂</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_2.jpg" alt="">
      </dt>
      <dd>
        <h4>七月的风八月的雨</h4>
        <p>节目：281</p>
        <p>失去才懂 纯音乐（完整版）</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_1.jpg" alt="">
      </dt>
      <dd>
        <h4>末那大叔</h4>
        <p>节目：18</p>
        <p></p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_2.jpg" alt="">
      </dt>
      <dd>
        <h4>七月的风八月的雨</h4>
        <p>节目：281</p>
        <p>失去才懂 纯音乐（完整版）</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_1.jpg" alt="">
      </dt>
      <dd>
        <h4>末那大叔</h4>
        <p>节目： 18</p>
        <p>愿你的故事有人能懂</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_2.jpg" alt="">
      </dt>
      <dd>
        <h4>七月的风八月的雨</h4>
        <p>节目： 281</p>
        <p>失去才懂 纯音乐（完整版）</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_1.jpg" alt="">
      </dt>
      <dd>
        <h4>末那大叔</h4>
        <p>节目： 18</p>
        <p>愿你的故事有人能懂</p>
      </dd>
    </dl>
    <dl>
      <dt>
        <img src="../../assets/list_2.jpg" alt="">
      </dt>
      <dd>
        <h4>七月的风八月的雨</h4>
        <p>节目： 281</p>
        <p>失去才懂 纯音乐（完整版）</p>
      </dd>
    </dl>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .list {
        width: 100%;
        flex: 1;
        overflow-y: scroll;
    }
    
    .list dl {
        width: 100%;
        display: flex;
        padding: 10px 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
    }
    
    .list dl dt {
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    
    .list dl dt img {
        width: 100%;
        height: 100%;
    }
    
    .list dl dd {
        flex: 1;
        margin-left: 10px;
    }
    
    .list dl dd h4 {
        width: 100%;
        line-height: 2.5
    }
    
    .list dl dd p {
        width: 100%;
        line-height: 2;
        line-height: 2.5;
    }
    
    .list dl dd p {
        line-height: 2;
    }
</style>