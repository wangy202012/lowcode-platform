const encodeSchema = (obj)=>{ // obj转字符串
    return encodeURIComponent(JSON.stringify(obj))
}
const decodeSchema = (str)=>{ // 字符串转obj
    return JSON.parse(decodeURIComponent(str)) 
}

export default {
    encodeSchema,
    decodeSchema
}