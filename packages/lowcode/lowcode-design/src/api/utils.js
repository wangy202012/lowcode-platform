import axios from 'axios'
axios.interceptors.request.use(config => {
    // 设置Authorization
    const token = localStorage.getItem('access_token')
    if (token) {
        config.headers.Authorization = "Bearer " + token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
    if (response?.data?.code === 401) {
        const url = response?.data?.data?.targetUrl + "&redirect_uri=" + encodeURIComponent(location.href)
        window.location.href = (url)
    }
    return response
}, (error) => {
    return Promise.reject(error)
})
const get = (url) => {
    return axios.get(url).then(res => {
        if (res.status === 200) {
            return res.data
        } else {
            throw new Error('返回错误')
        }
    })
}
const post = (url, data) => {
    return axios.post(url, data).then(res => {
        if (res.status === 200) {
            return res.data
        } else {
            throw new Error('返回错误')
        }
    })
}


const put = (url, data) => {
    return axios.put(url, data).then(res => {
        if (res.status === 200) {
            return res.data
        } else {
            throw new Error('返回错误')
        }
    })
}

const del = (url) => {
    return axios.delete(url).then(res => {
        if (res.status === 200) {
            return res.data
        } else {
            throw new Error('返回错误')
        }
    })
}
export default {
    get,
    post,
    put,
    del
}