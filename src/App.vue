<template>
    <div class="w-full min-h-screen overflow-hidden bg-back">
        <the-header />
        <RouterView />
    </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
    components: {TheHeader, LoginPage}
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
