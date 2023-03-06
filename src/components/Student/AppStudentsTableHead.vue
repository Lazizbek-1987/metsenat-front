<template>
    <thead>
    <tr>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ ordinalNumber }}
        </th>
        <th scope="col" class="text-start text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ fullName }}
        </th>
        <th scope="col" class="text-start text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ typeOfStudent }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ university }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ allocatedAmount }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ contractAmount }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ deeds }}
        </th>
    </tr>
    </thead>
</template>

<script>
export default {
    name: "AppStudentsTableHead",
    props: {
        ordinalNumber: {type: String},
        fullName: {type: String},
        typeOfStudent: {type: String},
        university: {type: String},
        allocatedAmount: {type: String},
        contractAmount: {type: String},
        deeds: {type: String}
    }
}
</script>

<style scoped>

</style>