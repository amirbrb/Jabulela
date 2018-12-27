<template>
  
</template>
<script>
  export default {
    created: function () {
      console.log('created')
    },
    mounted: function () {
      if (!this.$store.state.userData.authenticated) {
        this.$router.push('/login')
      }
    }
  }
</script>