/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './axios.js'
const BASE_URL = 'http://localhost:5000'
// const BASE_URL = '/api'

// export  const reqUserInfo= (name,pwd)=> ajax("BASE_URL" + '/login',{name,pwd})
export  const reqUserInfo= ()=> ajax("http://admin.jrjl.net/api/home/mobile/index",{},'POST')

export  const reqHomelist= ()=> ajax("http://admin.jrjl.net/api/home/mobile/index",{},'POST')
