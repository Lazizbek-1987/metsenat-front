<template>
    <tbody class="border border-primary outline-amber-500">
    <tr class="pt-12 py-24 bg-gray-100 hover:bg-white duration-500">
        <td class="my-24 text-center text-[15px] border-r-0 border-2 border-blue-200 text-[#1D1D1F] py-6 pl-3 rounded-l-lg">
            {{ ordinalNumber }}
        </td>
        <td class="my-24 text-start text-[15px] border-y-2 border-y-blue-200 text-[#1D1D1F] py-6 pl-3">{{
                fullName
            }}
        </td>
        <td class="text-center text-[15px] border-y-2 border-y-blue-200 text-[#1D1D1F] py-6">
            {{ sum }}
            <span class="text-gray-400"> {{ currency }}</span>
        </td>
        <td
            @click="openModal()"
            class="text-center border-l-0 border-2 border-blue-200 rounded-r-lg">
            <PencilSquareIcon class="w-6 h-6 cursor-pointer mx-auto text-primary"/>
        </td>
    </tr>
    </tbody>
</template>

<script>
import {FolderArrowDownIcon, PencilSquareIcon, TrashIcon} from "@heroicons/vue/24/outline";
import AppModal from "@/components/Modal/AppModal.vue";
import AppSelect from "@/components/Form/AppSelect.vue";
import AppInput from "@/components/Form/AppInput.vue";
import AppButton from "@/components/Button/AppButton.vue";

export default {
    name: "TheSponsorsToStudentTableBody",
    components: {AppButton, AppInput, AppSelect, AppModal, FolderArrowDownIcon, PencilSquareIcon, TrashIcon},
    props: {
        ordinalNumber: {type: Number},
        fullName: {type: String},
        sum: {type: Number},
        currency: {type: String},
        link: {type: String},
    },
    methods: {
        openModal() {
            this.$emit('openSponsor')
        }
    }
}
</script>

<style scoped>

</style>