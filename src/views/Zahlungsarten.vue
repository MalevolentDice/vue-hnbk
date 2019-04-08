<template>
  <div class="zahlungsarten">
    <button class="elv">aaaaa</button>
  </div>
</template>

<script>
export default {
  name: "sampling",
  data: function() {
    return {
      test: 0
    };
  },
  computed: {
    a: function() {
      return 0;
    }
  },
  methods: {
    abc: function() {
      // do stuff
    }
  }
};
</script>
<style scoped>
.zahlungsarten {
  display: grid;
  grid-template-areas:
    "selector"
    "art";
}

@media screen and (min-width: 710px) {
  .zahlungsarten {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      ". elv ec kredit ."
      "s s s s s";
  }
}

.elv {
  grid-area: elv;
}
</style>
