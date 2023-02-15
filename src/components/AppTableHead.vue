<template>
    <thead>
    <tr>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ firstHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ secondHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ thirdHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ fourthHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ fifthHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ sixthHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ seventhHead }}
        </th>
        <th scope="col" class="text-center text-[12px] text-gray-500 font-thin tracking-widest uppercase">
            {{ eighthHead }}
        </th>
    </tr>
    </thead>
</template>

<script>
export default {
    name: "AppTableHead",
    props: {
        firstHead: {type: String},
        secondHead: {type: String},
        thirdHead: {type: String},
        fourthHead: {type: String},
        fifthHead: {type: String},
        sixthHead: {type: String},
        seventhHead: {type: String},
        eighthHead: {type: String}
    }
}
</script>

<style scoped>

</style>