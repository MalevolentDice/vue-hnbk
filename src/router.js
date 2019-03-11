import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const KontoKorrentKredit = () => import('./views/KontoKorrentKredit.vue')
const Festdarlehen = () => import('./views/FestDarlehen.vue')
const Annuitaetendarlehen = () => import('./views/AnnuitaetenDarlehen.vue')
const Linuxuser = () => import('./views/LinuxUser.vue')
const Entgeldabrechnung = () => import('./views/EntgeldAbrechnung.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      component: KontoKorrentKredit
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
    },
    {
      path: '/entgeldabrechnung',
      name: 'entgeldabrechnung',
      component: Entgeldabrechnung
    }
  ]
})
