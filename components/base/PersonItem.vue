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
  <div>
    <NuxtLink :to="`/people/${person.id}`">
      <h2>
          {{ person.name }}
      </h2>
      <img :src="person.image?.medium || '/assets/img/default-medium.jpg'" :alt="person.name" />
    </NuxtLink>
  </div>
</template>