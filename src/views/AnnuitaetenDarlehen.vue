<template>
  <div class="annuitaetendarlehen">
    <div class="description">
      <h1>Das Annuitätendarlehen</h1>
      <p>Beim Annuitätendarlehen wird jedes Jahr die Selbe Annuität vom Schuldner bezahlt.</p>
      <p>Da die Schuld und somit die Zinsen mit jeder Zahlung sinken, steigt der Tilgungsanteil der Annuität stetig an.</p>
      <p>In unserem Beispiel wird jährlich abgerechnet, in der wirtschaft ist eine monatliche Verrechnung üblicher.</p>
    </div>

    <div class="inputs">
      <h2>Inputs</h2>
      <div class="wrapper">
        <label for="kredit">Kredithoehe</label>
        <input type="number" v-model="kredit" id="kredit">
        <label for="anno">Jährlich zu zahlender Betrag (Annuität)</label>
        <input type="number" min="0" step="1" v-model="anno" id="anno">
        <label for="zinsen">Zinsen in %</label>
        <input type="number" min="0.00" step="0.01" v-model="zinsen" id="zinsen">
      </div>
    </div>
    
    <div class="outputs">
      <h2>Outputs</h2>
      <div class="wrapper table-wrapper">
        <table>
          <tr>
            <th>Jahr</th>
            <th>Schuld zu Beginn des Jahres</th>
            <th>Tilgungsanteil der Annuität</th>
            <th>Zinsanteil der Annuität</th>
            <th>Annuität</th>
            <th>Schuld am Ende des Jahres</th>
          </tr>
          <tr v-for="row in rows" :key="row.jahr">
            <td> {{ row.jahr }} </td>
            <td> {{ row.deptBegin }} </td>
            <td> {{ row.tilgung }} </td>
            <td> {{ row.zinsen }} </td>
            <td> {{ row.annuit }} </td>
            <td> {{ row.deptEnd }} </td>
          </tr>
        </table> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'annuitaetendarlehen',
  data: function() {
    return {
      kredit: 140000,
      anno: 35000,
      zinsen: 8
    }
  },
  computed: {
    rows: function() {
      let rows = [];
      let dept = this.kredit;
      let i = 1;
      while(dept > 0 && this.anno > (this.kredit/10)) {
        let row = { jahr: i, deptBegin: dept, tilgung: this.getTilgungValue(dept), zinsen: this.getZinsenValue(dept), annuit: this.anno, deptEnd: this.getDeptAtEndOfYear(dept)};
        dept = this.getDeptAtEndOfYear(dept);
        rows.push(row);
        i++;
      }
      return rows;
    }
    
  },
  methods: {
      getZinsenValue (dept) {
        return (dept * (this.zinsen/100)).toFixed(2);
      },
      getTilgungValue (dept) {
        return (this.anno - this.getZinsenValue(dept)).toFixed(2);
      },
      getDeptAtEndOfYear (dept) {
        let deptLocal = (dept - this.getTilgungValue(dept)).toFixed(2);
        return deptLocal > 0 ? deptLocal : 0;
      }
    }
}
</script>

<style scoped>
  .annuitaetendarlehen {
    display:grid;
    margin: 20px;
    grid-template-areas:
    "description"
    "input"
    "output"
  }
  @media screen and (min-width: 710px){
    .annuitaetendarlehen {
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
    overflow-x: auto;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
  }

  .table-wrapper {
    grid-template-columns: 1fr;
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
