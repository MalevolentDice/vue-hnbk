<template>
  <div class="rechtsformen">
    <h1 class="rechtsformen__header">Rechtsformen</h1>
    <h2 class="rechtsformen__header rechtsformen__header--einzelunternehmen">Einzelunternehmen</h2>
    <div class="rechtsformen__description rechtsformen__description--einzelunternehmen">
      <p>
        Die Einzelunternehmung wird von
        <b>einer Person</b> betrieben, die das Eigenkapital
        <b>allein</b> aufbringt.
      </p>
      <p>
        Die Firma
        <b>muss</b> den Zusatz "eingetragene(r) Kauf(frau/mann)" (e.Kfr. bzw e.K.) tragen.
      </p>
      <div class="quoteLaw">
        <div class="quoteLaw__section">$ 18 HGB</div>
        <ol class="quoteLaw__paragraphs">
          <li
            class="quoteLaw__paragraph"
          >Die Firma muss zur Kennzeichnung des Kaufmanns geeignet sein und Unterscheidungskraft besitzen.</li>
          <li
            class="quoteLaw__paragraph"
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

    <h2>Personengesellschaften</h2>
    <p>Bei den Personengesellschaften stehen die natürlichen Personen als handelnde im Vordergrund.</p>
    <p>Gesellschafter haften in der Regel mit ihrem Eigenkapital und eine Verwaltung durch dritte wird ausgeschlossen, so dass Eigentum und Unternehmensführung im Gegensatz zur Kapitalgesellschaften beeinander liegen.</p>
    <h3>Gesellschaft bürgerlichen Rechts (GbR)</h3>
    <h3>Offene Handelsgesellschaft (OHG)</h3>
    <h3>Kommanditgesellschaft (KG)</h3>

    <h2>Kapitalgesellschaften</h2>
    <p>Kapitalgesellschaften sind juristische Personen und damit Rechtsfähig. Im Gegensatz zu Personengesellschaften, wo Gesellschafter und Geschäftsführung normalerweise identisch sind, liegen Eigentum und Unternehmensführung bei Kapitalgesellschaften grundsätzlich nicht beeinander.</p>
    <h3>Gesellschaft mit beschränkter Haftung (GmbH)</h3>
    <h3>Aktiengesellschaft (AG)</h3>

    <h2>Der "GmbH &amp; Co. KG" cheat</h2>
    <p>Jetzt will natürlich niemand für irgendwas haften und trotzdem mehr Kapital.</p>
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
.quoteLaw {
  border: 3px solid gray;
  padding: 5px;
  background-color: rgb(245, 245, 245);
}

.rechtsformen {
  display: grid;
  grid-template-areas:
    "selector"
    "content";
}

@media screen and (min-width: 710px) {
  .zahlungsarten {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    grid-template-areas:
      ". elv ec kredit ."
      "s s   s  s      s";
  }
}
</style>
