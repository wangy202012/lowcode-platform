import axios from 'axios'
const get = (url)=>{
    return axios.get(url).then(res=>{
        if(res.status===200){
            return res.data
        }else{
            throw new Error('返回错误')
        }
    })
}
const post = (url,data)=>{
    return axios.post(url,data).then(res=>{
        if(res.status===200){
            return res.data
        }else{
            throw new Error('返回错误')
        }
    })
}


const put = (url,data)=>{
    return axios.put(url,data).then(res=>{
        if(res.status===200){
            return res.data
        }else{
            throw new Error('返回错误')
        }
    })
}

const del = (url)=>{
    return axios.delete(url).then(res=>{
        if(res.status===200){
            return res.data
        }else{
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