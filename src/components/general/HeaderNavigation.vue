<template>
  <div class="navigation-bar container-fluid">
    <div class="col-12">
      <div class="row">
        <div class="col-2 text-left">
          <font-awesome-icon icon="bars"/>
        </div>
        <div class="col-6 text-center logo">
          <router-link to="/">
            <div>
              JABULEL<em style="font-style: italic; font-weight: 100;">A</em>
            </div>
          </router-link>
        </div>
        <div class="col-4 text-right d-flex d-sm-none">
          <div class="menu-item-m">
            <router-link to="/list">
              <font-awesome-icon icon="list-ul"/>
            </router-link>
          </div>
          <div class="menu-item-m">
            <router-link to="/geo" class="d-sm-none ml-1 mt-2">
              <font-awesome-icon icon="globe"/>
            </router-link>
          </div>
        </div>
        <div class="col-4 text-right d-none d-sm-flex">
          <div class="menu-item-d">
            <router-link to="/list">
              <div>list view</div>
            </router-link>
          </div>
          <div class="menu-item-d">
            <router-link to="/geo" class="d-none d-sm-flex ml-5">
              <div>map view</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data: function () {
      return {
      }
    },
    mounted: function () {
      console.log(this.$store.state.userData)
    },
    watch: {
      $route (to, from) {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .navigation-bar{
    background: #F8F8F8;
    padding-top: 10px;
    padding-left: 2px;
    height: 50px;
    margin-top:5px;
    z-index: 2;
    border-bottom: 2px solid #A0A0A0;
  }

  .logo{
    margin-top: -7px;
    font-size: 32px;
    font-weight: bold;
    color: #B22222;
    font-family: 'Indie Flower', cursive;
  }

  .menu-item-m{
    font-size: 20px;
    color: #383838;
    width: 60px;
    border-left: 1px solid #A0A0A0;
    text-align: center;
  }

  .menu-item-m.selected{
    background: #A8A8A8;
    color: white;
  }


  .menu-item-m:nth-of-type(1){
    border-left: 0;
  }
</style>