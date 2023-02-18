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
            {{ allocatedSum }}
            <span class="text-gray-400"> {{ currency }}</span>
        </td>
        <td
            data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
            class="text-center border-l-0 border-2 border-blue-200 rounded-r-lg">
            <PencilSquareIcon class="w-6 h-6 cursor-pointer mx-auto text-primary"/>
        </td>
    </tr>
    </tbody>

    <app-modal :title="'Homiyni tahrirlash'">
        <div class="space-y-7">
            <app-select
                :id="'name'"
                :title="'F.I.Sh. (Familiya Ism Sharifingiz)'"
            >
                Homiyni tanlang
            </app-select>
            <app-input
                :id="'sum'"
                :placeholder="'Summani kiriting'"
                :type="'number'"
            >
                Ajratilingan summa
            </app-input>

            <div class="border-b"></div>

            <!-- Modal content start-->
            <div class="flex justify-end space-x-4" data-bs-dismiss="modal">
                <app-button class="bg-red-100 text-red-500 hover:bg-red-500">
                    <div class="flex items-center space-x-1">
                        <TrashIcon class="w-4 h-4 stroke-2"/>
                        <button class="text-[14px]">Homiyni o‘chirish</button>
                    </div>
                </app-button>
                <app-button>
                    <div class="flex items-center space-x-1">
                        <FolderArrowDownIcon class="w-4 h-4 stroke-2"/>
                        <button class="text-[14px]">Saqlash</button>
                    </div>
                </app-button>
            </div>
            <!-- Modal content end-->
        </div>
    </app-modal>
</template>

<script>
import {FolderArrowDownIcon, PencilSquareIcon, TrashIcon} from "@heroicons/vue/24/outline";
import AppModal from "@/components/AppModal.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

export default {
    name: "TheSponsorsToStudentTableBody",
    components: {AppButton, AppInput, AppSelect, AppModal, FolderArrowDownIcon, PencilSquareIcon, TrashIcon},
    props: {
        ordinalNumber: {type: Number},
        fullName: {type: String},
        allocatedSum: {type: String},
        currency: {type: String},
        link: {type: String},
    }
}
</script>

<style scoped>

</style>