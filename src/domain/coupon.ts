export default class Coupon {

	constructor (
    readonly code: string, 
    readonly percentage: number,
    readonly expiredDate?: Date) { }

  public isExpired (): boolean {
    if (!this.expiredDate) return false;
    const today = new Date()
    return this.expiredDate.getTime() < today.getTime()
  }
}
