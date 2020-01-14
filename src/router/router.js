import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//路由懒加载
const Home = () => import ('../pages/Home/Home.vue')
const ZiLiao = () => import ('../pages/ZiLiao/ZiLiao.vue')
const NewsList = () => import ('../pages/NewsList/NewsList.vue')
const NewsDetail = () => import ('../pages/NewsDetail/NewsDetail.vue')
// import Home from "../pages/Home/Home.vue"
// import ZiLiao from "../pages/ZiLiao/ZiLiao.vue"
// import NewsList from "../pages/NewsList/NewsList.vue"
// import NewsDetail from "../pages/NewsDetail/NewsDetail.vue"

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/ZiLiao',
            name:'ziliao',
            component:ZiLiao
        },
        {
            path:'/NewsList',
            name:'newslist',
            component:NewsList
        },
        {
            path:'/NewsDetail',
            name:'newsdetail',
            component:NewsDetail
        }

    ]
})
