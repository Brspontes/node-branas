import { validate } from "../extensions/helpers/cpfHelper"

test('Deve retornar CPF válido', () => {
  const cpfDeveSerValido = validate('038.440.174-02')
  expect(cpfDeveSerValido).toBeTruthy()
})

test('Deve retornar CPF inválido quando o segundo digito estiver errado', () => {
  const cpfDeveSerValido = validate('420.711.218-98')
  expect(cpfDeveSerValido).toBeFalsy()
})

test('Deve retornar CPF inválido quando for menor que 11 digitos', () => {
  const cpfDeveSerValido = validate('420.711.218')
  expect(cpfDeveSerValido).toBeFalsy()
})

test('Deve retornar CPF inválido quando for maior que 14 digitos', () => {
  const cpfDeveSerValido = validate('420.123.711.218')
  expect(cpfDeveSerValido).toBeFalsy()
})

test('Deve retornar CPF inválido quando o primeiro digito estiver errado', () => {
  const cpfDeveSerValido = validate('420.711.218-89')
  expect(cpfDeveSerValido).toBeFalsy()
})
