<script>
export default{
    name: "Postagens",
    props: {
        imagem: String,
        titulo: String,
        mensagem: String,
        autor: String
    }
}
</script>
<template>
  
    <div id="container">
        <stl class="tit">{{ titulo }}</stl>
        <stl class="men">{{ mensagem }}</stl>
        <p></p>
        <stl class="aut">{{ autor }}</stl>
    </div>
   

</template>
<style scoped>
    #container{
    position: relative;
    background-color: rgb(187, 181, 181);
    width: 1300px;
    height: 1000px;
    }
    .tit{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 50px;
    color: black;
    display: flex;
    text-align: justify;
    margin-left: 10px;
    margin-right: 10px;

    }
    .men{
    font-size: 20px;
    color: black;
    display: flex;
    text-align: justify;
    margin-left: 10px;
    margin-right: 10px;
    }
    
    .aut{
    font-size: 15px;
    color: black;
    display: flex;
    }
</style>