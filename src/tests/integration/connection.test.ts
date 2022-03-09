import PostgresSQLConnectionAdapter from "../../infra/database/postgresSQLConnectionAdapter"

test('Deve testar a conexão', async () => {
  const connection = new PostgresSQLConnectionAdapter()
  const items = await connection.query('select * from ccca.item', [])
  expect(items.length === 3).toBeTruthy()
  await connection.close()
})
