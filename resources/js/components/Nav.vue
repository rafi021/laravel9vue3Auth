<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">LaVuite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'Home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{name: 'Login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{name: 'Register'}">Register</router-link>
        </li>

    </ul>
    </div>
  </div>
</nav>
</template>
