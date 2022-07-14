<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <div class="container-fluid text-white">
    <a class="navbar-brand" href="/">LaVuite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'Home'}">Home</router-link>
        </li>
        <li class="nav-item" v-if="store.getters.getToken == 0">
          <router-link class="nav-link" aria-current="page" :to="{name: 'Login'}">Login</router-link>
        </li>
        <li class="nav-item" v-if="store.getters.getToken == 0">
          <router-link class="nav-link" aria-current="page" :to="{name: 'Register'}">Register</router-link>
        </li>

       <li class="nav-item dropdown" v-if="store.getters.getToken != 0">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ store.getters.getUser }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li class="">
                <a type="button" class="dropdown-item" @click="logout">Logout</a>
            </li>
            <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
          </ul>
        </li>

    </ul>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const logout = () => {
    store.dispatch('removeToken');
    store.dispatch('removeUser');
    router.push({ name: 'Home'})
}
</script>

<style scoped>
.dropdown-menu[data-bs-popper] {
    left: -5rem;
}
</style>
