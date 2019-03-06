<template>
  <div class="entgeldabrechnung">
    <div class="description">
      <h1>Die Entgeldabrechnung</h1>
      <p>Berechnet den Auszahlungsbetrag pro Monat anhand des Bruttoeinkommens</p>
      <p><u>Berücksichtigt noch keine <strike>Beitragsbemessungsgrenzen</strike>, Lohnsteuer (Bitte selbst auslesen und eintragen) oder Lohnsteuerklassen</u></p>
    </div>

    <div class="calculation">
      <h2>Personenbezogene Daten</h2>
      <div class="wrapper">
        <label for="steuerklasse">Steuerklasse</label>
        <select type="number" v-model="person.steuerklasse" id="steuerklasse">
          <option value="1">Steuerklasse 1</option>
          <option value="2">Steuerklasse 2</option>
          <option value="3">Steuerklasse 3</option>
          <option value="4">Steuerklasse 4</option>
          <option value="5">Steuerklasse 5</option>
          <option value="6">Steuerklasse 6</option>
        </select>
        <label for="age">Alter</label>
        <input type="number" v-model="person.age" id="age">
        <label for="children">Kinder</label>
        <input type="number" v-model="person.children" id="children">
        <label for="kirchenmitglied">Kirchensteuer</label>
        <input type="button" v-model="person.kirchenmitglied" id="kirchenmitglied" @click="toggleKirche()">
        <label for="katholisch">Katholisch</label>
        <input type="button" v-model="person.katholisch" id="Katholisch" @click="toggleKatholisch()">
        <label for="westen">Lebt im Westen von Deutschland</label>
        <input type="button" v-model="person.westen" id="westen" @click="toggleWesten()">
        <label for="kvzuschlaginprozent">Krankenversicherungszuschlag in %</label>
        <input type="number" v-model="person.kvzuschlaginprozent" id="kvzuschlaginprozent" min="0.00" step="0.01">
      </div>

      <h2>Gehalt und Arbeitgeber bezogene Daten</h2>
      <div class="wrapper">
        <label for="verguetung"><h4>Vergütung</h4></label>
        <input type="number" v-model="verguetung" id="verguetung">
        <label for="vwlarbeitgeber">+ vermögenswirksame Leistungen Arbeitgeber</label>
        <input type="number" v-model="vwlarbeitgeber" id="vwlarbeitgeber" max="40" min ="0">
      </div>

      <h2>Berechnungsschema</h2>
      <div class="wrapper">
        <label for="steuerbrutto"><h4>= sozialversicherungspflichtiges / steuerpflichtiges Bruttogehalt</h4></label><p>{{ steuerbrutto }}</p>

        <label for="lohnsteuer">- Lohnsteuer</label>
        <input type="lohnsteuer" v-model="lohnsteuer" id="lohnsteuer">
        <label for="soli">- Solidaritätszuschlag (5,5% von der Lohnsteuer)</label><p>{{ soli }}</p>

        <label for="kirchensteuer">- Kirchensteuer ({{ kirchensteuerprozent }}%)</label><p>{{ kirchensteuer }}</p>
        <label for="krankenversicherung">- Krankenversicherung ({{ krankenversicherungprozent }}%)</label><p>{{ krankenversicherung }}</p>
        <label for="pflegeversicherung">- Pflegeversicherung ({{ pflegeversicherungprozent }}%)</label><p>{{ pflegeversicherung }}</p>
        <label for="rentenversicherung">- Rentenversicherung (9,3%)</label><p>{{ rentenversicherung }}</p>
        <label for="arbeitslosenversicherung">- Arbeitslosenversicherung (1,5%)</label><p>{{ arbeitslosenversicherung }}</p>
        <label for="nettoentgelt"><h4>= Nettoentgelt</h4></label><p>{{ nettoentgelt }}</p>
        <label for="vwlarbeitnehmer">+ vermögenswirksame Leistungen Arbeitnehmer</label>
        <input type="number" v-model="vwlarbeitnehmer" id="vwlarbeitnehmer" max="40" min ="0">
        <label for="auszahlungsbetrag"><h4>= Auszahlungsbetrag</h4></label><p>{{ auszahlungsbetrag }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entgeldabrechnung',
  data: function() {
    return {
      person: {
        age: 23,
        children: 0,
        kirchenmitglied: true,
        katholisch: false,
        steuerklasse: 1,
        westen: true,
        kvzuschlaginprozent: 0
      },
      verguetung: 888,
      vwlarbeitgeber: 40,
      vwlarbeitnehmer: 40,
      lohnsteuer: 1.16
    }
  },
  computed: {
    pflegeversicherungprozent: function() {
      return (this.person.age > 22 && this.person.children < 1) ? 1.525 : 1.275;
    },
    steuerbrutto: function() {
      return (+this.verguetung 
             + +this.vwlarbeitgeber).toFixed(2);
    },
    hasToPaySoli: function() {
      let limit = (this.person.steuerklasse == 3) ? 162 : 81;
      return this.lohnsteuer > limit;
    },
    soli: function() {
      return this.hasToPaySoli ? (+this.lohnsteuer * 0.055).toFixed(2) : 0;
    },
    kirchensteuerprozent: function() {
      if(this.person.kirchenmitglied){
        return this.person.katholisch ? 8 : 9;
      }
      return 0;
    },
    krankenversicherungprozent: function() {
      return (7.3 
            + +this.person.kvzuschlaginprozent).toFixed(2);
    },
    kirchensteuer: function() {
      return (this.person.kirchenmitglied ? this.lohnsteuer*(this.kirchensteuerprozent/100) : 0).toFixed(2);
    },
    krankenversicherung: function() {
      let calculationBase = Math.min(this.beitragsbemessungsgrenze_krankenversicherung, this.steuerbrutto);
      return (calculationBase*(0.073+(this.person.kvzuschlaginprozent/100))).toFixed(2);
    },
    pflegeversicherung: function() {
      let calculationBase = Math.min(this.beitragsbemessungsgrenze_pflegeversicherung, this.steuerbrutto);
      return (calculationBase*(this.pflegeversicherungprozent/100)).toFixed(2);
    },
    rentenversicherung: function() {
      let calculationBase = Math.min(this.beitragsbemessungsgrenze_rentenversicherung, this.steuerbrutto);
      return (calculationBase*0.093).toFixed(2);
    },
    arbeitslosenversicherung: function() {
      let calculationBase = Math.min(this.beitragsbemessungsgrenze_arbeitslosenversichrung, this.steuerbrutto);
      return (calculationBase*0.015).toFixed(2);
    },
    nettoentgelt: function() {
      return (+this.steuerbrutto
              - +this.lohnsteuer
              - +this.soli
              - +this.kirchensteuer
              - +this.krankenversicherung
              - +this.pflegeversicherung
              - +this.rentenversicherung
              - +this.arbeitslosenversicherung).toFixed(2)
    },
    auszahlungsbetrag: function() {
      return (+this.nettoentgelt
              - +this.vwlarbeitnehmer).toFixed(2)
    },
    beitragsbemessungsgrenze_krankenversicherung: function() {
      return 4425;
    },
    beitragsbemessungsgrenze_pflegeversicherung: function() {
      return 4425;
    },
    beitragsbemessungsgrenze_rentenversicherung: function() {
      return this.person.westen ? 6500 : 5800;
    },
    beitragsbemessungsgrenze_arbeitslosenversichrung: function() {
      return this.person.westen ? 6500 : 5800;
    }
  },
  methods: {
    toggleKirche() {
      this.person.kirchenmitglied = !this.person.kirchenmitglied;
    },
    toggleKatholisch() {
      this.person.katholisch = !this.person.katholisch;
    },
    toggleWesten() {
      this.person.westen = !this.person.westen;
    }
  }
}
</script>

<style scoped>
  .entgeldabrechnung {
    display:grid;
    margin: 20px;
    grid-template-areas:
    "description"
    "calculation"
  }

  @media screen and (min-width: 710px){
    .entgeldabrechnung {
      grid-template-columns: 1fr 700px 1fr;
      grid-template-areas:
      ". description ."
      ". calculation ."
    }
  }

  .description {
    grid-area: description;
  }

  .calculation {
    grid-area: calculation;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
  }

  .wrapper label, .wrapper input, .wrapper p, .wrapper h4, .wrapper select {
    display: block;
    width: 100%;
    background: rgb(213, 214, 214);
    border: 2px solid rgb(110, 110, 110);
    margin: 0;
    padding: 0;
    color: black;
    text-align: center;
  }

  .wrapper input {
    background: darkgray;
    border: 2px solid black;
  }
  .wrapper select {
    background: darkgray;
    border: 2px solid black;
  }

  input[type="button"]:hover {
    background-color: rgb(180, 166, 166);
    cursor: pointer;
  }
</style>
