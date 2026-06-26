<template>
  <div class="min-h-screen bg-background text-foreground">
    <component :is="currentLayout">
      <RouterView />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import LayoutDefault from './layouts/DefaultLayout.vue'

const currentLayout = computed(() => {
  return LayoutDefault
})
</script>
