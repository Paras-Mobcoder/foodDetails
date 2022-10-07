import axios from "axios";

 export const getFoodDetails = () => {
    const response = axios.get('http://192.168.9.73:9000/about/food/')
    console.log(response)
    return response
}