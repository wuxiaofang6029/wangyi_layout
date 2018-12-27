<template>
  <div class='content'>
    <div class="nav_icon">
      <dl>
        <dt><img src="../../assets/nav_5.jpg" alt=""></dt>
        <dd>电台分类</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/nav_6.jpg" alt=""></dt>
        <dd>电台排行</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/nav_7.jpg" alt=""></dt>
        <dd>DI电音</dd>
      </dl>
      <dl>
        <dt><img src="../../assets/nav_8.jpg" alt=""></dt>
        <dd>小冰电台</dd>
      </dl>
    </div>
    <h1 class='tit'>推选歌单</h1>
    <Lists></Lists>
  </div>
</template>
<script>
    import Lists from '../com/list_an'
    export default {
        data() {
            return {}
        },
        components: {
            Lists
        }
    }
</script>

<style>

</style>