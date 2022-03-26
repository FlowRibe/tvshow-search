<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
        <div class="px-2 lg:px-20">
            <img :src="show.image?.original || '/assets/img/default.jpg'" class="w-full rounded-xl" />
        </div>
        <div class="py-6 px-4">
            <h1 class="text-blue-900 text-4xl font-extrabold pt-4 pb-2"> {{ show.name }} </h1>
            <div class="flex text-blue-500 text-xl items-center font-medium pb-1">
              <p class="pr-2">{{ show.rating?.average || 'No rating' }}</p>
              <SvgStar class="content-center"/>
            </div>
            <p class="text-sm text-zinc-600 pb-2"> {{ genres }} </p>
            <p class="text-sm font-bold pb-3"> {{ "Language : " + (show.language || "Unknown") }} </p>
            <p v-if="show.premiered" class="text-sm font-bold  text-blue-700 pb-5"> {{ show.premiered + " - " + (show.ended || "in progress") }} </p>
            <section v-html="show.summary"></section>
        </div>
    </div>
</template>

<script setup lang="ts">
import Show from "types/Show"

const route = useRoute()
const data  = await $fetch(`/api/show?id=${route.params.id}`)
const show = ref<Show>(data as Show)

const genres = show.value.genres.join(", ")

useMeta({ title: `TV show : ${show.value.name}` })
</script>
