<template>
  <h1>This is the login page</h1>
  <button v-on:click="updateLocalStorage()">Login</button>
</template>
<script lang='ts'>
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const updateLocalStorage = () => {
      localStorage.setItem('username', 'ilhamdcp');
      router.push({ name: 'Home' });
    };
    return {
      updateLocalStorage,
    };
  },
};
</script>
