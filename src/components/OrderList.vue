<template>
  <ul v-for="orderItem in orderItems" :key="orderItem.name">
    <li>Menu: {{ orderItem.name }}, quantity: {{ orderItem.quantity }}</li>
  </ul>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    return {
      orderItems: computed(() => store.state.orderItems),
    };
  },
};
</script>
