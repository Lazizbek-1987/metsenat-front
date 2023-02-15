<template>
    <div class="w-full min-h-screen overflow-hidden bg-back">
        <the-header />
        <the-navbar />
        <RouterView />
    </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
import TheHeader from "./components/TheHeader.vue";
import TheNavbar from "./components/TheNavbar.vue";
export default {
    components: {TheNavbar, TheHeader, LoginPage}
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: DM Serif Display, sans-serif;
}

</style>
