import Coupon from "../../../domain/entities/coupon";
import coupon from "../../../domain/entities/coupon";
import CouponRepository from "../../../domain/repositories/couponRepository";
import Connection from "../../database/connection";

export default class CouponRepositoryDatabase implements CouponRepository {
  constructor (readonly connection: Connection) {

  }

  async getByCode(code: string): Promise<coupon | undefined> {
    const [couponData] = await this.connection.query("select * from ccca.coupon where code = $1", [code])
		const coupon = new Coupon(couponData.code, parseFloat(couponData.percentage), new Date(couponData.issue_date))
		return coupon
  }
}
