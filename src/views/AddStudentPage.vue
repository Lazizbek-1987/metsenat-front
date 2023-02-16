<template>
    <div class="flex items-center px-12 py-4 bg-[#FBFBFB] space-x-7">
        <ArrowLeftIcon class="w-7 h-7 stroke-2"/>
        <p class="text-[24px] font-bold">Talaba qo‘shish</p>
    </div>
    <div class="w-full md:w-4/5 lg:w-3/5 bg-white px-7 py-7 space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto mt-10 mb-96">
        <div class="block md:flex justify-between md:space-x-3">
            <div class="w-full md:w-1/2 space-y-2">
                <app-input-label :for-label="'name'">
                    F.I.Sh. (Familiya Ism Sharif)
                </app-input-label>

                <app-input :placeholder="'I.F.SH'" :id="'name'"/>
            </div>
            <div class="w-full md:w-1/2 space-y-2">
                <app-input-label :for-label="'phone'">Telefon raqam</app-input-label>
                <app-input :placeholder="'+998 00 000 00 00'" :id="'phone'"/>
            </div>
        </div>

        <div>
            <app-input-label>OTM</app-input-label>
            <app-select>
                <span class="text-[8px]">OTM ni tanlang</span>
            </app-select>
        </div>

        <div class="flex justify-between space-x-3">
            <div class="w-1/2 space-y-2">
                <app-input-label>
                    Talabalik turi
                </app-input-label>

                <app-input :placeholder="'I.F.SH'" :id="'name'" :type="'text'"/>
            </div>
            <div class="w-1/2 space-y-2">
                <app-input-label :for-label="'sum'">Kontrakt summa</app-input-label>
                <app-input :placeholder="'Summani kiriting'" :id="'sum'" :type="'number'"/>
            </div>
        </div>

        <hr class="border border-gray-100"/>

        <div class="flex justify-end">
            <app-button :class="'items-center px-6 py-1 rounded'">
                <div class="flex items-center space-x-1">
                    <PlusIcon class="w-4 h-4 stroke-2"/>
                    <router-link to="/add-student" class="text-[14px]">Qo‘shish</router-link>
                </div>
            </app-button>
        </div>

    </div>
</template>

<script>
import {ArrowLeftIcon, PlusIcon} from '@heroicons/vue/24/outline'
import AppInput from "../components/AppInput.vue";
import AppInputLabel from "../components/AppInputLabel.vue";
import AppSelect from "../components/AppSelect.vue";
import AppButton from "../components/AppButton.vue";

export default {
    name: "AddStudentPage",
    components: {AppButton, AppSelect, AppInputLabel, AppInput, PlusIcon, ArrowLeftIcon}
}
</script>

<style scoped>

</style>