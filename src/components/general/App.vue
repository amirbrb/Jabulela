<template>
  <div class="wrapper">
    <div class="header">
      <div class="inner">
        <HeaderNavigation></HeaderNavigation>
      </div>
    </div>
    <div class="content">
      <div class="inner">
        <div class="scrollable">
          <div class="router-content">
              <router-view></router-view>
              dddd
          </div>
        </div>
      </div>
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
  
  html, body {
    height: 100%;
    margin: 0;  
  }
  .wrapper {
    height: 100%;
    width: 100%;
    display: table;
  }
  .header, .content, .footer {
    display: table-row;
  }
  .inner {
    display: table-cell;
  }
  .content .inner {
    height: 100%;
    position: relative;
  }
  .scrollable {
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    overflow: auto;
  }

  .router-content{
    padding: 15px;
  }
</style>