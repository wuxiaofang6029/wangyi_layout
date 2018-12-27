<template>
  <div class='content'>
    <div class="nav_icon">
      <dl>
        <dt><img src="../../assets/nav_1.jpg" alt=""></dt>
        <dd>电台分类</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/nav_2.jpg" alt=""></dt>
        <dd>电台排行</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/nav_3.jpg" alt=""></dt>
        <dd>DI电音</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/nav_4.jpg" alt=""></dt>
        <dd>小冰电台</dd>
      </dl>
    </div>
    <h1 class='tit'>今日优选</h1>
    <List></List>

  </div>
</template>

<script>
    import List from '../com/list'
    export default {
        data() {
            return {}
        },
        components: {
            List
        }
    }
</script>

<style>
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .nav_icon {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 60px;
    }
    
    .nav_icon dl dt {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    
    .nav_icon dl dt img {
        width: 100%;
        height: 100%;
    }
    
    .nav_icon dl dd {
        font-size: 12px;
        line-height: 2.5;
    }
    
    .tit {
        width: 100%;
        height: 46px;
        line-height: 46px;
        font-size: 18px;
        padding: 0 15px;
        box-sizing: border-box;
    }
</style>