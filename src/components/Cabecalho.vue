<script>  
import { RouterLink } from 'vue-router';  
import logo from './imgs/favicon.png'; // Certifique-se de que o caminho esteja correto e acessível  

export default {  
  name: 'Cabecalho',  
  props: {  
    username: {  
      type: String,  
      default: ''  
    }  
  },  
  data() {  
    return {  
      logo,  
    };  
  },  
  methods: {  
    logout() {  
      this.$emit('logout'); // Emite o evento de logout  
    }  
  }  
}  
</script>  

<template> 
<hr>
<p></p> 
  <header class="bg-light shadow-sm py-3">  
    <div class="container-fluid d-flex justify-content-between align-items-center px-4">  
      <img :src="logo" alt="Logotipo" class="img-fluid" style="height: 40px;" />  
      <div class="text-center">  
        <h5 class="username-highlight fw-bold">  
            Bem-vindo, <span class="username-highlight fw-bold" v-if="username">{{ username }}</span>  
        </h5>  
        <nav class="d-flex align-items-center">  
          <button v-if="username" @click.prevent="logout" class="btn btn-link">Logout</button>  
          <RouterLink v-else to="/" class="btn btn-link">Login</RouterLink>  
          <RouterLink to="/postagens" class="btn btn-link ms-3">Postagens</RouterLink>  
        </nav>  
      </div>  
    </div>  
  </header>  
  <hr>
  <p></p>
</template>  

<style scoped>  
header {  
  border-bottom: 1px solid #e3e3e3;  
}  

img {  
  max-height: 40px;  
}  

nav {  
  display: flex;  
  gap: 10px;  
  font-size: 14px;  
}  

.btn-link {  
  color: #007BFF;  
  font-weight: 500;  
  text-decoration: none;  
}  

.btn-link:hover {  
  text-decoration: underline;  
}  

.username-highlight {  
  color: #000;  
  font-size: 18px;  
  background-color: #f0f0f0;  
  padding: 5px 8px;  
  border-radius: 4px;  
  margin-left: 5px;  
}  

@media (max-width: 576px) {  
  .container-fluid {  
    flex-direction: column;  
    text-align: center;  
  }  
}  
</style>