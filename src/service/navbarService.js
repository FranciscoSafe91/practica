import { get } from "@/service/dataService"

export const getMenuItems = async () => {
    try {
        return await get("http://localhost:3000/api/menu")
    } catch (error) {
        
    }
}