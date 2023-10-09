/*
1.Criar uma função que receba como parâmetro um array de números 
e retorne um array contendo somente números positivos. 

Ex: [-1, 4, -6, -12, 8, 17, -45, 9]
==> Devolve [4, 8, 17, 8]

2.Localizar o maior valor dentro de um array de números.
3.Calcular a soma de todos os dígitos de um número inteiro positivo. Exemplo: 12323  => retorna  11
4.Dado uma array com vários nomes, retornar a maior string deste array.
*/

//Resposta 01
console.log( devolvePos([-1, 4, -6, -12, 8, 17, -45, 9]))
console.log( posWithFilter([-1, 4, -6, -12, 8, 17, -45, 9]))
console.log( maiorNum([-1, 4, -6, -12, 8, 17, -45, 9]))
console.log( maiorNum([99, -1, 4, -6, -12, 856, 17, -45, 19, 78]))
console.log(somaTodos(12345))
console.log(maiorPalavra(['Samu', 'Jurubena Guaraniiii', 'Maria', 'Samuel Santos', 'Maria Joaquina']))

function devolvePos(array) {
    const newArray = [];
    for (let num of array){
        if (num > 0) {
            newArray.push(num)
        }
    }
    return newArray;
}

function posWithFilter(array) {  
    return array.filter(num => num> 0)
}

//2

function maiorNum(array) {
    var max = array[0]
    for( var num of array){
        if (num > max) {
            max = num
        }
    }
    return max
}

//3
function somaTodos(data) {
    var numero = data.toString()
    let soma = 0;
    
    for (let num of numero) {
        soma += parseInt(num)
    }
    return soma
}

function maiorPalavra(array) {
    var maiorPalavra = array[0]
    for( var palavra of array){
        if (palavra.length > maiorPalavra.length) {
            maiorPalavra = palavra
        }
    }
    return maiorPalavra
}