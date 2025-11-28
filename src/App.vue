<template>
  <div>
    <!-- <contadorView/> -->
    <directivas/>
  </div>
</template>

<script>
import contadorView from "./views/contadorView.vue";
import directivas from "./views/directivasView.vue";

export default {
 components: {
    contadorView,
    directivas
  },
}
</script>

<style>

</style>