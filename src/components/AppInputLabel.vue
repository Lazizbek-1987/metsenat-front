<template>
    <div>
        <label
            :for="forLabel"
            class="text-[#1D1D1F]"
        >
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: "AppInputLabel",
    props: {
        forLabel: {
            type: String
        },
        title: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>