import Coupon from "./coupon";
import Cpf from "./cpf";
import Freight from "./Freight";
import FreightCalculator from "./freightCalculator";
import Item from "./item";
import OrderCode from "./orderCode";
import OrderItem from "./orderItem";

export default class Order {
	cpf: Cpf;
	orderItems: OrderItem[];
	coupon: Coupon | undefined;
  private freight: Freight
  code: OrderCode

	constructor (cpf: string,
    readonly issueDate: Date = new Date(),
    readonly sequence: number = 1) {
		this.cpf = new Cpf(cpf);
		this.orderItems = [];
    this.freight = new Freight()
    this.code = new OrderCode(issueDate, sequence)
	}

	public addItem (item: Item, quantity: number) {
    this.freight.addItem(item, quantity)
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
	}

	public addCoupon (coupon: Coupon) {
    if (!coupon.isExpired(this.issueDate))
		  this.coupon = coupon;
	}

	public getTotal (): number {
		let total = 0;
		for (const orderItem of this.orderItems) {
			total += orderItem.getTotal();
		}
		if (this.coupon) {
			total -= this.coupon.calculateDiscount(total)
		}
    total += this.freight.getTotal()
		return total;
	}
}
