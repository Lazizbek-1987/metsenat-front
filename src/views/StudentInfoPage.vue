<template>
    <div class="w-full md:w-4/5 lg:w-3/5 bg-white px-7 py-7 space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto mt-10">
        <div class="flex justify-between items-center">
            <h1>Talaba haqida</h1>
            <app-button :class="'border-0 bg-blue-100 px-4 py-1 rounded'">
                <div class="flex items-center px-3 space-x-2">
                    <PencilSquareIcon class="w-5 h-5"/>
                    <span class="text-[14px]">Tahrirlash</span>
                </div>
            </app-button>
        </div>

        <div class="relative">
            <hr class="border">
            <h1 class="absolute -top-2 px-3 py-0 text-[12px] text-primary bg-blue-100">Asosiy ma’lumotlar</h1>
        </div>

        <div class="flex space-x-5 items-center">
            <img
                src="../components/icons/student-avatar.svg"
                alt="student-photo"
                class="p-3 border-2 border-blue-100 rounded bg-gray-100"
            >
            <h3 class="w-1/4">Isfandiyorov Iqbol Bobomirzayevich</h3>
        </div>

        <div>
            <h4 class="text-[12px] tracking-widest uppercase text-gray-400">Telefon raqam</h4>
            <h4 class="uppercase">+998 99 973-72-60</h4>
        </div>

        <div class="relative">
            <hr class="border">
            <h1 class="absolute -top-2 px-3 py-0 text-[12px] text-primary bg-blue-100">O‘qish joyi haqida ma’lumot</h1>
        </div>
        
        <div class="flex justify-start space-x-8">
            <div class="space-y-6">
                <div class="space-y-2">
                    <h3 class="text-gray-400 text-[12px]">OTM</h3>
                    <p>O’zbekiston davlat jahon tillari universiteti</p>
                </div>
                <div class="space-y-2">
                    <h3 class="text-gray-400 text-[12px]">Ajratilingan summa</h3>
                    <p>14 000 000 UZS</p>
                </div>
            </div>
            <div class="space-y-6 text-start">
                <div class="space-y-2">
                    <h3 class="text-gray-400 text-[12px]">Talabalik turi</h3>
                    <p>Bakalavr</p>
                </div>
                <div class="space-y-2">
                    <h3 class="text-gray-400 text-[12px]">Kontrakt miqdori</h3>
                    <p>30 000 000 UZS</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {PencilSquareIcon, UserIcon} from '@heroicons/vue/24/outline'
import AppButton from "../components/AppButton.vue";

export default {
    name: "AddSponsorPage",
    components: {AppButton, PencilSquareIcon, UserIcon}
}
</script>

<style scoped>

</style>