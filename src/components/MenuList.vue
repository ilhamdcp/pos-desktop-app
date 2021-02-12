<template>
  <h1>Menu</h1>
  <div class="menu-list">
    <MenuCard v-for="menuItem in menuItems" :key="menuItem.name" v-bind="menuItem"/>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import MenuCard from '@/components/MenuCard.vue';

export default {
  name: 'MenuList',
  components: {
    MenuCard,
  },
  setup() {
    const store = useStore();
    console.log(store.state.menuItems);
    return {
      menuItems: computed(() => store.state.menuItems),
    };
  },
};
</script>
<style>
  .menu-list {
    margin: auto;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  @media (max-width: 768px) {
    .menu-list {
      width: 100%;
      flex-direction: column;
    }
  }
</style>
