<template>
  <div>
    <h1>{{ tit }}</h1>
    <!-- Usamos las variables reactivas -->
    <p>{{ numero }} <sup>2</sup> = {{ calcularCuadrado }} </p>

    <p>{{ numero }} <sup>2</sup> = {{ calcularCuadrado }} </p>

    <p>{{ numero }} <sup>2</sup> = {{ calcularCuadrado }} </p>

    <p>{{ numero }} <sup>2</sup> = {{ calcularCuadrado }} </p>

    <p>{{ numero }} <sup>3</sup> = {{ calcularCubo }} </p>

    <p>{{ numero }} <sup>3</sup> = {{ obtenerCubo() }} </p>

    <section>
      <button v-on:click="incrementar()">Incrementar +1</button>
      <button v-on:click="decrementar()">Decrementar -1</button>
      <button v-show="mostrar">Mostrar/ocultar</button>
    </section>
  </div>
</template>

<script>
export default {
  // declaracion de propiedades reactivas
  data() {
    return {
      // Variable reactiva
      numero: this.inicio,
      titulo: "Contador"
    }
  },
  // declaracion de metodos reactivos
  methods: {
    obtenerCuadrado() {
      console.log("entro a obtenerCuadrado");
      // cuando se usa una propiedad reactiva dentro de un metodo se usa this
      return this.numero * this.numero;
    },
    obtenerCubo() {
      console.log("entro a obtenerCubo");
      // cuando se usa una propiedad reactiva dentro de un metodo se usa this
      return this.numero * this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    }
  },
  // Propiedades computadas
  // se ejecutan solo si cambia el resultado de la ejecucion de su cuerpo caso contrario no se ejecutan
  computed: {
    calcularCuadrado() {
      console.log("entro a calcularCuadrado");
      return this.numero * this.numero;
    },
    calcularCubo() {
      console.log("entro a calcularCubo");
      return this.numero * this.numero * this.numero;
    }
  },
  // props: ['tit', 'inicio', 'mostrar'] // Declaracion Basica de props
  props: {
    tit: String,
    inicio: {
      type: Number,
      default: 99,
      validator: function (value) {
        return value >= 10;
      }
    },
    mostrar: Boolean
  }
  // String, Number, Boolean, Array, Object, Date, function, BigInt
};
</script>

<style>

</style>