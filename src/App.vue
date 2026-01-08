<template>
  <div>
    <!-- <contadorView/> -->
    <!-- <directivasView/> -->
    <!-- <preguntaView/> -->
    <PokemonView/>
  </div>
</template>

<script>
import contadorView from "@/views/contadorView.vue";
import directivasView from "@/views/directivasView.vue";
import preguntaView from "@/views/preguntaView.vue";
import PokemonView from "./views/PokemonView.vue";

export default {
 components: {
    contadorView,
    directivasView,
    preguntaView,
    PokemonView
  },
}
</script>

<style>

</style>