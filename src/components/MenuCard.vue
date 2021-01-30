<template>
  <div class="menu-card">
    <p class="name-text"> {{ name }}</p>
    <p class="price-text"> {{ price }} </p>
    <button class="buy-button" v-on:click="addMenu()">Beli</button>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex';

export default {
  name: 'MenuCard',
  props: {
    name: String,
    price: Number,
    imageUri: String,
  },
  setup(props) {
    const store = useStore();
    return {
      quantity: 0,
      addMenu() {
        store.dispatch('addOrder', { name: props.name, individualPrice: props.price });
      },
    };
  },
};
</script>
<style>
  .menu-card {
    display: inline-block;
    background-color: white;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    width: 30%;
    min-width: 200px;
    text-align: left;
  }
  .name-text {
    font-weight: bold;
  }
  .price-text {
    color: orange;
  }
  .buy-button {
    text-align: center;
    float: right;
    background-color: rgb(2, 173, 2);
    color: white;
    padding: 5px 10px 5px 10px;;
    margin: 5px;
    border-radius: 5px;
    width: fit-content;
    outline: 0;
    border: none;
    font-size: 12pt;
  }
  .buy-button:focus {
    outline: 0;
  }
  .buy-button:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .menu-card {
      width: 100%;
    };
  }
</style>
