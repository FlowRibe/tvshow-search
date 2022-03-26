<template>
    <div class="w-full mx-auto p-8 px-8">
        <article class="w-full mx-auto border-2 border-blue-300 p-4 rounded-xl">
            <h1 class="text-blue-900 text-4xl font-extrabold py-4 text-center"> {{ person.name }} </h1>
            <div class="pb-4">
                <img :src="person.image?.original || '/assets/img/default.jpg'" class="mx-auto border-2 rounded-xl max-w-none w-full sm:w-80"/>
            </div>
            <p v-if="person.birthday" class="text-center"> <b class="text-blue-700"> {{ "Birthday : " }} </b> {{ person.birthday }} </p>
            <p v-if="person.deathday" class="text-center"> <b class="text-blue-700"> {{ "Deathday : " }} </b> {{ person.deathday }} </p>
            <p v-if="person.gender" class="text-center"> <b class="text-blue-700"> {{ "Gender : " }} </b> {{ person.gender }} </p>
            <p v-if="person.country?.name" class="text-center"> <b class="text-blue-700"> {{ "Country : " }} </b> {{ person.country.name }} </p>
            <p v-if="person.country?.timezone" class="text-center"> <b class="text-blue-700"> {{ "Timezone : " }} </b> {{ person.country.timezone }} </p>
        </article>
    </div>
</template>

<script setup lang="ts">
import Person from "types/Person"

const route = useRoute()
const data  = await $fetch(`/api/person?id=${route.params.id}`)
const person = ref<Person>(data as Person)

useMeta({ title: `Person : ${person.value.name}` })
</script>
