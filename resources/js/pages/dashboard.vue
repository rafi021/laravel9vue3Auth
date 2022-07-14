<template>
    <div class="container">
        <h2>Dashboard Page for {{ store.getters.getUser }}</h2>
    </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
const store = useStore();
</script>
