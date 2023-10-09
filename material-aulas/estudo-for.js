var carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 45000, createdAt: 1534506085621 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 120000, createdAt: 1534506085621 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000, createdAt: 1534506085621 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 16000, createdAt: 1534506085621 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 19000, createdAt: 1534506085621 },
  ]
  
  var total = 0

  //primeiro caso

  for(var i = 0; i < carros.length; i++) {
    total += carros[i].preco
}

console.log(total / carros.length)

//2 Caso (trabalha com objetos)

for(const carro of carros) {
    total += carro.preco
}

//3 caso -- in (tem o index)

for(const i in carros) {
    total += carros[i].preco
}

//Exemplos

const cores = [ 'Verde', 'Amarelo', 'Azul', 'Branco' ]

for (const index in cores) {
  console.log(index, cores[index])
}

const pessoa = {
    nome: 'Bruno',
    idade: 25
  }

  /*
  Objeto = Trabalho com a ideia de chave/valor (key/value)
  {nome:"Samuel",
  idade: 46
  }
  */
  
  for (const key in pessoa) {
    console.log(`${key} - ${pessoa[key]}`)
  }