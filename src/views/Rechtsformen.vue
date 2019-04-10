<template>
  <div class="wrapper">
    <div class="rechtsformen">
      <h1 class="rechtsformen__header">Rechtsformen</h1>
      <div class="rechtsform rechtsform--einzelunternehmen">
        <h2 class="rechtsform__header rechtsform__header--einzelunternehmen">Einzelunternehmen</h2>
        <div class="rechtsform__description rechtsform__description--einzelunternehmen">
          <p>
            Die Einzelunternehmung wird von
            <b>einer Person</b> betrieben, die das Eigenkapital
            <b>allein</b> aufbringt.
          </p>
          <p>
            Die Firma
            <b>muss</b> den Zusatz "eingetragene(r) Kauf(frau/mann)" (e.Kfr. bzw e.K.) tragen.
          </p>
          <div class="law-quote">
            <div class="law-quote__section">$ 18 HGB</div>
            <ol class="law-quote__paragraphs">
              <li
                class="law-quote__paragraph"
              >Die Firma muss zur Kennzeichnung des Kaufmanns geeignet sein und Unterscheidungskraft besitzen.</li>
              <li
                class="law-quote__paragraph"
              >Die Firma darf keine Angaben enthalten, die geeignet sind, über geschäftliche Verhältnisse, die für die angesprochenen Verkehrskreise wesentlich sind, irrezuführen.</li>
            </ol>
          </div>
          <p>
            Die Gründung erfolgt
            <b>formlos</b>.
          </p>
          <p>
            Falls es sich um ein
            <b>Handelsgewerbe</b> nach $1 HGB handelt, ist eine Eintragung in das Handelsregister erforderlich.
          </p>
          <p>Da der Einzelunternehmer für die Verbindlichkeiten seines Unternehmens allein und unbeschränkt, d.h. mit seinem gesamten Vermögen, haftet, gestaltet sich die Fremdkapitalbeschaffung potentiell schwierig. Außerdem lässt sich das Eigenkapital ausschließlich durch einbehalten erzielter Gewinne erhöhen.</p>
          <p></p>
          <p>
            Da der Einzelunternehmer
            <b>sämtliche Risiken</b> trägt, steht Ihm der
            <b>gesamte Gewinn</b> zu und er trägt
            <b>sämtliche Verluste</b> allein.
          </p>
          <p>
            Ebenso besitzt der Einzelunternehmer
            <b>sämtliche Entscheidungsbefugnisse</b>. Er hat das alleinige Recht, im Innenverhältnis die Geschäfte zu führen
            <b>(Geschäftsführungsbefugnis)</b> und das Unternehmen im Außenverhältnis gegenüber Dritten zu vertreten
            <b>(Vertretungsbefugnis)</b>.
          </p>
        </div>
      </div>

      <div class="rechtsform rechtsform--personengesellschaft">
        <h2 class="rechtsform__header rechtsform__header--personengesellschaft">Personengesellschaft</h2>
        <div class="rechtsform__description rechtsform__description--personengesellschaft">
          <p>Bei den Personengesellschaften stehen die natürlichen Personen als handelnde im Vordergrund.</p>
          <p>Gesellschafter haften in der Regel mit ihrem Eigenkapital und eine Verwaltung durch dritte wird ausgeschlossen, so dass Eigentum und Unternehmensführung im Gegensatz zur Kapitalgesellschaften beeinander liegen.</p>
        </div>
        <div class="gesellschafts-form gesellschafts-form--gbr">
          <h3
            class="gesellschafts-form__header gesellschafts-form__header--gbr"
          >Gesellschaft bürgerlichen Rechts (GbR)</h3>
        </div>
        <div class="gesellschafts-form gesellschafts-form--ohg">
          <h3
            class="gesellschafts-form__header gesellschafts-form__header--ohg"
          >Offene Handelsgesellschaft (OHG)</h3>
        </div>
        <div class="gesellschafts-form gesellschafts-form--kg">
          <h3
            class="gesellschafts-form__header gesellschafts-form__header--kg"
          >Kommanditgesellschaft (KG)</h3>
        </div>
      </div>

      <div class="rechtsform rechtsform--kapitalgesellschaft">
        <h2 class="rechtsform__header rechtsform__header--kapitalgesellschaft">Kapitalgesellschaft</h2>
        <div class="rechtsform__description rechtsform__description--kapitalgesellschaft">
          <p>Kapitalgesellschaften sind juristische Personen und damit Rechtsfähig. Im Gegensatz zu Personengesellschaften, wo Gesellschafter und Geschäftsführung normalerweise identisch sind, liegen Eigentum und Unternehmensführung bei Kapitalgesellschaften grundsätzlich nicht beeinander.</p>
        </div>
        <div class="gesellschafts-form gesellschafts-form--gmbh">
          <h3
            class="gesellschafts-form__header gesellschafts-form__header--gmbh"
          >Gesellschaft mit beschränkter Haftung (GmbH)</h3>
        </div>
        <div class="gesellschafts-form gesellschafts-form--ag">
          <h3
            class="gesellschafts-form__header gesellschafts-form__header--ag"
          >Aktiengesellschaft (AG)</h3>
        </div>
      </div>

      <div class="rechtsform rechtsform--both">
        <h2 class="rechtsform__header rechtsform__header--both">Die Mischung</h2>
        <div class="rechtsform__description rechtsform__description--einzelunternehmen">
          <p>Jetzt will natürlich niemand für irgendwas haften und trotzdem mehr Kapital.</p>
        </div>
        <div class="gesellschafts-form gesellschafts-form--gmbh-and-co-kg">
          <h3
            class="gesellschafts-form__header gesellschafts-form__header--gmbh-and-co-kg"
          >Der "GmbH &amp; Co. KG" cheat</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zahlungsarten",
  data: function() {
    return {
      showEC: true,
      showElv: false,
      showKredit: false
    };
  },
  computed: {
    a: function() {
      return 0;
    }
  },
  methods: {
    selectA: function() {},
    selectB: function() {},
    selectC: function() {}
  }
};
</script>
<style scoped>
.law-quote {
  border: 3px solid gray;
  padding: 5px;
  background-color: rgb(245, 245, 245);
  text-align: left;
}

.rechtsform {
  border: 2px solid red;
}

.rechtsform__header {
  border: 1px solid red;
}

.gesellschafts-form {
  border: 2px solid blue;
}

.gesellschafts-form__header {
  border: 1px solid blue;
}

.abc {
  display: grid;
  grid-template-areas:
    "a"
    "a";
}

@media screen and (min-width: 710px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 700px 1fr;
    grid-gap: 10px;
    grid-template-areas: ". content .";
  }

  .rechtsformen {
    grid-area: content;
  }
}
</style>
