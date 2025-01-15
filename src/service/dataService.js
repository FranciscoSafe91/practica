import axios from "axios"
export const get = async (url,params={}) => {
    try {
        const response = await axios.get(url, {params})
        return response.data
    } catch (error) {
        
    }
    
}