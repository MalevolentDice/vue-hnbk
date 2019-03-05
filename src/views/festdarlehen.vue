<template>
  <div class="festdarlehen">
    <div class="description">
      <h1>Das Festdarlehen</h1>
      <p>Beim Festdarlehen wird ein Betrag X ausgezahlt und am Ende der Kreditlaufzeit verrechnet.</p>
      <p>Die Zinsen, der Disagio und die Kreditprovision berechnen sich aus der Gesamtkreditsumme.</p>
      <p>Der Auszahlungsbetrag wird durch den Disagio reduziert.</p>
    </div>

    <div class="inputs">
      <h2>Inputs</h2>
      <div class="wrapper">
        <label for="kredit">Kredithoehe</label>
        <input type="number" v-model="kredit" id="kredit">
        <label for="days">Tage des Darlehens</label>
        <input type="number" v-model="days" id="days">
        <label for="zinsen">Zinsen in %</label>
        <input type="number" min="0.00" step="0.01" v-model="zinsen" id="zinsen">
        <label for="kreditprovision">Bearbeitungsentgeld in % vom aufgenommenen Kredit</label>
        <input type="number" min="0.00" step="0.01" v-model="kreditprovision" id="kreditprovision">
        <label for="spesen">Spesen in €</label>
        <input type="number" min="0.00" step="0.01" v-model="spesen" id="spesen">
        <label for="disagio">Disagio in % von der Kredithoehe</label>
        <input type="number" v-model="disagio" id="disagio">
      </div>
    </div>
    
    <div class="outputs">
      <h2>Outputs</h2>
      <div class="wrapper">
        <label>Auszahlungsbetrag</label><p>{{ payout }}</p>
        <label>Zinsen</label><p>{{ zinsencalc }}</p>
        <label>Provision</label><p>{{ provisioncalc }}</p>
        <label>Spesen</label><p>{{ spesen }}</p>
        <label>Disagio</label><p>{{ disagiocalc }}</p>
        <label>Gesamtkosten</label><p>{{ total }}</p>
        <label>Effektivzinssatz</label><p>{{ effektivzinsen }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'festdarlehen',
  data: function() {
    return {
    kredit: 60000,
    days: 360,
    zinsen: 8,
    kreditprovision: 3,
    spesen: 0,
    disagio: 0
  }
  },
  computed: {
    payout: function() {
      return (this.kredit - (this.disagiocalc)).toFixed(2);
    },
    disagiocalc: function() {
      return (this.disagio > 0 ? this.kredit * (this.disagio/100) : 0).toFixed(2);
    },
    zinsencalc: function() {
      return (this.kredit * (this.zinsen/100) * (this.days/360)).toFixed(2);
    },
    provisioncalc: function() {
      return (this.kredit * (this.kreditprovision/100)).toFixed(2);
    },
    total: function() {
      return (+this.disagiocalc 
           + +this.zinsencalc
           + +this.provisioncalc
           + +this.spesen).toFixed(2);
    },
    effektivzinsen: function() {
      return (this.total * 100 * 360) / (this.payout * this.days);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .festdarlehen {
    display:grid;
    margin: 20px;
    grid-template-areas:
    "description"
    "input"
    "output"
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
