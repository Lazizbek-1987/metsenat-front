<template>
    <div class="space-y-2">
        <label :for="id" class="text-[#1D1D1F] uppercase tracking-widest">
            <slot></slot>
        </label>
        <input
            class="w-full px-4 py-2 border border-[#E0E7FF] bg-[#F9FAFF] focus:bg-white duration-500 outline-0 rounded-lg"
            :type="type"
            :placeholder="placeholder"
            :id="id"
            :value="value"
            @input="$emit('update:value', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    name: "AppInput",
    props: {
        type: {type: String, default: 'text'},
        placeholder: {type: String},
        id: {id: Number},
        value: {type: [String, Number]}
    },
    emits: ['update:value']
}
</script>

<style scoped>

</style>