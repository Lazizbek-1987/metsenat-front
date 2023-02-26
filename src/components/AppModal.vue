<template>
    <div v-if="isOpen">
        <div
            class="fixed bg-white p-7 z-20 w-[586px] rounded-lg top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
            space-y-7"
        >
            <div class="flex justify-between items-center">
                <h1 class="text-2xl">{{ title }}</h1>
                <XMarkIcon
                    @click="closeModal"
                    class="w-7 h-7 text-gray-400 cursor-pointer hover:text-primary duration-500"
                />
            </div>
            <div class="border-b"></div>
            <slot></slot>
        </div>
            <div @click="closeModal" class="fixed inset-0 bg-gray-500 opacity-25 z-10"></div>

    </div>

</template>

<script>
import {XMarkIcon} from "@heroicons/vue/20/solid";

export default {
    name: "AppModal",
    components: {XMarkIcon},
    props: {
        title: {type: String},
        isOpen: {type: Boolean}
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style scoped>

</style>