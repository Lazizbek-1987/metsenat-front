<template>
    <div class="flex justify-between items-center">
        <h1 class="text-[16px] md:text-[24px]">{{ title }}</h1>

        <app-button>
            <div @click="openModal()" class="flex items-center space-x-1 md:space-x-2">
                <PencilSquareIcon class="w-4 h-4 md:w-5 md:h-5 stroke-2"/>
                <span class="text-[10px] md:text-[14px]">{{ btnName }}</span>
            </div>
        </app-button>

    </div>
</template>

<script>
import {PencilSquareIcon, UserIcon, PlusIcon} from '@heroicons/vue/24/outline'
import AppButton from "@/components/AppButton.vue";
export default {
    name: "AppInfoCardHeader",
    components: {AppButton, PencilSquareIcon},
    props: {
        title: {type: String},
        btnName: {type: String}
    },
    methods: {
        openModal() {
            this.$emit('openSponsor')
        }
    }
}
</script>

<style scoped>

</style>