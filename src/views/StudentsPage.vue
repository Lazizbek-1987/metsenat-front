<template>
    <the-navbar />
    <div class="px-12 py-7">
        <div class="flex justify-end pb-7">
            <app-button>
                <div class="flex items-center space-x-2">
                    <PlusIcon class="w-5 h-5 stroke-2"/>
                    <router-link to="/add-student" class="text-[14px]">Talaba qo‘shish</router-link>
                </div>
            </app-button>
        </div>

        <table class="w-full table-auto border-separate border-spacing-y-3">
            <app-students-table-head
                :ordinal-number="'#'"
                :full-name="'f.i.sh'"
                :type-of-student="'Talabalik turi'"
                :university="'OTM'"
                :allocated-amount="'Ajratilingan summa'"
                :contract-amount="'Kontrakt miqdori'"
                :deeds="'Amallar'"
            />
            <app-students-table-body
                v-for="(student, index) in getStudentsList"
                :key="index"
                :ordinal-number="index + 1"
                :full-name="student.full_name"
                :type-of-student="student.get_status_display"
                :university="student.institute.name"
                :allocated-amount="student.given"
                :contract-amount="student.contract"
                :currency="'UZS'"
                :link="'/students/' + student.id"
            />
        </table>
        <div class="flex justify-between items-center mt-7">
            <div>
                <p class="text-sm">{{getStudentsCount}} tadan 1-10 ko‘rsatilmoqda</p>
            </div>
            <div class="flex items-center space-x-3">
                <p>Ko'rsatish</p>
                <select name="" id=""
                        class="px-3 py-1.5 border-2 border-gray-300 rounded outline-0 focus:border-primary">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="10" selected>10</option>
                </select>
                <app-pagination/>
            </div>
        </div>
    </div>
</template>

<script>
import {ChevronLeftIcon, ChevronRightIcon, EyeIcon, PlusIcon} from '@heroicons/vue/24/outline'
import AppPagination from "../components/Pagination/AppPagination.vue";
import AppStudentsTableHead from "../components/Student/AppStudentsTableHead.vue";
import AppStudentsTableBody from "../components/Student/AppStudentsTableBody.vue";
import AppButton from "../components/Button/AppButton.vue";
import TheNavbar from "../components/HeaderNavbar/TheNavbar.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "StudentsPage",
    components: {
        TheNavbar,
        AppButton,
        AppStudentsTableBody,
        AppStudentsTableHead,
        AppPagination,
        EyeIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        PlusIcon
    },
    computed: {
        ...mapGetters(['getStudentsList', 'getStudentsCount'])
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['fetchStudents'])
    },
    mounted() {
        this.fetchStudents()
    }
}
</script>

<style scoped>

</style>