function contar() {
    // Criando as variáveis:
    var ini = document.getElementById('txtini').value
    var fim = document.getElementById('txtfim').value
    var pas = document.getElementById('txtpas').value
    var res = document.querySelector('div.cartao__resultado')

    // Verificando se algum dados está faltando:
    if (ini.length == 0 || fim.length == 0 || pas.length == 0) {
        res.innerHTML = '[ERRO] Faltam dados!'
    } else {

        // Transformando os valores das variáveis em números:
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(pas)

        // Em caso de passo = 0:
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1.')
            p = 1
        }
        if (i < f) {

            // Contagem crescente:
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }

        } else {

            // Contagem decrescente:
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }

        }
        res.innerHTML += `\u{1f3c1}`
    }
}