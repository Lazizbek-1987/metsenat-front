<template>
    <nav>
        <ul class="flex items-center">
            <li>
                <app-button-link :link="'/dashboard'" :class="'w-[193px] rounded-l'"
                >
                    DASHBOARD
                </app-button-link>
            </li>
            <li>
                <app-button-link :link="'/sponsors'" :class="'w-[193px] border-l-0 border-r-0 rounded-0'">
                    Homiylar
                </app-button-link>
            </li>
            <li>
                <app-button-link :link="'/students'" :class="'w-[193px] rounded-r'">
                    Talabalar
                </app-button-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import AppButtonLink from "../Button/AppButtonLink.vue";

export default {
    name: "TheNavLink",
    components: {AppButtonLink}
}
</script>

<style scoped>
</style>