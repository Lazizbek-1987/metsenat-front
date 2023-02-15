<template>
    <div class="py-2 text-center border border-primary bg-white text-primary cursor-pointer hover:bg-primary
         text-primary hover:text-white duration-500"
    >
        <a href="#" class="px-12 text-sm tracking-widest">
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    name: "AppButtonLink",
}
</script>

<style scoped>

</style>