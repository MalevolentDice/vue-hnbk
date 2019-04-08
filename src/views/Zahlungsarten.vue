<template>
  <div class="zahlungsarten">
    <div class="selector">
      <button class="button button--ec" @click="selectEC">EC</button>
      <button class="button button--elv" @click="selectELV">ELV</button>
      <button class="button button--kredit" @click="selectKredit">Kreditkarte</button>
    </div>
    <div class="content content--ec" :class="{ show: showEC }">EC</div>
    <div class="content content--elv" :class="{ show: showElv }">ELV</div>
    <div class="content content--kredit" :class="{ show: showKredit }">Kreditkarte</div>
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
}

.show {
  opacity: 1;
}

@media screen and (min-width: 710px) {
  .zahlungsarten {
    grid-template-columns: repeat(5, 1fr);
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
