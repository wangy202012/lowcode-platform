const encodeSchema = (obj)=>{ // obj转字符串
    return encodeURIComponent(JSON.stringify(obj))
}
const decodeSchema = (str)=>{ // 字符串转obj
    return JSON.parse(decodeURIComponent(str)) 
}


const getTime = (timestap)=>{
    return moment(timestap).format('YYYY-MM-DD HH:mm:ss')
}

const getAppId = ()=>{
    return new URL(location.origin + location.hash.slice(1)).searchParams.get('appId')
}

const getAppPath = ()=>{
    return new URL(location.origin + location.hash.slice(1)).searchParams.get('appPath')
}


function downloadFile(content, fileName) {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }
  
export default {
    encodeSchema,
    decodeSchema,
    getAppId,
    getAppPath,
    getTime,
    downloadFile
}