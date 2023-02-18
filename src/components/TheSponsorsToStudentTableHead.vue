<template>
    <thead>
    <tr>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ ordinalNumber }}
        </th>
        <th scope="col" class="text-start text-[12px] text-gray-500 pl-3 font-thin tracking-widest uppercase">
            {{ fullName }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ allocatedSum }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ deeds }}
        </th>
    </tr>
    </thead>
</template>

<script>
export default {
    name: "TheSponsorsToStudentTableHead",
    props: {
        ordinalNumber: {type: String},
        fullName: {type: String},
        allocatedSum: {type: String},
        deeds: {type: String}
    }
}
</script>

<style scoped>

</style>