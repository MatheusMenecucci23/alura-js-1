console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
//ctrl + k + c = comenta todas alinhas selecionadas
// ctrl + k + u = descomenta KKKKKKK

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`

)
listaDeDestino.push(`Curitiba`)// adicionando a variável ao final de lista

console.log(`Destinos possíveis`)
console.log(listaDeDestino)

listaDeDestino.splice(1,1)//splice(,1) = deleta o item na posição 1 e 1 quantidade de elementos
console.log(listaDeDestino)

console.log(listaDeDestino[1])//imprimindo um uníco elemento na lista