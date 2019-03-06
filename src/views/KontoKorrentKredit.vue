<template>
  <div class="kontokorrentkredit">
    <div class="description">
      <h1>Der Kontokorrentkredit</h1>
      <p>Beim Kontokorrentkredit erhält der Kontenbesitzer einen gewissen Kreditrahmen zur Verfügung.</p>
      <p>Genutzter Kreditrahmen wird mit dem Sollzins abgerechnet.</p>
      <p>Ungenutzter Kreditrahmen wird mit dem Kreditprovisionssatz abgerechnet.</p>
      <p>Mehr als das Limit ist entweder nicht zulässig oder wird extra hoch verzinst.</p>
    </div>

    <div class="inputs">
      <h2>Inputs</h2>
      <div class="wrapper">
        <label for="kontostand">Kontostand</label>
        <input type="number" v-model="kontostand" id="kontostand">
        <label for="days">Tage des Darlehens</label>
        <input type="number" v-model="days" id="days">
        <label for="limit">Limit des Kredits</label>
        <input type="number" v-model="limit" id="limit">
        <label for="sollzins">Sollzins in %</label>
        <input type="number" min="0.00" step="0.01" v-model="sollzins" id="sollzins">
        <label for="habezins">Habezins in %</label>
        <input type="number" min="0.00" step="0.01" v-model="habezins" id="habezins">
        <label for="kreditprovision">Kreditprovision in % vom nicht aufgenommenen Kredit</label>
        <input type="number" min="0.00" step="0.01" v-model="kreditprovision" id="kreditprovision">
        <label for="umsatzprovision">Umsatzprovision in €</label>
        <input type="number" v-model="umsatzprovision" id="umsatzprovision">
      </div>
    </div>
    
    <div class="outputs">
      <h2>Outputs</h2>
      <div class="wrapper">
        <label>Aufgenommener Kredit</label><p>{{ kredit }}</p>
        <label>Sollzins</label><p>{{ sollzinscalc }}</p>
        <label>Habezins</label><p>{{ habezinscalc }}</p>
        <label>Kreditprovision</label><p>{{ kreditprovisioncalc }}</p>
        <label>Umsatzprovision</label><p>{{ umsatzprovision }}</p>
        <label>Gesamte Kosten</label><p>{{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kontokorrentkredit',
  data: function() {
    return {
    kontostand: -60000,
    days: 360,
    limit: 80000,
    sollzins: 8,
    habezins: 5,
    kreditprovision: 3,
    umsatzprovision: 0
  }
  },
  computed: {
    sollzinscalc: function() {
      return (this.kredit * (this.sollzins/100) * (this.days/360)).toFixed(2);
    },
    habezinscalc: function() {
      return (this.kontostand > 0 ? this.kontostand * (this.habezins/100) * (this.days/360): 0).toFixed(2);
    },
    kredit: function() {
      return (this.kontostand > 0 ? 0 : -this.kontostand).toFixed(2);
    },
    kreditprovisioncalc: function() {
      return ((this.limit-this.kredit)*(this.kreditprovision/100)).toFixed(2);
    },
    total: function() {
      return (+this.sollzinscalc 
              - +this.habezinscalc 
              + +this.kreditprovisioncalc 
              + +this.umsatzprovision).toFixed(2);
    }
  }
}
</script>

<style scoped>
  .kontokorrentkredit {
    display:grid;
    margin: 20px;
    grid-template-areas:
    "description"
    "input"
    "output"
  }

  
  @media screen and (min-width: 710px){
    .kontokorrentkredit {
      grid-template-columns: 1fr 700px 1fr;
      grid-template-areas:
      ". description ."
      ". input ."
      ". output ."
    }
  }

  .description {
    grid-area: description;
  }

  .inputs {
    grid-area: input;
  }

  .outputs {
    grid-area: output;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
  }

  .wrapper label, .wrapper input, .wrapper p {
    display: block;
    width: 100%;
    background: rgb(213, 214, 214);
    border: 2px solid rgb(110, 110, 110);
    margin: 0;
    padding: 0;
    color: black;
  }
</style>
