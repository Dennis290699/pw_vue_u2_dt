<template>
    <h2>Prueba</h2>

  <div class="view-container">
    <Directivas/>
  </div>
</template>

<script>

import Directivas from "../components/directivas.vue"

export default {
    components: {
        Directivas
    }
};
</script>

<style>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 50px;
  text-align: center;
}
</style>