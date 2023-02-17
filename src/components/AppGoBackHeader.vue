<template>
    <div class="inline-flex space-x-7 items-center">
        <ArrowLeftIcon @click="goBack" class="w-6 h-6 stroke-2 cursor-pointer hover:text-primary duration-500"/>
        <p class="text-[24px] font-bold">
            <slot></slot>
        </p>
    </div>
</template>

<script>
import {ArrowLeftIcon} from "@heroicons/vue/24/outline";

export default {
    name: "AppGoBackHeader",
    components: {ArrowLeftIcon},
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>