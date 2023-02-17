<template>
    <div class="flex justify-between items-center px-12 py-4 bg-[#FBFBFB]">
        <app-go-back-header>
            Talaba qo‘shish
        </app-go-back-header>
    </div>

    <div
        class="w-full md:w-4/5 lg:w-3/5 bg-white px-7 py-7 space-y-4 md:space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto
        mt-10 mb-96">

        <div class="block md:flex justify-between space-y-3 md:space-y-0 md:space-x-3">
            <div class="w-full md:w-1/2">
                <app-input :placeholder="'I.F.SH'" :id="'name'">
                    F.I.Sh. (Familiya Ism Sharif)
                </app-input>
            </div>
            <div class="w-full md:w-1/2">
                <app-input :placeholder="'+998 00 000 00 00'" :id="'phone'">
                    Telefon raqam
                </app-input>
            </div>
        </div>

        <div>
            <app-select :title="'OTM'">
                <span class="text-[8px]">OTM ni tanlang</span>
            </app-select>
        </div>

        <div class="block md:flex justify-between space-y-3 md:space-y-0 md:space-x-3">
            <div class="w-full md:w-1/2">
                <app-select :title="'OTM'">
                    <span class="text-[8px]">OTM ni tanlang</span>
                </app-select>
            </div>
            <div class="w-full md:w-1/2">
                <app-input :placeholder="'Summani kiriting'" :id="'sum'" :type="'number'">
                    Kontrakt summa
                </app-input>
            </div>
        </div>

        <hr class="border border-gray-100"/>

        <div class="flex justify-end">
            <app-button>
                <div class="flex items-center space-x-1">
                    <PlusIcon class="w-4 h-4 stroke-2"/>
                    <router-link to="/add-student" class="text-[14px]">Qo‘shish</router-link>
                </div>
            </app-button>
        </div>

    </div>
</template>

<script>
import {PlusIcon} from '@heroicons/vue/24/outline'
import AppInput from "../components/AppInput.vue";
import AppInputLabel from "../components/AppInputLabel.vue";
import AppSelect from "../components/AppSelect.vue";
import AppButton from "../components/AppButton.vue";
import AppGoBackHeader from "@/components/AppGoBackHeader.vue";

export default {
    name: "AddStudentPage",
    components: {
        AppGoBackHeader,
        AppButton,
        AppSelect,
        AppInputLabel,
        AppInput,
        PlusIcon,
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>