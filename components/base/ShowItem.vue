<script setup lang="ts">
import { PropType } from "vue";
import Show from "~~/types/Show";

const props = defineProps({
    show: {
      required: true,
      type: Object as PropType<Show>
    }
})

const genres = props.show.genres.join(", ")
</script>

<template>
  <div class="col-span-1 mx-auto w-full p-2">
    <div class="border-2 border-zinc-300 hover:border-indigo-200 hover:shadow-2xl rounded-xl w-full p-1">
      <NuxtLink :to="`/shows/${show.id}`" class="w-full h-full">
        <img :src="show.image?.medium || '/assets/img/default-medium.jpg'" class="w-full h-auto rounded-t-lg" />
        <div class="p-2">
          <h2 class="font-bold text-center text-gray-800 text-xl truncate"> {{ show.name }} </h2>
          <div class="flex text-blue-500 content-center justify-center p-3">
              <p class="px-2">{{ show.rating?.average || 'No rating' }}</p>
              <SvgStar />
          </div>
          <ul class="flex truncate text-xs text-zinc-500 justify-center">
            {{ genres }}
          </ul>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
