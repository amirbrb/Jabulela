<template>
  <transition name="slide3">
    <div class="settings-menu" v-if="open">
      settings
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
  .settings-menu{

  }
</style>