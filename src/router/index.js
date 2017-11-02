import Vue from 'vue'
import Router from 'vue-router'
import Mytellist from '@/components/Mytellist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mytellist',
      component: Mytellist
    }
  ]
})
