import Dimension from "../../domain/entities/dimension"

describe('Testes de dimensão', () => {
  test('Deve criar as dimensões do item', function() {
    const dimension = new Dimension(100, 30, 10)
    const volume = dimension.getVolume()
    expect(volume).toBe(0.03)
  })
})
