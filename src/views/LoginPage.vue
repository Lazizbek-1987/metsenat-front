<template>
    <div class="max-w-screen-2xl container mx-auto">
        <div class="flex justify-center items-center min-h-screen">
            <div class="space-y-12 items-center">
                <the-login-header/>
                <div class="flex justify-center items-center">
                    <div class="bg-white p-8 rounded-lg space-y-8">
                        <h1 class="text-2xl text-[#28293D] font-bold">Kirish</h1>
                        <form class="w-96 space-y-6" @submit.prevent="login">
                            <div class="space-y-2">
                                <app-input
                                    :type="'text'"
                                    :placeholder="'Login'"
                                    :id="'email'"
                                    v-model:value="form.username"
                                >
                                    LOGIN
                                </app-input>
                            </div>
                            <div class="space-y-2">
                                <app-input
                                    :type="'password'"
                                    :placeholder="'Parol'"
                                    :id="'password'"
                                    v-model:value="form.password"
                                >
                                    PAROL
                                </app-input>
                            </div>
                            <the-captcha/>
                            <app-button
                                :class="'px-6 py-2 rounded-lg'"
                                :type="'submit'"
                                @click="login"
                            >
                                Kirish
                            </app-button>
                        </form>
                    </div>
                </div>
            </div>

<!--            <pre>{{getToken}}</pre>-->

        </div>
    </div>
</template>

<script>

import TheLoginHeader from "../components/Login/TheLoginHeader.vue";
import AppInput from "../components/Form/AppInput.vue";
import AppButton from "../components/Button/AppButton.vue";
import TheCaptcha from "../components/Login/TheCaptcha.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "LoginPage",
    components: {TheCaptcha, AppButton, AppInput, TheLoginHeader},
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getToken'])
    },
    methods: {
        ...mapActions(['fetchToken']),
        login() {
            if (this.form.username && this.form.password) {
                this.fetchToken(this.form)
                    .then(() => {
                        alert('Successful')
                        this.$router.push('/')
                    })
                    .catch(() => {
                        alert('Username or Password wrong')
                        this.$router.push('/login')
                    })
            }
        }
    }
}
</script>

<style scoped>

</style>