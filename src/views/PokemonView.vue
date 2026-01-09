<template>
  <PokemonImagen :pokemonId="pokemonGanador" />
  <PokemonOpciones
    @pokemonSeleccionado="evaluarGanador($event)"
    :listaPokemons="pokemonArr"
  />

  <!-- Mensaje oculto hasta elegir -->
  <div v-if="mostrarResultado" class="resultado">
    <h2>{{ mensajeResultado }}</h2>
  </div>
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
    };
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
}

   
  },
};
</script>
 
<style>
 
</style>