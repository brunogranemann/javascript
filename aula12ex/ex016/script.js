function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div.cartao__resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro. Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        if (fsex[0].checked) {
            res.innerHTML = `Detectamos um homem com ${idade} anos.`
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-crianca-m.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.jpg')
            }
        } else {
            res.innerHTML = `Detectamos uma mulher com ${idade} anos.`
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-crianca-f.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
        }
        res.appendChild(img)
    }
}