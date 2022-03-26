<script setup lang="ts">
import Show from "types/Show"
import Person from "types/Person"

const dataShows = await useLazyFetch("/api/shows")
const shows = dataShows.data.value as Show[]


const dataPeople = await useLazyFetch("/api/people")
const people = dataPeople.data.value as Person[]

useMeta({ title: 'Home - TV Shows Search' })
</script>

<template>
  <div class="py-4">
    <h1 class="text-blue-900 text-2xl font-extrabold p-4">
      Shows
    </h1>
    <BaseListShow>
      <BaseShowItem v-for="show in shows" :key="show.id" :show="show" />
    </BaseListShow>
    <h1 class="text-blue-900 text-2xl font-extrabold p-4">
      People (actor, actress, band, etc)
    </h1>
    <BaseListPerson>
      <BasePersonItem v-for="person in people" :key="person.id" :person="person" />
    </BaseListPerson>
  </div>
</template>
