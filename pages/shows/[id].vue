<template>
    <div>
        <article>
            <h1>
            {{ show.name }}
            </h1>
            <img :src="show.image?.original || '/assets/img/default.jpg'" />
            <p>rate : {{show.rating?.average || 'no rate'}} </p>
            <ul>
                <li v-for="genre in show.genres" :key="genre">{{genre}}</li>
            </ul>
            <section v-html="show.summary"></section>
        </article>
    </div>
</template>

<script setup lang="ts">
import Show from "types/Show"

const route = useRoute()
const data  = await $fetch(`/api/show?id=${route.params.id}`)
const show = ref<Show>(data as Show)

useMeta({ title: `TV show : ${show.value.name}` })
</script>
