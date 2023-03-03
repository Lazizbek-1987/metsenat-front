<template>
    <div
        class="flex justify-center relative py-3 space-x-2 border border-[#E0E7FF] rounded items-center
        cursor-pointer hover:border-primary duration-500"
        :class="this.$store.state.isCheck ? 'border-primary' : ''"
    >
        <div class="">{{ sums }}</div>
        <div class="text-primary text-sm font-thin">{{ currency }}</div>
        <div v-if="this.$store.state.isCheck" @click="check()"
             class="absolute px-1 py-1 bg-primary text-white rounded-full -top-2 -right-2"
        >
            <CheckIcon class="w-2.5 h-2.5"/>
        </div>
    </div>
</template>

<script>
import {CheckIcon} from "@heroicons/vue/20/solid";

export default {
    name: "AppFilterSumCard",
    components: {CheckIcon},
    props: {
        sums: {type: String},
        currency: {type: String}
    },
    methods: {
        check() {
            this.$emit('check')
        }
    }
}
</script>

<style scoped>

</style>