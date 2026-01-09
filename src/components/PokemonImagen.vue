<template>
    <div class="pokemon-container">
  <img :src="srcImagen" alt="No se puede renderizar" draggable="false">
    </div>
</template>

<script>
export default {
       beforeUnmount() {
    console.log("beforeUnmount: justo antes de que el componente se destruya.");
  },
  unmounted() {
    console.log("unmounted: ya fue removido del DOM y destruido.");
  },
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
}
</script>

<style>

    .pokemon-container {
        height: 200px;
    }

    img {
        height: 200px;
        right: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        right: 32%;
    }

</style>