<template>
  <div class=''>
    <header>
      <span>
        <router-link class='routs' to="/account"> &lt;</router-link>
      </span>
      <span>会员中心</span>
      <span><i class="el-icon-time"></i></span>
    </header>
    <el-carousel height="170px">
      <el-carousel-item v-for="item in swiperData" :key="item">
        <img :src="item.imgs" alt="">
      </el-carousel-item>
    </el-carousel>
    <h4 class="member_tit">黑胶VIP特权</h4>
    <div class="member_nav">
      <dl>
        <dt><img src="../../assets/account_nav1.jpg" alt=""></dt>
        <dd>会员曲库</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav2.jpg" alt=""></dt>
        <dd>无损音质</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav3.jpg" alt=""></dt>
        <dd>免费下载</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav4.jpg" alt=""></dt>
        <dd>免广告</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav5.jpg" alt=""></dt>
        <dd>音画主题</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav6.jpg" alt=""></dt>
        <dd>头像挂件</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav7.jpg" alt=""></dt>
        <dd>个性皮肤</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav8.jpg" alt=""></dt>
        <dd>商城折扣</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav9.jpg" alt=""></dt>
        <dd>票务特权</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/account_nav10.jpg" alt=""></dt>
        <dd>福利券</dd>
      </dl>
    </div>
    <div class="member_logo">
      <img src="../../assets/member_logo.jpg" alt="">
    </div>
    <div class="welfare">
      <img src="../../assets/member_welfare.jpg" alt="">
      <p>福利券：麦当劳麦辣鸡翅买一送一</p>
    </div>
    <h4 class="member_tit">会员精选内容</h4>
    <el-carousel :interval="4000" type="card" height="150px">
      <el-carousel-item v-for="item in vipData" :key="item">
        <img :src="item.imgs" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="member_musiclibrary"></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperData: [{
                    "imgs": "https://desk-fd.zol-img.com.cn/t_s144x90c5/g5/M00/02/01/ChMkJ1bKxPmIPsobAAtBGSxTZ00AALHPADeFZwAC0Ex487.jpg"
                }, {
                    "imgs": "http://img3.imgtn.bdimg.com/it/u=1209904593,2579101878&fm=26&gp=0.jpg"
                }],
                vipData: [{
                    "imgs": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546099622720&di=dd308ed2c3f3d59bec6827badba3eb71&imgtype=0&src=http%3A%2F%2Fseopic.699pic.com%2Fphoto%2F50059%2F7326.jpg_wh1200.jpg"
                }, {
                    "imgs": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546099652047&di=09ed3010c0581f7886e272c6743769eb&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F6c224f4a20a4462348a168039a22720e0cf3d76c.jpg"
                }, {
                    "imgs": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546099697496&di=dbc6c078fb3b0442e119b73bffd1f3fd&imgtype=0&src=http%3A%2F%2Fimg.besoo.com%2Ffile%2F201608%2F20%2F2125291945908.jpg"
                }]
            }
        }
    }
</script>

<style>
    header {
        height: 50px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        color: rgb(37, 37, 37);
        padding: 0 15px;
        box-sizing: border-box;
    }
    
    header span:nth-of-type(1) {
        font-size: 24px;
    }
    
    header span a {
        color: rgb(37, 37, 37);
    }
    
    header span i {
        font-size: 20px;
    }
    
    .el-carousel__item {
        text-align: center;
    }
    
    .el-carousel__item img {
        width: 90%;
        height: 100%;
        border-radius: 12px;
    }
    
    .member_tit {
        width: 100%;
        height: 70px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        color: #000;
    }
    
    .member_nav {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .member_nav dl {
        width: 20%;
        margin-bottom: 10px;
    }
    
    .member_nav dl dt {
        width: 46px;
        height: 46px;
        margin: 0 auto;
    }
    
    .member_nav dl dt img {
        width: 100%;
        height: 100%;
    }
    
    .member_nav dl dd {
        text-align: center;
        line-height: 2.5;
        font-size: 12px;
    }
    
    .member_logo {
        width: 100%;
        padding: 10px 0;
    }
    
    .member_logo img {
        width: 90%;
        display: block;
        margin: 0 auto;
    }
    
    .welfare {
        width: 100%;
        height: 50px;
        line-height: 2;
        margin-top: 10px;
        padding: 0 15px 0 68px;
        box-sizing: border-box;
        position: relative;
        border-bottom: 10px solid #eee;
    }
    
    .welfare img {
        width: 46px;
        position: absolute;
        left: 15px;
        top: 4px;
    }
</style>