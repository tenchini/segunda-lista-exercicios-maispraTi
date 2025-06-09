function memoize(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)

        if (cache[key]) {
            console.log('Retornando do cache')
            return cache[key]
        }

        console.log('Calculando resultado')
        const result = fn(...args)
        cache[key] = result
        return result
    }
}

function multiply(a, b) {
    console.log('Multiplicando...')
    return a * b
}

const memoizedMultiply = memoize(multiply)

console.log(memoizedMultiply(2, 3))
console.log(memoizedMultiply(2, 3))
console.log(memoizedMultiply(4, 5))
console.log(memoizedMultiply(4, 5))
