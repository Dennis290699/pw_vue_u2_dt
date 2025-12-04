<template>
  <div class="">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" v-model="nombre" />

    <br>
    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" v-model="apellido" />

    <p>{{ nombre }} - {{ apellido }}</p>

    <button v-on:click="imprimirNombre()">Imprimir Nombre</button>
    <button v-on:click="agregarEstudiante()">Agregar estudiante</button>

    <h1>{{ arreglo[0] }}</h1>

    <br />
    <label for="nombre_1">Nombre:</label>
    <input type="text" id="nombre_1" v-model="nombre">

    <br />
    <label for="apellido_1">Apellido:</label>
    <input type="text" id="apellido_1" v-model="apellido" v-on:keypress.enter="agregarEstudiante1($event)">

    <ul>
      <li v-show="nombre !== null" v-for="{nombre, apellido} in arreglo" :key="nombre">
        {{ nombre }} - {{ apellido }}
      </li>
    </ul>

    <h2>Tabla</h2>

    <table>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
      </thead>
      <tbody v-for="{nombre, apellido} in arreglo" :key="nombre">
        <td>{{ nombre }}</td>
        <td>{{ apellido }}</td>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: null,
            apellido: null,
            arreglo: [],
        };
    },
    methods: {
        imprimirNombre() {
            console.log(this.nombre);
        },
        agregarEstudiante() {
            const estudiante = {
                nombre: this.nombre,
                apellido: this.apellido,
            };
            console.log("Se agrego un estudiante");
            console.log(estudiante);
            this.arreglo.push(estudiante);
            this.limpiarFormulario();
        },

        agregarEstudiante1(event) {
          if (event.charCode !== 13) {
            return;
          }
          console.log("presiono el enter");

            console.log("Se agrego un estudiante en keypress");
            console.log(event);
            console.log(event.chartCode);

            const estudiante1 = {
                nombre: this.nombre,
                apellido: this.apellido,
            };
            console.log("Se agrego un estudiante");
            console.log(estudiante1);
            this.arreglo.push(estudiante1);
            this.limpiarFormulario();

        },

        limpiarFormulario() {
            this.nombre = null;
            this.apellido = null;
        },
    },
};
</script >

<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  text-align: center;
}
</style>