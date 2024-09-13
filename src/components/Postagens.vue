<template>  
    <div class="postagem">  
      <img :src="imagem" alt="Imagem da Postagem" class="imagem-postagem" />  
      <h2>{{ titulo }}</h2>  
      <p>{{ mensagem }}</p>  
      <p><strong>Autor: {{ autor }}</strong></p>  
    </div>  
  </template>  
  
  <script>  
  export default {  
    name: 'Postagens',  
    props: {  
      titulo: {  
        type: String,  
        required: true  
      },  
      mensagem: {  
        type: String,  
        required: true  
      },  
      autor: {  
        type: String,  
        required: true  
      },  
      imagem: {  
        type: String,  
        required: true  
      }  
    }  
  }  
  </script>  
  
  <style scoped>  
  .postagem {  
    border: 1px solid #ccc;  
    padding: 16px;  
    margin: 16px 0;  
  }  
  .imagem-postagem {  
    max-width: 100%;  
    height: auto;  
  }  
  </style>