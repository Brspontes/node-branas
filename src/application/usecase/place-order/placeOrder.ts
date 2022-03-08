import Order from "../../../domain/entities/order";
import CouponRepository from "../../../domain/repositories/couponRepository";
import ItemRepository from "../../../domain/repositories/itemRepository";
import OrderRepository from "../../../domain/repositories/orderRepository";
import PlaceOrderInput from "./placeOrderInput";
import PlaceOrderOutput from "./placeOrderOutput";

export default class PlaceOrder {
  constructor (
    readonly itemRespository: ItemRepository,
    readonly orderRepository: OrderRepository,
    readonly couponRepository: CouponRepository) { }

  public execute (input: PlaceOrderInput): PlaceOrderOutput {
    const sequence = this.orderRepository.size() + 1
    const order = new Order(input.cpf, input.issueDate, sequence)

    for (const orderItem of input.orderItems) {
      const item = this.itemRespository.getById(orderItem.idItem)
      if (!item) throw new Error('Item not found')
      
      order.addItem(item, orderItem.quantity)
    }

    if (input.coupon) {
      const coupon = this.couponRepository.getByCode(input.coupon)
      if (coupon) order.addCoupon(coupon)
    }

    const total = order.getTotal()
    const output = new PlaceOrderOutput(order.code.value, total)
    return output
  }
}
