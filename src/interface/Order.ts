import { OrderItem } from './OrderItem';

export interface Order {
    customerName: string;
    tableNumber: number;
    menus: Array<OrderItem>;
    createdTime: Date;
}
