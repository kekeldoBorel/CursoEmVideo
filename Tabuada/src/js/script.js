function calcular(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let n = Number(num.value)
    res.innerHTML = ''
    
    for(let c = 0; c <= 10; c++){
        res.innerHTML += `${n} X ${c} = `+ n*c +'<br>'     
    }
    
}

function limpar(){
    let res = document.getElementById('res')
    let num = document.getElementById('txtnum')

    res.innerHTML = ''
    num.value = ''
}