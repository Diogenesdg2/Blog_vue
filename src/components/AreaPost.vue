<template>  
    <div class="area-post">  
      <h1>Postagens</h1>  
      <Postagens  
        v-for="(post, index) in postagens"  
        :key="index"  
        :titulo="post.titulo"  
        :mensagem="post.mensagem"  
        :autor="post.autor"  
        :imagem="post.imagem"  
      />  
    </div>  
  </template>  
  
  <script>  
  import Postagens from './Postagens.vue';  
  
  export default {  
    name: 'AreaPost',  
    components: {  
      Postagens  
    },  
    data() {  
      return {  
        postagens: [  
          {  
            titulo: 'Primeira Postagem',  
            mensagem: 'Esta é a mensagem da primeira postagem.',  
            autor: 'Autor 1',  
            imagem: 'https://via.placeholder.com/400'  
          },  
          {  
            titulo: 'Segunda Postagem',  
            mensagem: 'Esta é a mensagem da segunda postagem.',  
            autor: 'Autor 2',  
            imagem: 'https://via.placeholder.com/400'  
          },  
          {  
            titulo: 'Terceira Postagem',  
            mensagem: 'Esta é a mensagem da terceira postagem.',  
            autor: 'Autor 3',  
            imagem: 'https://via.placeholder.com/400'  
          }  
        ]  
      };  
    }  
  }  
  </script>  
  
  <style scoped>  
  .area-post {  
    padding: 16px;  
  }  
  </style>