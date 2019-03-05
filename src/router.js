import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import KontoKorrentKredit from './views/KontoKorrentKredit.vue'
import Festdarlehen from './views/FestDarlehen.vue'
import Annuitaetendarlehen from './views/AnnuitaetenDarlehen.vue'
import Linuxuser from './views/LinuxUser.vue'
import Entgeldabrechnung from './views/EntgeldAbrechnung.vue'

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
