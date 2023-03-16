<template>
    <button
        class="px-2 py-2 items-center text-center text-primary cursor-pointer bg-blue-100 hover:bg-primary
        rounded hover:text-white duration-500 font-thin tracking-widest items-center"
        :type="type"
    >
        <slot class="text-xs"></slot>
    </button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        type: {type: String, default: 'submit'}
    }
}
</script>

<style scoped>

</style>