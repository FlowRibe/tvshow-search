<script lang="ts">
export default {};
</script>

<template>
  <div>
    <h1>
      Shows
    </h1>
    <BaseListShow>
      <BaseShowItem v-for="show in shows" :key="show.id" :show="show" />
    </BaseListShow>
    <BaseListPerson>
      <BasePersonItem v-for="person in people" :key="person.id" :person="person" />
    </BaseListPerson>
  </div>
</template>

<script setup lang="ts">
import Show from "types/Show"
import Person from "types/Person"

const dataShows = await $fetch("/api/shows")
const shows = ref<Show[]>(dataShows as Show[])

const dataPeople = await $fetch("/api/people")
const people = ref<Person[]>(dataPeople as Person[])

</script>
