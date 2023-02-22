import axios from 'axios'


const httpMethod = axios.create({
    baseURL: 'https://api.realworld.io/api-docs',
});

export default httpMethod;