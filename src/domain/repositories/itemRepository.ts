import Item from "../entities/item";

export default interface ItemRepository {
  getById(idItem: number): Promise<Item | undefined>
}
