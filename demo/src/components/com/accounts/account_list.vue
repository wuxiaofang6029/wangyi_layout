<template>
  <ul class="content_list">
    <li class='mar'>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-message"></i><span>我的消息</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li class='mar'>
      <router-link to='/member'>
        <div class="lef">
          <i class="el-icon-edit"></i><span>会员中心</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-goods"></i><span>商城</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-upload"></i><span>游戏推荐：明日之后</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-service"></i><span>在线听歌免流量</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li class='mar'>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-setting"></i><span>设置</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-mobile-phone"></i><span>扫一扫</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-star-off"></i><span>个性换肤</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
    <li>
      <router-link to=''>
        <div class="lef">
          <i class="el-icon-location-outline"></i><span>夜间模式</span>
        </div>
        <div class="rig"></div>
      </router-link>
    </li>
  </ul>
</template>

<script>
</script>

<style>
    .content_list {
        width: 100%;
    }
    
    .content_list li {
        background: #fff;
    }
    
    .content_list li a {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .content_list li a .lef span {
        margin-left: 8px;
    }
    
    .content_list .mar {
        margin-top: 12px;
    }
</style>