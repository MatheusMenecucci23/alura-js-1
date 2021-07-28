console.log(`Trabalhando com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`

);

const idadeComprador = 18;
const estaAcompanhada = false;
temPassagemComprada = true;


console.log(`Destinos possíveis`);
console.log(listaDeDestino);

// if(idadeComprador >= 18){
//     console.log("Comprador Maior de idade")
//     listaDeDestino.splice(1,1);// removendo o item
// }
// else{
//     if(estaAcompanhada){
//         console.log("Comprador está acompanhado")
//         listaDeDestino.splice(1,1);// removendo o item

//     }
//     else{
//         console.log("Comprador não é maior de idade e não está acompanhada, sendo assim eu não posso vender");
//     }
// }


// || = OU
// && = e


if(idadeComprador >= 18 || estaAcompanhada==true){
    console.log("Boa viagem!")
    listaDeDestino.splice(2,1);// removendo o item
}
else{
        console.log("Comprador não é maior de idade e não está acompanhada, sendo assim eu não posso vender");
}

console.log("\nEmbarcando ")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!")
}else{
    console.log("você está sem a passagem, infelizmente vocÊ não poderá embarcar")
}


console.log(listaDeDestino);


