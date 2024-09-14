<script>
import Botao from       "./Botao.vue"
import logo from        "./imgs/favicon.png"
export default{
    props:{
        logotipo: String,
        textodoBotao: String,
        link: String
    },
    data() {
        return {
            
            logo 
            
        };
   
    }

}
</script>

<template>
    <div>
        <img id="log":src="logo">
    </div>
    
        <Botao textodoBotao="Acessar Agora" link="http://youtube.com.br" />
    
</template>

<style>
    #log{
        width: 250px;
        left: 300px;
        margin-left: 5px
    }
    #btn{
        font-size: 15px;
        color: aqua;
    }   
 #container{

    position: relative;
    background-color: rgb(187, 181, 181);
    width: 140px;
    height: 100px;
    }
</style>