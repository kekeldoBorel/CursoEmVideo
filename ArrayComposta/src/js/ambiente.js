let num = [5, 8, 2, 9, 3]
num.sort()
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) { // codigo mais simplificado
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let posi = num.indexOf(2)

if (posi == -1) {
    console.log(`Valor nao encontrado`)
}else{
    console.log(`O valor está na posição ${posi}`)
}
