function ehDiaValido(dia) {
    return dia >= 1 && dia <= 31
}

function ehMesValido(mes) {
    return mes >= 1 && mes <= 12
}

function ehAnoValido(ano) {
    let dataAtual = new Date()
    return ano >= 1582 && ano <= dataAtual.getFullYear()
}

function ehBissexto(ano) {
    return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)
}

function ehDataValida(dia, mes, ano) {
    if (ehDiaValido(dia) && ehMesValido(mes) && ehAnoValido(ano)) {
        const mesCom30dias = [4, 6, 9, 11]
        const mesCom31dias = [1, 3, 5, 7, 8, 10, 12]

        let limite

        if (mesCom31dias.includes(mes)) {
            limite = 31
        } else if (mesCom30dias.includes(mes)) {
            limite = 30
        } else if (mes === 2) {
            limite = ehBissexto(ano) ? 29 : 28
        }

        return dia <= limite
    }
    return false
}

function rodarTestes() {
    const anoAtual = new Date().getFullYear()

    const testes = [
        {dia: 31, mes: 1, ano: anoAtual, esperado: true},
        {dia: 30, mes: 4, ano: anoAtual, esperado: true},
        {dia: 29, mes: 2, ano: 2024, esperado: true}, // bissexto
        {dia: 28, mes: 2, ano: anoAtual, esperado: true},
        {dia: 1, mes: 12, ano: anoAtual, esperado: true},
        {dia: 15, mes: 7, ano: 2000, esperado: true},
        {dia: 29, mes: 2, ano: 2000, esperado: true}, // bissexto
        {dia: 29, mes: 2, ano: 2023, esperado: false}, // não bissexto
        {dia: 31, mes: 4, ano: anoAtual, esperado: false}, // abril tem 30 dias
        {dia: 0, mes: 5, ano: anoAtual, esperado: false}, // dia 0 não existe
        {dia: 32, mes: 1, ano: anoAtual, esperado: false}, // dia maior que 31
        {dia: 15, mes: 13, ano: anoAtual, esperado: false}, // mês inválido
        {dia: 10, mes: 10, ano: 1500, esperado: false}, // ano abaixo de 1582
        {dia: 31, mes: 6, ano: anoAtual, esperado: false}, // junho tem 30 dias
        {dia: 29, mes: 2, ano: 1900, esperado: false}, // não bissexto (divisível por 100, mas não por 400)
    ]

    console.log('VALIDAÇÃO DE TESTES: \n')
    testes.forEach((teste, index) => {
        const resultado = ehDataValida(teste.dia, teste.mes, teste.ano)
        if (resultado === teste.esperado) {
            console.log(`Teste ${String(index + 1).padStart(2, 0)}: PASSOU ✅`)
        } else {
            console.log(
                `Teste ${String(index + 1).padStart(2, 0)}: FALHOU ❌ - Entrada: (${teste.dia}, ${teste.mes}, ${
                    teste.ano
                }) | Esperado: ${teste.esperado} | Obtido: ${resultado}`,
            )
        }
    })
}

rodarTestes()
