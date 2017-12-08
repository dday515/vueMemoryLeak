import Vue from 'vue'
import Router from 'vue-router'
import memleak from '@/components/reviews/memleak'
import results from '@/components/reviews/results'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'memleak',
      component: memleak
    },
    {
      path: '/results',
      name: 'results',
      component: results
    }
  ]
})
