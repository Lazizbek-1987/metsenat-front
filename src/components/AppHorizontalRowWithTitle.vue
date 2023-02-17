<template>
    <div class="relative">
        <hr class="border">
        <h1 class="absolute -top-2 px-3 py-0 text-[12px] text-primary bg-blue-100">
            <slot></slot>
        </h1>
    </div>
</template>

<script>
export default {
    name: "AppHorizontalRowWithTitle",
}
</script>

<style scoped>

</style>