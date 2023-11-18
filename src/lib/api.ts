import axios from "axios";
import { user } from "./types";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})


export const allPosts = async ():Promise<user[]> =>{
    return api.get('/posts').then((res)=>res.data)
}

export const singlePost = async (id:string):Promise<user> =>{
    return api.get(`/posts/${id}`).then((res)=>res.data)
}