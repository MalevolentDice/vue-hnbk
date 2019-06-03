<template>
    <div class="handelskalkulation">
        <div class="description">
            <h1>Handelskalkulation</h1>
            <p>Die Handelskalkulation dient je nach Unternehmens- und Marktsituation der Ermittlung des Einkaufpreises (Rückwärtskalkulation), Verkaufspreises (Vorwärtskalkulation) oder möglichen Gewinns (Differenzkalkulation).</p>
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
                        <td>
                            <input type="price" v-model.number="listeneinkaufspreis">
                        </td>
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
                        <td>{{ 100 - lieferrabatt }}</td>
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
                        <td>{{ 100 - lieferskonto }}</td>
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
                        <td>{{gewinnbetrag}}</td>
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
                        <td>{{ listenverkaufspreis }}</td>
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
    name: "handelskalkulation",
    data: function() {
        return {
            listeneinkaufspreis: 1163.69,
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
        lieferrabattInPercent() {
            return (this.lieferrabatt / 100).toFixed(2);
        },
        lieferrabattBetrag() {
            return (
                this.lieferrabattInPercent * this.listeneinkaufspreis
            ).toFixed(2);
        },
        zieleinkaufspreis() {
            return (this.listeneinkaufspreis - this.lieferrabattBetrag).toFixed(
                2
            );
        },
        lieferskontoInPercent() {
            return (this.lieferskonto / 100).toFixed(2);
        },
        lieferskontoBetrag() {
            return (
                this.zieleinkaufspreis * this.lieferskontoInPercent
            ).toFixed(2);
        },
        bareinkaufspreis() {
            return (this.zieleinkaufspreis - this.lieferskontoBetrag).toFixed(
                2
            );
        },
        bezugspreis() {
            return (+this.bareinkaufspreis + +this.bezugskosten).toFixed(2);
        },
        handlungskostenInPercent() {
            return (this.handlungskosten / 100).toFixed(2);
        },
        handlungskostenBetrag() {
            return (this.bezugspreis * this.handlungskostenInPercent).toFixed(
                2
            );
        },
        selbstkostenpreis() {
            return (+this.bezugspreis + +this.handlungskostenBetrag).toFixed(2);
        },
        gewinnInPercent() {
            return (this.gewinn / 100).toFixed(2);
        },
        gewinnbetrag() {
            return (this.selbstkostenpreis * this.gewinnInPercent).toFixed(2);
        },
        barverkaufspreis() {
            return (+this.selbstkostenpreis + +this.gewinnbetrag).toFixed(2);
        },
        barverkaufspreisInPercent() {
            return 100 - this.kundenskonto;
        },
        kundenskontoBetrag() {
            return (
                this.barverkaufspreis *
                (this.kundenskonto / this.barverkaufspreisInPercent)
            ).toFixed(2);
        },
        zielverkaufspreis() {
            return (+this.barverkaufspreis + +this.kundenskontoBetrag).toFixed(
                2
            );
        },
        zielverkaufspreisInPercent() {
            return 100 - this.kundenrabatt;
        },
        kundenrabattInPercent() {
            return (this.kundenrabatt / 100).toFixed(2);
        },
        kundenrabattBetrag() {
            return (
                this.zielverkaufspreis *
                (this.kundenrabatt / this.zielverkaufspreisInPercent)
            ).toFixed(2);
        },
        listenverkaufspreis() {
            return (+this.zielverkaufspreis + +this.kundenrabattBetrag).toFixed(
                2
            );
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
        "calculation";
}

@media screen and (min-width: 710px) {
    .handelskalkulation {
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
