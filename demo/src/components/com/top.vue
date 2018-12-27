<template>
    <div class="top">
        <span><i class="el-icon-service"></i></span>
        <div class="inp">
          <input type="text" placeholder="猜你喜欢  浮生">
          <i class="el-icon-search"></i>
        </div>
        <span><i class="el-icon-more"></i></span>
      </div>
</template>

<script>
</script>

<style>
    .top {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: #33383b;
    }
    
    .top span {
        display: inline-block;
        width: 50px;
        flex-basis: 1;
        flex-shrink: 0;
        color: #fff;
        text-align: center;
    }
    
    .top span i {
        font-size: 24px;
    }
    
    .top .inp {
        flex: 1;
        width: 100%;
        position: relative;
        padding: 0 10px;
        box-sizing: border-box;
    }
    
    .top .inp input {
        width: 100%;
        height: 30px;
        border-radius: 10px;
        border: none;
        text-align: center;
        background: #5b6161;
        color: #bec5c7;
    }
    
    .top .inp i {
        position: absolute;
        left: 50%;
        margin-left: -68px;
        top: 8px;
        color: #bec5c7;
    }
</style>