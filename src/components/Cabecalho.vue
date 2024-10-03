<script>
import { RouterLink, RouterView } from 'vue-router'
import Botao from       "./Botao.vue"
import logo from        "./imgs/favicon.png"

export default{
    data() {
        return {
            
            logo 
            
        };
   
    },
    components: {
        Botao,
    }

}
</script>

<template>
    <div>
        <div>
            <img id="log" :src="logo"/>
        </div>
        <div>
            <RouterLink to="/login">Login</RouterLink>           
        </div>
        <div>
          
            
        </div>
    </div> 
    
</template>

<style>
    #log{
        width: 250px;
        margin-left: 5px
    }
 
 #container{

    position: relative;
    background-color: rgb(255, 254, 254);
    width: 140px;
    height: 100px;
    }
</style>