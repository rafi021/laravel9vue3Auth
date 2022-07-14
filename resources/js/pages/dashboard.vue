<template>
    <div class="container">
        <h2>Dashboard Page {{ store.getters.getToken }}</h2>
        <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const logout = () => {
    store.dispatch('removeToken');
    router.push({ name: 'Home'})
}
</script>
