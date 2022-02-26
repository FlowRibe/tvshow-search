<template>
    <div>
        <h1>People page</h1>
        <form @submit.prevent="searchPeople">
            <input type="text" placeholder="Search an actor with a keyword" v-model="searchText">
            <button>Search</button>
        </form>
        <BaseListPerson>
            <BasePersonItem v-for="person in people" :key="person.person.id" :person="person.person" />
        </BaseListPerson>
    </div>
</template>

<script setup lang="ts">
import PersonSearch from "types/PersonSearch"

const searchText = ref("")
const people = ref<PersonSearch[]>([])

async function searchPeople() {
    const data = await $fetch(`/api/search-people?search=${searchText.value}`)
    people.value = data as PersonSearch[]
}
</script>