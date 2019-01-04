<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    a {
        text-decoration: none;
        color: #2c3e50;
    }
    
    body,
    html {
        width: 100%;
        height: 100%;
    }
    
    #app {
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
    
    .wraper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    
    .main {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>