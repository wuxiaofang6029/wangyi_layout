<template>
  <div class="wrap">
    <div class="main">
        <img class="bgimage" src="../assets/7.png" alt="" />
        <div class="btn-group">
          <button class="btn">
            <router-link class='routs' to="/login">手机号登录</router-link>
          </button>
          <button class="btn">注册</button>
          <P><span class="use">游客试用</span></P>
        </div>
    </div>
    <div class="footes">
      <dl>
        <dt><img class="bgimage" src="../assets/3.png" alt="" /></dt>
        <dd>微信</dd>
      </dl>
      <dl>
        <dt><img class="bgimage" src="../assets/4.png" alt="" /></dt>
        <dd>QQ</dd>
      </dl>
      <dl>
        <dt><img class="bgimage" src="../assets/5.png" alt="" /></dt>
        <dd>微博</dd>
      </dl>
      <dl>
        <dt><img class="bgimage" src="../assets/6.png" alt="" /></dt>
        <dd>网易邮箱</dd>
      </dl>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        },
        methods: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    
    .main {
        width: 100%;
        flex: 1;
    }
    
    .wrap .bgimage {
        width: 100%;
        height: auto;
    }
    
    .btn-group {
        width: 100%;
    }
    
    .btn-group .btn {
        margin: 12px 10%;
        background: none;
        border-radius: 10px;
        border: 1px solid rgb(201, 53, 53);
        color: rgb(201, 53, 53);
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
    
    .footes {
        display: flex;
        height: 90px;
        align-items: center;
    }
    
    .footes dl {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
    .footes dl dt {
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }
    
    .footes dl dt .bgimage {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    
    .footes dl dd {
        text-align: center;
        line-height: 2;
        font-size: 12px;
    }
    
    .routs {
        text-decoration: none;
        color: #f00;
    }
</style>