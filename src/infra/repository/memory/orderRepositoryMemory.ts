import Order from "../../../domain/entities/order";
import order from "../../../domain/entities/order";
import OrderRepository from "../../../domain/repositories/orderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
  orders: Order[]
  
  constructor() {
    this.orders = []
  }
  
  save(order: order): void {
    this.orders.push(order)
  }

}
