<template>
    <div class="bg-[#FBFBFB] px-12 py-6">
        <div class="flex justify-between items-center max-w-screen-2xl container mx-auto">
            <the-nav-link />
            <div class="flex space-x-5">
                <app-search-input :placeholder="'Izlash'"/>
                <app-filter/>
            </div>
            <app-modal/>
        </div>
    </div>
</template>

<script>
import AppButtonLink from "./AppButtonLink.vue";
import AppSearchInput from "./AppSearchInput.vue";
import AppFilter from "./AppFilter.vue";
import AppModal from "./AppModal.vue";
import TheNavLink from "./TheNavLink.vue";

export default {
    name: "TheNavbar",
    components: {TheNavLink, AppModal, AppFilter, AppSearchInput, AppButtonLink},
}
</script>

<style scoped>

</style>