<template>
  <div v-bind:class="{'user-menu': true, visible: this.open, hidden: !this.open}">
    user menu
  </div>
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
  
</style>