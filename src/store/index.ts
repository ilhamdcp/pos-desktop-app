import { createStore } from 'vuex';
import { MenuItem } from '@/interface/MenuItem';
import { OrderItem } from '@/interface/OrderItem';
import menuData from '@/data/menu.json';
import MutationType from '@/store/MutationType';
import { Order } from '@/interface/Order';

export default createStore({
  state: {
    menuItems: menuData as unknown as Array<MenuItem>,
    orderItems: Array<OrderItem>(),
    order: null,
  },
  mutations: {
    setMenuItems(state, menuItems) {
      state.menuItems = menuItems;
    },
    insertOrderItem(state, newOrder: OrderItem) {
      state.orderItems.push(newOrder);
    },
    updateOrderItem(state, newOrder) {
      const currentOrder = state.orderItems.find((item) => item.name === newOrder.name);
      Object.assign(currentOrder, newOrder);
    },
    deleteOrderItem(state, orderName) {
      state.orderItems = state.orderItems.filter((orderItem) => orderItem.name !== orderName);
    },
    addOrder(state, order) {
      state.order = order;
    },
  },
  actions: {
    addOrder(context, newOrder: OrderItem) {
      const currentOrder = this.state.orderItems
        .find((orderItem) => orderItem.name === newOrder.name);
      if (currentOrder === undefined) {
        const temp = newOrder;
        temp.quantity = 1;
        context.commit(MutationType.INSERT_ORDER_ITEM, newOrder);
      } else {
        currentOrder.quantity += 1;
        context.commit(MutationType.UPDATE_ORDER_ITEM, newOrder);
      }
    },
    removeOrder(context, orderName: string) {
      context.commit(MutationType.DELETE_ORDER_ITEM, orderName);
    },
    finalizeOrder(context, order: Order) {
      context.commit(MutationType.ADD_ORDER, order);
    },
  },
});
