<template>
    <div class="flex justify-between items-center px-12 py-4 bg-[#FBFBFB]">
        <app-go-back-header>{{ student.full_name }}</app-go-back-header>
        <app-button>
            <div class="flex items-center space-x-2">
                <PlusIcon class="w-4 h-4 stroke-2"/>
                <router-link
                    to="/add-student"
                    class="text-[14px]"
                >
                    Talaba qo‘shish
                </router-link>
            </div>
        </app-button>
    </div>

    <div class="space-y-6 md:space-y-10 mt-6 md:mt-10">
        <div
            class="w-full md:w-4/5 lg:w-3/5 bg-white px-3 md:px-7 py-3 md:py-7 space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto">

            <app-info-card-header
                :title="'Talaba haqida'"
                :btn-name="'Tahrirlash'"
                @click="$store.commit('UPDATE_STUDENT_MODAL')"
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
                <h3 class="w-1/4">{{ student.full_name }}</h3>
            </div>

            <div>
                <h4 class="text-[12px] tracking-widest uppercase text-gray-400">Telefon raqam</h4>
                <h4 class="uppercase">{{ student.phone }}</h4>
            </div>

            <app-horizontal-row-with-title>
                O‘qish joyi haqida ma’lumot
            </app-horizontal-row-with-title>

            <div class="block md:flex justify-start md:space-x-8">
                <div class="space-y-6">
                    <div class="space-y-2">
                        <h3 class="text-gray-400 text-[12px]">OTM</h3>
                        <p>{{ student.institute }}</p>
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-gray-400 text-[12px]">Ajratilingan summa</h3>
                        <p>{{ student.given }}</p>
                    </div>
                </div>
                <div class="space-y-6 text-start">
                    <div class="space-y-2">
                        <h3 class="text-gray-400 text-[12px]">Talabalik turi</h3>
                        <p>{{ student.get_status_display }}</p>
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-gray-400 text-[12px]">Kontrakt miqdori</h3>
                        <p>{{ student.contract }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="w-full md:w-4/5 lg:w-3/5 bg-white px-3 md:px-7 py-3 md:py-7 space-y-7 rounded-xl shadow-sm mx-4 md:mx-auto">
            <div class="flex justify-between items-center">
                <h1 class="text-[16px] md:text-[24px]">Talabaga homiylar</h1>

                <app-button @click="$store.commit('UPDATE_MODAL')">
                    <div class="flex items-center space-x-1 md:space-x-2">
                        <PlusIcon class="w-4 h-4 md:w-5 md:h-5 stroke-2"/>
                        <span class="text-[10px] md:text-[14px]">Homiy qo‘shish</span>
                    </div>
                </app-button>
            </div>

            <table class="w-full table-auto border-separate border-spacing-y-3">
                <the-sponsors-to-student-table-head
                    :ordinal-number="'#'"
                    :full-name="'f.i.sh'"
                    :allocated-sum="'Ajratilingan summa'"
                    :deeds="'Amallar'"
                />
                <the-sponsors-to-student-table-body
                    v-for="(sponsor, index) in getStudentSponsorsList"
                    :key="sponsor.id"
                    :ordinal-number="index + 1"
                    :full-name="sponsor.sponsor.full_name"
                    :sum="sponsor.summa"
                    @openSponsor="openSponsorModal(sponsor)"
                />
            </table>
        </div>
<pre>{{getStudentSponsorsList}}</pre>
        <!-- Modal edit-student start-->
        <app-modal
            @closeModal="$store.commit('UPDATE_STUDENT_MODAL')"
            :is-open="$store.state.isOpenStudentModal"
            :title="'Tahrirlash'"
        >
            <div class="space-y-7">
                <div class="space-y-7">
                    <app-input
                        :id="'name'"
                        :title="'F.I.Sh. (Familiya Ism Sharifingiz)'"
                        :model="student.full_name"
                    >
                        F.I.Sh. (Familiya Ism Sharifingiz)
                    </app-input>
                    <app-input
                        :id="'phone'"
                        :title="'Telefon raqam'"
                        :model="student.phone"
                    >
                        Telefon raqam
                    </app-input>
                    <app-select
                        :id="'otm'"
                        :title="'OTM'"
                    >
                        OTM
                        <option value="" selected>{{ student.institute }}</option>
                        <option v-for="institute in getInstitutions" :key="institute.id" value="">
                            {{ institute.name }}
                        </option>
                    </app-select>
                    <app-input
                        :id="'contract'"
                        :type="'number'"
                        :model="student.contract"
                    >
                        Kontrakt miqdori
                    </app-input>

                    <div class="border-b"></div>
                </div>
                <div class="flex justify-end">
                    <app-button>
                        <div class="flex items-center space-x-1">
                            <FolderArrowDownIcon class="w-4 h-4 stroke-2"/>
                            <button class="text-[14px]">Saqlash</button>
                        </div>
                    </app-button>
                </div>
            </div>
        </app-modal>
        <!-- Modal edit-student end-->

        <!-- Modal add-sponsor start-->
        <app-modal
            @closeModal="$store.commit('UPDATE_MODAL')"
            :is-open="$store.state.isOpenModal"
            :title="'Homiy qo‘shish'"
        >
            <div class="space-y-7">
                <app-select
                    :id="'name'"
                    :title="'F.I.Sh. (Familiya Ism Sharifingiz)'"
                >
                    <option value="" selected disabled>Homiyni tanlang</option>
                    <option
                        v-for="sponsor in getSponsorsList"
                        :key="sponsor.id"
                    >
                        {{ sponsor.full_name }}
                    </option>
                </app-select>
                <app-input
                    :id="'sum'"
                    :placeholder="'Summani kiriting'"
                    :type="'number'"
                >
                    Ajratilingan summa
                </app-input>

                <div class="border-b"></div>
                <div class="flex justify-end">
                    <app-button>
                        <div class="flex items-center space-x-1">
                            <PlusIcon class="w-4 h-4 stroke-2"/>
                            <button class="text-[14px]">Qo‘shish</button>
                        </div>
                    </app-button>
                </div>
            </div>
        </app-modal>
        <!-- Modal add-sponsor end-->

        <!-- Modal edit-sponsor start-->
        <app-modal
            @closeModal="$store.commit('OPEN_SPONSOR_MODAL')"
            :is-open="$store.state.isOpenSponsorModal"
            :title="'Homiy o\'zgartirish'"
        >
            <div class="space-y-7">
                <div class="space-y-7">
                    <app-select
                        :id="'name'"
                        :title="'F.I.Sh. (Familiya Ism Sharifingiz)'"
                        v-model="sponsor.fullName"
                    >
                        <option v-for="sponsor in getSponsorsList" :key="sponsor.id">
                            {{ sponsor.full_name }}
                        </option>
                        <option v-for="sponsor in getStudentSponsorsList" :key="sponsor.sponsor.id" selected>
                            {{ sponsor.sponsor.full_name }}
                        </option>
                    </app-select>

                    <app-input
                        :id="'sum'"
                        :placeholder="'Summani kiriting'"
                        :type="'number'"
                        :model="sponsor.sum"
                    >
                        Ajratilingan summa
                    </app-input>

                    <div class="border-b"></div>
                </div>
                <div class="flex justify-end space-x-4">
                    <app-button class="bg-red-100 text-red-500 hover:bg-red-500">
                        <div class="flex items-center space-x-1">
                            <TrashIcon class="w-4 h-4 stroke-2"/>
                            <button @click="removeSponsor(sponsor.id)" class="text-[14px]">Homiyni o‘chirish</button>
                        </div>
                    </app-button>
                    <app-button>
                        <div class="flex items-center space-x-1">
                            <FolderArrowDownIcon class="w-4 h-4 stroke-2"/>
                            <button class="text-[14px]">Saqlash</button>
                        </div>
                    </app-button>
                </div>
            </div>
        </app-modal>
        <!-- Modal edit-sponsor end-->

        <div class="w-full md:w-4/5 lg:w-3/5 px-3 md:px-7 pt-3 md:pt-7 mx-4 md:mx-auto">
            <img src="../assets/footer-image.png" alt="">
        </div>

    </div>
</template>

<script>
import {UserIcon, PlusIcon, TrashIcon, FolderArrowDownIcon} from '@heroicons/vue/24/outline'
import AppButton from "../components/Button/AppButton.vue";
import AppHorizontalRowWithTitle from "../components/AppHorizontalRowWithTitle.vue";
import AppGoBackHeader from "@/components/AppGoBackHeader.vue";
import AppInfoCardHeader from "@/components/Card/AppInfoCardHeader.vue";
import AppModal from "@/components/Modal/AppModal.vue";
import AppInput from "@/components/Form/AppInput.vue";
import AppSelect from "@/components/Form/AppSelect.vue";
import TheSponsorsToStudentTableHead from "@/components/Sponsor/TheSponsorsToStudentTableHead.vue";
import TheSponsorsToStudentTableBody from "@/components/Sponsor/TheSponsorsToStudentTableBody.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AddSponsorPage",
    components: {
        TheSponsorsToStudentTableBody,
        TheSponsorsToStudentTableHead,
        AppSelect,
        AppInput,
        AppModal,
        AppInfoCardHeader,
        AppGoBackHeader,
        AppHorizontalRowWithTitle,
        AppButton,
        UserIcon,
        PlusIcon,
        TrashIcon,
        FolderArrowDownIcon
    },
    computed: {
        ...mapGetters([
            'getSponsorsList',
            'getStudent',
            'getInstitutions',
            'getStudentSponsorsList'
        ])
    },
    data() {
        return {
            sponsor: {
                id: null,
                fullName: '',
                sum: 0,
                currency: ''
            },
            student: {
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
    methods: {
        ...mapActions([
            'fetchSponsors',
            'deleteSponsor',
            'fetchStudent',
            'fetchInstitutions',
            'fetchStudentSponsors',
            'fetchStudentSponsors'
        ]),
        removeSponsor(id) {
            console.log(id)
            alert('Homiy o\'chirildi')
            this.deleteSponsor(id)
            this.fetchSponsors()
        },
        openSponsorModal(data) {
            this.sponsor.id = data.id
            this.sponsor.fullName = data.full_name
            this.sponsor.sum = data.sum
            this.sponsor.currency = 'UZS'
            this.$store.commit('OPEN_SPONSOR_MODAL')
        },
        openStudentModal() {
            this.$store.commit('UPDATE_STUDENT_MODAL')
        }
    },
    mounted() {
        this.fetchStudent(this.$route.params.id)
            .then(() => {
                this.student.full_name = this.getStudent.full_name
                this.student.type = this.getStudent.type
                this.student.phone = this.getStudent.phone
                this.student.institute = this.getStudent.institute
                this.student.contract = this.getStudent.contract
                this.student.given = this.getStudent.given
                this.student.get_status_display = this.getStudent.get_status_display
            })
        this.fetchSponsors()
        this.fetchInstitutions()
        this.fetchStudentSponsors(this.$route.params.id)
        this.fetchStudentSponsors(this.$route.params.id)
    }
}
</script>

<style scoped>
body {
    overflow: hidden !important;
}
</style>