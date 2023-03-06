<template>
    <router-link
        :to="link"
        class="py-2 text-center border border-primary bg-white text-primary cursor-pointer duration-300 px-12 text-sm
        tracking-widest"
    >
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    name: "AppButtonLink",
    props: {
        link: {type: String}
    }
}
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
    background-color: #2E5BFF;
    cursor: pointer;
    color: white;
}
</style>