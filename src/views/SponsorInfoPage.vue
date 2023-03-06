<template>
    <div class="block md:flex justify-start items-center space-x-3 px-12 py-4 bg-[#FBFBFB]">
        <app-go-back-header class="mb-4 md:mb-0 text-2xl">{{ getSponsor.full_name }}</app-go-back-header>
        <app-status :title="getSponsor.get_status_display"/>
    </div>
    <div class="space-y-6 md:space-y-10 mt-6 md:mt-10">
        <div
            class="w-full md:w-4/5 lg:w-3/5 bg-white px-3 md:px-7 py-3 md:py-7 space-y-7
            rounded-xl shadow-sm mx-4 md:mx-auto"
        >
            <app-info-card-header
                :title="'Homiy haqida'"
                :btn-name="'Tahrirlash'"
                @openSponsor="openSponsor(getSponsor)"
            />

            <!-- Modal edit-sponsor start-->
            <app-modal
                @closeModal="$store.commit('OPEN_SPONSOR_MODAL')"
                :is-open="$store.state.isOpenSponsorModal"
                :title="'Homiy o\'zgartirish'"
            >
                <form @submit.prevent="editSponsor" class="space-y-7">
                    <div class="space-y-7">
                        <app-input
                            :id="'sum'"
                            :placeholder="'Summani kiriting'"
                            v-model:value="sponsor.full_name"
                        >
                            F.I.Sh. (Familiya Ism Sharifingiz)
                        </app-input>

                        <app-input
                            :id="'sum'"
                            :placeholder="'Summani kiriting'"
                            :type="'number'"
                            v-model:value="sponsor.sum"
                        >
                            Ajratilingan summa
                        </app-input>

                        <app-input
                            :id="'sum'"
                            :placeholder="'Telefon raqamni kiriting'"
                            v-model:value="sponsor.phone"
                        >
                            Telefon raqam
                        </app-input>

                        <div class="border-b"></div>
                    </div>
                    <div class="flex justify-end space-x-4">
                        <app-button class="bg-red-100 text-red-500 hover:bg-red-500">
                            <div class="flex items-center space-x-1">
                                <TrashIcon class="w-4 h-4 stroke-2"/>
                                <button @click="removeSponsor(sponsor.id)" class="text-[14px]">Homiyni o‘chirish
                                </button>
                            </div>
                        </app-button>
                        <app-button>
                            <div class="flex items-center space-x-1">
                                <FolderArrowDownIcon class="w-4 h-4 stroke-2"/>
                                <button type="submit" class="text-[14px]">Saqlash</button>
                            </div>
                        </app-button>

                    </div>
                </form>

            </app-modal>
            <!-- Modal edit-sponsor end-->

            <div class="flex space-x-5 items-center">
                <img
                    src="../components/icons/student-avatar.svg"
                    alt="student-photo"
                    class="p-3 border-2 border-blue-100 rounded bg-gray-100"
                >
                <h3 class="w-1/4">{{ getSponsor.full_name }}</h3>
            </div>

            <div class="w-full block md:flex justify-start space-y-4 md:space-y-0 md:space-x-8">
                <div class="w-1/2">
                    <h4 class="text-[12px] tracking-widest uppercase text-gray-400">Telefon raqam</h4>
                    <h4 class="uppercase">{{ getSponsor.phone }}</h4>
                </div>
                <div class="w-1/2 text-start">
                    <h4 class="text-[12px] tracking-widest uppercase text-gray-400">Homiylik summasi</h4>
                    <h4>{{ getSponsor.sum }} UZS</h4>
                </div>

            </div>
        </div>

    </div>

    <div class="w-full md:w-4/5 lg:w-3/5 px-3 md:px-7 pt-3 md:pt-7 mt-20 md:mt-44 md:mx-auto">
        <img src="../assets/footer-image.png" alt="">
    </div>
</template>

<script>
import {PlusIcon} from '@heroicons/vue/24/outline'
import AppGoBackHeader from "@/components/AppGoBackHeader.vue";
import AppStatus from "@/components/AppStatus.vue";
import AppInfoCardHeader from "@/components/Card/AppInfoCardHeader.vue";
import {mapActions, mapGetters} from "vuex";
import AppModal from "@/components/Modal/AppModal.vue";
import AppSelect from "@/components/Form/AppSelect.vue";
import AppInput from "@/components/Form/AppInput.vue";
import AppButton from "@/components/Button/AppButton.vue";
import {TrashIcon, FolderArrowDownIcon} from "@heroicons/vue/24/outline";

export default {
    name: "SponsorInfoPage",
    components: {
        AppButton,
        AppInput,
        AppSelect,
        AppModal,
        AppInfoCardHeader,
        AppStatus,
        AppGoBackHeader,
        PlusIcon,
        TrashIcon,
        FolderArrowDownIcon
    },
    computed: {
        ...mapGetters(['getSponsorsList', 'getSponsor'])
    },
    data() {
        return {
            sponsor: {
                id: null,
                full_name: '',
                sum: 0,
                phone: ''
            }
        }
    },
    methods: {
        ...mapActions(['fetchSponsors', 'fetchSponsor', 'deleteSponsor', 'putSponsor']),
        removeSponsor(sponsorId) {
            alert('Deleted this sponsor')
            this.deleteSponsor(sponsorId)
            this.$router.push('/sponsors')
            this.fetchSponsors()
        },
        editSponsor() {
            this.putSponsor(this.sponsor)
            alert('Edit this sponsor')
            this.$router.push('/sponsors')
            this.fetchSponsors()

        },
        openSponsor(data) {
            this.sponsor.id = data.id
            this.sponsor.full_name = data.full_name
            this.sponsor.sum = data.sum
            this.sponsor.phone = data.phone
            this.sponsor.currency = 'UZS'
            this.$store.commit('OPEN_SPONSOR_MODAL')
        },
    },
    mounted() {
        this.fetchSponsors()
        this.fetchSponsor(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>