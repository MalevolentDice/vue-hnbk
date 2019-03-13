<template>
  <div class="sampling">
    <div class="description">
      <h1>Sampling von Audiodateien</h1>
      <p>Diese Seite beschäftigt sich mit mit der digitalisierung und Übersetzung von Audiodateien.</p>
    </div>

    <div class="content">
      <h2>Samplingrate</h2>
      <p>Die Samplingrate gibt an, wie oft das analoge Audiosignal pro Sekunde in digitale Daten umgesetzt wird.</p>
      <p class="bulletpoint">Samplingrate für CD-Qualität: {{samplingratecd}}Hz</p>
      <h2>Samplingtiefe</h2>
      <p>Die Samplingtiefe gibt die Auflösung der digitalisierung an.</p>
      <p class="bulletpoint">Samplingtiefe für CD-Qualität: {{samplingdepthcd}}bit</p>
      <h2>Mono oder Stereo</h2>
      <p>Im Gegensatz zu Mono, bei dem eine einzelne Tonspur auf die vorhandene Anzahl Lautsprecher übertragen wird, benötigt Stereo mindestens 2 Tonspuren.</p>

      <h2>Größe der Audiodatei berechnen</h2>
      <div class="wrapper">
        <label>Samplingrate in Hz</label>
        <input v-model="samplingrate">
        <label>Samplingtiefe in bit</label>
        <input v-model="samplingdepth">
        <label>Mono (true) oder Stereo (false)</label>
        <input type="button" class="button" @click="toggleMono()" v-model="isMono">
        <label>Dauer in Sekunden</label>
        <input v-model="time">
        <label>Komprimierung auf x%</label>
        <input v-model="compression">
      </div>

      <h3>Berechnung</h3>
      <div class="wrapper">
        <label>Aufgezeichnetes Datenvolumen pro Sekunde in bit ({{samplingrate}}Hz * {{samplingdepth}}bit * {{canals}})</label>
        <p>{{perSecond}} bit</p>
        <label>Aufgezeichnetes Datenvolumen pro Sekunde in byte</label>
        <p>{{perSecondInByte}} byte</p>
        <label>Gesamtgröße in bit</label>
        <p>{{totalSize}} bit</p>
        <label>Gesamtgröße in byte</label>
        <p>{{totalSizeInByte}} byte</p>
      </div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sampling",
  data: function() {
    return {
      samplingratecd: 44100,
      samplingdepthcd: 16,
      isMono: false,
      samplingrate: 44100,
      samplingdepth: 16,
      time: 210,
      compression: 20
    };
  },
  computed: {
    perSecond: function() {
      return (
        this.samplingrate *
        this.samplingdepth *
        this.canals *
        (+this.compression / 100)
      );
    },
    perSecondInByte: function() {
      return this.perSecond / 8;
    },
    canals: function() {
      return this.isMono ? 1 : 2;
    },
    totalSize: function() {
      return this.perSecond * this.time;
    },
    totalSizeInByte: function() {
      return this.totalSize / 8;
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
.sampling {
  display: grid;
  grid-template-areas:
    "description"
    "content"
    "s";
}

@media screen and (min-width: 710px) {
  .sampling {
    grid-template-columns: 1fr 700px 1fr;
    grid-template-areas:
      ". description ."
      ". content ."
      "s s s";
  }
}

.spacer {
  min-height: 48px;
  grid-area: s;
}

.description {
  grid-area: description;
}

.content {
  grid-area: content;
}

.button {
  min-height: 48px;
  margin: 0;
  padding: 0;
  display: inline-block;
}

.bulletpoint {
  background-color: #eee;
  border: 2px solid black;
  padding: 10px;
  color: crimson;
  margin: 20px;
}

.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
}

.wrapper label,
.wrapper input,
.wrapper p {
  display: flex;
  align-items: center;
  width: 100%;
  background: rgb(213, 214, 214);
  border: 2px solid rgb(110, 110, 110);
  margin: 0;
  padding: 0;
  color: black;
  text-align: left;
  min-height: 48px;
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
