import Coupon from "../../../domain/entities/coupon";
import coupon from "../../../domain/entities/coupon";
import CouponRepository from "../../../domain/repositories/couponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
  coupons: Coupon[]
  constructor () {
    const today = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    this.coupons = [
      new Coupon('VALE20', 20, tomorrow)
    ]
  }
  
  async getByCode(code: string): Promise<coupon | undefined> {
    return this.coupons.find(coupon => coupon.code === code)
  }
}
