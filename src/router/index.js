import Vue from 'vue'
import Router from 'vue-router'
import memleak from '@/components/memleak'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'memleak',
      component: memleak
    }
  ]
})
