<template>
    <div class="skonto">
        <div class="description">
            <h1>Skonto</h1>
            <p>Bei einem Skonto erlässt der Lieferer dem Käufer einen prozentualen Anteil des zu zahlenden Betrags unter einhaltung einer Frist.</p>
        </div>
        <div class="example">
            <div class="table-responsive">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Formula</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Payment</td>
                            <td>Constant</td>
                            <td>
                                <input type="price" v-model.number="payment">
                            </td>
                        </tr>
                        <tr>
                            <td>Skonto</td>
                            <td>Constant</td>
                            <td>
                                <input type="price" v-model.number="skonto">
                            </td>
                        </tr>
                        <tr>
                            <td>Due days</td>
                            <td>Constant</td>
                            <td>
                                <input type="number" v-model.number="dueDays">
                            </td>
                        </tr>
                        <tr>
                            <td>Days to get skonto benefits</td>
                            <td>Constant</td>
                            <td>
                                <input type="number" v-model.number="targetDays">
                            </td>
                        </tr>
                        <tr>
                            <td>Benefits of paying in time</td>
                            <td>Skonto({{skonto/100}}) * Payment({{payment}})</td>
                            <td>{{(skonto/100)*payment}}</td>
                        </tr>
                        <tr>
                            <td>Payment with skonto</td>
                            <td>Payment ({{payment}}) - Benefits({{(skonto/100)*payment}})</td>
                            <td>{{payment - (skonto/100)*payment}}</td>
                        </tr>
                        <tr>
                            <td>Effective interest when paying in time</td>
                            <td>Skonto({{skonto}}) * 360 / dueDays({{dueDays}}) - targetDays({{targetDays}})</td>
                            <td>{{(skonto * 360) / (dueDays - targetDays)}}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "skonto",
    data: function() {
        return {
            payment: 22800,
            targetDays: 10,
            dueDays: 30,
            skonto: 3
        };
    }
};
</script>
<style scoped>
</style>
