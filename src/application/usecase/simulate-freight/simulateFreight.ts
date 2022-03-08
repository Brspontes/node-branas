import Freight from "../../../domain/entities/Freight";
import ItemRepository from "../../../domain/repositories/itemRepository";
import SimulateFreightInput from "./simulateFreightInput";
import SimulateFreightOutput from "./simulateFreightOutput";

export default class SimulateFreight {
  constructor (readonly itemRepositoryMemory: ItemRepository) {}

  execute (input: SimulateFreightInput): SimulateFreightOutput {
    const freight = new Freight()

    for (const oderItem of input.orderItems) {
      const item = this.itemRepositoryMemory.getById(oderItem.idItem)
      if (!item) throw new Error('Item notfound')
      freight.addItem(item, oderItem.quantity)
    }
    const output = new SimulateFreightOutput(freight.getTotal())

    return output
  }
}
