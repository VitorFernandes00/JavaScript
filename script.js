function receberNumero(valor){
    if(valor < 6 || valor > 9){
        console.log("Apenas numeros de 6 até 9");
        return [] ;
    }

    const numeros = [];

    while(numeros.length < valor){
        const numeroAleatorio = Math.floor(Math.random()* 60) +1;

        if(!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio)
        }
    }

    return numeros;
}

const numeroSorteado = receberNumero(6);
console.log(numeroSorteado);