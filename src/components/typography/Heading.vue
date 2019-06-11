<template>
    <div class="heading">
        <div v-if="isMobile" class="heading__dash--break">
            {{first}}-
            <br>
            {{second}}
        </div>
        <div v-else class="heading__no--break">{{first}}{{second}}</div>
    </div>
</template>
<script>
export default {
    name: "heading",
    props: {
        first: String,
        second: String
    },
    computed: {
        isMobile() {
            if (screen.width <= 710) {
                return true;
            }
            return false;
        }
    }
};
</script>
<style scoped>
</style>
