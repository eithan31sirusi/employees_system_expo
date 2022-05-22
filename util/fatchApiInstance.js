
import axios from 'axios';


export let fetchApiInstance;
export function initialAxiosInstance() {
    fetchApiInstance = axios.create({
        // baseURL: 'https://api.bigtime60app.co.il',
        headers: {
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json",
        }
    })
    
}
