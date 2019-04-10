<template>
  <div class="zahlungsarten">
    <div class="selector">
      <button class="button button--ec" @click="selectEC" :class="{ 'button--selected': showEC }">EC</button>
      <button
        class="button button--elv"
        @click="selectELV"
        :class="{ 'button--selected': showElv }"
      >ELV</button>
      <button
        class="button button--kredit"
        @click="selectKredit"
        :class="{ 'button--selected': showKredit }"
      >Kreditkarte</button>
    </div>
    <div class="content content--ec" :class="{ show: showEC }">
      <h1>Electronic Cash</h1>
      <div class="content__subsection content__subsection--requirements">
        <p>Der Kunde muss Inhaber einer Electronic Cash-Karte sein.</p>
      </div>
      <div class="content__subsection content__subsection--procedure">
        <p>Der Kunde gibt am kartenlesegerät seine PIN (persönliche Identifikationsnummer) ein.</p>
        <p>Durch die Online-Verbindung des Lesegerätes wird überprüft, ob die Karte gesperrt und ob ausreichende finanzielle Mittel zur Verfügung stehen.</p>
      </div>
      <div class="content__subsection content__subsection--advantages">
        <p>Da bei erfoglreicher Kontrolle die Zahlung umgehend erfolgt, genießt der Händer eine Zahlungsgarantie</p>
      </div>
      <div class="content__subsection content__subsection--costs">
        <p>Es werden 0.3% der Kaufsumme aber mindestens 0.08€ je Zahlungsvorgang als Provision vond er bank einbehalten.</p>
      </div>
    </div>
    <div class="content content--elv" :class="{ show: showElv }">
      <h1>Elektronisches Lastschriftverfahren</h1>
      <div class="content__subsection content__subsection--requirements">
        <p>Der Kunde muss Inhaber einer Electronic Cash-Karte sein.</p>
      </div>
      <div class="content__subsection content__subsection--procedure">
        <p>Beim auslesen des Magnetstreifens werden die Kundendaten gespeichert.</p>
        <p>Die ermöglicht die automatische Erstellung von Einzugsermächtigungslastschriften.</p>
        <p>Ihr Kunde stimmt der Abbuchung durch das Unterschreiben des Rechnungsbelegs zu.</p>
      </div>
      <div class="content__subsection content__subsection--advantages">
        <p>Es fallen keine Kosten für den Händler an.</p>
      </div>
      <div class="content__subsection content__subsection--costs">
        <p>Es erfolgt keine Prüfung der finanziellen Mittel des Käufers</p>
        <p>Bei der Nichteinlösung der Lastschrift hat Ihr Unternehmen keinen Herausgabeanspruch der Adressdaten des Kunden.</p>
      </div>
    </div>
    <div class="content content--kredit" :class="{ show: showKredit }">
      <h1>Kreditkarte</h1>
      <div class="content__subsection content__subsection--requirements">
        <p>Der Kunde muss Inhaber eine Kreditkarte sein.</p>
      </div>
      <div class="content__subsection content__subsection--procedure">
        <p>Der Kunde legt die Kreditkarte vor.</p>
        <p>Das Kartenterminal prüft die Kreditkarte und erstellt einen Zahlungsbeleg.</p>
        <p>Der Kunde unterschreibt diesen Zahlungsbeleg.</p>
        <p>Sie reichen den unterschriebenen Zahlungsbeleg bei dem Kreditinstituts ihres Kunden ein.</p>
        <p>Der Rechungsbetrag (minus Provision) wird auf Ihr Konto übertragen.</p>
      </div>
      <div class="content__subsection content__subsection--advantages">
        <p>Der Händler genießt Zahlungsgarantie.</p>
      </div>
      <div class="content__subsection content__subsection--costs">
        <p>Es wird eine Umsatzprovision durch die Kreditkartengesellschaft zwischen 2%-4% des Umsatzes vom Kreditinstitut einbehalten.</p>
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
  methods: {
    selectEC: function() {
      this.showEC = true;
      this.showElv = false;
      this.showKredit = false;
    },
    selectELV: function() {
      this.showEC = false;
      this.showElv = true;
      this.showKredit = false;
    },
    selectKredit: function() {
      this.showEC = false;
      this.showElv = false;
      this.showKredit = true;
    }
  }
};
</script>
<style scoped>
.zahlungsarten {
  display: grid;
  grid-template-areas:
    "selector"
    "content";
}

.content {
  grid-area: content;
  opacity: 0;
  background-color: lightgray;
  border: 3px solid gray;
}

.content__subsection {
  margin: 10px;
}

.content__subsection--requirements {
  border: 2px solid rgb(28, 87, 145);
}
.content__subsection--procedure {
  border: 2px solid rgb(28, 87, 145);
}
.content__subsection--advantages {
  border: 2px solid rgb(78, 143, 78);
}
.content__subsection--costs {
  border: 2px solid rgb(255, 0, 0);
}

.show {
  opacity: 1;
}

.button {
  background-color: lightgray;
  border: 3px solid gray;
  height: 48px;
  width: 33.33%;
}

.button--selected {
  background-color: #86eebf;
}

@media screen and (min-width: 710px) {
  .zahlungsarten {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    grid-template-areas:
      ". elv ec kredit ."
      "s s   s  s      s";
  }

  .selector {
    display: none;
  }

  .content {
    opacity: 1;
  }

  .content--elv {
    grid-area: elv;
  }

  .content--ec {
    grid-area: ec;
  }

  .content--kredit {
    grid-area: kredit;
  }
}
</style>
