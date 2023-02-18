<template>
    <div class="max-w-screen-2xl container mx-auto">
        <div class="flex justify-center items-center min-h-screen">
            <div class="space-y-12 items-center">
                <the-login-header/>
                <div class="flex justify-center items-center">
                    <div class="bg-white p-8 rounded-lg space-y-8">
                        <h1 class="text-2xl text-[#28293D] font-bold">Kirish</h1>
                        <div class="w-96 space-y-6">
                            <div class="space-y-2">
                                <app-input
                                    :type="'text'"
                                    :placeholder="'Login'"
                                    :id="'email'"
                                >
                                    LOGIN
                                </app-input>
                            </div>
                            <div class="space-y-2">
                                <app-input
                                    :type="'password'"
                                    :placeholder="'Parol'"
                                    :id="'password'"
                                >
                                    PAROL
                                </app-input>
                            </div>
                            <the-captcha/>
                            <app-button :class="'px-6 py-2 rounded-lg'">Kirish</app-button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import TheLoginHeader from "../components/TheLoginHeader.vue";
import AppInput from "../components/AppInput.vue";
import AppButton from "../components/AppButton.vue";
import TheCaptcha from "../components/TheCaptcha.vue";

export default {
    name: "LoginPage",
    components: {TheCaptcha, AppButton, AppInput, TheLoginHeader},
}
</script>

<style scoped>

</style>