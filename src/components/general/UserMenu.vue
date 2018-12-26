<template>
  <transition name="slide3">
    <div class="user-menu" v-if="open">
      user menu
    </div>  
  </transition>
</template>

<script>
  export default {
    components: {},
    methods: {
    },
    data: () => {
      return {
        open: false
      }
    }
  }
</script>

<style scoped>
  .user-menu{
    
  }
</style>