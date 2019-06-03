<template>
    <div class="handelskalkulation">
        <div class="description">a</div>
    </div>
</template>

<script>
export default {
    name: "handelskalkulation",
    data: function() {
        return {};
    },
    computed: {}
};
</script>

<style scoped>
.handelskalkulation {
    display: grid;
    margin: 20px;
    grid-template-areas:
        "description"
        "input"
        "output";
}

@media screen and (min-width: 710px) {
    .handelskalkulation {
        grid-template-columns: 1fr 700px 1fr;
        grid-template-areas:
            ". description ."
            ". input ."
            ". output .";
    }
}

.description {
    grid-area: description;
}

.inputs {
    grid-area: input;
}

.outputs {
    grid-area: output;
}

.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
}

.wrapper label,
.wrapper input,
.wrapper p {
    display: block;
    width: 100%;
    background: rgb(213, 214, 214);
    border: 2px solid rgb(110, 110, 110);
    margin: 0;
    padding: 0;
    color: black;
    text-align: left;
}

.wrapper input {
    background: darkgray;
    border: 2px solid black;
}
.wrapper select {
    background: darkgray;
    border: 2px solid black;
}
</style>
