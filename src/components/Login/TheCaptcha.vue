<template>
    <div class="flex justify-between items-center space-y-2 px-4 py-2 rounded-lg border-2
                             border-gray-200 bg-gray-50">
        <div class="flex space-x-3 items-center">
            <input type="checkbox" id="check" class="h-8 w-8 border cursor-pointer">
            <label for="check" class="text-[#000000] cursor-pointer">I’m not a robot</label>
        </div>
        <div class="">
            <img src="../icons/captcha.svg" alt="" class="mx-auto">
            <p class="text-xs text-gray-300">reCAPTCHA</p>
            <p class="text-xs text-gray-300">Privacy - Terms</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheCaptcha"
}
</script>

<style scoped>

</style>