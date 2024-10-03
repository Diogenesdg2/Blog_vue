<script>
import { RouterLink } from 'vue-router'
    export default {
        components: {
            RouterLink
        },
        props: {
            link: String,
            textodoBotao: String
        }
    }
</script>

<template>
    <div>
        <RouterLink :to="link">{{ textodoBotao }}</RouterLink>

    </div>
</template>

<style scoped>
    div {
        float: left;
        padding: 10px;
        
    }       
    a {
        color: 000;
        padding: 20px;
                
    }
    a:hover{
        color: rgb(247, 10, 10);
        background-color: rgb(86, 37, 202);
        padding: 20px;
    }

</style>