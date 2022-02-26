<template>
    <div>
        <article>
            <h1>
            {{ person.name }}
            </h1>
            <img :src="person.image?.original || '/assets/img/default.jpg'" />
            <p>age : {{ person.birthday }} </p>
        </article>
    </div>
</template>

<script setup lang="ts">
import Person from "types/Person"

const route = useRoute()
const data  = await $fetch(`/api/person?id=${route.params.id}`)
const person = ref<Person>(data as Person)
console.log(person.value)

useMeta({ title: `Person : ${person.value.name}` })
</script>
