<template>
    <div class="container">

        <div class="img-container">
            <img :src="imagen" alt="No hay imagen">
            <div class="overlay"></div>
        </div>

        <div class="form-container">
            <label for="pregunta">Recuerda terminar con el simbolo de interrogacion ?</label>
            <input type="text" v-model="pregunta" id="pregunta" placeholder="Hazme una pregunta" @change="enviarPregunta()" />
            
            <!-- <div class="btn-container">
                <button>Enviar</button>
            </div> -->
            <h2>{{ pregunta }}</h2>
            <h2>{{ respuesta }}</h2>   
        </div>
    </div>
</template>

<script>

import { consumirApiFacade } from "@/clients/YesNoClient";
import fondo from "../../public/assets/1.jpg";

export default {
    data() {
        return {
            pregunta: null,
            respuesta: null,
            imagen: fondo
        }
    },
    watch: {
        pregunta(value, oldValue) {
            console.log("value", value)
            console.log("oldValue", oldValue)

            if(value.includes("?")) {
                this.respuesta = "Pensando..."
                this.enviarPregunta()
            }
        }
    },
    methods: {
        async enviarPregunta() {
            const data = await consumirApiFacade();
            if (data) {
                this.respuesta = data.answer;
                this.imagen = data.image;
            }
        }
    }
}
</script>

<style scoped>
.container, 
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    margin: 25px;
}

.btn-container button {
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #42b983;
  color: white;
}

.img-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.img-container .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Oscuridad */
}

.form-container {
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    z-index: 100;
}

.form-container label {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

.form-container input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    transition: all .2s ease;
}

.form-container input:focus {
    border: 2px solid #42b983;
    outline: none;
}

</style>
