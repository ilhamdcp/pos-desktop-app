<template>
  <div class="order-card">
    <button class="menu-close" v-on:click="removeOrder()"><img src="@/assets/close.png"></button>
    <div class="menu-name">{{ name }}</div>
    <input type="text" class="form-menu-item-notes"
      placeholder="Notes"/>
    <OrderQuantity v-bind:name="name" v-bind:quantity="quantity"/>
    <p class="menu-subtotal">Rp {{ subtotal().toLocaleString() }}</p>
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

  .form-menu-item-notes {
  border: none;
  margin-bottom: 5px;
  font-size: 12pt;
  border-bottom: solid 1px black;
  transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  text-decoration: none;
  outline: none;
  background: none;
  color: gray;
  width: 80%;
}

.form-menu-item-notes:focus {
  text-decoration: none;
  border-bottom: solid 1px rgb(35, 149, 255);
  box-shadow: none;
  color: black;
}
</style>
