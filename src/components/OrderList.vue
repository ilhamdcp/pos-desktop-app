<template>
  <ul v-for="orderItem in orderItems" :key="orderItem.name" class="order-list-container">
    <li class="order-item-container"><OrderCard v-bind="orderItem"/></li>
  </ul>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import OrderCard from '@/components/OrderCard.vue';

export default {
  components: {
    OrderCard,
  },
  setup() {
    const store = useStore();
    return {
      orderItems: computed(() => store.state.orderItems),
    };
  },
};
</script>
<style scoped>
  .order-list-container {
    list-style-type: none;
  }
</style>
