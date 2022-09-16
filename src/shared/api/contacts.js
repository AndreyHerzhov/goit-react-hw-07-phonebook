import axios from "axios";

const instance = axios.create({
    baseURL: "https://632227e5362b0d4e7dc9abfc.mockapi.io/contacts",
   
})

export const getContacts = async() => {
    const {data} = await instance.get("/");
    return data 
}

export const addContact = async(data) => {
    const {data: result} = await instance.post("/", data)
    return result
}

export const removeContact = async(id) => {
    const {data: result} = await instance.delete(`/${id}`)
    return result
}