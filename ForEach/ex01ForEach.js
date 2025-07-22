
const notasFinais = [
    { nome: "Beatriz", nota: 5 },
    { nome: "Matheus", nota: 7 },
    { nome: "Amanda", nota: 10 },
    { nome: "Paula", nota: 5 },
]

// for (let i = 0; i < notasFinais.length; i ++ ){
//if (notasFinais[i].nota >= 6){
//  console.log(` O aluno ${notasFinais[i].nome} está aprovado com ${notasFinais[i].nota}`)
// } else { 
// console.log(` o aluno ${notasFinais[i].nome} está  reprovado com ${notasFinais.nota}`)
//  }
// }

//for (let aluno of notasFinais){
//  if (aluno.nota >= 6){
//   console.log(` O aluno ${aluno.nome} está aprovado com ${aluno[i].nota}`) 
// } else {
// console.log(` o aluno ${aluno.nome}  está reprovado com ${aluno.nota}`)
//  }
//  } 

// Metodo ForEacht --> ultilizamos ele parar varrer o array, passar por cada item e fazer algo com cada informação.

notasFinais.forEach((aluno) => {
    if (aluno.nota >= 6) {
        console.log(` O aluno ${aluno[i].nome} está aprovado com ${aluno.nota}`)
    } else {
        console.log(`o aluno ${aluno.nome} esta reprovado com ${aluno.nota}`)
    }
}
);

