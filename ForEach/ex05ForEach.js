
//const pessoas = [
  //{ nome: "Carlos", idade: 20 },
  //{ nome: "Mariana", idade: 25 },
  //{ nome: "Roberta", idade: 30 },
  //{ nome: "João", idade: 40 }
//];

//let soma = 0;

//pessoas.forEach ((pessoa) =>{
  //  if (pessoa.idade >= 25){
    //   soma += pessoa.idade
    //}
//});
//console.log(`A soma das idades das pessoas com mais de 25 anos é: ${soma}`);

//--------------------------------------------------------------------------------

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Pedro", nota: 5 },
  { nome: "Carla", nota: 7.5 },
  { nome: "João", nota: 4 }
];

let aprovados = 0;

alunos.forEach ((aluno)=>{
    if(aluno.nota >= 6){
        aprovados ++;
    }
});
 console.log(`A soma de alunos aprovados é ${aprovados}`);