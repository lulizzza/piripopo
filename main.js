// function soma(num1,num2){
//     return num1+num2
// }

// console.log(soma(20,30));

// function areaQuadrado(lado) {
//     return lado * lado
// }


// let media = function(num1,num2,num3){
//     return (num1+num2+num3) /3
// }
// let num1 = parseInt(prompt("insira o primeiro numero"))
// let num2 = parseInt(prompt("insira o segundo numero"))
// let num3 = parseInt(prompt("insira o terceiro numero"))
// document.write(media(num1, num2, num3))

// console.log(media(4,6,8))

let estados=[
"AC","AL","AM","AP","BA","CE","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO","DF"
];

let i=0;
while(i<estados.length){
console.log(i);
console.log(estados[i]);
i=i+1;
}

for (let i = 0; i < estados.length; i++) {
    console.log(i);
    console.log(estados[i]);
}
let idade=parseInt(prompt("qual a sua idade?"));
if(idade>17) {
    console.log("pode dirigir :D");
}
else {
    console.log("não pode dirirgir >:)");
}