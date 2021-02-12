<template>
  <h2>Order</h2>
    <OrderCard v-bind="orderItem" v-for="orderItem in orderItems" :key="orderItem.name"/>
  <div class="div-total" v-if="orderItems.length > 0">
    <div class="div-subtotal">Subtotal: Rp {{ subTotal.toLocaleString() }}</div>
    <div class="div-tax">Tax 10%</div>
  </div>
</template>
<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import OrderCard from '@/components/OrderCard.vue';
import { OrderItem } from '@/interface/OrderItem';

export default {
  components: {
    OrderCard,
  },
  setup() {
    const store = useStore();
    return {
      orderItems: computed(() => store.state.orderItems),
      subTotal: computed(() => store.state.orderItems
        .map((element: OrderItem) => element.individualPrice * element.quantity)
        .reduce((price: number, current: number) => current + price, 0)),
    };
  },
};
</script>
<style scoped>
  .order-list-container {
    list-style-type: none;
  }

  .div-total {
    text-align: start;
  }
</style>
