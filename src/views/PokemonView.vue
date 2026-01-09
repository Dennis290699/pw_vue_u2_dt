<template>
  <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />
  <PokemonOpciones
    @pokemonSeleccionado="evaluarGanador($event)"
    :listaPokemons="pokemonArr"
  />

  <!-- Mensaje oculto hasta elegir -->
  <div v-if="mostrarResultado" class="resultado">
    <h2>{{ mensajeResultado }}</h2>
  </div>

  <button @click="destruir()">destruir</button>
</template>

 
<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import {obtenerVectorPokemonFachada, obtenerAleatorioFachada} from '../clients/PokemonClient.js';
 
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      mostrarResultado: false,
      mensajeResultado: '',
      mostrar: true
    };
  },

//   Crear el componente
beforeCreate() {
    console.log('beforeCreate: apenas inicia la instancia del componente');
},
created() {
    console.log('created: ya se resolvieron data, computed, methods y watch');
},

// Monta el componente: renderiza o visualiza el componente
beforeMount() {
    console.log('beforeMount: justo antes del primer render de un componente');
},
mounted() {
    console.log('mounted: justo despues del primer render de un componente');
},

// Actualizacion de un componente
beforeUpdate() {
    console.log('beforeUpdate: cuando cambio data/props/computed y Vue es por re-renderizar');
},
updated() {
    console.log('updated: cuando ya se actualizo tras el re-rederizar');
},

//Desmontaje de un componente
beforeUnmount() {
    console.log('beforeUnmount: justo antes de que el componente se destruya');
},
unmounted() {
    console.log('unmounted: ya fue removido del DOM y destruido');
},

  async mounted() {
    console.log('Componente montado');
    this.iniciarJuego();
  },
  methods:{
    async iniciarJuego(){
    this.pokemonArr = await obtenerVectorPokemonFachada();
    
    const idAleatorio = obtenerAleatorioFachada(0,3);
    this.pokemonGanador = this.pokemonArr[idAleatorio].id;
    },
evaluarGanador(idSeleccionado) {
  this.mostrarResultado = true;

  if (idSeleccionado === this.pokemonGanador) {
    this.mensajeResultado = '¡Ganaste!';
  } else {
    this.mensajeResultado = 'Perdiste';
  }
},
destruir(){
    this.mostrar = false;
}
  },
};
</script>
 
<style>
 
</style>