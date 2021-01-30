<template>
  <div class="order-card">
    <p style="float=right" v-on:click="removeOrder()">Close</p>
    <p class="menu-name">{{ name }}</p>
    <p class="menu-quantity">x {{ quantity }}</p>
    <p class="menu-subtotal">@: Rp{{ subtotal() }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex';

export default {
  props: {
    name: String,
    quantity: Number,
    individualPrice: Number,
  },
  setup(props) {
    const store = useStore();
    return {
      subtotal() {
        return props.quantity * props.individualPrice;
      },
      removeOrder() {
        store.dispatch('deleteOrder', props.name);
      },
    };
  },
};
</script>

<style scoped>
  .order-card {
    padding: 5px;
    margin: 5px;
    text-align: start;
    border-bottom: 1px solid rgb(201, 201, 201);

  }
  .menu-name {
    font-weight: bold;
    margin-bottom: 0em;
  }

  .menu-quantity {
    display: block;
    margin-top: 0em;
  }

  .menu-subtotal {
    text-align: end;
    color: orange;
  }
</style>
