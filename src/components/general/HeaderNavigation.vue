<template>
  <div class="navigation-bar">
    <div class="header">
      <font-awesome-icon icon="bars" class="button-small left clickable" @click="toggleMenu"/>
      <div class="logo left">
        evento
      </div>
      <div class="user-settings right" @click="toggleUserMenu">
        <img class="user-profile button-small clickable" :src="getImage(this.$store.state.userData.profileImage)"/>
      </div>
    </div>
    <SettingsMenu ref="settings" class="menu"/>
    <UserMenu ref="userSettings" class="menu"/>
  </div>
</template>

<script>
  import imageService from '../../services/imageService'
  import SettingsMenu from './SettingsMenu'
  import UserMenu from './UserMenu'
  export default {
    mixins: [imageService],
    components: {SettingsMenu, UserMenu},
    data: function () {
      return {
      }
    },
    methods: {
      toggleMenu: function () {
        this.$refs.settings.open = !this.$refs.settings.open
        this.$refs.userSettings.open = false
      },
      toggleUserMenu: function () {
        this.$refs.settings.open = false
        this.$refs.userSettings.open = !this.$refs.userSettings.open
      }
    }
  }
</script>

<style scoped>
  .navigation-bar{
    font-size: 24px;
    height: 35px;
    z-index: 2;
    padding: 15px;
    border-bottom: 2px solid gray;
  }

  .header{

  }

  .settings-menu{
  }

  .logo{
    margin-left: 30px;
    line-height: 38px;
  }

  .user-profile {
    border-radius: 50px;
    border: 2px solid gray;
    position: absolute;
    right: 10px;
  }

  .menu {
    margin-top: 13px;
    width: 100%;
    background: grey;
    text-align: center;
  }

</style>