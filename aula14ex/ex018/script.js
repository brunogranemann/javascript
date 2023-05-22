function tabuada() {
    // Criando as variáveis:
    let num = document.getElementById('txtn').value
    let tab = document.getElementById('seltab')
    
    // Verificando se o campo está preenchido e transformando a variável em valor númerico:
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num)

        // Limpando a tabuada anterior:
        tab.innerHTML = ''
        
        // Gerando a tabuada:
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}` //Adicionando value ao option (sem uso para o javascript, apenas para outras linguagens)
            tab.appendChild(item)
        }

    }
}