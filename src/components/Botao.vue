<script>
    export default {
        props: {
            link: String,
            textodoBotao: String
        }
    }

</script>
<template>
<div >
    <a :href="link" {{textodoBotao}}></a>
</div>

</template>
<style scoped>

</style>