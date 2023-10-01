let num = document.getElementById('txtn')
let tabe = document.getElementById('flista')
let resul = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tabe.appendChild(item)
        resul.innerHTML = ''
    } else {
        window.alert('Caixa vazia, é preciso digitar um número')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Ai em cima ta vazio! Assim eu nao consigo')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos < menor])
                menor = valores[pos]
        }
        media = soma / tot

        resul.innerHTML = ''
        resul.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        resul.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        resul.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        resul.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resul.innerHTML += `<p>A média dos valores digitados ${media}</p>`
    }
}
