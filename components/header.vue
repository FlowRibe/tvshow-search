<template>
    <header class="bg-indigo-700">
        <BaseNav>
            <BaseNavItem v-for="item in navItems" :key="item.id" :href="item.href" :isActive="item.active">
                {{ item.name }}
            </BaseNavItem>
        </BaseNav>
    </header>
</template>

<script setup lang="ts">
const navItems = useNavItems()
</script>