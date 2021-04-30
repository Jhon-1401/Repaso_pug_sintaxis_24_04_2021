let edad = 18;
// edad:
// if(edad==18){
//     console.log("Es mayor de edad");
// }else if(edad<=17 && edad>=15){
//     console.log("Esta entre los 17 y 15");
// }else{
//     console.log("Condicion no se cumple");
// }

// switch (edad) {
//     case 19:
//         console.log("tiene 19 años");
//         break;
//     case 18:
//         console.log("Es mayor de edad");
//         break;
//     default:
//         console.log("Condicion no se cumple");
//         break;
// }

let lista = ["Miguel", "Marly", "Jhon", "Andres"];
// for(let indice of lista){
//     console.log(indice);
// }
// lista.forEach((valor,indice) => {
//     console.log(i);
// })

// let resultado = (edad==18) ? `Es mayor de edad` : `La condicion no se cumple`;
// console.log(resultado);
let i=0;
while(i < lista.length){
    console.log(lista[i]);
    i++;
}