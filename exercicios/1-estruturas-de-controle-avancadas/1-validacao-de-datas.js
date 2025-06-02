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

console.log(ehDataValida(31, 1, 2025))
console.log(ehDataValida(29, 2, 1900))
console.log(ehDataValida(29, 2, 2023))
