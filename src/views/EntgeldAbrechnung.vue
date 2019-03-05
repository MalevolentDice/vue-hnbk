<template>
  <div class="entgeldabrechnung">
    <div class="description">
      <h1>Die Entgeldabrechnung</h1>
      <p>Berechnet den Auszahlungsbetrag pro Monat anhand des Bruttoeinkommens</p>
      <p><u>Berücksichtigt noch keine Beitragsbemessungsgrenze, Lohnsteuer oder Lohnsteuerklassen</u></p>
    </div>

    <div class="calculation">
      <h2>Personenbezogene Daten</h2>
      <div class="wrapper">
        <label for="age">Alter</label>
        <input type="number" v-model="person.age" id="age">
        <label for="person.children">Kinder</label>
        <input type="number" v-model="person.children" id="children">
        <label for="kirchenmitglied">Kirchensteuer</label>
        <input type="button" v-model="person.kirchenmitglied" id="kirchenmitglied" @click="toggleKirche()">
        <label for="katholisch">Katholisch</label>
        <input type="button" v-model="person.Katholisch" id="Katholisch" @click="toggleKatholisch()">
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
        <label for="krankenversicherung">- Krankenversicherung (7,3%)</label><p>{{ krankenversicherung }}</p>
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
        Katholisch: false
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
      // TODO Lohnsteuerklasse
      return this.lohnsteuer >= 81 ? true : false;
    },
    soli: function() {
      return this.hasToPaySoli ? (+this.lohnsteuer * 0.055).toFixed(2) : 0;
    },
    kirchensteuerprozent: function() {
      if(this.person.kirchenmitglied){
        return this.person.Katholisch ? 8 : 9;
      }
      return 0;
    },
    kirchensteuer: function() {
      return (this.person.kirchenmitglied ? this.lohnsteuer*(this.kirchensteuerprozent/100) : 0).toFixed(2);
    },
    krankenversicherung: function() {
      return (this.steuerbrutto*0.073).toFixed(2);
    },
    pflegeversicherung: function() {
      return (this.steuerbrutto * (this.pflegeversicherungprozent/100)).toFixed(2);
    },
    rentenversicherung: function() {
      return (this.steuerbrutto*0.093).toFixed(2);
    },
    arbeitslosenversicherung: function() {
      return (this.steuerbrutto*0.015).toFixed(2);
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
    }
  },
  methods: {
    toggleKirche() {
      this.person.kirchenmitglied = !this.person.kirchenmitglied;
    },
    toggleKatholisch() {
      this.person.Katholisch = !this.person.Katholisch;
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

  .wrapper label, .wrapper input, .wrapper p, .wrapper h4 {
    display: block;
    width: 100%;
    background: rgb(213, 214, 214);
    border: 2px solid rgb(110, 110, 110);
    margin: 0;
    padding: 0;
    color: black;
    text-align: center;
  }

  input[type="button"]:hover {
    background-color: rgb(180, 166, 166);
    cursor: pointer;
  }
</style>