import * as VueRouter from 'vue-router'
import Frail from '../components/Frail.vue'
import Sarcf from '../components/Sarcf.vue'
import Snaq from '../components/Snaq.vue'
import Q1 from '../components/RCS/Q1.vue'
import Q2 from '../components/RCS/Q2.vue'
import Q1a from '../components/RCS/Q1a.vue'
import Res from '../components/Res.vue'
import Home from '../components/Home.vue'
import History from '../components/History.vue'

const routes = [
    {
      path:'/frail',
      name:'frail',
      component:Frail
    },
    {
      path:'/sarcf',
      name:'sarcf',
      component:Sarcf
    },
    {
      path:'/snaq',
      name:'snaq',
      component:Snaq
    },
    {
      path:'/',
      // redirect:'/frail'
      component:Home
    },
    {
      path:'/q1',
      name:'q1',
      component:Q1
    },
    {
      path:'/q2',
      name:'q2',
      component:Q2
    },
    {
      path:'/q1a',
      name:'q1a',
      component:Q1a
    },
    {
      path:'/res',
      name:'res',
      component:Res
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/history',
      name:'history',
      component:History
    }

  ]

const router = VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes:routes,
  // base: "./"
});

export default router