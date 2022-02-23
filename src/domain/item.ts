import Dimension from "./dimension";

export default class Item {
  constructor (
    readonly idItem: number,
    readonly category: string,
    readonly description: string,
    readonly price: number,
    readonly dimension?: Dimension,
    readonly weight?: number
  ) { 
    
  }

  public getVolume(): number {
    if (this.dimension) return this.dimension.getVolume()
    return 0
  }

  public getDensity(): number {
    if (this.weight && this.dimension)
      return this.weight / this.dimension.getVolume()
    return 0
  }
}
