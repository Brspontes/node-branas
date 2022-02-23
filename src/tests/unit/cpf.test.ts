import Cpf from "../../domain/entities/cpf"

describe('Testes de validações de CPF', () => {
  test('Deve retornar CPF válido', () => {
    const cpfDeveSerValido = new Cpf('420.711.218-99')
    expect(cpfDeveSerValido).toBeTruthy()
  })
  
  test('Deve retornar CPF inválido quando o segundo digito estiver errado', () => {
    expect(() => new Cpf('420.711.218-98')).toThrow(new Error('CPF inválido'))
  })
  
  test('Deve retornar CPF inválido quando for menor que 11 digitos', () => {
    expect(() => new Cpf('420.711.218')).toThrow(new Error('CPF inválido'))
  })
  
  test('Deve retornar CPF inválido quando o primeiro digito estiver errado', () => {
    expect(() => new Cpf('420.711.218-89')).toThrow(new Error('CPF inválido'))
  })
  
  test('Deve retornar CPF inválido quando houver numeros repetidos', () => {
    expect(() => new Cpf('111.111.111-11')).toThrow(new Error('CPF inválido'))
  })
})
