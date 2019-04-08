<template>
  <div class="zahlungsarten">
    <div class="selector">
      <button class="button button--ec">EC</button>
      <button class="button button--elv">ELV</button>
      <button class="button button--kredit">Kreditkarte</button>
    </div>
    <div class="content content--ec">EC</div>
    <div class="content content--elv">ELV</div>
    <div class="content content--kredit">Kreditkarte</div>
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
