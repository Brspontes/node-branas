import Coupon from "../../domain/entities/coupon";
import Dimension from "../../domain/entities/dimension";
import Item from "../../domain/entities/item";
import Order from "../../domain/entities/order";

describe('Testes de realização de pedido', () => {
  test("Não deve criar um pedido com CPF inválido", function () {
    expect(() => new Order("111.111.111-11")).toThrow(new Error("CPF inválido"));
  });
  
  test("Deve criar um pedido com 3 itens", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const total = order.getTotal();
    expect(total).toBe(6090);
  });
  
  test("Deve criar um pedido com 3 itens com cupom de desconto", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20);
    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(4872);
  });

  test("Deve criar um pedido com 3 itens com cupom de desconto expirado", function () {
    const order = new Order("935.411.347-80", new Date('2022-03-01T10:00:00'));
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30), 3);
    const coupon = new Coupon("VALE20", 20, new Date('2020-01-01'));
    order.addCoupon(coupon);
    const total = order.getTotal();
    expect(total).toBe(6090);
  });

  test("Deve criar um pedido com 3 itens e calcular o frete", function () {
    const order = new Order("935.411.347-80");
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 1), 3);
    const total = order.getTotal();
    expect(total).toBe(6350);
  });

  test("Deve criar um pedido e calcular o código", function () {
    const order = new Order("935.411.347-80", new Date('2021-03-01T10:00:00'));
    order.addItem(new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1);
    order.addItem(new Item(2, "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1);
    order.addItem(new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 1), 3);
    
    expect(order.code.value).toBe('202100000001')
  });
})
