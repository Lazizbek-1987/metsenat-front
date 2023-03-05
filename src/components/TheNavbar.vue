<template>
    <div class="bg-[#FBFBFB] px-12 py-6">
        <div class="flex justify-between items-center max-w-screen-2xl container mx-auto">
            <the-nav-link />
            <div class="flex space-x-5">
                <app-search-input :placeholder="'Izlash'"/>
                <app-filter @openFilter="openFilter()"/>
            </div>

            <!-- Filter modal start-->
            <app-modal
                @closeModal="this.$store.commit('OPEN_FILTER_MODAL')"
                :is-open="this.$store.state.isOpenFilterModal"
                :title="'Filter'"
            >
                <app-select
                    :title="'Ariza holati'"
                >
                    <option value="" disabled selected>Barchasi</option>
                    <option v-for="item in items" :key="item.id" :value="item">
                        {{ item.status }}
                    </option>
                </app-select>

                <h1 class="tracking-widest uppercase">Homiylik summasi</h1>
                <div class="grid grid-cols-4 gap-3">
                    <app-button :class="'col-span-1'">
                        Barchasi
                    </app-button>
                    <app-filter-sum-card
                        :class="'col-span-1'"
                        v-for="sum in sums"
                        :key="sum.id"
                        :sums="sum.amount"
                        :currency="sum.currency"
                        @click="check(sum.id)"
                    >

                    </app-filter-sum-card>
                </div>

                <app-input
                    :class="'w-1/2 focus:border-primary'"
                    :id="'date'"
                    :type="'date'"
                >
                    <span class="uppercase tracking-widest">Sana</span>
                </app-input>
                <div class="border-b"></div>

                <div class="flex justify-end space-x-4">
                    <app-button :class="'flex items-center space-x-1 border border-primary bg-white'">
                        <XMarkIcon class="w-4 h-4"/>
                        <div>Tozalash</div>
                    </app-button>
                    <app-button :class="'flex items-center space-x-1 border border-primary bg-white'">
                        <EyeIcon class="w-4 h-4"/>
                        <div>Natijalarni ko‘rish</div>
                    </app-button>
                </div>
            </app-modal>
            <!-- Filter modal end-->

        </div>
    </div>
</template>

<script>
import AppButtonLink from "./AppButtonLink.vue";
import AppSearchInput from "./AppSearchInput.vue";
import AppModal from "./AppModal.vue";
import TheNavLink from "./TheNavLink.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppFilterSumCard from "@/components/AppFilterSumCard.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
import {XMarkIcon, EyeIcon} from "@heroicons/vue/24/outline";
import AppFilter from "@/components/AppFilter.vue";

export default {
    name: "TheNavbar",
    components: {
        AppFilter,
        AppButton,
        AppInput,
        AppFilterSumCard,
        AppSelect,
        TheNavLink,
        AppModal,
        AppSearchInput,
        AppButtonLink,
        XMarkIcon,
        EyeIcon
    },
    methods: {
        openFilter() {
            this.$store.commit('OPEN_FILTER_MODAL')
        },
        check(id) {
            this.$store.commit('CHECK_FILTER')
        }
    }
}
</script>

<style scoped>

</style>