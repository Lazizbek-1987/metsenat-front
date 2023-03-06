<template>
    <div class="flex justify-start items-center w-[381px] px-6 py-7 space-x-4 bg-white rounded-lg hover:scale-105
         duration-300">
        <div :class="style" class="p-2 h-min rounded-xl">
            <BanknotesIcon class="w-6 h-6"/>
        </div>
        <div>
            <div class="text-[12px] text-gray-400">{{ title }}</div>
            <div class="flex space-x-2">
                <div>{{ sum }}</div>
                <div class="text-gray-400">{{ symbol }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {BanknotesIcon} from '@heroicons/vue/24/outline'

export default {
    name: "AppSumsInfoCard",
    components: {BanknotesIcon},
    props: {
        title: {
            type: String
        },
        sum: {
            title: Number
        },
        symbol: {
            type: String
        },
        style: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>