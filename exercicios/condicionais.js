const idadeMaria = 10;
const maioridade= 18;

if (idadeMaria >= 18){
   console.log ("maria pode dirigir");

}
else {
   const anosFaltantes = maioridade- idadeMaria;
   console.log("maria NÃO pode dirigir");
    console.log(`Faltam ${anosFaltantes} anos para maria poder dirigir`);
}
   
// Operadores ternarios
 
idade >= maioridade ? console.log("maria pode dirigir"):console.log("maria não pode dirigir");

 console.log ("------------------------");

 const idadePessoa = 61;

 // 0 a 12 anos -> infancia
 // 13 a 17 anos -> adolescencia
 // 18 a 25 anos -> jovem adulto
 // 26 a 60 anos -> idoso

 if (idadePessoa >= 0 && idadePessoa <= 12) {
 console.log("infancia");

} else if (idadePessoa >= 13 && idadePessoa <= 17){
 console.log("adolescencia");

} else if (idadePessoa >= 18 && idadePessoa <= 25){
    console.log("jovem adulto");

} else if(idadePessoa >= 26 && idadePessoa <= 60){
    console.log ("jovem adulto");

} else { 
    console.log("idoso");
}