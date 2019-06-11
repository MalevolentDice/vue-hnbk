<template>
    <div class="differenzkalkulation">
        <div class="description">
            <h1>
                <Heading first="Differenz" second="kalkulation"/>
            </h1>
            <p>Bei der Differenzkalkulation ermitteln wir den erwirtschaftbaren Gewinn bei gegebenen Listenein- und verkaufspreisen.</p>
            <p>Es wird vom Listeneinkaufspreis bis zum Selbstkostenpreis vorwärts gerechnet (Vorwärtskalkulation) und vom Listenverkaufspreis bis zum Barverkaufspreis rückwärts gerechnet (Rückwärtskalkulation).</p>
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
                        <td>{{ gewinnBetrag }}</td>
                        <td></td>
                        <td>{{ gewinn }}</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>=</td>
                        <td>Barverkaufspreis</td>
                        <td>{{ barverkaufspreis }}</td>
                        <td>{{ barverkaufspreisInPercent }}</td>
                        <td>{{ barverkaufspreisInPercent2 }}</td>
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
import Heading from "../components/typography/Heading";
export default {
    name: "differenzkalkulation",
    components: {
        Heading
    },
    data: function() {
        return {
            listeneinkaufspreis: 1163.69,
            listenverkaufspreis: 1640,
            lieferrabatt: 12,
            lieferskonto: 2,
            bezugskosten: 122,
            handlungskosten: 20,
            kundenskonto: 3,
            kundenrabatt: 10
        };
    },
    computed: {
        kundenrabattInPercent() {
            return Math.round((this.kundenrabatt / 100) * 1e2) / 1e2;
        },
        kundenrabattBetrag() {
            return (
                Math.round(
                    this.kundenrabattInPercent * this.listenverkaufspreis * 1e2
                ) / 1e2
            );
        },
        zielverkaufspreisInPercent() {
            return Math.round((100 - this.kundenrabatt) * 1e2) / 1e2;
        },
        zielverkaufspreis() {
            return (
                Math.round(
                    (this.listenverkaufspreis - this.kundenrabattBetrag) * 1e2
                ) / 1e2
            );
        },
        kundenskontoInPercent() {
            return Math.round((this.kundenskonto / 100) * 1e2) / 1e2;
        },
        kundenskontoBetrag() {
            return (
                Math.round(
                    this.kundenskontoInPercent * this.zielverkaufspreis * 1e2
                ) / 1e2
            );
        },
        barverkaufspreis() {
            return (
                Math.round(
                    (this.zielverkaufspreis - this.kundenskontoBetrag) * 1e2
                ) / 1e2
            );
        },
        barverkaufspreisInPercent() {
            return Math.round((100 - this.kundenskonto) * 1e2) / 1e2;
        },
        barverkaufspreisInPercent2() {
            return (
                Math.round(
                    (this.barverkaufspreis / this.selbstkostenpreis) * 100 * 1e2
                ) / 1e2
            );
        },
        gewinnBetrag() {
            return (
                Math.round(
                    (this.barverkaufspreis - this.selbstkostenpreis) * 1e2
                ) / 1e2
            );
        },
        gewinn() {
            return (
                Math.round((this.barverkaufspreisInPercent2 - 100) * 1e2) / 1e2
            );
        },
        lieferrabattInPercent() {
            return Math.round((this.lieferrabatt / 100) * 1e4) / 1e4;
        },
        lieferrabattBetrag() {
            return (
                Math.round(
                    this.lieferrabattInPercent * this.listeneinkaufspreis * 1e2
                ) / 1e2
            );
        },
        zieleinkaufspreis() {
            return (
                Math.round(
                    (this.listeneinkaufspreis - this.lieferrabattBetrag) * 1e2
                ) / 1e2
            );
        },
        lieferskontoInPercent() {
            return Math.round((this.lieferskonto / 100) * 1e4) / 1e4;
        },
        lieferskontoBetrag() {
            return (
                Math.round(
                    this.zieleinkaufspreis * this.lieferskontoInPercent * 1e2
                ) / 1e2
            );
        },
        bareinkaufspreis() {
            return (
                Math.round(
                    (this.zieleinkaufspreis - this.lieferskontoBetrag) * 1e2
                ) / 1e2
            );
        },
        bezugspreis() {
            return (
                Math.round((this.bareinkaufspreis + this.bezugskosten) * 1e2) /
                1e2
            );
        },
        handlungskostenInPercent() {
            return Math.round((this.handlungskosten / 100) * 1e4) / 1e4;
        },
        handlungskostenBetrag() {
            return (
                Math.round(
                    this.bezugspreis * this.handlungskostenInPercent * 1e2
                ) / 1e2
            );
        },
        selbstkostenpreis() {
            return (
                Math.round(
                    (this.bezugspreis + this.handlungskostenBetrag) * 1e2
                ) / 1e2
            );
        }
    }
};
</script>

<style scoped>
.differenzkalkulation {
    display: grid;
    margin: 20px;
    grid-template-areas:
        "description"
        "calculation";
}

@media screen and (min-width: 710px) {
    .differenzkalkulation {
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
