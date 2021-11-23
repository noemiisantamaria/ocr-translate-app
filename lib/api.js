import Vue from 'vue'
import axios from 'axios'

const api = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        if (response.status === 200 ||
            response.status === 201 ||
            response.status === 204) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    (error) => {
        Vue.$log.error('Error: ', error)
        if (error.response) {
            if (error.response.status) {
                switch (error.response.status) {
                    case 400:
                        console.log('method error')
                        break
                    case 401:
                        console.log('session expired')
                        break
                    case 403:
                        console.log('unauthorized')
                        break
                    case 404:
                        console.log('page not exist')
                        break
                    case 500:
                        console.log('Server Error')
                        break
                }
                return Promise.reject(error.response)
            }
        } else {
            return Promise.reject(error)
        }
    }
)

export default api
