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
</style>