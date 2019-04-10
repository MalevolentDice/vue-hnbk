<template>
  <div class="rechtsformen">
    <h1>Rechtsformen</h1>
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
