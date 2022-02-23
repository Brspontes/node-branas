import CouponRepository from "../../domain/repositories/couponRepository";
import ItemRepository from "../../domain/repositories/itemRepository";
import Order from "../../domain/entities/order";
import OrderRepository from "../../domain/repositories/orderRepository";
import PlaceOrderInput from "./placeOrderInput";
import PlaceOrderOutput from "./placeOrderOutput";

export default class PlaceOrder {
  constructor (
    readonly itemRespository: ItemRepository,
    readonly orderRepository: OrderRepository,
    readonly couponRepository: CouponRepository) {

  }

  public execute (input: PlaceOrderInput): PlaceOrderOutput {
    const order = new Order(input.cpf)

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
    const output = new PlaceOrderOutput(total)
    return output
  }
}
