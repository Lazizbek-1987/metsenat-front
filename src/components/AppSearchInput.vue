<template>
    <div class="relative">
        <MagnifyingGlassIcon class="w-4 h-4 left-2 top-2.5 absolute text-gray-400"/>
        <input
            type="text"
            :placeholder="placeholder"
            class="px-8 py-2 text-sm border border-gray-200 bg-gray-200 rounded outline-0 focus:border-primary duration-500
            focus:bg-[#F9FAFF] placeholder:tracking-widest"
        >
    </div>
</template>

<script>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/outline'
export default {
    name: "AppSearchInput",
    components: {MagnifyingGlassIcon},
    props: {
        placeholder: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>