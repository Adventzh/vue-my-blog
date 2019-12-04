import Vue from 'vue'
// import VueResource from "vue-resource"
import VueRouter from "vue-router"
import App from './App.vue'
import store from './store'
import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"
import SingleBlog from "./components/SingleBlog"
import EditBlog from "./components/EditBlog"
import axios from 'axios'

//全局配置
axios.defaults.baseURL = 'https://myblog-67ee3.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'Token'

Vue.config.productionTip = false
// Vue.use(VueResource)
Vue.use(VueRouter)
Vue.prototype.$axios = axios

// 全局
// 1. 自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })
// Vue.directive('theme', {
//   bind(el, binding, vnode) {
//     if (binding.value == 'wide') {
//       el.style.maxWidth = '1260px';
//     } else if (binding.value == 'narrow') {
//       el.style.maxWidth = '560px';
//     } else if (binding.value == 'normal') {
//       el.style.maxWidth = '800px';
//     }

//     if (binding.arg == 'column') {
//       el.style.background = '#6677cc';
//       el.style.padding = '20px';
//     }
//   }
// })

// 2. 自定义过滤器
// Vue.filter("to-uppercase", function (value) {
//   return value.toUpperCase();
// })
// Vue.filter("snippet", function (value) {
//   return value.slice(0,100) + "...";
// })

//创建路由
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{
      path: "/",
      component: ShowBlogs
    },
    {
      path: "/add",
      component: AddBlog
    },
    {
      path: "/blog/:id",
      component: SingleBlog
    },
    {
      path: "/edit/:id",
      component: EditBlog
    }
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')