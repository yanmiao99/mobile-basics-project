/*
*  storage 二次封装
*  功能 :
*   1. 命名空间实现 , 防止不同项目数据混淆
*   2. 存储类型支持 object
*   3. 支持删除单项
* */

// 命名空间
const NAME_SPACE = "mobile-basic"

const getStorage = () => {
    return JSON.parse(window.localStorage.getItem(NAME_SPACE) || "{}")
}

export default {
    // 存储单条数据
    setItem(key, val) {
        let storage = getStorage()
        storage[key] = val
        window.localStorage.setItem(NAME_SPACE, JSON.stringify(storage))
    },
    // 获取单条数据
    getItem(key) {
        return getStorage()[key]
    },
    // 清除单条 localStorage
    clearItem(key) {
        let storage = getStorage()
        delete storage[key]
        window.localStorage.setItem(NAME_SPACE, JSON.stringify(storage))
    },
    // 清除全部localStorage
    clearAll() {
        // 清除命名空间内容
        window.localStorage.removeItem(NAME_SPACE)
        // window.localStorage.clear()
    }
}

