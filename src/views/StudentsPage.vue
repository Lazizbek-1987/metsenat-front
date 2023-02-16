<template>
    <div class="px-12 py-10">
        <div class="flex justify-end pb-7">
            <app-button :class="'items-center px-6 py-1 rounded'">
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
                v-for="(student, index) in students"
                :key="index"
                :ordinal-number="index + 1"
                :full-name="student.fullName"
                :type-of-student="student.typeOfStudent"
                :university="student.university"
                :allocated-amount="student.allocatedAmount"
                :contract-amount="student.contractAmount"
                :currency="'UZS'"
                :link="'/student-info'"
            />
        </table>
        <div class="flex justify-between items-center mt-7">
            <div>
                <p class="text-sm">59 tadan 1-10 ko‘rsatilmoqda</p>
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
import AppPagination from "../components/AppPagination.vue";
import AppStudentsTableHead from "../components/AppStudentsTableHead.vue";
import AppStudentsTableBody from "../components/AppStudentsTableBody.vue";
import AppButton from "../components/AppButton.vue";

export default {
    name: "StudentsPage",
    components: {
        AppButton,
        AppStudentsTableBody,
        AppStudentsTableHead,
        AppPagination,
        EyeIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        PlusIcon
    },
    data() {
        return {
            students: [
                {
                    fullName: 'Alimov Abror Xabibullayevich',
                    typeOfStudent: 'Bakalavr',
                    university: 'Toshkent shahridagi INHA Universiteti',
                    allocatedAmount: '14 000 000',
                    contractAmount: '30 000 000',
                },
                {
                    fullName: 'Saimov Rustam Saimjonovich',
                    typeOfStudent: 'Magistr',
                    university: 'O’zbekiston milliy universiteti',
                    allocatedAmount: '28 000 000',
                    contractAmount: '28 000 000',
                },
                {
                    fullName: 'Alimov Abror Xabibullayevich',
                    typeOfStudent: 'Bakalavr',
                    university: 'Toshkent shahridagi INHA Universiteti',
                    allocatedAmount: '14 000 000',
                    contractAmount: '30 000 000',
                },
                {
                    fullName: 'Alimov Abror Xabibullayevich',
                    typeOfStudent: 'Magistr',
                    university: 'Toshkent shahridagi INHA Universiteti',
                    allocatedAmount: '14 000 000',
                    contractAmount: '30 000 000',
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>