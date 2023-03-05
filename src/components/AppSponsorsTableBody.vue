<template>
    <tbody>
    <tr class="pt-12 py-24 bg-white">
        <td class="my-24 text-start text-[15px] text-[#1D1D1F] py-6 pl-3 rounded-l-lg">{{ firstBody }}</td>
        <td class="text-start text-[15px] text-[#1D1D1F] py-6">{{ secondBody }}</td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">{{ thirdBody }}</td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">
            {{ fourthBody }}
            <span class="text-gray-400"> {{ currency }}</span></td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">{{ fifthBody }}
            <span class="text-gray-400">{{ currency }}</span></td>
        <td class="text-center text-[15px] text-[#1D1D1F] py-6">{{ sixthBody }}</td>
        <td :class="style" class="text-center text-[15px] text-[#1D1D1F] py-6">{{ seventhBody }}</td>
        <td class="text-center rounded-r-lg">
            <div @click="goToDetail(id)">
                <img
                    src="./icons/eye.svg"
                    class="text-primary w-5 h-5 mx-auto cursor-pointer hover:scale-125 duration-500"
                />
            </div>
        </td>
    </tr>
    </tbody>
</template>

<script>
export default {
    name: "AppSponsorsTableBody",
    props: {
        firstBody: {type: Number},
        secondBody: {type: String},
        thirdBody: {type: String},
        fourthBody: {type: Number},
        fifthBody: {type: Number},
        sixthBody: {type: String},
        seventhBody: {type: String},
        currency: {type: String},

        style: {type: String},
        id: {type: [Number, String]}
    },
     methods: {
        goToDetail(id) {
            this.$router.push(`sponsors/${id}`)
        }
     }
}
</script>

<style scoped>

</style>