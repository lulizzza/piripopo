function soma(num1,num2){
    return num1+num2
}

console.log(soma(20,30));

function areaQuadrado(lado) {
    return lado * lado
}


let media = function(num1,num2,num3){
    return (num1+num2+num3) /3
}
let num1 = parseInt(prompt("insira o primeiro numero"))
let num2 = parseInt(prompt("insira o segundo numero"))
let num3 = parseInt(prompt("insira o terveiro numero"))
document.write(media(num1, num2, num3))

console.log(media(4,6,8))
