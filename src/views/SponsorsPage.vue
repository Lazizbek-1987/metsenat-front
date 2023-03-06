<template>
    <the-navbar />
    <div class="px-12 py-12">
        <table class="w-full table-auto border-separate border-spacing-y-3">
            <app-sponsors-table-head
                :first-head="'#'"
                :second-head="'f.i.sh'"
                :third-head="'Tel.Raqami'"
                :fourth-head="'Homiylik summasi'"
                :fifth-head="'Sarflangan summa'"
                :sixth-head="'Sana'"
                :seventh-head="'Holati'"
                :eighth-head="'Amallar'"

            />
            <app-sponsors-table-body
                v-for="(sponsor, index) in getSponsorsList"
                :key="sponsor.id"
                :first-body="index + 1"
                :id="sponsor.id"
                :second-body="sponsor.full_name"
                :third-body="sponsor.phone"
                :fourth-body="sponsor.sum"
                :fifth-body="sponsor.spent"
                :sixth-body="sponsor.created_at.slice(0, 10)"
                :seventh-body="sponsor.get_status_display"
                :currency="'UZS'"
                :style="sponsor.get_status_display === 'Yangi' ? 'text-primary'
                    : sponsor.get_status_display === 'Moderatsiyada' ? 'text-amber-500'
                    : sponsor.get_status_display === 'Tasdiqlangan' ? 'text-green-500'
                    : 'text-gray-400'"
            />
        </table>
        <div class="flex justify-between items-center mt-7">
            <div>
                <p class="text-sm">{{ getSponsorsCount }} tadan 1-10 ko‘rsatilmoqda</p>
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
import AppSponsorsTableHead from "../components/Sponsor/AppSponsorsTableHead.vue";
import AppSponsorsTableBody from "../components/Sponsor/AppSponsorsTableBody.vue";
import TheNavbar from "@/components/HeaderNavbar/TheNavbar.vue";
import {mapActions, mapGetters} from "vuex";
import AppButton from "@/components/Button/AppButton.vue";
import AppModal from "@/components/Modal/AppModal.vue";
import AppSelect from "@/components/Form/AppSelect.vue";
import AppInput from "@/components/Form/AppInput.vue";

export default {
    name: "SponsorsPage",
    components: {
        AppInput,
        AppSelect,
        AppModal,
        AppButton,
        TheNavbar,
        AppSponsorsTableBody,
        AppSponsorsTableHead,
        AppPagination,
        EyeIcon,
        ChevronLeftIcon,
        ChevronRightIcon,
        PlusIcon
    },
    computed: {
        ...mapGetters(['getSponsorsList', 'getSponsorsCount'])
    },
    data() {
        return {}
    },
    methods: {
        ...mapActions(['fetchSponsors'])
    },
    mounted() {
        this.fetchSponsors()
    }
}
</script>

<style>
thead tr {
    padding-bottom: 50px !important;
}
</style>