<template>
    <div
        class="px-4 rounded font-thin text-sm"
        :class="title === 'Yangi' ? 'text-primary bg-blue-100' : title === 'Moderatsiyada' ? 'text-amber-500 bg-amber-100'
        : title === 'Tasdiqlangan' ? 'text-green-500 bg-green-100' : 'text-gray-500 bg-gray-200'"
    >
        {{ title }}
    </div>
</template>

<script>
export default {
    name: "AppStatus",
    props: {
        title: {type: String}
    }
}
</script>

<style scoped>

</style>