import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import KontoKurrentKredit from './views/kontokorrentkredit.vue'
import Festdarlehen from './views/festdarlehen.vue'
import Annuitaetendarlehen from './views/annuitaetendarlehen.vue'
import Linuxuser from './views/linuxuser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kontokorrentkredit',
      name: 'kontokorrentkredit',
      component: KontoKurrentKredit
    },
    {
      path: '/festdarlehen',
      name: 'festdarlehen',
      component: Festdarlehen
    },
    {
      path: '/annuitaetendarlehen',
      name: 'annuitaetendarlehen',
      component: Annuitaetendarlehen
    },
    {
      path: '/linuxuser',
      name: 'linuxuser',
      component: Linuxuser
    }
  ]
})
