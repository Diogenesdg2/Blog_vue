<script>
    export default {
        props: {
            link: String,
            textodoBotao: String
        }
    }
</script>

<template>
    <div>
        <a :href="link">{{textodoBotao}}</a>
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
        color: white;
        background-color: rgb(44, 7, 129);
        padding: 20px;
    }

</style>