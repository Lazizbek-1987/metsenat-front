<template>
    <div class="py-2 text-center border border-primary bg-white text-primary cursor-pointer hover:bg-primary
         text-primary hover:text-white duration-500"
    >
        <router-link :to="link" class="px-12 text-sm tracking-widest">
            <slot></slot>
        </router-link>
    </div>
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
.router-link-active .router-link-exact-active {
    color: red !important;
}
</style>