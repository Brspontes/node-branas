import CouponRepository from "../../../domain/repositories/couponRepository";

export default class ValidateCoupon {
  constructor (readonly couponRepository: CouponRepository) {}

  async execute (code: string): Promise<boolean> {
    const coupon = await this.couponRepository.getByCode(code)
    if (!coupon) return false
    return coupon?.isExpired()
  }
}
