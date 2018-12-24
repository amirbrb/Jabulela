<template>
  <div class="app">
    <HeaderNavigation></HeaderNavigation>
    <div class="route-content">
      asaaaa
    </div>
  </div>
</template>

<script>
  import HeaderNavigation from './HeaderNavigation.vue'
  export default {
    name: 'app',
    components: {HeaderNavigation},
    methods: {
    },
    data: function () {
      return {}
    }
  }
</script>

<style>
  @import '../../../static/css/site.css';

  .app{
  }

  .route-content{
    background: gray;
    margin-top: 70px;
    padding: 10px;
    height: 150vh;
    overflow: auto;
  }
</style>