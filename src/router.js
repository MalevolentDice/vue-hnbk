import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routerOptions = [
  { path: "/", view: "Home" },
  { path: "/kontokorrentkredit", view: "KontoKorrentKredit" },
  { path: "/festdarlehen", view: "FestDarlehen" },
  { path: "/AnnuitaetenDarlehen", view: "AnnuitaetenDarlehen" },
  { path: "/LinuxUser", view: "LinuxUser" },
  { path: "/EntgeldAbrechnung", view: "EntgeldAbrechnung" },
  { path: "/Sampling", view: "Sampling" },
  { path: "/ABCAnalyse", view: "ABCAnalyse" },
  { path: "/Zahlungsarten", view: "Zahlungsarten" },
  { path: "/Rechtsformen", view: "Rechtsformen" },
  { path: "/handelskalkulation", view: "Handelskalkulation" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`./views/${route.view}.vue`)
  };
});

export default new Router({
  routes
});
