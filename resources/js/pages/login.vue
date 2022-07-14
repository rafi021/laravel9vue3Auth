<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <div class="card mt-4">
                    <div class="card-body">
                        <h4 class="card-title">Login Form</h4>
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="" class="form-label">Email Address</label>
                                <input type="email" name="email" v-model="form.email" class="form-control" id="">
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Password</label>
                                <input type="password" name="password" v-model="form.password" class="form-control" id="">
                            </div>
                            <div class="mb-3 d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary">Login</button>
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
    email: '',
    password: '',
});

const error = ref('')

const router = useRouter();
const login = async() => {
   const response =  await axios.post('/api/auth/login', form);

   if(response.data.success){
        localStorage.setItem('token', response.data.data.token)
        router.push({ name: 'Dashboard' })
   }else{
    error.value = response.data.message;
   }
}
</script>
