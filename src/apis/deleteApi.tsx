import axios from "axios";

const url: string = "http://localhost:3200/api/v1"

export const deleteApi = async (data: any, taskID: string) => {
    try {
       return await axios.delete(`${url}/${taskID}/delete-task`, data).then((res) => {
        return res.data.data
       })
    } catch (error) {
        console.log(error)
    }
}