<template>
  <div>
    <!-- Usamos solo cuando se espera un numero el v-bind -->
    <contador tit="Contador1" v-bind:inicio="20" v-bind:mostrar="true" /> 
    <!-- Usamos cuando se espera un string el : -->
    <contador tit="Contador2" :inicio="4" :mostrar="false"/>
  </div>
</template>

<script>
import Contador from "../components/contador.vue";
import contador from "../components/contador.vue"

export default {
    components: {
        contador
    }
}
</script>

<style>

</style>