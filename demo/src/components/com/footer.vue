<template>
    <div class="footer">
        <router-link to=''>
          <dl>
            <dt><i class="el-icon-news"></i></dt>
            <dd>发现</dd>
          </dl>
        </router-link>
        <router-link to=''>
          <dl>
            <dt><i class="el-icon-picture-outline"></i></dt>
            <dd>视频</dd>
          </dl>
        </router-link>
        <router-link to=''>
          <dl>
            <dt><i class="el-icon-location-outline"></i></dt>
            <dd>我的</dd>
          </dl>
        </router-link>
        <router-link to=''>
          <dl>
            <dt><i class="el-icon-phone-outline"></i></dt>
            <dd>朋友</dd>
          </dl>
        </router-link>
        <router-link to=''>
          <dl>
            <dt><i class="el-icon-message"></i></dt>
            <dd>账号</dd>
          </dl>
        </router-link>
      </div>
</template>


<script>
    export default {

    }
</script>

<style>
    .footer {
        width: 100%;
        height: 60px;
        display: flex;
        color: #333;
        display: flex;
        align-items: center;
        border-top: 1px solid #ccc;
    }
    
    .footer a {
        flex: 1;
        color: #333;
        text-decoration: none;
        text-align: center;
        flex-basis: 1;
        flex-shrink: 0;
    }
    
    .footer a dl dt i {
        font-size: 20px;
    }
    
    .footer a dl dd {
        font-size: 12px;
        line-height: 2;
    }
</style>