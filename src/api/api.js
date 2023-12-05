import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from 'constans/constans';


export async function getTrendingCar(page, limit) {

    const url = (`${BASE_URL}/adverts`)  
    
   const objParams =  {
        completed: false,
        page: page,
        limit: limit,
      };

    try {
        const response = await axios(url, {params: objParams,});
        const dataRespons = await response.data;
        return dataRespons;
    }
    catch (error) {
        toast.error(`API not faund: ${error.message}`)
        throw new Error(error.message);
    }
}

export async function totalCar() {
    const url = `${BASE_URL}/adverts`
    try {
        const response = await axios(url);
        const dataCar = await response.data;
        return dataCar;
    }catch(error){
        toast.error(`API not faund: ${error.message}`)
        throw new Error(error.message);
    }
}