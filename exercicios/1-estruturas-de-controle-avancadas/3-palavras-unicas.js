// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function getValidString(str) {
    return typeof str === 'string' || str instanceof String
}

function getUniqueWords(str) {
    if (!getValidString(str)) {
        return []
    }

    const palavra = str.trim().toLowerCase().split(/\s+/)
    const palavrasUnicas = []

    palavra.forEach((palavra) => {
        if (palavra && !palavrasUnicas.includes(palavra)) {
            palavrasUnicas.push(palavra)
        }
    })

    return palavrasUnicas
}

console.log(getUniqueWords('olá olá mundo mundo'))
