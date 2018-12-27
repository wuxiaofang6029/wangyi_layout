<template>
  <div class='wrap'>
    <header><span>
        <router-link class='routs' to="/"> &lt;</router-link>
      </span> <span>手机号登录
      </span>
      <span> 

      </span></header>
    <div class='section'>
      <div>
        <img src="../assets/1.png" alt="">
        <input class='searchs' type="text" placeholder="手机号">
      </div>
      <div>
        <img src="../assets/2.png" alt="">
        <input class='searchs' type="text" placeholder="密码">
      </div>
    </div>
    <div class="btn-group">
        <router-link to="/home"><button class="btn">登录</button></router-link>
      <P><span class="use">重设密码</span></P>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
    .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    header {
        height: 50px;
        line-height: 50px;
        background: rgb(37, 37, 37);
        display: flex;
        justify-content: space-between;
        color: #fff;
        padding: 0 15px;
        box-sizing: border-box;
    }
    
    header span:nth-of-type(1) {
        font-size: 24px;
    }
    
    .section {
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
    }
    
    .section div {
        display: flex;
        border-bottom: 1px solid #ccc;
        margin-top: 10px;
    }
    
    .section div .searchs {
        width: 100%;
        height: 46px;
        line-height: 40px;
        font-size: 16px;
        border: none;
    }
    
    .btn-group {
        width: 100%;
        flex: 1;
    }
    
    .btn-group .btn {
        margin: 20px 8%;
        background: rgb(37, 37, 37);
        border-radius: 10px;
        border: 1px solid rgb(31, 30, 30);
        color: rgb(121, 118, 118);
        width: 80%;
        height: 40px;
        line-height: 40px;
    }
    
    .btn-group p {
        text-align: center;
        margin-top: 10px;
    }
    
    .btn-group p .use {
        border-bottom: 1px solid #666;
        padding-bottom: 3px;
        box-sizing: border-box;
        font-size: 12px;
    }
    
    .routs {
        text-decoration: none;
        color: #fff;
    }
</style>