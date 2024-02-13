import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    accept: 'application/json',
    withXSRFToken : true
})