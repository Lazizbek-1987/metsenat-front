<template>
    <div class="px-12 py-10">
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
                v-for="(sponsor, index) in sponsors"
                :key="index"
                :first-body="index + 1"
                :second-body="sponsor.fullName"
                :third-body="sponsor.phoneNumber"
                :fourth-body="sponsor.sponsorshipAmount"
                :fifth-body="sponsor.spentAmount"
                :sixth-body="sponsor.date"
                :seventh-body="sponsor.status"
                :currency="'UZS'"
                :style="sponsor.status === 'Yangi' ? 'text-primary'
                    : sponsor.status === 'Moderatsiyada' ? 'text-amber-500'
                    : sponsor.status === 'Tasdiqlangan' ? 'text-green-500'
                    : 'text-gray-400'"
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
import {ChevronLeftIcon, ChevronRightIcon, EyeIcon} from '@heroicons/vue/24/outline'
import AppPagination from "../components/AppPagination.vue";
import AppSponsorsTableHead from "../components/AppSponsorsTableHead.vue";
import AppSponsorsTableBody from "../components/AppSponsorsTableBody.vue";

export default {
    name: "SponsorsPage",
    components: {
        AppSponsorsTableBody,
        AppSponsorsTableHead,
        AppPagination,
        EyeIcon,
        ChevronLeftIcon,
        ChevronRightIcon
    },
    data() {
        return {
            sponsors: [
                {
                    fullName: 'Alimov Abror Xabibullayevich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '30 000 000',
                    spentAmount: '0',
                    date: '15.01.2021',
                    status: 'Yangi'
                },
                {
                    fullName: 'Saimov Rustam Saimjonovich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '1 000 000',
                    spentAmount: '0',
                    date: '02.02.2021',
                    status: 'Moderatsiyada'
                },
                {
                    fullName: 'Sanginov Otabek Muratovich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '5 000 000',
                    spentAmount: '5 000 000',
                    date: '20.04.2021',
                    status: 'Tasdiqlangan'
                },
                {
                    fullName: 'Nazarov Sanjar Olimovich',
                    phoneNumber: '+99899 973-72-60',
                    sponsorshipAmount: '7 000 000',
                    spentAmount: '7 000 000',
                    date: '03.05.2021',
                    status: 'Bekor qilingan'
                },
            ]
        }
    }
}
</script>

<style>
thead tr {
    padding-bottom: 50px !important;
}
</style>