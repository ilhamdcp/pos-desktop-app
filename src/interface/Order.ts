import { OrderItem } from './OrderItem';

export interface Order {
    customerName: string;
    tableNumber: number;
    notes: string;
    menus: Array<OrderItem>;
    createdTime: Date;
}
