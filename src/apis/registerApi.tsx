import axios from "axios";

const url: string = "http://localhost:3200/api/v1"
interface iData {
    name?: string;
    email?: string;
    password?: string;
}


export const registerApi = async (data: any) => {
   try {
    return await axios.post(`${url}/register`, data).then((res: any) => {
        return res.data.data
    })
   } catch (error) {
    console.log(error)
   }
}

export const signin = async (data: iData) => {
   try {
    return await axios.post(`${url}/signin`, data).then((res: any) => {
        return res.data.data
    })
   } catch (error) {
    console.log(error)
   }
}