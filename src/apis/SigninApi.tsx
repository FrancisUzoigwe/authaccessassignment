import axios from "axios"
const url: string = "http://localhost:3200/api/v1"

export const signinApi = async (data: any) => {
    try {
     return await axios.post(`${url}/signin`, data).then((res: any) => {
         return res.data.data
     })
    } catch (error) {
     console.log(error)
    }
 }