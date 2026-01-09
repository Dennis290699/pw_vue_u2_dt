<template>
    <div class="opciones-container">
        <ul>
            <li v-on:click="pasarpadre(pokemon.id)" v-for="pokemon in listaPokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        listaPokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        pasarpadre(id) {
            this.$emit("pokemonSeleccionado", id);
        }
    }
}
</script>

<style>

    .opciones-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        list-style-type: none;
    }

    li {
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        width: 250px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>