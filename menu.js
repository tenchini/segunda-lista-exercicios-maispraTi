const prompt = require('prompt-sync')()

function mostrarMenu() {
    console.log(`
=== MENU DE EXERCÍCIOS ===
1. Validação de Datas
2. Jogo de Adivinhação
3. Palavras Únicas
4. Fatorial Recursivo
5. Debounce
6. Memorization
7. Mapeamento e Ordenação
8. Agrupamento por Propriedade
9. Conversão entre Formatos
0. Sair
`)

    const opcao = prompt('Escolha um exercício (número): ')

    switch (opcao) {
        case '1':
            require('./exercicios/1-estruturas-de-controle-avancadas/1-validacao-de-datas.js')
            break
        case '2':
            require('./exercicios/1-estruturas-de-controle-avancadas/2-jogo-de-adivinhacao.js')
            break
        case '3':
            require('./exercicios/1-estruturas-de-controle-avancadas/3-palavras-unicas.js')
            break
        case '4':
            require('./exercicios/2-funcoes-e-recursao/1-fatorial-recursivo.js')
            break
        case '5':
            require('./exercicios/2-funcoes-e-recursao/2-debounce.js')
            break
        case '6':
            require('./exercicios/2-funcoes-e-recursao/3-memorization.js')
            break
        case '7':
            require('./exercicios/3-arrays-e-objectos-complexos/1-mapeamento-e-ordenacao.js')
            break
        case '8':
            require('./exercicios/3-arrays-e-objectos-complexos/2-agrupamento-por-propriedade.js')
            break
        case '9':
            require('./exercicios/3-arrays-e-objectos-complexos/3-conversao-entre-formatos.js')
            break
        case '0':
            console.log('Saindo...')
            return
        default:
            console.log('Opção inválida!')
    }

    if (opcao !== '0') {
        setTimeout(mostrarMenu, 500)
    }
}

mostrarMenu()
