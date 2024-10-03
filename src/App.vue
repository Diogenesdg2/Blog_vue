<script>
import Cabecalho from   "./components/Cabecalho.vue"
import AreaPost from    "./components/AreaPost.vue"
export default{
  components: {
    Cabecalho,
    AreaPost
  }
}
</script>
<template>
  <Cabecalho />
  <RouterView/>
</template>
<style>
</style>
