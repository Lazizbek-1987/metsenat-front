<template>
    <div
        class="px-2 md:px-4 items-center text-center text-primary cursor-pointer bg-blue-100 hover:bg-primary
        rounded hover:text-white duration-500"
    >
        <button class="font-thin py-2 tracking-widest items-center">
            <slot class="text-xs"></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "AppButton"
}
</script>

<style scoped>

</style>