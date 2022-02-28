import Dimension from "../../domain/entities/dimension";
import FreightCalculator from "../../domain/entities/freightCalculator";
import Item from "../../domain/entities/item";

describe('Testes de calculo de frete', () => {
  test("Deve calcular o frete de um item", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3)
    const freight = FreightCalculator.calculate(item, 2)
    expect(freight).toBe(60)
  });
})
