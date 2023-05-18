function carregar() {
    var texto = window.document.querySelector('div.cartao__texto')
    var foto = window.document.querySelector('img.cartao__foto')
    var data = new Date()
    var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        foto.src = 'imagens/foto-manha.jpg'
        document.body.style.backgroundColor = '#DFEBF2'
    } else if (hora < 18) {
        foto.src = 'imagens/foto-tarde.jpg'
        document.body.style.backgroundColor = '#49A671'
    } else {
        foto.src = 'imagens/foto-noite.jpg'
        document.body.style.backgroundColor = '#171F26'
    }
}