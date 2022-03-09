import Dimension from "../../../domain/entities/dimension";
import Item from "../../../domain/entities/item";
import item from "../../../domain/entities/item";
import ItemRepository from "../../../domain/repositories/itemRepository";
import Connection from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
  constructor (readonly connection: Connection) {}

  async getById(idItem: number): Promise<item | undefined> {
    const [itemData] = await this.connection.query('select * from ccca.item where id_item = $1', [idItem])
    const item = new Item(itemData.id_item, itemData.category, itemData.description, parseFloat(itemData.price), 
      new Dimension(itemData.width, itemData.height, itemData.length), itemData.weigth)
    return item
  }
}
