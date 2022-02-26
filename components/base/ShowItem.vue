<script lang="ts">
import { PropType } from "vue";
import Show from "~~/types/Show";
export default defineComponent({
    props: {
        show: {
            required: true,
            type: Object as PropType<Show>
        }
    }
});
</script>

<template>
  <div>
    <NuxtLink :to="`/shows/${show.id}`">
      <h2>
          {{ show.name }}
      </h2>
      <img :src="show.image?.medium || '/assets/img/default-medium.jpg'" />
      <p>rate : {{show.rating.average}} </p>
      <ul>
        <li v-for="genre in show.genres" :key="genre">{{genre}}</li>
      </ul>
    </NuxtLink>
  </div>
</template>

