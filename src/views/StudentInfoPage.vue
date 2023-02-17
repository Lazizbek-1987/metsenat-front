<template>
    <div class="flex justify-between items-center px-12 py-4 bg-[#FBFBFB]">
        <app-go-back-header>Isfandiyorov Iqbol Bobomirzayevich</app-go-back-header>
        <app-button>
            <div class="flex items-center space-x-2">
                <PlusIcon class="w-4 h-4 stroke-2"/>
                <router-link to="/add-student" class="text-[14px]">Homiy qo‘shish</router-link>
            </div>
        </app-button>
    </div>


    <div class="space-y-6 md:space-y-10 mt-6 md:mt-10">
        <div
            class="w-full md:w-4/5 lg:w-3/5 bg-white px-3 md:px-7 py-3 md:py-7 space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto">

            <app-info-card-header
                :title="'Talaba haqida'"
                :btn-name="'Tahrirlash'"
            />

            <app-horizontal-row-with-title>
                Asosiy ma’lumotlar
            </app-horizontal-row-with-title>

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

            <app-horizontal-row-with-title>
                O‘qish joyi haqida ma’lumot
            </app-horizontal-row-with-title>

            <div class="block md:flex justify-start md:space-x-8">
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

        <div
            class="w-full md:w-4/5 lg:w-3/5 bg-white px-3 md:px-7 py-3 md:py-7 space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto">
            <div class="flex justify-between items-center">
                <h1 class="text-[16px] md:text-[24px]">Talabaga homiylar</h1>

                <app-button>
                    <div class="flex items-center space-x-1 md:space-x-2">
                        <PlusIcon class="w-4 h-4 md:w-5 md:h-5 stroke-2"/>
                        <span class="text-[10px] md:text-[14px]">Homiy qo‘shish</span>
                    </div>
                </app-button>

            </div>
        </div>

        <div class="w-full md:w-4/5 lg:w-3/5 px-3 md:px-7 pt-3 md:pt-7 mx-4 md:mx-auto">
            <img src="../assets/footer-image.png" alt="">
        </div>
    </div>
</template>

<script>
import {UserIcon, PlusIcon} from '@heroicons/vue/24/outline'
import AppButton from "../components/AppButton.vue";
import AppHorizontalRowWithTitle from "../components/AppHorizontalRowWithTitle.vue";
import AppGoBackHeader from "@/components/AppGoBackHeader.vue";
import AppInfoCardHeader from "@/components/AppInfoCardHeader.vue";

export default {
    name: "AddSponsorPage",
    components: {
        AppInfoCardHeader,
        AppGoBackHeader,
        AppHorizontalRowWithTitle,
        AppButton,
        UserIcon,
        PlusIcon
    }
}
</script>

<style scoped>

</style>