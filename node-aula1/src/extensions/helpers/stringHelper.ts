function somenteNumeros(texto: string): string {
  return texto.replace(/[\.\-]/g,'')
}

export {
  somenteNumeros
}
