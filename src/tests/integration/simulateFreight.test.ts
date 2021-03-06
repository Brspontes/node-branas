import SimulateFreight from "../../application/usecase/simulate-freight/simulateFreight"
import SimulateFreightInput from "../../application/usecase/simulate-freight/simulateFreightInput"
import ItemRepositoryMemory from "../../infra/repository/memory/itemRepositoryMemory"

test('Deve simular frete de um pedido', async () => {
  const itemRepository = new ItemRepositoryMemory()
  const simulateFreight = new SimulateFreight(itemRepository)
  
  const input = new SimulateFreightInput([
    { idItem: 1, quantity: 1 },
    { idItem: 2, quantity: 1 },
    { idItem: 3, quantity: 3 }
  ])

  const output = await simulateFreight.execute(input)
  expect(output.total).toBe(260)
})
