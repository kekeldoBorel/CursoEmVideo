function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERROR 404')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','./src/img/bebeMenino.jpg')
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','./src/img/jovemHomem.jpg')
                res.innerHTML = `Detectamos um jovem com ${idade} anos`
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','./src/img/homemAdulto.jpg')
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
            }else if(idade < 105){
                //Idoso
                img.setAttribute('src','./src/img/idoso.jpg')
                res.innerHTML = `Detectamos um idoso com ${idade} anos`
            }else{
                res.innerHTML = ''
                img.setAttribute('src','./src/img/Senhorincrivel.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','./src/img/bebeMenina.jpg')
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','./src/img/jovemMulher.jpg')
                res.innerHTML = `Detectamos uma jovem com ${idade} anos`
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','./src/img/mulherAdulta.jpg')
                res.innerHTML = `Detectamos um adulta com ${idade} anos`
            }else if(idade < 105){
                //Idoso
                img.setAttribute('src','./src/img/idosa.jpg')
                res.innerHTML = `Detectamos um idosa com ${idade} anos`
            }else{
                res.innerHTML = ''
                img.setAttribute('src','./src/img/Senhorincrivel.jpg')
            }
        }
        res.style.textAlingn = 'center'
        res.appendChild(img)
    }
}