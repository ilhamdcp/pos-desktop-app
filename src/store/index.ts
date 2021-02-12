import { createStore } from 'vuex';
import { MenuItem } from '@/interface/MenuItem';
import { OrderItem } from '@/interface/OrderItem';
import menuData from '@/data/menu.json';
import MutationType from '@/store/MutationType';

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
      const currentOrder = this.state.orderItems
        .find((orderItem) => orderItem.name === newOrder.name);
      if (currentOrder === undefined) {
        const temp = newOrder;
        temp.quantity = 1;
        context.commit(MutationType.INSERT_ORDER, newOrder);
      } else {
        currentOrder.quantity += 1;
        console.log(currentOrder.quantity);
        context.commit(MutationType.UPDATE_ORDER, newOrder);
      }
    },
    removeOrder(context, orderName: string) {
      context.commit(MutationType.DELETE_ORDER, orderName);
    },
  },
});
