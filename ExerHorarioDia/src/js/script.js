function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = './src/img/manha.jpg'
        document.body.style.background = '#7f9fb4'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = './src/img/tarde.jpg'
        document.body.style.background = '#b6d1a8'
    }else{
        //Boa noite
        img.src = './src/img/noite.jpg'
        document.body.style.background = '#142a41'
    }
}
