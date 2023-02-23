<template>
    <div v-if="isOpen">
        <div class="fixed bg-white z-20 w-96 h-48 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <h1>Hello</h1>
        </div>
        <div @click="closeModal" class="fixed inset-0 bg-gray-500 opacity-25 z-10">

        </div>
    </div>

</template>

<script>
export default {
    name: "AppModal",
    props: {
        title: {
            type: String
        },
        isOpen: {
            type: Boolean
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style scoped>

</style>