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
                <form action="" @submit.prevent="putSponsor">
                    <div class="space-y-7">
                        <div class="space-y-7">
                            <app-select
                                :id="'name'"
                                :title="'F.I.Sh. (Familiya Ism Sharifingiz)'"
                                :v-model="sponsor.full_name"
                            >
                                <option value="" selected>{{ getSponsor.full_name }}</option>
                                <option v-for="sponsor in getSponsorsList" :key="sponsor.is" :value="sponsor.full_name">
                                    {{ sponsor.full_name }}
                                </option>
                            </app-select>

                            <app-input
                                :id="'sum'"
                                :placeholder="'Summani kiriting'"
                                :type="'number'"
                                :model="sponsor.sum"
                                :v-model="sponsor.sum"
                            >
                                Ajratilingan summa
                            </app-input>

                            <app-input
                                :id="'sum'"
                                :placeholder="'Telefon raqamni kiriting'"
                                :model="sponsor.phone"
                                :v-model="sponsor.phone"
                            >
                                Telefon raqam
                            </app-input>

                            <div class="border-b"></div>
                        </div>
                        <div class="flex justify-end space-x-4">
                            <app-button class="bg-red-100 text-red-500 hover:bg-red-500">
                                <div class="flex items-center space-x-1">
                                    <TrashIcon class="w-4 h-4 stroke-2"/>
                                    <button @click="removeSponsor(sponsor.id)" class="text-[14px]">Homiyni o‘chirish</button>
                                </div>
                            </app-button>
                            <app-button>
                                <div class="flex items-center space-x-1">
                                    <FolderArrowDownIcon class="w-4 h-4 stroke-2"/>
                                    <button type="submit" @click="editSponsor" class="text-[14px]">Saqlash</button>
                                </div>
                            </app-button>


                        </div>
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
import AppInfoCardHeader from "@/components/AppInfoCardHeader.vue";
import {mapActions, mapGetters} from "vuex";
import AppModal from "@/components/AppModal.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
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
              currency: '',
              phone: ''
          }
      }
    },
    methods: {
        ...mapActions(['fetchSponsors', 'fetchSponsor', 'deleteSponsor', 'putSponsor']),
        removeSponsor(sponsorId) {
            alert('Deleted this sponsor')
            this.deleteSponsor(sponsorId)
        },
        editSponsor() {
            this.putSponsor({
                id: this.sponsor.id,
                full_name: this.sponsor.full_name,
                sum: this.sponsor.sum,
                phone: this.sponsor.phone
            })
            alert('Edit this sponsor')
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