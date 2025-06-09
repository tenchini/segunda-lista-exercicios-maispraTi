function fatorial(n) {
    if (n < 0) {
        throw new Error('O valor tem que ser positivo')
    }
    if (n === 0) {
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(fatorial(-1))
console.log(fatorial(1))
console.log(fatorial(5))
