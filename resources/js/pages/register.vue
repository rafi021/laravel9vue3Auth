<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <ul class="list-group list-unstyled" v-for="item in errors" :key="item">
                    <li class="" v-for="error in item" :key="error">
                        <span class="text-danger">{{ error }}</span>
                    </li>
                </ul>
                <div class="card mt-4">
                    <div class="card-body">
                        <h4 class="card-title">Register Form</h4>
                        <form @submit.prevent="register">
                            <div class="mb-3">
                                <label for="" class="form-label">Name</label>
                                <input type="text" name="name" v-model="form.name" class="form-control" id="">
                                <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Email Address</label>
                                <input type="email" name="email" v-model="form.email" class="form-control" id="">
                                 <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Password</label>
                                <input type="password" name="password" v-model="form.password" class="form-control" id="">
                                 <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Confirm Password</label>
                                <input type="password" name="password_confirmation" v-model="form.password_confirmation" class="form-control" id="">
                                 <small class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</small>
                            </div>
                            <div class="mb-3 d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

let form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const errors = ref([])

const router = useRouter();
const register = async() => {
   const response =  await axios.post('/api/auth/register', form)
   .then((response) => {
     localStorage.setItem('token', response.data.data.token)
        router.push({ name: 'Dashboard' })
   }).catch((e) => {
    errors.value = e.response.data.message;
   });

}
</script>
