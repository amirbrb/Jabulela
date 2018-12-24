<template>
  <div v-bind:class="{'settings-menu': true, visible: this.open, hidden: !this.open}">
    
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
  .settings-menu{

  }
</style>