<template>
  <!-- 账号 -->
  <div class='wraper'>
    <div class="main main_bg">
      <div class="top">
        <span><i class="el-icon-more-outline"></i></span>
        <span>账号</span>
        <span><i class="el-icon-more-outline"></i></span>
      </div>
      <div class="content">
        <div class="logininfo">

        </div>
        <AccountList></AccountList>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from './com/footer'
    import AccountList from './com/accounts/account_list'
    export default {
        components: {
            Footer,
            AccountList
        }
    }
</script>

<style>
    .main_bg {
        background: #eee;
    }
    
    .top {
        width: 100%;
        height: 50px;
        background: #353A3C;
        padding: 0 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .top span {
        color: #fff;
    }
    
    .top span i {
        font-size: 20px;
    }
    
    .top span:nth-of-type(1) i {
        opacity: 0;
    }
    
    .content {
        width: 100%;
        flex: 1;
        overflow-y: scroll;
    }
    
    .logininfo {
        width: 100%;
        height: 180px;
        background: pink;
    }
</style>