<template>
    <div>
        <input
            :type="type"
            :placeholder="placeholder"
            :id="id"
            class="w-full px-4 py-2 border border-[#E0E7FF] bg-[#F9FAFF] focus:bg-white duration-500 outline-0 rounded-lg"
        >
    </div>
</template>

<script>
export default {
    name: "AppInput",
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String
        },
        id: {
            id: String
        }
    }
}
</script>

<style scoped>

</style>