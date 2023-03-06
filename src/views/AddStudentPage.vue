<template>
    <div class="flex justify-between items-center px-12 py-4 bg-[#FBFBFB]">
        <app-go-back-header>
            Talaba qo‘shish
        </app-go-back-header>
    </div>

    <div
        class="w-full md:w-4/5 lg:w-3/5 bg-white px-7 rounded-xl shadow-sm mx-4 md:mx-auto
        mt-10 mb-96">

        <form action="" @submit.prevent="createStudent" class="py-7 space-y-4 md:space-y-7">
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
                    <option value="" selected disabled>OTM ni tanlang</option>
                    <option value="" v-for="institute in getInstitutions" :key="institute.id">
                        {{ institute.name }}
                    </option>
                </app-select>
            </div>

            <div class="block md:flex justify-between space-y-3 md:space-y-0 md:space-x-3">
                <div class="w-full md:w-1/2">
                    <app-select :title="'Talabalik turi'">
                        <option value="" selected disabled>Talabalik turi</option>
                        <option value="" v-for="student in getStudentsList" :key="student.id">
                            {{ student.type }}
                        </option>
                    </app-select>
                </div>
                <div class="w-full md:w-1/2">
                    <app-input :placeholder="'Summani kiriting'" :id="'sum'" :type="'number'">
                        Kontrakt summa
                    </app-input>
                </div>
            </div>
            <hr class="border border-gray-100"/>

            <div class="flex justify-end mt-7">
                <app-button class="px-10 py-3">
                    <div class="flex items-center space-x-1">
                        <PlusIcon class="w-5 h-5 stroke-2"/>
                        <router-link to="/students" class="text-[14px]" @click="createStudent">Qo‘shish</router-link>
                    </div>
                </app-button>
            </div>

        </form>

    </div>
</template>

<script>
import {PlusIcon} from '@heroicons/vue/24/outline'
import AppInput from "../components/Form/AppInput.vue";
import AppSelect from "../components/Form/AppSelect.vue";
import AppButton from "../components/Button/AppButton.vue";
import AppGoBackHeader from "@/components/AppGoBackHeader.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddStudentPage",
    components: {
        AppGoBackHeader,
        AppButton,
        AppSelect,
        AppInput,
        PlusIcon,
    },
    data() {
        return {
            student: {
                id: null,
                full_name: "",
                type: 0,
                phone: "",
                institute: '',
                contract: 0,
                given: 0,
                get_status_display: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getInstitutions'])
    },
    methods: {
        ...mapActions(['fetchInstitutions', 'postStudent']),
        createStudent() {
            this.postStudent()
        },
        goBack() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.fetchInstitutions()
    }
}
</script>

<style scoped>

</style>