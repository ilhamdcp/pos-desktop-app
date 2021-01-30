<template>
  <div class="home">
    <div class="navlist-container">

    </div>
    <div class="menulist-container">
      <MenuList/>
    </div>
    <div class="orderlist-container">
      <OrderList/>
    </div>
  </div>
</template>

<script lang="ts">
import MenuList from '@/components/MenuList.vue';
import OrderList from '@/components/OrderList.vue';

export default {
  name: 'Home',
  components: {
    MenuList,
    OrderList,
  },
};
</script>
<style scoped>
  .home {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .navlist-container {
    overflow-y: scroll;
    width: 20%;
  }

  .menulist-container {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: scroll;
    width: 60%;
  }

  .orderlist-container {
    height: 100vh;
    overflow-y: scroll;
    width: 20%;
  }
</style>
