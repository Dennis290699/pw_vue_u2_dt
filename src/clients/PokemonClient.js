import axios from 'axios';

const consumirApi = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/${id}');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

const obtenerVectorPokemon = (vectorNumerico) => {
    const data1 = consumir(obtenerVectorNumerico[0]);
    const data2 = consumir(obtenerVectorNumerico[1]);
    const data3 = consumir(obtenerVectorNumerico[2]);
    const data4 = consumir(obtenerVectorNumerico[3]);

    const obj1 = {
        nombre: data1.name,
        id: data1.id,
    }
}

export async function consumirApiFacade() {
    return await consumirApi();
}