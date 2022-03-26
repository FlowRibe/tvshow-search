<script lang="ts">
export default defineComponent({
    props: {
        href: {
            required: true,
            type: String
        },
        isActive: Boolean
    }
})
</script>

<template>
    <li>
        <NuxtLink :to="href" :class="['block px-3 py-2 rounded-md', isActive ? 'bg-indigo-900' : 'hover:bg-indigo-800 transition-colors']">
            <slot></slot>
        </NuxtLink>
    </li>
</template>