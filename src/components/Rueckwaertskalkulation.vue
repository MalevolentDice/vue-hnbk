<template>
    <div class="rueckwaertskalkulation">
        <div class="description">
            <h1>Rückwärtskalkulation</h1>
            <h2>IN ARBEIT / WORK IN PROGRESS</h2>
            <p>Bei der Rückwärtskalkulation ermitteln wir, für wieviel wir ein Produkt erwerben müssen, um bei gegebenem Preis der Konkurrenz und Aufwand den gewünschten prozentualen Gewinn zu erwirtschaften.</p>
        </div>
        <div class="table-responsive calculation">
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Operation</th>
                        <th>Name</th>
                        <th>Betrag</th>
                        <th>Percentage</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>=</td>
                        <td>Listeneinkaufspreis</td>
                        <td>{{ listeneinkaufspreis }}</td>
                        <td>100</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>-</td>
                        <td>Lieferrabatt</td>
                        <td>{{ lieferrabattBetrag }}</td>
                        <td>
                            <input type="number form-control" v-model.number="lieferrabatt">
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>=</td>
                        <td>Zieleinkaufspreis</td>
                        <td>{{ zieleinkaufspreis }}</td>
                        <td>{{ zieleinkaufspreisInPercent }}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>-</td>
                        <td>Lieferskonto</td>
                        <td>{{ lieferskontoBetrag }}</td>
                        <td></td>
                        <td>
                            <input type="number form-control" v-model.number="lieferskonto">
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>=</td>
                        <td>Bareinkaufspreis</td>
                        <td>{{ bareinkaufspreis }}</td>
                        <td></td>
                        <td>{{ bareinkaufspreisInPercent }}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>+</td>
                        <td>Bezugskosten</td>
                        <td>
                            <input type="price" v-model.number="bezugskosten">
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>=</td>
                        <td>Bezugspreis</td>
                        <td>{{ bezugspreis }}</td>
                        <td>100</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>+</td>
                        <td>Handlungskosten</td>
                        <td>{{ handlungskostenBetrag }}</td>
                        <td>
                            <input type="number form-control" v-model.number="handlungskosten">
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>=</td>
                        <td>Selbstkostenpreis</td>
                        <td>{{ selbstkostenpreis }}</td>
                        <td>{{ 100 + handlungskosten }}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>+</td>
                        <td>Gewinn</td>
                        <td>{{gewinnBetrag}}</td>
                        <td></td>
                        <td>
                            <input type="number form-control" v-model.number="gewinn">
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>=</td>
                        <td>Barverkaufspreis</td>
                        <td>{{ barverkaufspreis }}</td>
                        <td>{{ barverkaufspreisInPercent }}</td>
                        <td>{{ 100 + gewinn }}</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>+</td>
                        <td>Kundenskonto</td>
                        <td>{{kundenskontoBetrag}}</td>
                        <td>
                            <input type="number form-control" v-model.number="kundenskonto">
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>=</td>
                        <td>Zielverkaufspreis</td>
                        <td>{{ zielverkaufspreis }}</td>
                        <td>100</td>
                        <td>{{ zielverkaufspreisInPercent }}</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>+</td>
                        <td>Kundenrabatt</td>
                        <td>{{ kundenrabattBetrag }}</td>
                        <td></td>
                        <td>
                            <input type="number" v-model.number="kundenrabatt">
                        </td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>=</td>
                        <td>Listenverkaufspreis</td>
                        <td>
                            <input type="price" v-model.number="listenverkaufspreis">
                        </td>
                        <td></td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "vorwaertskalkulation",
    data: function() {
        return {
            listenverkaufspreis: 1640,
            lieferrabatt: 12,
            lieferskonto: 2,
            bezugskosten: 122,
            handlungskosten: 20,
            gewinn: 6,
            kundenskonto: 3,
            kundenrabatt: 10
        };
    },
    computed: {
        kundenrabattInPercent() {
            return (this.kundenrabatt / 100).toFixed(2);
        },
        kundenrabattBetrag() {
            return (
                this.kundenrabattInPercent * this.listenverkaufspreis
            ).toFixed(2);
        },
        zielverkaufspreisInPercent() {
            return (100 - this.kundenrabatt).toFixed(2);
        },
        zielverkaufspreis() {
            return (this.listenverkaufspreis - this.kundenrabattBetrag).toFixed(
                2
            );
        },
        kundenskontoInPercent() {
            return (this.kundenskonto / 100).toFixed(2);
        },
        kundenskontoBetrag() {
            return (
                this.kundenskontoInPercent * this.zielverkaufspreis
            ).toFixed(2);
        },
        barverkaufspreis() {
            return (this.zielverkaufspreis - this.kundenskontoBetrag).toFixed(
                2
            );
        },
        barverkaufspreisInPercent() {
            return (100 - this.kundenskonto).toFixed(2);
        },
        gewinnDivision() {
            return this.gewinn / (100 + this.gewinn);
        },
        gewinnBetrag() {
            return (this.barverkaufspreis * this.gewinnDivision).toFixed(2);
        },
        selbstkostenpreis() {
            return (this.barverkaufspreis - this.gewinnBetrag).toFixed(2);
        },
        handlungskostenDivision() {
            return this.handlungskosten / (100 + this.handlungskosten);
        },
        handlungskostenBetrag() {
            return (
                this.selbstkostenpreis * this.handlungskostenDivision
            ).toFixed(2);
        },
        bezugspreis() {
            return (
                this.selbstkostenpreis - this.handlungskostenBetrag
            ).toFixed(2);
        },
        bareinkaufspreisInPercent() {
            return 100 - this.lieferskonto;
        },
        bareinkaufspreis() {
            return (this.bezugspreis - this.bezugskosten).toFixed(2);
        },
        lieferskontoDivision() {
            return this.lieferskonto / this.bareinkaufspreisInPercent;
        },
        lieferskontoBetrag() {
            return (this.bareinkaufspreis * this.lieferskontoDivision).toFixed(
                2
            );
        },
        zieleinkaufspreis() {
            return (+this.bareinkaufspreis + +this.lieferskontoBetrag).toFixed(
                2
            );
        },
        zieleinkaufspreisInPercent() {
            return 100 - this.lieferrabatt;
        },
        lieferrabattDivision() {
            return this.lieferrabatt / this.zieleinkaufspreisInPercent;
        },
        lieferrabattBetrag() {
            return (
                +this.zieleinkaufspreis * +this.lieferrabattDivision
            ).toFixed(2);
        },
        listeneinkaufspreis() {
            return (+this.zieleinkaufspreis + +this.lieferrabattBetrag).toFixed(
                2
            );
        }
    }
};
</script>

<style scoped>
.rueckwaertskalkulation {
    display: grid;
    margin: 20px;
    grid-template-areas:
        "description"
        "calculation";
}

@media screen and (min-width: 710px) {
    .rueckwaertskalkulation {
        grid-template-columns: 1fr 700px 1fr;
        grid-template-areas:
            ". description ."
            "calculation calculation calculation";
    }
}

.description {
    grid-area: description;
}

.calculation {
    grid-area: calculation;
}

input {
    text-align: center;
}
</style>
