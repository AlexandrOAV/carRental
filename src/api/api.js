import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from 'constans/constans';


export async function getTrendingCar() {
    const url = `${BASE_URL}/adverts`
    try {
        const response = await axios(url);
        const dataRespons = await response.data;
        return dataRespons;
    }
    catch (error) {
        toast.error(`API not faund: ${error.message}`)
        throw new Error(error.message);
    }
}

export async function getOneCar(id) {
    const url = `${BASE_URL}/adverts/:${id}`
    try {
        const response = await axios(url);
        const dataCar = await response.data;
        return dataCar;
    }catch(error){
        toast.error(`API not faund: ${error.message}`)
        throw new Error(error.message);
    }
}