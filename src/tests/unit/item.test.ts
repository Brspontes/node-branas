import Dimension from "../../domain/entities/dimension"
import Item from "../../domain/entities/item"

describe('Testes de Item', () => {
  test('Deve criar um item com dimensões - volume', function() {
    const item = new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000, new Dimension(100, 30, 10))
    const volume = item.getVolume()
    expect(volume).toBe(0.03)
  })

  test('Deve criar um item com dimensões - densidade', function() {
    const item = new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000, new Dimension(100, 30, 10), 3)
    const density = item.getDensity()
    expect(density).toBe(100)
  })
})
