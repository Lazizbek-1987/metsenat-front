<template>
    <div class="bg-[#FBFBFB] px-12 py-6">
        <div class="flex justify-between items-center max-w-screen-2xl container mx-auto">
            <div>
                <ul class="flex items-center">
                    <li>
                        <app-button-link :class="'w-[193px] rounded-l'">DASHBOARD</app-button-link>
                    </li>
                    <li>
                        <app-button-link :class="'w-[193px] border-l-0 border-r-0 rounded-0'">Homiylar</app-button-link>
                    </li>
                    <li>
                        <app-button-link :class="'w-[193px] rounded-r'">Talabalar</app-button-link>
                    </li>
                </ul>
            </div>
            <div class="flex space-x-5">
                <app-search-input :placeholder="'Izlash'"/>
                <app-filter />
            </div>
        </div>
    </div>
</template>

<script>
import AppButtonLink from "./AppButtonLink.vue";
import AppSearchInput from "./AppSearchInput.vue";
import AppFilter from "./AppFilter.vue";

export default {
    name: "TheNavbar",
    components: {AppFilter, AppSearchInput, AppButtonLink}
}
</script>

<style scoped>

</style>