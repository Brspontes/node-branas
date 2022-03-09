import PostgresSQLConnectionAdapter from "../../infra/database/postgresSQLConnectionAdapter"
import ItemRepositoryDatabase from "../../infra/repository/database/itemRepositoryDatabase"

test('Deve testar o repositorio', async () => {
  const connection = new PostgresSQLConnectionAdapter()
  const itemRepository = new ItemRepositoryDatabase(connection)
  const item = await itemRepository.getById(1)
  expect(item?.description).toBe('Guitarra')
  await connection.close()
})
