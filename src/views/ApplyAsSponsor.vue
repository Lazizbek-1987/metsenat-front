<template>
    <div class="">
        <div class="flex justify-between bg-white items-center">

            <div class="flex justify-between px-12 py-8 space-x-2 items-center">
                <img src="../assets/logo.svg" alt="metsenat-logo" class="h-6">
                <h1 class="text-xl font-bold tracking-widest">METSENAT</h1>
                <div class="px-2 text-white text-sm rounded bg-secondary">CLUB</div>
            </div>

            <ul class="flex space-x-10 items-center text-xs">
                <li v-for="link in links" :key="link.title">
                    <a href="" class="hover:text-primary duration-300">{{ link.title }}</a>
                </li>
                <li class="flex items-center space-x-1 cursor-pointer hover:text-primary duration-300">
                    <ArrowRightOnRectangleIcon class="w-5 h-5"/>
                    <a href="">Kirish</a>
                </li>
                <li class="items-center">
                    <a
                        href=""
                        class="px-8 py-1.5 text-primary border border-primary rounded hover:bg-primary hover:text-white
                    duration-300"
                    >
                        Ro‘yxatdan o’tish
                    </a>
                </li>
            </ul>
        </div>
        <div class="flex justify-between">
            <div class="w-1/2 pl-12 py-20 bg-[#FBFBFB]">
                <p>Homiy sifatida ariza topshirish</p>
            </div>
            <div class="w-1/2 pr-12 py-20 bg-[#F5F5F7]">
                <p>Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni oʻsha paytda ularni oʻzlari
                    oʻrgangan muhitdan ajratib qoʻymaslik kerak.</p>
            </div>
        </div>
    </div>


</template>

<script>
import {ArrowRightOnRectangleIcon} from "@heroicons/vue/24/outline";

export default {
    name: "ApplyAsSponsor",
    components: {ArrowRightOnRectangleIcon},
    data() {
        return {
            links: [
                {title: 'Asosiy', link: '#'},
                {title: 'Grantlar', link: '#'},
                {title: 'Soliq imtiyozlari', link: '#'}
            ]
        }
    }
}
</script>

<style scoped>

</style>