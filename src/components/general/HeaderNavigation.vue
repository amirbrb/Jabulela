<template>
  <div class="navigation-bar">
    <div class="header">
      <font-awesome-icon icon="bars" class="button-small left" @click="toggleMenu"/>
      <div class="logo left">
        evento
      </div>
      <div class="user-settings right" @click="toggleUserMenu">
        <img class="user-profile button-small" :src="getImage(this.$store.state.userData.profileImage)"/>
      </div>
    </div>
    <SettingsMenu ref="settings" style="display:none"/>
    <UserMenu ref="userSettings"/>
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
        isShowingSystemSettings: false,
        isShowingUserSettings: false
      }
    },
    methods: {
      toggleMenu: function () {
        this.isShowingSystemSettings = !this.isShowingSystemSettings
        this.$refs.settings.open = this.isShowingSystemSettings
        this.$refs.userSettings.open = false
      },
      toggleUserMenu: function () {
        this.isShowingUserSettings = !this.isShowingUserSettings
        this.$refs.settings.open = false
        this.$refs.userSettings.open = this.isShowingUserSettings
      }
    }
  }
</script>

<style scoped>
  .navigation-bar{
    font-size: 24px;
    padding: 10px;
    height: 25px;
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    z-index: 2;
    background: red;
  }

  .logo{
    margin-left: 40px;
    width: 150px;
    line-height: 38px;
  }

  .user-profile {
    border-radius: 50px;
    border: 2px solid gray;
    margin-right: 20px;
  }

</style>