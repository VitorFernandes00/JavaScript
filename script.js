let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(produtos);
console.log("Essa lista possui " + produtos.length + " produtos!");

produtos.splice(2,1);

console.log(produtos);


const findProduto = produtos.find(p => p === 'Computador');

if(findProduto){
	console.log(`Correto!! existe ${findProduto} na sua lista!`)
}else{
	console.log('Parece que esse produto não existe');
}


console.log(findProduto);

produtos.splice(1,1)

console.log(produtos);


const numeros = [1, 3, 5, 7, 0, 9];
console.log("Os numeros ordenados " + numeros.sort());

console.log("Numero removido foi: " + numeros.shift());

console.log("Ordem invertida " + numeros.reverse());


let hoje = new Date();
console.log("A dia de hoje é: " + hoje.getDate());
console.log("O mês de hoje é: " + hoje.getMonth());
console.log("O ano de hoje é: " + hoje.getFullYear());