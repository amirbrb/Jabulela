<template>
  <div class="div12 center wrapper">
    <h3>Login</h3>
    <div class="user-wrapper">
      <font-awesome-icon v-if="!$store.state.userData.authenticated" icon="user-circle" class="user-fa"/>
    </div>
    <div class="form-container">
      <div class="form-text-wrapper">
        <input v-model="userName" placeholder="user name"/>  
        <font-awesome-icon icon="signature" class="add-on"/>
      </div>
      <div class="form-text-wrapper">
        <input type="password" v-model="password" ref="password" placeholder="password"/>  
        <font-awesome-icon icon="eye-slash" class="add-on clickable" @click="togglePassword"/>
        <div><router-link to="recoverpassword" class="recover-password">forgot passord?</router-link></div>
      </div>
      <div class="form-check-wrapper top40">
        <input id="cbx-password" type="checkbox" checked="checked"/>
        <label for="cbx-password">i'm here to stay</label>
      </div>
      <div class="form-submit-wrapper">
        <div class="submit clickable" @click="login">take me in</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    methods: {
      togglePassword: function () {
        let pass = this.$refs.password
        if (pass.getAttribute('type') === 'password') {
          pass.setAttribute('type', '')
        } else {
          pass.setAttribute('type', 'password')
        }
      },
      login: function () {
      }
    },
    data: function () {
      return {
        userName: '',
        password: ''
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    margin-top: 40px;
  }

  .user-avatar {   
    width: 100px;
    height: 100px;
    border: 1px solid black;
    color: #A8A8A8;
  }

  .user-fa{
    font-size: 55px;
  }

  .recover-password{
    color: blue;
    margin-left: 130px;
  }
</style>