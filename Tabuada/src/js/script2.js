function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Ai não dá né meu chapa, me ajuda a te ajudar e coloca um numero aí')
    }else{
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // adicionar um elemento filho
            c++
        }
    }
}