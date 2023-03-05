<template>
    <the-navbar />
    <div class="px-12 pt-12 pb-7">
        <div
            class="flex justify-between max-w-screen-2xl container mx-auto"
            v-for="total in getDashboard"
            :key="total"
        >
            <app-sums-info-card
                v-for="(title, index) in titles" :key="index"
                :title="title"
                :sum="total"
                :symbol="'UZS'"
                :style="'text-primary bg-blue-50'"
            />
<!--            <app-sums-info-card-->
<!--                :title="'Jami so‘ralgan summa'"-->
<!--                :sum="total_need"-->
<!--                :symbol="'UZS'"-->
<!--                :style="'text-amber-500 bg-amber-50'"-->
<!--            />-->
<!--            <app-sums-info-card-->
<!--                :title="'To‘lanishi kerak summa'"-->
<!--                :sum="total_must_pay"-->
<!--                :symbol="'UZS'"-->
<!--                :style="'text-red-500 bg-red-50'"-->
<!--            />-->
        </div>
        <pre>{{getDashboard}}</pre>
    </div>
</template>

<script>
import AppSumsInfoCard from "../components/AppSumsInfoCard.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "DashboardPage",
    data() {
        return {
            titles: ['Jami to‘langan summa', 'Jami so‘ralgan summa', 'To‘lanishi kerak summa']
        }
    },
    components: {TheNavbar, AppSumsInfoCard},
    computed: {...mapGetters(['getDashboard'])},
    methods: {...mapActions(['fetchDashboard'])},
    mounted() {
        this.fetchDashboard()
    }
}
</script>

<style scoped>

</style>