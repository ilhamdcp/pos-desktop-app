<template>
  <h2>Order</h2>
  <div class="div-customer-name">
    <input type="text"
    class="form-customer-name"
    placeholder="Customer Name"
    v-on:keyup.enter="updateCustomerName"
    v-if="orderItems.length > 0"/>
  </div>
  <div class="div-order-items">
    <OrderCard v-bind="orderItem" v-for="orderItem in orderItems" :key="orderItem.name"/>
  </div>
  <div class="div-divider" v-if="orderItems.length > 0"/>
  <div class="div-total" v-if="orderItems.length > 0">
    <div class="div-subtotal">Subtotal: Rp {{ subTotal.toLocaleString() }}</div>
    <div class="div-tax">Tax 10%</div>
  </div>
  <button class="buy-button" v-if="orderItems.length > 0">Confirm</button>
</template>
<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import OrderCard from '@/components/OrderCard.vue';
import { OrderItem } from '@/interface/OrderItem';

const customerName = ref('');

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
      customerName,
    };
  },
  methods: {
  // TODO implement methods using composition api syntax
    updateCustomerName: (event) => {
      customerName.value = event.target.value;
      console.log(customerName.value);
    },
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

  .div-customer-name {
    width: 80%;
    margin-bottom: 25px;
  }

  .form-customer-name {
    border: none;
    font-size: 18pt;
    border-bottom: solid 2px black;
    transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    text-decoration: none;
    outline: none;
    background: none;
  }

  .form-customer-name:focus {
    text-decoration: none;
    border-bottom: solid 2px rgb(35, 149, 255);
    box-shadow: none;
  }

  .div-order-items {
    height: 60vh;
    overflow-y: scroll;
  }

  .div-divider {
    height: 0;
    border: solid 0.5px gray;
  }
</style>
