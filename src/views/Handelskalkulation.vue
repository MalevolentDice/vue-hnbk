<template>
    <div class="handelskalkulation">
        <div class="description">
            <h1>Handelskalkulation</h1>
            <p>Die Handelskalkulation dient je nach Unternehmens- und Marktsituation der Ermittlung des Einkaufpreises (Rückwärtskalkulation), Verkaufspreises (Vorwärtskalkulation) oder möglichen Gewinns (Differenzkalkulation).</p>
        </div>
        <button
            v-show="!showVorwaerts"
            class="choice choice__vorwaerts btn btn-dark"
            @click="toggleView('showVorwaerts')"
        >Vorwärtskalkulation</button>
        <button
            v-show="!showRueckwaerts"
            class="choice choice__rueckwaerts btn btn-dark"
            @click="toggleView('showRueckwaerts')"
        >Rückwärtskalkulation</button>
        <button
            v-show="!showDifferenz"
            class="choice choice__differenz btn btn-dark"
            @click="toggleView('showDifferenz')"
        >Differenzkalkulation</button>
        <div class="kalkulations-verfahren">
            <Vorwaertskalkulation
                v-show="showVorwaerts"
                class="kalkulations-verfahren__vorwaertskalkulation"
            />
            <Rueckwaertskalkulation
                v-show="showRueckwaerts"
                class="kalkulations-verfahren__rueckwaertskalkulation"
            />
            <Differenzkalkulation
                v-show="showDifferenz"
                class="kalkulations-verfahren__rueckwaertskalkulation"
            />
        </div>
    </div>
</template>

<script>
import Vorwaertskalkulation from "../components/Vorwaertskalkulation";
import Rueckwaertskalkulation from "../components/Rueckwaertskalkulation";
import Differenzkalkulation from "../components/Differenzkalkulation";
export default {
    name: "handelskalkulation",
    components: {
        Vorwaertskalkulation,
        Rueckwaertskalkulation,
        Differenzkalkulation
    },
    data: function() {
        return {
            showVorwaerts: true,
            showRueckwaerts: false,
            showDifferenz: false
        };
    },
    methods: {
        toggleView(view) {
            this.showVorwaerts = false;
            this.showRueckwaerts = false;
            this.showDifferenz = false;
            this[view] = true;
        }
    }
};
</script>

<style scoped>
.handelskalkulation {
    display: grid;
    margin: 20px;
    grid-template-areas:
        "description"
        "choice__A"
        "choice__B"
        "calculation";
}

@media screen and (min-width: 710px) {
    .handelskalkulation {
        grid-template-columns: 1fr 700px 1fr;
        grid-template-areas:
            "choice__A description choice__B"
            "calculation calculation calculation";
    }
}

.description {
    grid-area: description;
}

.kalkulations-verfahren {
    grid-area: calculation;
}
</style>
