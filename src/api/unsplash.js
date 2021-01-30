import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID YUqRaFpAmGeHgPOD2NJs7Rbi1JwhWxbKreZGbJvUXKo"
    }
})