import { createStore } from 'vuex';
import { MenuItem } from '@/model/MenuItem';
import { OrderItem } from '@/model/OrderItem';
import menuData from '@/data/menu.json';

export default createStore({
  state: {
    menuItems: menuData as unknown as Array<MenuItem>,
    orderItems: Array<OrderItem>(),
  },
  mutations: {
    setMenuItems(state, menuItems) {
      state.menuItems = menuItems;
      console.log(state.menuItems);
    },
    insertOrder(state, newOrder: OrderItem) {
      state.orderItems.push(newOrder);
      console.log(state.orderItems);
    },
    updateOrder(state, newOrder) {
      const currentOrder = state.orderItems.find((item) => item.name === newOrder.name);
      Object.assign(currentOrder, newOrder);
      console.log(state.orderItems);
    },
    deleteOrder(state, orderName) {
      state.orderItems = state.orderItems.filter((orderItem) => orderItem.name !== orderName);
    },
  },
  actions: {
    addOrder(context, newOrder: OrderItem) {
      if (this.state.orderItems
        .filter((orderItem) => orderItem.name === newOrder.name).length === 0) {
        context.commit('insertOrder', newOrder);
      } else {
        context.commit('updateOrder', newOrder);
      }
    },
    deleteOrder(context, orderName: string) {
      context.commit('deleteOrder', orderName);
    },
  },
});
