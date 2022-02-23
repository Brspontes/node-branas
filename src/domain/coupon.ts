export default class Coupon {
	constructor (
    readonly code: string, 
    readonly percentage: number,
    readonly expiredDate?: Date) { }

  public isExpired (today: Date = new Date()): boolean {
    if (!this.expiredDate) return false;
    return this.expiredDate.getTime() < today.getTime()
  }

  public calculateDiscount (amount: number): number {
    return (amount * this.percentage) / 100
  }
}
