<template>
  <div>
    <!-- <contadorView/> -->
    <!-- <directivasView/> -->
    <preguntaView/>
  </div>
</template>

<script>
import contadorView from "@/views/contadorView.vue";
import directivasView from "@/views/directivasView.vue";
import preguntaView from "@/views/preguntaView.vue";

export default {
 components: {
    contadorView,
    directivasView,
    preguntaView
  },
}
</script>

<style>

</style>