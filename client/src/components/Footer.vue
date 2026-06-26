<template>
  <footer class="bg-primary text-white py-8">
    <div class="container flex items-center justify-between">
      <p class="text-white/70">© {{ currentYear }} Adeel Raza. All rights reserved.</p>
      <p class="text-white/70">Designed & Built with precision</p>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  currentYear: {
    type: Number,
    required: true
  }
})
</script>