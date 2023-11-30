import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from 'constans/constans';


export async function getTrendingCar() {
    const url = `${BASE_URL}/adverts`
    // const options = {
    //     params: {
    //         api_key: KEY,
    //     page: page},
      
    // };
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