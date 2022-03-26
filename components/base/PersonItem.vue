<script lang="ts">
import { PropType } from "vue";
import Person from "types/Person";
export default defineComponent({
    props: {
        person: {
            required: true,
            type: Object as PropType<Person>
        }
    }
});
</script>

<template>
  <div class="col-span-1 mx-auto border-2 border-zinc-300 hover:shadow-2xl hover:border-indigo-200 rounded-xl w-full p-1">
    <NuxtLink :to="`/people/${person.id}`" class="w-full h-full">
      <img :src="person.image?.medium || '/assets/img/default-medium.jpg'" :alt="person.name" class="w-full h-auto rounded-t-lg" />
      <h2 class="font-bold text-center text-blue-800 text-xl truncate p-2">
          {{ person.name }}
      </h2>
    </NuxtLink>
  </div>
</template>