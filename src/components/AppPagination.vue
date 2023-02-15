<template>
    <nav class="inline-flex space-x-2 shadow-sm" aria-label="Pagination">
        <a href="#"
           class="relative inline-flex items-center rounded border-2 border-gray-300 bg-white px-2 py-2
                       bg-white text-sm text-gray-500 hover:text-primary hover:border-primary duration-500 focus:z-20">
            <ChevronLeftIcon class="w-5 h-5"/>
        </a>
        <a href="#" aria-current="page"
           class="relative z-10 inline-flex items-center rounded border-2 border-primary px-4 py-2 text-sm
                        bg-white text-sm text-primary focus:z-20">1</a>
        <a href="#"
           class="relative inline-flex items-center rounded border-2 border-gray-300 bg-white px-4 py-2
                       hover:border-primary duration-500 bg-white text-sm text-gray-500 hover:text-primary focus:z-20">2</a>
        <span
            class="relative inline-flex items-center rounded border-2 border-gray-300 bg-white px-3 py-2
                        bg-white text-sm text-gray-700">...</span>
        <a href="#"
           class="relative hidden items-center rounded border-2 border-gray-300 bg-white px-4 py-2
                       hover:border-primary duration-500 bg-white text-sm text-gray-500 hover:text-primary focus:z-20 md:inline-flex">9</a>
        <a href="#"
           class="relative inline-flex items-center rounded border-2 border-gray-300 bg-white px-3.5 py-2
                       hover:border-primary duration-500 bg-white text-sm text-gray-500 hover:text-primary focus:z-20">10</a>
        <a href="#"
           class="relative inline-flex items-center rounded border-2 border-gray-300 bg-white px-2 py-2
                       hover:border-primary duration-500 bg-white text-sm text-gray-500 hover:text-primary focus:z-20">
            <ChevronRightIcon class="w-5 h-5"/>
        </a>
    </nav>
</template>

<script>
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/24/outline'
export default {
    name: "AppPagination",
    components: {
        ChevronLeftIcon,
        ChevronRightIcon
    },
}
</script>

<style scoped>

</style>