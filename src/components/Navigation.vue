<template>
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <a class="navbar-brand" href="#">
                <img class="logo" src="@/assets/logo.png" alt="Logo">
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li v-for="route in routes" :key="route.name" class="nav-item">
                        <router-link class="nav-link" :to="route.link">{{route.name}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routes: [
                { name: "Home", link: "/" },
                { link: "/kontokorrentkredit", name: "KontoKorrentKredit" },
                { link: "/festdarlehen", name: "FestDarlehen" },
                { link: "/AnnuitaetenDarlehen", name: "AnnuitaetenDarlehen" },
                { link: "/LinuxUser", name: "LinuxUser" },
                { link: "/EntgeldAbrechnung", name: "EntgeldAbrechnung" },
                { link: "/Sampling", name: "Sampling" },
                { link: "/ABCAnalyse", name: "ABCAnalyse" },
                { link: "/Zahlungsarten", name: "Zahlungsarten" },
                { link: "/Rechtsformen", name: "Rechtsformen" },
                { link: "/handelskalkulation", name: "Handelskalkulation" }
            ]
        };
    }
};
</script>

<style scoped>
.logo {
    max-height: 50px;
}
</style>