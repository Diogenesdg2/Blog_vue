<template>  
  <div>  
    <Cabecalho   
      v-if="isAuthenticated"   
      :username="loggedInUser"   
      @logout="handleLogout"  
    />  

    <LoginComponent v-else @login-success="handleLoginSuccess" />  
    
    <RouterView v-if="isAuthenticated" />  
  </div>  
</template>  

<script>  
import Cabecalho from './components/Cabecalho.vue';  
import LoginComponent from './components/Login.vue';  

export default {  
  components: {  
    Cabecalho,  
    LoginComponent  
  },  
  data() {  
    return {  
      isAuthenticated: false,  
      loggedInUser: ''  
    };  
  },  
  methods: {  
    handleLoginSuccess(username) {  
      this.isAuthenticated = true;  
      this.loggedInUser = username;  
    },  
    handleLogout() {  
      this.isAuthenticated = false; // Reseta a autenticação  
      this.loggedInUser = ''; // Limpa o nome do usuário  
      this.$router.push('/'); // Redireciona para a tela de login  
    }  
  }  
}  
</script>