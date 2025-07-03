const fichaDaLuisa = {
    nome: "Luísa",
    idade: "24",
    profisssão: "programadora",
    temFilhos: false,
};


console.log('ficha da luísa:' , fichaDaLuisa);

console.log('idade: ' + fichaDaLuisa.idade);

fichaDaLuisa.carro = "Sandeiro";

console.log('ficha da Luisa' , fichaDaLuisa);

delete fichaDaLuisa.carro;

console.log('ficha da Luisa', fichaDaLuisa);

console.log('carro: ' + fichaDaLuisa.carro) // undefined - sempre que tentamos imprimir propriedade que não existe dentro do objeto, o JS retorna pra gente o valor "undefined"
