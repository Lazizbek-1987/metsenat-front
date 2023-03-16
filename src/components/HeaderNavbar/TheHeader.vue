<template>
    <header class="bg-white px-12 py-5">
        <div class="flex justify-between items-center max-w-screen-2xl container mx-auto">
            <router-link to="/" class="flex items-center space-x-3">
                <img src="../../assets/logo.svg" alt="metsenat-logo" class="w-auto h-6">
                <img src="../../assets/logoText.svg" alt="metsenat-logo-text" class="w-auto h-6">
            </router-link>
            <div class="flex items-center items-center space-x-11">
                <div class="relative rounded px-2 py-2 items-center bg-gray-200">
                    <h3 class="px-4 pr-12">Shohrux</h3>
                    <div class="absolute right-1 top-1 rounded bg-[#00AE69] p-1 items-center">
                        <img src="../icons/user.svg" alt="user-logo" class="">
                    </div>
                </div>
                <ArrowRightOnRectangleIcon
                    class="w-8 h-8 text-gray-400 cursor-pointer hover:text-primary duration-500"
                    @click="logout"
                />
            </div>
        </div>


    </header>
</template>

<script>
import {ArrowRightOnRectangleIcon, UserIcon} from '@heroicons/vue/24/outline'

export default {
    name: "TheHeader",
    components: {ArrowRightOnRectangleIcon, UserIcon},
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

</style>