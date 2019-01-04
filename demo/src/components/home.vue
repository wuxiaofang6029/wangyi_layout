<template>
    <!-- 发现 -->
  <div class='wraper'>
    <div class="main">
      <Top></Top>
      <div class="nav">
        <router-link to='/home/reco'><span>个性推荐</span></router-link>
        <router-link to='/home/anchor'><span>主播电台</span></router-link>
      </div>
      <div class="bg">
        <div class="img">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in swiperData" :key="item">
              <img :src="item.imgs" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>

</template>

<script>
    import Footer from './com/footer'
    import Top from './com/top'
    export default {
        data() {
            return {
                swiperData: [{
                    "imgs": "https://desk-fd.zol-img.com.cn/t_s144x90c5/g5/M00/02/01/ChMkJ1bKxPmIPsobAAtBGSxTZ00AALHPADeFZwAC0Ex487.jpg"
                }, {
                    "imgs": "https://desk-fd.zol-img.com.cn/t_s208x208c5/g5/M00/04/09/ChMkJ1oM6NKIIUP-AAcPx6M4Es8AAiNBQK9xwcABw_f602.jpg"
                }, {
                    "imgs": "http://img3.imgtn.bdimg.com/it/u=1209904593,2579101878&fm=26&gp=0.jpg"
                }]

            }
        },
        components: {
            Footer,
            Top
        }
    }
</script>

<style>
    .nav {
        width: 100%;
        height: 40px;
        background: #33383b;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .nav span {
        color: #fff;
    }
    
    .bg {
        width: 100%;
        height: 120px;
        background: #33383b;
        position: relative;
    }
    
    .img {
        width: 90%;
        margin: 0 5%;
        position: absolute;
        top: 10px;
        border-radius: 10px;
        overflow: hidden;
    }
    
    .img .el-carousel__item img {
        width: 100%;
    }
    
    .tit {
        width: 100%;
        height: 40px;
        font-size: 18px;
        padding: 0 15px;
        box-sizing: border-box;
        line-height: 40px;
        margin-top: 10px;
    }
    
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>