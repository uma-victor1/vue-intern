import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://hirng-x2021.glitch.me/api',
    Headers: { Accept: 'application/json' },
    timeout: 10000
  })

  export default {
      getContactInfo(){
          return axiosInstance.get()
      }
  }
  