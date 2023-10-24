import axios from "axios";

const Axios =  axios.create({
    baseURL:"http://localhost:9000"
})

export const Login = ()=>{
    Axios.post('auth/login').then((res)=>console.log(
        res,"loginn"
    ))
}