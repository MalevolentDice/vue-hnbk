<template>
    <div class="handelskalkulation">
        <div class="description">
            <h1>Handelskalkulation</h1>
            <p>Die Handelskalkulation dient je nach Unternehmens- und Marktsituation der Ermittlung des Einkaufpreises (Rückwärtskalkulation), Verkaufspreises (Vorwärtskalkulation) oder möglichen Gewinns (Differenzkalkulation).</p>
        </div>
        <button
            v-show="!showVorwaerts"
            class="choice choice__vorwaerts btn btn-dark"
            @click="toggleVorwaerts"
        >Vorwärtskalkulation</button>
        <button
            v-show="!showRueckwaerts"
            class="choice choice__rueckwaerts btn btn-dark"
            @click="toggleRueckwaerts"
        >Rückwärtskalkulation</button>
        <button
            v-show="!showDifferenz"
            class="choice choice__differenz btn btn-dark"
            @click="toggleDifferenz"
        >Differenzkalkulation</button>
        <div class="kalkulations-verfahren">
            <Vorwaertskalkulation
                v-show="showVorwaerts"
                class="kalkulations-verfahren__vorwaertskalkulation"
            />
        </div>
    </div>
</template>

<script>
import Vorwaertskalkulation from "../components/Vorwaertskalkulation";
export default {
    name: "handelskalkulation",
    components: {
        Vorwaertskalkulation
    },
    data: function() {
        return {
            showVorwaerts: true,
            showRueckwaerts: false,
            showDifferenz: false
        };
    },
    methods: {
        toggleVorwaerts() {
            this.showVorwaerts = true;
            this.showRueckwaerts = false;
            this.showDifferenz = false;
        },
        toggleRueckwaerts() {
            this.showVorwaerts = false;
            this.showRueckwaerts = true;
            this.showDifferenz = false;
        },
        toggleDifferenz() {
            this.showVorwaerts = false;
            this.showRueckwaerts = false;
            this.showDifferenz = true;
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
