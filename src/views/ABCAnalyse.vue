<template>
  <div class="abcanalyse">
    <div class="description">
      <h1>ABC Analyse</h1>
      <p>Die ABC-Analyse (Programmstrukturanalyse) ist ein betriebswirtschaftliches Analyseverfahren. Sie teilt eine Menge von Objekten in die Klassen A, B und C auf, die nach absteigender Bedeutung geordnet sind.</p>
    </div>
    <div class="content">
      <div class="abcclass abcclass--a">
        <h2>A</h2>
        <p>80% Wertanteil des Jahresverbrauchswerts</p>
      </div>
      <div class="abcclass abcclass--b">
        <h2>B</h2>
        <p>15% Wertanteil des Jahresverbrauchswerts</p>
      </div>
      <div class="abcclass abcclass--c">
        <h2>C</h2>
        <p>5% Wertanteil des Jahresverbrauchswerts</p>
      </div>
      <div class="abcbar">
        <div class="abcbar__item abcbar__item--a">A</div>
        <div class="abcbar__item abcbar__item--b">B</div>
        <div class="abcbar__item abcbar__item--c">C</div>
      </div>
      <div class="advantages">
        <h2>Vorteile der ABC-Analyse</h2>
        <ul>
          <li>Verbesserung von Planungsprozessen</li>
          <li>Reduzierung der Lagerkosten</li>
          <li>Verminderung von Verwaltungskosten</li>
          <li>Erhöhung des Gewinns</li>
          <li>Motivation der Controlling-Mitarbeiter</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "abcanalyse",
  data: function() {
    return {
      samplingratecd: 44100
    };
  },
  computed: {
    perSecondInByte: function() {
      return 0;
    }
  },
  methods: {
    toggleMono: function() {
      this.isMono = !this.isMono;
    }
  }
};
</script>
<style scoped>
.abcanalyse {
  display: grid;
  grid-template-areas:
    "description"
    "content";
}

.content {
  grid-area: content;
  display: grid;
  grid-gap: 20px;
  margin: 20px;
  grid-template-areas:
    "a"
    "b"
    "c";
}

@media screen and (min-width: 710px) {
  .abcanalyse {
    grid-template-columns: 1fr 700px 1fr;
    grid-template-areas:
      ". description ."
      ". content ."
      "s s s";
  }

  .content {
    grid-template-areas:
      "a   b   c"
      "bar bar bar"
      "adv adv adv";
    margin: 0;
  }
}

.description {
  grid-area: description;
}

.abcclass {
  background-color: lightgray;
  border: 2px solid gray;
}

.abcbar {
  grid-area: bar;
  display: grid;
  grid-template-columns: 80fr 15fr 5fr;
  grid-template-areas: "a b c";
}

.abcbar__item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
}

.abcbar__item--a {
  background-color: red;
}
.abcbar__item--b {
  background-color: yellow;
}
.abcbar__item--c {
  background-color: green;
}

.advantages {
  grid-area: adv;
}

.advantages ul {
  text-align: left;
}
</style>
