<template>
    <div class="block md:flex justify-start items-center space-x-3 px-12 py-4 bg-[#FBFBFB]">
        <app-go-back-header class="mb-4 md:mb-0 text-2xl">Isfandiyorov Iqbol Bobomirzayevich</app-go-back-header>
        <app-status :title="'Tasdiqlangan'"/>
    </div>
    <div class="space-y-6 md:space-y-10 mt-6 md:mt-10">
        <div
            class="w-full md:w-4/5 lg:w-3/5 bg-white px-3 md:px-7 py-3 md:py-7 space-y-7
            rounded-xl shadow-sm mx-4 md:mx-auto"
        >
            <app-info-card-header
                :title="'Homiy haqida'"
                :btn-name="'Tahrirlash'"
            />

            <div class="flex space-x-5 items-center">
                <img
                    src="../components/icons/student-avatar.svg"
                    alt="student-photo"
                    class="p-3 border-2 border-blue-100 rounded bg-gray-100"
                >
                <h3 class="w-1/4">Isfandiyorov Iqbol Bobomirzayevich</h3>
            </div>

            <div class="w-full block md:flex justify-start space-y-4 md:space-y-0 md:space-x-8">
                <div class="w-1/2">
                    <h4 class="text-[12px] tracking-widest uppercase text-gray-400">Telefon raqam</h4>
                    <h4 class="uppercase">+998 99 973-72-60</h4>
                </div>
                <div class="w-1/2 text-start">
                    <h4 class="text-[12px] tracking-widest uppercase text-gray-400">Homiylik summasi</h4>
                    <h4>30 000 000 UZS</h4>
                </div>

            </div>
        </div>

    </div>

    <div class="w-full md:w-4/5 lg:w-3/5 px-3 md:px-7 pt-3 md:pt-7 mt-20 md:mt-44 md:mx-auto">
        <img src="../assets/footer-image.png" alt="">
    </div>

</template>

<script>
import {PlusIcon} from '@heroicons/vue/24/outline'
import AppGoBackHeader from "@/components/AppGoBackHeader.vue";
import AppStatus from "@/components/AppStatus.vue";
import AppInfoCardHeader from "@/components/AppInfoCardHeader.vue";

export default {
    name: "SponsorInfoPage",
    components: {AppInfoCardHeader, AppStatus, AppGoBackHeader, PlusIcon},
}
</script>

<style scoped>

</style>