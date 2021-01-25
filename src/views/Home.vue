<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <MenuList/>
    <OrderList/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MenuList from '@/components/MenuList.vue';
import OrderList from '@/components/OrderList.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MenuList,
    OrderList,
  },
};
</script>
