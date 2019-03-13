<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/kontokorrentkredit">Kontokorrentkredit</router-link>|
      <router-link to="/festdarlehen">Festdarlehen</router-link>|
      <router-link to="/annuitaetendarlehen">Annuitätendarlehen</router-link>|
      <router-link to="/entgeldabrechnung">Entgeldabrechnung</router-link>|
      <router-link to="/linuxuser">Linuxuser</router-link>|
      <router-link to="/sampling">Sampling</router-link>|
      <router-link to="/abcanalyse">ABCAnalyse</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
