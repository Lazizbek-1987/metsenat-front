<template>
    <div class="px-12 pt-12 pb-7">
        <div class="flex justify-between max-w-screen-2xl container mx-auto">
            <app-sums-info-card
                :title="'Jami to‘langan summa'"
                :sum="'1 684 325 000'"
                :symbol="'UZS'"
                :style="'text-primary bg-blue-50'"
            />
            <app-sums-info-card
                :title="'Jami so‘ralgan summa'"
                :sum="'14 098 530 000'"
                :symbol="'UZS'"
                :style="'text-amber-500 bg-amber-50'"
            />
            <app-sums-info-card
                :title="'To‘lanishi kerak summa'"
                :sum="'12 414 205 000'"
                :symbol="'UZS'"
                :style="'text-red-500 bg-red-50'"
            />
        </div>
    </div>
</template>

<script>
import AppSumsInfoCard from "../components/AppSumsInfoCard.vue";

export default {
    name: "DashboardPage",
    components: {AppSumsInfoCard}
}
</script>

<style scoped>

</style>