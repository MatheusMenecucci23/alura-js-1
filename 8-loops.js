console.log(`Trabalhando com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`

);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = "Curitiba"

console.log("meu destino é:", destino)
console.log(`\n Destinos possíveis`);
console.log(listaDeDestino);


const podeComprar = (idadeComprador >=18 || estaAcompanhada == true);

let contador = 0;
destinoExiste = false
while (contador<listaDeDestino.length){
    if(listaDeDestino[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true
        break //nessa linha ele deve sair do laço independentemente de outras condições.
    }
    contador += 1;
}
if (destinoExiste==false){
    console.log("Destino não existe")
}

if (podeComprar && destinoExiste){
    console.log("Boa viagem")
}
else{
    console.log("Desculpe! Tivemos um erro!")
}

console.log(listaDeDestino);

for(let i = 0;i<listaDeDestino.length;i++){
    if(listaDeDestino[i] == destino){
        console.log("Destino existe");
        destinoExiste = true
        //break //nessa linha ele deve sair do laço independentemente de outras condições.
    }
}