import axios from 'axios';

const consumirApi = async () => {
    try {
        const response = await axios.get('https://yesno.wtf/api');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function consumirApiFacade() {
    return await consumirApi();
}