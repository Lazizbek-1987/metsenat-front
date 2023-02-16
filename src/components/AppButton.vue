<template>
    <div class="text-center border-2 border-primary bg-white text-primary cursor-pointer hover:bg-primary text-primary
         hover:text-white duration-500 items-center"
    >
        <button class="text-lg font-bold tracking-widest">
            <slot></slot>
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