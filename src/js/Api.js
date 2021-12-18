import axios from "axios"

export class Api {
    constructor(config) {
        this.url = config.url
    }
    async cities() {
        try {
            const response = await axios.get(`${this.url}cities`)
            const data = response.data
            return data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
        async countries() {
        try {
            const response = await axios.get(`${this.url}countries`)
            const data = response.data
            return data
        }
        catch (error) {
            console.log(error)
            return Promise.reject(error)
       }
    };
    
}



