<template>
  <div class="order-quantity">
    <button v-if="quantity === 1" class="btn-update-quantity-disabled">
      <img src="@/assets/minus-gray.png"/>
    </button>
    <button class="btn-update-quantity" v-else v-on:click="decrementQuantity()">
      <img src="@/assets/minus.png"/>
    </button>
    <div class="div-quantity">{{ quantity }}</div>
    <button class="btn-update-quantity" v-on:click="incrementQuantity()">
      <img src="@/assets/plus.png"/>
    </button>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import ActionType from '@/store/ActionType';

export default {
  props: {
    name: String,
    quantity: Number,
  },
  setup(props) {
    const store = useStore();
    return {
      incrementQuantity() {
        const temp = { name: props.name, quantity: props.quantity + 1 };
        store.dispatch(ActionType.ADD_ORDER, temp);
      },
      decrementQuantity() {
        const temp = { name: props.name, quantity: props.quantity - 1 };
        store.dispatch(ActionType.ADD_ORDER, temp);
      },
    };
  },
};

</script>
<style scoped>
.order-quantity {
  display: flex;
}
.btn-update-quantity, .btn-update-quantity-disabled {
  background-color: white;
  border: none;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  padding: 0;
}

.btn-update-quantity img, .btn-update-quantity-disabled img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.btn-update-quantity:hover {
  cursor: pointer;
}

.div-quantity {
  min-width: 32px;
  text-align: center;
}
</style>
