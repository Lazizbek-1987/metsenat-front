<template>
    <tbody>
    <tr class="pt-12 py-24 bg-white">
        <td class="my-24 text-center text-[15px] text-[#1D1D1F] py-6 pl-3 rounded-l-lg">{{ ordinalNumber }}</td>
        <td class="my-24 text-start text-[15px] text-[#1D1D1F] py-6 pl-3">{{ fullName }}</td>
        <td class="text-start text-[15px] text-[#1D1D1F] py-6">{{ typeOfStudent }}</td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">{{ university }}</td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">
            {{ allocatedAmount }}
            <span class="text-gray-400"> {{ currency }}</span></td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">{{ contractAmount }}
            <span class="text-gray-400">{{ currency }}</span></td>
        <td class="text-center rounded-r-lg">
            <router-link :to="link">
                <img
                    src="./icons/eye.svg"
                    class="text-primary w-5 h-5 mx-auto cursor-pointer hover:scale-125 duration-500"
                />
            </router-link>
        </td>
    </tr>
    </tbody>
</template>

<script>
export default {
    name: "AppStudentsTableBody",
    props: {
        ordinalNumber: {type: Number},
        fullName: {type: String},
        typeOfStudent: {type: String},
        university: {type: String},
        allocatedAmount: {type: Number},
        contractAmount: {type: Number},
        currency: {type: String},

        link: {type: String}
    }
}
</script>

<style scoped>

</style>