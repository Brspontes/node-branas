import Item from "./item";

export default class FreightCalculator {
  public static calculate (item: Item, quantity: number): number {
    return (item.getVolume() * 1000 * (item.getDensity()/100)) * quantity;
  }
}
