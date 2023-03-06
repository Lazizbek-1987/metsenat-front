<template>
    <div
        @click="openModal()"
        class="relative flex items-center px-6 py-2.5 bg-gray-200 rounded hover:text-primary hover:bg-blue-100
        cursor-pointer duration-500">
        <FunnelIcon class="w-4 h-4 left-6 top-3 absolute"/>
        <h6 class="pl-6 text-sm">Filter</h6>
    </div>
</template>

<script>
import {FunnelIcon} from '@heroicons/vue/24/outline'

export default {
    name: "AppFilter",
    components: {FunnelIcon},
    methods: {
        openModal() {
            this.$emit('openFilter')
        }
    }
}
</script>

<style scoped>

</style>