<script>  
import logo from "./imgs/favicon.png"; // Certifique-se de que o caminho para o logotipo está correto  

export default {  
  data() {  
    return {  
      email: '',  
      password: '',  
      loginError: false,  
      logo // Inclui o logotipo nos dados  
    };  
  },  
  methods: {  
    processLogin(event) {  
      event.preventDefault(); // Prevenir o envio padrão do formulário  

      // Verificar se as credenciais são corretas  
      if (this.email.toLowerCase() === 'diogenesdaniel@msn.com' && this.password === 'neitrfcd') {  
        this.loginError = false;  
        // Exibir um alerta e redirecionar para a área de postagens  
        alert('Login realizado com sucesso! Redirecionando para a área de postagem...');  
        this.$emit('login-success', 'Diogenes'); // Emite o evento de sucesso   
        this.$router.push('/postagens');  
      } else {  
        this.loginError = true;  
      }  
    }  
  }  
}  
</script>  

<template>  
<div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">  
  <div class="card shadow-lg" style="width: 28rem; border-radius: 10px;">  
    <div class="card-body py-5">  
      <!-- Adiciona o logotipo acima do título -->  
      <div class="text-center mb-4">  
        <img :src="logo" alt="Logotipo" class="img-fluid mb-3" style="max-width: 100px;" />  
        <h2 class="card-title text-center mb-0">Faça o Login</h2>  
        <p class="text-muted">Acesse sua conta</p>  
      </div>  
      <form @submit="processLogin">  
        <div class="mb-4">  
          <label for="email" class="form-label">Email</label>  
          <input type="email" id="email" v-model="email" required class="form-control form-control-lg" placeholder="seu.email@exemplo.com"/>  
        </div>  
        <div class="mb-4">  
          <label for="password" class="form-label">Senha</label>  
          <input type="password" id="password" v-model="password" required class="form-control form-control-lg" placeholder="******"/>  
        </div>  
        <button type="submit" class="btn btn-primary btn-lg w-100">Entrar</button>  
      </form>  
      <div v-if="loginError" class="alert alert-danger mt-4">  
        Usuário ou senha incorretos.  
      </div>  
    </div>  
  </div>  
</div>  
</template>  

<style scoped>  
.card-title {  
  font-weight: bold;  
  color: #333;  
}  

.form-label {  
  font-weight: bold;  
}  

.card {  
  border: none;  
  border-radius: 8px;  
}  

.btn-primary {  
  background-color: #007BFF;  
  border: none;  
}  
</style>