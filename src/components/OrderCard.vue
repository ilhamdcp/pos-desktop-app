<template>
  <div class="order-card">
    <button class="menu-close" v-on:click="removeOrder()"><img src="@/assets/close.png"></button>
    <div class="menu-name">{{ name }}</div>
    <OrderQuantity v-bind:name="name" v-bind:quantity="quantity"/>
    <p class="menu-subtotal">@: Rp{{ subtotal() }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import OrderQuantity from '@/components/OrderQuantity.vue';
import ActionType from '@/store/ActionType';

export default {
  props: {
    name: String,
    quantity: Number,
    individualPrice: Number,
  },
  components: {
    OrderQuantity,
  },
  setup(props) {
    const store = useStore();
    return {
      subtotal() {
        return props.quantity * props.individualPrice;
      },
      removeOrder() {
        store.dispatch(ActionType.REMOVE_ORDER, props.name);
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

  .menu-close {
    float: right;
    border: none;
    background: none;
    width: 16x;
    height: 16px;
    padding: 0;
  }

  .menu-close:hover {
    cursor: pointer;
  }

  .menu-close img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
</style>
