<template>
    <div class="default-layout">
        <header>
            <Nav></Nav>
        </header>

        <main>
            <slot />
        </main>

        <Footer :currentYear="currentYear"></Footer>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

const currentYear = computed(() => new Date().getFullYear())

</script>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
    padding: 20px;
}
</style>
