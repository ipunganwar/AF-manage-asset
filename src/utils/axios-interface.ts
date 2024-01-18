import axios, { AxiosInstance } from 'axios'

const createApiInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: 'http://localhost:3000/'
  })
}

export default createApiInstance