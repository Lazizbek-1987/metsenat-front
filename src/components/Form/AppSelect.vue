<template>
    <div class="space-y-2">
        <label class="text-[#1D1D1F] uppercase tracking-widest">{{ title }}</label>
        <select
            class="w-full px-4 py-2 border border-[#E0E7FF] bg-[#F9FAFF] focus:bg-white duration-500 outline-0
            font-thin rounded-lg focus:border-primary"
            :v-model="model"
        >
            <slot></slot>
        </select>
    </div>
</template>

<script>
export default {
    name: "AppSelect",
    props: {
        title: {type: String},
        model: {type: [String, Number]}
    }
}
</script>

<style scoped>

</style>