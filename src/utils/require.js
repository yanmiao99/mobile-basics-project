//  axios 二次封装

// 引入文件
import axios from "axios"
import {Toast} from 'vant';
import 'vant/es/toast/style';

// 全局配置
const service = axios.create({
    // baseURL: 'http://127.0.0.1:3000', // 根路径
    timeout: 8000  // 请求超时时间
})

// 响应拦截
service.interceptors.response.use(res => {

    // 根据业务进行配置
    // const {code, data, msg} = res.data
    //
    // if (code === 200) {
    //     // 请求成功
    //     Toast.success(msg)
    //     return data
    // } else if (code === 400) {
    //     // 请求失败
    //     Toast.fail(msg)
    // }

    Toast.success('数据请求成功 ~ ')
    return res
})

// request 方法
function request(options) {
    options.method = options.method || 'get'

    if (options.method.toLowerCase() === 'get') options.params = options.data

    return service(options)
}

// * request.post('/api',{xxx:xxx})

['get', 'post', 'put', 'delete'].forEach(item => {
    request[item] = (url, data) => {
        return request({
            url,
            data,
            method: item
        })
    }
})

export default request



