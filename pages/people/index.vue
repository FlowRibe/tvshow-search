<template>
    <div class="py-4 w-full">
        <div class="p-4">
            <form @submit.prevent="searchPeople" class="flex justify-center content-center">
                <input 
                    type="text"
                    placeholder="Search for people with a keyword"
                    v-model="searchText"
                    class="rounded-l-xl p-2 focus:outline-none text-indigo-800 border-l-2 border-y-2"
                >
                <button class="text-zinc-50 bg-indigo-700 hover:bg-indigo-800  rounded-r-xl min-h-full p-3">Search</button>
            </form>
        </div>
        <div class="px-4">
            <BaseListPerson>
                <BasePersonItem v-for="person in people" :key="person.person.id" :person="person.person" />
            </BaseListPerson>
        </div>
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

useMeta({ title: 'Search for people - TV Shows Search' })
</script>