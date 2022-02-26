<template>
    <div>
        <h1>Shows page</h1>
        <form @submit.prevent="searchShows">
            <input type="text" placeholder="Search a show with a keyword" v-model="searchText">
            <button>Search</button>
        </form>
        <BaseListShow>
            <BaseShowItem v-for="show in shows" :key="show.show.id" :show="show.show" />
        </BaseListShow>
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
</script>
