<template>
    <div>
        <Header />
        <div class="container mx-auto">
            <slot />
        </div>
        <LazyFooter />
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    const route = useRoute()
    const navItems = useNavItems()
    for (let item of navItems.value) {
        item.active = false
        if (item.href === route.path) {
          item.active = true
        }
    }
})
onUpdated(() => {
    const route = useRoute()
    const navItems = useNavItems()
    for (let item of navItems.value) {
        item.active = false
        if (item.href === route.path) {
          item.active = true
        }
    }
})
</script>
