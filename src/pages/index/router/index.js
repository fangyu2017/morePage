

import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/HelloWorld'
Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:Hello}
  ]
})
