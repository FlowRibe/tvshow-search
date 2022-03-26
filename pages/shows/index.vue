<template>
    <div class="py-4 w-full">
        <div class="p-4">
            <form @submit.prevent="searchShows" class="flex justify-center content-center">
                <input 
                    type="text"
                    placeholder="Search for shows with a keyword"
                    v-model="searchText"
                    class="rounded-l-xl p-2 focus:outline-none text-indigo-800 border-l-2 border-y-2"
                >
                <button class="text-zinc-50 bg-indigo-700 hover:bg-indigo-800  rounded-r-xl min-h-full p-3">Search</button>
            </form>
        </div>
        <div class="px-4">
            <BaseListShow>
                <BaseShowItem v-for="show in shows" :key="show.show.id" :show="show.show" />
            </BaseListShow>
        </div>
    </div>
</template>

<script setup lang="ts">
import ShowSearch from "types/ShowSearch"

const searchText = ref("")
const shows = ref<ShowSearch[]>([])

async function searchShows() {
    const data = await $fetch(`/api/search-show?search=${searchText.value}`)
    shows.value = data as ShowSearch[]
}

useMeta({ title: 'Search for shows - TV Shows Search' })
</script>
