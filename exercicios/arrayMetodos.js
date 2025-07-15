
const listaDeConvidados = ["Matehus", "Izabelli", "Amanda", "Paula"];

//Push / Pop / Shift / Unshift

listaDeConvidados.push ("Leonardo"); //adicionja no final do array
listaDeConvidados.pop();  //remove o ultimo item do array
listaDeConvidados.unshift("Beatriz") //adicona como o primeiro do array, item da posição 0
listaDeConvidados.shift(); // remover o primeiro item da lista
console.log(listaDeConvidados);

console.log("Amanda está na lista?", listaDeConvidados.includes ("Amanda"));