// Criando as variáveis:
let num = document.querySelector('input#ifnum')
let lista = document.querySelector('select#iflista')
let res = document.querySelector('div.cartao__resultado')
let valores = []

// Verificando se o número digitado está entre 1 e 100:
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Verificando se o número digitado já existe dentro do vetor:
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value)) // Adiciona um elemento ao vetor
        let item = document.createElement('option') // Cria o option que daqual será adicionado o item
        item.text = `Valor ${num.value} adicionado.` // Cria o valor do option
        lista.appendChild(item) // Adiciona o item a lista dentro do select (feedback visual)
        res.innerHTML = '' // Apaga o resultado quando adicionado um novo número ao vetor
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Apaga o valor dentro da caixa do input:number
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.`
    }
}